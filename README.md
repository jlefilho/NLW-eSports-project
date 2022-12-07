# NLW eSports

<img src="./example.png" /> <br/> <br/>

## Funcionalidades da aplicação
- Publicar anúncios para encontrar um player para jogar, selecionando o jogo e sua disponibilidade para jogar
- Encontrar anúncios publicados
- Copiar o Discord do player

## Tecnologias utilizadas
# Web
- React
- Vite
- Radix
- Tailwind
- TypeScript

# Mobile
- React Native
- Expo
- React Navigation
- TypeScript

# Backend
- Node
- Express
- TypeScript
- Prisma

### Instalação
1. Clone o repositório:

```bash
git clone https://github.com/jlefilho/NLW-eSports-project.git
```

2. Acesse as pastas do projeto e instale as dependências necessárias:

```bash
npm install
```
3. Acesse a pasta server, renomeie o arquivo `.env.example` para `.env` que se encontra na raiz do projeto e modifique a variável **DATABASE_URL** com suas configurações do seu banco de dados:
```bash
DATABASE_URL="postgresql://USER:PASS@HOST:PORT/DATABASE?schema=public"
```

4. "Suba" o server:

```bash
npm run dev
```

5. Acesse a pasta web execute o projeto:

```bash
npm run dev
```

6. Acesse a pasta mobile execute o projeto:

```bash
npm run start
```


