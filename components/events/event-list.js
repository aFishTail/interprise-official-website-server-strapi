import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          name={event.name}
          imageSrc={event.imageSrc}
        ></EventItem>
      ))}
    </ul>
  );
}

export default EventList
