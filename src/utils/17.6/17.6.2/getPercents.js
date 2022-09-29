// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
export function getPercents(percent, number) {
    if (typeof percent === 'number') {
        if (percent > 0 && percent <= 100) {
            if (typeof number === 'number') {
                if (number > 0) {
                    return (number / 100) * percent
                } else {
                    return `Значение числа - ${number} не корректное.  Может быть только больше 0`
                }
            } else {
                return `Значение числа - ${number} не корректное. Не является числом`
            }
        } else {
            return `Значение процента - ${percent} не корректное. Может быть только больше 0 и меньшим или равным 100`
        }
    } else {
        return `Значение процента - ${percent} не корректное. Не является числом`
    }

}