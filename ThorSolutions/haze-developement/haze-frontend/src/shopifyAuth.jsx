// ShopifyAuth.js
import ShopifyBuy from "shopify-buy";

const SHOPIFY_API_KEY = "26d81bfb6f92dac83304496e302d0186";
const SHOPIFY_DOMAIN = "c1haze.myshopify.com";

const shopifyClient = ShopifyBuy.buildClient({
  domain: `${SHOPIFY_DOMAIN}`,
  storefrontAccessToken: `${SHOPIFY_API_KEY}`,
});

export const redirectToShopify = async () => {
  try {
    window.location.href = `https://${SHOPIFY_DOMAIN}/admin/oauth/authorize?client_id=${SHOPIFY_API_KEY}&scope=read_products,write_products,read_customers&redirect_uri=http://localhost:3000/`;
  } catch (err) {
    console.log(err);
  }
};

export const completeShopifyAuth = async (setShopifyData) => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  if (code) {
    try {
      const response = await fetch(
        "http://localhost:3001/authshopcallback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );
      const data = await response.json();
      localStorage.setItem("access_token",data.access_token);
      setShopifyData(data.access_token);
    } catch (error) {
      console.log(error);
    }
    window.history?.replaceState({}, document.title, window.location.pathname);
  }
};
