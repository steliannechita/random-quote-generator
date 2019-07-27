import React from 'react'
import './QuoteAndAuthor.css'
class QuoteAndAuthor extends React.Component{
  constructor(){
    super();
  }
  
    render(){
      let randomColor=this.props.displayColor();
      let root=document.getElementById('root');
      root.style.backgroundColor=randomColor;
        
        return(
            <div style={{backgroundColor:'white'}} 
                className='quotebox' >
              <h1 style={{color:randomColor}} 
                  id='quote'
                  className={this.props.className} >"{this.props.quote}"
              </h1>
              <h5 style={{color:randomColor}} 
                  id='author'
                  className={this.props.className} >-{this.props.author}-
              </h5>
              <button style={{backgroundColor:randomColor}}
                  id='newquote'
                  onClick={this.props.handleClick}
                  >New quote
              </button>
            </div> 
        )
    }
}

export default QuoteAndAuthor;