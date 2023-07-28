import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()

    let title = "hehe boids"
    let message = "Something go crazy"
    if(error.status === 500){
        message = error.data.message
    }

    if(error.status === 404){
        title = "Not found"
        message = "Could not find this page"
    }
  return (
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
  )
}
