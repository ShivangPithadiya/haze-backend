import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
//import './ProductComponet.css';

const ProductComponent = () => {
	useEffect(() => {
		const swiper = new Swiper('.mySwiper', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: '.profucts-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.products_button-next',
				prevEl: '.products-button-prev',
			},
		});
	}, []);

	return (
		<div class="left_wrapper  product_dispaly d-flex">

			<div class="products_col1 px-3">
				<div class="products_wrapper_tile pb-2">Name of the product</div>
				<div class="products_wrapper_tag">Mug Colour</div>
				<div class="products_wrapper_row">
					<div class="products_wrapper_col">
						<div class="products_colour_section">
							<span class="products-active"></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div class="products_wrapper_tag">Handle Color</div>
				<div class="products_wrapper_row">
					<div class="products_wrapper_col">
						<div class="products_colour_section">
							<span class="products-active"></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div class="products_wrapper_tag">Text</div>
				<div class="products_wrapper_row">
					<div className='product_wrapper_text pt-3'>
						<p>Enter text to be printed</p>
						<input placeholder='Your Text' />
					</div>
				</div>
			</div>

			<div class="products_col2">
				<div class="products_top_section">
					<div class="products_top_section_row">
						<div class="products_amount">
							<span class="currency_symbol">$</span
							><span class="currency_value">24</span>
						</div>
						<div class="products_button">
							<button class="products_zomm_button">
								<i class="bi bi-zoom-in"></i>
							</button>
							<button class="share_button">
								<i class="bi bi-share"></i>
							</button>
						</div>
					</div>
				</div>
				<div class="products_slid">
					<div class="swiper mySwiper">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="swiper-zoom-container">
									<img src="assets/image/product/Mug handle 1.svg" />
								</div>
							</div>
							<div class="swiper-slide">
								<div class="swiper-zoom-container">
									<img src="assets/image/product/Mug handle 1.svg" />
								</div>
							</div>
						</div>
						<div class="products_button_swiper products_button-next"></div>
						<div class="products_button_swiper products-button-prev"></div>
						<div class="profucts-pagination"></div>
					</div>
				</div>
				<div class="products_add_button">
					<button class="add_button">Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default ProductComponent;
