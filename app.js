
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let back12 = document.getElementById("back1");

let progress = document.getElementById("progress");

let btn = document.getElementById("btn-box")
let content = btn.innerHTML

next1.onclick = function() {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
}
function backone() {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";
}
function nexttwo() {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
}
function backtwo() {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";
}

let questions = [
    {
        question: "Which company produces the iPhone?",
        options : ["Apple", "Microsoft", "Android", "Samsung"],
        answer: "Apple"
    },
    {
        question: "What is the most widely used web browser worldwide?",
        options : ["Safari", "Edge", "Chrome", "Firefox"],
        answer: "Chrome"
    },
    {
        question: "What programming language is known for its use in data analysis and machine learning?",
        options : ["HTML", "JavaScript", "Python", "Java"],
        answer: "Python"
    },
]

let h4 = document.getElementById("form2");
function quizApp() {
    let corrects = 50;
    let wrong = 0;
    let result = 0;



let quizArray = questions.map((quiz, index) => {
    return `
    <div class="box">
    <p class="h4">${quiz.question}</p>
    <select name="select" id="select${index}" style="width: 100%; padding: 10px 5px;margin: 5px 0;border: 0;border-bottom: 1px solid #999; outline: none;background: transparent;">
        <option value="" disabled>Select a value</option>
        ${quiz.options.map((option) => {
            return `<option value=${option}>${option}</option>`;
          })}
    </select>
  </div>
    `
})

h4.innerHTML = `${quizArray.join (" ") } <br> <br> ${content}` ;
function results() {

let quizResult = questions.map((quiz, index) => {
    return `
        <div class="box">
            <h4></h4>
            <p class="selected">Selected answer: </p>
            <p class="correct">Correct answer: </p>
            <p class="status">Status: </p>
          </div>
    
    `
})
let selectS = document.querySelectorAll("select");

selectS.forEach((select, index) =>{
    select.addEventListener("change", (event) => {
        let selectValue = event.target.value;
        let picked = document.querySelectorAll(".selected")[index];
        picked.innerHTML = `Selected answer: ${selectValue}`;
        let correct = document.querySelectorAll(".correct")[index];
        correct.innerHTML = `Correct answer: ${questions[index].answer}`;
  
        if (quizData[index].answer === selectValue) {
          document.querySelectorAll(".status")[
            index
          ].innerHTML = `Status: Correct`;
          result += corrects;
          document.querySelector(".result").innerHTML = `${result}/150`;
        } else {
          document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;
          result += wrong;
          document.querySelector(".result").innerHTML = `${result}/150`;
        }
      });
});

// form3.innerHTML = `${quizResult.join(" ")}<br>${content}`;


}
 return results()
}

quizApp();