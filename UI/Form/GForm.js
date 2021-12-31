import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

const GForm = (props) => {

  const submittedFormHandler = ()=>{
    console.log("login was submitted")
  }
  return (
    <form  onSubmit={submittedFormHandler} >
      <Input htmlFor="emailPhone" input={{type:"text"}}>Enter email or Phone </Input>
     <Button type="submit">Login</Button> 
    </form>
  );
};

export default GForm;