

import classes from "./BackDrop.module.css"

const BackDrop = (props)=>{
return( 
  <div className={classes.BackDrop} onClick={props.onClose}>       
  </div> 
  
)
}

export default BackDrop