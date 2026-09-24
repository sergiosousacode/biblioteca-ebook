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