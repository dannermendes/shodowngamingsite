import React from 'react';
import { 
  Instagram,
  Facebook,
  YouTube,
} from '@material-ui/icons';
import { makeStyles, styled } from '@material-ui/core';

import medialinks from '../../UpdatbleFiles/media.json';

const MediaBoxContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',

  height: '100%',
});

const useStyles = makeStyles({
  icon: {
    fontSize: '40px',
    color: 'white',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

function openNewTab(url) {
  const win = window.open(url, '_blank');
  win.focus();
}

const MediaBox = () => {
  const { icon } = useStyles();
  return (
    <MediaBoxContainer>
      <Facebook className={icon} onClick={() => openNewTab(medialinks.facebook)} />
      <Instagram className={icon} onClick={() => openNewTab(medialinks.instagram)} />
      <YouTube className={icon} onClick={() => openNewTab(medialinks.youtube)}/>
    </MediaBoxContainer>
  );
};



export default MediaBox;