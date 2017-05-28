import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const LayoutLeftBarContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 44px;
  background-color: #222;
`;

export const LayoutTopBarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 44px;
  height: 44px;
  background-color: #24a;
`;

export const LayoutContentContainer = styled.div`
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 0;
  left: 44px;
  background-color: #fff;
`;
