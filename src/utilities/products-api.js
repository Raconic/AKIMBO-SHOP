import sendRequest from "./send-request";
const BASE_URL = "/api/products";

export function index() {
  return sendRequest(BASE_URL);
}
export function createProduct (formData) {
  return sendRequest(`${BASE_URL}`, "POST", formData);
}

export function getById(productId) {
  return sendRequest(`${BASE_URL}/${productId}`);
}

