import React from 'react';
import PropTypes from 'prop-types';
import {
  DocumentViewer,
  DocumentViewerControls,
  DocumentViewerContent,
  DocumentViewerList,
  DocumentViewerListItem
} from '../components/DocumentViewer';

class StatefulDocumentViewer extends React.Component {
  static renderDocument(data) {
    return (
      <DocumentViewerListItem key={data}>
        {data}
      </DocumentViewerListItem>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      controlsVisible: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      controlsVisible: true
    });
  }

  handleMouseLeave() {
    this.setState({
      controlsVisible: false
    });
  }

  render() {
    return (
      <DocumentViewer
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <DocumentViewerControls visible={this.state.controlsVisible} />
        <DocumentViewerContent>
          <DocumentViewerList>
            {this.props.documents.map(StatefulDocumentViewer.renderDocument)}
          </DocumentViewerList>
        </DocumentViewerContent>
      </DocumentViewer>
    );
  }
}

StatefulDocumentViewer.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default StatefulDocumentViewer;
