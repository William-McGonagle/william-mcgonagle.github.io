import { Drum, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";

export function Footer({}: {}) {
  return (
    <div className="w-full flex justify-center items-center p-12 flex-col">
      <div className="flex flex-row gap-3">
        <Link
          href="https://linkedin.com/in/william-mcgonagle"
          className="text-slate-500 hover:text-slate-600"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://github.com/william-mcgonagle"
          className="text-slate-500 hover:text-slate-600"
        >
          <Github />
        </Link>
        <Link
          href="https://www.instagram.com/william.mcgonagle"
          className="text-slate-500 hover:text-slate-600"
        >
          <Instagram />
        </Link>
        <Link
          href="https://medium.com/@william-mcgonagle"
          className="text-slate-500 hover:text-slate-600"
        >
          <Drum />
        </Link>
      </div>
      <div className="text-slate-500 font-poppins mt-3">
        © {new Date().getFullYear()}, William McGonagle.
      </div>
    </div>
  );
}
