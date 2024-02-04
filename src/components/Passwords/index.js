import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

class Passwords extends Component {
  state = {
    passwordDetails: [],
    showPassword: false,
    nameInput: '',
    websiteInput: '',
    passwordInput: '',
    searchInput: '',
  }

  getSearchInputs = event => {
    this.setState({searchInput: event.target.value})
  }

  addDetails = event => {
    const {nameInput, websiteInput, passwordInput} = this.state
    event.preventDefault()
    const storePassword = {
      id: uuidv4(),
      website: websiteInput,
      name: nameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordDetails: [...prevState.passwordDetails, storePassword],
      nameInput: '',
      websiteInput: '',
      passwordInput: '',
    }))
  }

  getWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  getUserName = event => {
    this.setState({nameInput: event.target.value})
  }

  getPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  changeCheckBox = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  deletePassword = id => {
    const {passwordDetails} = this.state
    const afterDeleted = passwordDetails.filter(each => each.id !== id)
    this.setState({passwordDetails: afterDeleted})
  }

  render() {
    const {
      passwordDetails,
      showPassword,
      searchInput,
      websiteInput,
      nameInput,
      passwordInput,
    } = this.state

    const filteredResults = passwordDetails.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const passwordCount = filteredResults.length

    const checkLength = passwordCount < 1

    return (
      <div className="main-bg">
        <div className="responsive-container">
          <div className="app-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="first-container">
            <div className="password-container">
              <form onSubmit={this.addDetails} className="card-responsive">
                <h1 className="heading">Add New Password</h1>
                <div className="img-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="user-icon"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    value={websiteInput}
                    className="user-input"
                    onChange={this.getWebsite}
                  />
                </div>
                <div className="img-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="user-icon"
                  />
                  <input
                    type="text"
                    value={nameInput}
                    placeholder="Enter Username"
                    className="user-input"
                    onChange={this.getUserName}
                  />
                </div>
                <div className="img-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="user-icon"
                  />
                  <input
                    type="password"
                    value={passwordInput}
                    placeholder="Enter Password"
                    className="user-input"
                    onChange={this.getPassword}
                  />
                </div>
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-img"
              />
            </div>
          </div>
          <div className="second-container">
            <div className="search-container">
              <div className="text-container">
                <h1 className="your-password">Your Passwords</h1>
                <p className="count">{passwordCount}</p>
              </div>
              <div className="seaarch-bar-container">
                <div className="search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-icon"
                  />
                </div>
                <input
                  type="search"
                  className="search-bar"
                  onChange={this.getSearchInputs}
                />
              </div>
            </div>
            <hr className="hrline" />
            <div className="show-password">
              <input id="show" onChange={this.changeCheckBox} type="checkbox" />
              <label className="no-pass-text" htmlFor="show">
                Show passwords
              </label>
            </div>

            {checkLength ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="nopassword-img"
                />
                <p className="no-pass-text">No Passwords</p>
              </div>
            ) : (
              <ul className="ul-container">
                {filteredResults.map(each => (
                  <PasswordItem
                    showPassword={showPassword}
                    key={each.id}
                    passwordDetails={each}
                    deletePassword={this.deletePassword}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Passwords
