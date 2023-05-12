
import { useState } from "react";

function ComposeForm() {
  const [editorValue, setEditorValue] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(editorValue);
     setTweets([...tweets, editorValue]);
    setEditorValue("");
  };

  function handleFormSubmit(value) {
    console.log(`Submitting: ${value}`);
  }

  return (
    <div className="main-container-wrap">
      <form className="compose-form" onSubmit={handleSubmit}>
        <div className="compose-form-container">
          
          <textarea
            value={editorValue}
            onChange={handleEditorValueChange}
            className="compose-form-textarea"
            placeholder=" What's happening ? "
          />
        </div>

        <button
          className="compose-form-submit"
          type="submit"
          onClick={handleFormSubmit}
        >
          {" "}
          Tweet
        </button>
      </form>

      <div className="tweet-container">
        {tweets.map((tweet, index) => (
          <div  key={index} className="tweet">
            😃@{tweet}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComposeForm;
