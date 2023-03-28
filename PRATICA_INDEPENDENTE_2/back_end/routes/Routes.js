const express = require('express');
const router = express.Router();

const PessoaController = require("../controllers/PessoaController")

router.get('/', PessoaController.showAll);
/*
router.get('/:id', PessoaController.localizarPessoa);
router.post('/gravarpessoa', PessoaController.gravarPessoa);
router.post('/atualizarpessoa', PessoaController.atualizarPessoa);
router.post('/apagarpessoa', PessoaController.deletarPessoa);
*/

module.exports = router;