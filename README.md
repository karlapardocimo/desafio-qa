# 🚀 Automação de Testes E2E - Desafio Analista de QA

Projeto desenvolvido para validar as funcionalidades de front-end de dois sites de certificação e institucionais da "Faculdade Exemplo".

## 🛠️ Ferramentas Utilizadas
- **Cypress**: Framework para automação de testes.
- **JavaScript**: Linguagem de script.
- **Mochawesome**: Geração de relatórios de execução em HTML.

## 🔍 Relatório de Bugs Encontrados

### Bug 001 - Site de Certificação (Link 1)
- **Cenário:** Clique no botão "Saiba mais".
- **Comportamento Atual:** O botão não realiza o redirecionamento. O teste de automação confirmou que a URL permanece inalterada após a interação.
- **Severidade:** Média (impacta a jornada de descoberta do usuário).

### Bug 002 - Site Institucional (Link 2)
- **Cenário:** Validação do botão "Inscreva-se".
- **Comportamento Atual:** [Mencione aqui se o botão funcionou ou se apresentou o mesmo erro do site 1].
- **Evidência:** Automação validando a mudança de URL através de asserções de integração.

## 🚀 Como Executar o Projeto
1. Clone o repositório.
2. No terminal, execute `npm install` para instalar as dependências.
3. Para abrir a interface visual: `npx cypress open`.
4. Para rodar em modo headless e gerar relatório: `npx cypress run`.