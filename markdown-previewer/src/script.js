import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const initialState = `
  This is a paragraph
  **This is bolded text**
  
  > Block Quotes!
  
  # Heading
  ## Heading 2
  
  - list item 1
  - list item 2
  - list item 3


  [Visit my website](https://https://www.patreon.com/oheriotobo)
  
  This is a inline \`<div></div>\`
  This is a block of code:
  
  This is a block of code
  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`
  
  ![FCC](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

// a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.



class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    const { text } = this.state;
    
    const markdown = marked.parse(text, {breaks: true});
    
    return(
      <div>
        <h2 className="text-center m-4 text-white">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center text-white">Enter your markdown:</h6>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          
          <div className="col-6">
            <h6 className="text-center text-white">See the result:</h6>
            <div className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}}  id="preview"/>
          </div>
        </div>
     </div>
    );
  }
}

        
ReactDOM.render(<App/>, document.getElementById("app"));