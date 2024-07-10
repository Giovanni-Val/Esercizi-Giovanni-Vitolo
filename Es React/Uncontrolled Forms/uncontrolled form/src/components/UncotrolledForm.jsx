export function Login() {

    function handleLogin(event) {
        event.preventDefault();

        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            remember: formData.get("remember") === "on" ? true : false
        };

        console.log(data);
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text"></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password"></input>
                </div>
                <div>
                    <label htmlFor="remember">Remember me</label>
                    <input name="remember" type="checkbox"></input>
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </div>
            </form>

        </div>
    )

} 