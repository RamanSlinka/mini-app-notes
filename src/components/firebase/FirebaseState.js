import React, {useReducer} from 'react';
import {FirebaceContext} from './firebaseContext'
import {firebaseReducer} from "./firebaseReducer";
import {ADD_NOTE, REMOTE_NOTE, SHOW_LOADER} from "../context/types";
import axios from "axios";

const url = process.env.REACT_APP_DB_URL

const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }


    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})
    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)

    }

    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const payload = {
                ...note,
                id: res.data.name
            }
            dispatch({
                type: ADD_NOTE,
                payload
            })

        } catch (e) {
throw  new Error(e.message)
        }

    }


    const removeNote = async  id => {
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({
            type: REMOTE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaceContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaceContext.Provider>
    );
};

export default FirebaseState;