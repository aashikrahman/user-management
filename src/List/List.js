import React, { useState } from "react";
import ListItems from "./ListItems";
import taskData from "./Data";
import Tools from "./Tools";

function List() {
    const [filteredItems, setFilteredItems] = useState(taskData);

    const onListchange = (event) => {
        const value = event.target.value;
        const newList = taskData.filter((items) => {
            if (value === "all") {
                return true;
            }
            if (value === "completed") {
                return items.isTrue === false;
            }
            if (value === "progress") {
                return items.isTrue === true;
            } else {
                return false;
            }
        });
        setFilteredItems(newList);
    };

    return (
        <>
            <Tools onAction={onListchange}>
                <div className="container">
                    {filteredItems.map((data, index) => {
                        return (
                            <ListItems
                                key={index}
                                title={data.title}
                                description={data.description}
                                status={data.isTrue}
                            />
                        );
                    })}
                </div>
            </Tools>
        </>
    );
}

export default List;
