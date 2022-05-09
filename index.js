const quizData = [  
  {  
   question: "L'ancien nom de l'île de la Réunion est :",  
   a: "L'île Bourbon",  
   b: "L'île du Diable",  
   c: "L'île Saint Denis",  
   d: "Description",  
   correct: "a",  
  },  
  {  
    question: "Quelle est la capitale de la  Cote d'ivoire ??",  
    a: "Yamoussoukro",  
    b: "Le cap",  
    c: "Dakar",  
    d: "Description",  
    correct: "a",  
   },   
   {  
    question: "La capitale de l'Australie est :",  
    a: "Melbourne",  
    b: "Canberra",  
    c: "Sydney",  
    d: "Description",  
    correct: "b",  
   },  
   {  
    question: "Charlemagne fut couronné empereur d'Occident en l'an :",  
    a: "600",  
    b: "800",  
    c: "1000",  
    d: "Description",  
    correct: "b",  
   },
   {  
    question: "Dans la mythologie grecque, Athéna était la déesse :?",  
    a: "De la jeunesse",  
    b: "De l'amour et de la beauté",  
    c: "De la sagesse",  
    d: "Description",  
    correct: "c",  
   },  
   {  
    question: "Les monts Appalaches se situent :",  
    a: "En Amérique du nord",  
    b: "En Amérique du sud",  
    c: "À l'est de l'Europe",  
    d: "Description",  
    correct: "a",  
   },  
   {  
    question: "L'Algérie est indépendante depuis :",  
    a: "1959",  
    b: "1962",  
    c: "1965",  
    d: "Description",  
    correct: "b",  
   },  
   {  
    question: "Le mur de Berlin, construit en 1961, fut détruit en :",  
    a: "1993",  
    b: "1991",  
    c: "1989",  
    d: "Description",  
    correct: "c",  
   },  
   {  
    question: "Un animal amphibie :?",  
    a: "Peut vivre à l'air et dans l'eau",  
    b: "Ne peut vivre que dans l'eau",  
    c: "Vit uniquement dans la terre",  
    d: "Description",  
    correct: "a",  
   },  
   {  
    question: "Laquelle de ces expressions désigne la Corée ?",  
    a: "Pays du matin",  
    b: "Pays du milieu ",  
    c: "Pays du solei levant",  
    d: "calme ",  
    correct: "c",  
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