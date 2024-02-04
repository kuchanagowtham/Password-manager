import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPassword, deletePassword} = props
  const {website, name, password, id} = passwordDetails

  const renderPassword = showPassword ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-img"
    />
  )

  const deleteuser = () => {
    deletePassword(id)
  }

  const logo = website[0].toUpperCase()
  return (
    <li className="li-container">
      <div className="logo-container">
        <h1 className="logo">{logo}</h1>
      </div>
      <div className="names-con">
        <p className="name-pera">{website}</p>
        <p className="name-pera">{name}</p>
        <p className="name-pera">{renderPassword}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={deleteuser}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
