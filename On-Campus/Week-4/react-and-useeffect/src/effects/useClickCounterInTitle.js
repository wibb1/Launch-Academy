import { useEffect, useState } from 'react'

const useClickCounterInTitle = () => {
  const [clickCount, setClickCount] = useState(-1)
  useEffect(() => {
    console.log("Setting title...")
    document.title = `${clickCount + 1} click(s)`
  })
  return [clickCount, setClickCount]
}

export default useClickCounterInTitle