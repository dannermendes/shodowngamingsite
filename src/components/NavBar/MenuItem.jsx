import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '110px',
    height: '100%',
    fontWeight:'bold',
    justifyContent: 'center',
    fontSize: '18px',
  },
  inner: {
    margin: 'auto 0',
    backgroundColor: 'transparent',
    border: 'solid 4px transparent',
  },
  hover: {
    cursor: 'pointer',
    borderBottom: 'solid 4px black',
  },
  selected: {
    background: 'radial-gradient(circle, rgba(110,127,148,1) 8%, rgba(238,174,202,0) 100%)',
  },
});



const MenuItem = ({to, children, isSelected}) => {
  const classes = useStyles();
  const history = useHistory();
  const [isHover, setIsHover] = useState(false);


  console.log(history.location.pathname);
  const rootClasses = classNames([
    classes.root,
    {[classes.selected]: isSelected}
  ]);
  const innerClasses = classNames([
    classes.inner,
    {[classes.hover]: isHover}
  ]);

  return (
    <div className={rootClasses} 
      onClick={() => { 
        history.push(to);
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={innerClasses}>
        { children }
      </div>
    </div>
  );
}

export default MenuItem;