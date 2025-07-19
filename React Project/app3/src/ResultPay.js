import { useLocation } from "react-router-dom"

const ResultPay = () => {
    let data = useLocation();
    let salary = Number(data.state.salary);
    let bonus = 0;
    if(salary > 5000) {
        bonus = 0.05 * salary;
    } else {
        bonus = 0.1 * salary;
    }

    return(
        <>
            <h1>{data.state.name} Pay Slip</h1>
            <h3>Basic Salary : {salary}</h3>
            <h3>Bonus : {bonus}</h3>
            <h3>Total Salary : {bonus + salary}</h3>
        </>
    )
}

export default ResultPay