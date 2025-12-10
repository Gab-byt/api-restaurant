# 🍽️ API-Restaurant

API REST simples para gerenciar um restaurante — pratos, cardápio e pedidos — construída com **Node.js, TypeScript, Express e Knex**. Ideal para quem quer estudar back-end, manipulação de banco SQL e criar APIs robustas de CRUD.

## 🚀 Visão Geral

A API-Restaurant fornece endpoints para operações CRUD de pratos/itens de cardápio e pedidos. Permite criar, listar, atualizar e deletar recursos, servindo como base para frontend ou consumo em qualquer cliente HTTP.  

Perfeita como base de aprendizado ou projeto para evoluir com autenticação, autenticação, testes e deploy real.

## ✅ Funcionalidades

- CRUD completo de itens do cardápio (criar, ler, atualizar, deletar)  
- Gestão de pedidos — criação e consulta de pedidos  
- Validação básica de dados (via TypeScript + lógica de controle)  
- Banco SQL via Knex, fácil de trocar de SQLite para PostgreSQL (ou outro)  
- Código em TypeScript, organizado e legível — bom como referência de estrutura de projeto  

## 🛠️ Tecnologias e Ferramentas

| Categoria     | Ferramentas / Tecnologias                            |
|--------------|------------------------------------------------------|
| Back-end     | Node.js · Express · TypeScript · Knex               |
| Banco        | SQLite / PostgreSQL (via Knex)                       |
| Ferramentas  | npm · ts-node / ts-node-dev · dotenv (ou variáveis)  |
| Desenvolvimento | ESLint (ou similar), estrutura modular, pastas organizadas |

## 📁 Estrutura do Projeto
```
/ (root)
├── src/ # código-fonte em TypeScript
│ ├── controllers/ # controladores das rotas
│ ├── routes/ # definição das rotas da API
│ ├── models/ # interfaces / tipos / entidades
│ └── db/ # configuração do Knex / migrations (se houver)
├── knexfile.ts # configuração do banco
├── package.json
└── tsconfig.json
```
## 🚀 Como Rodar Localmente

1. Clone o repositório  
```bash
git clone https://github.com/Gab-byt/api-restaurant.git  
cd api-restaurant
```
2.Instale dependências
```
npm install
```
3.Configure o banco (se usar .env, configure as variáveis)

4.Inicie em modo de desenvolvimento
```
npm run dev  # ou ts-node-dev index.ts (dependendo do seu setup)
```
5.A API estará disponível (por exemplo) em http://localhost:3000 — acesse endpoints conforme definido nas rotas.

## 📬 Contato / Contribuição

Projeto open-source: se quiser sugerir melhorias, bugs ou features, fique à vontade para abrir issues ou pull requests.

Feito por Faustino — fique à vontade para usar, adaptar e evoluir 😉
