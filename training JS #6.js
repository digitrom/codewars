//Мое каличное решение))))))))))))
function trueOrFalse(val){
    if (val==false) return "false";
    else if (val===undefined) return "false";
    else if (val===null) return "false";
    else     return "true";
}

/*Нашел ответ крутой ответ!
 Boolean(val) осуществляет логическое преобразование.

 Правило преобразования:
Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
Все остальные значения становятся true.

и с помощью тернарного оператора "?" вычисляем условие (Boolean(val)): если оно истинно, тогда возвращается значение1,
в противном случае – значение2.
 */

function trueOrFalse(val){
    return Boolean(val) ? 'true' : 'false';
}

// или  так:
function trueOrFalse(val){
    if (Boolean(val)) {
        return "true";
    } else { return "false"
    }
}