import React from "react"
import { Link } from "gatsby"

type AnchorProps = {
  to: string;
  target?: string;
  children?: React.ReactNode;
}

const Anchor: React.FC<AnchorProps> = ({to, target, children}) => {
  const isExternal = (to.startsWith('http://') || to.startsWith('https://'));
  return (
    <React.Fragment>
      {isExternal ?
        <a href={to} target={target}>{children}</a>:
        <Link to={to} target={target}>{children}</Link>
      }
    </React.Fragment>
  )
}

export default Anchor;