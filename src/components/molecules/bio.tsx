import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Bio: React.FC<any>= () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Base>
      <BioImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <div>
        <p>
          <a href={`https://twitter.com/${social.twitter}`}>
            {author.name}
          </a>
        </p>
        <p>{author.summary}</p>
      </div>
    </Base>
  )
}

// justify-content: center;
const Base = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0;
`

const BioImage = styled(Image)`
  margin-bottom: 0;
  margin-right: 1.2rem;
  min-width: 60px;
  border-radius: 50%;
`

export default Bio
