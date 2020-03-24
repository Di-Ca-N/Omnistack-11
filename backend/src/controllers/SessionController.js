const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { ngo_id } = request.body;

    const ngo = await connection("ngos")
      .where("id", ngo_id)
      .select("name")
      .first();

    if (!ngo) {
      return response
        .status(404)
        .json({ error: `NGO with id ${ngo_id} does not exist` });
    } else {
      return response.json(ngo);
    }
  }
};
