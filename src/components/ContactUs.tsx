"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";

function ContactUs() {
  return (
    <div className=" h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-20 mb-5">
          Contact Us
        </h1>

        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-2">
          We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
        </p>
        <input
          type="text"
          placeholder="Enter your email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4 bg-clip-text"
        />
        <textarea
          cols={30}
          rows={5}
          placeholder="Enter your message here"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4 bg-clip-text"
        />
      <div className="mt-5">
        <Link
          href={"/courses"}
          className=" px-4 py-2 rounded border border-neutral-600 text-white bg-teal-600 hover:bg-gray-100 trasition duration-200 font-bold"
        >
          Send message
        </Link>
      </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ContactUs;
