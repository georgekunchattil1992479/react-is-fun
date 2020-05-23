import React, {Component} from 'react'
import {render} from 'react-dom'

import Library from './Library'

//Library App
    let bookList = [
   {"title": "Hunger", "author": "Roaxane Gay" ,"pages": 320},
   {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
   {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
   {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]


render(
   <Library books={bookList} />,
   document.getElementById('root') //render public/index.html
 )


/* var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
} */


/* let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal:100
}

const getPercent = decimal => {
   return decimal*100 +'%'
}
const calcGoalProgress =(total, goal) => {
   return getPercent(total/goal)
}

//function component
const SkiDayCounter = ({total, powder, backcountry, goal}) => {
   return (
      <section>
            <div>
               <p>Total Days: {total}</p>
            </div>
            <div>
               <p>Powder Days: {powder}</p>
            </div>
            <div>
               <p>Backcountry Days: {backcountry}</p>
            </div>
            <div>
               <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
            </div>
         </section>
   )
} */


/*  React Component
class SkiDayCounter extends Component {
   render() {
     const {total, powder, backcountry, goal} = this.props
      return (
         <section>
            <div>
               <p>Total Days: {total}</p>
            </div>
            <div>
               <p>Powder Days: {backcountry}</p>
            </div>
            <div>
               <p>Backcountry Days: {powder}</p>
            </div>
            <div>
               <p>Goal: {goal}</p>
            </div>
         </section>
      )
   }
} 

render(
  <SkiDayCounter
     total={skiData.total}
     powder={skiData.powder}
     backcountry={skiData.backcountry}
     goal={skiData.goal}/>,
  document.getElementById('root') //render public/index.html
)*/

/*
2. JSX
ReactDom.render(
  <div style={style}>
     <h1 id="heading-element">Hello World!</h1>
     <p>We're glad you're here</p>
  </div>,
  document.getElementById('root') //render public/index.html
)
*/



/* 1.Old code 1
const title = React.createElement(
  'ul',
  {id: 'title', className: 'header', style: style},
  React.createElement(
    'li',
    {},
    'item on our list'
  )
) 

ReactDom.render(
  title,   //render title
  document.getElementById('root') //render public/index.html
)
*/

