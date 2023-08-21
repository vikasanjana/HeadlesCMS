import { fetchGetReqFromUrlUsingHeader } from "@/utility/AxiosFetch";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      let url = `${process.env.HEADLESS_API_URL}/menu-items?menus=${process.env.HEADLESS_API_MENU_ID}`;
      const response = await fetchGetReqFromUrlUsingHeader(url);
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
