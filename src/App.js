import React from 'react';

import './App.css';

let quotes =[{
  quote:'Life is what happens when you\'re busy making other plans.',
  author:'John Lenon'},{
  quote:'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
  author:'Mark Twain'},{
  quote:'Those who dare to fail miserably can achieve greatly.',
  author:'John F. Kennedy'},{
  quote:'It is hard to fail, but it is worse never to have tried to succeed.',
  author:'Theodore Roosevelt'
  }]

class App extends React.Component {

  constructor(){
    super();
    this.state={
      quote:quotes[0].quote,
      author:quotes[0].author};

  }
  randomNum(){
    
    let randomNumber=Math.floor(Math.random()*quotes.length)
    return quotes[randomNumber]
  }
  
  handleClick=()=>{
    let randomQuote=this.randomNum();
    this.setState({quote:randomQuote.quote,
      author:randomQuote.author});
      
    
  }
  
  randomColor(){
    let color=`rgb(
      ${Math.floor(Math.random()*155)},
      ${Math.floor(Math.random()*155)},
      ${Math.floor(Math.random()*155)})`
    return color
  }
  render(){
    let displayColor=this.randomColor()
    let root=document.getElementById('root');
    root.style.backgroundColor=displayColor;
   
    return (
    <div>
      <div style={{backgroundColor:'white'}} className='quotebox' >
          
            <h1 style={{color:displayColor}} 
              className='text' >"{this.state.quote}"
            </h1>
          
          <h5 style={{color:displayColor}} 
              className='author'>-{this.state.author}-
          </h5>

          <button style={{backgroundColor:displayColor}}
                    className='newquote'
                    onClick={this.handleClick}
                    >New quote
          </button>
      </div> 
      <footer >Created by SN@2019</footer>  
    </div> 
   )
  }
}

export default App;

