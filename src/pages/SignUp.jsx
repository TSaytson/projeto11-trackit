import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SignUp() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
        navigate('/');

    }

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <LoginContainer>
                <h1>TrackIt</h1>
                <StyledForm onSubmit={handleSubmit}>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                        type='email'
                        placeholder="email" />
                    <input
                        name="password"
                        value={form.password}
                        onChange={handleForm}
                        type='password'
                        placeholder="senha" />
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                        type='text'
                        placeholder='nome' />
                    <input
                        name="image"
                        value={form.image}
                        onChange={handleForm}
                        type='url'
                        placeholder='foto' />
                    <button type='submit'>Cadastrar</button>
                </StyledForm>
                <Link to='/'>Já tem uma conta? Faça login!</Link>
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