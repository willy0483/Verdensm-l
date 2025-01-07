import { OwngoalStyled, Create, YourGoal , MakeGrid } from "./Owngoal.Styled";
import { TitleContainer } from "../TitleContainer/TitleContainer";
import { useState } from "react";

export const Owngoal = () => {

    const [color, setColor] = useState("#27BDDF");
    const [goalText, setGoalText] = useState("MIN MÅLTEKST");


    const validateColorInputs = () => {
        let isValid = true;
        if (color === "") {
            isValid = false;
        }
        if (color.length > 8) {
            alert("Farvekoden må kun være 8 tegn lang");
            isValid = false;
        }
        return isValid;
    }

    const validateTextInputs = () => {
        let isValid = true;
        if (goalText === "") {
            isValid = false;
        }
        return isValid;
    }

    const handleGoalTextChange = (e) => {
        console.log(e.target.value);
        setGoalText(e.target.value || "MIN MÅLTEKST");
        validateTextInputs();
    };

    const handleColorChange = (e) => {
        console.log(e.target.value);
        setColor(e.target.value || "#27BDDF");
        validateColorInputs();
    };




    return (
        <OwngoalStyled>
            <TitleContainer>BYG DIT EGET MÅL</TitleContainer>
            <MakeGrid>
                <Create>
                    <h3>Mangler der et mål?</h3>
                    <p>Med tekst feltet herunder kan du bygge dit eget mål og give det en bestemt farve.</p>
                    <section>
                        <div>
                            <label htmlFor="goalText">Måltekst:   </label>
                            <input onChange={handleGoalTextChange} id="goalText" type="text" placeholder="Indtast titel på mål" />
                        </div>
                        <div>
                            <label htmlFor="colorCode">Farvekode:</label>
                            <input onChange={handleColorChange}
                                   id="colorCode" type="text" placeholder="Indtast farvekode i heximal værdi" />
                        </div>
                    </section>
                </Create>

                <YourGoal color={color}>
                    <h3>{goalText}</h3>
                </YourGoal>
            </MakeGrid>
        </OwngoalStyled>
    );
}