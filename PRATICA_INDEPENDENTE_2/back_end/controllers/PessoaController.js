const Pessoa = require('../models/Pessoa');

module.exports = class PessoaController {
    static async showAll(req, res) {
        try {
            const Todos = new Pessoa;
            const data = await Todos.getAll();
            res.json(data);
            res.end();
        } catch (e) {
            console.log(e);
        }

    }

    /*
    static async gravarPessoa(req,res){

    }

    static async localizarPessoa(req,res){

    }

    static async atualizarPessoa(req,res){

    }

    static async deletarPessoa(req,res){

    }
    */
}