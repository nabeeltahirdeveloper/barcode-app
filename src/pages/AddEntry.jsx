import React from "react";
import "./AddEntry.css";

export default function AddEntry() {
    return (
        <div className="entry-cont">
            <div className="heading">
                <h3>Add Entry</h3>
            </div>

            <form className="entry-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                />

                <label htmlFor="code">Code</label>
                <input
                    type="text"
                    className="form-control"
                    id="code"
                    placeholder="Enter code"
                />

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="Enter date"
                />

                <label htmlFor="font">Font</label>
                <input
                    type="number"
                    className="form-control"
                    id="font"
                    placeholder="Enter font size"
                />

                <label htmlFor="Size">Size</label>
                <input
                    type="number"
                    className="form-control"
                    id="Size"
                    placeholder="Enter size"
                />

                <div className="upload-cont">
                    <label htmlFor="upload">Upload file:</label>
                    <input
                        type="file"
                        className="form-control"
                        style={{ alignSelf: "center" }}
                        id="uplode"
                        placeholder="Enter uplode"
                    />
                </div>
                <button className="submit-btn">Submit</button>
            </form>
        </div>
    );
}
