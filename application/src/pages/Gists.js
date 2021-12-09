import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { getAllGists } from "../store/gistsSelectors";
import { useSelector, shallowEqual } from "react-redux";
import { addAllGistsThunk } from '../store/gistsReducer';
import store from "../store";

export default function Gists() {
  const { error, gists } = useSelector(getAllGists, shallowEqual);
  console.log(gists);

  const requestGists = () => {
    store.dispatch(addAllGistsThunk());
  };

  useEffect(() => {
    console.log('useEffect');
    requestGists();
  }, []);

  return (
    <Container style={{ background: 'lightgrey', margin: "0 auto", 
      maxWidth: 800, padding: 0, borderRadius: 5, display: 'flex',
      justifyContent: 'center' }}>
        <ul>
              { 
                gists ? gists.map(function(entry) {
                  return (<div key={entry.id+22}>{entry.description}</div>)
                })
                : <div>Нет ничего</div>
              } 
                
        </ul>
        { error 
          ? <>
            <h3>{error}</h3>
            <button onClick={requestGists}>Retry</button>
          </>
          : gists 
            ? <ul>
              { 
                gists.forEach((gist) => <li key={gist.id}>{gist.description}</li>)
              }
            </ul>
            : <div></div>
          
        }

    </Container>
  );
}

