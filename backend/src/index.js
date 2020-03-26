const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * informar para o codigo que a requisiçãp deve transformar o formato json em javascritp
 */

app.use(cors());
app.use(express.json());
app.use(routes);

/** Rota e Recursos - Exemplo: www.ticare.com.br/usuarios
 * Rota - www.ticare.com.br
 * recursos - /usuarios * 
 */

 /** Metódos HTTP
  * GET - Buscar uma informação  do back-end
  * POST - Criar uma informação no back-end
  * PUT - Alterar uma informação no back-end
  * DELETE - Deletar uma informação no back-end
  * 
  */

  /**
   * Tipos de Parametros
   * Query Parms: Parametros nomeados enviados na rota após o "?" (Filtros, Paginação)
   * Route Parms: Parametros utilizados para indentificar recursos /users/1
   * Request guarda todos os dados que vem atraves atraves da requisição
   * Response é responsável pelo retorno da mensagem ao usuario
   * Request Body: Corpo da REquisição , utilizado para criar 
   */

   /** Bancos de Dados
    * Conexões:
    * instalar Drivers: Select * from users
    * Query Builder: table('users').select('*').where()
    * 
    */


app.listen(3333);