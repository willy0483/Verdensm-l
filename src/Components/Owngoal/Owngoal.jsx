import { OwngoalStyled, Create, YourGoal , MakeGrid } from "./Owngoal.Styled";
import { TitleContainer } from "../TitleContainer/TitleContainer";
import { useState, useEffect } from "react";

export const Owngoal = () => {

    const [color, setColor] = useState("#27BDDF");
    const [text, setText] = useState("MIN MÅLTEKST");
    const [error , setErorr] = useState("");


    useEffect(() => {
        if(text){
            setErorr("");
        }else{
            setErorr("Tekst må ikke være tom");
        }

    }, [color, text]);



    return (
        <OwngoalStyled>
            <TitleContainer>BYG DIT EGET MÅL</TitleContainer>
            <MakeGrid>
                <Create>
                    <h3>Mangler der et mål?</h3>
                    <p>Med tekst feltet herunder kan du bygge dit eget mål og give det en bestemt farve.</p>


                    {error && <span style={{ color: "red" }}>{error}</span>}
                    <section>
                        <div>
                            <label htmlFor="text">Måltekst:   </label>
                            <input onChange={(e) => setText(e.target.value)} id="text" type="text" placeholder="Indtast titel på mål" />
                        </div>
                        <div>
                            <label htmlFor="colorCode">Farvekode:</label>
                            <input onChange={(e) => setColor(e.target.value)}
                                   id="colorCode" type="text" placeholder="Indtast farvekode i heximal værdi" />
                        </div>
                    </section>
                </Create>

                <YourGoal color={color}>
                    <h3>{text}</h3>
                </YourGoal>
            </MakeGrid>
        </OwngoalStyled>
    );
}