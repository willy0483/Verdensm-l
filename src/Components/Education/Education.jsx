import { EducationStyled, EducationSubjects, SubjectStyled } from "./Education.Styled";
import { TitleContainer } from "../TitleContainer/TitleContainer";

import { useEffect, useState } from "react";
import axios from "axios";

export const Education = () => {

    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState();

useEffect(() =>{
    const fetchData = async () => {
        try{
            const repsonse = await axios.get('https://api.mediehuset.net/sdg/edu')
            setApiData(repsonse.data.items)
        } catch(error){
            setError("Der er sket en fejl")
        }
      }
      fetchData();
},[]);



console.log(apiData);

    return (
        <EducationStyled>
            <TitleContainer>UNDERVISNING</TitleContainer>
            <article>
            Her finder du inspiration til din undervisning i form af introducerende øvelser, der kan bruges til at sætte verdensmålene i spil sammen med dine elever. Øvelserne er udarbejdet på baggrund af bogen “Bliver verden bedre” og kernestof i fagene.
            </article>

            <EducationSubjects >
                {apiData && apiData.map((value, index) =>{
                    return(
                        <SubjectStyled key={index} background={`#${value.color}`} ><h3>{value.name}</h3></SubjectStyled>
                    )
                })}
            </EducationSubjects>



        </EducationStyled>
    );
}