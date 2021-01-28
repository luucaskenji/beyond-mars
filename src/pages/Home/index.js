import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { PhotosContext } from '../../contexts/PhotosContext';
import Header from '../../components/Header';
import {
    Container,
    DataContainer,
    PhotoContainer,
    InfoContainer,
    Photo
} from './HomeStyles';

export default function Home() {
    const [shownPhotoIndex, setShownPhotoIndex] = useState(1);
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
                .then(r => setPhotos(r.data.photos))
                .catch(() => {
                    alert('Erro ao carregar conteúdo');
                    history.push('/');
                });
            }
    }, []);

    const shownPhoto = photos[shownPhotoIndex];
    let photoDate;
    if (shownPhoto) {
        photoDate = shownPhoto.earth_date;
        const splitted = photoDate.split('-');

        photoDate = `${splitted[2]}/${splitted[1]}/${splitted[0]}`;
    }

    return (
        <>
            <Header />
            <Container>
                <DataContainer>
                    <PhotoContainer>
                        <div><AiOutlineArrowLeft color='white' size='50px' cursor='pointer' /></div>
                        <Photo photoUrl={shownPhoto && shownPhoto.img_src}></Photo>
                        <div><AiOutlineArrowRight color='white' size='50px' cursor='pointer' /></div>
                    </PhotoContainer>
                    <InfoContainer>
                        <div>
                            <button>Curtir</button>
                            <span>curtidas</span>
                        </div>
                        <div>
                            <span>Rover: {shownPhoto && shownPhoto.rover.name}</span>
                            <span>Data: {photoDate}</span>
                        </div>
                    </InfoContainer>
                </DataContainer>
            </Container>
        </>
    );
}