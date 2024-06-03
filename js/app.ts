function calculateAge(birthDate: string): number {
    const today: Date = new Date();
    const birth: Date = new Date(birthDate);
    let age: number = today.getFullYear() - birth.getFullYear();
    const monthDifference: number = today.getMonth() - birth.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

// Array de fechas de nacimiento para probar
const birthDates: string[] = [
    "1990-01-30",
    "2000-10-14",
    "1972-03-29",
    "2003-03-07",
    "2010-09-30"
];

// Iterar sobre cada fecha de nacimiento y calcular la edad
birthDates.forEach((dateOfBirth: string): void => {
    console.log(`La edad de la persona nacida en la fecha: ${dateOfBirth} es: ${calculateAge(dateOfBirth)}`);
});