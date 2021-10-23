import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from '../services/SignIn';
import  {useNavigate} from 'react-router-dom'
import { FormInput, FormSubmit } from '../styles/global';
import AmplifyClass from 'aws-amplify';

const WrapperForm = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    
    a {
        color: #16D3E4;
        text-decoration: none;
    }

    h1 {
        font-weight: 700;
        font-size: 24px;
    }

    .form_reset {
        display: flex;
        justify-content: right;
        font-size: 14px;
        font-family: 'Roboto';
    }

    .form_create {
        display: flex;
        gap: 8px;
        font-size: 14px;
        font-family: 'Roboto';
    }
`

const LoginForm: React.FC = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e: any) => {

        const {name, value} = e.target

        setLogin({
            ...login,
            [name]: value
        })
    }

    const handleSubmit = async (e: any) => {

        e.preventDefault()

        const res = await SignIn(login)
        AmplifyClass.Auth.user? navigate('/dashboard') : console.log(res)

    }

    useEffect(() => {

        console.log(AmplifyClass.Auth?.user)

    },[])

    return (
        <div>
            <WrapperForm onSubmit={handleSubmit}>
                <h1>Login</h1>
                <FormInput type="text" onChange={handleChange} value={login.username} name="username" placeholder="username" />
                <FormInput type="password" onChange={handleChange} value={login.password} name="password" placeholder="password" />
                <p className="form_reset">
                    <Link  to="forget">Esqueceu a senha?</Link>
                </p>
                <FormSubmit type="submit" value="Entrar" />
                <p className="form_create">
                    Sem acesso ainda?
                    <Link  to="create">Crie uma conta</Link>
                </p>
            </WrapperForm>
        </div>
    );
}

export default LoginForm;