import { useRef } from 'react'

function useDebounce<T>(callback: Function, timeout: number) {
  const timerRef = useRef<NodeJS.Timeout>()

  let fn = (params: T) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => callback(params), timeout)
  }

  return fn
}

export default useDebounce
