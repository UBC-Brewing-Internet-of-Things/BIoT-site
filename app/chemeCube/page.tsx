import BasicArticle from "@/src/components/BasicArticle";
import Biofluorescent_Beer from "../../src/images/project_images/glow_in_the_darkbeer_project.jpg";
import ChemE_Cube_Cad from "../../src/images/home_images/subteam_images/cheme_cube_cad.png";
import ChemE_Cube from "../../src/images/home_images/subteam_images/chem_e_cube.jpg";
import ChemE_Cube_Draft from "../../src/images/project_images/cheme_cube/cheme cube draft.jpg";

export default function page() {
    return(
        <div>
            <BasicArticle title="ChemE Cube"
            summary = "We are excited to announce our participation in the 6th Annual ChemE Cube Competition, which will focus on Direct Air Capture and Regeneration. This event will take place on November 8-9 in Minneapolis, MN, during the 2026 AIChE Annual Student Conference."
            description= "We are excited to announce our participation in the 6th Annual ChemE Cube Competition, which will focus on Direct Air Capture and Regeneration. This event will take place on November 8-9 in Minneapolis, MN, during the 2026 AIChE Annual Student Conference. The ChemE Cube Competition invites students to design and construct a fully operational chemical engineering system within a 1 ft by 1 ft by 1 ft cube. Participants will apply their knowledge, conduct experiments, and utilize innovative approaches to tackle real-world engineering challenges. Teams will compete based on the cube's performance and will showcase their technology through: A 1-minute advertisement, a poster presentation, a 20-minute start-up style pitch to a panel of mock investors."
            date="2026"
            team={["ChemE Cube Team"]}
            image1={ChemE_Cube}
            image2 = {ChemE_Cube_Cad}
            image3 = {ChemE_Cube_Draft} />
        </div>
    );


}