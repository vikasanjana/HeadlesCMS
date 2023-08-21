import { fetchGetReqFromUrl } from "@/utility/AxiosFetch";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      let url = `${process.env.HEADLESS_API_URL}/${process.env.HEADLESS_SLIDER_POST_TYPE}?_embed`;
      let response = await fetchGetReqFromUrl(url);
      res.send(response);
    } catch (e) {
      console.error(`---> An error occured`, e);
      return res.status(400).send({ text: "Bad request" });
    }
  } else {
    res.status(400).send({ text: "Bad request" });
  }
};

export default handler;
