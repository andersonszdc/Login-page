import { Auth } from 'aws-amplify'

interface SignInProps {
    username: string,
    password: string
}

async function SignIn ({username, password}: SignInProps) {
    try {
        return await Auth.signIn(username, password)
    } catch (error) {
        return error
    }
}

export default SignIn