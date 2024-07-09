import { useState } from "react";

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    });

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    };


    return (
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor="username">Username</label>
                <input name="username" type="text" value={data.username} onChange={handleInputChange}></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" value={data.password} onChange={handleInputChange}></input>
            </div>
            <div>
                <label htmlFor="remember">Remember me</label>
                <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}></input>
            </div>

        </div>
    )

}