import styled from 'styled-components';

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
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  border: 4px solid #fff;
  border-radius: 2px;
  padding: 12px;
  background-color: #ccc;
  cursor: pointer;

  & + & {
    margin-top: 12px;
  }

  &:nth-child(odd) {
    width: 50%;
  }

  &:nth-child(n+3) {
    height: 150px;
  }
`;
