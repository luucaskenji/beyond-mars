import styled, { css } from 'styled-components';
import mediaQuery from '../../assets/mediaQuery';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://thumbs.gfycat.com/GregariousEssentialElver-size_restricted.gif');
    padding-top: 85px;

    ${mediaQuery} {
        background-image: none;
        background: black;
        height:100%;
    }

    & > span {
        color: white;
        font-size: 0.6rem;
    }
`;

export const DataContainer = styled.div`
    width: 75vw;
    min-width: 760px;
    height: 75vh;
    border-radius: 20px;
    display: flex;

    ${mediaQuery} {
        flex-direction: column;
        align-items: center;
        min-width: 100vw;
    }
`;

export const PhotoContainer = styled.div`
    width: 65%;
    height: 100%;
    background: black;
    display: flex;
    align-items: center;
    border-radius: 20px 0 0 20px;
    
    ${mediaQuery} {
        width: 80%;
        height: 50vh;
        border-radius: 0;
    }
`;

export const Photo = styled.div`
    background-image: ${({ photoUrl }) => `url(${photoUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% auto;
    align-self: stretch;
    flex-grow: 1;
    margin: 0 20px;
`;

export const InfoContainer = styled.div`
    width: 35%;
    height: 100%;
    background: #121212;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    row-gap: 150px;
    padding: 20px 32px;

    ${mediaQuery} {
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
        border-radius: 0;
    }

    span {
        color: white;
        font-size: 0.5rem;
        display: block;

        ${mediaQuery} {
            margin-top: 15px;
        }
    }

    div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        ${mediaQuery} {
            flex-direction: column;
            justify-content: center;
        }
    }

    div:last-child {
        justify-self: center;

        ${mediaQuery} {
            align-self: center;
        }
        
        span {
            margin-bottom: 40px;
            font-size: 0.7rem;

            ${mediaQuery} {
                margin-bottom: 15px;
            }
        }
    }
`;

export const Button = styled.button`
    width: 80px;
    height: 45px;
    font-size: 0.5rem;
    color: white;
    background: #0697FF;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background: #5EADE5;
    }

    ${({ isLoading }) => (
        css`
            background: ${isLoading ? '#BABABA' : '#0697FF'}};
            pointer-events: ${isLoading ? 'none' : 'initial'};
        `
    )} 
`;