import SubteamHomepageCard from "@/src/components/SubteamHomepageCard";
import Image from "next/image";
import HomepageImage from "@/src/images/home_images/beaker_home.jpg";

export default function Page() {
  return (
  <main>
    <Image
      src={HomepageImage}
      alt="Homepage Image"
      width={1200}
      height={600}
    />
    <SubteamHomepageCard />
  </main>
  );
}