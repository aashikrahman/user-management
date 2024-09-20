import React, { useState } from "react";

function Accordion({ header, content, onToggle, isOpen }) {
    return (
        <>
            <div className="accordion">
                <div className="accordion-header" onClick={onToggle}>
                    <div className="wrapper">
                        <div> Thitele</div>

                        <div></div>
                    </div>
                </div>
                <div className="accordion-content">
                    <h2>The accordion</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Accordion;
