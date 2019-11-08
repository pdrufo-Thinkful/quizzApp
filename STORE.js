'use strict';

const STORE = {   
  quiz: [
    {
      question: 'The hottest temperature ever recorded in the U.S. was 134° F. This occured in which state?',
      answers: ['Texas', 'Arizona', 'Utah', 'California'],
      correct: 3 //array index
    },
    {
      question: 'Which state is home to all five of the most lightning prone U.S. cities?',
      answers: ['Florida', 'Alabama', 'Mississippi', 'Louisiana'],
      correct: 0 //array index
    },
    {
      question: 'This U.S. city is the sunniest on Earth, receiving on average more than 4,000 hours of sunny weather every year:',
      answers: ['El Paso, TX', 'Phoenix, AZ', 'Yuma, AZ', 'Las Vegas, NV'],
      correct: 2 //array index
    },
    {
      question: 'In 2011, this state broke a record for the most tornadoes in a single day - a total of 72!',
      answers: ['Tennessee', 'Alabama', 'Texas', 'Oklahoma'],
      correct: 0 //array index
    },
    {
      question: 'Which state received the most rain in a 24 hour period? (an extreme 42 inches!)',
      answers: ['Louisiana', 'Texas', 'Washington', 'California'],
      correct: 1 //array index
    },
    {
      question: 'This U.S. city is the sunniest on Earth, receiving on average more than 4,000 hours of sunny weather every year:',
      answers: ['El Paso, TX', 'Phoenix, AZ', 'Yuma, AZ', 'Las Vegas, NV'],
      correct: 2 //array index
    },
    {
      question: 'Of the 100 most populous U.S. cities, which is the coldest? (Based on which cities are persistently the coldest during the winter, rather than their record coldest temperature)',
      answers: ['Omaha, NE', 'Minneapolis-St. Paul, MN', 'Anchorage, AK', 'Madison, WI'],
      correct: 1 //array index
    },
    {
      question: 'What is the cloudiest major U.S. city, with an average of 226 cloudy days per year? (Cities with a population of 1 million+)',
      answers: ['Pittsburgh, PA', 'Portland, OR', 'Seattle, WA', 'Cleveland, OH'],
      correct: 2 //array index
    },
    {
      question: 'This state experienced a world record rainstorm: 1 foot of rain fell in just 42 minutes',
      answers: ['Florida', 'Missouri', 'Hawaii', 'Oregon'],
      correct: 1 //array index
    },
    {
      question: 'Of U.S. cities with a population of at least 100,000, this city is the most persistently windy:',
      answers: ['Amarillo, TX', 'Fargo, ND', 'Boston, MA', 'Chicago, IL'],
      correct: 0 //array index
    },
    {
      question: 'In the lower 48, this state holds the record for the most snowfall in a 24-hour period:',
      answers: ['Wyoming', 'Oregon', 'Colorado', 'Maine'],
      correct: 2 //array index
    },
  ],
  currentQuestion: 0,
  score: 0
};