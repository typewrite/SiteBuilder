import React, {useState} from "react";
import { HeaderProps } from "../../../../models/Components";
import { MenuItems } from "./MenuItems";
import { classnames } from "../../utils/classnames";

enum CollapseStates {
    collapse="collapse",
    collapsing="collapsing",
    show="collapse show",
}

const Navbar: React.FC<HeaderProps> = ({logo, menuItems}) => {
    const [collapseState, setCollapse] = useState(CollapseStates.collapse);
    const { src, text, otherProps } = logo;
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href={logo.href}>
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
                onClick={() => {
                    if (collapseState === CollapseStates.collapse) {
                        setCollapse(CollapseStates.collapsing);
                        setTimeout(() => {
                            setCollapse(CollapseStates.show);
                        }, 2);
                    } else {
                        setCollapse(CollapseStates.collapse);
                    }
                }}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={classnames(["navbar-collapse", collapseState])}>
                <MenuItems menuItems={menuItems} />
            </div>
        </nav>
    );
}

export default Navbar;
