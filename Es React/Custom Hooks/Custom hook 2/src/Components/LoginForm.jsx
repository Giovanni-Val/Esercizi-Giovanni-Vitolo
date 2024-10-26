import { useForm } from './useForm';

export const LoginForm = () => {
    const { formValues, handleInputChange, resetForm } = useForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', formValues);
        resetForm();
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        placeholder='Username'
                        value={formValues.username}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={() => resetForm()}>Reset</button>
        </form>
    );
}
