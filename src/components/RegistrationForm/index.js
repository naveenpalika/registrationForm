import {Component} from 'react'

import './index.css'

const SUCCCESS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/success-icon-img.png'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    isFormSubmitted: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    this.setState({
      isFirstNameEmpty: !firstName,
      isLastNameEmpty: !lastName,
      isFormSubmitted: firstName && lastName,
    })
  }

  resetForm = () => {
    this.setState({firstName: '', lastName: '', isFormSubmitted: false})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstNameField = event =>
    this.setState({isFirstNameEmpty: !event.target.value})

  onBlurLastNameField = event =>
    this.setState({isLastNameEmpty: !event.target.value})

  renderFistNameField = () => {
    const {firstName, isFirstNameEmpty} = this.state
    const firstNameClassName = isFirstNameEmpty
      ? 'input-field required-style'
      : 'input-field'

    return (
      <>
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstNameField}
          value={firstName}
          className={firstNameClassName}
        />
        {isFirstNameEmpty && <p className="required-message">Required</p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, isLastNameEmpty} = this.state

    const lastNameClassName = isLastNameEmpty
      ? 'input-field required-style'
      : 'input-field'

    return (
      <>
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastNameField}
          value={lastName}
          className={lastNameClassName}
        />
        {isLastNameEmpty && <p className="required-message">Required</p>}
      </>
    )
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div>
        <h1>Registration</h1>
        {!isFormSubmitted ? (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-field-container">
              {this.renderFistNameField()}
            </div>
            <div className="input-field-container">
              {this.renderLastNameField()}
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <div className="submitted-container">
            <img
              src={SUCCCESS_IMAGE}
              alt="success"
              className="submitted-image"
            />
            <p className="submitted-text">Submitted Successfully</p>
            <button
              className="submit-btn "
              type="button"
              onClick={this.resetForm}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
