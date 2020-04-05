import React, { ReactChildren, DragEvent } from "react";
import './draggable.scss';

export interface IDraggable {
    children: ReactChildren;
    isDraggable?: boolean;
    onDragStart: (e: DragEvent<HTMLElement>) => void;
}

const Draggable: React.FC<IDraggable> = ({
    children,
    isDraggable = true,
    onDragStart
}) => {
    return (
        <div
            className="draggable"
            draggable={isDraggable}
            onDragStart={onDragStart}
        >
            {children}
        </div>
    )
}

export default Draggable;
