// Como podemos melhorar o esse código usando TS? 

interface pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao{
    Atriz,
    Padeiro,
}

let pessoa1 = {} as pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz

let pessoa2 = {} as pessoa
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}