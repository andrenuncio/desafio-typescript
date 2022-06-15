// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface worker {
    code: number,
    name: string
}
let employee = {} as worker;
employee.code = 10;
employee.name = "John";