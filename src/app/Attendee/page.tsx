'use client'

import {  usePathname, useRouter, } from 'next/navigation';
import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";


export default function Next1() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [specialRequest, setSpecialRequest] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  usePathname();
  const router = useRouter(); // Ensure this is used within a valid Next.js component

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";
    if (!specialRequest.trim()) newErrors.specialRequest = "This field cannot be empty";
    if (!image) newErrors.image = "Please upload an image";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    alert("Form submitted successfully!");
    router.push("/ready");
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setImage(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      setImageUrl(data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="flex justify-evenly mt-8 border border-cyan-500 m-auto px-12 pt-5 pb-12 w-full max-w-[1220px] h-[76px] rounded-[24px]">
        <span><Image src="/Frame-1618871078-(1).svg" className="h-auto max-w-full"width={100} height={100} alt="Logo 1" /></span>
        <span><Image src="/Frame-1618871077.svg" className="h-auto max-w-full" width={250} height={250} alt="Logo 2" /></span>
        <div className="flex">
          <span>
            <button type="button" className="flex text-gray-900 bg-white border border-cyan-300 focus:outline-none hover:bg-gray-100 
            focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-0.1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <p className="mt-2">MY TICKETS</p>
              <svg viewBox="0 0 24 24" width={40} fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                <path d="M7 12L17 12M7 12L11 8M7 12L11 16" stroke="#000000"></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="content w-full max-w-[700px] h-auto text-white rounded-[40px] p-6 shadow-lg mx-auto border border-cyan-500 relative mt-20 mb-20 p-16">
        <div className="flex justify-between w-full">
          <p className="font-JejuMyeongjo text-[32px] text-left">Attendee Details</p>
          <p className="font-Roboto text-[16px] text-right">Step 2/3</p>
        </div>
        <div className="w-full"><Image src="/Progress-container.png"width={670} height={50} alt="Progress" /></div>
        <div className="content w-full h-auto text-white rounded-[32px] p-6 shadow-lg mx-auto border border-cyan-500 mt-10 mb-16 p-10">
          <p className="font-Roboto text-[16px]">Upload profile Photo</p>
          <div className="bg-[#000000] w-full h-[220px] opacity-80 mt-10 place-items-center text-center">
            <div className="w-[240px] h-[235px] px-7 py-24 bg-[#0E464F] text-white-500 border-4 border-cyan-500 rounded-[32px] text-center inline-block">
              <div className="w-8 h-10 ml-[58px]"><img src="cloud-uploading-svgrepo-com.svg" alt="Upload Icon" /></div>
              <input className="cursor-pointer" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={handleImageUpload} />
              <div className="mt-1 text-[8px] text-bg-[#0E464F] dark:text-gray-300" id="user_avatar_help"></div>
              <label className="font-Roboto text-[16px]">Drag & drop or click to upload</label>
              {errors.image && <p className="text-red-500">{errors.image}</p>}
            </div>
          </div>
        </div>
        <div className="border-none w-full bg-[#0E464F] h-1 rounded-[5px] mt-10 mb-6"></div>

        <form className="max-w-full mx-auto" onSubmit={handleSubmit}>
          <div className="mb-8">
            <label htmlFor="name" className="mb-2 text-md font-medium text-white-500 dark:text-white">Enter your name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="bg-[#07373F] border border-cyan-300 mt-4 text-white-500 text-md rounded-lg w-full p-2.5" />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-2 text-md font-medium text-white-500 dark:text-white">Enter your email*</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-[#07373F] border border-cyan-300 mt-4 text-white-500 text-md rounded-lg w-full p-2.5" placeholder="hello@avioflagos.io" required />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="specialRequest" className="mb-2 text-md font-medium text-white-500 dark:text-white">Special request?</label>
            <textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} id="specialRequest" className="bg-[#07373F] border border-cyan-300 mt-4 text-white-500 text-md rounded-lg w-full h-[127px] p-2.5" placeholder="Textarea" required />
            {errors.specialRequest && <p className="text-red-500">{errors.specialRequest}</p>}
          </div>

          <div className="md:flex sm:grid sm:gap-4 justify-evenly w-full">
            <Link href="/">
              <button type="button" className="border border-cyan-500 w-[296px] h-[48px] px-24 pt-4 pb-10 rounded-[8px] text-[#24A0B5]">Back</button>
            </Link>
            <button type="submit" className="border border-cyan-500 w-[296px] h-[48px] px-16 pt-4 pb-10 rounded-[8px] text-white bg-[#24A0B5]">Get My Free Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
}
