import { useEffect, useRef } from 'react'

function useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) {
  const firstRenderRef = useRef(true)
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    effect()
  }, deps)
}

export default useUpdateEffect
