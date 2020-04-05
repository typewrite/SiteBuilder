import React, { ReactChildren } from "react";
import { string } from "prop-types";
import { classnames } from "../../utils/classnames";

enum Breakpoints {
    xs="xs",
    sm="sm",
    md="md",
    lg="lg",
    xl="xl"
}

type Breakpoint = keyof typeof Breakpoints;

type ColumnBreakpointSpan = {
    [key in Breakpoint]: React.ReactText;
};

interface Column {
    cols: ColumnBreakpointSpan;
    height: React.ReactText;
}

interface ColumnProps {
    columns: Column;
    children: ReactChildren;
}

const Column: React.FC<ColumnProps> = ({ columns, children }) => {
    const cssClasses = Object.keys(columns.cols).map((breakpoint: string) => {
        const bp = breakpoint as Breakpoint;
        let classStr = 'col';
        classStr += bp === Breakpoints.xs ? `-${columns.cols[bp]}` : `-${bp}-${columns.cols[bp]}`;
        return classStr;
    }).join(" ").trim();

    const customStyles = !!columns.height ? {height: columns.height} : {};

    return (
        <div 
            className={cssClasses}
            style={customStyles}
        >
            {children}
        </div>
    )
}

export default Column;
