import React from 'react'

const Login = (props) => {

    const {
    email, 
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
     } = props;

        
    return (
        <section className="login">
            <div className="loginContainer">
                <label>email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg" />
            </div>
        </section>
    )
}

export default Login
