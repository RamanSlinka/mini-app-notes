import React, {useContext, useState} from 'react';
import {AlertContext} from "./context/alert/alertContext";
import {FirebaseContext} from "./context/firebase/FirebaseContext";

const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = (event) => {
        event.preventDefault()
if(value.trim()){
    firebase.addNote(value.trim()).then(() => {
        alert.show(' Note was created', 'success')
    }).catch(() => {
        alert.show(' Ups... WTF ?...', 'danger')
    })

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