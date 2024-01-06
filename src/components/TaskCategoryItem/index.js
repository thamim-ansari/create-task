import {FilterItem, FilterButton} from './styledComponents'

const TaskCategoryItem = props => {
  const {optionDetails, onChangeActiveFilterId, activeFilterId} = props
  const {optionId, displayText} = optionDetails

  const onClickOption = () => {
    onChangeActiveFilterId(optionId)
  }

  return (
    <FilterItem>
      <FilterButton
        type="button"
        onClick={onClickOption}
        activeFilterId={activeFilterId}
      >
        {displayText}
      </FilterButton>
    </FilterItem>
  )
}

export default TaskCategoryItem
