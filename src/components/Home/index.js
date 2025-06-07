

import {HomeContainer,HomeImage,HomeHeading,HomeParagraph} from './styledComponents'

import './index.css'

const Home = () => {
    return (
        <HomeContainer>
        <HomeImage src = "https://res.cloudinary.com/dulecuhzf/image/upload/v1748427122/developer-img_wdid4t.webp" alt = "developer images" />
        <HomeHeading>Hi..I'm Gopikrishna</HomeHeading>
        <HomeParagraph>Full Stack Developer</HomeParagraph>

        </HomeContainer>

    )
}

export default Home