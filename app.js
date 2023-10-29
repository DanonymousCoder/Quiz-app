
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let back1 = document.getElementById("back1");

let progress = document.getElementById("progress");



next1.onclick = function() {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
}
back1.onclick = function() {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";
}
next2.onclick = function() {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
}
back2.onclick = function() {
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
        answer: "Apple"
    },
    {
        question: "What programming language is known for its use in data analysis and machine learning?",
        options : ["HTML", "JavaScript", "Python", "Java"],
        answer: "Apple"
    },
]

let h4 = document.getElementById("form2");

let quizArray = questions.map((quiz) => {
    return `
    <div class="box">
    <p class="h4">${quiz.question}</p>
    <select name="" id="" style="width: 100%; padding: 10px 5px;margin: 5px 0;border: 0;border-bottom: 1px solid #999; outline: none;background: transparent;">
        <option value="" disabled>Select a value</option>
        ${quiz.options.map((option) => {
            return `<option value=${option}>${option}</option>`;
          })}
    </select>
  </div>
    `
})

h4.innerHTML = `${quizArray.join (" ") } <div class="btn-box">
<button type="button" id="back1">Previous</button>
<button type="button" id="next2">Next</button>
</div>` ;