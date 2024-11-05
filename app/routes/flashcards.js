import Route from '@ember/routing/route';

export default class FlashcardsRoute extends Route {
    model () {
        return [
            {
                question: 'What is the capital of France?',
                answer: 'Paris'
            },
            {
                question: 'What is the capital of Spain?',
                answer: 'Madrid'
            },
            {
                question: 'What is the capital of Italy?',
                answer: 'Rome'
            }, 
            {
                question: 'What is the capital of Portugal?',
                answer: 'Lisbon'
            },
            { 
                question: 'What is the capital of Germany?',
                answer: 'Berlin'
            },
            {
                question: 'What is the capital of the United Kingdom?',
                answer: 'London'
            },
            {
                question: 'What is the capital of the United States?',
                answer: 'Washington, D.C.'
            },
            {
                question: 'What is the capital of Canada?',
                answer: 'Ottawa'
            },
            {
                question: 'What is the capital of Mexico?',
                answer: 'Mexico City'
            },
            {
                question: 'What is the capital of Brazil?',
                answer: 'Brasília'
            }
        ]
    }
}
