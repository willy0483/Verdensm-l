import { ArticleContainer } from "./Article.Styled";



export const Article = ({title, description})=>{
    return(
        <>
        <ArticleContainer>
            <h3>{title}</h3>
            <p>{description}</p>
        </ArticleContainer>
        </>
    )
}