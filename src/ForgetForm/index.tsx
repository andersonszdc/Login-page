import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormInput, FormSubmit } from '../styles/global';
import { Auth } from 'aws-amplify';

const WrapperForm = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    
    a {
        color: #16D3E4;
        text-decoration: none;
    }

    .return_login {
        display: flex;
        gap: 8px;
        font-size: 14px;
        font-family: 'Roboto';
    }

    h1 {
        font-weight: 700;
        font-size: 24px;
    }
`

const ForgetForm: React.FC = () => {

    const [account, setAccount] = useState({
        username: '',
    })

    const handleChange = (e: any) => {

        const {name, value} = e.target

        setAccount({
            ...account,
            [name]: value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const res = await Auth.forgotPassword(account.username)

        console.log(res)
    }

    return (
            <WrapperForm onSubmit={handleSubmit}>
                <h1>Resetar senha</h1>
                <FormInput type="text" onChange={handleChange} value={account.username} name="username" placeholder="username" />
                <FormSubmit type="submit" value="Enviar código" />
                <p className="return_login">
                    <Link  to="/">Voltar para o login</Link>
                </p>
            </WrapperForm>
    );
}

export default ForgetForm;