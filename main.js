// tady je místo pro náš program

// Parsování data

const parseDate = (vstupDatum) => {
    return {
        day: Number(vstupDatum.slice(0,2)),
		month: Number(vstupDatum.slice(3,5)),
        year: Number(vstupDatum.slice(6)),
    }
}

console.log(parseDate('02.03.2023'))

// Formátování data

const formatDate = ({ day, month, year }) => {

    const datum = {
        keyDay: String(day).padStart(2, '0'),
        keyMonth: String(month).padStart(2, '0'),
        keyYear: String(year),
    }

    const { keyDay, keyMonth, keyYear } = datum;

    return keyDay + "." + keyMonth + "." + keyYear;
}

console.log(formatDate({ day: 6, month: 4, year: 2021 }))

// Python zaokrouhlování

const round = (number) => {

    const celeCislo = Math.trunc(number);
    const setinaCislo = number - celeCislo;
  
    if (Math.abs(setinaCislo) === 0.5) {
      if (celeCislo % 2 === 0) {
        return celeCislo;
      }
      return celeCislo + 2 * setinaCislo;
    }
    return Math.round(number)
}

console.log("Zaokrouhlení dolů čísla 1.2: ", round(1.2))
console.log("Zaokrouhlení nahoru čísla 1.6: ", round(1.6))
console.log("Zaokrouhlení čísla 3.5 k sudému číslu 4: ", round(3.5))
console.log("Zaokrouhlení čísla 2.5 k sudému číslu 2: ", round(2.5))
console.log("Zaokrouhlení záporného čísla -3.5 k sudému číslu -4: ", round(-3.5))
console.log("Zaokrouhlení záporného čísla -2.5 k sudému číslu -2: ", round(-2.5))