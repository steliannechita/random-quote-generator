(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,o,t){e.exports=t(17)},,,,,,function(e,o,t){},function(e,o,t){},function(e,o,t){},function(e,o,t){"use strict";t.r(o);var a=t(0),r=t.n(a),n=t(7),u=t.n(n),i=(t(14),t(1)),s=t(2),h=t(4),l=t(3),c=t(5),d=(t(15),function(e){function o(){return Object(i.a)(this,o),Object(h.a)(this,Object(l.a)(o).apply(this,arguments))}return Object(c.a)(o,e),Object(s.a)(o,[{key:"render",value:function(){var e=this.props.displayColor();return document.documentElement.style.backgroundColor=e,r.a.createElement("div",{style:{backgroundColor:"white"},className:"quotebox"},r.a.createElement("div",{className:"fadeIn",key:Math.random(),style:{color:e}},r.a.createElement("h1",{id:"quote"},'"',this.props.quote,'"'),r.a.createElement("h5",{id:"author"},"-",this.props.author?this.props.author:"Unknown","-")),r.a.createElement("button",{style:{backgroundColor:e},id:"newquote",onClick:this.props.handleClick},"New quote"))}}]),o}(r.a.Component)),m=(t(16),[{quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",author:"Thomas Edison"},{quote:"You can observe a lot just by watching.",author:"Yogi Berra"},{quote:"A house divided against itself cannot stand.",author:"Abraham Lincoln"},{quote:"Difficulties increase the nearer we get to the goal.",author:"Johann Wolfgang von Goethe"},{quote:"Fate is in your hands and no one elses",author:"Byron Pulsifer"},{quote:"Be the chief but never the lord.",author:"Lao Tzu"},{quote:"Nothing happens unless first we dream.",author:"Carl Sandburg"},{quote:"Well begun is half done.",author:"Aristotle"},{quote:"Life is a learning experience, only if you learn.",author:"Yogi Berra"},{quote:"Self-complacency is fatal to progress.",author:"Margaret Sangster"},{quote:"Peace comes from within. Do not seek it without.",author:"Buddha"},{quote:"What you give is what you get.",author:"Byron Pulsifer"},{quote:"We can only learn to love by loving.",author:"Iris Murdoch"},{quote:"Life is change. Growth is optional. Choose wisely.",author:"Karen Clark"},{quote:"You'll see it when you believe it.",author:"Wayne Dyer"},{quote:"Today is the tomorrow we worried about yesterday.",author:""},{quote:"It's easier to see the mistakes on someone else's paper.",author:""},{quote:"Every man dies. Not every man really lives.",author:""},{quote:"To lead people walk behind them.",author:"Lao Tzu"},{quote:"Having nothing, nothing can he lose.",author:"William Shakespeare"},{quote:"Trouble is only opportunity in work clothes.",author:"Henry J. Kaiser"},{quote:"A rolling stone gathers no moss.",author:"Publilius Syrus"},{quote:"Ideas are the beginning points of all fortunes.",author:"Napoleon Hill"},{quote:"Everything in life is luck.",author:"Donald Trump"},{quote:"Doing nothing is better than being busy doing nothing.",author:"Lao Tzu"},{quote:"Trust yourself. You know more than you think you do.",author:"Benjamin Spock"},{quote:"Study the past, if you would divine the future.",author:"Confucius"},{quote:"The day is already blessed, find peace within it.",author:""},{quote:"From error to error one discovers the entire truth.",author:"Sigmund Freud"},{quote:"Well done is better than well said.",author:"Benjamin Franklin"},{quote:"Bite off more than you can chew, then chew it.",author:"Ella Williams"},{quote:"Work out your own salvation. Do not depend on others.",author:"Buddha"},{quote:"One today is worth two tomorrows.",author:"Benjamin Franklin"},{quote:"Once you choose hope, anythings possible.",author:"Christopher Reeve"},{quote:"God always takes the simplest way.",author:"Albert Einstein"},{quote:"One fails forward toward success.",author:"Charles Kettering"},{quote:"From small beginnings come great things.",author:""},{quote:"Learning is a treasure that will follow its owner everywhere",author:"Chinese proverb"},{quote:"Be as you wish to seem.",author:"Socrates"},{quote:"The world is always in movement.",author:"V. Naipaul"},{quote:"Never mistake activity for achievement.",author:"John Wooden"},{quote:"What worries you masters you.",author:"Haddon Robinson"},{quote:"One faces the future with ones past.",author:"Pearl Buck"},{quote:"Goals are the fuel in the furnace of achievement.",author:"Brian Tracy"},{quote:"Who sows virtue reaps honour.",author:"Leonardo da Vinci"},{quote:"Be kind whenever possible. It is always possible.",author:"Dalai Lama"},{quote:"Talk doesn't cook rice.",author:"Chinese proverb"},{quote:"He is able who thinks he is able.",author:"Buddha"},{quote:"Be as you wish to seem.",author:"Socrates"},{quote:"A goal without a plan is just a wish.",author:"Larry Elder"},{quote:"To succeed, we must first believe that we can.",author:"Michael Korda"},{quote:"Learn from yesterday, live for today, hope for tomorrow.",author:"Albert Einstein"},{quote:"A weed is no more than a flower in disguise.",author:"James Lowell"},{quote:"Do, or do not. There is no try.",author:"Yoda"},{quote:"All serious daring starts from within.",author:"Harriet Beecher Stowe"},{quote:"The best teacher is experience learned from failures.",author:"Byron Pulsifer"},{quote:"Think how hard physics would be if particles could think.",author:"Murray Gell-Mann"},{quote:"Love is the flower you've got to let grow.",author:"John Lennon"},{quote:"Don't wait. The time will never be just right.",author:"Napoleon Hill"}]),y=function(e){function o(){var e;return Object(i.a)(this,o),(e=Object(h.a)(this,Object(l.a)(o).call(this))).handleClick=function(){var o=e.randomQuote();e.setState({quote:o.quote,author:o.author}),e.shuffleQuotes(m)},e.state={quote:m[0].quote,author:m[0].author},e}return Object(c.a)(o,e),Object(s.a)(o,[{key:"randomQuote",value:function(){var e=Math.floor(Math.random()*m.length);return m[e]}},{key:"shuffleQuotes",value:function(e){return e.sort(function(){return Math.random()-1.6})}},{key:"randomColor",value:function(){return"rgb(\n      ".concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),")")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,Object.assign({displayColor:this.randomColor,handleClick:this.handleClick},this.state)),r.a.createElement("footer",null,"Created by SN@2019"))}}]),o}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.4fbe05cf.chunk.js.map