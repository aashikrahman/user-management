import React from "react";
import ListItems from "./ListItems";

function List() {
    return (
        <>
            <div className="container">
                <ListItems />
                <ListItems />
                <ListItems />
            </div>
        </>
    );
}

export default List;
