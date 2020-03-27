const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    //Zera o banco antes de executar
    await connection.migrate.rollback();
    // Executa as migrations no banco test.sqlite antes de executar os testes
    await connection.migrate.latest();
  });

  afterEach(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "Sou Inimigo",
        email: "souinimigo@gmail.com",
        whatsapp: "(45) 9 9999-9999",
        city: "Cascavel",
        uf: "PR"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
