import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";

export const Navbar = () =>{
    return(
        <NavbarStyled>
            <ul>
                <li>
                <NavLink to={"/"}>VERDENSMÅLENE</NavLink>
                </li>
                <li>
                <NavLink to={"/Education"}>UNDERVISNING</NavLink>
                </li>
                <li>
                <NavLink to={"/Owngoal"}>EGET MÅL</NavLink>
                </li>
                <li>
                <NavLink to={"/Faq"}>FAQ</NavLink>
                </li>
                <li>
                <NavLink to={"/contact"}>KONTAKT OS</NavLink>
                </li>
            </ul>

        </NavbarStyled>
    )
}