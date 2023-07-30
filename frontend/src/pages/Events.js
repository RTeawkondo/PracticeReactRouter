import { Await, defer, json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={events}>
        {(loadedEvent) => <EventsList events={loadedEvent} />}
      </Await>
    </Suspense>
  );
  //return <EventsList />;
}

export default EventsPage;

async function loadEvent() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "hehe boids" }, { status: 500 });
  } else {
    const resData = await response.json()
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvent(),
  });
}
