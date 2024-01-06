import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import TaskCategoryItem from '../TaskCategoryItem'
import TaskList from '../TaskList'

import {
  AppContainer,
  AppResponsiveContainer,
  CreateTasksContainer,
  CreateTasksResponsiveContainer,
  CreateTasksContainerHeading,
  CreateTasksFormContainer,
  CreateTasksFormInputContainer,
  CreateTasksFormInputLabel,
  CreateTasksInput,
  CreateTasksTypeInput,
  CreateTasksTypeInputOption,
  AddTaskButton,
  TasksContainer,
  TasksResponsiveContainer,
  TasksContainerHeading,
  TasksContainerFilterList,
  TasksListContainer,
  EmptyTasksContainer,
  EmptyTasksText,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskList: [],
    taskInput: '',
    taskCategory: tagsList[0].optionId,
    activeFilterId: '',
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {taskInput, taskCategory} = this.state
    const taskDetails = {
      id: uuid(),
      task: taskInput,
      taskType: taskCategory,
    }

    this.setState(prev => ({
      taskList: [...prev.taskList, taskDetails],
      taskInput: '',
      taskCategory: tagsList[0].optionId,
    }))
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTaskCategory = event => {
    this.setState({taskCategory: event.target.value})
  }

  renderTaskInputContainer = () => {
    const {taskInput} = this.state
    return (
      <CreateTasksFormInputContainer>
        <CreateTasksFormInputLabel htmlFor="task">
          Task
        </CreateTasksFormInputLabel>
        <CreateTasksInput
          type="text"
          id="task"
          placeholder="Enter the task here"
          value={taskInput}
          onChange={this.onChangeTaskInput}
        />
      </CreateTasksFormInputContainer>
    )
  }

  renderTaskTypeInputContainer = () => {
    const {taskCategory} = this.state
    return (
      <CreateTasksFormInputContainer>
        <CreateTasksFormInputLabel htmlFor="tags">
          Tags
        </CreateTasksFormInputLabel>
        <CreateTasksTypeInput
          onChange={this.onChangeTaskCategory}
          value={taskCategory}
          id="tags"
        >
          {tagsList.map(eachItem => (
            <CreateTasksTypeInputOption key={eachItem.optionId}>
              {eachItem.displayText}
            </CreateTasksTypeInputOption>
          ))}
        </CreateTasksTypeInput>
      </CreateTasksFormInputContainer>
    )
  }

  onChangeActiveFilterId = id => {
    const {activeFilterId} = this.state
    const actId = activeFilterId === id ? '' : id
    this.setState({activeFilterId: actId})
  }

  renderTaskFilter = () => {
    const {activeFilterId} = this.state
    return (
      <TasksContainerFilterList>
        {tagsList.map(eachItem => (
          <TaskCategoryItem
            key={eachItem.optionId}
            optionDetails={eachItem}
            onChangeActiveFilterId={this.onChangeActiveFilterId}
            activeFilterId={activeFilterId === eachItem.optionId}
          />
        ))}
      </TasksContainerFilterList>
    )
  }

  renderTaskList = () => {
    const {taskList, activeFilterId} = this.state
    const filteredList = taskList.filter(
      eachItem =>
        eachItem.taskType.toLowerCase() === activeFilterId.toLowerCase(),
    )
    const mainList = activeFilterId !== '' ? filteredList : taskList
    if (taskList.length > 0) {
      return (
        <TasksListContainer>
          {mainList.map(eachItem => (
            <TaskList key={eachItem.id} taskDetails={eachItem} />
          ))}
        </TasksListContainer>
      )
    }
    return (
      <EmptyTasksContainer>
        <EmptyTasksText>No Tasks Added Yet</EmptyTasksText>
      </EmptyTasksContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <AppResponsiveContainer>
          <CreateTasksContainer>
            <CreateTasksResponsiveContainer>
              <CreateTasksContainerHeading>
                Create a task!
              </CreateTasksContainerHeading>
              <CreateTasksFormContainer onSubmit={this.onSubmitTask}>
                {this.renderTaskInputContainer()}
                {this.renderTaskTypeInputContainer()}
                <AddTaskButton type="submit">Add Task</AddTaskButton>
              </CreateTasksFormContainer>
            </CreateTasksResponsiveContainer>
          </CreateTasksContainer>
          <TasksContainer>
            <TasksResponsiveContainer>
              <TasksContainerHeading>Tags</TasksContainerHeading>
              {this.renderTaskFilter()}
              <TasksContainerHeading>Tasks</TasksContainerHeading>
              {this.renderTaskList()}
            </TasksResponsiveContainer>
          </TasksContainer>
        </AppResponsiveContainer>
      </AppContainer>
    )
  }
}

export default MyTasks
