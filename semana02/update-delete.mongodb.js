/* Criação da Constante que representa o nome do banco de dados */
const database = "BD03-Aulas";

/* Criação da Constante que representa o nome da coleção */
const collection = "Livraria";

/* Define o BD que será utilizado, caso não tenha será criado */
use(database);

/* Atualização de um arquivo no MongoDB */
/*db['Livraria'].updateOne(
  {"codigo": '1'} , //Critério de seleção do arquivo a ser atualizado
  {$set: {"titulo": "Teste de alteração de título"}}, //O que será atualizado
); */

/*Excluir um arquivo no MongoDB*/ 
db['Livraria'].deleteOne(
  {"codigo": '1'} //Critério de seleção do arquivo a ser excluído
);

