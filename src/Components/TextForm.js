import React, { useState } from 'react';


export default function TextForm(props) {
    const convertUp = () => {
        setText(text.toUpperCase());

    }
    const convertLow = () => {
        setText(text.toLowerCase());

    }
    const convertSen = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1));

    }
    const convertCl = () => {
        setText(" ");

    }
    const convertCopy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
 

    return (
        <>
            <div className="container my-5" >
                <h2>{props.heading}</h2>
                <textarea placeholder='Enter Text' value={text} onChange={handleOnChange} className="form-control my-4" id="myBox" rows="8"></textarea>
                <button className='btn btn-primary' onClick={convertUp}>Convert Above Text Into Upper case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertLow}>Convert Above Text Into Lower case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertSen}>Convert Above Text Into Sentence case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertCopy}>Copy text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertCl}>cleartext</button>
            </div>

            <div className="container my-4">
                <h2>Counter</h2>
                <p> {text===''?0:text.split(" ").length} words And {text.length} characters And {text.split(".").length - 1} Lines</p>
                <h2>Read Time</h2>
                <p>You can read it in {0.008 * text===''?0:text.split(" ").length} minuts at slow speed</p>
                <p>You can read it in {text===''?0:text.split(" ").length} minuts at high speed</p>
                <h2 >Preview</h2>
                <p>{text}</p>


            </div>

        </>
    )
}
