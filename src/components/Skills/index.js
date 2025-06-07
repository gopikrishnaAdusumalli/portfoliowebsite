
import SkillItem from '../SkillItem'

import {SkillsContainer,SkillsHeading,UnOrderedListContainer} from './styledComponent'

import './index.css'

const skillsList = [
    {
        id : 1,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748436279/22-1024_hcije6.webp",
        skillText : 'HTML'
    },
    {
        id : 2,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748436892/html-css-js-icons-11563328364gmstz4ubs9_oiaa31.png",
        skillText : 'CSS'
    },
    {
        id : 3,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748437027/470-4707396_javascript-icon-html-css-js-icons_rn8aq5.jpg",
        skillText : 'JAVASCRIPT'
    },
    {
        id : 4,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748437838/re269re79-react-logo-react-logo-_pmh9n8.png",
        skillText : 'REACT JS'
    },
    {
        id : 5,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748437940/R_dcxcry.png",
        skillText : 'BOOTSTRAP'
    },
    {
        id : 6,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438345/sql-database-generic-icon-1521x2048-d0vdpxpg_ppskcp.png",
        skillText : 'SQL'
    },
    {
        id : 7,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438458/OIP_n7sbva.jpg",
        skillText : 'PYTHON'
    },
    {
        id : 8,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438570/no6273n057-node-js-logo-nodejs-transparent-logo-google-search_h0v3dc.png",
        skillText : 'NODE JS'
    },
    {
        id : 9,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438775/github_b8oa7m.jpg",
        skillText : 'GIT HUB'
    },
    {
        id : 10,
        skillsImage : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748439945/flexbox_hfxxfk.jpg",
        skillText : 'CSS FLEX BOX'
    },


]

const Skills = () => {
    return(
        <SkillsContainer>
        <SkillsHeading>Skills</SkillsHeading>
        <UnOrderedListContainer>
        {skillsList.map((eachSkillList) => (
            <SkillItem skillDetails = {eachSkillList} key = {eachSkillList.id} />
        ))}

        </UnOrderedListContainer>

        </SkillsContainer>

    )
}

export default Skills