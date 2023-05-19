import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { v4 as uuid } from "uuid";
import { getUsers } from "./localStorage";

function Activity() {
  const [editorValue, setEditorValue] = useState("");
  
  const storedData = localStorage.getItem("users");
  var k=[]
  k=storedData ? JSON.parse(storedData) : []
  console.log ();

  let newArray=k.filter(function (el){
    return el.cardName  ===  window.tag
  })
  var [activity, setActivity] = useState(newArray);
  const handleEditorValueChange = (e) => {
    setEditorValue(e.target.value);
  };
   const name=window.tag 
  const handleSubmit = (e) => {
    e.preventDefault();
    setActivity([
      { id: uuid(), task: editorValue, time: showTime, cardName:name},
      ...activity
    ]);
   var tag= { id: uuid(), task: editorValue, time: showTime, cardName:name }
    setEditorValue("");
    setTime(time);
   const users = getUsers();
    users.push(tag);
    localStorage.setItem("users", JSON.stringify(users));
   
 
  };
 


  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const date = new Date();

  const showTime =
    date.toLocaleString("default", { month: "long" }) +
    " " +
    date.getDate() +
    " at " +
    date.getHours() +
    ":" +
    date.getMinutes();

  const [time, setTime] = useState(showTime);

  return (
    <div className="main-container-wrap">
      <form className="compose-form" onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: ".5rem" }}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>KP</Avatar>
          <TextField
            size="small"
            value={editorValue}
            onKeyPress={handleKeypress}
            onChange={handleEditorValueChange}
            className="compose-form-textarea"
            placeholder="  Write a comment "
            style={{
              display: "flex",
              backgroundColor: "white",
              borderRadius: ".5rem",
              width: "100vw"
            }}
          />
        </div>
      </form>

      <div
        className="tweet-container"
        style={{ marginLeft: "-.4rem", marginTop: "1rem" }}
      >
        {activity.map((curElm, index) => (
          <div key={index} className="tweet">
            <Typography
              variant="h6"
              component="h2"
              style={{ display: "flex", gap: "1rem", margin: ".5rem" }}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>KP</Avatar>
              kamal panwar - {curElm.time}
            </Typography>
            <Typography
              style={{
                display: "flex",
                marginLeft: "4rem",
                backgroundColor: "white",
                borderRadius: ".5rem",
                padding: ".5rem"
              }}
            >
              {" "}
              {curElm.task}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
