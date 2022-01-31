 function gradingStudents(grades) {
    // Write your code here
    const output = [];
    
    grades.forEach(grade => {
        if(grade < 38){
            output.push(grade);
        }
        else{
            const nextFive = Math.ceil(grade/5)*5;
            if(nextFive - grade < 3) grade = nextFive;
            output.push(grade);
        }    
    });   
    return output;
}
console.log(gradingStudents([73,67,38,33]));
