function marks(studentMarks){

let grade;
if (studentMarks > 79){
    grade = "A";
}else if (studentMarks >= 60 && studentMarks <= 79){
    grade = "B";
}else if (studentMarks >= 50 && studentMarks <= 59){
    grade = "C";
}else if (studentMarks >= 40 && studentMarks <= 49){
    grade = "D";
}else{
    grade = "E";
}
console.log("Your grade is:" + grade)
}