const soma = require('./soma')

describe('Teste fazendo soma', () => {
    it('Deve retornar 10 quando a soma da entrada for igual a dez.', () => {
        const numeros = [2, 3, 5];
        expect(soma.sum(numeros)).toEqual(10)
    })
    it('Deve retornar zero quando um dos numeros for igual zero.', () => {
        const numeros = [0, 2, 3, 5];
        expect(soma.sum(numeros)).toEqual(0)
    })
    it('Deve multiplicar por dois, quando o número de posições do vetor de entrada for maior que cinco.', () => {
        const numeros = [2, 3, 5, 9, 8, 7];
        expect(soma.sum(numeros)).toEqual(68)
    })


})