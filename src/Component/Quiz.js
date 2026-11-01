import React, { useOptimistic, useState } from 'react'
import QuestionList from './QuestionList'
import QuizCSS from './Quiz.css'
export default function Quiz() {
    const questions = [
        {
            question: "What is React?",
            options: ["CSS Framework", "React Library", "React Framework", "Testing Tool"],
            answer: "React Library",
        },
        {
            question: "What is 2 + 2?",
            options: ['3', '4', '9', '22'],
            answer: '4'
        },

    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const handleClick = (option) => {
        setCurrentAnswer(option)
        if(option === questions[currentQuestionIndex].answer){
            setScore(score+1)
        }
    }
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }
    return (
        <div>
            {currentQuestionIndex < questions.length ?
                <div>
                    <QuestionList question={questions[currentQuestionIndex].question}
                        options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer} />
                    <button disabled={currentAnswer === null} className={currentAnswer === null ? 
                        'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question
                        </button>

                </div> : <div> You Score is {score} </div>
            }




        </div>
    )
}