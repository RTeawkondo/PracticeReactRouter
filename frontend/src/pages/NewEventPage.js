import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom'

export default function NewEventPage() {
  
  return (
    <EventForm method="post"/>
  )
}
