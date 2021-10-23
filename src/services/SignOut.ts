import { Auth } from 'aws-amplify';

async function SignOut() {
    try {
        return await Auth.signOut();
    } catch (error) {
        return error;
    }
}

export default SignOut