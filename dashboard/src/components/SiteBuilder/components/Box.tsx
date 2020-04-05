import React from "react";

interface IBox {
    fullWidth: boolean;
    background: {
        image: string;
        color: string;
        repeat: string;
        sizing: {
            height: string;
            width: string;
        } | "cover" | "contain" | "auto" | "inherit" | "initial";
    }
}
