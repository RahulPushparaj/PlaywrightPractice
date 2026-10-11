//A classic programming interview question that involves using array methods (filter, map, reduce), and JavaScript objects.

const students = [{ name : "Rahul", score : 25 },
     { name : "Bhuui", score : 45 },
      { name : "Ani", score : 70 },
       { name : "Anu", score : 34 },
        { name : "Poori", score : 60 }];

        const passedStudents = students.filter(student => student.score>=36);

        console.log(passedStudents);

        const UpperCaseName = passedStudents.map(student => student.name.toUpperCase());

        console.log(UpperCaseName);

        const TotalScore = passedStudents.reduce(function(acc,student){
            acc = acc + student.score;
            return acc;
        }, 0);

        console.log(TotalScore);