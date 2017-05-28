import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Grid = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  padding: 8px 4px;
  background-color: #bbb;
  overflow: auto;
`;

export const GridColumn = styled.div`
  width: ${props => props.columns ? ((100 / 12) * props.columns) : (100 / 12)}%;
  margin-left: 4px;
  margin-right: 4px;
`;

GridColumn.propTypes = {
  columns: PropTypes.number
};
