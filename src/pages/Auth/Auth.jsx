import React, { useState } from "react"
import { useUser } from "../../context/UserContext"

const Auth = () => {
    const { user, login, logout } = useUser()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email) return
        login({ name: email.split("@")[0], email })
    }

    if (user) {
        return (
            <section className='auth background'>
                <div className='container d_flex' style={{ justifyContent: "center" }}>
                    <div className='product' style={{ width: "400px", textAlign: "center", padding: "40px 20px" }}>
                        <h2 className="text-gradient">Welcome back, {user.name}!</h2>
                        <button className='btn-primary mtop' onClick={logout}>Logout</button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className='auth background'>
            <div className='container d_flex' style={{ justifyContent: "center" }}>
                <div className='product' style={{ width: "400px", padding: "40px 20px" }}>
                    <h2 className="text-gradient" style={{ textAlign: "center", marginBottom: "20px" }}>
                        {isLogin ? "Login to your account" : "Create an account"}
                    </h2>
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: "12px", border: "1px solid #E2E8F0", borderRadius: "8px" }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            style={{ padding: "12px", border: "1px solid #E2E8F0", borderRadius: "8px" }}
                        />
                        <button type="submit" className='btn-primary mt-3'>
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>
                    <p style={{ textAlign: "center", marginTop: "20px", cursor: "pointer", color: "#64748B" }}
                        onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Auth
