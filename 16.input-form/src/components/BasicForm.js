import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    //custom hook for lastName
    const {
        value: enteredLastname,
        isValid:lastnameIsValid,
        hasError:lastnameHasError,
        valueChangeHandler:lastnameChangeHandler,
        inputBlurHandler:lastnameBlurHandler,
        reset:lastnameReset
    } = useInput(value =>{
        return value.trim() !== '';
    })
    //custom hook for firstName
    const {
        value: enteredFirstname,
        isValid:firstnameIsValid,
        hasError:firstnameHasError,
        valueChangeHandler:firstnameChangeHandler,
        inputBlurHandler:firstnameBlurHandler,
        reset:firstnameReset
    } = useInput(value =>{
        return value.trim() !== '';
    })
    //custom hook for Email
    const {
        value: enteredEmail,
        isValid:emailIsValid,
        hasError:emailHasError,
        valueChangeHandler:emailChangeHandler,
        inputBlurHandler:emailBlurHandler,
        reset:emailReset
    } = useInput(value =>{
        return value.includes('@') && value.includes('.');
    })
    //Form Validation
    let formIsValid = false;
    if(emailIsValid && lastnameIsValid && firstnameIsValid){
        formIsValid = true
    }

    const formHandler = event =>{
        event.preventDefault()
        //if one of those is invalid, the form is not going to be submitted
        if (!lastnameIsValid || !firstnameIsValid || !emailIsValid){
            return;
        }
        //Clearing the boxes up
        firstnameReset();
        lastnameReset();
        emailReset();
    }
    //adds css styling when having an invalid input
    const lastnameClasses = lastnameHasError
        ? 'form-control invalid'
        : 'form-control';

    const firstnameClasses = firstnameHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailClasses = emailHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form>
            <div className='control-group'>
                <div className={lastnameClasses}>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text'
                           id='lastName'
                           onChange={lastnameChangeHandler}
                           onBlur={lastnameBlurHandler}
                    />
                    {lastnameHasError && <p className="error-text">Last name cannot be empty!</p>}
                </div>
                <div className={firstnameClasses}>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text'
                           id='firstName'
                           onChange={firstnameChangeHandler}
                           onBlur={firstnameBlurHandler}
                    />
                    {firstnameHasError && <p className="error-text">Last name cannot be empty!</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input type='text'
                       id='email'
                       onChange={emailChangeHandler}
                       onBlur={emailBlurHandler}
                />
                {emailHasError && <p className="error-text">Invalid Email address. Please Check it again!</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
