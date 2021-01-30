import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Button } from '../pages/Home/HomeStyles';
import { PhotosContext } from '../contexts/PhotosContext';

export default function PhotoInfo({ shownPhoto, photoDate }) {
    const [isLoading, setIsLoading] = useState(false);
    const [photoLikes, setPhotoLikes] = useState(0);
    const { likedPhotosIds, setLikedPhotosIds } = useContext(PhotosContext);
    const userHasLiked = shownPhoto && likedPhotosIds.includes(shownPhoto.id);

    useEffect(() => {
        if (shownPhoto) {
            axios
                .get(`${process.env.REACT_APP_BACK_END_URL}/photos/${shownPhoto.id}/likes`, { withCredentials: true })
                .then(r => {
                    setPhotoLikes(r.data.likes);
                })
                .catch(() => alert('Erro ao buscar dados de curtidas da foto'));
        }
    }, [shownPhoto, userHasLiked]);

    const reactToPhoto = () => {
        setIsLoading(true);
        const reaction = userHasLiked ? 'dislikes'  : 'likes';

        axios
            .post(`${process.env.REACT_APP_BACK_END_URL}/photos/${shownPhoto.id}/${reaction}`, null, { withCredentials: true })
            .then(() => {
                setIsLoading(false);

                if (!likedPhotosIds.includes(shownPhoto.id))
                    setLikedPhotosIds([...likedPhotosIds, shownPhoto.id]);
                else {
                    setLikedPhotosIds(likedPhotosIds.filter(id => id !== shownPhoto.id));
                }
            })
            .catch(() => {
                setIsLoading(false);
                alert('Erro ao curtir a foto');
            });
    };

    return (
        <>
            <div>
                <Button onClick={reactToPhoto} isLoading={isLoading} userHasLiked={userHasLiked} >
                    {userHasLiked ? 'Curtiu!' : 'Curtir'}
                </Button>

                <span>{photoLikes === 1 ? `${photoLikes} curtida` : `${photoLikes} curtidas` }</span>
            </div>
            <div>
                <span>Rover: {shownPhoto && shownPhoto.rover.name}</span>
                <span>Data: {photoDate}</span>
            </div>
        </>
    );
}