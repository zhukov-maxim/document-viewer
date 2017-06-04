import styled from 'styled-components';
import PropTypes from 'prop-types';

export const DocumentViewer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #999;
  border-radius: 2px;
  overflow: hidden;
`;

export const DocumentViewerControls = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: rgba(0,0,0,0.5);
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 200ms ease-in-out;
`;

export const DocumentViewerContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const DocumentViewerList = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #666;
  padding: 12px;
`;

export const DocumentViewerListItem = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 4px solid #fff;
  border-radius: 2px;
  padding: 12px;
  background-color: #ccc;
  cursor: pointer;
  transform: rotateZ(${props => props.rotationDegree ? props.rotationDegree : 0}deg);
  width: ${props => props.currentWidth ? props.currentWidth : 'auto'};
  height: ${props => props.currentHeight ? props.currentHeight : 'auto'};
`;

DocumentViewerListItem.propTypes = {
  rotationDegree: PropTypes.number,
  currentWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currentHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export const DocumentViewerRotationButton = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: rgba(255,255,255,0.2);
  /* opacity: ${props => props.visible ? 1 : 0}; // TODO: Implement. */
  transition: opacity 200ms ease-in-out;

  &:hover {
    background-color: rgba(255,255,255,0.5);
  }

  &:active {
    background-color: rgba(230,230,230,0.5);
  }

  &::after {
    content: '⟲';
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: 1.1em;
    line-height: 1.3em;
    font-weight: bold;
    color: #666;
  }
`;
