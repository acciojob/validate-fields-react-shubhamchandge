import React, { useState } from 'react'
import "../styles/App.css"


const Validate = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [err, seterr] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;

        (name == "username") ? setUsername(value) : setpassword(value);
    }

    const handleClick = () => {
        seterr(false);
        if (!username || !password) { seterr(true) }
    }


    return (
        <div className='container'>
            <div className='username'>
                <lable>Username</lable>
                <input type={"text"} name="username" value={username} onChange={handlechange}></input>
            </div>
            <div className='password'>
                <lable>Password</lable>
                <input type={"password"} name="password" value={password} onChange={handlechange}></input>
            </div>
            {err ? <div id='errorMessage'>
                <p>Both username and password are required.</p>
            </div> : ""
            }

            <div className='btn'>
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Validate