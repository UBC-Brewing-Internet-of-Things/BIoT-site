import BasicArticle from "@/src/components/BasicArticle";

export default function page() {
    return(
        <div>
            <BasicArticle title="Biofluorescent Beer"
            summary = "Stuff"
            description="A project that aims to create a biofluorescent beer using genetically modified yeast."
            date="2023-2024"
            team={["Lab Team", "Brew Team"]}
            image1="/images/biofluorescentBeer.jpg"
            image2 = "/images/biofluorescentBeer.jpg"
            image3 = "/images/biofuorescentBeer.jpg" />
        </div>
    );


}