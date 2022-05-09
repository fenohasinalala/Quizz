const quizData = [  
  {  
   question: "Question 1?",  
   a: "Vrai",  
   b: "Fausse",  
   c: "Peut-être",  
   d: "Peut-être",  
   correct: "a",  
  },  
  {  
    question: "Question 2?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },   
   {  
    question: "Question 3?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },  
   {  
    question: "Question 4?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },
   {  
    question: "Question 5?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },  
   {  
    question: "Question 6?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },  
   {  
    question: "Question 7?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },  
   {  
    question: "Question 8?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },  
   {  
    question: "Question 9?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },  
   {  
    question: "Question 10?",  
    a: "Vrai",  
    b: "Fausse",  
    c: "Peut-être",  
    d: "Peut-être",  
    correct: "a",  
   },      
 ];  
 const quiz = document.getElementById("quiz");  
 const reponseElements = document.querySelectorAll(".answer");  
 const questionElement = document.getElementById("question");  
 const a_text = document.getElementById("a_text");  
 const b_text = document.getElementById("b_text");  
 const c_text = document.getElementById("c_text");  
  //  const d_text = document.getElementById("d_text"); 
 const confirmationButton = document.getElementById("submit");  
 const nombre_quiz = 5

 //fonction: générer le nombre de question total
 function randomArray(array) {
  let i = array.length,
      j = 0,
      temp;
  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
  }

  // arranger les questions aleatoirement
  let numQuestion = Array.from(Array(quizData.length-1).keys())
  numQuestion = numQuestion.map(x => x+1)
  let ranNums = randomArray(numQuestion);
  ranNums = ranNums.slice(quizData.length-1-nombre_quiz)

 let currentQuiz = ranNums[0];
 let i = 0  
 let score = 0;  
 const deselectAnswers = () => {  
  reponseElements.forEach((answer) => (answer.checked = false));  
 };  
 const getSelected = () => {  
  let answer;  
  reponseElements.forEach((answerElement) => {  
   if (answerElement.checked) answer = answerElement.id;  
  });  
  return answer;  
 }; 
 //Fonction: afficher la question actuel avec les choix de réponse
 const loadQuiz = () => {  
  deselectAnswers();  
  const currentQuizData = quizData[currentQuiz];  
  questionElement.innerText = currentQuizData.question;  
  a_text.innerText = currentQuizData.a;  
  b_text.innerText = currentQuizData.b;  
  c_text.innerText = currentQuizData.c;  
  // d_text.innerText = currentQuizData.d;  
 };  
 loadQuiz();  
 confirmationButton.addEventListener("click", () => {  
  const answer = getSelected();  
  if (answer) {  
   if (answer === quizData[currentQuiz].correct) score++;  
   i++
   currentQuiz = ranNums[i];  
   if (currentQuiz < quizData.length) loadQuiz();  
   else {  
    quiz.innerHTML = `  
       <h2>Vous avez repondu à ${score}/${ranNums.length} question correctement</h2>  
       <button onclick="history.go(0)">Recommencer</button>  
     `   
   }  
  }  
  console.log(ranNums);
  
 });  