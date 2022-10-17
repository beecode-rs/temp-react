import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomeScreen } from 'src/screen/home-screen'

export const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/*PROTECTED*/}
        {/*<Route path="/" element={<ProtectedAuthOnlyRoute children={<HomeScreen />} />} />*/}

        {/*CATCH ALL*/}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
