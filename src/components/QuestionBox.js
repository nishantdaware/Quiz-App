

import React, {useState} from "react";

const QuestionBox = ({ question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return(
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((Text, index) => (
                <button key={index} className="answerBtn" onClick={() =>{
                    setAnswer([Text]);
                    selected(Text);
                } }>{Text}</button>
            ))}
        </div>
    )
}

export default QuestionBox;