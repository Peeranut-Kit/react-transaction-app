import './form.css';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    const inputAmount = (event) => {
        setAmount(event.target.value)
    }

    useEffect(() => {
        if (amount !==0 && title!==''){
            setFormValid(true)
        }
    }, [title, amount])

    const saveItem = (event) => {
        event.preventDefault();
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount('')
    }

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className = "form-control">
                    <label>Transaction</label>
                    <input type="text" placeholder="Transaction name" onChange={inputTitle} value={title}/>
                </div>
                <div className = "form-control">
                    <label>Amount</label>
                    <input type="text" placeholder="+ Income, - Expense" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!formValid}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormComponent;