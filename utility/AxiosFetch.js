const { default: axios } = require("axios");

async function fetchGetReqFromUrl(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

module.exports = {
    fetchGetReqFromUrl,
};
