const localhost = "http://127.0.0.1:8000";

const apiURL = "/api";

export const endpoint = `${localhost}${apiURL}`;

export const productListURL = `${endpoint}/products/`;
export const userIDURL = `${endpoint}/user-id/`;
export const addressListURL = `${endpoint}/addresses/`;
export const addressCreateURL = `${endpoint}/addresses/create`;
export const productDetailURL = id => `${endpoint}/products/${id}`;
export const categoryURL = id => `${endpoint}/category/${id}`;
export const addToCartURL = `${endpoint}/add-to-cart/`;
export const orderSummaryURL = `${endpoint}/order-summary/`
export const countryListURL = `${endpoint}/countries`
export const checkoutURL = `${endpoint}/checkout/`
export const addCouponURL = `${endpoint}/add-coupon/`

