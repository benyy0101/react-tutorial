import classes from './ProfileForm.module.css';
import {useContext, useRef} from "react";
import AuthContext from "../../store/auth-context";
import {useHistory} from "react-router-dom";

const ProfileForm = () => {
    const useCtx = useContext(AuthContext);
    const newPasswordInputRef = useRef();
    const history = useHistory();
    const submitHandler = async (event) => {

        event.preventDefault();
        const enteredNewPassword = newPasswordInputRef.current.value;

        try {
            const response = await fetch(
                'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCxGfl3R2999B_Ae7M-8V8F9IMBYfR_Dx0',
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            idToken: useCtx.token,
                            password: enteredNewPassword,
                            returnSecureToken: true
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (response.ok) {
                history.replace('/')
            }
        } catch (err) {

        }

    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='new-password'>New Password</label>
                <input type='password' id='new-password' minlength="7" ref={newPasswordInputRef}/>
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;
