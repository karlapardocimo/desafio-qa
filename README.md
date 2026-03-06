# Automação de Testes E2E - Desafio Analista de QA

## Relatório de Bugs e Melhorias - Desafio QA Rubeus

Este documento detalha as falhas e oportunidades de melhoria identificadas através de testes automatizados com Cypress nas páginas de certificação e institucional da Faculdade Exemplo.

## Correções site: [https://qualidade.apprbs.com.br/site]

Item 01 - Conteúdo "Cursos" não localizado
Tipo: Correção.
Classificação: Utilidade (pois impede o usuário de ver o que a instituição oferece).Prioridade: Alta.
Descrição: O sistema falha ao carregar ou exibir o elemento de texto "Cursos", essencial para a navegação do usuário.
_________________________________________________________________________________
Item 02 - Falha no CTA "Inscreva-se"
Tipo: Correção.
Classificação: Utilidade (é a função principal da página que falhou).
Prioridade: Alta.
Descrição: O botão de inscrição não foi encontrado ou não está clicável, interrompendo o fluxo de conversão.
_________________________________________________________________________________
Item 03 - Visibilidade do Captcha
Tipo: Melhoria ou Correção.
Classificação: Usabilidade (atrapalha o envio do formulário).
Prioridade: Média.
Descrição: O ícone de captcha está oculto (.hide), o que pode impedir a validação de segurança por parte do usuário.



## Correções site: [https://qualidade.apprbs.com.br/certificacao]

Item 04 - Botão "Saiba mais" inoperante (Certificação)
Tipo: Correção
Classificação: Utilidade
Prioridade: Alta
Descrição: Ao clicar no botão "Saiba mais", o sistema não realiza o redirecionamento esperado para outra página ou seção. O teste automatizado confirmou que a URL permanece inalterada após a interação, impedindo o usuário de acessar informações adicionais sobre a certificação.



2. Instruções para Execução do Projeto
Para rodar este projeto localmente, siga os passos abaixo:

Instale as dependências necessárias utilizando o comando: 'npm install'
Para abrir a interface interativa do Cypress: 'npx cypress open'
Para rodar os testes em modo headless e gerar relatórios: 'npx cypress run'