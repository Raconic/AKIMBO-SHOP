import sendRequest from "./send-request";
const BASE_URL = "/api/products";

export function getProducts() {
  return sendRequest(BASE_URL);
}
export function createProduct (formData) {
  return sendRequest(`${BASE_URL}`, "POST", formData, true);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

