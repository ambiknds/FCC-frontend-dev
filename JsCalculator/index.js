function App() {
    const [expression,setExpression]= React.useState("");
    const [answer,setAnswer] = React.useState(0);
    
    const display = (symbol) => {
        setExpression((prev) => prev + symbol);
        if(expression[expression.length-1] == "="){
            if(/[1-9.]/.test(symbol)){
                setExpression(symbol);
            }else{
                setExpression(answer + symbol);
            }
        }
    }
    const calculate = () => {
        setAnswer(eval(expression));
        setExpression((prev) => prev + "=");
    };

    const allClear = () => {
        setExpression("");
        setAnswer(0)
    };
    const clear = () => {
        setExpression(prev => prev.split("").slice(0,prev.length-1).join(""));
        setAnswer(0);
    };
    return (
        <div className="container">
            <div className="grid">
                <div className="display" id="display">
                    <input type="text" value={expression} placeholder="0" disabled />
                    <div className="total">{answer}</div>
                </div>
                <div onClick={allClear} className="padButton ac tomato" id="allClear">AC</div>
                <div onClick={clear} className="padButton c tomato" id="clear">C</div>
                <div onClick={()=>display("/")} className="padButton div" id="divide">/</div>
                <div onClick={()=>display("*")} className="padButton mul" id="multiply">x</div>
                <div onClick={()=>display("7")} className="padButton seven dark-grey" id="seven">7</div>
                <div onClick={()=>display("8")} className="padButton eight dark-grey" id="eight">8</div>
                <div onClick={()=>display("9")} className="padButton nine dark-grey" id="nine">9</div>
                <div onClick={()=>display("-")} className="padButton minus" id="subtract">-</div>
                <div onClick={()=>display("4")} className="padButton four dark-grey" id="four">4</div>
                <div onClick={()=>display("5")} className="padButton five dark-grey" id="five">5</div>
                <div onClick={()=>display("6")} className="padButton six dark-grey" id="six">6</div>
                <div onClick={()=>display("+")} className="padButton add" id="add">+</div>
                <div onClick={()=>display("1")} className="padButton one dark-grey" id="one">1</div>
                <div onClick={()=>display("2")} className="padButton two dark-grey" id="two">2</div>
                <div onClick={()=>display("3")} className="padButton three dark-grey" id="three">3</div>
                <div onClick={calculate} className="padButton equal blue" id="equals">=</div>
                <div onClick={()=>display("0")} className="padButton zero dark-grey" id="zero">0</div>
                <div onClick={()=>display(".")} className="padButton decimal dark-grey" id="decimal">.</div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));