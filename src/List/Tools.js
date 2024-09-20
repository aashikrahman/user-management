import React from "react";

import { Children } from "react";

function Tools({ onAction, children }) {
    const onlyChild = Children.only(children)
    const count = Children.count(onlyChild.props.children);



    return (
        <>
            <div className="container">
                <div className="toolHeader">

                    <select onChange={onAction}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="progress">Progress</option>
                    </select>
                </div>
                <div className="body"> {children}</div>

                <div className="footer"><p>Total {count} Here</p></div>
            </div>
        </>
    );
}

export default Tools;
