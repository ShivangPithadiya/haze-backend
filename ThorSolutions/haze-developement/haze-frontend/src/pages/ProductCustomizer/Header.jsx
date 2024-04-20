import React, { useEffect, useState } from 'react';
import "./Header.css"
import { FaRegEye } from "react-icons/fa";
import { setLayerData, customizeProduct, setActiveLayerId, setActiveLayerData, setSaveImage } from '../../features/customizeProductSlice';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import svg1 from "../../assets/Image/hazelogo.svg";
import axios from "axios"
const Header = () => {
	const productCustomizerData = useSelector((state) => state.customizeProduct);
	const product_name = useSelector((state) => state.customizeProduct.product_name);
	const [isPopupOpen, setPopupOpen] = useState(false);
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const navigate = useNavigate();

	const [layerData, setLayerData] = useState({
		layerId: "",
		inputType: "",
		displayType: "",
		title: "",
		thumbnailType: Boolean,
		labelType: Boolean,
		imageName: "",
		images: [
			{
				id: "",
				layerId: "",
				imageName: "",
				url: ""
			},
			{
				id: "",
				layerId: "",
				imageName: "",
				url: ""
			}
		],
		colors: [
			{
				id: "",
				layerId: "",
				colorName: "",
				color: ""
			}
		],
		textName: "",
		text: [
			{
				id: "",
				layerId: "",
				textName: "",
				imageText: ""
			}
		]
	})

	const togglePopup = () => {
		setPopupOpen(!isPopupOpen);
	};

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen);
	};
	const handlePriview = () => {
		const url = "/product-preview";

		window.open(url, "_blank");
		window.location.reload();

	}


	const product = {
		"id": productCustomizerData.activeLayerId,
		"title": product_name, //In UI also it is static
		"body_html": null, //no idea
		"vendor": "hazetest",
		"product_type": "", // how many product types are there, is there any enum for that
		"created_at": "2024-04-08T04:33:23-04:00", //on save onClick
		"handle": "shopify-order-test-data", //no idea
		"updated_at": "2024-04-08T04:33:23-04:00", //have to work upon edit page for that
		"published_at": "2024-04-08T04:33:23-04:00", // publish onclick
		"template_suffix": null,
		"published_scope": "global",
		"tags": "",
		"status": "active", //enum required
		"admin_graphql_api_id": "gid://shopify/Product/9028161863963",
		"variants": [
			{
				"id": 48267578474779,
				"product_id": 9028161863963,
				"title": product_name,
				"price": "0.00",
				"sku": "",
				"position": 1,
				"inventory_policy": "deny",
				"compare_at_price": null,
				"fulfillment_service": "manual",
				"inventory_management": null,
				"option1": "Default Title",
				"option2": null,
				"option3": null,
				"created_at": "2024-04-08T04:33:23-04:00",
				"updated_at": "2024-04-08T04:33:23-04:00",
				"taxable": true,
				"barcode": null,
				"grams": 0,
				"weight": 0,
				"weight_unit": "kg",
				"inventory_item_id": 50318007992603,
				"inventory_quantity": 0,
				"old_inventory_quantity": 0,
				"requires_shipping": true,
				"admin_graphql_api_id": "gid://shopify/ProductVariant/48267578474779",
				"image_id": null
			}
		],
		"options": [
			{
				"id": 11389241262363,
				"product_id": 9028161863963,
				"name": "Title", //product_name
				"position": 1,
				"values": [
					"Default Title" //product_name
				]
			}
		],
		"images": [],
		"image": null
	}
	const data = {
		"layerId": productCustomizerData.activeLayerId,
		"inputType": "text",
		"displayType": "banner",
		"title": "Example Image",
		"thumbnailType": false,
		"labelType": true,
		"imageName": "example.jpg",
		"images": [
			{
				"id": "img1",
				"layerId": "layer123",
				"imageName": "example1.jpg",
				"url": "https://example.com/image1.jpg"
			},
			{
				"id": "img2",
				"layerId": "layer123",
				"imageName": "example2.jpg",
				"url": "https://example.com/image2.jpg"
			}
		],
		"colors": [
			{
				"id": "color1",
				"layerId": "layer123",
				"colorName": "Red",
				"color": "#FF0000"
			},
			{
				"id": "color2",
				"layerId": "layer123",
				"colorName": "Blue",
				"color": "#0000FF"
			}
		],
		"textName": "Example Text",
		"text": [
			{
				"id": "text1",
				"layerId": "layer123",
				"textName": "Text 1",
				"imageText": "Lorem ipsum dolor sit amet"
			},
			{
				"id": "text2",
				"layerId": "layer123",
				"textName": "Text 2",
				"imageText": "consectetur adipiscing elit"
			}
		]
	}
	const handlePublishToast = () => {
		toast.success("The draft was successfully published!");
	}

	const PublishProduct = () => {
		const updatedLayerData = {
			...layerData,
		};
		console.log("layerdata", layerData);
		axios.post('http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/data/layerdata', updatedLayerData)
			.then((response) => {
				console.log("Data sent successfully to layerdata:", response.data);

				axios
					.post("http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/shopify/products", product)
					.then((response) => {
						console.log("shop before");
						axios.post("http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/data/ProductData", product);
						console.log("sending data to shopify:", response.data);
						console.log("shop after");
						handlePublishToast();
					})
					.catch((error) => {
						console.error("Error sending data to shopify:", error);
					});
			})
			.catch((error) => {
				console.error("Error sending data layer data", error);
			});
	}
	const handleClose = () => {
		setShowModal(false)
		navigate("/my-products");

	};
	const handleClosebtn = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const handleSaveDraft = () => {
		const updatedProduct = {
			...product,
			status: "inactive"
		};


		axios.post("http://ec2-52-6-145-35.compute-1.amazonaws.com:5001/api/data/ProductData", updatedProduct)
			.then((response) => {
				console.log("Draft saved successfully:", response.data);
				navigate("/my-products");

			})
			.catch((error) => {
				console.error("Error sending data to shopify:", error);
			});



	};

	return (

		<header className="Haze_header">
			<div className="logo_section">
				<div className="logo">
					<a href="/dashboard">
						<img src={svg1} alt="Logo" />
					</a>
				</div>
			</div>

			<div className="menu">
				<ul className="header_menu">
					<li className="header_menu_list">
						Build your product
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Pricing Details
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Review
						{/* SVG Code for arrow */}
						{" >"}
					</li>
					<li className="header_menu_list">
						Done!
						{/* SVG Code for arrow */}
						{" >"}
					</li>
				</ul>
			</div>

			<div className="right_header_Section">
				<button className="login_buttotn">Logic</button>
				<button className="view_button " onClick={handlePriview}>
					<FaRegEye />
				</button>
				<button className="dropdown">
					<span className="popup-button" onClick={PublishProduct}>
						Publish
					</span>
					{isPopupOpen && (
						<div id="popupContent" className="popup">
							<div className="popup_cont">
								<p className="suuccessully_msg">
									<img src="../Image/svg/success.svg" alt="Success" />
									The draft was successfully published
								</p>
								<div onClick={togglePopup}>
									{/* SVG Code for close icon */}
								</div>
							</div>
						</div>
					)}
					<span className="dropdown_bnt" onClick={toggleDropdown}>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg"
								width="8"
								height="14"
								viewBox="0 0 8 14"
								fill="none"
							><path d="M1 1L7 7L1 13"
								stroke="#fff"
								stroke-width="2"
								stroke-linecap="round" /></svg>
						</span>
						{isDropdownOpen && (
							<div id="dropdownContent" className="dropdown-content">
								<p onClick={handleShow} >Discard</p>
							</div>
						)}
					</span>
				</button>
			</div>
			<ToastContainer position='top-center' />
			<Modal show={showModal} onHide={handleClosebtn} centered>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Action</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Do you want to save your changes as a draft, or discard them?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleSaveDraft}>
						Save As Draft
					</Button>
					<Button variant="danger" onClick={handleClose}>
						Discard Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</header>

	);
};

export default Header;
