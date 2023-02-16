import { Link } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react";

export default function SignIn() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(e) {
        e.preventDefault();

        console.log(form);
    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }
    return (
        <>
            <LoginContainer>
                <h1>TrackIt</h1>
                <StyledForm onSubmit={handleSubmit}>
                    <input
                        value={form.email}
                        name="email"
                        type='email'
                        onChange={handleForm}
                        placeholder="email" />
                    <input
                        value={form.password}
                        name="password"
                        type='password'
                        onChange={handleForm}
                        placeholder="senha" />
                    <button type="submit">Entrar</button>
                </StyledForm>
 
                <Link to='/SignUp'>Não tem uma conta? Cadastre-se</Link>
            </LoginContainer>
        </>
    )
}
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
    color: #d4d4d4;
    width: 80vw;
    height: 45px;
    background-color: white;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    ::placeholder{
        font-size: 20px;
        font-family: 'Lexend Deca';
        color:#DBDBDB;
    }
    }
    button{
    width: 80vw;
    height: 45px;
    background-color: #52B6FF;
    border-radius:5px;
    border:none;
    color:white;
    font-size: 20px;
    font-family: 'Lexend Deca';
    }
`
const LoginContainer = styled.div`
    margin: 40vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
        font-family: 'Lexand Deca';
        font-size: 14px;
        margin-top: 25px;
        color:#52B6FF;
        text-decoration: underline;
    }
    h1{
        font-family: 'Playball';
        font-size:69px;
        color:#126BA5;
    }
`