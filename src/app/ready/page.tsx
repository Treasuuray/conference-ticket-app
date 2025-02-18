
import Link from "next/link";
import Image from "next/image";
import { 
    } from 'next/navigation';



    export default function Ready() {
        return (
            <div className="main-container">
                <div className="flex justify-evenly mt-8 border border-cyan-500 m-auto px-4 sm:px-12 pt-5 pb-12 w-full max-w-[1200px] h-[76px] rounded-[24px]">
                    <span><Image src="/Frame-1618871078-(1).svg" className="h-auto max-w-full" width={100} height={100} alt="Logo 1" /></span>
                    <span><Image src="/Frame-1618871077.svg" className="h-auto max-w-full" width={250} height={250} alt="Logo 2" /></span>
                    <div className="flex">
                        <span>
                            <button type="button" className="flex text-gray-900 bg-white border border-cyan-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
                            font-medium rounded-lg text-sm px-4 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
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
                <div className="content w-full max-w-[700px] h-[fill] text-white rounded-[40px] p-6 shadow-lg mx-auto border border-cyan-500 relative mt-20 mb-20 p-6 place-items-center text-center">
                    <div className="flex justify-between w-full">
                        <p className="font-JejuMyeongjo text-[32px] text-left">Ready</p>
                        <p className="font-Roboto text-[16px] text-right">Step 3/3</p>
                    </div>
                    <div className=""><Image src="/Progress-container.svg" width={670} height={50} alt="Progress" /></div>
                    <p className="font-Alatsi text-[32px] mt-[40px] mb-[10px]">Your Ticket is Booked!</p>
                    <p className="font-Roboto text-[16px] mb-[12px]">Check your email for a copy or you can download</p>
                    <div className="mb-12 relative grid place-item-center">
                        <Image className="w-[350px]" src="/Subtract.png" width={250} height={680} alt="Ticket" />
                        <div className="border border-cyan-500 w-full max-w-[300px] h-auto rounded-[16px] p-6 absolute mx-6 mt-4 place-items-center text-center">
                            <p className="font-Road Rage text-[24px]">Techember Fest &quot;25</p>
                            <p className="font-Roboto text-[12px]">📍 04 Rumens road, Ikoyi, Lagos</p>
                            <p className="font-Roboto text-[12px]">📅 March 15, 2025 | 7:00 PM</p>
                            <div className="w-[190px] h-[190px] border-4 border-cyan-500 rounded-[12px] text-center mt-6 mb-6"></div>
                            <div className="border border-cyan-500 w-full max-w-[232px] h-auto rounded-[8px] p-2">
                                <div className="grid grid-cols-2 gap-4 border-b border-gray-500 pb-2 divide-x divide-gray-500">
                                    <div>
                                        <label className="text-gray-300 text-[12px] font-Roboto">Enter your name</label>
                                        <p className="font-bold text-[12px] font-Roboto">Avi Chukwu</p>
                                    </div>
                                    <div>
                                        <label className="text-gray-300 text-[11px] font-Roboto">Enter your email *</label>
                                        <p className="font-bold text-[11px] font-Roboto">User@email.com</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 border-b border-gray-500 pb-2 divide-x divide-gray-500">
                                    <div>
                                        <label className="text-gray-300 text-[12px] font-Roboto">Ticket Type:</label>
                                        <p className="text-[10px] font-Roboto">VIP</p>
                                    </div>
                                    <div>
                                        <label className="text-gray-300 text-[12px] font-Roboto">Ticket for:</label>
                                        <p className="text-[15px] font-Roboto">1</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <label className="text-gray-300 text-[10px] font-Roboto">Special request?</label>
                                    <p className="text-gray-300 text-[10px] font-Roboto">Nil ? Or the user&apos;s sad story they write in there gets this whole space, Max of three rows</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[-150px]  place-items-center"><img className="w-[286px] h-[86px] relative" src="/Bar-Code.png" alt="Barcode" /></div>
                    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 mb-10 mt-16">
                    <Link href="/">
                        <button className="border border-cyan-500 w-full max-w-[296px] h-[48px] px-16 pt-4 pb-10 rounded-[8px] text-[#24A0B5]">Book Another Ticket</button>
                    </Link>
                    <button className="border border-cyan-500 w-full max-w-[296px] h-[48px] px-16 pt-4 pb-10 rounded-[8px] text-white bg-[#24A0B5]">Download Ticket</button>
                </div>
                </div>
                
            </div>
        );
    }