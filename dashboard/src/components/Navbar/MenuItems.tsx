import React from "react";
import { MenuProps, MenuItem as MenuItemProps } from "../../../../models/Components";
import { classnames } from "../../utils/classnames";

export const MenuItem: React.FC<MenuItemProps> = ({ text, href = "#", subMenu = [], otherProps }) => {
    return (
        <li className={classnames(["nav-item", {"dropdown": !!subMenu.length}])}>
            <a 
                className="nav-link dropdown-toggle" 
                href={href} 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
                {...otherProps}
            >
                    {text}
            </a>
            {!!subMenu.length && (
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {subMenu.map(({ text, href, otherProps }: MenuItemProps) => 
                        (<a className="dropdown-item" href={href || "#"} {...otherProps}>{text}</a>)
                    )}
                </div>
            )}
        </li>
    )
}

export const MenuItems: React.FC<MenuProps> = ({ menuItems = [], otherProps }) => {
    return (
        <ul className="navbar-nav mr-auto" {...otherProps}>
            {menuItems.map((item: MenuItemProps) => (
                <MenuItem {...item} />
            ))}
        </ul>
    );
}
