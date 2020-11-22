import { useEffect } from 'react'

const useIdleTimeout = (timeToTimeout = 5000, anchorValues) => {
  useEffect(() => {
    window.clearTimeout(window.timeout)
    window.timeout = window.setTimeout(() => {
      location.href = "/signedOutNotice.html"
    }, timeToTimeout)
  }, anchorValues)
}

export default useIdleTimeout