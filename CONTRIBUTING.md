# Como contribuir

Obrigado por contribuir com o util-stunks. Este projeto é uma biblioteca npm
pequena; mantenha cada mudança simples, compatível e focada em uma única intenção.

## Preparar o ambiente

Você precisa do Git e do Node.js 24. Depois de clonar o repositório:

```bash
npm ci
npm test
npm run build
```

## Criar uma mudança

Atualize a branch principal e crie uma branch descritiva:

```bash
git switch main
git pull --ff-only
git switch -c fix/descricao-da-correcao
```

Use `feat/`, `fix/`, `docs/`, `test/` ou `chore/` conforme a finalidade.

- Preserve a API pública sempre que possível.
- Documente mudanças de comportamento no README.
- Adicione testes para correções, funcionalidades e casos extremos relevantes.
- Não envie `node_modules`, `dist` ou relatórios de cobertura.
- Não altere a versão em um PR comum; o mantenedor define a versão publicada.

## Validar

Antes de enviar uma alteração, execute:

```bash
npm ci
npm audit
npm run typecheck
npm test
npm run build
npm run test:dist
npm pack --dry-run
git diff --check
```

Confira se o pacote contém apenas os arquivos esperados e revise o diff completo.

## Commits e pull requests

Use Conventional Commits, por exemplo:

```text
fix(unabbreviate): corrige leitura do sufixo
feat(relative-time): adiciona novos rótulos
test: cobre conversões numéricas
docs: atualiza exemplos de uso
```

No pull request, descreva a motivação, as alterações, os testes executados e
eventuais impactos de compatibilidade. O PR deve estar focado, com CI aprovado e
sem artefatos gerados.

## Segurança

Não publique detalhes de vulnerabilidades em issues ou pull requests. Siga a
[política de segurança](SECURITY.md).
