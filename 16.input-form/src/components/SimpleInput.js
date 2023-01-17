import {useRef, useState} from "react";

const SimpleInput = (props) => {

    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    // 이 state를 통해서 유저가 타입을 시작했는지 볼수 있음
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const nameInputChangeHandler = event =>{
        setEnteredName(event.target.value);
    }

    const nameInputBlurHandler = event =>{
        setEnteredNameTouched(true);
        if(enteredName.trim() === ''){
            setEnteredNameIsValid(false);
            return;
        }
    }
    const formSubmissionHandler = event =>{
        // 한번만 볼꺼면 Ref가 유리하고, 타이핑마다 보고 싶으면 useState가 유리

        event.preventDefault();

        setEnteredNameTouched(true);

        if(enteredName.trim() === ''){
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true)
        console.log(enteredName);

        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue)
    }
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid
        ? 'form-control invalid'
        : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    ref = {nameInputRef}
                    type='text'
                    id='name'
                    onChange={nameInputChangeHandler}
                    onBlur = {nameInputBlurHandler}/>
                {nameInputIsInvalid && <p className="error-text">Name must not be empty!</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
