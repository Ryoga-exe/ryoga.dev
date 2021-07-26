import React from "react"
import { PageProps, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "@components/layout"
import SEO from "@utils/seo"
import ButtonDetail from "@components/molecules/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Hedding = styled.h1`
  font-size: 2.1rem;
  color: #222;
  margin-bottom: 0.4rem;
  > svg {
    margin-right: 10px;
  }
`

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not Found" />
    <Hedding><FontAwesomeIcon icon={faExclamationCircle}/>Not Found</Hedding>
    <p>お探しのページは見つかりませんでした。</p>
    <p>申し訳ありません。一時的にアクセスが出来ない状況にあるか、もしくは移動、削除され見つけることができません。</p>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <ButtonDetail to="/">Topへ戻る</ButtonDetail>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
