import Item from "./item";
import './transaction.css';

const Transaction = (props) => {
    const {items} = props
    return (
    <ul className='items-list'>
        {items.map((element) => {
            return <Item {...element} key = {element.id}/>
        })}
    </ul>
    );
  }

export default Transaction;