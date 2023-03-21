import './Header.css';

function Header() {

    return (
        <div className="header">
            <div className="logo-wrapper">
                Counter App
            </div>
            <div>
                <button type="button">CART (0)</button>
            </div>
        </div>
    )
}

export default Header;