import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTabItem} = props
  const {tabId, displayText} = tabDetails
  const clickTabItem = () => {
    onClickTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-item' : ''
  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-item-button ${activeTabClassName}`}
        onClick={clickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
