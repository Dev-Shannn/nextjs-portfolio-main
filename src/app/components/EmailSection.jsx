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
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative"
    >
      {/* Background Gradient */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Contact Info */}
      <div className="z-10 max-w-full">
        <h5 className="text-2xl font-semibold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-6 text-lg leading-normal">
          I&apos;m currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        {/* Social Links */}
        <div className="socials flex items-center gap-4">
          <Link href="https://github.com/Dev-Shannn" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" width={36} height={36} className="hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://www.linkedin.com/in/nishant-prakash-pandey" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={36} height={36} className="hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
