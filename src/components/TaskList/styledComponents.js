import styled from 'styled-components'

export const TaskListItem = styled.li`
  list-style-type: none;
  background-color: #1a171d;
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 10px;
`
export const Task = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
`

export const TaskTypeButton = styled.p`
  align-self: center;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  background-color: #f3aa4e;
  color: #1a171d;
  padding: 8px 12px;
  border-radius: 16px;
`
