import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events
  return <EventsList events={events} />;
  //return <EventsList />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsa");

  if (!response.ok) {
    throw new Error(JSON.stringify({message: "hehe boids"}), {status: 500})
  } else {
    return response
  }
}
