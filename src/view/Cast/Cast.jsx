import { makeStyles } from '@material-ui/core';
import React from 'react';
import PlayerBlock from '../../components/PlayerBlock';
import playerList from '../../UpdatbleFiles/cast.json'

const useStyles = makeStyles({
  root: {

  }
})

const Cast =  () => {
  const { root } = useStyles();
  const { cast } = playerList;
  return (
    <div className={root}>
      {cast.map((player, i) => (
        <PlayerBlock 
          name={player.name}
          nickname={player.nickname}
          description={player.description}
          image={player.image}
          invert={(i % 2) > 0}
        />
      ))}
    </div>
  );
}

export default Cast;