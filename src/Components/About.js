import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: 'white',
        color: "black"
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");
    const [btnStyle, setBtnStyle] = useState({
        backgroundColor: 'black',
        color: 'white'
    });


    const toggleStyle = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white'
            });
            setBtnText("Enable light Mode");
            setBtnStyle({
                backgroundColor: 'white',
                color: "black"
            })
        }
        else {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setBtnText("Enable Dark Mode");
            setBtnStyle(
                {backgroundColor: 'black',
                color: "white"}
            )
        }
    }

    return (

        <div style={myStyle}>
            <h1 className='py-2 px-4'>About Us</h1>
            <div className="accordion py-10" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          About Us
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" >
                        This Application will modify your text in the way you want
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Feature
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            <ul>
                                <li> This version hase features like change text to upper case, lower case, sentence case.</li>
                                <li>It will analys your text and show you toal numer of words, lines and esitimated time to read it</li>
                            </ul>

                       
                        </div>
                    </div>
                </div>
            
            </div>
            {/* <div className="btn">
                <button style={btnStyle} onClick={toggleStyle} className='btn  my-3'>{btnText}</button>
            </div> */}
        </div>
    )
}
