import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  DocumentViewer,
  DocumentViewerControls,
  DocumentViewerContent,
  DocumentViewerList
} from '../components/DocumentViewer';

import StatefulDocumentViewerListItem from './StatefulDocumentViewerListItem';

class StatefulDocumentViewer extends React.Component {
  static renderDocument(data) {
    return (
      <StatefulDocumentViewerListItem
        id={data.id}
        key={data.id}
        width={data.width}
        height={data.height}
      />
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      controlsVisible: false
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseMove(e) {
    const THRESHOLD = 120;

    const documentViewerDOMNode = ReactDOM.findDOMNode(this);

    const mouseY = e.pageY;
    const documentViewerY = documentViewerDOMNode.getBoundingClientRect().top;
    const delta = mouseY - documentViewerY;

    if (delta < THRESHOLD) {
      this.setState({
        controlsVisible: true
      });
    } else {
      this.setState({
        controlsVisible: false
      });
    }
  }

  handleMouseLeave() {
    this.setState({
      controlsVisible: false
    });
  }

  render() {
    return (
      <DocumentViewer
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <DocumentViewerControls visible={this.state.controlsVisible} />
        <DocumentViewerContent>
          <DocumentViewerList>
            {this.props.documents.map(StatefulDocumentViewer.renderDocument, this)}
          </DocumentViewerList>
        </DocumentViewerContent>
      </DocumentViewer>
    );
  }
}

StatefulDocumentViewer.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StatefulDocumentViewer;
