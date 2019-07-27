import React from 'react';
import QuoteAndAuthor from '../QuoteAndAuthor/QuoteAndAuthor'
import './App.css';

let quotes =[{
  quote:'Life is what happens when you\'re busy making other plans.',
  author:'John Lenon'},{
  quote:'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
  author:'Mark Twain'},{
  quote:'Those who dare to fail miserably can achieve greatly.',
  author:'John F. Kennedy'},{
  quote:'It is hard to fail, but it is worse never to have tried to succeed.',
  author:'Theodore Roosevelt'},{
  quote:'I have no special talent. I am only passionately curious.',
  author:'Albert Einstein'},{
  quote:'If you judge people, you have no time to love them.',
  author:'Mother Teresa'},{
  quote:'Wisely, and slow. They stumble that run fast.',
  author:'William Shakespeare '   
    }]

class App extends React.Component {

  constructor(){
    super();
    this.state={
      quote:quotes[0].quote,
      author:quotes[0].author,
      className:''};

  }
  randomQuote(){
    let randomNumber=Math.floor(Math.random()*quotes.length)
    return quotes[randomNumber]
  }
  
  handleClick=()=>{
    let generateRandomQuote=this.randomQuote();
    this.setState({quote:generateRandomQuote.quote,
    author:generateRandomQuote.author,className:'fadeIn'});
    setTimeout(()=>this.setState({className:''}),800)
    
  }
  
  randomColor(){
    let color=`rgb(
      ${Math.floor(Math.random()*155)},
      ${Math.floor(Math.random()*155)},
      ${Math.floor(Math.random()*155)})`
    return color
  }
  
  render(){
    return (
      <div>
          <QuoteAndAuthor displayColor={this.randomColor}
                          handleClick={this.handleClick}
                          {...this.state}/>
          <footer >Created by SN@2019</footer>  
        </div>   
   )
  }
}

export default App;

