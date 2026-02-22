import { sponsorLogos } from "@/src/images/sponsor_images/sponsor_logos";
import { link } from "fs";

export const sponsors = {
    Platinum : [
        {title: "UBC Engineering", logo: sponsorLogos.ubc_engineering, link: "https://engineering.ubc.ca"},
        {title: "Tydra Laboratories", logo: sponsorLogos.tydra_laboratories, link: "https://www.tydralabs.com/"}
    ],

    Silver: [
        {title: "Walter H. Gage Memorial Fund", logo: sponsorLogos.walter_h_gage_memorial_fund, link: "https://vpstudents.ubc.ca/walter-gage/"}
    ],

    Supporters : [
        {title: "Breka", logo: sponsorLogos.breka, link: "https://www.breka.ca/"},
        {title: "BosaGrape Supplies", logo: sponsorLogos.bosa_grape, link: "https://www.bosagrape.com/"}
    ]

}