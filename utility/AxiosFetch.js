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

const fetchGetReqFromUrlUsingHeader = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.HEADLESS_JWT_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = {
  fetchGetReqFromUrl,
  fetchGetReqFromUrlUsingHeader,
};
