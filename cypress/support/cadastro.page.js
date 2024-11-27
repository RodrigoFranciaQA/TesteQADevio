/// <reference types="cypress" />

const infosCliente = {
  nome: ".w-full.flex > :nth-child(1) > .w-full",
  email: ".w-full.flex > :nth-child(2) > .w-full",
  cpf: ".w-full.flex > :nth-child(3) > .w-full",
  telefone: ":nth-child(4) > .w-full",
  cep: ":nth-child(5) > .w-full",
  rua: ":nth-child(6) > .w-full",
  numeroCasa: ":nth-child(7) > .w-full",
  complemento: ":nth-child(8) > .w-full",
  bairro: ":nth-child(9) > .w-full",
  cidade: ":nth-child(10) > .w-full",
};

export default {
  acessRegisterPage() {
    cy.visit("/").get(".button").should("contain", "Cadastrar Cliente");
  },
  clickBotãoCadastro() {
    cy.get(".button").should("contain", "Cadastrar Cliente").click();
  },
  campoNome(nome) {
    cy.get(infosCliente.nome).type(nome);
  },
  campoEmail(email) {
    cy.get(infosCliente.email).type(email);
  },
  campoCPF(cpf) {
    cy.get(infosCliente.cpf).type(cpf);
  },
  campoTelefone(telefone) {
    cy.get(infosCliente.telefone).type(telefone);
  },
  campoCEP(cep) {
    cy.get(infosCliente.cep).type(cep);
  },
  campoRua(rua) {
    cy.get(infosCliente.rua).type(rua);
  },
  campoCasa(numeroCasa) {
    cy.get(infosCliente.numeroCasa).type(numeroCasa);
  },
  campoComplemento(complemento) {
    cy.get(infosCliente.complemento).type(complemento);
  },
  campoBairro(bairro) {
    cy.get(infosCliente.bairro).type(bairro);
  },
  campoCidade(cidade) {
    cy.get(infosCliente.cidade).type(cidade);
  },
  clickBotãoCadastroOK() {
    cy.get(".sc-eDWCr > .bg-orange-500").click();
  },
};
