import React from 'react';
import { useNavigate } from 'react-router';
import SignOut from '../services/SignOut';
import AmplifyClass from 'aws-amplify';
import { FormSubmit } from '../styles/global';
import styled from 'styled-components';

const WrapperDashboard = styled.div`
    display: flex;
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
`

const Dashboard: React.FC = () => {

    const navigate = useNavigate()

    const HandleSignOut = async (e: any) => {
        e.preventDefault()

        await SignOut()
        navigate('/')

    }

    AmplifyClass.Auth.user? console.log(AmplifyClass.Auth.user) : console.log('user inexistente')

    return (
        <WrapperDashboard>
            <FormSubmit type="submit" value="Sair" onClick={HandleSignOut} />
        </WrapperDashboard>
  );
}

export default Dashboard;