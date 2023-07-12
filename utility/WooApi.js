const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const api = new WooCommerceRestApi({
  url: process.env.HEADLESS_HOME_URL,
  consumerKey: process.env.HEADLESS_WOO_CONSUMER_KEY,
  consumerSecret: process.env.HEADLESS_WOO_SECRET_KEY,
  version: "wc/v3",
});

/**
 * Fetch Product of particular texonomy
 */
async function fetchProudctByTexonomy(texonomy, slug) {
  try {
    const response = await api.get("products", {
      attribute: texonomy,
      attribute_term: slug,
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

module.exports = {
  fetchProudctByTexonomy,
};
