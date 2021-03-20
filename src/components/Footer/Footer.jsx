import { makeStyles, Container } from '@material-ui/core';
import React from 'react';
import classnames  from 'classnames';
import { NavLink }  from 'react-router-dom';

import MediaBox from './MediaBox';
import routes from '../../constants/routes.json';
import media from '../../UpdatbleFiles/media.json';

const useStyles = makeStyles({
  footerContainer: {
    height: '220px',
    backgroundColor: 'black',
  },
  flexContainer:{
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'trasparent',
    height: '100%',
  },
  innerContainer: {
    width: '170px',
    height: '170px',
    color: 'white' ,
    margin: 'auto 0'
  },
  image: {
    backgroundColor: 'red'
  },
  icon: {
  },
  about: {
    '& h2': { 
      marginTop: '10px'
    },
    '& a': {
      textDecoration: 'none',
      whiteSpace: 'unset',
      color:'inherit',
      display: 'block',
      fontSize: '14px',
      margin: '3px 0',
    },
    '& a:visited': {
      color: 'inherit'

    }
  },
  contacts: {
    '& h2': { 
      marginTop: '10px'
    },
    '& div': {
      margin: '3px 0',
    }
  },
  sponsors: {
    backgroundColor: 'red'
  }
});

const Footer = () => {
  const {
    footerContainer,
    flexContainer,
    innerContainer,
    image,
    icon,
    about,
    contacts,
    sponsors,
  } = useStyles();
  
  const imageContainer = classnames(innerContainer, image);
  const iconContainer = classnames(innerContainer, icon);
  const aboutContainer = classnames(innerContainer, about);
  const contactsContainer = classnames(innerContainer, contacts);
  const sponsorContainer = classnames(innerContainer, sponsors);

  return (
    <div className={footerContainer}>
      <Container className={flexContainer}>
        <div className={innerContainer + ' ' + imageContainer}>

        </div>
        <div className={iconContainer}>
          <MediaBox />
        </div>
        <div className={aboutContainer}>
          <h2>Sobre</h2>
          <NavLink to={routes.History}>História</NavLink>
          <NavLink to={routes.Merch}>Merch</NavLink>
          <NavLink to={routes.Cast}>Cast</NavLink>
          <NavLink to={routes.Sponsors}>Patrocínio</NavLink>
        </div>
        <div className={contactsContainer}>
          <h2>Contato</h2>
          <div>{media.phone}</div>
          <div>{media.email}</div>
        </div>
        <div className={sponsorContainer}>

        </div>
      </Container>
    </div>
  )
}

export default Footer;