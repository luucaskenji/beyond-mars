import styled from 'styled-components';
import mediaQuery from '../../assets/mediaQuery';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://sire-ngcbg-thumbs.fichub.com/FIC_SIRE_Natgeo/390/552/Mars_BigThinker_Mars101~~123290~~~en~mux~~1.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${mediaQuery} {
        justify-content: center;
    }
`;

export const InputContainer = styled.div`
    width: 30%;
    min-width: 220px;
    max-width: 300px;
    margin-left: 120px;
    text-align: center;
    color: white;

    ${mediaQuery} {
        margin-left: 0;
    }

    h1, span {
        font-style: italic;
        font-size: 0.8rem;
    }

    h1 {
        font-size: 1.4rem;
        margin-bottom: 20px;
    }

    input {
        font-family: 'Sarabun', sans-serif;
        font-size: 0.6rem;
        width: 100%;
        height: 45px;
        padding-left: 12px;
        border-radius: 8px;
        margin: 15px 0;
    }
    
    button {
        font-family: 'Sarabun', sans-serif;
        font-size: 0.6rem;
        width: 100%;
        height: 45px;
        background: #0697FF;
        border-radius: 8px;
        cursor: pointer;
        color: white;
    }
`;