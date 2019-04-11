module.exports = (app) => {
    app.get('/', (req, res, next) => {
        res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Página inicial</h1>
            </body>
        </html>
        `);
    });
    
    app.get('/livros', (req, res, next) => {
        res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Página dos livros</h1>
            </body>
        </html>
        `);
    });
};