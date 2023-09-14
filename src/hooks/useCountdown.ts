import { useState, useRef, useEffect } from 'react'

function useCountdown(callback: VoidFunction, delay: number) {
  const [seconds, setSeconds] = useState<number>(delay)
  const timerRef = useRef<NodeJS.Timeout>()
  const statusRef = useRef<'running' | 'stopped'>('stopped')
  const callbackRef = useRef<VoidFunction>(callback)

  const pause = () => {
    clearInterval(timerRef.current)
    statusRef.current = 'stopped'
  }

  const resume = () => {
    if (seconds <= 0 || statusRef.current == 'running') return
    statusRef.current = 'running'
    // setInterval 的回调没办法拿到最新的 seconds 的值，所以只能 setSeconds 时判断
    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) {
          return prev - 1
        } else {
          pause()
          callbackRef.current()
          return prev
        }
      })
    }, 1000)
  }

  const start = () => {
    if (statusRef.current == 'running') return
    setSeconds(delay)
    resume()
  }

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return { start, pause, resume, seconds }
}

export default useCountdown
