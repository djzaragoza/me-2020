import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
// import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;
  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const AboutMeWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

const HomeLink = styled.a`
  text-decoration: none;
  color: #30231d;
`;

class AboutMe extends React.Component {
   state = {
      openHireMePopup: false
   };

   handleRequestDemoClose = () => {
      this.setState({
         openHireMePopup: false
      });
   };

   openContactPopup = () => {
      this.setState({
         openHireMePopup: true
      });
   };

   render() {
      const { openHireMePopup } = this.state;
      // const { data } = this.props;
      return (
         <AboutMeWrapper>
            <Layout theme="white" openContactPopup={this.openContactPopup}>
               <AboveFold>
                  <t.H1 green align="center">
                     About DJ
            </t.H1>
                  <t.LargeP align="center" max70>
                     <p>
                        Hi!  I'm DJ, a software developer with an aspirations in computer architecture, network infrastructure, Data
                        Visualization, functional programming and all things web. I'm able to adapt well and work with various
                        development stacks and programming languages. I am reliable, a quick learner, versatile and a creative
                        problem solver. If you'd like to sit down and chat while having a nice cup of coffee, please contact me!
              </p>
                  </t.LargeP>
                  <HomeLink href="/">&lt;&lt; Back to Home</HomeLink>
               </AboveFold>
               <Content>
                  {/* <Img fluid={data.avatarAbout.childImageSharp.fluid} alt="Douglas Campbell" className="avatar" /> */}
               </Content>
            </Layout>
            <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
         </AboutMeWrapper>
      );
   }
}

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "djz.jpg" }) {
      ...fluidImage
    }
  }
`;