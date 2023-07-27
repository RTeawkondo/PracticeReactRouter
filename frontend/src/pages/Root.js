import React from 'react'
import MainNavigation from "../components/MainNavigation"
import {Outlet, useNavigation} from "react-router-dom"
export default function Root() {
  //const navigation = useNavigation()
  return (
    <>
        {/* {navigation.state === "loading" && <p>loading,,,,,,,,,,,,</p>} */}
        <MainNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}
