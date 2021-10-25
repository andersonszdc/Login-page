import LoginForm from './LoginForm';
import GlobalStyle from './styles/global';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ForgetForm from './ForgetForm';
import CreateForm from './CreateForm';
import styled from 'styled-components';
import Dashboard from './Dashboard';
import AmplifyClass from 'aws-amplify';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    .action, .art {
        display: inline-flex;
        justify-content: center;
        min-height: 100vh;
    }
    .art {
        background-color: #453C3C;
    }
`

function RequireAuth({ children, redirectTo }: any) {
    return AmplifyClass.Auth.user ? children : <Navigate to={redirectTo} />;
}

const App = () => (
    <Wrapper>
        <GlobalStyle />
        <BrowserRouter>
            <div className="action">
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/create" element={<CreateForm />} />
                    <Route path="/forget" element={<ForgetForm />} />
                    <Route path="/forget" element={<ForgetForm />} />
                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth redirectTo="/">
                                <Dashboard />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </div>
            <div className="art">
            </div>
        </BrowserRouter>
    </Wrapper>
);

export default App;

