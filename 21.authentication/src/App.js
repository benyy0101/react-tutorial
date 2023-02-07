import {Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import React, {useContext, Suspense} from "react";
import AuthContext from "./store/auth-context";

const HomePage = React.lazy(()=>{
    return import('./pages/HomePage');
})

function App() {

    const authCtx = useContext(AuthContext);

    return (
        <Suspense fallback={
            <div className='centered'>Loading...</div>
        }>
            <Layout>
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                    {/* 316. Protecting auth page*/}
                    {!authCtx.isLoggedIn && <Route path='/auth'>
                        <AuthPage/>
                    </Route>}
                    {authCtx.isLoggedIn && <Route path='/profile'>
                        <UserProfile/>
                    </Route>}

                    <Route path='*'>
                        <Redirect to='/'/>
                    </Route>

                </Switch>
            </Layout>
        </Suspense>
    );
}

export default App;
