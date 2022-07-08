function convertDegree(degree) {
    const isCelsius = degree.toUpperCase().includes('C');
    const isFahrenheit = degree.toUpperCase().includes('F');
    if (!isCelsius && !isFahrenheit) {
        throw new Error('Degree not identificaded');
    }
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let conversion = fahrenheit => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';
    if (isCelsius) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        conversion = celsius => celsius * 9/5 + 32;
        degreeSign = 'F';
    }
    return conversion(updatedDegree) + degreeSign;
}

try {
    console.log(convertDegree('122F'));
    console.log(convertDegree('50C'));
} catch (error) {
    console.log(error.message);
}
