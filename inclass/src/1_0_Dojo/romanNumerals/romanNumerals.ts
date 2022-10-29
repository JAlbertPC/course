// Escribir un codigo que pueda traducir números arábigos (los de toda la vida) a números
// romanos. El codigo recibirá un argumento de tipo numérico y devolverá un string con el
// valor correcto en números romanos.
// En el caso de pasar 0, retornar un string vacío.

export const romanNumbers = (num: number) => {
    if (num === 0) return ''
    const romanNumbers = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    let romanNumber = ''
    for (const romanNumbersKey in romanNumbers) {
        while (num >= romanNumbers[romanNumbersKey]) {
            num -= romanNumbers[romanNumbersKey]
            romanNumber += romanNumbersKey
        }
    }
    // Old code
    /*while (num !== 0) {
        if (num < 4) {
            romanNumber += 'I'
            num -= 1;
        } else if (num === 4) {
            num -= 4
            romanNumber += "IV"
        } else if (num < 9) {
            num -= 5
            romanNumber += 'V'
        } else if (num === 9) {
            num -= 9
            romanNumber += 'IX'
        } else if (num === 14) {
            num -= 14
            romanNumber += 'XIV'
        } else if (num < 19) {
            num -= 15
            romanNumber += 'XV'
        } else if (num === 19) {
            num -= 19
            romanNumber += 'XIX'
        } else if (num < 24) {
            num -= 20
            romanNumber += 'XX'
        } else if (num < 40) {
            num -= 10
            romanNumber += 'X'
        }
    }*/
    return romanNumber


}