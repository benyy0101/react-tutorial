import {useState} from "react";

const useInput = (validateValue)=>{
    //state containing the value in the box
    const [enteredValue, setEnteredValue] = useState('');
    //a flag state indicating whether the user has touched the box
    const [isTouched, setIsTouched] = useState(false);

    //receives a validation function as a parameter
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    //handler that sets the value state
    const valueChangeHandler = event =>{
        setEnteredValue(event.target.value);
    }

    //handler that indicates whether the user selected input box
    const inputBlurHandler = event =>{
        setIsTouched(true);
    }

    //Upon submitting, we want the form to be blank as it was.
    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}
export default useInput;