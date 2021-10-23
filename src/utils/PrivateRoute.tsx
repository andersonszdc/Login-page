import { Navigate, Route } from "react-router-dom"
import LoginForm from "../LoginForm"

interface PrivateRouteProps {
    path: string,
    element: any,
    isAuth: boolean
}

const PrivateRoute = ({path, element, isAuth}: PrivateRouteProps) => {

    if (isAuth === false) {
        return <Route path={path} element={<LoginForm />} />
    } else {

        return <Route path={path} element={element} />
    }

}

export default PrivateRoute