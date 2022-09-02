function App() {

    const [quotes,setQuotes] = React.useState([]);
    const [randomQuote,setRandomQuote] = React.useState([]);
    const [color,setColor] =React.useState(["#fff"])

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])
        const getNewQuote = () => {

            const colors = [
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c12',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                '#472E32',
                '#BDBB99',
                '#77B1A9',
                '#73A857'
              ];
            

            let randIndex = Math.floor(Math.random() * quotes.length);
            let randColorIndex = Math.floor(Math.random() * colors.length);
                setRandomQuote(quotes[randIndex])
                setColor(colors[randColorIndex])
        }

    return (
        <div style={{backgroundColor:color, minHeight:"100vh"}}>
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card" id="quote-box" >
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (
                            <>
                            <p className="card-text" id="text">&quot;{randomQuote.text}&quot;</p>
                            <h5 className="card-title quote-author"  id="author">- {randomQuote.author || "No author"}</h5>
                            </>
                        ) : (
                            <h2>Loading</h2>
                        )}

                        <div className="buttons my-3">
                            <button onClick={getNewQuote}  className="btn btn-primary float-end" id="new-quote">New Quote</button>
                            <a href="twitter.com/intent/tweet" target="_blank"  className="btn btn-warning me-3" id="tweet-quote">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#" className="btn btn-danger " >
                                <i className=" fa fa-tumblr"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center" style={{color: "black"}}>by student</div>
            </div>
        </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'))