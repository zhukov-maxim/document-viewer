import styled from 'styled-components';

export const DocumentViewer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #999;
  border-radius: 2px;
  overflow-x: hidden;
  overflow-x: auto;
`;

export const DocumentViewerList = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: grey;
`;

export const DocumentViewerListItem = styled.div`
  width: 100%;
  height: 300px;
  background-color: pink;
  cursor: pointer;

  & + & {
    margin-top: 20px;
  }

  &:nth-child(odd) {
    width: 50%;
  }

  &:nth-child(n+3) {
    height: 150px;
  }
`;

export const DocumentViewerControls = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  background-color: rgba(0,0,0,0.5);
`;
