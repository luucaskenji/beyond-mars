import React, { createContext, useState } from 'react';

export const PhotosContext = createContext();

export default function PhotosProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    const [likedPhotosIds, setLikedPhotosIds] = useState([]);
    
    const value = {
        photos,
        setPhotos,
        likedPhotosIds,
        setLikedPhotosIds
    };

    return (
        <PhotosContext.Provider value={value}>
            {children}
        </PhotosContext.Provider>
    );
}