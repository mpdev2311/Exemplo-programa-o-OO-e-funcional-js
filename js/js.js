// funcional
function sejaBemVindo(){
    console.log('Seja bem vindo a formação JavaScript mestre jedi!!!')
}

console.log('Chamando a função seja bem vindo();');
sejaBemVindo();

//POO
var objAluno = {
    nome: 'Aluno Marcos Paulo',
    curso: 'Formação JavaScript Mestre Jedi !!! :)',
    ministrarAula: function(){
        console.log("ministrando aula de ajvaScript!");
    }
};

console.log(" objeto Aluno");
console.log(objAluno);

console.log("acessando propriedades do objeto: objAluno.nome");
console.log(objAluno.nome);
console.log(objAluno.curso);


console.log("chamando o método do objeto Aluno:  objAluno.ministrarAula()");
objAluno.ministrarAula();