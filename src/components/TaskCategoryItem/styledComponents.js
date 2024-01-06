import styled from 'styled-components'

export const FilterItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
`
export const FilterButton = styled.button`
  color: #f8f8f8;
  background-color: ${props =>
    props.activeFilterId ? '#f3aa4e' : 'transparent'};
  border: 1px solid #f3aa4e;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 16px;
  outline: none;
  cursor: pointer;
`
