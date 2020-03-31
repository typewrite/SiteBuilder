// Border
export interface BorderProps {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
}

export interface Border {
    (props: BorderProps): string;
}

// theme 
export enum BaseColors {
    primary="primary",
    secondary="secondary",
    success="success",
    danger="danger",
    warning="warning",
    info="info",
    dark="dark",
    light="light",
    muted="muted",
    white="white"
}

export type HexColor = string;

export type ColorTypes = keyof typeof BaseColors & any;

export type ColorTheme = {
    [key in ColorTypes]: HexColor;
};


// Spacing
export interface SpacingProps {
    property: "m" | "p";
    sides: "t" | "b" | "l" | "r" | "x" | "y";
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl";
    size: "0" | "1" | "2" | "3" | "4" | "5" | "auto";
}

export interface Spacing {
    (props: SpacingProps): string;
}






