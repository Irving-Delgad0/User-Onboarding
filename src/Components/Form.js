import React from "react"

const Form = (props) => {
    const {change, submit, errors} = props;
    const {username, email, password, tos} = props.values

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <h1>Users</h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>

            <form onSubmit={onSubmit}>
                <label>Name:
                    <input 
                        name="username"
                        type="text"
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        name="password"
                        type="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input 
                        name="tos"
                        type="checkbox"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input 
                    type="submit"
                    value="Add User"
                />
            </form>
        </div>
    )
}

export default Form