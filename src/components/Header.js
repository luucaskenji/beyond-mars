import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../contexts/UserContext';

export default function Header() {
    const { userName } = useContext(UserContext);

    return (
        <StyledHeader>
            <span>{`Olá, ${userName}`}</span>

            <div>
                <button>Editar Nome</button>
                <button>Sair</button>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    height: 85px;
    background: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;

    button {
        font-family: 'Sarabun', sans-serif;
        font-size: 0.6rem;
        color: white;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    button:last-child {
        margin-left: 70px;
    }
`;