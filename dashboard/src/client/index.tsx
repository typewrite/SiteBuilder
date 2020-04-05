import * as React from "react";
import Header from "../components/Header";

const ClientApp: React.FC = (props) => {
    return (
        <>
            <Header
                logo={{text: "SiteBuilder", href: "#"}}
                menuItems={[
                    {text: "Logout", href: "#"}
                ]}
            />
            {/* <BuilderComponents /> */}
            {/* <BuilderCanvas /> */}
        </>
    )
}

export default ClientApp;
