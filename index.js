import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  
  if (props.sum > 0) {
  return (
    <>
    <>
    <h2>Statistiikkaa</h2>
    <table>
    <tr><Statistic name='Hyvä' value={props.good}></Statistic></tr>
    <tr><Statistic name='Neutraali' value={props.neutral}></Statistic></tr>
    <tr><Statistic name='Huono' value={props.bad}></Statistic></tr>
    <tr><Statistic name='Yhteensa' value={props.sum}></Statistic></tr>
    <tr><Statistic name='Keskiarvo' value={props.avg}></Statistic></tr>
    <tr><Statistic name='Positiivisia' value={props.positive}></Statistic></tr>
    </table>
    </>
  </>
  ) }
return (
  <>
  <h2>Statistiikkaa</h2>
  Ei yhtään palautetta annettu
  </>
)
}

const Statistic = (props) => {
  
  return (
    <>
    <>
    {props.name}: {props.value} <br></br>
    </>
  </>
  ) }

  
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let reviews = [good, neutral , bad]
  let sum = reviews.reduce((previous, current) => current += previous);
  let sumvalues = (good*1 + bad*(-1))
  let avg = sumvalues / sum;
  let positive = (good / sum) * 100


  return  (
    <div>
    <div>
        <h2>Anna palautetta</h2>
      <button onClick={() => setGood(good + 1)}>
        Hyvä
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        Neutraali
      </button>
      <button onClick={() => setBad(bad + 1)}>
        Huono
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} avg={avg} positive={positive+'%'}></Statistics>
    </div>
  </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)
