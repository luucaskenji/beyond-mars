import React, { createContext, useState } from 'react';

export const PhotosContext = createContext();

export default function PhotosProvider({ children }) {
    const [photos, setPhotos] = useState([]);

    console.log(photos);
    
    return (
        <PhotosContext.Provider value={{ photos, setPhotos }}>
            {children}
        </PhotosContext.Provider>
    );
}