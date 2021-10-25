import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignUp from '../services/SignUp';
import  {useNavigate} from 'react-router-dom';
import { FormInput, FormSubmit } from '../styles/global';

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

const CreateForm: React.FC = () => {

    const navigate = useNavigate()

    const [account, setAccount] = useState({
        username: '',
        password: '',
        email: '',
        phone_number: ''
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

        const res = await SignUp(account)
        res? navigate('/') : console.log(res)

    }

    return (
            <WrapperForm onSubmit={handleSubmit}>
                <h1>Criar conta</h1>
                <FormInput type="text" onChange={handleChange} value={account.username} name="username" placeholder="username" />
                <FormInput type="password" onChange={handleChange} value={account.password} name="password" placeholder="password" />
                <FormInput type="text" onChange={handleChange} value={account.email} name="email" placeholder="e-mail" />
                <FormInput type="text" onChange={handleChange} value={account.phone_number} name="phone_number" placeholder="celular" />
                <FormSubmit type="submit" value="Criar conta" />
                <p className="return_login">
                    Já tem uma conta?
                    <Link  to="/">Faça login</Link>
                </p>
            </WrapperForm>
    );
}

export default CreateForm;