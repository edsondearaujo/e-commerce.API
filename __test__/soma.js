module.exports = {
    sum: numeros => {
        if (Math.min(... numeros)) {

            const result = numeros.reduce((acc, numeros) => {
                acc += numeros
                return acc
            }, 0)  
            return numeros.length > 5 ? result * 2 : result
  
        }


         
        return 0
    }
}