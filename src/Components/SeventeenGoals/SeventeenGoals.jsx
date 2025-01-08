import {goals} from '../../Data/sdg'

import {SeventeenGoalsStyled} from "./SeventeenGoals.Styled" 
import { TitleContainer } from "../TitleContainer/TitleContainer";
import { Dividerimage } from '../Divider/Divider';

import { GoalCard } from '../GoalCard/GoalCard';
import { Link } from 'react-router-dom';

export const SeventeenGoals = () => {

    return (
        <>
        <SeventeenGoalsStyled>
        <TitleContainer textAlign={"center"}>FN'S 17 VERDENSMÅL FOR BÆREDYGTIG UDVIKLING</TitleContainer>
        <Dividerimage />
        <div>
        <ul>
            {goals && goals.map((value, index) => {
              return (
                <Link to={`/goal/${value.id}`} key={index} >
                  <GoalCard number={value.id} title={value.title} color={value.color} icon={value.icon} />
                </Link>
              )
            })}
          </ul>
        </div>
        </SeventeenGoalsStyled>
        </>
    )
}