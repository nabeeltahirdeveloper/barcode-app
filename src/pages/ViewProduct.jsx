import React from 'react'
import { useLocation } from 'react-router-dom';
import Barcode from 'react-barcode';
import Pdf from "react-to-pdf";
// import ref from 'react';
import "./ViewProduct.css";




export default function ViewProduct(props) {
    
  

    const location = useLocation();
    const ref = React.createRef();



    return (
        // <div>{location.state.name}</div>

        <div>

            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>

            <div className="pdf" ref={ref} >

                <div className="heading">
                    <h3>View Product</h3>
                </div>
                <div className="image" style={{
                    width: "250px",
                    height: "250px",
                    display: "flex",
                }}>
                    <img src={location.state.base64} alt="product" />
                </div>
                <div className="name">
                    <h4>Name: {location.state.name}</h4>
                </div>
                <div className="code">
                    <h4>Code: {location.state.code}</h4>
                </div>
                <div className="date">
                    <h4>Date: {location.state.date}</h4>
                </div>
                <div className="font">
                    <h4>Font: {location.state.font}</h4>
                </div>
                <div className="size">
                    <h4>Size: {location.state.size}</h4>
                </div>
                <div style={{
                    width: "100%",
                    height: "350px",
                    display: "flex",

                }} >

                    <Barcode value={location.state.imageLink} />
                </div>

            </div>

        </div>
    )
}
