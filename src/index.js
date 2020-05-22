import React, {Component} from 'react'
import {render} from 'react-dom'

let bookList = [
   {"title": "Hunger", "author": "Roaxane Gay" ,"pages": 320},
   {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
   {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
   {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 304}
]
const Book =({title, author, pages, freeBookmark}) => {
   return (
      <section>
         <h2>{title}</h2>
         <p>by: {author}</p>
         <p>Pages: {pages} pages</p>
         <p>FreeBookmark Today : {freeBookmark ? 'yes!':'no!'}</p>
      </section>
   )
}

const Hiring = () =>
                     <div>
                        <p>The library is hiring. Go to www. library.com/jobs for more.</p>
                     </div>
const NotHiring = () =>
     <div>
        <p> The libray is not hiring. Check back later for more info</p>
     </div>
class Library extends React.Component { //JSX class implementation
    state = {open:true,
             freeBookmark: true,
             hiring: true,
             data: [],
             loading: false
   }

   componentDidMount() {
      this.setState({loading: true})
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
         .then(data => data.json()) //convert data to json format
         .then(data => this.setState({data, loading: false})) //set state of data
   }
   
   componentDidUpdate() { //componentDidUpdate() calls when click 'Change' button
      console.log("The component just updated")
   }
   
   toggleOPenClosed=() => {
      this.setState(prevState => ({
         open: !prevState.open
      }))
   }

   render() {
      // console.log(this.state)
      // const books = this.props.books
      const {books} = this.props
      
      return (
         <div>
            {this.state.hiring ? <Hiring/> : <NotHiring/>}
            {this.state.loading
            ? "loading..."
            : <div>
                {this.state.data.map(product=> {
                   return (
                      <div key={product.id}> {/* Comment: --> add key as product id*/}
                         <h3>Library Product of the Week</h3>
                         
                         <h4>{product.name}</h4>  {/* Comment: --> fetch name from API [.json] */}
                         <img alt={product.name} src={product.image} height={100}/>
                      </div>
                   )
                })}
             </div>
            }
            <h1>The library is {this.state.open? 'open': 'closed'}</h1>
            <button onClick={this.toggleOPenClosed}>Change</button>
            {books.map(
               (book,i)=><Book key={i}
                               title={book.title}
                               author={book.author}
                               pages = {book.pages}
                               freeBookmark = {this.state.freeBookmark}/>   
            )}
            
         </div>
      )
   }
}



render(
   <div>
     <Library books={bookList}/>
   </div>,
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

