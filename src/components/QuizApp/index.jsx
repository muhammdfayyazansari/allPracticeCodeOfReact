import React from "react";
import { useState } from "react";
import './app.css';
import Question from './Question';
import Options from "./Option";
import NextButton from "./Button/index";




function QuizApp() {

  const [showResult, setShowResult] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [trueScore, setTrueScore] = useState(0);
  const [falseScore, setFalseScore] = useState(0);
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "Q1. Inside which HTML element do we put the JavaScript?",
      options: [
        "<javascript>",
        "<script>",
        "<js>",
        "<scripting>"],
      answer: "<script>"

    }
    ,
    {
      question: "Q2. Which of the following is a valid type of function javascript supports?",
      options: ['named function',
        'anonymous function',
        'Both of the above.',
        'None of the above.'],
      answer: 'Both of the above.'

    }
    ,
    {
      question: "Q3. Which built-in method combines the text of two strings and returns a new string?",
      options: ['append()',
        'concat()',
        'None of the these.',
        'attach()'],
      answer: 'concat()'

    }
    ,
    {
      question: "Q4. Which built-in method returns the calling string value converted to lower case?",
      options: ['toLowerCase()',
        'toLower()',
        'changeToLower()',
        'None of the above.'],
      answer: 'toLowerCase()'

    }
    ,
    {
      question: "Q5. Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
      options: ['push()',
        ' join()',
        'pop()',
        'map()'],
      answer: 'map()'

    }
    ,
    {
      question: "Q6. Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function?",
      options: ['reverse()',
        'shift()',
        'slice()',
        'some()'],
      answer: 'some()'

    }
    ,
    {
      question: "Q7. Which of the following type of variable is accessible everywhere in your JavaScript code?",
      options: ['global variable',
        'local variable',
        'Both of the above.',
        'None of the above.'],
      answer: 'global variable'

    }
    ,
    {
      question: "Q8. Which built-in method returns the length of the string?",
      options: ['length()',
        'size()',
        'index()',
        'None of the above.'],
      answer: 'length()'

    }
    ,
    {
      question: "Q9. Which of the following function of Number object returns the number's value?",
      options: ['toString()',
        'valueOf()',
        'toLocaleString()',
        'toPrecision()'],
      answer: 'valueOf()'

    }
    ,
    {
      question: "Q10. Which of the following function of String object is used to match a regular expression against a string?",
      options: ['replace()',
        'search()',
        'match()',
        'None of the above.'],
      answer: 'match()'

    }


  ]);

  const [question, setQuestion] = useState(questions[count]);
  const [inputValue, setInputValue] = useState("");
  const [inputFalse, setInputFalse] = useState(false)
  let submitButton = count + 1 < questions.length;
  const [grade, setGrade] = useState('');


  const nextQuestion = () => {
    let copyCount = count;
    copyCount++;
    setCount(copyCount);
    setQuestion(questions[copyCount]);
  }
  const getOptionValue = (select) => {
    // console.log('select >>>>>>' , select.target.nextSibling.children[0].innerHTML);
    // console.log('select >>>>>>' , select.target.parentElement.parentElement);
      if(select.target.nextSibling.children[0].innerText){
        let copyInput = { select : select, selectValue: select.target.nextSibling.children[0].innerText };
        // console.log(select.target.nextSibling.children[0].innerText)
        setInputValue(copyInput);
        setInputFalse(true);
      }else{
        let copyValue = {select: "", selectValue: ""};
        setInputValue(copyValue)
      }
    // console.log("selectInputValueDirect : >>>>>>  ",select.target.nextSibling.children[0].innerHTML)
    // console.log("selectInputValue from state: >>>>>>  ",inputValue.selectValue)


  }
  const allInputOff = () => {
    if (true) {
      let allInputs = inputValue.select.target.parentElement.parentElement.children;
      if(inputFalse){
        if (inputValue.selectValue == question.answer) {
          let copyScore = trueScore;
          copyScore++;
          setTrueScore(copyScore);
          setInputFalse(false);
          // console.log("true score >>>> ", copyScore)
        } else {
          // console.log('inputValue', inputValue.selectValue)
          // console.log('question ka answer',  question.answer)
          let falseCopy = falseScore;
          falseCopy++;
          setFalseScore(falseCopy);
          setInputFalse(false);
        }
      }
      for (let i in allInputs) {
        if (allInputs[i].firstChild.checked) {
          allInputs[i].firstChild.checked = false;
          // console.log(allInputs[i].firstChild.checked)
        }
        // allInputs[i].firstChild.checked = false;
        // console.log(inputValue.select.target.parentElement.parentElement.children)
        // console.log(allInputs[i].firstChild.value);
      }
    }

    // console.log(allInputs['0'])
  }
  const quizStart = () => {
    let copyStart = !isStart;
    setIsStart(copyStart)
  }
  const submiQuiz = (e) => {
    let copyIsSubmit = !showResult;
    setShowResult(copyIsSubmit);

  }
  const lastTrue = () =>{
    








    if(inputFalse){
      let percentage;
      let grade
      if (inputValue.selectValue == question.answer) {
        let copyScore = trueScore;
        copyScore++;
        percentage = (copyScore/questions.length )*100;
        if(percentage>=80 && percentage<=100){
          grade = "A-One";
        }
        else if(percentage>=70 && percentage<80){
          grade = "A";
        }
        else if(percentage>=60 && percentage<70){
          grade = "B";
        }
        else if(percentage>=50 && percentage<60){
          grade = "C";
        }else{
          grade = 'FAIL';
        }
        let setgrade = {percentage: percentage, grade: grade}
        setGrade(setgrade);

        setTrueScore(copyScore);
        setInputFalse(false);




        // console.log("true score >>>> ", copyScore)
      } else {
        // console.log('inputValue', inputValue.selectValue)
        // console.log('question ka answer',  question.answer)
        let falseCopy = falseScore;
        falseCopy++;
        
        percentage = (trueScore/questions.length )*100;
        if(percentage>=80 && percentage<=100){
          grade = "A-One";
        }
        else if(percentage>=70 && percentage<80){
          grade = "A";
        }
        else if(percentage>=60 && percentage<70){
          grade = "B";
        }
        else if(percentage>=50 && percentage<60){
          grade = "C";
        }else{
          grade = 'FAIL';
        }
        let setgrade = {percentage: percentage, grade: grade}
        setGrade(setgrade);


        setFalseScore(falseCopy);
        setInputFalse(false);
      }
    }else{
      
      let percentage = (trueScore/questions.length )*100;
      let grade;
      if(percentage>=80 && percentage<=100){
        grade = "A-One";
      }
      else if(percentage>=70 && percentage<80){
        grade = "A";
      }
      else if(percentage>=60 && percentage<70){
        grade = "B";
      }
      else if(percentage>=50 && percentage<60){
        grade = "C";
      }else{
        grade = 'FAIL';
      }
      let setgrade = {percentage: percentage, grade: grade}
      setGrade(setgrade);
    }
  }
  const reStartQuiz = ()=>{
    quizStart();
    submiQuiz();
    let allZero = 0;
    setTrueScore(allZero);
    setFalseScore(allZero);
    setGrade('');
    setCount(allZero);
    setQuestion(questions[0])
    // window.location.href = "http://localhost:3000/"
    
  }
  return <div>
    {isStart ?
      <div className="mainQuizApp">
        <div style={{ textAlign: "center" }}>
          <h1>Quiz App With React</h1>
          <h5>Made By : MUHAMMAD FAYYAZ ANSARI</h5>
        </div>

        {!showResult ? <div className="questionWithOption">
          <Question question={question} />
          <Options options={question} getInputValue={getOptionValue} />
          {submitButton ? <NextButton buttonName="NEXT" next_Question={nextQuestion} inputOff={allInputOff} />
            :
            <NextButton buttonName="SUBMIT" submit_Quiz={submiQuiz} lastTureValue = {lastTrue} />
          }
        </div> :
          <div className="questionWithOption">
            <div className="resultDiv">
              <div className="showScoreCardDiv">
                <div><h4><span>Unattempt Questions  : </span> {questions.length - (trueScore+falseScore)} </h4></div>
                <div><h4><span >Attempt Questions  : </span> {trueScore+falseScore}</h4></div>
                <div><h4><span>Correct Answers : </span> {trueScore}</h4></div>
                <div><h4><span >Wrong Answers : </span> {falseScore} </h4></div>
                <div><h4><span >Percentage : </span> {grade.percentage} %</h4></div>
                <div><h4><span >Grade : </span> {grade.grade}</h4></div>
              </div>
              <div className="reStartButtonDiv">

            {
              <NextButton style={{marginLeft:0, paddingLeft:0}} buttonName="RESTART QUIZ" reStartQuiz={reStartQuiz} />
            }
              </div>
            </div>
          </div>



        }

      </div> :
      <div className="mainQuizApp">
        <div style={{ textAlign: "center" }}>
          <h1>Quiz App With React</h1>
          <h5>Made By : MUHAMMAD FAYYAZ ANSARI</h5>
        </div>
        <div className="startQuiz">
          <button className="startBtn" onClick={quizStart}>START QUIZ</button>
          
        </div>
      </div>


    }
    {console.log('showResult', showResult)}
    {console.log('isStart', isStart)}
    {console.log('trueScore', trueScore)}
    {console.log('falseScore', falseScore)}
    {console.log('count', count)}
  </div>
}






export default QuizApp;