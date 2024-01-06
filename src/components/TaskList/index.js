import {TaskListItem, Task, TaskTypeButton} from './styledComponents'

const TaskList = props => {
  const {taskDetails} = props
  const {task, taskType} = taskDetails
  return (
    <TaskListItem>
      <Task>{task}</Task>
      <TaskTypeButton>{taskType}</TaskTypeButton>
    </TaskListItem>
  )
}

export default TaskList
