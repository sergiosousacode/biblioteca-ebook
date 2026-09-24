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

- [x] Criar página de catálogo.
- [x] Criar modelo Ebook.
- [x] Criar EbookService.
- [x] Criar dados simulados.
- [x] Exibir livros em grid.
- [x] Implementar pesquisa.
- [x] Implementar filtro por categoria.
- [x] Implementar estado sem resultados.
- [x] Testar responsividade.

Estado após correção das pendências de implementação (24/09/2026):

Fase 3 concluída. As pendências de implementação foram corrigidas, a validação automatizada passou e a validação manual foi concluída e aprovada pelo usuário.

| Tarefa | Evidência e resultado |
| --- | --- |
| Página de catálogo | Implementada em `src/app/features/catalogo/` como componente standalone, carregado por `loadComponent` na rota `/catalogo` em `app.routes.ts`. A seção e os testes de interação foram transferidos da Home. Links do hero e do header usam Angular Router; testes validam acesso direto, título da página e navegação Home → Catálogo → Home. |
| Modelo Ebook | O modelo existente `Book`, em `core/models/book.ts`, foi completado com `readonly publicationYear: number`, correspondente ao ano de publicação exigido pela arquitetura. Os seis mocks e a fixture de `book-card.spec.ts` foram atualizados e compilam com tipagem estrita. O nome `Book` foi mantido. |
| EbookService | Reaproveitado `BookService`, em `core/services/book.service.ts`, sem renomeação ou duplicação. Centraliza os dados e a filtragem e é injetado pela Home e pelo catálogo. Seus cinco testes continuam aprovados. |
| Dados simulados | Seis livros fictícios e três categorias em `core/data/books.mock.ts`, agora com anos de publicação. Capas locais mantidas. A disponibilização de PDFs permanece reservada às fases posteriores. |
| Grid | Transferido para `features/catalogo/catalogo.html` e `catalogo.scss`, reutilizando `BookCard`. Mantidos título, autor, categoria, sinopse, capa com texto alternativo e lazy loading, e estilos para três, duas ou uma coluna. Testes validam os seis cards; o layout foi aprovado pelo usuário no navegador. |
| Pesquisa | Reutiliza `SearchInput` e `BookService`: busca por título/autor ignorando acentos, caixa e espaços externos. Testes do serviço e de integração no catálogo aprovados. |
| Filtro por categoria | Reutiliza `CategoryFilter` e o serviço, com opção Todas e combinação com pesquisa. Teste de integração valida resultados e `aria-pressed` na nova página. |
| Estado sem resultados | Transferido para o catálogo com mensagem, contador acessível e limpeza de pesquisa/filtros. Teste confirma estado vazio e recuperação dos seis livros. |
| Responsividade | Validação manual concluída pelo usuário em desktop, tablet e mobile: layout responsivo, sem rolagem horizontal indevida. |

O footer existente foi extraído para `shared/components/footer/` e renderizado uma única vez por `App`, para atender às duas páginas sem duplicar seu template. A Home mantém hero e destaques.

Validação automatizada após as correções:

- `./scripts/validate.sh`: aprovado.
- `npm run build`: sem erros; duas rotas pré-renderizadas (`/` e `/catalogo`), com bundles lazy das páginas.
- `npm test -- --watch=false`: 11 testes aprovados em 5 arquivos.
- Testes de navegação cobrem links do hero/header, retorno à Home, título do catálogo, footer compartilhado e alvos de acesso ao conteúdo.
- `git diff --check`: aprovado.

Limitação reservada às fases posteriores:

- `pdfUrl` continua `null` nos mocks. Leitor, arquivos PDF e funcionalidades de leitura/download não fazem parte destas correções.

Validação manual concluída pelo usuário:

- Responsividade aprovada em desktop, tablet e mobile, sem rolagem horizontal indevida.
- Pesquisa, filtros e navegação funcionaram corretamente.
- Acesso direto e recarga em `/catalogo` aprovados, sem erros relacionados à aplicação no console.

A revisão geral de acessibilidade (incluindo teclado e foco) permanece prevista na Fase 6; não foi declarada concluída por este registro.

---

# Fase 4 — Detalhes do livro

- [x] Criar rota /livro/:id.
- [x] Exibir capa.
- [x] Exibir título.
- [x] Exibir autor.
- [x] Exibir categoria.
- [x] Exibir sinopse.
- [x] Criar botão "Ler".
- [x] Criar botão "Baixar PDF".
- [x] Tratar livro inexistente.

Implementação e revisão por item (24/09/2026):

Fase 4 concluída e aprovada pelo usuário. Os itens de implementação foram validados pelos testes abaixo; o usuário confirmou a responsividade e a ausência de erros no DevTools.

| Item | Implementação e evidência |
| --- | --- |
| Rota `/livro/:id` | Componente standalone em `src/app/features/livro/`, carregado por `loadComponent` em `app.routes.ts`. `app.routes.server.ts` usa os IDs do `BookService` para pré-renderizar os seis livros, com fallback de renderização no servidor para outros IDs. Testes cobrem acesso direto e navegação pelos títulos dos cards do catálogo e dos destaques. |
| Capa | `livro.html` usa `coverUrl` do `Book`, com dimensões e texto alternativo. Teste verifica caminho e descrição. |
| Título | Exibido no `h1` a partir de `Book.title`; testes verificam acesso direto e atualização ao trocar o ID na mesma instância da página. |
| Autor | Exibido a partir de `Book.author`; testado para livros diferentes. |
| Categoria | Nome obtido das categorias do `BookService` por `categoryId`; testes verificam atualização entre Poesia e Literatura. |
| Sinopse | Exibida a partir de `Book.synopsis`, sob seção identificada; conteúdo verificado por teste. |
| Botão "Ler" | Criado desabilitado, com explicação de indisponibilidade associada por `aria-describedby`, conforme plano aprovado. Teste verifica rótulo, estado e explicação. A ação de leitura será implementada na Fase 5. |
| Botão "Baixar PDF" | Criado desabilitado e associado à mesma explicação, conforme plano aprovado. Teste verifica rótulo e estado. O download será implementado na Fase 5. |
| Livro inexistente | `BookService.getBookById` retorna `undefined` para ID desconhecido; página mostra "Livro não encontrado", sem dados ou ações do livro anterior, e oferece retorno ao catálogo. Testes cobrem acesso direto, mudança de ID válido para inválido e recuperação para ID válido. |

Reaproveitamento e escopo:

- Mantidos o modelo `Book`, os mocks e o `BookService`; acrescentada apenas a consulta por ID ao serviço.
- Cards existentes receberam link no título, usado pela Home e pelo catálogo. Header e footer compartilhados continuam atendendo à nova página.
- Ano de publicação também exibido a partir do campo existente.
- Nenhum leitor, arquivo PDF, download ou funcionalidade das fases posteriores foi implementado. Os dois botões estão concluídos como interface desabilitada, não como operações funcionais de leitura/download.

Validação automatizada:

- `./scripts/validate.sh`: aprovado.
- `npm run build`: sem erros, com oito rotas pré-renderizadas (`/`, `/catalogo` e os seis livros).
- `npm test -- --watch=false`: 16 testes aprovados em 6 arquivos.
- `git diff --check`: aprovado.

Validação manual e aprovação do usuário:

- Responsividade aprovada e ausência de erros no DevTools confirmada pelo usuário.
- Encerramento da Fase 4 autorizado pelo usuário.
- Acesso direto e IDs inexistentes têm cobertura automatizada conforme registrado acima. Não foi registrada confirmação manual específica de recarga desses endereços ou de teclado/foco; a revisão geral de acessibilidade permanece na Fase 6.
- Leitura e download permanecem reservados à Fase 5; os botões continuam desabilitados conforme o escopo aprovado.

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