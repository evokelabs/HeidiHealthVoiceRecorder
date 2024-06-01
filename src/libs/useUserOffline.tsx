import { useEffect, useState } from 'react'

const useUserOffline = () => {
  // Check if the user is offline
  const [userIsOffline, setUserIsOffline] = useState(typeof window !== 'undefined' ? !navigator.onLine : true)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const goOnline = () => setUserIsOffline(false)
    const goOffline = () => setUserIsOffline(true)

    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)

    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return { userIsOffline }
}
export default useUserOffline
