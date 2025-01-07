import { DividerStyled } from "./Divider.Styled";
import Divider from '../../Assets/Divider.png'

export const Dividerimage = () => {
    return (
        <DividerStyled>
        <img src={Divider} alt="Divider" />
        </DividerStyled>
    )
}