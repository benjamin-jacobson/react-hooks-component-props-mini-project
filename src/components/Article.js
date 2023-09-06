import React from "react";
import MinutesEmoji from "../components/MinutesEmoji.js";

function Article({title, date= "January 1, 1970", preview, minutes}) {

  let emojiComponent = <MinutesEmoji minutes={minutes} date={date}/>
  
  return (
    <article>
      <h3>{title}</h3>
      {emojiComponent}
      <p>{preview}</p>
    </article>
  );
}

export default Article;