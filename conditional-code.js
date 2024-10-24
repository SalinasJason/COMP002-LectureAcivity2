for(let i = 0; i <= 10; i ++) {
    console.log(i);
}

for(let i = 10; i >= 0; i --) {
    console.log(i);
}


let outputVariable = ""
for (let i = 0; i <= 10; i++){
    outputVariable += "!";
    console.log(outputVariable);
}

let myGrade = 49

if (myGrade >= 90) {
    console.log("A");
}
else if (myGrade < 89 && myGrade >= 80){
    console.log("B");
}
else if (myGrade < 80 && myGrade >= 70){
    console.log("C");
}
else if (myGrade < 70 && myGrade >= 60){
    console.log("D");
}
else if (myGrade <60 && myGrade >= 50){
    console.log("F");
}
else {
    console.log("Do better");
}


myGrade2 (60);

function myGrade2 (myGrade2) {
    let grade;
    switch (true) {
        case (myGrade2 >= 90):
            console.log("A");
            break;
        case (myGrade2 < 89 && myGrade2 >= 80):
            console.log("B");
            break;
        case (myGrade2 < 80 && myGrade2 >= 70):
            console.log("C");
            break;
        case (myGrade2 < 70 && myGrade2 >= 60):
            console.log("D");
            break;
        default:
            console.log("F");
    }
}

for(let i = 0; i <= 100; i ++) {
    console.log(i);
}

let outputVariable2 = ""
for (let i = 0; i <= 10; i++){
    outputVariable2 += "!";
    console.log(outputVariable2);
}