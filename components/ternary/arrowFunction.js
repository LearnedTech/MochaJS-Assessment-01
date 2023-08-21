const numbers = [10, 20, 30, 40, 50];

const result = numbers.map(num => num > 25 ? "High" : "Low");
console.log(result); // Output: ["Low", "Low", "High", "High", "High"]


function processPersonData(data) {
    return data
        .filter(person => person.age >= 30)
        .map(person => {
        const averageScore = person.scores.reduce((sum, score) => sum + score, 0) / person.scores.length;
        const status = averageScore >= 80 ? "Pass" : "Fail";
        return { name: person.name, status };
        });
}

export { processPersonData };