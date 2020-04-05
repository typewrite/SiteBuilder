import React, { ReactChildren, useState, useRef } from "react";

interface CollapseProps {
    isOpen: boolean;
    children: ReactChildren;
}

enum CollapseStates {
    collapse="collapse",
    collapsing="collapsing",
    collapsed="collapse show",
}

const Collapse: React.FC<CollapseProps> = ({ isOpen, children }) => {

    const elementRef = useRef(null);
    
    return (
        <div ref={elementRef} className="collapse">
            {children}
        </div>
    );
}
