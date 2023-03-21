import './ItemCard.css';
import CounterForm from '../CounterForm/CounterForm';

function ItemCard({itemDetails, incrementHandler, decrementHandler, countChangeHandler}) {

    return (
        <div className="item-container">
            <div className="item-details-container">
                <div className="image-wrapper">
                    {/* <img src={"/Images/ashirwad-data.jpeg"} /> */}
                    <img src={`/Images/${itemDetails.imageName}`} />
                </div>
                <div className="product-name">{itemDetails.productName}</div>
                <div className="price-wrapper">
                    <span className="discount-price">Rs. {itemDetails.offerPrice}</span>
                    <span className="original-price">Rs. {itemDetails.originalPrice}</span>
                    <span className="percentage-off">{itemDetails.offPercentage}% off</span>
                </div>
            </div>
            <div className="item-action-container">
                <div className="quantity-wrapper">
                    {itemDetails.quantity}
                </div>
                <div className="counter-wrapper">
                    <CounterForm 
                        itemDetails={itemDetails} 
                        incrementHandler={incrementHandler}
                        decrementHandler={decrementHandler}
                        countChangeHandler={countChangeHandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;