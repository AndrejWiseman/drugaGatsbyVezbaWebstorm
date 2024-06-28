import React, { Suspense } from "react"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import '../assets/css/main.scss'

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";


const Home = ({ data }) => {

    const images = data.allFile.edges

    const total = data.allFile.totalCount


  return(
      <Layout>
          <h1>Zdravo svete!</h1>
          <h2>Zdravo i tebi</h2>
          <h2>Total: {total}</h2>


          <div className='slike'>
              <div className="slika">
                  {images.map(({node}) => (
                      <GatsbyImage
                          alt='slika'
                          image={getImage(node)}
                      />
                  ))}
              </div>
          </div>


      </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      totalCount
      edges {
        node {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            id
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Home

