import React, { useState } from 'react';
import '../styles/forms.css';
import { useForm } from 'react-hook-form';

function Formulario() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [role, setRole] = useState("");

    const onSubmit = () => {
        alert(`The data you entered was: ${name}, ${surname}, ${email}, ${address}, ${phonenumber}, ${role}`);
        console.log(`The data you entered was: ${name}, ${surname}, ${email}, ${address}, ${phonenumber}, ${role}`)
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                {/* only letters */}
                Name:
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                {/* only letters in this field*/}
                Surname:
                <input type="text" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
                {/*regex: validate data on inputs*/}
                Email:
                <input type="email" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p>Email must be valid</p>}
                Address:
                <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                {/* only numbers */}
                Phone number:
                <input type="text" name="phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                What is your current role?
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option  value="None">None</option>
                        <option  value="Software engineering">Software engineering</option>
                        <option  value="DevOps">DevOps</option>
                        <option  value="Tester">Tester</option>
                        <option  value="QA">QA</option>
                        <option  value="Project Manager">Project Manager</option>
                        <option  value="Cloud architect">Cloud architect</option>
                        <option  value="DBA">DBA</option>
                        <option  value="Intern">Intern</option>
                    </select>
                    {/*this field cannot be empty/unselected*/}

            </label>
        <input type="submit" value="Submit" />
        
        {/*user submits the forms and show "Submit successful"*/}
        </form>
    )
}

export default Formulario;