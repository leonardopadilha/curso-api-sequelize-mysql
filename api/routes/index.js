const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoutes')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
    )
}


/*
module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.get('/', (req, res) => res.send('Olá!'))
*/
