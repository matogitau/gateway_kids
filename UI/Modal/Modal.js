
import Card from "../card/Card"
import classes from "./Modal.module.css"

const Modal = (props)=>{
return(
  <Card>
  <div className={classes.Modal}>
  {props.children}  
  </div>
  </Card>
  
)
}

export default Modal