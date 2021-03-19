import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root:{
    overflow: 'hidden',
    marginBottom: '20px',
    '& p': {
      fontSize: '18px'
    },
    ' & h1': {
      fontSize: '38px'
    }
  },
  imageContainer: props => {
    console.log('css props', props);
    return { 
    float: !props.invert ? 'left' : 'right',
    backgroundColor: 'red',
    width: '400px',
    height: '400px',
    marginRight: !props.invert ? '20px' : '0px',
    marginLeft: props.invert ? '20px' : '0px',
  }},
});

const PlayerBlock = ({name, nickname, image, description, invert}) => {
  const { imageContainer, root, text } = useStyles({invert});
  return (
    <div className={root}>
      <h1>{ name } "{ nickname }"</h1> 
      <div>
      <p className={text}><div className={imageContainer} />{ description }</p>

      </div>
    </div>
  )
}

export default PlayerBlock;