import { Drum, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { PinContainer } from "./3d-pin";
import { parse } from "node-html-parser";

export default async function ArticleCard({
  url,
  photo,
  title,
  description,
  important,
}: {
  url: string;
  photo: string;
  title: string;
  description: string;
  important: boolean;
}) {
  return (
    <Link className={important ? "" : "hidden md:block"} href={url}>
      <PinContainer title={new URL(url).hostname} href={url}>
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[19rem] h-[20rem] ">
          <img
            className="flex flex-1 w-full rounded-lg aspect-video object-cover"
            src={photo}
          />
          <h3 className="max-w-xs mt-2 font-bold line-clamp-2 text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal text-sm line-clamp-3 text-slate-500">
            {description}
          </div>
        </div>
      </PinContainer>
    </Link>
  );
}
