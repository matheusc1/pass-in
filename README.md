# PASS-IN 🎫

Aplicação desenvolvida durante o NLW Unite da [Rocketseat](https://www.rocketseat.com.br/)

## Executando o projeto 💻

Abaixo seguem as instruções para você executar o projeto na sua máquina.

Comece clonando o repositório, a API e instale suas dependências:

```sh
git clone https://github.com/rocketseat-education/nlw-unite-nodejs
cd nlw-unite-nodejs

# Crie um arquivo .env e coloque o seguinte código:
# DATABASE_URL:"file:./dev.db"

npm install
npx prisma db seed
npm run dev

# Após isso instale o front-end da aplicação

git clone https://github.com/matheusc1/pass-in
cd pass-in
npm install
npm run dev
```

## Tecnologias utilizadas ⚛️

- [React](https://github.com/facebook/react)
- [Vite](https://vitejs.dev/guide/)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Tailwindcss](https://tailwindcss.com/)

## Layout 🎨

Desenvolvido com base no seguinte layout: [pass-in ReactJS](https://www.figma.com/community/file/1356738933008624188)

