import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  DocumentViewerListItem,
  DocumentViewerRotationButton
} from '../components/DocumentViewer';

class StatefulDocumentViewerListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rotationDegree: 0,
      currentWidth: 'auto',
      currentHeight: 'auto'
    };

    this.handleRotateDocument = this.handleRotateDocument.bind(this);
  }

  handleRotateDocument() {
    this.setState({
      // TODO: Get rid of "-0" after first full circle.
      rotationDegree: (this.state.rotationDegree - 90) % 360
    }, () => {
      const thisItemNode = ReactDOM.findDOMNode(this.item);
      const thisBoundingClientRect = thisItemNode.getBoundingClientRect();
      const currentWidth = `${thisBoundingClientRect.width}px`;
      const currentHeight = `${thisBoundingClientRect.height}px`;

      this.setState({
        currentWidth,
        currentHeight
      });
    });
  }

  render() {
    const { id, width, height } = this.props;
    const { rotationDegree, currentHeight } = this.state;

    return (
      <div
        style={{
          // width: currentWidth,
          width: '100%',
          height: currentHeight,
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <DocumentViewerListItem
          ref={item => this.item = item}
          rotationDegree={rotationDegree}
          currentWidth={width}
          currentHeight={height}
        >
          {id}
          <DocumentViewerRotationButton onClick={this.handleRotateDocument} />
        </DocumentViewerListItem>
      </div>
    );
  }
}

StatefulDocumentViewerListItem.propTypes = {
  id: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default StatefulDocumentViewerListItem;
