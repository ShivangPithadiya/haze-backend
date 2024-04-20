import React from "react";
import Chart from "./Chart";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
const DashboardMain = (props) => {
    const user = useSelector(state => state.user.user)
    return (
        <div className="left_wrapper" style={{ paddingTop: "20px" }}>
            <div className="wrapper_header p-4">
                <div className="wraper_header_title">
                    Your Dashboard
                    <div className="wraper_header_sub_title">Welcome back, {user.name} !</div>
                </div>

                <div className="wraper_button_section">
                    <button className="add_button">
                        {" "}
                      <FaPlus/>  Add Product
                    </button>
                </div>
            </div>

            <div className="Dashboard_info_section">
                <div className="dashboard_info_row">
                    <div className="dashoard_col">
                        <div className="dashboard_info_icon">
                            <img src="assets/Image/deshboard/site.svg" />
                        </div>
                        <div className="dashboard_info_body">
                            <div className="dashboard_info_cont">
                                <span className="dashboard_info_input">Site plan:</span>
                                <span className="dashboard_info_out_put">Essential</span>
                            </div>
                            <div className="dashoard_info_tag">Manage Plan</div>
                        </div>
                    </div>

                    <div className="dashoard_col">
                        <div className="dashboard_info_icon">
                            <img src="assets/Image/deshboard/Sales.svg" />
                        </div>
                        <div className="dashboard_info_body">
                            <div className="dashboard_info_cont">
                                <span className="dashboard_info_input">Sales channel:</span>
                                <span className="dashboard_info_out_put">Shopify</span>
                            </div>
                            <div className="dashoard_info_tag">Change Sales Channel</div>
                        </div>
                    </div>

                    <div className="dashoard_col d-sm-flex flex-column">
                        <div className="dashboard_info_icon">
                            <img src="assets/Image/deshboard/web.svg" />
                        </div>
                        <div className="dashboard_info_body">
                            <div className="dashboard_info_cont">
                                <span className="dashboard_info_input">Domain:</span>
                                <span className="dashboard_info_out_put">
                                    https://www.petspurest.com/
                                </span>
                                <span className="info_web_icon">
                                    {" "}
                                    <img src="assets/Image/deshboard/link.svg" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_container">
                <div className="home_section">


                    <div className="analytic_home_Section">
                        <div>
                            <div className="home_section_title">Analytics</div>
                            <div className="Analytics_info_data">
                                <span className="Analytics_info_title">Your key
                                    stats for </span>
                                <span className="Analytics_info_calendar">
                                    <img src="assets/Image/deshboard/calendar 1.svg" />
                                    {" "}{" "} Last year
                                </span>
                                <span className="Analytics_info_date">
                                    compared to Jan 1 - Dec 31, 2023
                                </span>
                            </div>
                        </div>
                        <div className="analytic_view_all">
                            <a href="#">View ALL Orders</a>
                        </div>
                    </div>
                    <div className='homw_section_row'>
                        <div className="home_section_card">
                            <div className="home_section_card_title">
                                Total Orders
                            </div>
                            <div className="home_section_card_body">
                                <div className="home_section_card_cont">
                                    <div className="home_ection_card_value">
                                        <span className="currency_icon">$</span>
                                        <span className="currency_valuue">534.21</span>
                                    </div>
                                    <div className="home_range home_range_down">
                                        <span className="range_icon"><img
                                            src="assets/Image/deshboard/do-arrow-Recovered 2.svg" /></span>
                                        <span className="range_value">4%</span>
                                    </div>
                                </div>
                                <div className="range_graph">
                                    <img src="assets/Image/deshboard/rangegraph.svg" />

                                </div>
                            </div>

                        </div>
                        <div className="home_section_card">
                            <div className="home_section_card_title">
                                Total Orders
                            </div>
                            <div className="home_section_card_body">
                                <div className="home_section_card_cont">
                                    <div className="home_ection_card_value">
                                        <span className="currency_icon">+</span>
                                        <span className="currency_valuue">25</span>
                                    </div>
                                    <div className="home_range home_range_up">
                                        <span className="range_icon"><img src="assets/Image/deshboard/up-arrow 5.svg" /></span>
                                        <span className="range_value">8%</span>
                                    </div>
                                </div>
                                <div className="range_graph">
                                    <img src="assets/Image/deshboard/rangegraph.svg" />

                                </div>
                            </div>

                        </div>
                        <div className="home_section_card">
                            <div className="home_section_card_title">
                                Average Order Value
                            </div>
                            <div className="home_section_card_body">
                                <div className="home_section_card_cont">
                                    <div className="home_ection_card_value">

                                        <span className="currency_valuue">5.5%</span>
                                    </div>
                                    <div className="home_range home_range_up">
                                        <span className="range_icon"><img src="assets/Image/deshboard/up-arrow 5.svg" /></span>
                                        <span className="range_value">8%</span>
                                    </div>
                                </div>
                                <div className="range_graph">
                                    <img src="assets/Image/deshboard/rangegraph.svg" />

                                </div>
                            </div>

                        </div>
                        <div className="home_section_card">
                            <div className="home_section_card_title">
                                Growth Rate
                            </div>
                            <div className="home_section_card_body">
                                <div className="home_section_card_cont">
                                    <div className="home_ection_card_value">

                                        <span className="currency_valuue">9.9%</span>
                                    </div>
                                    <div className="home_range home_range_down">
                                        <span className="range_icon"><img
                                            src="assets/Image/deshboard/do-arrow-Recovered 2.svg" /></span>
                                        <span className="range_value">4%</span>
                                    </div>
                                </div>
                                <div className="range_graph">
                                    <img src="assets/Image/deshboard/rangegraph.svg" />

                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="home_section2">
                    <div className="homw_section_row">
                        <div className="home_section_col recentorderdiv">
                            <div className="home_section_title">Recent
                                Orders</div>
                            <div className="data_scroll_bar">
                                <div className="data_scroll">

                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="home_Recent_Orders_section">
                                        <div className="home_recnet_orders_row">
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_tag">
                                                    #1021 Custom Football Shirt
                                                </div>
                                                <div
                                                    className="home_recnet_orders_info">
                                                    22 hours ago 1 item
                                                </div>
                                            </div>
                                            <div className="home_recnet_orders_col">
                                                <div
                                                    className="home_recnet_orders_status">
                                                    Paid
                                                </div>
                                                <div
                                                    className="home_recnet_orders_amount">
                                                    $67.23
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="home_section_col totalsalediv">
                            <div className="home_section_title">Total Sales
                            </div>
                            <div>
                                <Chart />
                            </div>
                        </div>

                    </div>
                </div>









            </div>
        </div>
    );
};

export default DashboardMain;
