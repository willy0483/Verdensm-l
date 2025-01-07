import { EducationStyled, EducationSubjects, SubjectStyled } from "./Education.Styled";
import { TitleContainer } from "../TitleContainer/TitleContainer";

const subjects= [
    ["BIOLOGI", "#A41942"],
    ["BIOTEKNOLOGI", "#DFA63B"],
    ["KEMI", "#4BA039"],
    ["DANSK", "#FF81FF"],
    ["DESIGN", "#3101C9"],
    ["HISTORIE", "#98C89E"],
    ["FYSIK", "#0C6C9A"],
    ["IDRÆT", "#27BDDF"],
    ["MATEMATIK", "#6591A5"]

]



export const Education = () => {
    return (
        <EducationStyled>
            <TitleContainer>UNDERVISNING</TitleContainer>
            <article>
            Her finder du inspiration til din undervisning i form af introducerende øvelser, der kan bruges til at sætte verdensmålene i spil sammen med dine elever. Øvelserne er udarbejdet på baggrund af bogen “Bliver verden bedre” og kernestof i fagene.
            </article>

            <EducationSubjects >
                {subjects.map((value, index) =>{
                    return(
                        <SubjectStyled key={index} background={value[1]}><h3>{value[0]}</h3></SubjectStyled>
                    )
                })}
            </EducationSubjects>



        </EducationStyled>
    );
}