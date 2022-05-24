import React, {useState} from "react";
import "./AddEntry.css";
import { collection, addDoc } from "firebase/firestore"; 
import { db , storage } from "../config/config";
import { getStorage, ref } from "firebase/storage";

// const storage = getStorage();

export default function AddEntry() {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [date, setDate] = useState("");
    const [font, setFont] = useState("");
    const [size, setSize] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [uploadFile, setUploadFile] = useState("");

    return (
        <div className="entry-cont">
            <div className="heading">
                <h3>Add Entry</h3>
            </div>

            {/* <form className="entry-form"> */}
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="code">Code</label>
                <input
                    type="text"
                    className="form-control"
                    id="code"
                    placeholder="Enter code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="Enter date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <label htmlFor="font">Font</label>
                <input
                    type="number"
                    className="form-control"
                    id="font"
                    placeholder="Enter font size"
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                />

                <label htmlFor="Size">Size</label>
                <input
                    type="number"
                    className="form-control"
                    id="Size"
                    placeholder="Enter size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />

                <div className="upload-cont">
                    <label htmlFor="upload">Upload file:</label>
                    <input
                        type="file"
                        className="form-control"
                        style={{ alignSelf: "center" }}
                        id="uplode"
                        placeholder="Enter uplode"
                        onChange={(e) => setUploadFile(e.target.files[0])}
                    />
                </div>
            {/* </form> */}
                <button className="submit-btn" onClick={async()=>{
                    try {
                        const mountainsRef = ref(storage, `${uploadFile}`);
                        console.log(uploadFile );
                        console.log(mountainsRef );
                        let AllData={
                            name: name,
                            code: code,
                            date: date,
                            font: font,
                            size: size,
                            imageLink: imageLink,
                        }
                        const docRef = await addDoc(collection(db, "data"), AllData);
                        console.log("Document written with ID: ", docRef.id);
                        alert("Document written with ID: " + docRef.id);
                      } catch (e) {
                          alert(e);
                        console.error("Error adding document: ", e);
                      }
                      
                }}>Submit</button>
        </div>
    );
}
