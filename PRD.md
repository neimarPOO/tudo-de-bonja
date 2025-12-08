# Documento de Requisitos do Produto (PRD) - Tudo de Bonja (Edição de Natal)

## 1. Introdução
O **Tudo de Bonja** é um catálogo digital interativo e temático, desenvolvido para servir como vitrine para pequenos produtores e startups locais durante o período natalino. O projeto visa conectar consumidores a produtos artesanais como biscoitos, doces, petiscos e bebidas, oferecendo uma experiência de navegação visualmente rica e festiva.

## 2. Objetivos
- **Divulgação:** Promover produtos de empreendedores locais de forma atraente e organizada.
- **Conexão:** Facilitar o acesso do consumidor às lojas ou contatos diretos (WhatsApp/Sites) dos produtores.
- **Experiência do Usuário:** Proporcionar uma navegação agradável, responsiva e imersiva com temática natalina.

## 3. Público-Alvo
- **Consumidores:** Pessoas da região em busca de opções artesanais para presentes e ceias de Natal.
- **Produtores:** Pequenos empreendedores que necessitam de visibilidade digital para seus produtos sazonais.

## 4. Funcionalidades Principais

### 4.1. Interface Pública (Vitrine)
- **Listagem de Produtos:** Exibição de produtos em formato de "cards" contendo:
    - Imagem do produto com efeito de zoom ao passar o mouse.
    - Título e descrição breve.
    - Categoria (ex: Biscoitos de Natal, Petiscos, Bebidas).
    - Botão de ação ("Conhecer a Startup") que redireciona para o link do produtor.
- **Filtragem por Categoria:** Navegação por abas para filtrar produtos (Todos, Biscoitos, Doces, etc.).
- **Busca:** Barra de pesquisa no cabeçalho para filtrar produtos por nome ou descrição em tempo real.
- **Design Temático:**
    - Identidade visual natalina (cores dourado, vermelho rubi, verde esmeralda e carvão).
    - Animações CSS de luzes de Natal piscantes ("flash").
    - Background com textura sutil e sobreposição de elementos festivos.

### 4.2. Área Administrativa (Admin)
- **Autenticação Simples:** Acesso restrito via senha única (Hardcoded: `admin`).
- **Gestão de Catálogo (CRUD):**
    - **Adicionar Produto:** Formulário para inclusão de novos itens (Nome, Preço, Categoria, URL da Imagem, Descrição).
    - **Editar Produto:** Possibilidade de alterar todas as informações de um produto existente.
    - **Excluir Produto:** Remoção de itens da listagem com confirmação de segurança.
- **Visualização Tabular:** Lista compacta de todos os produtos cadastrados para rápida gestão.

### 4.3. Configurações e Preferências
- **Tema Claro/Escuro:** Suporte a alternância de temas (Dark Mode por padrão), com preferência salva no armazenamento local do navegador (`localStorage`).

## 5. Requisitos Não Funcionais
- **Responsividade:** O layout deve se adaptar perfeitamente a dispositivos móveis (celulares), tablets e desktops.
- **Performance:** Carregamento rápido de imagens e transições suaves entre interações.
- **Usabilidade:** Interfaces intuitivas, com feedback visual claro (hover states, foco) para o usuário.

## 6. Stack Tecnológico
- **Frontend:** React (v18+), TypeScript.
- **Build Tool:** Vite.
- **Estilização:** Tailwind CSS (com configuração de cores customizada em `tailwind.config.js` ou via variáveis CSS).
- **Roteamento:** React Router DOM.
- **Ícones:** Material Symbols.

## 7. Arquitetura de Dados e Estado
- **Estado Global (Simulado):** Atualmente, os produtos são gerenciados no estado principal da aplicação (`App.tsx`) e passados via props.
- **Persistência:**
    - **Dados dos Produtos:** Volátil. As alterações feitas no Admin **não são persistidas** permanentemente (banco de dados ou LocalStorage) e são perdidas ao recarregar a página. O estado inicial é carregado de `constants.ts`.
    - **Tema:** Persistente via `localStorage`.

## 8. Futuras Melhorias (Sugestões)
- **Persistência Real:** Implementar um backend (Firebase, Supabase ou API Node.js) ou usar `localStorage` para manter as alterações do catálogo entre sessões.
- **Upload de Imagens:** Permitir o upload direto de arquivos de imagem em vez de depender de URLs externas.
- **Carrinho de Compras:** Funcionalidade para selecionar múltiplos itens e enviar um pedido consolidado via WhatsApp.
