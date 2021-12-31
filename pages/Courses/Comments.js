/* import { useHistory, Prompt } from "react-router-dom"; */
import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/card/Card";
import classes from "./Comments.module.css";

const Comments = (props) => {
  const history = useHistory();
  const [comment, setComment] = useState();
  const [formBeingfilled, setFormBeingFilled] = useState(false);

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const submittedFormHandler = (e) => {
    e.preventDefault();
    /* send the request to the server */
    /* history.push("Courses/coursesSummary"); */
  };

  const formFocusHandler = () => {
    setFormBeingFilled(true);
  };

  const finishFocusHandler = () => {
    setFormBeingFilled(false);
  };

  return (
    <div>
      <Prompt
        when={formBeingfilled}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      {/* when sets if prompt should be shown */}
      <p>Please give us feed Back</p>
      <Card className={classes.Form}>
        <form onFocus={formFocusHandler} onSubmit={submittedFormHandler}>
          <textarea
            className={classes.textarea}
            htmlFor="comment"
            type="textarea"
            rows="4"
            cols="32"
            placeholder="Enter Your Comments"
            onChange={commentHandler}
          ></textarea>
          <Button onClick={finishFocusHandler} type="submit">
            Send
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Comments;
