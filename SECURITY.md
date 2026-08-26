# Política de segurança

## Versões com suporte

A versão mais recente publicada no npm e o código presente na branch `main`
recebem correções de segurança. Versões antigas podem não receber atualizações.

Antes de relatar um problema, confirme se ele ainda ocorre após uma instalação
limpa da versão mais recente:

```bash
npm install util-stunks@latest
```

## Relatar uma vulnerabilidade

Não abra uma issue, discussão ou pull request público com detalhes exploráveis.
Use **Security > Report a vulnerability** no GitHub quando a opção estiver
disponível. Caso contrário, contate o mantenedor privadamente pelo perfil do
proprietário do repositório e combine um canal seguro.

Inclua, quando possível, a versão afetada, o impacto, passos mínimos para
reprodução e uma sugestão de mitigação. Não acesse nem altere dados de terceiros.

## Dependências e publicação

O Dependabot verifica as dependências npm semanalmente. Alterações de segurança
devem passar por testes, checagem de tipos, build e inspeção do pacote com
`npm pack --dry-run` antes da publicação.

Nunca publique tokens ou credenciais no código, em testes, issues ou logs. Se um
segredo for enviado por engano, revogue-o imediatamente; removê-lo de um commit
não apaga o histórico já publicado.
