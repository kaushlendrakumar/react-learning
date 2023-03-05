import { useState } from 'react';
import './CounterForm.css';

function CounterForm() {

    const intialCount = 0;
    const [count, setCount] = useState(intialCount);

    const incrementHandler = () => { 
        setCount(count + 1);
    }

    const decrementHandler = () => {
        setCount((prev) => prev ? count - 1 : prev);
    }

    const countChangeHandler = (event) => {
        setCount(parseInt(event.target.value));
    }

    return (
        <div className="counter-form-container">
            <h3 className="header">Counter App</h3>
            
            <div className="form-wrapper">
                <div className="counter-group">
                    <button  onClick={decrementHandler}>-</button>
                    <input type="number" name="count" value={count} className="counter-input" onChange={countChangeHandler} />
                    <button onClick={incrementHandler}>+</button>
                </div>
            </div>
            {/* <ul>
                <li>Left most button will decrease the item count by 1.</li>
                <li>In the center box you can directly change the quantity(n).</li>
                <li>Right most button will increase the item count by 1.</li>
            </ul> */}
        </div>
    )
}

export default CounterForm;