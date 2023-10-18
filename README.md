# Backend com Sanity e JavaScript

![GitHub](https://img.shields.io/github/issues/arthurritzel/back_clube)
![GitHub](https://img.shields.io/github/forks/arthurritzel/back_clube)
![GitHub](https://img.shields.io/github/stars/arthurritzel/back_clube)

Este repositório contém o código-fonte do backend de um site desenvolvido com o framework Sanity e JavaScript. O Sanity é um sistema de gerenciamento de conteúdo (CMS) headless que permite criar, editar e distribuir conteúdo para aplicativos da web e móveis.

## Descrição

Este projeto é uma implementação de um backend usando o framework Sanity para gerenciar o conteúdo de um site. Ele fornece uma API para criar, atualizar e recuperar dados que são utilizados pelo frontend do site.

## Funcionalidades

O backend oferece as seguintes funcionalidades:

- **Gerenciamento de Conteúdo**: Use o Sanity Studio para criar e editar conteúdo facilmente. Defina tipos de documentos e campos personalizados para suas necessidades.

- **API RESTful**: O backend fornece uma API RESTful que pode ser usada pelo frontend para recuperar dados.

- **Webhooks (Opcional)**: Configure webhooks para acionar ações específicas quando o conteúdo é alterado, como atualizar o cache ou enviar notificações.

## Pré-requisitos

- Node.js instalado
- Sanity CLI instalado (para configurar e implantar o Sanity Studio)
- Configuração do projeto Sanity (arquivo `sanity.json`) com suas credenciais e configurações de dataset

## Configuração

1. Clone este repositório:

   ```bash
   git clone https://github.com/arthurritzel/back_clube.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd back_clube
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure o Sanity Studio seguindo a documentação oficial do Sanity (https://www.sanity.io/docs/getting-started-with-sanity-cli).

5. Configure suas credenciais do Sanity no arquivo `.env`:

   ```
   SANITY_API_TOKEN=sua-chave-de-autenticacao
   SANITY_PROJECT_ID=seu-id-do-projeto
   ```

## Uso

1. Inicie o servidor do backend:

   ```bash
   npm run dev
   ```

2. Acessar o Sanity Studio em [http://localhost:3333](http://localhost:3333) para criar e editar conteúdo.


**Desenvolvido por [Arthur Ritzel]**

- [Repositorio com o site](https://github.com/arthurritzel/Clube-ciencias)

