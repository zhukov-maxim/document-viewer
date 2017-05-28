import React from 'react';
import {
  Layout,
  LayoutLeftBarContainer,
  LayoutTopBarContainer,
  LayoutContentContainer
} from './components/Layout';
import {
  Grid,
  GridColumn
} from './components/Grid';
import StatefulDocumentViewer from './containers/StatefulDocumentViewer';
import Workspace from './components/Workspace';
import './App.css';

const documents = [
  1342362363,
  2253262364,
  3309854302,
  4090354645,
  5214156457,
  6728284848,
  7353542525,
  8346272828
];

const App = () => (
  <Layout>
    <LayoutLeftBarContainer />
    <LayoutTopBarContainer />
    <LayoutContentContainer>
      <Grid>
        <GridColumn columns={6}>
          <Workspace style={{ height: '600px' }}>
            <StatefulDocumentViewer documents={documents} />
          </Workspace>
        </GridColumn>
      </Grid>
    </LayoutContentContainer>
  </Layout>
);

export default App;
