import React, { useState, useContext } from 'react';
import axios from 'axios';

import { UserContext } from '../../contexts/UserContext';
import { Container, InputContainer } from './LoginStyles';

export default function Login() {
    const [name, setName] = useState('');
    const { setToken, setUserName } = useContext(UserContext);

    const signIn = e => {
        e.preventDefault();

        if (name.length < 2) {
            return alert('O nome de usuário deve ter ao menos dois caracteres');
        }

        axios
            .post('http://localhost:4000/users', { name })
            .then(r => {
                setUserName(r.data.name);
                setToken(r.data.session.token);
            })
            .catch(() => alert('Houve um problema ao fazer o login. Tente novamente mais tarde.'));
    };

    return (
        <Container>
            <InputContainer>
                <h1>Além de Marte</h1>
                <span>Bem vindo! 🚀</span>

                <form onSubmit={signIn}>
                    <input
                        placeholder="Nome"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <button>Entrar</button>
                </form>
            </InputContainer>
        </Container>
    );
}