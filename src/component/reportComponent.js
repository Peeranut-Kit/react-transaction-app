import { useContext } from "react";
import DataContext from "../data/DataContext";
import './reportComponent.css';

const ReportComponent = () => {
    const {income, expense} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
    <div>
        <div className="balance-report">
            <h4>Balance</h4>
            <h1>{formatNumber((income-expense).toFixed(2))}</h1>
        </div>
        <div className="report-container">
            <div>
                <h4>Income</h4>
                <h1 className="report income-report">{formatNumber(income)}</h1>
            </div>
            <div>
                <h4>Expense</h4>
                <h1 className="report expense-report">{formatNumber(expense)}</h1>
            </div>
        </div>
    </div>)
}

export default ReportComponent;