import React from "react";
import Barcode from "react-barcode";
import "./mainPage.css";

export default function MainPage() {
    return (
        <div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Date</th>
                            <th>Font</th>
                            <th>Size</th>
                            <th>Image Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>1</td> */}
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                http://cdn.shopify.com/s/files/1/0317/6592/1851/products/allahu-akbar-T-011.jpg?v=1611749422
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        margin: "0 auto",
                    }}
                >
                    <Barcode value="http://cdn.shopify.com/s/files/1/0317/6592/1851/products/allahu-akbar-T-011.jpg?v=1611749422" />
                </div>
            </div>
        </div>
    );
}
