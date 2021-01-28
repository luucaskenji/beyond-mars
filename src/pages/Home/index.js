import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, DataContainer, PhotoContainer, InfoContainer } from './HomeStyles';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { PhotosContext } from '../../contexts/PhotosContext';
import Header from '../../components/Header';

export default function Home() {
    const { photos, setPhotos } = useContext(PhotosContext);
    const history = useHistory();

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        let mostRecentDate;

        axios
            .get(`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${apiKey}`)
            .then(r => {
                mostRecentDate = r.data.photo_manifest.max_date;
                _getPhotos();
            })
            .catch(() => {
                alert('Erro ao carregar conteúdo');
                history.push('/');
            }); 
        
        const _getPhotos = () => {
            axios
                .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${mostRecentDate}&api_key=${apiKey}`)
                .then(r => {
                    const photos = r.data.photos.map(p => {
                        return {
                            data: p,
                            userHasViewed: false
                        };
                    });

                    setPhotos(photos);
                })
                .catch(() => {
                    alert('Erro ao carregar conteúdo');
                    history.push('/');
                });
            }
    }, []);

    return (
        <>
            <Header />
            <Container>
                <DataContainer>
                    <PhotoContainer>
                        <div><AiOutlineArrowLeft color='white' size='50px' /></div>
                        <Photo></Photo>
                        <div><AiOutlineArrowRight color='white' size='50px' /></div>
                    </PhotoContainer>
                    <InfoContainer></InfoContainer>
                </DataContainer>
            </Container>
        </>
    );
}