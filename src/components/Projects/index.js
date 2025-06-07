
import {ProjectsHeading,ProjectsContainer,ProjectDescription} from './styledComponents'

import './index.css'

const Projects = () => {
    return(
        <ProjectsContainer>
        <ProjectsHeading>Projects</ProjectsHeading>
        <ProjectDescription>Static website : <a href = "https://food.ccbp.tech/" className = "project-link-item">Food Munch</a></ProjectDescription>
        <ProjectDescription>Dynamic website : <a href = "https://gopistodo.ccbp.tech/" className = "project-link-item">Todos applications</a></ProjectDescription>
        <ProjectDescription>Dynamic website : <a href = "https://gopicalculator.ccbp.tech/" className = "project-link-item">Calculator application</a></ProjectDescription>
        <ProjectDescription>Dynamic website : <a href = "https://gopistopwatch.ccbp.tech/" className = "project-link-item">Timer application</a></ProjectDescription>
        <ProjectDescription>React js project : <a href = "https://jobby.ccbp.tech/login" className = "project-link-item">Job app applications</a></ProjectDescription>
        <ProjectDescription>React js project : <a href = "https://nxtwatch.ccbp.tech/login" className = "project-link-item">Nxt Watch</a></ProjectDescription>

        </ProjectsContainer>

    )
}

export default Projects