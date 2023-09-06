import React from "react";

function MinutesEmoji({minutes, date}) {

  if (minutes < 30) {
    let count = Math.ceil(minutes / 5);

    let emoji =  "☕️";
    let multipleEmoji = `${emoji.repeat(count)}`;

    return <small>{date} --- {multipleEmoji} {minutes} minutes to read</small>

  } else {
    let count = Math.ceil(minutes / 10);

    let emoji = "🍱";
    let multipleEmoji = `${emoji.repeat(count)}`;
    return <small>{date} - {multipleEmoji} {minutes} minutes to read</small>
  }
}

export default MinutesEmoji;