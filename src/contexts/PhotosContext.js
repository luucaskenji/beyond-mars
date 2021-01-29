import React, { createContext, useState } from 'react';

export const PhotosContext = createContext();

export default function PhotosProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    
    return (
        <PhotosContext.Provider value={{ photos, setPhotos }}>
            {children}
        </PhotosContext.Provider>
    );
}