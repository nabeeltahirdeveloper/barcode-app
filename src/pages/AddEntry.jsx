import React, { useState } from "react";
import "./AddEntry.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const metadata = {
    contentType: 'image/jpeg'
};


// const storage = getStorage();

export default function AddEntry() {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [date, setDate] = useState("");
    const [font, setFont] = useState("");
    const [size, setSize] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [uploadFile, setUploadFile] = useState("");
    const [base64, setBase64] = useState("")

    const getBase64 = (file) => {
        return new Promise(resolve => {
          let fileInfo;
          var baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            console.log(baseURL);
            setBase64(baseURL)
            resolve(baseURL);
          };
          console.log(fileInfo);
        });
      };
    
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
            <button className="submit-btn" onClick={async () => {
                try {
                    const storageRef = ref(storage, `images/${uploadFile.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, uploadFile, metadata);
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                    // console.log("base64Image", base64Image);
                    console.log(downloadURL);
                    setImageLink(downloadURL);
                    let result = await getBase64(uploadFile)
                        
                            let file = result;
                            setBase64(file)
                            console.log("File Is", file);
                            
                      
                    
                    // console.log(mountainsRef);
                    let AllData = {
                        name: name,
                        code: code,
                        date: date,
                        font: font,
                        size: size,
                        imageLink: downloadURL,
                        base64: result
                        
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
