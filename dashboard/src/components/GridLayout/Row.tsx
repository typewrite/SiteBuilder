import React from "react";

interface RowProps {
    children: React.ReactChildren;
}

const Row: React.FC<RowProps> = ({ children }) => (
    <div className="row">
        {children}
    </div>
);

export default Row;
