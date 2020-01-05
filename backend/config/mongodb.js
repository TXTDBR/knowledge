const mongoose = require('mongoose');

mongoose.connect('mongoose://localhost/knowledge_stats', {useNewUrlParser: true})
.catch(e => {
    const msg = 'Erro! Não foi possivel conectar ao mongoDB!';
    console.log('\x1b[41m%s\[37m', msg, '\x1b[0m')
})