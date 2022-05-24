import React, { useEffect, useState } from "react";
import "./mainPage.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/config";



export default function MainPage() {
    const [AllData, setallData] = useState([])
    const ref = React.createRef();

    const querySnapshot = async () => {
        let tempData = [];
        const docs = await getDocs(collection(db, "data"));
        docs.forEach((doc) => {
            let pushData = { ...doc.data(), id: doc.id };
            tempData.push(pushData);
        })
        setallData(tempData);
        console.log("AllData", tempData);
    }


    useEffect(() => {
        querySnapshot();
    }, []);

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
                        {AllData.map((data) => {

                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.code}</td>
                                    <td>{data.date}</td>
                                    <td>{data.font}</td>
                                    <td>{data.size}</td>
                                    <td>{data.imageLink}</td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>
                {/* <div
                    style={{
                        display: "flex",
                        width: "100%",
                        margin: "0 auto",
                    }}
                >
                    <Barcode value="http://cdn.shopify.com/s/files/1/0317/6592/1851/products/allahu-akbar-T-011.jpg?v=1611749422" />
                    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>} */}
                {/* </Pdf> */}

                {/* <Barcode value="http://cdn.shopify.com/s/files/1/0317/6592/1851/products/allahu-akbar-T-011.jpg?v=1611749422" /> */}


            </div>
        </div>
        // </div>
    );
}
