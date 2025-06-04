import React from "react";
import { FOOTER_LINKS } from "../../utils/data";

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col gap-y-5">
    <p className="font-bold">{title}</p>
    <div className="flex flex-col gap-y-3 font-medium">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href || "#"}
          className="hover:underline underline-offset-2"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white-2">
      <div className="container mx-auto py-10 md:py-24 px-14">
        <div className="flex items-start justify-between flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="flex flex-col gap-y-3 md:gap-y-5">
            <img src="" alt="Trashure Logo" className="w-44" />
            <p className="font-medium leading-7 text-gray-700">
              Empowering communities with smart waste management solutions.
            </p>
            <p className="font-medium">&copy; Copyrights Trashure.</p>
          </div>
          <div className="flex flex-wrap gap-y-7 gap-x-8 sm:gap-x-16 md:gap-x-24 items-center justify-between">
            <FooterSection title="Company" links={FOOTER_LINKS.companies} />
            <FooterSection title="Developer" links={FOOTER_LINKS.developers} />
          </div>
        </div>
      </div>
    </footer>
  );
}