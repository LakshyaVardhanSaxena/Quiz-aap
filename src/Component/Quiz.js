import React from 'react'

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

    return (
        <div>What is React?</div>
    )
}