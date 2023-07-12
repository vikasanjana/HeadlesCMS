import { fetchProudctByTexonomy } from "@/utility/WooApi";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    try {
      const { taxonomy, slug } = req.query;
      const products = await fetchProudctByTexonomy(taxonomy, slug);
      res.send(products);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    }
  }
}
