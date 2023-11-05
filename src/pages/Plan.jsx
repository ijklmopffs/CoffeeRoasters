import { useState } from "react";
import close from "../../assets/shared/mobile/icon-close.svg";
import hero from "../../assets/plan/desktop/image-hero-blackcup.jpg";
import heroTablet from "../../assets/plan/tablet/image-hero-blackcup.jpg";
import heroMobile from "../../assets/plan/mobile/image-hero-blackcup.jpg";
import arrow from "../../assets/plan/desktop/icon-arrow.svg";
import arrowUp from "../../assets/plan/desktop/icon-arrow-up.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Plan() {
  const [icon, setIcon] = useState(false);
  const [iconOne, setIconOne] = useState(false);
  const [iconTwo, setIconTwo] = useState(false);
  const [iconThree, setIconThree] = useState(false);
  const [iconFour, setIconFour] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);
  const [selectedThree, setSelectedThree] = useState(null);
  const [selectedFour, setSelectedFour] = useState(null);
  const [selectedFive, setSelectedFive] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const options = [
    {
      title: "Capsule",
      description: "Compatible with Nespresso systems and similar brewers",
    },
    {
      title: "Filter",
      description:
        "For pour over or drip methods like Aeropress, Chemex, and V60",
    },
    {
      title: "Espresso",
      description:
        "Dense and finely ground beans for an intense, flavorful experience",
    },
  ];

  const optionsTwo = [
    {
      title: "Single Origin",
      description:
        "Distinct, high quality coffee from a specific family-owned farm",
    },
    {
      title: "Decaf",
      description:
        "Just like regular coffee, except the caffeine has been removed",
    },
    {
      title: "Blended",
      description:
        "Combination of two or three dark roasted beans of organic coffees",
    },
  ];

  const optionsThree = [
    {
      title: "250g",
      description:
        "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },
    {
      title: "500g",
      description:
        "Perfect option for a couple. Yields about 40 delectable cups.",
    },
    {
      title: "1000g",
      description:
        "Perfect for offices and events. Yields about 90 delightful cups.",
    },
  ];

  const optionsFour = [
    {
      title: "Wholebean",
      description: "Best choice if you cherish the full sensory experience",
    },
    {
      title: "Filter",
      description:
        "For drip or pour-over coffee methods such as V60 or Aeropress",
    },
    {
      title: "Cafetiére",
      description:
        "Course ground beans specially suited for french press coffee",
    },
  ];

  const optionsFive = [
    {
      title: "Every week",
      description: "$7.20 per shipment. Includes free first-class shipping.",
      descriptionTwo:
        "$13.00 per shipment. Includes free first-class shipping.",
      descriptionThree:
        "$22.00 per shipment. Includes free first-class shipping.",
      priceOne: 7.2,
      priceTwo: 13.0,
      priceThree: 22.0,
    },
    {
      title: "Every 2 weeks",
      description: "$9.60 per shipment. Includes free priority shipping.",
      descriptionTwo: "$17.50 per shipment. Includes free priority shipping.",
      descriptionThree: "$32.00 per shipment. Includes free priority shipping.",
      priceFour: 9.6,
      priceFive: 17.5,
      priceSix: 32.0,
    },
    {
      title: "Every month",
      description: "$12.00 per shipment. Includes free priority shipping.",
      descriptionTwo: "$22.00 per shipment. Includes free priority shipping.",
      descriptionThree: "$42.00 per shipment. Includes free priority shipping.",
      priceSeven: 12.0,
      priceEight: 22.0,
      priceNine: 42.0,
    },
  ];

  const handleOptionClick = (index) => {
    setSelected(index === selected ? null : index);
  };
  const handleOptionClickTwo = (index) => {
    setSelectedTwo(index === selectedTwo ? null : index);
  };
  const handleOptionClickThree = (index) => {
    setSelectedThree(index === selectedThree ? null : index);
  };
  const handleOptionClickFour = (index) => {
    setSelectedFour(index === selectedFour ? null : index);
  };
  const handleOptionClickFive = (index) => {
    setSelectedFive(index === selectedFive ? null : index);
  };

  const handleClick = () => {
    setIcon(!icon);
  };
  const handleClickOne = () => {
    setIconOne(!iconOne);
  };
  const handleClickTwo = () => {
    setIconTwo(!iconTwo);
  };
  const handleClickThree = () => {
    setIconThree(!iconThree);
  };
  const handleClickFour = () => {
    setIconFour(!iconFour);
  };

  return (
    <main className="max-w-[105rem] mx-auto bg-[#fefcf7]/50">
      <Navbar />
      <section className="p-4 relative">
        <div>
          <img src={hero} alt="" className="rounded-md hidden lg:block" />
          <img
            src={heroTablet}
            alt=""
            className="rounded-md hidden md:block lg:hidden"
          />
          <img src={heroMobile} alt="" className="rounded-md md:hidden" />
        </div>
        <div className="absolute top-52 p-4 md:text-start">
          <h1 className="text-7xl font-black text-[#fefcf7] my-10">
            Create plan
          </h1>
          <p className="md:w-96 text-[#fefcf7]/50 font-barlow">
            Coffee the way you wanted it to be. For coffee delivered tomorrow,
            or next week. For whatever brew method you use. For choice, for
            convenience, for quality.
          </p>
        </div>
      </section>

      <section className="bg-[#2c343e] text-[#fefcf7] my-40 md:text-start p-8">
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
              <h3 className="font-black text-3xl my-5">Pick your coffee</h3>
              <p className="w-72 font-barlow">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>

            <div className="md:text-start">
              <h2 className="font-black text-7xl text-[#fdd6ba] my-10">02</h2>
              <h3 className="font-black text-3xl my-5">Choose the frequency</h3>
              <p className="w-72 font-barlow">
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>

            <div className="md:text-start">
              <h2 className="font-black text-7xl text-[#fdd6ba] my-10">03</h2>
              <h3 className="font-black text-3xl my-5">Receive and enjoy!</h3>
              <p className="w-72 font-barlow">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 flex justify-center gap-40">
        <div className="p-4 w-fit hidden lg:block">
          <div className="flex items-center gap-4">
            <p
              className={
                icon
                  ? "text-2xl text-[#0e8784] font-black"
                  : "text-2xl text-[#0e8784]/10 font-black"
              }
            >
              01
            </p>
            <p
              className={
                icon
                  ? "text-2xl text-[#333d4b] font-black"
                  : "text-2xl text-[#333d4b]/10 font-black"
              }
            >
              Preferences
            </p>
          </div>
          <div className="w-ful h-[1px] bg-[#83888f] my-5"></div>
          <div className="flex items-center gap-4">
            <p
              className={
                iconOne
                  ? "text-2xl text-[#0e8784] font-black"
                  : "text-2xl text-[#0e8784]/10 font-black"
              }
            >
              02
            </p>
            <p
              className={
                iconOne
                  ? "text-2xl text-[#333d4b] font-black"
                  : "text-2xl text-[#333d4b]/10 font-black"
              }
            >
              Bean Type
            </p>
          </div>
          <div className="w-ful h-[1px] bg-[#83888f] my-5"></div>

          <div className="flex items-center gap-4">
            <p
              className={
                iconTwo
                  ? "text-2xl text-[#0e8784] font-black"
                  : "text-2xl text-[#0e8784]/10 font-black"
              }
            >
              03
            </p>
            <p
              className={
                iconTwo
                  ? "text-2xl text-[#333d4b] font-black"
                  : "text-2xl text-[#333d4b]/10 font-black"
              }
            >
              Quantity
            </p>
          </div>
          <div className="w-ful h-[1px] bg-[#83888f] my-5"></div>

          <div className="flex items-center gap-4">
            <p
              className={
                iconThree
                  ? "text-2xl text-[#0e8784] font-black"
                  : "text-2xl text-[#0e8784]/10 font-black"
              }
            >
              04
            </p>
            <p
              className={
                iconThree
                  ? "text-2xl text-[#333d4b] font-black"
                  : "text-2xl text-[#333d4b]/10 font-black"
              }
            >
              Grind Option
            </p>
          </div>
          <div className="w-ful h-[1px] bg-[#83888f] my-5"></div>

          <div className="flex items-center gap-4">
            <p
              className={
                iconFour
                  ? "text-2xl text-[#0e8784] font-black"
                  : "text-2xl text-[#0e8784]/10 font-black"
              }
            >
              05
            </p>
            <p
              className={
                iconFour
                  ? "text-2xl text-[#333d4b] font-black"
                  : "text-2xl text-[#333d4b]/10 font-black"
              }
            >
              Deliveries
            </p>
          </div>
        </div>
        <div className="w-full lg:w-auto text-start md:text-center">
          <div>
            <div className="flex items-center justify-between gap-40">
              <p className="text-[#83888f] text-4xl font-black">
                How do you drink your coffee?
              </p>
              <div onClick={handleClick} className="cursor-pointer">
                {icon ? (
                  <img src={arrowUp} alt="" />
                ) : (
                  <img src={arrow} alt="" />
                )}
              </div>
            </div>

            {icon ? (
              <div
                className="mt-10 text-start flex flex-col md:flex-row gap-5 
              md:gap-0 justify-between cursor-pointer no-tap-highlight"
              >
                {options.map((option, index) => (
                  <div
                    key={option.title}
                    className={`bg-[#f4f1eb] p-4 rounded-md lg:hover:bg-[#fdd6ba] ${
                      selected === index ? "bg-primary text-[#fefcf7]" : ""
                    }`}
                    onClick={() => handleOptionClick(index)}
                  >
                    <h2
                      className={`text-2xl text-[#333d4b] font-black my-5 md:my-10 ${
                        selected === index ? "text-[#fefcf7]" : ""
                      }`}
                    >
                      {option.title}
                    </h2>
                    <p className="w-48 font-barlow">{option.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="my-20">
            <div className="flex items-center justify-between gap-40">
              <p className="text-[#83888f] text-4xl font-black">
                What type of coffee?
              </p>
              <div onClick={handleClickOne} className="cursor-pointer">
                {iconOne ? (
                  <img src={arrowUp} alt="" />
                ) : (
                  <img src={arrow} alt="" />
                )}
              </div>
            </div>
            {iconOne ? (
              <div
                className="mt-10 text-start flex flex-col md:flex-row 
              gap-5 md:gap-0 justify-between cursor-pointer no-tap-highlight"
              >
                {optionsTwo.map((optionTwo, index) => (
                  <div
                    key={optionTwo.title}
                    className={`bg-[#f4f1eb] p-4 rounded-md lg:hover:bg-[#fdd6ba] ${
                      selectedTwo === index ? "bg-primary text-[#fefcf7]" : ""
                    }`}
                    onClick={() => handleOptionClickTwo(index)}
                  >
                    <h2
                      className={`text-2xl text-[#333d4b] font-black my-5 md:my-10 ${
                        selectedTwo === index ? "text-[#fefcf7]" : ""
                      }`}
                    >
                      {optionTwo.title}
                    </h2>
                    <p className="w-48 font-barlow">{optionTwo.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="my-20">
            <div className="flex items-center justify-between gap-40">
              <p className="text-[#83888f] text-4xl font-black">
                How much would you like?
              </p>
              <div onClick={handleClickTwo} className="cursor-pointer">
                {iconTwo ? (
                  <img src={arrowUp} alt="" />
                ) : (
                  <img src={arrow} alt="" />
                )}
              </div>
            </div>
            {iconTwo ? (
              <div
                className="mt-10 text-start flex flex-col md:flex-row 
              gap-5 md:gap-0 justify-between cursor-pointer no-tap-highlight"
              >
                {optionsThree.map((optionThree, index) => (
                  <div
                    key={optionThree.title}
                    className={`bg-[#f4f1eb] p-4 rounded-md lg:hover:bg-[#fdd6ba] ${
                      selectedThree === index ? "bg-primary text-[#fefcf7]" : ""
                    }`}
                    onClick={() => handleOptionClickThree(index)}
                  >
                    <h2
                      className={`text-2xl text-[#333d4b] font-black my-5 md:my-10 ${
                        selectedThree === index ? "text-[#fefcf7]" : ""
                      }`}
                    >
                      {optionThree.title}
                    </h2>
                    <p className="w-48 font-barlow">
                      {optionThree.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {selected !== null && options[selected].title === "Capsule" ? (
            <div className="my-20">
              <div className="flex items-center justify-between gap-40">
                <p className="text-[#83888f]/20 text-4xl font-black">
                  Want us to grind them?
                </p>
                <div className="cursor-pointer">
                  {iconThree ? (
                    <img src={arrowUp} alt="" />
                  ) : (
                    <img src={arrow} alt="" />
                  )}
                </div>
              </div>
              {iconThree ? (
                <div
                  className="mt-10 text-start flex flex-col md:flex-row 
              gap-5 md:gap-0 justify-between cursor-pointer no-tap-highlight"
                >
                  {optionsFour.map((optionFour, index) => (
                    <div
                      key={optionFour.title}
                      className={`bg-[#f4f1eb] p-4 rounded-md lg:hover:bg-[#fdd6ba] ${
                        selectedFour === index
                          ? "bg-primary text-[#fefcf7]"
                          : ""
                      }`}
                    >
                      <h2
                        className={`text-2xl text-[#333d4b] font-black my-5 md:my-10 ${
                          selectedFour === index ? "text-[#fefcf7]" : ""
                        }`}
                      >
                        {optionFour.title}
                      </h2>
                      <p className="w-48 font-barlow">
                        {optionFour.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="my-20">
              <div className="flex items-center justify-between gap-40">
                <p className="text-[#83888f] text-4xl font-black">
                  Want us to grind them?
                </p>
                <div onClick={handleClickThree} className="cursor-pointer">
                  {iconThree ? (
                    <img src={arrowUp} alt="" />
                  ) : (
                    <img src={arrow} alt="" />
                  )}
                </div>
              </div>
              {iconThree ? (
                <div
                  className="mt-10 text-start flex flex-col md:flex-row 
              gap-5 md:gap-0 justify-between cursor-pointer no-tap-highlight"
                >
                  {optionsFour.map((optionFour, index) => (
                    <div
                      key={optionFour.title}
                      className={`bg-[#f4f1eb] p-4 rounded-md lg:hover:bg-[#fdd6ba] ${
                        selectedFour === index
                          ? "bg-primary text-[#fefcf7]"
                          : ""
                      }`}
                      onClick={() => handleOptionClickFour(index)}
                    >
                      <h2
                        className={`text-2xl text-[#333d4b] font-black my-5 md:my-10 ${
                          selectedFour === index ? "text-[#fefcf7]" : ""
                        }`}
                      >
                        {optionFour.title}
                      </h2>
                      <p className="w-48 font-barlow">
                        {optionFour.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          )}

          <div className="my-20">
            <div className="flex items-center justify-between gap-40">
              <p className="text-[#83888f] text-4xl font-black">
                How often should we deliver?
              </p>
              <div onClick={handleClickFour} className="cursor-pointer">
                {iconFour ? (
                  <img src={arrowUp} alt="" />
                ) : (
                  <img src={arrow} alt="" />
                )}
              </div>
            </div>
            {iconFour ? (
              <div
                className="mt-10 text-start flex flex-col md:flex-row 
              gap-5 md:gap-0 justify-between cursor-pointer no-tap-highlight"
              >
                {optionsFive.map((optionFive, index) => (
                  <div
                    key={optionFive.title}
                    className={`bg-[#f4f1eb] p-4 rounded-md lg:hover:bg-[#fdd6ba] ${
                      selectedFive === index ? "bg-primary text-[#fefcf7]" : ""
                    }`}
                    onClick={() => handleOptionClickFive(index)}
                  >
                    <h2
                      className={`text-2xl text-[#333d4b] font-black my-5 md:my-10 ${
                        selectedFive === index ? "text-[#fefcf7]" : ""
                      }`}
                    >
                      {optionFive.title}
                    </h2>
                    {selectedThree !== null &&
                    optionsThree[selectedThree].title === "250g" ? (
                      <p className="w-48 font-barlow">
                        {optionFive.description}
                      </p>
                    ) : selectedThree !== null &&
                      optionsThree[selectedThree].title === "500g" ? (
                      <p className="w-48 font-barlow">
                        {optionFive.descriptionTwo}
                      </p>
                    ) : selectedThree !== null &&
                      optionsThree[selectedThree].title === "1000g" ? (
                      <p className="w-48 font-barlow">
                        {optionFive.descriptionThree}
                      </p>
                    ) : (
                      <p className="w-48 font-barlow">
                        {optionFive.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <div className="p-8 bg-plan-mobile md:bg-plan-desktop text-start text-white rounded-md lg:rounded-none">
              <h2 className="uppercase font-barlow text-white/50">
                order summary
              </h2>
              <p className="text-2xl font-black lg:w-[35rem]">
                <>
                  “I drink my coffee
                  {selected !== null && options[selected].title === "Capsule"
                    ? " using"
                    : " as"}
                  {selected === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      {options[selected].title}
                    </span>
                  )}
                  , with a
                  {selectedTwo === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      {optionsTwo[selectedTwo].title}
                    </span>
                  )}
                  ,
                  {selectedThree === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-2">
                      {optionsThree[selectedThree].title}
                    </span>
                  )}
                  {selectedFour === null ? (
                    selected !== null &&
                    options[selected].title === "Capsule" ? null : (
                      <span className="text-[#0e8784] mx-2">_____</span>
                    )
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      <span className="text-[#fefcf7]">, ground ala </span>
                      {optionsFour[selectedFour].title}
                    </span>
                  )}
                  , sent to me
                  {selectedFive === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      {optionsFive[selectedFive].title}
                    </span>
                  )}
                  .
                </>
              </p>
            </div>

            <button
              className={
                selected === null
                  ? "bg-[#0e8784] my-5 self-center lg:self-end text-white px-6 py-4 rounded-md hover:opacity-50 opacity-50"
                  : "bg-[#0e8784] my-5 self-center lg:self-end text-white px-6 py-4 rounded-md hover:opacity-50"
              }
              onClick={openModal}
            >
              Create my plan!
            </button>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-60">
            <div className="bg-white rounded-md shadow-lg">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                <img src={close} alt="" />
              </button>
              <div className="bg-plan-modal p-4 rounded-none">
                <h2 className="text-start text-4xl text-white font-black">
                  Order Summary
                </h2>
              </div>
              <p className="text-2xl text-start font-black w-96 mt-2 p-8">
                <>
                  “I drink my coffee
                  {selected !== null && options[selected].title === "Capsule"
                    ? " using"
                    : " as"}
                  {selected === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      {options[selected].title}
                    </span>
                  )}
                  , with a
                  {selectedTwo === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      {optionsTwo[selectedTwo].title}
                    </span>
                  )}
                  ,
                  {selectedThree === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-2">
                      {optionsThree[selectedThree].title}
                    </span>
                  )}
                  {selectedFour === null ? (
                    selected !== null &&
                    options[selected].title === "Capsule" ? null : (
                      <span className="text-[#0e8784] ml-2">_____</span>
                    )
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      <span className="text-black">, ground ala </span>
                      {optionsFour[selectedFour].title}
                    </span>
                  )}
                  , sent to me
                  {selectedFive === null ? (
                    <span className="text-[#0e8784] mx-2">_____</span>
                  ) : (
                    <span className="text-[#0e8784] ml-1">
                      {optionsFive[selectedFive].title}
                    </span>
                  )}
                  .
                </>
              </p>
              <p className="font-barlow w-96 p-8 text-start pt-0">
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.
              </p>
              <div className="flex items-center justify-between p-8">
                <div className="text-3xl font-black text-[#333d4b]">
                  {optionsThree[selectedThree].title === "250g" &&
                  optionsFive[selectedFive].title === "Every week" ? (
                    <p>${optionsFive[0].priceOne * 4}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "500g" &&
                  optionsFive[selectedFive].title === "Every week" ? (
                    <p>${optionsFive[0].priceTwo * 4}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "1000g" &&
                  optionsFive[selectedFive].title === "Every week" ? (
                    <p>${optionsFive[0].priceThree * 4}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "250g" &&
                  optionsFive[selectedFive].title === "Every 2 weeks" ? (
                    <p>${optionsFive[1].priceFour * 2}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "500g" &&
                  optionsFive[selectedFive].title === "Every 2 weeks" ? (
                    <p>${optionsFive[1].priceFive * 2}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "1000g" &&
                  optionsFive[selectedFive].title === "Every 2 weeks" ? (
                    <p>${optionsFive[1].priceSix * 2}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "250g" &&
                  optionsFive[selectedFive].title === "Every month" ? (
                    <p>${optionsFive[2].priceSeven * 1}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "500g" &&
                  optionsFive[selectedFive].title === "Every month" ? (
                    <p>${optionsFive[2].priceEight * 1}/mo</p>
                  ) : null}
                  {optionsThree[selectedThree].title === "1000g" &&
                  optionsFive[selectedFive].title === "Every month" ? (
                    <p>${optionsFive[2].priceNine * 1}/mo</p>
                  ) : null}
                </div>
                <button className="bg-[#0e8784] text-white px-6 py-4 rounded-md hover:opacity-50">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
