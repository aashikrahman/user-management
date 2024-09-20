import React from "react";

function Label({ status }) {
    console.log(status);

    const style = status && true ? "red" : "green";

    return (
        <>
            <div className="label" style={{ backgroundColor: style }}>
                <p> {status && true ? "Active" : "Completed"}</p>
            </div>
        </>
    );
}

export default Label;
