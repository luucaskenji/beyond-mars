import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { UserContext } from '../contexts/UserContext';

export default function Header() {
    const [edit, setEdit] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const { userName } = useContext(UserContext);

    const editName = () => {
        
    }

    return (
        <StyledHeader>
            {
                edit 
                    ? <NameInput
                        onChange={e => setNewUserName(e.target.value)}
                        value={newUserName}
                        onKeyPress={e => e.key === 'Enter' && editName} 
                    />
                    : <span>{`Olá, ${userName}`}</span>
            }

            <div>
                <button onClick={() => setEdit(!edit)}>Editar Nome</button>
                <button>Sair</button>
            </div>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    width: 100vw;
    height: 85px;
    background: #121212;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;
    position: absolute;
    top: 0;
    left: 0;

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

const NameInput = styled.input`
    height: 50px;
    font-family: 'Sarabun', sans-serif;
    font-size: 0.6rem;
    padding-left: 12px;
`;