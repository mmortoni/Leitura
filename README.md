## Projeto Leitura
Este é o projeto web de postagem de conteúdo e comentário, inicial para o projeto de avaliação final para o curso de Redux da Udacity. Os usuários poderão publicar conteúdo em categorias predefinidas, comentar em suas postagens e postagens de outros usuários, e votar em posts e comentários. Os usuários também poderão editar e excluir postagens e comentários.

### Pré-requisitos

Para executar este aplicativo, você precisará do seguinte:

* Node.js
* Linha de comando (Windows: cmd / Mac: terminal)
* YARN ou NPM

### Início

1. Clone este repositório: `git clone https://github.com/mmortoni/Leitura.git`
2. Mover para a pasta: `cd Leitura\api-server (execute o passo 4)`.<br />
3. Mover para a pasta: `cd Leitura\frontend (execute o passoa 4)`.<br />

4. Para executar:

```
yarn install
```
ou
```
npm install
```

5. Mover para a pasta: `cd Leitura`.<br />
```
executa.bat
```
ou 

```
node index.js
```

##### Abrir  http://localhost:3001/

### Testes
O aplicativo tem um conjunto de testes escrito em Jest & Enzyme, que pode ser executado na pasta `Leitura\api-server` com ```yarn test``` ou ```npm test```. 

##### Funcionalidades:

###### Página Principal

![POSTS](public/posts.png?raw=true "CRUD de POSTS")

###### Página Comments

![COMMENTS](public/comments.png?raw=true "CRUD de COMMENTS")

###### Routing      
- [x] A página principal - Posts conecta-se à página de Comments, por meio do HREF do título do Post.
- [x] A página de Comments conecta-se de volta à página principal, clicando-se na aba Posts.
