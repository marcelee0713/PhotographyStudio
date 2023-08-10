import Image from "next/image";
import { Inter, Russo_One } from "next/font/google";

const russo = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col">
        <div className="h-screen bg-primary w-full flex justify-between items-center px-10">
          <div className="relative w-landingWidth h-landingHeight">
            <Image
              src={"/landing_pic.jpg"}
              alt={"Just a woman"}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className=""></div>
        </div>
        <div className="h-screen bg-secondary"></div>
      </main>
    </>
  );
}
