import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm" href="#">{props.children}</a>
  )
}