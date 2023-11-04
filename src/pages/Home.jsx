import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroDesktop from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import heroTablet from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import heroMobile from "../../assets/home/mobile/image-hero-coffeepress.jpg";
import collection from "../../assets/home/desktop/collection.svg";
import danche from "../../assets/home/desktop/image-danche.png";
import espresso from "../../assets/home/desktop/image-gran-espresso.png";
import piccollo from "../../assets/home/desktop/image-piccollo.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import coffee from "../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../assets/home/desktop/icon-gift.svg";
import truck from "../../assets/home/desktop/icon-truck.svg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="max-w-[105rem] mx-auto bg-[#fefcf7]/50">
      <Navbar />
      <section className="p-4 relative">
        <div>
          <img
            src={heroDesktop}
            alt=""
            className="rounded-lg hidden lg:block"
          />
          <img
            src={heroTablet}
            alt=""
            className="rounded-lg hidden md:block lg:hidden"
          />
          <img src={heroMobile} alt="" className="rounded-lg md:hidden" />
        </div>
        <div className="absolute top-52 text-white md:text-start p-4">
          <h1 className="font-black text-7xl my-5">
            Great coffee <br /> made simple.
          </h1>
          <p className="md:w-96 font-barlow text-[#fefcf7] my-5">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/plan">
            <button className="bg-[#0e8784] px-6 py-4 rounded-md hover:opacity-50">
              Create your plan
            </button>
          </Link>
        </div>
      </section>

      <section className="my-20 max-w-[1110px] mx-auto">
        <div>
          <img src={collection} alt="" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center relative bottom-20">
          <div className="w-fit p-4 flex flex-col md:flex-row lg:flex-col items-center">
            <img src={espresso} alt="" className="p-1 w-64 h-48" />
            <div>
              <h2 className="font-black text-2xl my-10 text-[#333d4b]">
                Gran Espresso
              </h2>
              <p className="w-72 font-barlow text-[#333d4b]">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience.
              </p>
            </div>
          </div>

          <div className="w-fit p-4 flex flex-col md:flex-row lg:flex-col items-center">
            <img src={planalto} alt="" className="p-1 w-64 h-48" />
            <div>
              <h2 className="font-black text-2xl my-10 text-[#333d4b]">
                Planalto
              </h2>
              <p className="w-72 font-barlow text-[#333d4b]">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts.
              </p>
            </div>
          </div>

          <div className="w-fit p-4 flex flex-col md:flex-row lg:flex-col items-center">
            <img src={piccollo} alt="" className="p-1 w-64 h-48" />
            <div>
              <h2 className="font-black text-2xl my-10 text-[#333d4b]">
                Piccollo
              </h2>
              <p className="w-72 font-barlow text-[#333d4b]">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry.
              </p>
            </div>
          </div>

          <div className="w-fit p-4 flex flex-col md:flex-row lg:flex-col items-center">
            <img src={danche} alt="" className="p-1 w-64 h-48" />
            <div>
              <h2 className="font-black text-2xl my-10 text-[#333d4b]">
                Danche
              </h2>
              <p className="w-72 font-barlow text-[#333d4b]">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2c343e] p-8 pt-10 lg:p-16 lg:pt-20 my-10 rounded-md">
        <h2 className="font-black text-4xl text-[#fefcf7]">Why choose us?</h2>
        <p className="font-barlow md:w-[30rem] mx-auto text-[#fefcf7] my-2">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative top-64 lg:top-36">
          <div className="bg-[#0e8784] gap-10 lg:gap-0 w-fit flex flex-col md:flex-row lg:flex-col items-center p-8 rounded-md">
            <img src={coffee} alt="" />
            <div>
              <h3 className="font-black text-2xl text-[#fefcf7] my-10">
                Best quality
              </h3>
              <p className="w-96 lg:w-64 font-barlow text-[#fefcf7]">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>

          <div className="bg-[#0e8784] gap-10 lg:gap-0 w-fit flex flex-col md:flex-row lg:flex-col items-center p-8 rounded-md">
            <img src={gift} alt="" />
            <div>
              <h3 className="font-black text-2xl text-[#fefcf7] my-10">
                Exclusive benefits
              </h3>
              <p className="w-96 lg:w-64 font-barlow text-[#fefcf7]">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>

          <div className="bg-[#0e8784] gap-10 lg:gap-0 w-fit flex flex-col md:flex-row lg:flex-col items-center p-12 rounded-md">
            <img src={truck} alt="" />
            <div>
              <h3 className="font-black text-2xl text-[#fefcf7] my-10">
                Free shipping
              </h3>
              <p className="w-96 lg:w-52 font-barlow text-[#fefcf7]">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1045px] mx-auto my-60 lg:my-40 md:text-start p-4">
        <h3 className="font-black text-2xl text-[#83888f]">How it works</h3>
        <div className="my-10">
          <div className="hidden md:flex items-center">
            <div className="border-[1px] rounded-full border-[#0e8784] w-8 h-8"></div>
            <div className="h-[1px] w-[245px] lg:w-[380px] bg-[#fdd6ba]"></div>
            <div className="border-[1px] rounded-full border-[#0e8784] w-8 h-8"></div>
            <div className="h-[1px] w-[245px] lg:w-[380px] bg-[#fdd6ba]"></div>
            <div className="border-[1px] rounded-full border-[#0e8784] w-8 h-8"></div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-16 lg:gap-56">
            <div className="md:text-start">
              <h2 className="font-black text-7xl text-[#fdd6ba] my-10">01</h2>
              <h3 className="font-black text-[#333d4b] text-3xl my-5">
                Pick your coffee
              </h3>
              <p className="w-72 font-barlow text-[#333d4b]">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>

            <div className="md:text-start">
              <h2 className="font-black text-7xl text-[#fdd6ba] my-10">02</h2>
              <h3 className="font-black text-[#333d4b] text-3xl my-5">
                Choose the frequency
              </h3>
              <p className="w-72 font-barlow text-[#333d4b]">
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>

            <div className="md:text-start">
              <h2 className="font-black text-7xl text-[#fdd6ba] my-10">03</h2>
              <h3 className="font-black text-[#333d4b] text-3xl my-5">
                Receive and enjoy!
              </h3>
              <p className="w-72 font-barlow text-[#333d4b]">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>

          <Link to="/plan">
            <button className="bg-[#0e8784] hover:opacity-50 px-8 py-3 rounded-md mt-10 text-white">
              Create your plan
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
