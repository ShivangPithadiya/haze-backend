import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { setSubButton } from "../../features/settingsSlice";

function BrandButtons() {
    const subButton = useSelector((state) => state.settingsTab.subButton);

    const dispatch = useDispatch();

    const handleButton = (subButton) => {
        dispatch(setSubButton(subButton));
    };
    return (
        <div className='row general_row1 '>
            <div className="col-12 p-2">
                <div className="logo-head pb-2 pt-4">
                    <h4>Button</h4 >
                </div>
                <div className="font_select mb-4">
                    <ul id="menu1" class="add_modal_Select_menu2 d-flex flex-column p-0" style={{ listStyleType: "none" }}>
                        <li
                            className="add_modal_Select_menu2" onClick={()=>handleButton('primaryButton')}>
                            <span class="add_modal_name">Primary button</span>
                        </li>
                        <li
                            className="add_modal_Select_menu2"  onClick={()=>handleButton('secondarybutton')}>
                            <span class="add_modal_name">Secondary button</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default BrandButtons