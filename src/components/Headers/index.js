
import {Link} from 'react-router-dom'

import './index.css'

import {HeaderContainer,PortfolioContainer,PortfolioHeading,HeadersContentContainer,HeadersContent} from './styledComponents'

const Headers = () => {

    return (
        <HeaderContainer>
        <PortfolioContainer>
        <Link to = "/" className = 'link-item'><PortfolioHeading>Portfolio</PortfolioHeading></Link>
        <HeadersContentContainer>
        <Link to = "/" className = 'link-item'><HeadersContent>Home</HeadersContent></Link>
        <Link to = "/about" className = 'link-item'><HeadersContent>About</HeadersContent></Link>
        <Link to = "/skills" className = 'link-item'><HeadersContent>Skills</HeadersContent></Link>
        <Link to = "/certificates" className = 'link-item'><HeadersContent>Certificates</HeadersContent></Link>
        <Link to = "/projects" className = 'link-item'><HeadersContent>Projects</HeadersContent></Link>
        <Link to = "/contact" className = 'link-item'><HeadersContent>Contact</HeadersContent></Link>

        </HeadersContentContainer>

        </PortfolioContainer>
        
        </HeaderContainer>

    )
}




export default  Headers