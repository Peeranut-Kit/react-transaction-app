import Transaction from "./component/transaction";
import FormComponent from "./component/form";
import './App.css';
import {useState, useEffect} from 'react';
import DataContext from "./data/DataContext";
import ReportComponent from "./component/reportComponent";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  const designData = {color: 'red', textAlign: 'center'};
  const Title = () => <h1 style = {designData}>บัญชีรายรับ - รายจ่าย</h1>
  
  const initData = [
    {id:1, title:"ค่าเช่าคอนโด", amount:-5000},
    {id:2, title:"เงินเดือน", amount: 50000}
  ]

  const [items, setItems] = useState(initData)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  useEffect(()=>{
    const amount_list = items.map(e=>e.amount)
    const income = amount_list.filter(e=>e>0).reduce((prev,current) => prev + current, 0).toFixed(2)
    const expense = Math.abs(amount_list.filter(e=>e<0).reduce((prev,current) => prev + current, 0)).toFixed(2)
    setReportIncome(income)
    setReportExpense(expense)
  },[items])

  const statementData = {
    income: reportIncome,
    expense: reportExpense
  }
  
  return (
    <DataContext.Provider value={statementData}>
      <div className='container'>
        <Title/>
        <Router>
        <div>
          <ul className="horizontal-menu">
            <li><Link to="/">Activity</Link></li>
            <li><Link to="/insert">New Transaction</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact>
              <ReportComponent/>
            </Route>
            <Route path="/insert">
              <FormComponent onAddItem={onAddNewItem}/>
              <Transaction items = {items}/>
            </Route>
          </Switch>
        </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
