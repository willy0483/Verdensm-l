import { GoalCardStyled } from "./GoalCard.styled"
import parse from "html-react-parser";

export const GoalCard = ({ number, title, color, icon }) => {
  return (
    <GoalCardStyled color={color}>
      <div>{number}</div>
      <div>{title}</div>
      <div>{parse(icon)}</div>
    </GoalCardStyled>
  )
}