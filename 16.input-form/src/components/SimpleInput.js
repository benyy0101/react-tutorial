import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset:resetNameInput,
    } = useInput(value => {
        return value.trim() !== '';
    });

    const {
        value: enteredEmail,
        isValid:enteredEmailIsValid,
        hasError:emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput( value=>{
        return value.includes('@') && value.includes('.');
    });

    // //Name States
    // const [enteredName, setEnteredName] = useState('');
    // // 이 state를 통해서 유저가 타입을 시작했는지 볼수 있음
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    // //Email States
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    // //Name Validation States
    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    // //Email Validation States
    // const enteredEmailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.');
    // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;


    //Form Validation States
    let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // const nameInputChangeHandler = event => {
    //     setEnteredName(event.target.value);
    // }
    //
    // const nameInputBlurHandler = event => {
    //     setEnteredNameTouched(true);
    // }

    // const emailInputChangeHandler = event => {
    //     setEnteredEmail(event.target.value);
    // }
    //
    // const emailInputBlurHandler = event => {
    //     setEnteredEmailTouched(true);
    // }

    const formSubmissionHandler = event => {
        // 한번만 볼꺼면 Ref가 유리하고, 타이핑마다 보고 싶으면 useState가 유리
        event.preventDefault();
        // setEnteredNameTouched(true);
        // setEnteredEmailTouched(true);
        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }
        //Clearing the boxes
        resetNameInput();
        resetEmailInput();
    }
    const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';

    const emailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}/>
                {nameInputHasError && <p className="error-text">Name must not be empty!</p>}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor='email'>Email</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}/>
                {emailInputHasError && <p className="error-text">Not a valid Email address!</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
