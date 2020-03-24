const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const data = request.body;
    console.log(data);
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

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
