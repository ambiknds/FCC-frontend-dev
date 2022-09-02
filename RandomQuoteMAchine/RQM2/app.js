const quoteData = [
    {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      },
      {
        "text": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
      },
      {
        "text": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
      },
      {
        "text": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
      },
      {
        "text": "Be the chief but never the lord.",
        "author": "Lao Tzu"
      },
      {
        "text": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
      },
      {
        "text": "Well begun is half done.",
        "author": "Aristotle"
      }
]

const QuoteBox = ({quote, handleNewQuote}) => (
    <div id="quote-box">
        <p id="text"><span>"</span>{quote.text}</p>
        <h2 id="author">- {quote.author}</h2>
        <div className="action">
             <a href="twitter.com/intent/tweet" 
             id="tweet-quote" target="_blank">Tweet</a>
             <button id="new-quote" className="button"
             onClick={handleNewQuote}> New Quote</button>
        </div>
    </div>
)


const getRandomIndex = () =>
    Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);


const App = () => {
    const [quote,setQuote] = React.useState(quoteData[getRandomIndex()]);
    const handleNewQuote = () => {
        setQuote(quoteData[getRandomIndex()]);
    }
    return (
        <div className="main">
        <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));