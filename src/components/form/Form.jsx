import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import validation from './validation.js';


function Form(props) {
    const [userName, setUserName] = useState('');
    const [ password, setPassword ] = useState('');
    const [errors, setErrors] = useState({});
    const navigate =useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const errors = validation({ userName, password });
        setErrors ( errors );
        if ( Object.keys(errors).length === 0 ) {
            const userData = { userName, password };
            if (props.onLogin (userData)) {
                navigate('/home');
            }
        }  
    }

    
    
    
    
    
    return (
        <div>
            <form/>
        </div>
    
    )
}