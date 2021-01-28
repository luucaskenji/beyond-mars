import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://thumbs.gfycat.com/GregariousEssentialElver-size_restricted.gif');
    padding-top: 85px;
`;

export const DataContainer = styled.div`
    width: 75vw;
    min-width: 760px;
    height: 75vh;
    border-radius: 20px;
    display: flex;
`;

export const PhotoContainer = styled.div`
    width: 65%;
    height: 100%;
    background: black;
    display: flex;
    align-items: center;
    border-radius: 20px 0 0 20px;
`;

export const InfoContainer = styled.div`
    width: 35%;
    height: 100%;
    background: #121212;
    border-radius: 0 20px 20px 0;
`;

export const Photo = styled.div`
    background-image: ${({ photoUrl }) => `url(${photoUrl})`};
    align-self: stretch;
    flex-grow: 1;
    margin: 0 20px;
`;