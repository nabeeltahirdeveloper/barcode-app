import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Pdf from "react-to-pdf";
// import ref from 'react';
import "./ViewProduct.css";
// import BWIPJS from 'bwip-js/bwipjs';



export default function ViewProduct(props) {



    const location = useLocation();
    const ref = React.createRef();

    // useEffect(() => {
    //     BWIPJS('myCanvas', {
    //         bcid: 'code128',
    //         text: location.state.imageLink,
    //         scale: 2,
    //         height: 20,
    //         includetext: false,
    //         textxalign: 'center',
    //     })
    // }), [location.state.imageLink];

    return (
        // <div>{location.state.name}</div>

        <div>
            <center>

                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) =>
                        <button class="download-button" onClick={toPdf}>
                            <div class="docs"><svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Docs</div>
                            <div class="download">
                                <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
                            </div>
                        </button>
                    }
                </Pdf>

            </center>
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
                    <div className='barcode' >

                        {/* <Barcode value={location.state.imageLink} /> */}
                        {/* <canvas id="myCanvas" ></canvas> */}
                        <img className='barcodeImage' src={"http://bwipjs-api.metafloor.com/?bcid=code128&rotate=L&text=" + location.state.imageLink} alt="" />

                    </div>
                </div>




            </div>

        </div>
    )
}
