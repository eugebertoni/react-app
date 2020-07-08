import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

let FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const FooterText = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
`

const FooterButton = styled.button`
    font-size: 24px;
    color: white;
    cursor: pointer;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-3px);
    }
`

let FooterLinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .footerLink {
        color: #5334F5;
        font-size: 20px;
        font-weight: 500;
        margin: 5px 0;
        transition: 1s;
        &:hover {
            color: black;
        }
    }
`
const FooterCopyright = styled.div`
    color: #486791
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
`

const Footer = props => (
	<FooterGroup>
        <FooterText>Tweet “Prototype and build apps with React and Swift.”</FooterText>
        <FooterButton>Tweet</FooterButton>
        <FooterLinkGroup>
            <Link className="footerLink" to="/">Home</Link>
            <Link className="footerLink" to="/courses">Courses</Link>
            <Link className="footerLink" to="/licenses">Licenses</Link>
            <Link className="footerLink" to="/jobs">Jobs</Link>
            <Link className="footerLink" to="/about">About</Link>
            <Link className="footerLink" to="/workshops">Workshops</Link>
        </FooterLinkGroup>
        <FooterCopyright>Backgrounds made in Cinema 4D, iOS app in Swift, site in React. Email us to ask anything. © 2018 - Terms of Service - Privacy Policy</FooterCopyright>
    </FooterGroup>
)

export default Footer
