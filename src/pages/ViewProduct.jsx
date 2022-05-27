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

            <div className="pdf" ref={ref} style={{
                fontSize: `${location.state.size}px`,
                fontFamily: `${location.state.font}`,
                // fontSize: "12px"
            }} >

                <div className="heading">
                    <h3>View Product</h3>
                </div>

                <div className="name">
                    <h4>{location.state.name}</h4>
                </div>
                <div className="image" style={{
                    width: "250px",
                    height: "250px",
                    display: "flex",
                }}>
                    <img src={location.state.base64} alt="product" />
                </div>
                <div className="date">
                    <h4>MANUFACTURER'S COUPON</h4>
                </div>
                <div className="date">
                    <h4>EXPIRES: {location.state.date}</h4>
                </div>
                <div className="desc">
                    <p>
                        CONSUMER THIS COUPON GOOD ONLY TOWARDS PURCHASE OF PRODUCT(S) INDICATED. No more than four(4) coupons for the same product per transaction. ANY OTHER USE CONSTITUTES FRAUD LIMIT ONE COUPON PER PURCHASE CONSUMER PAYS ANY SALES TAX VOID IF SOLD. ALTERED REPRODUCED. EXCHANGED OR TRANSFERED RETAILER. We will remburse in accordance with the our Coupon Redemption Policy. Void if reproudced or if prohibited, taxed or restricted by law. Good only in the continental USA. Alaska and Hawai NOT VALID IN PUERTO RICO Cash value is 1/100 Mail to NCH Marketing Services 1 Fawcett Drive, deel Rio, TX 78840
                    </p>
                </div>
                <div className="code">
                    <h4>{location.state.code}</h4>
                    <div style={{
                        width: "100px",
                        height: "350px",
                        display: "flex",
                        margin: "-60px",
                        marginRight: "-200px"

                    }} >

                        <Barcode value={location.state.imageLink} />
                    </div>
                </div>




            </div>

        </div>
    )
}
