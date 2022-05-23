import React from 'react'

export default function AddEntry() {
  return (
    <div>
        <div className="heading">
            <h3>
                Add Entry
            </h3>
        </div>


        <div className="entry-form">
            <form>
                <div className="form-group">
                    <label htmlFor="name"> 
                    Name
                    </label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="code">
                        Code
                    </label>
                    <input type="text" className="form-control" id="code" placeholder="Enter code" />
                    </div>
                <div className="form-group">
                    <label htmlFor="date">
                        Date
                    </label>
                    <input type="date" className="form-control" id="date" placeholder="Enter date" />
                </div>
                <div className="form-group">
                    <label htmlFor="font">
                        Font    
                    </label>
                    <input type="number" className="form-control" id="font" placeholder="Enter font size" />
                </div>
                <div className="form-group">
                    <label htmlFor="Size">
                        Size
                    </label>
                    <input type="number" className="form-control" id="Size" placeholder="Enter size" />
                    </div>
                <div className="form-group">
                    <label htmlFor="uplode">
                        Uplode
                    </label>
                    <input type="file" className="form-control" id="uplode" placeholder="Enter uplode" />
                </div>
            </form>
            <div className="submit">
                <button>
                    Submit
                </button>
            </div>
        </div>


    </div>
  )
}
