import { useState } from "react"
import { useNavigate } from "react-router-dom";

const PaySlip = () => {
    let [name, setName] = useState("");
    let [salary, setSalary] = useState("");

    const nav = useNavigate();

    return(
        <div>
            <input type = "text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type = "number" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />
            <button onClick={() => nav("/ResultPay", {state:{name, salary}})}>Calculate</button>
        </div>
    )
}

export default PaySlip