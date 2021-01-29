import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button } from '../pages/Home/HomeStyles';

export default function PhotoInfo({ shownPhoto, photoDate }) {
    const [isLoading, setIsLoading] = useState(false);
    const [photoLikes, setPhotoLikes] = useState(0);

    useEffect(() => {
        if (shownPhoto) {
            axios
                .get(`${process.env.REACT_APP_BACK_END_URL}/photos/${shownPhoto.id}/likes`, { withCredentials: true })
                .then(r => {
                    setPhotoLikes(r.data.likes);
                })
                .catch(() => alert('Erro ao buscar dados de curtidas da foto'));
        }
    }, [shownPhoto]);

    const likePhoto = () => {
        setIsLoading(true);

        axios
            .post(`${process.env.REACT_APP_BACK_END_URL}/photos/${shownPhoto.id}/likes`, null, { withCredentials: true })
            .then(() => setIsLoading(false))
            .catch(() => {
                setIsLoading(false);
                alert('Erro ao curtir a foto');
            });
    };

    return (
        <>
            <div>
                <Button onClick={likePhoto} isLoading={isLoading}>Curtir</Button>
                <span>{photoLikes === 1 ? `${photoLikes} curtida` : `${photoLikes} curtidas` }</span>
            </div>
            <div>
                <span>Rover: {shownPhoto && shownPhoto.rover.name}</span>
                <span>Data: {photoDate}</span>
            </div>
        </>
    );
}