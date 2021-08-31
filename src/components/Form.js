import React, {useContext, useState} from 'react';
import {AlertContext} from "./context/alert/alertContext";

const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = (event) => {
        event.preventDefault()
if(value.trim()){
    //...
    alert.show(' Note was created', 'success')
    setValue('')
} else {
    alert.show(' Enter title note')
}


    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="enter name note"
                    value={value}
                    onChange={(event) =>
                        setValue(event.target.value)}
                />
            </div>
        </form>
    );
};

export default Form;