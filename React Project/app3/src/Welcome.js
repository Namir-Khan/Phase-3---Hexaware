import { useLocation, useNavigate } from "react-router-dom"

const Welcome = () => {
    const nav = useNavigate();

    let data = useLocation();
    
    return(
        <>
            <h1>Welcome {data.state.Id}</h1>

            <button onClick={() => nav("/payslip")}>Pay Slip</button>
        </>
    )
}

export default Welcome