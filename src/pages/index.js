import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/layout'

import Container from '../layout/Container'
import SuperText from '../components/SuperText'
import SEO from '../components/SEO'
import PostListing from '../components/PostListing'

const RecentPostsContainer = styled.div`
  padding-top: 20vh;
  text-align: left;

  .title {
    font-size: 2em;
    color: var(--text);
  }

  h1 {
    font-size: 1.5em;
  }
`

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => (
  <Layout>
    <Container>
      <SEO title='Matthew Secrist' />
      <SuperText>Hello</SuperText>
      <div>
        <h1>My name is Matthew Secrist</h1>
        <p>
          I am a Web Developer, currently working towards becoming an AWS
          Certified Solutions Architect.
        </p>
        <p>
          I love to work with Javascript, NodeJS, and Elixir. I’ve dabbled in
          Ruby, Python and Erlang. My front end framework of choice is React,
          but I've got some experience with Vue and Ember as well. I’m familiar
          with AWS services like Lamdba, DynamoDB, API Gateway and S3.
        </p>
        <p>I am currently available for remote opportunities.</p>
        <RecentPostsContainer>
          <h1 className='title'>Recent Posts</h1>
          {edges.map(post => (
            <PostListing key={post.node.id} {...post.node.frontmatter} />
          ))}
        </RecentPostsContainer>
      </div>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      limit: 3
      filter:{fileAbsolutePath: {regex: "/(\/content\/posts)/.*\\.md$/"}}, 
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            description
            date
          }
        }
      }
    }
  }
`
