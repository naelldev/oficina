// Funções getters e setters são utilizadas para buscar ou inserir informações em um objeto, respectivamente.

class Livro {
    constructor (autor) {
        this._autor = autor;
    }

// Usando a função get para buscar o autor do livro:
    get escritor () {
        return this._autor;
    }

// Usando a função set para inserir outro autor:
    set escritor (autorAtualizado) {
        this._autor = autorAtualizado;
    }
}

const novel = new Livro ('Anônimo');
console.log(novel.escritor);
novel.escritor = 'novoAutor';
console.log(novel.escritor);