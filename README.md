
## Random Quote Generator
 
https://steliannechita.github.io/random-quote-generator/

Random Quote Generator is a web application where users can get their inspiring quote of the day. Quotes are rendered from local database which I have personally created, as all the API's providing quotes would have incured costs.

### Challenges
The most challenging thing was to make the component changing it's color and add FadeIn effect, both at the same time. I've managed to do that by adding a 'key' attribute to it. which will make the component re-render every time user clicks on the 'New Quote' button.

```
 return (
      <div style={{ backgroundColor: "white" }} className="quotebox">
        <div
          className="fadeIn"
          // if the key on a react component changes, it will force the component
          // to be re-rendered next pass

          // so if we set the key to random it will re-render every pass!
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
          style={{ backgroundColor: randomColor }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>
```
### Future features
- Introducing a sorting criteria/filter for the different types of quotes

### Technologies used
- React.JS 
- JavaScript (ES6) 
- Node.JS
- CSS 
- HTML5 
- Git 
- GitHub
- GitHub Pages

