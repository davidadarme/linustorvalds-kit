import React from 'react';
import forms from '../styles/forms.css';

function formulario() {
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default formulario;