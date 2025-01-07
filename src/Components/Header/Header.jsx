import { HeaderStyled } from "./Header.Styled";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png"


export const Header = () =>{
    return(
        <HeaderStyled>
            <Link to={"/"}>
                <img src={logo} alt="logo"/>
            </Link>
        </HeaderStyled>
    )
}