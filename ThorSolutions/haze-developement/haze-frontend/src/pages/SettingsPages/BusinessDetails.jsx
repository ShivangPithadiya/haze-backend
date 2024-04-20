import React, { useState } from 'react'

function BusinessDetails() {

  return (
    <div className="row ">
     <div className="col-12 p-0">
     <div className="col-4 p-3 general_row">
        <ul id="menu1" class="add_modal_Select_menu2 d-flex flex-column p-0" style={{ listStyleType: "none" }}>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">Multi Currency</span>
          </li>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">Customizer Intergrations</span>
          </li>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">Sales Channel</span>
          </li>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">Bad Words</span>
          </li>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">Translations</span>
          </li>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">Users</span>
          </li>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">Billing & Subscription</span>
          </li>
          <li
            className="add_modal_Select_menu2">
            <span class="add_modal_name">API Keys</span>
          </li>
        </ul>
      </div>
     </div>
    </div>
  )
}

export default BusinessDetails