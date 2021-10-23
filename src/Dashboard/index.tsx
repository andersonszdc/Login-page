import React from 'react';
import { useNavigate } from 'react-router';
import SignOut from '../services/SignOut';
import AmplifyClass from 'aws-amplify';


const Dashboard: React.FC = () => {

    const navigate = useNavigate()

    const HandleSignOut = async (e: any) => {
        e.preventDefault()

        await SignOut()
        navigate('/')

    }

    AmplifyClass.Auth.user? console.log(AmplifyClass.Auth.user) : console.log('user inexistente')

  return (
      <div>
          dashboard
          <input type="submit" value="Sair" onClick={HandleSignOut} />
          dashboard
      </div>
  );
}

export default Dashboard;