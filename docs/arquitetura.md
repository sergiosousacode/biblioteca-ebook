# Arquitetura da Aplicação

## 1. Visão geral

A aplicação é uma biblioteca digital de e-books voltada para
poesia, literatura e histórias populares.

Nesta primeira versão, o projeto será somente frontend.
Os dados dos livros serão simulados localmente.

Posteriormente será desenvolvido um backend para autenticação,
administração, comentários, avaliações e gerenciamento dos livros.

---

## 2. Stack

### Frontend

- Angular
- TypeScript
- SCSS
- Angular Router
- Componentes standalone
- Reactive Forms quando necessário

### Desenvolvimento

- Node.js
- npm
- Git
- GitHub

---

## 3. Organização do projeto

A aplicação deve seguir uma organização baseada em funcionalidades.

src/app/

- core/
  - models/
  - services/
  - guards/

- shared/
  - components/
  - directives/
  - pipes/

- features/
  - home/
  - catalogo/
  - livro/
  - leitor/

- app.routes.ts
- app.config.ts

---

## 4. Responsabilidades

### core

Contém recursos utilizados globalmente pela aplicação.

Exemplos:

- modelos
- serviços globais
- guards
- configuração de APIs

### shared

Contém componentes reutilizáveis.

Exemplos:

- header
- footer
- card de livro
- campo de pesquisa
- loading

### features

Cada funcionalidade principal deve possuir sua própria pasta.

Exemplo:

features/catalogo/

- catalogo.component.ts
- catalogo.component.html
- catalogo.component.scss
- catalogo.component.spec.ts

---

## 5. Modelo inicial de Ebook

O modelo deve representar pelo menos:

- id
- titulo
- autor
- descricao
- categoria
- capaUrl
- pdfUrl
- anoPublicacao

Evitar o uso de `any`.

---

## 6. Rotas

Rotas inicialmente previstas:

/               Página inicial
/catalogo       Catálogo completo
/livro/:id      Detalhes do livro
/ler/:id        Leitor do e-book

As funcionalidades maiores devem utilizar lazy loading
quando apropriado.

---

## 7. Fluxo do usuário

Fluxo principal:

Home
  ↓
Catálogo
  ↓
Detalhes do livro
  ↓
Ler ou baixar PDF

O usuário não precisa realizar login para consultar ou ler
os livros na primeira versão.

---

## 8. Dados

Na primeira etapa serão utilizados dados simulados.

Os componentes não devem depender diretamente da origem dos dados.

Criar uma camada de serviço para acesso aos livros.

Isso permitirá substituir futuramente os dados simulados
por chamadas HTTP ao backend sem reestruturar toda a interface.

---

## 9. Responsividade

A aplicação deve funcionar em:

- desktop
- tablet
- smartphone

O catálogo deverá utilizar grid responsivo.

A interface deve priorizar leitura, acessibilidade e navegação simples.

---

## 10. Imagens

As capas dos livros devem utilizar formato otimizado para web,
preferencialmente WebP.

As imagens devem possuir texto alternativo.

Evitar imagens muito grandes ou desnecessárias.

Utilizar lazy loading quando apropriado.

---

## 11. Backend futuro

O backend não faz parte da primeira etapa.

Quando implementado, será responsável por:

- autenticação
- usuários
- administração
- cadastro de e-books
- upload de PDFs
- upload de capas
- comentários
- avaliações

O frontend deve ser estruturado de maneira que essa integração
possa ser adicionada posteriormente.

---

## 12. Regras arquiteturais

- Não utilizar `any`.
- Não colocar lógica de negócio complexa nos templates.
- Não duplicar componentes.
- Não acessar dados diretamente em vários componentes.
- Preferir serviços para acesso aos dados.
- Manter componentes pequenos e com responsabilidade definida.
- Criar testes para comportamentos relevantes.