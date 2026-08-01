import BasicArticle from "@/src/components/BasicArticle";
import Biofluorescent_Beer from "../../src/images/project_images/glow_in_the_darkbeer_project.jpg";

export default function page() {
    return(
        <div>
            <BasicArticle title="Biofluorescent Beer"
            summary = "Stuff"
            description="A project that aims to create a biofluorescent beer using genetically modified yeast."
            date="2023-2024"
            team={["Lab Team", "Brew Team"]}
            image1={Biofluorescent_Beer}
            image2 = {Biofluorescent_Beer}
            image3 = {Biofluorescent_Beer} />
        </div>
    );


}