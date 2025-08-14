/* Criação da Constante que representa o nome do banco de dados */
const database = "BD03-Aulas";

/* Criação da Constante que representa o nome da coleção */
const collection = "Livraria";

/* Define o BD que será utilizado, caso não tenha será criado */
use(database);

/* Seleciona os dados de todos os arquivos sem critério */
//db['Livraria'].find(); 

/* Seleciona os dados de todos os arquivos com critério */
/*db['Livraria'].find({
    "categoria": "Fantasia Heroica"
}); */

/* Seleciona os dados de todos os arquivos com critério e ocultando certos campos */
db['Livraria'].find({
    "categoria": "Fantasia Heroica"
},
{
  "_id": 0, //Utiliza-se 0 para ocultar o campo e 1 para mostrar o campo
  "codigo": 0,
  "descricao": 0
}
); 

