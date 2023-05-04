import React from 'react'
import styles from './PersonsPage.module.css'
import { useLocation } from 'react-router-dom';
import PersonContainer from '../../../components/personContainer/PersonContainer';

const PersonsPage = () => {

  const { state } = useLocation();

  const directorsNames = []
  for (let i = 0; i < state.directors.length; i++) {
    directorsNames.push(state.directors[i].name)
  }
  const actorsNames = []
  for (let i = 0; i < state.actors.length; i++) {
    actorsNames.push(state.actors[i].name)
  }
  const compositorsNames = []
  for (let i = 0; i < state.compositors.length; i++) {
    compositorsNames.push(state.compositors[i].name)
  }
  const artistsNames = []
  for (let i = 0; i < state.artists.length; i++) {
    artistsNames.push(state.artists[i].name)
  }
  const scenarioNames = []
  for (let i = 0; i < state.scenario.length; i++) {
    scenarioNames.push(state.scenario[i].name)
  }
  const operatorsNames = []
  for (let i = 0; i < state.operators.length; i++) {
    operatorsNames.push(state.operators[i].name)
  }
  const montagesNames = []
  for (let i = 0; i < state.montages.length; i++) {
    montagesNames.push(state.montages[i].name)
  }


  return (
    <div className={styles.mainContainer}>
      {directorsNames.length ? <PersonContainer film={state} title='Режиссёры' persons={directorsNames} profession='directors' noMore={true} /> : ''}
      {actorsNames.length ? <PersonContainer film={state} title='Актёры' persons={actorsNames} profession='actors' noMore={true} /> : ''}
      {compositorsNames.length ? <PersonContainer film={state} title='Композиторы' persons={compositorsNames} profession='compositors' noMore={true} /> : ''}
      {artistsNames.length ? <PersonContainer film={state} title='Художники' persons={artistsNames} profession='artists' noMore={true} /> : ''}
      {scenarioNames.length ? <PersonContainer film={state} title='Сценаристы' persons={scenarioNames} profession='scenario' noMore={true} /> : ''}
      {operatorsNames.length ? <PersonContainer film={state} title='Операторы' persons={operatorsNames} profession='operators' noMore={true} /> : ''}
      {montagesNames.length ? <PersonContainer film={state} title='Монтаж' persons={montagesNames} profession='montages' noMore={true} /> : ''}
    </div>
  )
}

export default PersonsPage