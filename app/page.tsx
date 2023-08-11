"use client";
import Image from "next/image";
import { Inter, Russo_One } from "next/font/google";
import { useState, useRef, useEffect, FC, ReactNode } from "react";

const russo = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  children: ReactNode;
};

const RevealOnScroll = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current!);

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col">
        <div className="h-screen bg-primary w-full flex gap-20 items-center px-universal py-10 bg-landingPage bg-no-repeat bg-cover">
          <div className="relative w-landingWidth h-landingHeight group/landingpage">
            <RevealOnScroll>
              <Image
                src={"/LandingPage/landing_pic.jpg"}
                alt={"Just a woman"}
                fill
                className="shadow-secondary shadow-rightLetterShadow transition-shadow duration-300 group-hover/landingpage:shadow-none "
                style={{ objectFit: "cover" }}
                priority={true}
              />
              <Image
                src={"/LandingPage/landing_pic_1.jpg"}
                alt={"Just a woman"}
                fill
                className="transition-opacity duration-300 group-hover/landingpage:opacity-0"
                style={{ objectFit: "cover", top: "-10px", left: "-10px" }}
                priority={true}
              />
            </RevealOnScroll>
          </div>

          <div className="flex flex-col gap-5 text-accent w-full">
            <RevealOnScroll>
              <h1 className={`${russo.className} text-4xl`}>DreamyStudio</h1>
              <p className="text-lg justify-normal">
                Step into the enchanting world of photography at DreamyStudio
                where every image captures the essence of dreams turned into
                reality. With a blend of artistic vision and technical
                expertise, we transform moments into timeless treasures.{" "}
              </p>
              <div className="flex gap-2 font-bold">
                <a
                  href="#about"
                  className="flex-1 bg-secondary h-12 p-3 rounded-buttons text-center shadow-buttons shadow-shadowColor cursor-pointer transition-transform hover:-translate-y-1"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="flex-1 bg-secondary h-12 p-3 rounded-buttons text-center shadow-buttons shadow-shadowColor cursor-pointer transition-transform hover:-translate-y-1"
                >
                  Services
                </a>
                <a
                  href="#gallery"
                  className="flex-1 bg-secondary h-12 p-3 rounded-buttons text-center shadow-buttons shadow-shadowColor cursor-pointer transition-transform hover:-translate-y-1"
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="flex-1 bg-secondary h-12 p-3 rounded-buttons text-center shadow-buttons shadow-shadowColor cursor-pointer transition-transform hover:-translate-y-1"
                >
                  Contact
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        <div id="about" className="h-screen bg-secondary w-full flex flex-col">
          <div className="flex-1 flex gap-10 w-full bg-secondary py-10 px-universal">
            <div className="relative w-aboutWidth h-aboutHeight">
              <RevealOnScroll>
                <Image
                  src={"/About/about1.jpg"}
                  alt="People in a picnic"
                  fill
                  style={{ objectFit: "cover" }}
                  className="shadow-leftButtonShadow shadow-primary transition-shadow duration-300 hover:shadow-none"
                />
              </RevealOnScroll>
            </div>

            <div className="flex flex-col gap-5 text-accent w-full justify-center">
              <RevealOnScroll>
                <h1 className={`${russo.className} text-4xl`}>About Us</h1>
                <p className="text-lg justify-normal">
                  At DreamyStudio, we are more than just photographers - we are
                  storytellers, memory-makers, and creators of timeless art.
                  Established with a passion for capturing the ethereal beauty
                  in every moment, our studio is a haven where dreams come to
                  life through the lens.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          <div className="flex-1 flex gap-10 w-full bg-primary py-10 px-universal border-b border-secondary">
            <div className="flex flex-col gap-5 text-secondary w-full justify-center">
              <RevealOnScroll>
                <h1 className={`${russo.className} text-4xl self-end`}>
                  Our philosophy
                </h1>
                <p className="text-lg text-end">
                  revolves around the belief that each photograph has the power
                  to evoke feelings, transport you to another world, and freeze
                  time in its most exquisite form. Whether it&rsquo;s a tender
                  embrace, the sparkle in your eyes, or the subtle play of
                  light, we pride ourselves on encapsulating the poetry of life
                  within every frame.
                </p>
              </RevealOnScroll>
            </div>
            <div className="relative w-aboutWidth h-aboutHeight">
              <RevealOnScroll>
                <Image
                  src={"/About/about2.jpg"}
                  alt="Just a girl"
                  fill
                  style={{ objectFit: "cover" }}
                  className="shadow-rightLetterShadow shadow-secondary transition-shadow duration-300 hover:shadow-none"
                />
              </RevealOnScroll>
            </div>
          </div>
          <div className="flex-1 flex gap-10 w-full bg-primary py-10 px-universal">
            <div className="relative w-aboutWidth h-aboutHeight">
              <RevealOnScroll>
                <Image
                  src={"/About/about3.jpg"}
                  alt="A guy with a neon background"
                  fill
                  style={{ objectFit: "cover" }}
                  className="shadow-leftLetterShadow shadow-secondary transition-shadow duration-300 hover:shadow-none"
                />
              </RevealOnScroll>
            </div>
            <div className="flex flex-col gap-5 text-secondary w-full justify-center">
              <RevealOnScroll>
                <h1 className={`${russo.className} text-4xl`}>
                  We are not just photographers
                </h1>
                <p className="text-lg justify-normal">
                  we are dream catchers, capturing the essence of your most
                  cherished moments in a way that leaves you breathless. Join us
                  in our journey of turning dreams into art, one click at a
                  time.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <div
          id="services"
          className="h-screen bg-primary bg-servicesPage bg-no-repeat bg-cover w-full flex flex-col"
        >
          <div className="bg-servicesHeader bg-no-repeat bg-cover bg-center w-full h-servicesHeaderHeight shadow-headers shadow-shadowColor">
            <div className="flex flex-col gap-5 text-accent h-full justify-center items-center">
              <RevealOnScroll>
                <h1 className={`${russo.className} text-4xl`}>Services</h1>
              </RevealOnScroll>

              <RevealOnScroll>
                <p className="text-lg text-center w-servicesHeaderTextWidth">
                  Indulge in a diverse range of meticulously crafted services,
                  each tailored to weave the magic of storytelling into your
                  cherished moments, creating exquisite and lasting memories.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          <div className="flex w-ful h-full px-universal py-10 gap-2 justify-evenly items-center">
            <div className="flex flex-col gap-3 items-center">
              <div className="relative h-servicesHeight w-servicesWidth">
                <RevealOnScroll>
                  <Image
                    src={"/ServicesPage/services1.jpg"}
                    alt="A teal woman"
                    fill
                    style={{ objectFit: "cover" }}
                    className="shadow-leftLetterShadow shadow-secondary transition-shadow duration-300 hover:shadow-none"
                  />
                </RevealOnScroll>
              </div>
              <div className="font-bold text-secondary">Personal</div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative h-servicesHeight w-servicesWidth">
                <RevealOnScroll>
                  <Image
                    src={"/ServicesPage/services2.jpg"}
                    alt="A teal woman"
                    fill
                    style={{ objectFit: "cover" }}
                    className="shadow-centerLetterShadow shadow-secondary transition-shadow duration-300 hover:shadow-none"
                  />
                </RevealOnScroll>
              </div>
              <div className="font-bold text-secondary">Wedding</div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="relative h-servicesHeight w-servicesWidth">
                <RevealOnScroll>
                  <Image
                    src={"/ServicesPage/services3.jpg"}
                    alt="A teal woman"
                    fill
                    style={{ objectFit: "cover" }}
                    className="shadow-rightLetterShadow shadow-secondary transition-shadow duration-300 hover:shadow-none"
                  />
                </RevealOnScroll>
              </div>
              <div className="font-bold text-secondary">Commercial</div>
            </div>
          </div>
        </div>

        <div
          id="gallery"
          className="h-screen bg-primary bg-galleryPage bg-no-repeat bg-cover w-full flex flex-col"
        >
          <div className="bg-galleryHeader bg-no-repeat bg-cover bg-center w-full h-servicesHeaderHeight shadow-headers shadow-shadowColor">
            <div className="flex flex-col gap-5 text-accent h-full justify-center items-center">
              <RevealOnScroll>
                <h1 className={`${russo.className} text-4xl`}>Gallery</h1>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg text-center w-servicesHeaderTextWidth">
                  Embark on a visual journey through our meticulously curated
                  gallery, where each photograph is a brushstroke of emotion,
                  capturing the beauty, intimacy, and essence of life&rsquo;s
                  most treasured moments, forever preserved in stunning imagery
                </p>
              </RevealOnScroll>
            </div>
          </div>

          <div className="flex w-ful h-full px-universal py-10 justify-evenly items-center gap-2">
            <div className="relative w-galleryPortWidth h-full">
              <RevealOnScroll>
                <Image
                  src={"/GalleryPage/galleryport1.jpg"}
                  alt="A guy with a neon background"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </RevealOnScroll>
            </div>
            <div className="flex-1 h-full grid grid-cols-2 gap-2">
              <div className="relative">
                <RevealOnScroll>
                  <Image
                    src={"/GalleryPage/gallery1.jpg"}
                    alt="A guy with a neon background"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </RevealOnScroll>
              </div>
              <div className="relative">
                <RevealOnScroll>
                  <Image
                    src={"/GalleryPage/gallery2.jpg"}
                    alt="A guy with a neon background"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </RevealOnScroll>
              </div>
              <div className="relative">
                <RevealOnScroll>
                  <Image
                    src={"/GalleryPage/gallery3.jpg"}
                    alt="A guy with a neon background"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </RevealOnScroll>
              </div>
              <div className="relative">
                <RevealOnScroll>
                  <Image
                    src={"/GalleryPage/gallery4.jpg"}
                    alt="A guy with a neon background"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </RevealOnScroll>
              </div>
              <div className="relative">
                <RevealOnScroll>
                  <Image
                    src={"/GalleryPage/gallery5.jpg"}
                    alt="A guy with a neon background"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </RevealOnScroll>
              </div>
              <div className="relative">
                <RevealOnScroll>
                  <Image
                    src={"/GalleryPage/gallery6.jpg"}
                    alt="A guy with a neon background"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </RevealOnScroll>
              </div>
            </div>
            <div className="relative w-galleryPortWidth h-full">
              <RevealOnScroll>
                <Image
                  src={"/GalleryPage/galleryport2.jpg"}
                  alt="A guy with a neon background"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <div id="contact" className="h-screen bg-primary w-full flex flex-col">
          <div className="flex gap-10 text-accent px-universal py-10">
            <div className="flex flex-col gap-2">
              <RevealOnScroll>
                <h1 className={`${russo.className} text-4xl`}>Contact us</h1>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg justify-normal">
                  Stay connected with us to explore the possibilities. Reach out
                  through our contact channels, and let&rsquo;s start crafting
                  your vision into reality.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <p className="text-lg justify-normal">
                  You should receive a reply immediately confirming your
                  submission. If you don&rsquo;t receive a reply, please check
                  your promotions tab and spam filter.
                </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <div className="flex flex-col gap-1">
                  <p>
                    <strong>Email:</strong> info@dreamystudio.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Enchanted Avenue,
                    Imaginaryville, Dreamland
                  </p>
                  <p>
                    <strong>Email:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="flex flex-col gap-3">
              <RevealOnScroll>
                <p className="font-bold">Available appointment: </p>
              </RevealOnScroll>
              <RevealOnScroll>
                <ul className="text-base">
                  <li>
                    <strong>Monday: </strong>9AM - 7PM
                  </li>
                  <li>
                    <strong>Tuesday: </strong>9AM - 7PM
                  </li>
                  <li>
                    <strong>Wednesday: </strong>9AM - 7PM
                  </li>
                  <li>
                    <strong>Thursday: </strong>9AM - 7PM
                  </li>
                  <li>
                    <strong>Friday: </strong>9AM - 7PM
                  </li>
                  <li>
                    <strong>Saturday: </strong>9AM - 7PM
                  </li>
                  <li>
                    <strong>Sunday: </strong>9AM - 7PM
                  </li>
                </ul>
              </RevealOnScroll>
            </div>
          </div>
          <form className="flex-1 bg-accent rounded-t-form px-universal py-10 flex flex-col gap-10 h-full">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col gap-2 font-bold">
                <label>Interested In: </label>
                <select className="outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor">
                  <option className="bg-primary text-accent" value="Personal">
                    Personal
                  </option>
                  <option className="bg-primary text-accent" value="Wedding">
                    Wedding
                  </option>
                  <option className="bg-primary text-accent" value="Commerical">
                    Commercial
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-2 font-bold">
                <label>Event Date: </label>
                <input
                  type="date"
                  className="outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor"
                />
              </div>
              <div className="flex flex-col gap-2 font-bold">
                <label>Email: </label>
                <input
                  type="email"
                  className="outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor"
                />
              </div>
              <div className="flex flex-col gap-2 font-bold">
                <label>Email: </label>
                <div className="flex gap-1">
                  <input
                    type="text"
                    className="outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor"
                  />
                  <input
                    type="text"
                    className="outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 font-bold">
                <label>Phone Number: </label>
                <input
                  type="phone"
                  className="outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor"
                />
              </div>
              <div className="flex flex-col gap-2 font-bold">
                <label>How did you find us?</label>
                <input
                  type="text"
                  className="outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 h-full">
              <label htmlFor="note" className="font-bold">
                Note:{" "}
              </label>
              <textarea
                name="note"
                className="h-full outline-none p-4 rounded-default w-full bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor"
              ></textarea>
            </div>
            <input
              type="submit"
              className="self-end cursor-pointer w-40 outline-none p-4 rounded-default bg-secondary text-primary font-bold rounded-buttons shadow-buttons shadow-shadowColor transition-transform duration-300 hover:-translate-y-1"
            />
          </form>
        </div>
      </main>
    </>
  );
}
