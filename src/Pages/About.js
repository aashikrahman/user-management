import React, { useState } from "react";
import Accordion from "../Components/Accordion";

function About() {

    const [openIndex, setOpenIndex] = useState(null);

    const handleOpentoggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    }
    return (
        <>
            <div className="container">
                <h2>About US</h2>
                <Accordion />
            </div>
        </>
    );
}

export default About;
