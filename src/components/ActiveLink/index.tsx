import { Link, useLocation, LinkProps } from 'react-router-dom'

interface ActiveLinkProps extends LinkProps {
    activeClassName: string
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
    const { pathname } = useLocation()

    const className = pathname === rest.to
        ? activeClassName
        : ''

    console.log(pathname, rest);

    return (
        <Link className={className} {...rest}>
            {children}
        </Link>
    )
}
