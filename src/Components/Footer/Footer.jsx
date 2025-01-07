import { FooterStyled, FooterArticle, FooterOrganizations } from "./Footer.Styled";


import ms from "../../Assets/Ms-logo.png"
import un from "../../Assets/UNDP-logo.png"
import globlae from "../../Assets/Globale-Gymnasier-Logo.png"
import danida from "../../Assets/Danida-logo.png"

export const Footer = () =>{
    return(
        <FooterStyled>
            <FooterArticle>
                <h4>OM HJEMMESIDEN</h4>
                <p>Dette digitale læringssite er udviklet af UNDP's nordiske kontor i Danmark, Globale Gymnasier og Mellemfolkeligt Samvirke/VerdensKlasse med støtte fra Danidas Oplysningsbevilling.</p>

                <p>Vores mål med dette site er at give lærere og elever på landets ungdomsuddannelser mulighed for at opnå viden, holdninger og handlingskompetence i forhold til FN's verdensmål for bæredygtig udvikling. Sitet opdateres løbende med nyeste statistik, viden og nye undervisningsforløb.</p>
            </FooterArticle>
            <FooterOrganizations>
                <h4>ORGANISATIONERNE BAG</h4>
                <div>
                    <img src={un} alt="un-logo" />
                    <img src={ms} alt="ms-logo" />
                </div>
                    <img src={globlae} alt="globale-logo" />
                    <h4>UDVIKLET MED STØTTE FRA DANIDAS OPLYSNINGSBEVILLING</h4>
                    <img src={danida} alt="danida-logo" />
            </FooterOrganizations>

        </FooterStyled>
    )
}