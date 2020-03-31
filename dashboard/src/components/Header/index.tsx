import * as React from "react";
import Navbar from "../Navbar";
import { HeaderProps } from "../../../../models/Components";

const Header: React.FC<HeaderProps> = ({logo, menuItems, otherProps}) => {
    return (
        <header className="d-flex" {...otherProps}>
            <Navbar logo={logo} menuItems={menuItems} />
        </header>
    )
}

export default Header;
