// Challenge 1: Student Grade Generator (Toy Problem)
//makes sure the grades are between 0 to 100
function studentGrade(marks){
    if(marks < 0 || marks > 100){
        console.log("Invalid input.Please enter a number between 0 to 100")
        return;
    }

//checks the marks of students and grades it.
    if(marks>=79){
        console.log("A");
    }
    else if(marks>=60){
        console.log("B");
    }
    else if(marks>=49){
        console.log("C");
    }
    else if(marks>=40){
        console.log("D");
    }
    else if(marks<=39){
        console.log("E");
    }
}
studentGrade()

