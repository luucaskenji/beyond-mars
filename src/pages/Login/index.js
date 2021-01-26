import React from 'react';
import { Container, InputContainer } from './LoginStyles';

export default function Login() {
    return (
        <Container>
            <InputContainer>
                <h1>Além de Marte</h1>
                <span>Bem vindo! 🚀</span>

                <form>
                    <input placeholder="Nome" />
                    <button>Entrar</button>
                </form>
            </InputContainer>
        </Container>
    );
}