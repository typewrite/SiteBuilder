import React, { ReactChildren, DragEvent } from "react";

interface IDroppable {
    children: ReactChildren;
    onDrop: (e: DragEvent<HTMLElement>) => void;
    onDragOver: (e: DragEvent<HTMLElement>) => void;
}

const Droppable: React.FC<IDroppable> = ({ onDrop, onDragOver, children }) => {
    return (
        <div 
            className="droppable"
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            {children}
        </div>
    )
}
