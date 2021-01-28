import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container } from './HomeStyles';
import Header from '../../components/Header';

export default function Home() {
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
            .then(r => console.log(r.data))
            .catch(() => {
                alert('Erro ao carregar conteúdo');
                history.push('/');
            });
        }
    }, []);

    return (
        <>
            <Header />
            <Container>Home Page</Container>
        </>
    );
}