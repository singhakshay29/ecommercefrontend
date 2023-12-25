// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter) {
  // filter={"category":"smartphone"};
  let query = "";
  for (let key in filter) {
    query += `${key}=${filter[key]}&`;
  }
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products?" + query);
    const data = await response.json();
    resolve({ data });
  });
}
