module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.marko(require('../views/home/index.marko'));
    });
    
    app.get('/livros', (req, res, next) => {
        res.marko(require('../views/list/list.marko')
        ,{
            livros : [
                {
                    id: 1,
                    titulo: 'Node basico',
                },
                {
                    id: 2,
                    titulo: 'Node avancado'
                }
            ]
        }
        );
    });
};