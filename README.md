# ☕ Café Gourmet

Sistema web de cafeteria desenvolvido originalmente como **Trabalho de Conclusão de Curso (TCC)** do curso de **Sistemas de Informação**, em 2024.

O projeto foi idealizado para representar duas áreas de uma cafeteria: uma interface para os clientes realizarem seus pedidos e um sistema interno para auxiliar os funcionários no acompanhamento das operações.

🌐 **Projeto online (Vercel):**  
https://cafeteria-projeto-psi.vercel.app/

🌐 **Versão estática anterior (GitHub Pages):**  
https://luizguilhermee13.github.io/cafeteria-projeto/

---

## 📌 Status do Projeto

🔄 **Em processo de migração para React (SPA)**

Atualmente, o projeto está passando por uma grande refatoração. O código legado em HTML/CSS puro está sendo totalmente convertido para uma aplicação moderna baseada em componentes utilizando **React, Vite, React Router** e estilizada com **Tailwind CSS**.

O objetivo desta nova etapa é modernizar a arquitetura, melhorar a performance, a responsividade e aplicar boas práticas de desenvolvimento front-end.

---

## 🚀 Sobre o Projeto

O Café Gourmet foi dividido em duas áreas principais:

### 🛒 Aplicativo do Cliente

Interface destinada ao cliente, contendo páginas para:

- Visualização do cardápio responsivo
- Carrinho de compras interativo
- Histórico de pedidos
- Informações sobre a cafeteria e loja física

## 🛠️ Evolução e Reestruturação Atual

Principais melhorias aplicadas nesta nova versão:

- ⚛️ **Migração para SPA** com React e roteamento dinâmico via `react-router-dom`.
- 🎨 **Estilização moderna** com utilitários do **Tailwind CSS v4**.
- ♻️ **Refatoração completa do código**, saindo de múltiplos arquivos HTML isolados para uma arquitetura modular baseada em componentes reutilizáveis.
- 📱 **Responsividade aprimorada** para diversos tamanhos de tela.
- 🚀 **Deploy otimizado** na Vercel com suporte a rotas de Single Page Application.

---

## 💻 Tecnologias Utilizadas (Stack Atual)

- **React** — Biblioteca para construção de interfaces baseadas em componentes
- **Vite** — Ferramenta de build rápida e moderna
- **Tailwind CSS** — Framework CSS utilitário para estilização ágil e responsiva
- **React Router** — Gerenciamento de rotas e navegação SPA
- **React Icons** — Biblioteca de ícones padronizados
- **Git / GitHub** — Versionamento de código
- **Vercel** — Plataforma de hospedagem e CI/CD

---

## 📂 Estrutura do Projeto (Atualizada)

```text
cafeteria-projeto/
│
├── cafeteriaGoument/         # Diretório principal da aplicação React
│   ├── public/               # Arquivos públicos e assets estáticos
│   ├── src/
│   │   ├── assets/           # Imagens e recursos visuais
│   │   ├── components/       # Componentes reaproveitáveis (Header, Cards, etc.)
│   │   ├── layouts/          # Páginas principais (Cardápio, Carrinho, Login, Sobre)
│   │   ├── routes/           # Configuração de rotas da aplicação
│   │   ├── styles/           # Arquivos de estilo global e Tailwind
│   │   ├── App.jsx           # Componente raiz
│   │   └── main.jsx          # Ponto de entrada da aplicação
│   ├── package.json          # Dependências e scripts do projeto
│   └── vercel.json           # Configurações de redirecionamento para SPA na Vercel
│
└── README.md
```
