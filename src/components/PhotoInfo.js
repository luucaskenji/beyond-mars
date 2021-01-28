import React from 'react';

export default function PhotoInfo({ shownPhoto, photoDate }) {
    const likePhoto = () => {

    };

    return (
        <>
            <div>
                <button onClick={likePhoto}>Curtir</button>
                <span>curtidas</span>
            </div>
            <div>
                <span>Rover: {shownPhoto && shownPhoto.rover.name}</span>
                <span>Data: {photoDate}</span>
            </div>
        </>
    );
}