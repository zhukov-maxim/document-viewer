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
import Workspace from './components/Workspace';
import {
  DocumentViewer,
  DocumentViewerList,
  DocumentViewerListItem,
  DocumentViewerControls
} from './components/DocumentViewer';
import './App.css';

const App = () => (
  <Layout>
    <LayoutLeftBarContainer />
    <LayoutTopBarContainer />
    <LayoutContentContainer>
      <Grid>
        <GridColumn columns={6}>
          <Workspace style={{ height: '600px' }}>
            <DocumentViewer>
              <DocumentViewerControls />
              <DocumentViewerList>
                <DocumentViewerListItem />
                <DocumentViewerListItem />
                <DocumentViewerListItem />
                <DocumentViewerListItem />
                <DocumentViewerListItem />
                <DocumentViewerListItem />
                <DocumentViewerListItem />
                <DocumentViewerListItem />
              </DocumentViewerList>
            </DocumentViewer>
          </Workspace>
        </GridColumn>
        <GridColumn columns={3}>
          <Workspace>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem sapiente eligendi nemo expedita fugiat deserunt voluptates atque ducimus, impedit, earum ab corporis qui numquam quasi voluptatibus ratione dolorum laudantium.
          </Workspace>
        </GridColumn>
      </Grid>
    </LayoutContentContainer>
  </Layout>
);

export default App;
