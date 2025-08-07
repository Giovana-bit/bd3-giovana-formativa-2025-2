/* Criação da Constante que representa o nome do banco de dados */
const database = "BD03-Aulas";

/* Criação da Constante que representa o nome da coleção */
const collection = "Livraria";

/* Define o BD que será utilizado, caso não tenha será criado */
use(database);

/* Exemplo de inserção com insertOne: */
db['Livraria'].insertOne(
    {
      "codigo":"1",
      "titulo": "As Cavernas de Aço",
      "autor": "Isaac Asimov",
      "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
      "imagem":"/livros/cavernas_aco.jpg",
      "valor": 120,
      "categoria":"Ficção Científica"
    }
);