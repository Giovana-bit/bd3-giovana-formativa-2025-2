/* Criação da Constante que representa o nome do banco de dados */
const database = "BD03-Aulas";

/* Criação da Constante que representa o nome da coleção */
const collection = "Livraria";

/* Define o BD que será utilizado, caso não tenha será criado */
use(database);

/* Criação da coleção */
db.createCollection(collection);

