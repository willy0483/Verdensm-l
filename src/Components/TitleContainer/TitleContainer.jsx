import { TitleContainerStyled } from "./TitleContainer.Styled";

export const TitleContainer = ({ children, textAlign}) => {
    return <TitleContainerStyled style={{ textAlign: textAlign }}><h2>{children}</h2></TitleContainerStyled>;
}