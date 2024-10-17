import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";


export const Skills = () => {
   return (
      <StyledSkills>

         <SectionTitle>My Skills</SectionTitle>

         <FlexWrapper wrap={"wrap"} justifyContent={"space-between"}>
            <Skill iconId={"code"}
                   title={"html5"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            <Skill iconId={"css"}
                   title={"Css3"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            <Skill iconId={"react"}
                   title={"React"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            <Skill iconId={"ts"}
                   title={"Typescript"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            <Skill iconId={"sc"}
                   title={"Styled components"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
            <Skill iconId={"wd"}
                   title={"Web desing"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

         </FlexWrapper>
      </StyledSkills>
   );

};


const StyledSkills = styled.section`
    background-color: #ffcedb;
    min-height: 100vh;
`

