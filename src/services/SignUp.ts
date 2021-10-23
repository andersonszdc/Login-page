import { Auth } from 'aws-amplify'

interface SignUpProps {
    username: string,
    password: string,
    email: string,
    phone_number: string
}

async function SignUp({username, password, email, phone_number}: SignUpProps) {
    try {
        const user = Auth.signUp({
            username,
            password,
            attributes: {
                email,
                phone_number
            }
        })
        return user
    } catch (error) {
        console.log('error signing up', error)
    }
}

export default SignUp