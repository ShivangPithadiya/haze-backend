import React from 'react'

function Logo() {
    return (
        <div className='row general_row1 '>

            <div className="col-12 p-2">
                <div className="logo-head pb-2 pt-4">
                    <h4>Logo</h4 >
                </div>
                <div className="card mb-4 border-0" style={{ maxWidth: "540px" }}>
                    <div className="row g-0" style={{ borderBottom: "1px solid #D9D9D9" }}>
                        <div className="col-md-4 p-2 card-img" >
                            <img src="assets/Image/modal/img.svg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-2">
                                <h6 className="card-title">Add a default logo</h6>
                                <p className="card-text">Used for most common logo applications</p>
                            </div>
                        </div>
                        <p style={{ color: "#737373" }}>HEIC, PNG or JPG. Recommended width 512 px minimum</p>
                    </div>
                </div>
                <div className="card mb-4 border-0" style={{ maxWidth: "540px" }}>
                    <div className="row g-0" style={{ borderBottom: "1px solid #D9D9D9" }}>
                        <div className="col-md-4 p-2 card-img" >
                            <img src="assets/Image/modal/img.svg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body p-2">
                                <h6 className="card-title">Add a square logo</h6>
                                <p className="card-text">Used by some social media channels.</p>
                            </div>
                        </div>
                        <p style={{ color: "#737373" }}>HEIC, PNG or JPG. Recommended width 512 x 512 px minimum</p>
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default Logo