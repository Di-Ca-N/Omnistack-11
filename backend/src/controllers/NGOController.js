const connection = require("../database/connection");

const generateUniqueId = require("./utils/generateUniqueId");

module.exports = {
  async create(request, response) {
    const data = request.body;

    const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueId();

    await connection("ngos").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  },

  async index(request, response) {
    const ongs = await connection("ngos").select("*");
    return response.json(ongs);
  }
};
