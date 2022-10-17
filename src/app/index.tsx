import React, { useCallback, useEffect, useState } from 'react'
import { webAppFactory } from 'src/app/web-app'
import { Router } from 'src/screen/router'
import { logger } from 'src/util/logger'

export const App = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(true)

  const initiateApp = useCallback(async () => {
    try {
      await webAppFactory().create()
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    initiateApp().catch((err) => logger().error(err))
  }, [initiateApp])
  if (isLoading) return <>loading...</>
  return <Router />
}
