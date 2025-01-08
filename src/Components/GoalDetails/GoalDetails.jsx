import { GoalDetailsStyled } from "./GoalDetails.Styled";
import { IframeContainer } from "./GoalDetails.Styled";


export const GoalDetails = ({details}) =>{
    console.log(details);

    const descriptionParagraphs = details.description.split('\n\n');

    return(
        <GoalDetailsStyled>
            <h2>{details.byline}</h2>
            <IframeContainer>
            <iframe
            src={details.video_url} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen> 
             </iframe>
             </IframeContainer>
             <article>
            {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}     
             </article>
            </GoalDetailsStyled>
    )
}