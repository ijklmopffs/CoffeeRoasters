import heroDesktop from "../../assets/about/desktop/image-hero-whitecup.jpg";
import heroTablet from "../../assets/about/tablet/image-hero-whitecup.jpg";
import heroMobile from "../../assets/about/mobile/image-hero-whitecup.jpg";
import commitment from "../../assets/about/desktop/image-commitment.jpg";
import commitmentTablet from "../../assets/about/tablet/image-commitment.jpg";
import commitmentMobile from "../../assets/about/mobile/image-commitment.jpg";
import cup from "../../assets/about/desktop/image-quality.jpg";
import cupTablet from "../../assets/about/tablet/image-quality.jpg";
import cupMobile from "../../assets/about/mobile/image-quality.jpg";
import uk from "../../assets/about/desktop/illustration-uk.svg";
import canada from "../../assets/about/desktop/illustration-canada.svg";
import australia from "../../assets/about/desktop/illustration-australia.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="max-w-[105rem] mx-auto bg-[#fefcf7]/50">
      <Navbar />

      <section className="p-4 relative md:text-start">
        <div>
          <img
            src={heroDesktop}
            alt=""
            className="rounded-md hidden lg:block"
          />
          <img
            src={heroTablet}
            alt=""
            className="rounded-md hidden md:block lg:hidden"
          />
          <img src={heroMobile} alt="" className="rounded-md md:hidden" />
        </div>
        <div className="absolute top-52 p-4">
          <h1 className="text-[#fefcf7] font-black text-4xl my-5">About Us</h1>
          <p className="font-barlow text-[#fefcf7] md:w-96">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </section>

      <section
        className="p-4 my-10 flex flex-col md:flex-row items-center gap-20 
      md:text-start max-w-[1110px] mx-auto"
      >
        <div>
          <img src={commitment} alt="" className="rounded-md hidden lg:block" />
          <img
            src={commitmentTablet}
            alt=""
            className="rounded-md hidden md:block lg:hidden"
          />
          <img src={commitmentMobile} alt="" className="rounded-md md:hidden" />
        </div>
        <div>
          <h2 className="font-black text-4xl text-[#333d4b] my-5">
            Our commitment
          </h2>
          <p className="md:w-[34rem] font-barlow text-[#333d4b]">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section
        className="bg-[#2c343e] p-16 md:p-40 rounded-md mt-80 mb-40 flex 
      flex-col-reverse lg:flex-row justify-between relative lg:text-start w-[327px] md:w-[688px] mx-auto lg:w-auto"
      >
        <div>
          <h2 className="font-black text-2xl md:text-4xl text-[#fefcf7] my-10">
            Uncompromising quality
          </h2>
          <p className="lg:w-96 font-barlow text-[#fefcf7]">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <div>
          <img
            src={cup}
            alt=""
            className="rounded-md absolute bottom-36 right-40 hidden lg:block"
          />
          <img
            src={cupTablet}
            alt=""
            className="rounded-md absolute bottom-96 left-20 hidden md:block lg:hidden"
          />
          <img
            src={cupMobile}
            alt=""
            className="rounded-lg w-[279px] h-[156px] absolute left-8 top-[-8rem] md:hidden"
          />
        </div>
      </section>

      <section className="md:text-start p-4">
        <h3 className="text-2xl font-black text-[#83888f]">Our headquarters</h3>

        <div className="my-10 flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:block">
            <img src={uk} alt="" />
            <div>
              <h2 className="text-[#83888f] my-10 text-3xl font-black">
                United Kingdom
              </h2>
              <p className="font-barlow text-[#333d4b]">
                68 Asfordby Rd <br /> Alcaston <br /> SY6 1YA <br /> +44 1241
                918425
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:block">
            <img src={canada} alt="" />
            <div>
              <h2 className="text-[#83888f] my-10 text-3xl font-black">
                Canada
              </h2>
              <p className="font-barlow text-[#333d4b]">
                1528 Eglinton Avenue <br /> Toronto <br /> Ontario M4P 1A6
                <br /> +1 416 485 2997
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:block">
            <img src={australia} alt="" />
            <div>
              <h2 className="text-[#83888f] my-10 text-3xl font-black">
                Australia
              </h2>
              <p className="font-barlow text-[#333d4b]">
                36 Swanston Street <br /> Kewell <br /> Victoria <br /> +61 4
                9928 3629
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
