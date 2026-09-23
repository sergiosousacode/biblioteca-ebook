# AGENTS.md

## Objetivo

Desenvolver uma biblioteca digital de e-books utilizando Angular.

A aplicação deve permitir a leitura e o download de livros
em PDF, oferecendo uma interface moderna, minimalista
e responsiva.

## Tecnologias

- Angular
- TypeScript com strict habilitado
- SCSS
- Angular Router
- Componentes standalone

## Arquitetura

Organizar a aplicação em:

- core: serviços globais e configurações.
- shared: componentes reutilizáveis.
- features: funcionalidades da aplicação.

## Funcionalidades

1. Página inicial da biblioteca.
2. Catálogo de e-books.
3. Pesquisa por título ou autor.
4. Filtros por categoria literária.
5. Página de detalhes dos livros.
6. Leitura e download de arquivos PDF.

Funcionalidades futuras:

- Autenticação de usuários.
- Painel administrativo.
- Upload de e-books pelo administrador.
- Comentários e avaliações dos leitores.

## Regras de desenvolvimento

- Utilizar componentes standalone.
- Manter a tipagem estrita.
- Não utilizar any.
- Utilizar lazy loading nas rotas apropriadas.
- Separar a lógica de negócio da apresentação.
- Criar componentes reutilizáveis.
- Não instalar dependências sem autorização.

## Fluxo de trabalho

Antes de implementar uma funcionalidade:

1. Analisar os requisitos.
2. Identificar os arquivos necessários.
3. Apresentar um plano de implementação.
4. Aguardar aprovação.
5. Implementar a funcionalidade.
6. Executar os testes.
7. Apresentar os resultados.

## Restrições

- Não executar commits automaticamente.
- Não modificar configurações de produção.
- Não remover arquivos sem autorização.
- Não utilizar dados reais de usuários.

## Validação

Após implementar uma funcionalidade, executar:

npm run build

npm test -- --watch=false

Se algum comando falhar, identificar a causa
e apresentar as correções necessárias.