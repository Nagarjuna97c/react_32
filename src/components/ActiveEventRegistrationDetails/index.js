import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {eventDetails} = props
  const registrationStatus =
    eventDetails === undefined ? undefined : eventDetails.registrationStatus

  const yetToRegister = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="not-registered"
      />
      <p className="registration-text">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beatiful
        art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const registered = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registration-confirmation">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosed = () => (
    <div className="registration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="not-registered"
      />
      <h1 className="registration-closed">Registrations Are Closed Now!</h1>
      <p className="registration-text small">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const noActiveEvent = () => (
    <div className="registration-container para-start">
      <p className="no-event">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTERED':
      return registered()
    case 'REGISTRATIONS_CLOSED':
      return registrationsClosed()
    default:
      return noActiveEvent()
  }
}

export default ActiveEventRegistrationDetails
