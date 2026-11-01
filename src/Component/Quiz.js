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
        {
            question: "Which animal can survive even after losing most of its brain?",
            options: ["Dolphin", "Cockroach", "Elephant", "Monkey"],
            answer: "Cockroach",
        },
        {
            question: "What is the only food that never spoils?",
            options: ["Milk", "Rice", "Honey", "Bread"],
            answer: "Honey",
        },
        {
            question: "Which planet rains diamonds according to scientific predictions?",
            options: ["Mars", "Saturn", "Venus", "Jupiter"],
            answer: "Saturn",
        },
        {
            question: "What has keys but cannot open any locks?",
            options: ["A Map", "A Piano", "A Treasure Box", "A Door"],
            answer: "A Piano",
        },
        {
            question: "Which animal has three hearts?",
            options: ["Shark", "Octopus", "Whale", "Crocodile"],
            answer: "Octopus",
        },
        {
            question: "How many bones does an adult human body usually have?",
            options: ["206", "210", "201", "215"],
            answer: "206",
        },
        {
            question: "Which country has a town where the sun does not rise for several weeks in winter?",
            options: ["India", "Norway", "Brazil", "Egypt"],
            answer: "Norway",
        },
        {
            question: "What can travel around the world while staying in one corner?",
            options: ["A Shadow", "A Stamp", "A Clock", "A Mirror"],
            answer: "A Stamp",
        },
        {
            question: "Which is the only bird known to fly backwards?",
            options: ["Eagle", "Parrot", "Hummingbird", "Owl"],
            answer: "Hummingbird",
        },
        {
            question: "If you overtake the person in second place in a race, what position are you in?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "Second",
        },
    

    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const handleClick = (option) => {
        setCurrentAnswer(option)
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
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