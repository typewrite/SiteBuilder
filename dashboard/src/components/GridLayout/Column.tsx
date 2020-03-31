import React, { ReactChildren } from "react";
import { string } from "prop-types";

enum Breakpoints {
    xs="xs",
    sm="sm",
    md="md",
    lg="lg",
    xl="xl"
}

type BreakpointsType = keyof typeof Breakpoints;

type ColumnBreakpointSpan = {
    [key in BreakpointsType]: React.ReactText;
};

interface Column {
    columnSpan: ColumnBreakpointSpan;
    height: React.ReactText;
}

interface ResponsiveColumn {
    width: [];
    height: [];
}

interface ColumnProps {
    height: number | string;
    columns: Column;
    children: ReactChildren;
}

const Column: React.FC<ColumnProps> = ({ columns, children }) => {
    
    return (
        <div>
            {children}
        </div>
    )
}
