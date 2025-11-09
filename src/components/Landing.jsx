import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
  gap: 2.5rem;
  background: #9eb0ccff;
`

const Hero = styled.header`
  max-width: 900px;
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
  color: var(--title-color, #f1f1f1ff);
`

const Subtitle = styled.p`
  margin: 0;
  color: rgba(243, 241, 241, 0.75);
  font-size: 1.125rem;
`

const CTA = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  background: linear-gradient(90deg,#646cff,#61dafb);
  color: #071029;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(100,108,255,0.18);
`

const Features = styled.section`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 1rem;
`

const Feature = styled.div`
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  padding: 1rem;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FeatureTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
`

const Footer = styled.footer`
  margin-top: auto;
  padding: 2rem 0 1rem;
  width: 100%;
  text-align: center;
  color: rgba(255,255,255,0.6);
`

export default function Landing() {
  return (
    <Page>
      <Hero>
        <Title>Build beautiful apps with Styled Components</Title>
        <Subtitle>
          A simple starter landing page demonstrating styled-components with Vite + React.
        </Subtitle>
        <CTA href="#get-started">Get started</CTA>
      </Hero>

      <Features>
        <Feature>
          <FeatureTitle>Component-first</FeatureTitle>
          <p>Style encapsulation for predictable UI and easy reuse.</p>
        </Feature>
        <Feature>
          <FeatureTitle>Type-friendly</FeatureTitle>
          <p>Works well with TypeScript and modern React patterns.</p>
        </Feature>
        <Feature>
          <FeatureTitle>Theme-ready</FeatureTitle>
          <p>Swap themes or add design tokens without changing markup.</p>
        </Feature>
      </Features>

      <Footer>© {new Date().getFullYear()} Your Company — Built with styled-components</Footer>
    </Page>
  )
}
