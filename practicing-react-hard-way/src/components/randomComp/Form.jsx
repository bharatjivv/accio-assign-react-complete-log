import React, {useState} from 'react';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({firstName, lastName})
        setFirstName('')
        setLastName('')
    }
    return (
        <div>
            Just a Form...
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <br />
                <input type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <br />
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}

export default Form;