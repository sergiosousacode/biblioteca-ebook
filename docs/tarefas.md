# Tarefas do Projeto

## Legenda

- [ ] Não iniciado
- [x] Concluído

---

# Fase 1 — Estrutura inicial

- [x] Criar projeto Angular.
- [x] Configurar Angular Router.
- [x] Configurar SCSS.
- [x] Habilitar TypeScript strict.
- [x] Criar AGENTS.md.
- [x] Criar documentação inicial.
- [x] Criar script de validação.

---

# Fase 2 — Página inicial

- [x] Criar header.
- [x] Criar identidade visual inicial.
- [x] Criar seção principal (hero).
- [x] Criar seção de livros em destaque.
- [x] Criar card reutilizável de e-book.
- [x] Criar footer.
- [x] Implementar responsividade.
- [x] Criar testes necessários.

Critério de conclusão:

- Página funcionando em desktop e mobile.
- Build sem erros.
- Testes passando.
- Sem erros no console do navegador.

Estado da implementação (24/09/2026):

- Header, identidade visual, hero, card reutilizável, footer e regras responsivas já existiam e foram reaproveitados.
- Adicionada seção de três livros em destaque usando o serviço e os cards existentes, independente dos filtros da biblioteca.
- Header ajustado para permitir quebra da navegação em telas estreitas.
- Testes complementados para destaques, links internos e renderização/atualização dos cards.
- Validação executada com `./scripts/validate.sh`: `npm run build` sem erros e `npm test -- --watch=false` com 10 testes aprovados em 4 arquivos.
- Validação manual concluída pelo usuário no navegador: interface testada em desktop e modo responsivo mobile; após limpar o console e recarregar a aplicação, não ocorreram erros relacionados à aplicação.
- Fase 2 concluída: critérios de conclusão atendidos, sem pendências nesta fase.

---

# Fase 3 — Catálogo

- [ ] Criar página de catálogo.
- [ ] Criar modelo Ebook.
- [x] Criar EbookService.
- [x] Criar dados simulados.
- [x] Exibir livros em grid.
- [x] Implementar pesquisa.
- [x] Implementar filtro por categoria.
- [x] Implementar estado sem resultados.
- [ ] Testar responsividade.

Revisão do código atual (24/09/2026):

A fase permanece incompleta. Os itens marcados abaixo foram verificados na implementação existente na Home; isso não comprova a existência da página `/catalogo`. A revisão alterou somente este documento, sem implementar correções.

| Tarefa | Evidência e resultado |
| --- | --- |
| Página de catálogo | Pendente: `src/app/app.routes.ts` declara apenas `/`; não existe `src/app/features/catalogo/`. `home.html` contém uma seção `#catalogo`, e os links do hero e de `shared/components/header/header.html` apontam para essa âncora. É necessário criar a página standalone em `/catalogo` com lazy loading, reaproveitar a seção e validar a navegação e o acesso direto. |
| Modelo Ebook | Parcial: `src/app/core/models/book.ts` contém `Book`, com título, autor, sinopse, categoria por ID, capa e `pdfUrl`, mas falta ano de publicação exigido pela seção 5 da arquitetura. Completar o modelo, os dados de `core/data/books.mock.ts` e a fixture de `shared/components/book-card/book-card.spec.ts`. O nome `Book` por si só não é uma falha funcional. |
| EbookService | Implementado como `BookService`, em `core/services/book.service.ts`: centraliza livros/categorias e filtragem, é injetado pela Home e tem cinco testes aprovados. Não é necessário duplicá-lo apenas para mudar o nome. |
| Dados simulados | Implementados em `core/data/books.mock.ts`: seis livros fictícios e três categorias, consumidos via serviço. As seis capas referenciadas existem em `public/images/covers/`, em SVG pequenos (875–1492 bytes); WebP é preferência, não exigência exclusiva. Ano de publicação e PDFs têm as limitações registradas nesta revisão. |
| Grid | Implementado em `features/home/home.html` e `home.scss` com `BookCard` reutilizável. Testes confirmam seis cards e apresentação de título, autor, categoria, sinopse e capa, com texto alternativo e lazy loading. O CSS define três, duas ou uma coluna conforme a largura; a aparência depende de navegador. |
| Pesquisa | Implementada em `shared/components/search-input/`, `home.ts` e `BookService`: busca por título/autor, ignorando acentos, caixa e espaços externos. Testes de serviço e integração aprovados. |
| Filtro por categoria | Implementado em `shared/components/category-filter/`, `home.ts` e `BookService`, com opção Todas e combinação com pesquisa. Testes verificam resultados e estado `aria-pressed`. |
| Estado sem resultados | Implementado em `home.html` e `home.ts`: mensagem, contador acessível e ação para limpar pesquisa/filtros. O teste de integração confirma o estado vazio e a recuperação dos seis livros. |
| Responsividade | Existem media queries em `home.scss` e componentes compartilhados. Não foi executada validação visual nesta revisão. A aprovação manual anterior é histórica: o código atual não contém a rota e o ano de publicação da versão anteriormente relatada, portanto não é possível associar aquela aprovação à conclusão desta fase no estado atual. |

Validação automatizada desta revisão:

- `./scripts/validate.sh`: aprovado.
- `npm run build`: sem erros; uma rota pré-renderizada (`/`).
- `npm test -- --watch=false`: 10 testes aprovados em 4 arquivos.
- TypeScript strict e templates estritos habilitados; nenhum uso de `any` encontrado em `src/app`.
- Os testes atuais não cobrem `/catalogo`, pois essa rota não está implementada. Build e testes aprovados não eliminam as pendências acima.

Limitação em relação aos requisitos gerais:

- Todos os `pdfUrl` em `src/app/core/data/books.mock.ts` são `null`, e não há PDFs em `public/`. Portanto, o requisito de disponibilizar arquivo PDF por livro ainda não está atendido. Será necessário fornecer os arquivos e URLs válidas para leitura/download nas fases correspondentes; nenhum PDF ou funcionalidade de leitura foi adicionado nesta revisão.

Verificações dependentes de navegador:

- Na versão atual: conferir o grid e os controles em desktop, tablet e smartphone, ausência de rolagem horizontal, legibilidade, carregamento das capas e interação com pesquisa/filtros/estado vazio.
- Conferir navegação por teclado, foco e console/Network após recarregar e interagir com a aplicação.
- Após implementar a página: repetir as verificações em `/catalogo`, incluindo acesso direto, recarga e navegação Home → Catálogo → Home. Não considerar essa rota validada enquanto não existir.

---

# Fase 4 — Detalhes do livro

- [ ] Criar rota /livro/:id.
- [ ] Exibir capa.
- [ ] Exibir título.
- [ ] Exibir autor.
- [ ] Exibir categoria.
- [ ] Exibir sinopse.
- [ ] Criar botão "Ler".
- [ ] Criar botão "Baixar PDF".
- [ ] Tratar livro inexistente.

---

# Fase 5 — Leitor

- [ ] Criar página de leitura.
- [ ] Implementar visualização do PDF.
- [ ] Implementar download.
- [ ] Criar navegação de retorno.
- [ ] Testar em desktop.
- [ ] Testar em smartphone.

---

# Fase 6 — Qualidade

- [ ] Revisar acessibilidade.
- [ ] Revisar responsividade.
- [ ] Revisar carregamento das imagens.
- [ ] Otimizar assets.
- [ ] Executar testes.
- [ ] Executar build de produção.

Validação:

./scripts/validate.sh

---

# Futuro — Backend

Não implementar nesta fase.

- [ ] Autenticação.
- [ ] Cadastro de usuários.
- [ ] Área administrativa.
- [ ] Cadastro de e-books.
- [ ] Upload de capas.
- [ ] Upload de PDFs.
- [ ] Comentários.
- [ ] Avaliação por estrelas.
- [ ] Cadastro com e-mail e WhatsApp.