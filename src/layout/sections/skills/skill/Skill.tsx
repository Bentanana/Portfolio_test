import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
   iconId: string;
   title: string;
   description: string;

}


export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <Icon iconId={props.iconId}/>
         <SkillTitel>{props.title}</SkillTitel>
         <SkillText>{props.description}</SkillText>
      </StyledSkill>
   );
};

const StyledSkill=styled.div `
    width: 33%;
    background-color: #ffefef;
    //margin: 10px;
`

const SkillTitel=styled.h3 `

`
const SkillText=styled.p `

`