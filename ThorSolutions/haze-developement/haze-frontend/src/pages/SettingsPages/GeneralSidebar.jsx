import React, { useState } from 'react'

function GeneralSidebar() {

  return (
    <div className="row ">
      <div className='col-12 p-0'>
        <div className="col-4 p-3 general_row">
          <ul id="menu1" class="add_modal_Select_menu2 d-flex flex-column p-0" style={{ listStyleType: "none" }}>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">Order Summary</span>
            </li>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">KPI Dashboard</span>
            </li>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">Print-ready files</span>
            </li>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">PDF Preview</span>
            </li>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">Pantone Colours</span>
            </li>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">Messages & Alerts</span>
            </li>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">Bulk Variations</span>
            </li>
            <li
              className="add_modal_Select_menu2">
              <span class="add_modal_name">Translations</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default GeneralSidebar