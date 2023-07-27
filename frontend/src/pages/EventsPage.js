import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Event 1" },
  { id: "e2", title: "Event 2" },
  { id: "e3", title: "Event 3" },
  { id: "e4", title: "Event 4" },
];

export default function EventsPage() {
  return (
    <>
      <div>EventsPage</div>
      <ul>
        {DUMMY_EVENTS.map((item) => (
          <li>
            {" "}
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
