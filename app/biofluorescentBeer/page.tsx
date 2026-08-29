import BasicArticle from "@/src/components/BasicArticle";
import Biofluorescent_Beer from "../../src/images/project_images/glow_in_the_darkbeer_project.jpg";
import Biofluorescent_Beer2 from "../../src/images/project_images/biofluorescent_beer.jpg";
import Biofluorescent_Beer3 from "../../src/images/project_images/bioregional_beer_project.jpg";
export default function page() {
    return(
        <div>
            <BasicArticle title="Biofluorescent Beer"
            summary = "Stuff"
            description="A project that aims to create a biofluorescent beer using genetically modified yeast."
            date="2023-2024"
            team={["Lab Team", "Brew Team"]}
            image1={Biofluorescent_Beer2}
            image2 = {Biofluorescent_Beer3}
            image3 = {Biofluorescent_Beer} />
        </div>
    );


}