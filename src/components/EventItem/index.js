import './index.css'

const EventItem = props => {
  const {eventDetails, clickedEvent, eventId} = props
  const {id, imageUrl, name, location} = eventDetails

  const sendClikedEventId = () => {
    clickedEvent(id)
  }

  const btnClass =
    eventId === id ? 'event-button selected-button' : 'event-button'

  return (
    <li className="event">
      <button type="button" className={btnClass} onClick={sendClikedEventId}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
