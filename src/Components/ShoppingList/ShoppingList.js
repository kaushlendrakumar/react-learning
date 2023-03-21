import { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import './ShoppingList.css';

function ShoppingList() {

    const list = [
        {
            id: 1,
            productName: "AASHIRVAAD Svasti Pure Cow Ghee 1 L Tetrapack",
            detailsPageUrl: "https://www.flipkart.com/aashirvaad-svasti-pure-cow-ghee-1-l-tetrapack/p/itmfaff7vmxpnxum?pid=GHEFK6YGK5HUPJTB&lid=LSTGHEFK6YGK5HUPJTBNZDVN0&marketplace=GROCERY&iid=en_KxA9xFQQmSk4JO04WT5LI3GX3SOT05BlSgW0anEJV%2F4Z354%2Fg5Z6J%2BCD2Mw82Vcqf2SIsc1xyerF6sVaZPSPAA%3D%3D",
            productImage: "a",
            originalPrice: 785,
            offerPrice: 665,
            offPercentage: 15,
            quantity: "500 ml",
            maxQuantity: 5,
            imageName: "ashirwad-data.jpeg",
            buyingQunaity: 0
        },
        {
            id: 2,
            productName: "Freedom Refined Sunflower Oil Pouch",
            detailsPageUrl: "https://www.flipkart.com/freedom-refined-sunflower-oil-pouch/p/itm432a4e0401819?pid=EDOFZBSVRXWGQFUG&lid=LSTEDOFZBSVRXWGQFUGJZHOZB&marketplace=GROCERY&iid=c4e86929-0099-4e59-8fa8-65efd2c4b4b8.EDOFZBSVRXWGQFUG.SEARCH",
            productImage: "a",
            originalPrice: 88,
            offerPrice: 83,
            offPercentage: 5,
            quantity: "500 ml",
            maxQuantity: 5,
            imageName: "freedom-sunflower-oil.jpeg",
            buyingQunaity: 0
        },
        {
            id: 3,
            productName: "Fortune Rice Bran Oil Pouch",
            detailsPageUrl: "https://www.flipkart.com/fortune-rice-bran-oil-pouch/p/itmf4796fb506a53?pid=EDOEUHJZKS56TYBX&lid=LSTEDOEUHJZKS56TYBXFI3RMJ&marketplace=GROCERY&iid=c4e86929-0099-4e59-8fa8-65efd2c4b4b8.EDOEUHJZKS56TYBX.SEARCH",
            productImage: "a",
            originalPrice: 199,
            offerPrice: 156,
            offPercentage: 21,
            quantity: "1 L",
            maxQuantity: 5,
            imageName: "fortune-rice-oil.jpeg",
            buyingQunaity: 0
        },
        {
            id: 4,
            productName: "DHARA Refined Rice Bran Oil Pouch",
            detailsPageUrl: "https://www.flipkart.com/dhara-refined-rice-bran-oil-pouch/p/itm298bd96afd034?pid=EDOEU6N55FMGF2Q6&lid=LSTEDOEU6N55FMGF2Q6MM91NN&marketplace=GROCERY&iid=c4e86929-0099-4e59-8fa8-65efd2c4b4b8.EDOEU6N55FMGF2Q6.SEARCH",
            productImage: "a",
            originalPrice: 205,
            offerPrice: 145,
            offPercentage: 28,
            quantity: "1 L",
            maxQuantity: 5,
            imageName: "dhara-sunflower-oli.jpeg",
            buyingQunaity: 0
        }
    ];

    const [masterList, setMasterList] = useState(list);

    const incrementHandler = (selectedItem) => {
        let allItems = masterList;
        let item = allItems.find((i) => selectedItem.id === i.id);
        if(item.buyingQunaity < item.maxQuantity) {
            item.buyingQunaity += 1;
            setMasterList([...allItems]);
        } else {
            alert(`Maximum limit excced! for ${selectedItem.productName}`);
        }
    }

    const decrementHandler = (selectedItem) => {
        let allItems = masterList;
        let item = allItems.find((i) => selectedItem.id === i.id);
        if(item.buyingQunaity){
            item.buyingQunaity -= 1;
            setMasterList([...allItems]);
        }
    }

    const countChangeHandler = (event, selectedItem) => {
        let value = parseInt(event.target.value);
        let allItems = masterList;
        let item = allItems.find((i) => selectedItem.id === i.id);
        if(value <= item.maxQuantity) {
            item.buyingQunaity = value;
            setMasterList([...allItems]);
        } else if(value > item.maxQuantity) {
            alert(`Maximum limit is ${selectedItem.maxQuantity} for ${selectedItem.productName}`);
            item.buyingQunaity = item.maxQuantity;
            setMasterList([...allItems]);
        }
    }

    return (
        <div className="shopping-list-container">
            {
                masterList.map((item, index) => {
                    return(
                        <ItemCard key={item.id} 
                            itemDetails={item} 
                            incrementHandler={incrementHandler}
                            decrementHandler={decrementHandler}
                            countChangeHandler={countChangeHandler}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShoppingList;