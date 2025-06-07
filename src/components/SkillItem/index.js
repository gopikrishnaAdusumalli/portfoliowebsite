import {Link} from 'react-router-dom'

import {SkillItemImage,ListSkillItem,SkillText} from './styledComponents'

import './index.css'

const SkillItem = (props) => {
    const {skillDetails} = props
    const {skillsImage,skillText,id} = skillDetails
    return (
        <Link to = {`/skills/${id}`} className = "link-item">
        <ListSkillItem>
        <SkillItemImage src = {skillsImage} alt = {skillText} />
        <SkillText>{skillText}</SkillText>


        </ListSkillItem>
        </Link>

    )
}

export default SkillItem