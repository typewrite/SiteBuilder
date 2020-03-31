import React, { ReactChildren } from "react";
import { classnames } from "../../utils/classnames";

enum SiteWidths {
    fullWidth="fullWidth",
    contained="contained"
}

type SiteWidth = keyof typeof SiteWidths;

interface LayoutProps {
    siteWidth: SiteWidth;
    containerWidth?: number | string;
    children: ReactChildren;
}

const Layout: React.FC<LayoutProps> = ({ siteWidth, containerWidth, children }) => {
    let customStyles = {};
    if (!!containerWidth) {
        customStyles = {maxWidth: `${parseInt(containerWidth as string)}px`}
    }
    return (
        <div 
            className={classnames([
                {"container": siteWidth === SiteWidths.contained},
                {"container-fluid": siteWidth === SiteWidths.fullWidth}
            ])}
            style={customStyles}
        >
            {children}
        </div>
    );
}

export default React.memo(Layout);
