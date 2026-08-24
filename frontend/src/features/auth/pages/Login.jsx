import React, { useState } from 'react'
import '../auth.form.scss'
import {useAuth} from '../hooks/useAuth.js'
import { useNavigate } from 'react-router'
const Login = () => {
    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            await handleLogin(email, password)
            navigate('/', { replace: true })
        } catch (error) {
            setError(error.response?.data?.message || 'Unable to log in. Please try again.')
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

  return (
    <main>
        <div className = "form-container">
            <h1>Login</h1>
            {error && <p role="alert">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className = "input-group">
                    <label htmlFor = "email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type = "email" id = "email" name = "email" required placeholder="Enter your email" />
                </div>
                <div className = "input-group">
                    <label htmlFor = "password">Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type = "password" id = "password" name = "password" required placeholder="Enter your password" />
                </div>
                <button className = "button primary-button">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    </main>
  )
}

export default Login