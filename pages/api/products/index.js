import { fetchAllProducts, fetchProudctByTexonomy } from "@/utility/WooApi";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "GET") {
    try {
      const { taxonomy, slug, perPage, page } = req.query;
      let products;
      if (taxonomy && slug) {
        products = await fetchProudctByTexonomy(taxonomy, slug);
      } else {
        products = await fetchAllProducts(page, perPage);
      }
      res.send(products);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    }
  }
}
