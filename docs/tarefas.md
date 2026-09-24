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
- [ ] Criar EbookService.
- [ ] Criar dados simulados.
- [ ] Exibir livros em grid.
- [ ] Implementar pesquisa.
- [ ] Implementar filtro por categoria.
- [ ] Implementar estado sem resultados.
- [ ] Testar responsividade.

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