import React from 'react'
import { useLoaderData, json, useRouteLoaderData, redirect } from 'react-router-dom'
import EventItem from "../components/EventItem"
export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail")
  return (
    <EventItem event={data.event}/>
  )
}

export async function loader({req,params}){
  const id = params.someId

  const response = await fetch("http://localhost:8080/events/" + id)
  if(!response.ok){
    throw json({message: "Could not fetch detail for selected event"}, {status: 500})
  }
  else {
    return response
  }

  
}

export async function action({params, request}){
  const eventId = params.someId
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  })

  if(!response.ok){
    throw json({
      message: "Could not delete event <>>>>+!?A"
    }, {
      status: 500
    })
  }

  return redirect("/events")
}