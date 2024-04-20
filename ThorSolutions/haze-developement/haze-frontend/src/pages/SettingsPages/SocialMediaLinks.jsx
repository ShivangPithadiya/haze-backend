import React from 'react'

function SocialMediaLinks() {
    return (
        <div className='row general_row1'>

            <div className="col-12 p-2">
                <div className="logo-head pb-2 pt-4">
                    <h4>Social media links</h4 >
                </div>
                <div className="font_select mb-4">
                    <h6 >Facebook</h6>
                    <div class="">
                        <input class="file_select_title p-2 w-100" placeholder='Copy link here' style={{border: "1px solid #9C9C9C;"}}/>
                    </div>
                </div>
                <hr className='m-0' />
                <div className="font_select mb-4 mt-4">
                    <h6 >Instagram</h6>
                    <div class="">
                        <input class="file_select_title p-2 w-100" placeholder='Copy link here' style={{border: "1px solid #9C9C9C;"}}/>
                    </div>
                </div>
                <hr className='m-0' />
                <div className="font_select mb-4 mt-4">
                    <h6 >Twitter</h6>
                    <div class="">
                        <input class="file_select_title p-2 w-100" placeholder='Copy link here' style={{border: "1px solid #9C9C9C;"}}/>
                    </div>
                </div>
                <hr className='m-0' />
                <div className="font_select mb-4 mt-4">
                    <h6 >Linkedin</h6>
                    <div class="">
                        <input class="file_select_title p-2 w-100" placeholder='Copy link here' style={{border: "1px solid #9C9C9C;"}}/>
                    </div>
                </div>
                <hr className='m-0' />
              
            </div>
        </div>
    )
}

export default SocialMediaLinks