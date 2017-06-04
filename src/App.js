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
import documents from './documents';
import './App.css';

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
