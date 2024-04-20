import React, { useState } from 'react'
import Logo from './Logo'
import Color from './Color'
import Font from './Font'
import { useDispatch, useSelector } from 'react-redux'
import { setBrandMegaMenu } from "../../features/settingsSlice";
import BrandButtons from './BrandButtons'
import SocialMediaLinks from './SocialMediaLinks'
import SubButtons from './PrimaryButtons'
import PrimaryButtons from './PrimaryButtons'
import SecondaryButtons from './SecondaryButton'

function BrandSidebar() {
    const brandMegaMenu = useSelector((state) => state.settingsTab.brandMegaMenu); // Accessing settingsTab from Redux store
    const subButton = useSelector((state) => state.settingsTab.subButton); // Accessing settingsTab from Redux store

    const dispatch = useDispatch();
    const handleMenu = (settingsTab) => {
        dispatch(setBrandMegaMenu(settingsTab));
    };

    return (
        <div className="row ">
            <div className="col-12 d-flex p-0">
                <div className="col-4 p-3 general_row">
                    <ul id="menu1" className="add_modal_Select_menu2 d-flex flex-column p-0" style={{ listStyleType: "none" }}>
                        <li
                            className="add_modal_Select_menu2" onClick={() => handleMenu('logo')}>
                            <span className="add_modal_name">Logo</span>
                        </li>
                        <li
                            className="add_modal_Select_menu2" onClick={() => handleMenu('colour')}>
                            <span className="add_modal_name">Colour</span>
                        </li>
                        <li
                            className="add_modal_Select_menu2" onClick={() => handleMenu('font')}>
                            <span className="add_modal_name">Font</span>
                        </li>
                        <li
                            className="add_modal_Select_menu2" onClick={() => handleMenu('button')}>
                            <span className="add_modal_name">Button</span>
                        </li>
                        <li
                            className="add_modal_Select_menu2" onClick={() => handleMenu('socialmedia')}>
                            <span className="add_modal_name">Social media links</span>
                        </li>
                    </ul>
                </div>
                {/* subLogo */}
                <div className="col-4 p-3 general_row">
                    {(brandMegaMenu == 'logo') && (
                        <>
                            <Logo />
                        </>
                    )}
                    {(brandMegaMenu == 'colour') && (
                        <>
                            <Color />
                        </>
                    )}
                    {(brandMegaMenu == 'font') && (
                        <>
                            <Font />
                        </>
                    )}
                    {(brandMegaMenu == 'button') && (
                        <>
                            <BrandButtons />
                        </>
                    )}
                    {(brandMegaMenu == 'socialmedia') && (
                        <>
                            <SocialMediaLinks />
                        </>
                    )}
                </div>
                <div className="col-4 p-3 general_row">
                    {(subButton == 'primaryButton') && (  
                        <>
                            <PrimaryButtons />
                        </>
                    )}
                    {(subButton == 'secondarybutton') && (
                        <>
                            <SecondaryButtons />
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

export default BrandSidebar