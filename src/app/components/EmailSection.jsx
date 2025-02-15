"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-10 md:my-10 py-20 gap-6 relative px-4 sm:px-6"
    >
      {/* Background Gradient */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Contact Info */}
      <div className="z-10 w-full">
        <h5 className="text-2xl font-semibold text-white mb-3 text-center md:text-left">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-5 text-lg leading-relaxed text-center md:text-left break-words">
          I&apos;m currently looking for new opportunities, and my inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        {/* Social Links */}
        <div className="socials flex justify-center md:justify-start items-center gap-3">
          <Link href="https://github.com/Dev-Shannn" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={34} height={34} className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://www.linkedin.com/in/nishant-prakash-pandey" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={34} height={34} className="hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
