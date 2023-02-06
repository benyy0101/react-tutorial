import {useRef, useState} from 'react';
import classes from './AuthForm.module.css';

const AuthForm = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //optional: Validation
        setIsLoading(true);
        let url
        if (isLogin) {
            //##331. Sign in page
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxGfl3R2999B_Ae7M-8V8F9IMBYfR_Dx0'
        } else {
            //##308. Sign up page
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxGfl3R2999B_Ae7M-8V8F9IMBYfR_Dx0'
        }
        try {
            const response = await fetch(url,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredPassword,
                        returnSecureToken: true
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            setIsLoading(false);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
            } else {
                //## 310. Providing Feedback To User
                let errMsg = 'Authentication Failed!';
                // if (data && data.error && data.error.message) {
                //     errMsg = data.error.message;
                // }
                throw new Error(errMsg);
            }
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required ref={passwordInputRef}/>
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending requests...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
