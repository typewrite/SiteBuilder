import React, {useState} from "react";
import { MenuProps, HeaderProps } from "../../../../models/Components";
import { MenuItems } from "./MenuItems";



const Navbar: React.FC<HeaderProps> = ({logo, menuItems}) => {
    const [collapsed, setCollapse] = useState(false);
    const { src, text, otherProps } = logo;
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                {!!logo.src ? <img src={src} alt={text} {...otherProps} /> : logo.text }
            </a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarText" 
                aria-controls="navbarText" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                onClick={() => setCollapse(!collapsed)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <MenuItems menuItems={menuItems} />
            </div>
        </nav>
    );
}

export default Navbar;
