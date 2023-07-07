import {useState} from 'react';

import styled from 'styled-components';

import {data} from './data';

import {Main} from './components/Main';
import {Card} from './components/Card';

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  return <Main>
    {
      data.map(singleData => <Card key={singleData.id} selectedId={selectedId} setSelectedId={setSelectedId} {...singleData} />)
    }    
  </Main>
}

export default App
