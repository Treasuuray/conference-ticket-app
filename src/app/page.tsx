import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <div className="flex justify-evenly mt-8 border border-cyan-500 m-auto px-4 sm:px-12 pt-5 pb-12 w-full max-w-[1200px] h-[76px] rounded-[24px]">
        <span><img src="Frame 1618871078 (1).svg" className="h-auto max-w-full"></img></span>
        <span><img src="Frame 1618871077.svg" className="h-auto max-w-full"></img></span>
        <div className="flex">
          <span>
            <button type="button" className="flex text-gray-900 bg-white border border-cyan-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <p className="mt-2">MY TICKETS</p>
              <svg viewBox="0 0 24 24" width={40} fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                <g id="SVGRepo_bgCarrier"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M7 12L17 12M7 12L11 8M7 12L11 16" stroke="#000000"></path>
                </g>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="content w-full max-w-[700px] h-auto text-white rounded-[40px] p-6 shadow-lg mx-auto border border-cyan-500 relative mt-20 mb-20">
        <div className="flex justify-between w-full">
          <p className="font-JejuMyeongjo text-[32px] text-left">Ticket Selection</p>
          <p className="font-Roboto text-[16px] text-right">Step 1/3</p>
        </div>
        <div className="w-full"><img src="Progress container.svg" className="h-auto max-w-full"></img></div>
        <div className="content w-full h-auto text-white rounded-[32px] p-6 shadow-lg mx-auto border border-cyan-500 mt-10 mb-16">
          <div className="w-full h-auto text-white rounded-[24px] p-6 shadow-lg mx-auto border border-cyan-500 text-center">
            <h1 className="font-Road Rage text-[42px]">Techember Fest "25</h1>
            <p className="pb-2">Join us for an unforgettable experience at</p>
            <p className="pb-2">[Event Name] Secure your spot now.</p>
            <div className="flex justify-evenly">
              <span>📍 [Event Location]</span>
              <span>| |</span>
              <span>March 15, 2025 | 7:00 PM</span>
            </div>
          </div>
          <div className="border-none w-full bg-[#0E464F] h-1 rounded-[5px] mt-10"></div>
          <p className="mt-6">Select Ticket Type:</p>
          <div className="content w-full h-auto text-white rounded-[24px] shadow-lg mx-auto border border-cyan-500 mt-4 mb-19 p-4">
            <div className="box md:flex justify-center items-center sm:grid">
              <img className="g-4 p-4" src="Radio 4.svg"></img>
              <img className="g-4 p-4" src="Radio 5.svg"></img>
              <img className="g-4 p-4" src="Radio 5.svg"></img>
            </div>
          </div>
          <p className="mt-10">Number of Tickets</p>
          <form className="max-w-full mb-10 mt-5">
            <select id="number-of-tickets" className="bg-transparent bg-cyan-50 border border-cyan-500 text-cyan-500 text-sm rounded-md h-[49px] block w-full p-2.9">
              <option className="bg-[#0E464F]">1</option>
              <option className="bg-[#0E464F]">2</option>
              <option className="bg-[#0E464F]">3</option>
              <option className="bg-[#0E464F]">4</option>
              <option className="bg-[#0E464F]">5</option>
              <option className="bg-[#0E464F]">6</option>
              <option className="bg-[#0E464F]">7</option>
              <option className="bg-[#0E464F]">8</option>
              <option className="bg-[#0E464F]">9</option>
            </select>
          </form>

          <div className="md:flex justify-evenly sm:grid w-full sm:gap-4">
            <button className="border border-cyan-500 w-[266px] h-[48px] px-24 pt-4 pb-10 rounded-[8px] text-[#24A0B5] gap-4 ">cancel</button>
            <Link href="/Attendee">
              <button className="border border-cyan-500 w-[266px] h-[48px] px-24 pt-4 pb-10 rounded-[8px] text-white bg-[#24A0B5] gap-4">next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}