const pool = require('../db/conn');

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    getAll(){
        const sql = 'select * from pessoa';
        pool.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return null;
            } else {
                const pessoas = data;
                console.log(pessoas);
                return pessoas;
            }
        });
    }
}

module.exports = Pessoa;