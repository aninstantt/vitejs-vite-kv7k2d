import React, {
  useCallback,
  useEffect,
  useState,
  useEventEffect,
  useTransition,
  useDeferredValue,
} from 'react'

const arr = Array.from({ length: 50 }, (_, i) => i)
function Comp() {
  const [input, setInput] = useState('')

  const deferredParams = useDeferredValue(input)

  useEffect(() => {
    console.log('input: ', input, '\ndeferredParams: ', deferredParams)
  }, [input, deferredParams])

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  )
}

export default Comp
