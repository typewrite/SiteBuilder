import React, { DragEvent } from "react";
import Draggable from "../Draggable";

interface IBuilderComponents {
    builderComponents: []
}

const BuilderComponents: React.FC<IBuilderComponents> = ({ builderComponents }) => {
    return (
        <div className="container-fluid">
            {builderComponents.map((component: any) => {
                return (
                    <Draggable
                        onDragStart={(e: DragEvent<HTMLElement>) => {
                            e.dataTransfer.setData('name', component.name)
                        }}
                    >
                        {component}
                    </Draggable>
                )
            })}
        </div>
    )
}

export default BuilderComponents;
