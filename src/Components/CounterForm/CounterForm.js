import './CounterForm.css';

function CounterForm({itemDetails, incrementHandler, decrementHandler, countChangeHandler}) {

    return (
        <div className="counter-form-container">
            <div className="form-wrapper">
                <div className="counter-group">
                    <button  onClick={() => decrementHandler(itemDetails)}>-</button>
                    <input type="number" name="count" value={itemDetails.buyingQunaity} className="counter-input" onChange={(event) => countChangeHandler(event, itemDetails)} />
                    <button onClick={() => incrementHandler(itemDetails)}>+</button>
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