import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../../contexts/UserContext';
import { Container, InputContainer, Button } from './LoginStyles';

export default function Login() {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const { setUserName } = useContext(UserContext);
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        setLoading(true);

        if (name.length < 2) {
            setLoading(false);
            return alert('O nome de usuário deve ter ao menos dois caracteres');
        }

        axios
            .post('http://localhost:4000/users', { name }, { withCredentials: true })
            .then(r => {
                setLoading(false);
                setUserName(r.data.name);
                history.push('/home');
            })
            .catch(() => {
                setLoading(false);
                alert('Houve um problema ao fazer o login. Tente novamente mais tarde.'
            )});
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
                    <Button isLoading={loading} >
                        { loading ? 'Carregando...' : 'Entrar' }
                    </Button>
                </form>
            </InputContainer>
        </Container>
    );
}