const supertest = require('supertest');
var objectId = require("node-time-uuid");

const api = require('../../readableAPI');
const readableAPI = supertest.agent(api);

const token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
    Accept: "application/json",
    Authorization: token,
    "Content-Type": "application/json"
}

describe('Testes Udacity Readable API', () => {
    let categorias=[];

    it('GET /                   ==> Retorno text/html; charset=utf-8.', done => {
        readableAPI
            .get('/')
            .set(headers)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
 
    it('GET /categories         ==> Obter todas as categorias disponíveis para o aplicativo.', done => {
        readableAPI
        .get('/categories')
        .set(headers)
        .expect(200)
        .then(res => {
            Object.keys(res.body.byId).forEach(function(key,index) {
                categorias.push(res.body.byId[key].name);
            });            
            expect(res.body.byId).toBeInstanceOf(Object);
            done();
        })
    });
    it('GET /:category/posts    ==> Obter todas as postagens para uma categoria específica.', done => {
        categorias.forEach((categoria) => {
            readableAPI
            .get(`/${categoria}/posts`)
            .set(headers)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
        });        
    });

    it('GET /posts              ==> Obter todas as postagens.', done => {
        readableAPI
        .get('/posts')
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body).toBeInstanceOf(Array);
            done();
        })
    });

    let post = {
        title: 'Inclusao de postagem na fase de testes',
        body: 'corpo da postagem .',
        author: 'author',
        category: 'react',
        voteScore: 0,
        deleted: false,
        commentCount: 0
    }; 

    it('POST /posts             ==> Adicionar uma nova postagem.', done => {
        readableAPI
        .post('/posts')
        .set(headers)
        .send(post)
        .expect(200)
        .then(res => {
            post.voteScore = 1;
            console.log(post);
            console.log('res.body==>' + JSON.stringify(res.body));
            expect(res.body.category).toEqual(post.category);
            done();
        })
    });
/* 
    it('GET /posts/:id          ==> Obter os detalhes de uma única postagem.', done => {
        readableAPI
        .get('/posts/8xf0y6ziyjabvozdd253nds')
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.id).toEqual('8xf0y6ziyjabvozdd253nds');
            done();
        })
    });

    it('POST /posts/:id         ==> Votar em uma postagem.', done => {
        readableAPI
        .post('/posts/6ni6ok3ym7mf1p33lnez')
        .send({option: 'upVote'})
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.id).toEqual('6ni6ok3ym7mf1p33lnez');
            done();
        })
    });
    
    it('PUT /posts/:id          ==> Editar os detalhes de uma postagem existente.', done => {
        readableAPI
        .put('/posts/6ni6ok3ym7mf1p33lnez')
        .send({title: 'Titulo alterado', commentCount: 15})
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.id).toEqual('6ni6ok3ym7mf1p33lnez');
            expect(res.body.title).toBe('Titulo alterado');
            expect(res.body.commentCount).toBe(15);
            done();
        })
    });

    it('DELETE /posts/:id       ==> Definir o sinalizador excluído para uma postagem como "verdadeira"', done => {
        readableAPI
        .delete('/posts/8xf0y6ziyjabvozdd253nd')
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.deleted).toBe(true);
            done();
        })
    });

   it('GET /posts/:id/comments ==> Obter todos os comentários para uma única publicação.', done => {
        readableAPI
        .get('/posts/8xf0y6ziyjabvozdd253nd/comments')
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body).toBeInstanceOf(Array);
            expect(res.body).toHaveLength(2);
            done();
        })
    });
*/

    let comment = {
        parentId: "8xf0y6ziyjabvozdd253nds",
        body: 'Corpo do comentario.',
        author: 'author',
        voteScore: 0,
        deleted: false,
        parentDeleted: false
    }; 
 
    it('POST /comments          ==> Adicionar um comentário a uma publicação.', done => {
        readableAPI
        .post('/comments')
        .send(comment)
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.author).toEqual(comment.author);
            done();
        })
    });
/*
    it('GET /comments/:id       ==> Obter os detalhes para um único comentário.', done => {
        readableAPI
        .get(`/comments/${comments.id}`)
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.id).toEqual(comments.id);
            done();
        })
    });    

    it('PUT /comments/:id       ==> Editar os detalhes de uma postagem existente.', done => {
        readableAPI
        .put(`/comments/${comments.id}`)
        .send({timestamp: timestamp, body: 'XCorpo do comentario.'})
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.timestamp).toEqual(timestamp);
            expect(res.body.body).toBe('XCorpo do comentario.');
            done();
        })
    });

    it('DELETE /comments/:id    ==> Definir o sinalizador excluído para um comentário como "verdadeira"', done => {
        readableAPI
        .delete('/comments/8tu4bsun805n8un48ve89')
        .set(headers)
        .expect(200)
        .then(res => {
            expect(res.body.deleted).toBe(true);
            done();
        })
    });
*/
});
