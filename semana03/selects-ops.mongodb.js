/* Criação da Constante que representa o nome do banco de dados */
const database = "BD03-Aulas";

/* Criação da Constante que representa o nome da coleção */
const collection = "Livraria";

/* Define o BD que será utilizado, caso não tenha será criado */
use(database);

/* Seleciona documentos com o uso do operador maior $gt e $gte para indicar >= */
//db['Livraria'].find({valor: {$gt: 100}});

/* Seleciona documentos com o uso do operador menor $lt e $lte para indicar <= */
//db['Livraria'].find({valor: {$lt: 110}});

/* Definindo um intervalo entre valores */
//db['Livraria'].find({valor: {$gte: 50, $lte: 150}})
  //.sort({valor: -1}) // Ordena os resultados pelo campo valor em ordem crescente(1) e decrescente(-1)

/* Operador lógico $and  */
/*db['Livraria'].find({$and: [
  {categoria: {$eq: "Fantasia Heroica"}}, //Pode-se usar $eq ou = para indicar igualdade
  {valor: {$lte: 100}}
]}); */

/* Operador lógico $or  */
/*db['Livraria'].find({$or: [
  {categoria: {$eq: "Fantasia Heroica"}}, 
  {valor: {$lte: 100}}
]}); */

/* Selecionar documentos com o uso do operador $in */
db['Livraria'].find({
  autor:{
    $in: ["J.R.R. Tolkien", "Isaac Asimov"] //Seleciona documentos que contenham qualquer um dos valores dentro do array
  },
},   {_id:0, codigo:0, descricao:0}).sort({valor: 1});