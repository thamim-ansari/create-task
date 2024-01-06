import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const AppResponsiveContainer = styled.div`
  width: 90%;
  height: 80vh;
  display: flex;
`
export const CreateTasksContainer = styled.div`
  width: 30%;
  background-color: #131213;
  display: flex;
  justify-content: center;
`
export const CreateTasksResponsiveContainer = styled.div`
  width: 80%;
`
export const CreateTasksContainerHeading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  margin-top: 64px;
  margin-bottom: 30px;
`
export const CreateTasksFormContainer = styled.form`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
`
export const CreateTasksFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const CreateTasksFormInputLabel = styled.label`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 8px;
`
export const CreateTasksInput = styled.input`
  font-family: 'Roboto';
  padding-left: 15px;
  height: 40px;
  border: none;
  outline: none;
`
export const CreateTasksTypeInput = styled.select`
  font-family: 'Roboto';
  height: 40px;
  border: none;
  outline: none;
  padding-left: 15px;
`
export const CreateTasksTypeInputOption = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
`
export const AddTaskButton = styled.button`
  align-self: center;
  background-color: #f3aa4e;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 12px 32px;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const TasksContainer = styled.div`
  width: 70%;
  background-color: #000000;
`
export const TasksResponsiveContainer = styled.div`
  font-family: 'Roboto';
  margin-top: 64px;
  margin-right: 10px;
  margin-left: 10px;
`
export const TasksContainerHeading = styled.h1`
  color: #f8f8f8;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
`
export const TasksContainerFilterList = styled.ul`
  padding-left: 0px;
  display: flex;
`
export const TasksListContainer = styled.ul`
  padding-left: 0px;
  height: 50vh;
  overflow-y: auto;
`
export const EmptyTasksContainer = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EmptyTasksText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
`
