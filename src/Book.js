import React, {Component} from 'react' 
 
 //const Book creates default value to bookList when any value is not mentioned
 export const Book =({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
       <section>
          <h2>{title}</h2>
          <p>by: {author}</p>
          <p>Pages: {pages} pages</p>
          <p>FreeBookmark Today : {freeBookmark ? 'yes!':'no!'}</p>
       </section>
    )
 }