import React from 'react';
import Card from '../../UI/card/Card';
import classes from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={classes.Notfound}>
      <Card>
        <p>No Page Found!</p>
      </Card>
    </div>
  );
};

export default NotFound;