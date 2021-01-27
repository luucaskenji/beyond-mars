import React, { useState } from 'react';
import axios from 'axios';

import { Container, InputContainer } from './LoginStyles';

export default function Login() {
    const [name, setName] = useState('');

    const signIn = e => {
        e.preventDefault();

        if (name.length < 2) {
            return alert('O nome de usuário deve ter ao menos dois caracteres');
        }

        axios
            .post('http://localhost:4000/users', { name })
            .then(r => console.log(r))
            .catch(err => console.log(err.response));
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