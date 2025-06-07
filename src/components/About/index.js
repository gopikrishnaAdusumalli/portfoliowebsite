

import {AboutContainer,AboutHeading,AboutImage,AboutFullContainer,AboutDescriptionContainer,AboutDescriptionHeading,AboutDescriptionParagraph,AboutDescription} from './styledComponent'

import './index.css'

const About = () => {
    return (
        <AboutContainer>
        <AboutHeading>About Me</AboutHeading>
        <AboutFullContainer>
            <AboutImage src = "https://res.cloudinary.com/dulecuhzf/image/upload/v1748427122/developer-img_wdid4t.webp" alt = "developer images" />
            <AboutDescriptionContainer>
                <AboutDescriptionHeading>A full-stack developer is a software engineer who is proficient in both front-end and back-end development. This means they can handle all aspects of a web application, from designing the user interface to managing the server and database. Full-stack developers are versatile and can work on various parts of a project, making them valuable assets in the tech industry.</AboutDescriptionHeading>
                <AboutDescriptionParagraph>Key Responsibilities</AboutDescriptionParagraph>
                <AboutDescription>Full-stack developers are responsible for designing and creating websites and applications for different platforms. Their job typically includes:<br />

1.Developing and maintaining web services and interfaces.<br/>

2.Contributing to both front-end and back-end development processes.<br/>

3.Building new product features or APIs.<br/>

4.Performing tests, troubleshooting software, and fixing bugs.<br/>

5.Collaborating with other departments on projects and sprints.<br/>

                </AboutDescription>
            </AboutDescriptionContainer>
        </AboutFullContainer>


        </AboutContainer>

    )
}

export default About