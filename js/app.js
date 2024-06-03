function calculateAge(birthDate) {
    var today = new Date();
    var birth = new Date(birthDate);
    var age = today.getFullYear() - birth.getFullYear();
    var monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
// Array de fechas de nacimiento para probar
var birthDates = [
    "1990-01-30",
    "2000-10-14",
    "1972-03-29",
    "2003-03-07",
    "2010-09-30"
];
// Iterar sobre cada fecha de nacimiento y calcular la edad
birthDates.forEach(function (dateOfBirth) {
    console.log("La edad de la persona nacida en la fecha: ".concat(dateOfBirth, " es: ").concat(calculateAge(dateOfBirth)));
});
