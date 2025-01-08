import { goals } from "../../Data/sdg"
import { useParams } from "react-router-dom"

import { TitleContainer } from "../../Components/TitleContainer/TitleContainer"
import { GoalDetails } from "../../Components/GoalDetails/GoalDetails"

import { SeventeenGoals } from "../../Components/SeventeenGoals/SeventeenGoals"



export const GoalDetailPage = () => {
    const { goal_id } = useParams()
    
    const goal = goals.filter(x => x.id === goal_id)[0]
    console.log(goal);
    
    return (
        <>
        <TitleContainer>MÅL{goal_id}: {goal.title}</TitleContainer>
        <GoalDetails details={goal}/>

        <SeventeenGoals />
        </>
    )
}