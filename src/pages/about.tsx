import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled";
import Bio from "src/components/molecules/bio"
import Layout from "src/components/layout"
import SEO from "src/utils/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import 'src/styles/heading.scss'

const H1 = styled.h1`
  position: relative;
  font-size: 2.1rem;
  display: block;
  > span {
    margin-left: 2.0em;
    font-size: 0.45em;
    opacity: 0.5;
    > svg {
      font-size: 0.9em;
      margin-right: 0.3em;
    }
  }
  @media (max-width: 751px){
    font-size: 2.0rem;
    line-height: 1.3;
    > span{
      display: block;
      margin-left: 0;
    }
  }
`

// ToDo: 見た目の改善
// ToDo: Skillsの作成 jsonかなんかで管理したい
// ToDo: Linksの改善 さすがに配列をmapで回したい、あとアイコンかなんかで綺麗にしたい
const About: React.FC<any> = ({ location }) => {
  const birthday = new Date(2004, 11, 16);
  const today = new Date();
  const thisYearBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());  
  const age = today.getFullYear() - birthday.getFullYear();
  return (
    <React.Fragment>
      <Layout location={location}>
        <SEO title="About" />
        
        <H1>About<span className="selection-disabled"><FontAwesomeIcon icon={faSyncAlt}/>Last updated: 2021/01/18</span></H1>

        <h2>このサイトについて</h2>
        <p>個人サイト兼ブログサイトです。<Link to="/works">自分の作品</Link>もまとめたりします。</p>
        <p>Gatsby.jsで書き、GitHub Pagesでホスティングをしています。ブログはマークダウン形式で書けます！</p>
        <p>一応オープンソースなので、<a href="https://github.com/ryoga-exe/ryoga.dev">GitHubのリポジトリ</a>からソースコード等を見ることができます。</p>
        <p>その他の詳しい技術等はリポジトリのREADMEをご覧ください。</p>

        <h2>Profileなど</h2>
        <p>Name: Ryoga.exe</p>
        <p>Age: {today<thisYearBirthday?age-1:age}</p>
        <p>Birthday: {birthday.toLocaleDateString()}</p>
        <p>-</p>
        <p>Ryoga.exeというHNで活動しています。茨城県住みです。</p>
        <p>プログラミングがかなり好きです。基礎はほぼ全ての言語を扱えそう。</p>
        <p>競技プログラミングをやってます。主にC++を使います。Web関係の技術も好きです。このサイトをデザインも込みで作れる程度の能力はあります。</p>
        <p>それと、ゲームプログラミングや電子工作も好きです。</p>

        <h2>Skills</h2>

        <h2>Links</h2>
        <a href="https://github.com/ryoga-exe">GitHub</a><br/>
        <a href="https://twitter.com/ryoga_exe">Twitter</a><br/>
        <a href="https://atcoder.jp/users/ryoga_exe">AtCoder</a><br/>
        <a href="https://www.youtube.com/channel/UCWa6xjYb_02j4gMr4POxwIw">Youtube</a><br/>
        <a href="https://www.instagram.com/ryoga.exe/">Instagram</a><br/>
        <a href="https://www.resume.id/ryoga_exe">Resume</a><br/>
        <a href="https://qiita.com/ryoga-exe">Qiita</a><br/>
        <a href="https://beta.sparebeat.com/users/Ryoga-exe">Sparebeat</a><br/>

        <h2>Experiences</h2>
        <Bio />
      </Layout>
    </React.Fragment>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
