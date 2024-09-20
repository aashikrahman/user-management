import React from "react";
import Label from "./Label";

function ListItems({ title, description, status }) {
    return (
        <>
            <div className="list">
                <h3>{title}</h3>
                <p>{description}</p>
                <Label status={status} />
            </div>
        </>
    );
}
export default ListItems;
