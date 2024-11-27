/// <reference types="cypress" />

import cadastroPage from "../support/cadastro.page";

describe("Cadastro de cliente", () => {
  beforeEach("Acessando home", () => {
    cadastroPage.acessRegisterPage();
  });
  it("cadastrar varios clientes", () => {
    for (let index = 0; index < 11; index++) {
      cadastroPage.clickBotãoCadastro();
      cadastroPage.campoNome("Rodrigo");
      cadastroPage.campoEmail("rodrigoteste@gmail.com");
      cadastroPage.campoCPF("44444444444");
      cadastroPage.campoTelefone("11999999999");
      cadastroPage.campoCEP("08146080");
      cadastroPage.campoRua("Rua Estevam de araujo");
      cadastroPage.campoCasa("217");
      cadastroPage.campoComplemento("5");
      cadastroPage.campoBairro("Itaquera");
      cadastroPage.campoCidade("São Paulo");
      cadastroPage.clickBotãoCadastroOK();
    }
  });
});
