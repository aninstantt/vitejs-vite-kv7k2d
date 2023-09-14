import type { ComponentPropsWithoutRef, ElementType } from 'react'

type TProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

const DEFAULT_TYPE = 'div'

function Comp<T extends ElementType = typeof DEFAULT_TYPE>(props: TProps<T>) {
  const { as, ...otherProps } = props
  const As = as ?? DEFAULT_TYPE

  return <As className="some-class" {...otherProps} />
}

export default Comp

const A = <Comp as="a" href="" />
