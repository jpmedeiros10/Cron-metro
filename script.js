//map
const students = [
    { name: 'Rodolfo', testeGrade: 7 },
    { name: 'Ana', testeGrade: 9 },
    { name: 'Bia', testeGrade: 6 },
    { name: 'Carlos', testeGrade: 8 },
    { name: 'Daniel', testeGrade: 5 },
    { name: 'Gui', testeGrade: 4 },
    { name: 'Rebeca', testeGrade: 3 },
    { name: 'Arthur', testeGrade: 2 },
    { name: 'Pedro', testeGrade: 1 },
    { name: 'Gustavo', testeGrade: 1 }

]

const aprovacao = students.map(student => {
    //poderia dar um return direto, mas escolhi fazer uma variavel, então o return tem que ser a variavel
    const resultado = {
        //criando novo objeto, pois é isso que o MAP faz, cria novo array e novo objeto
        name: student.name, //não quero mudar o nome, então só copio
        testeGrade: student.testeGrade >= 5 ? 'Aprovado' : 'Reprovado'
    }
    return resultado
})

//console.log(aprovacao)





/////////////////////////////////////////////////////////////////////////////////////////////////


//reduce ex1
const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((accumulator, current) => {
    let total = accumulator + current
    return total

    //abaixo o zero é o valor inicial do accumulator, padrao do reduce    
}, 0)

//console.log(sum) // 28



//ex2
const companies = [{ name: 'Google', marketValue: 90, CEO: 'Sundar Pichai', country: 'USA' },
{ name: 'Amazon', marketValue: 100, CEO: 'Jeff Bezos', country: 'USA' },
{ name: 'Apple', marketValue: 120, CEO: 'Tim Cook', country: 'USA' },
{ name: 'Microsoft', marketValue: 110, CEO: 'Satya Nadella', country: 'USA' },
{ name: 'Facebook', marketValue: 70, CEO: 'Mark Zuckerberg', country: 'USA' }]

const totalMarketValue = companies.reduce((accumulator, current) => {
    return accumulator + current.marketValue
}, 0)

//console.log(totalMarketValue) // 590  



//ex3

const cart = [{ productName: 'Abobora', valuePerKg: 5, kg: 1 },
{ productName: 'Banana', valuePerKg: 2, kg: 1 },
{ productName: 'Carne', valuePerKg: 25, kg: 0.5 },
{ productName: 'Refrigerante', valuePerKg: 7, kg: 3 },
{ productName: 'Queijo', valuePerKg: 35, kg: 0.2 }
]

const totalValue = cart.reduce((acc, valueAtual) => {
    const result = valueAtual.valuePerKg * valueAtual.kg
    return acc + result
}, 0)

//console.log(totalValue)



///////////////////////////////////////////////////////////////////////////////////////////////////


//filter ex1
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFiltrados = numeros.filter(valor => {
    if (valor > 10) { //será condições
        return true
    } else {
        return false
    }
})
//console.log(numerosFiltrados)


//ex2

const companhias = [{ name: 'Google', marketValue: 90, CEO: 'Sundar Pichai', country: 'ARG' },
{ name: 'Amazon', marketValue: 100, CEO: 'Jeff Bezos', country: 'BRL' },
{ name: 'Apple', marketValue: 120, CEO: 'Tim Cook', country: 'USA' },
{ name: 'Microsoft', marketValue: 110, CEO: 'Satya Nadella', country: 'USA' },
{ name: 'Facebook', marketValue: 70, CEO: 'Mark Zuckerberg', country: 'EUR' }]

const newcompanies = companhias.filter(company => {
    if (company.marketValue > 100 && company.country === 'USA') {
        return true
    } else {
        return false
    }
})

//console.log(newcompanies)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////




//MAP/REDUCE/FILTER juntos
const empresas = [{ name: 'Google', marketValue: 90, CEO: 'Sundar Pichai', foundedOn: 1938 },
{ name: 'Amazon', marketValue: 100, CEO: 'Jeff Bezos', foundedOn: 1989 },
{ name: 'Apple', marketValue: 120, CEO: 'Tim Cook', foundedOn: 2021 },
{ name: 'Microsoft', marketValue: 110, CEO: 'Satya Nadella', foundedOn: 2005 },
{ name: 'Facebook', marketValue: 70, CEO: 'Mark Zuckerberg', foundedOn: 2004 }]




//existem mais metodos de fazer alem do exemplo abaixo
//1 passo aumentar 10% do marketValue de cada empresa (map)
//2 passo filtrar as empresas fundadas antes de 1990 (filter)
//3 passo somar o valor de mercado das empresas filtradas (reduce)

const newlist = empresas.map(company => {
    const result = {
        name: company.name,
        marketValue: company.marketValue + (company.marketValue * 0.1),
        CEO: company.CEO,
        foundedOn: company.foundedOn
    }
    return result
})

const filterlist = newlist.filter(company => {
    if (company.foundedOn < 1990) {
        return true
    } else {
        return false
    }
})

const total = filterlist.reduce((acc, current) => {
    return acc + current.marketValue
}, 0)

console.log(filterlist)
console.log(total)