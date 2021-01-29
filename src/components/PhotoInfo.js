import React, { useState } from 'react';
import axios from 'axios';

import { Button } from '../pages/Home/HomeStyles';

export default function PhotoInfo({ shownPhoto, photoDate }) {
    const [isLoading, setIsLoading] = useState(false);

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
                <span>curtidas</span>
            </div>
            <div>
                <span>Rover: {shownPhoto && shownPhoto.rover.name}</span>
                <span>Data: {photoDate}</span>
            </div>
        </>
    );
}