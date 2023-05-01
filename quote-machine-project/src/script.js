import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const quoteData = [
  {text: `"I give thanks that I am now rich, well and happy and that my financial affairs are in divine order. Every day in every way I am growing richer and richer."` , author: " Catherine Ponder" },
  {text: `"Do not dwell on what once was, but rather look forward and ponder how you can make the future brighter"`, author: "- Christopher Paolini" },
  {text: `"Only for you, children of doctrine and learning, have we written this work. Examine this book, ponder the meaning we have dispersed in various places and gathered again; what we have concealed in one place we have disclosed in another, that it may be understood by your wisdom."` , author: "Heinrich Cornelius Agrippa" },
  {text: `"They put it like that?' said Glenda, wide-eyed.'Oh, you know the sort of thing if you read the papers a lot,' said Ponder. 'I seriously think they think that it is their job to calm people down by first of all explaining why they should be overexcited and very worried."` , author: "Terry Pratchett" },
  {text: `"I accept the fact that there is always a way out in every situation we find ourselves but, until we begin to ponder, panacea will be very scarce"` , author: "Ernest Agyemang Yeboah" },
  {text: `"I give thanks for ever increasing health, youth and beauty."` , author: "Catherine Ponder" }
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text} </p>
    <h2 id="author" >{quote.author}</h2>
    <div class="actions">
      <button
        id="new-quote"
        class="button"
        onClick={handleNewQuote}
        >
        New Quote
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
       >
         Tweet
      </a>
    </div>
  </div>      
);

const getRandomIndex = () =>
  Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () =>{
    setQuote(quoteData[getRandomIndex()])
  }
  return(
    <div class="main">
      <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))

