# GeoBrasil

GeoBrasil é um projeto projeto que visa implementar o desafio do InsightLab. O sistema consiste em uma aplicação que consome a API de notícias do IBGE, permitindo que os usuários visualizem releases, notícias mais recentes e marquem notícias como favoritas. Para acessar as notícias, os usuários precisam estar autenticados no sistema.


## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Ambiente](#configuração-do-ambiente)
  - [Pré-requisitos](#pré-requisitos)
  - [Instruções de Configuração](#instruções-de-configuração)
- [Diagrama de fluxo de dados](#fluxo-de-dados)

## Visão Geral

O GeoBrasil oferece uma interface web onde os usuários podem acessar notícias sobre o Brasil. A aplicação é dividida em dois serviços principais:

1. **Backend**: Implementado com FastAPI, fornece APIs RESTful para acessar dados de notícias e fazer autenticações.
2. **Frontend**: Implementado com React e Vite, fornece uma interface amigável para os usuários interagirem com os dados fornecidos pelo backend.

## Tecnologias Utilizadas

- **Backend**:
  - Python 3.12.3
  - FastAPI
  - SQLAlchemy
  - Alembic
  - Uvicorn
  - SQLite
  - Docker

- **Frontend**:
  - React
  - Vite
  - TypeScript
  - TailwindCSS
  - Docker

## Configuração do ambiente
  1. Clone o repositório
  lone o repositório**:

   ```bash
   git clone https://github.com/AlanisOliveira/InsightChallenge.git
   ```
   2. Executar com o docker
   ```bash 
   docker compose up --build
   ```
   3. Acesse a aplicação
   - Backend: http://localhost:8000
   - Front-end: http://localhost:5173/

## Diagrama de fluxo de dados

![Fluxo de dados](https://drive.google.com/uc?export=view&id=1FEUnHG2cM0sFLTdnSEWPgcjV_fAy2K6B
)

