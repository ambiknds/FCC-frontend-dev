const scriptureData = [
    {
        "verse": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "verse": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      },
      
]

const ScriptureBox = ({scripture, handleNewScripture}) => (
    <div id="scripture-box">
        <p id="scripture"><span>"</span>{scripture.verse}</p>
        <h2 id="author">- {scripture.author}</h2>
        <div className="action">
             <button id="new-scripture" className="button"
             onClick={handleNewScripture}> New Verse</button>
        </div>
    </div>
)


const getRandomIndex = () =>
    Math.round(Math.random() * ((scriptureData.length-1) - 0) + 0);


const App = () => {
    const [scripture,setScripture] = React.useState(scriptureData[getRandomIndex()]);
    const handleNewScripture = () => {
        setScripture(scriptureData[getRandomIndex()]);
    }
    return (
        <div className="main">
          <div className="daily-scripture">
          <ScriptureBox scripture={scripture} handleNewScripture={handleNewScripture}/>
          </div>
          <div className="random-scripture">
          <ScriptureBox scripture={scripture} handleNewScripture={handleNewScripture}/>
          </div>
        
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));