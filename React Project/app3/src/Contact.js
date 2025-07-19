import { useNavigate } from "react-router-dom"

const Contact = () => {
    const nav = useNavigate();

    return(
        <>
            <h1>Contact</h1>
            <button onClick={() => nav("/login")}>Sign In</button>
        </>
    )
}

export default Contact