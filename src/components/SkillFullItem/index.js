import {ListItem,SkillItemImage,SkillItemContainer,SkillItemFullDetailsHeading,SkillItemFullDetailsDescription} from './styledComponents'

import './index.css'

import React from 'react'

function SkillFullItem(props) {
    const {skillItemDetails} = props
    const {name,imageUrl,description} = skillItemDetails
  return (
    <ListItem>
    <SkillItemImage src = {imageUrl} alt = {name} />
    <SkillItemContainer>
    <SkillItemFullDetailsHeading>{name}</SkillItemFullDetailsHeading>
    <SkillItemFullDetailsDescription>{description}</SkillItemFullDetailsDescription>

    </SkillItemContainer>

    </ListItem>
  )
}

export default SkillFullItem
