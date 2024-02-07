import { BlurBackground } from "@/components/blur-background";
import { DotBackground } from "@/components/dot-background";
import { Meteors } from "@/components/meteors";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center p-3">
        <div className="border rounded-xl max-w-md w-full bg-white h-min p-6">
          <h1 className="font-bold font-poppins text-xl">Contact Me.</h1>
          <p>
            If you want to reach out about anything, just send me an email. I
            check my email daily and get notified, so I should respond pretty
            quick.
          </p>
          <hr className="my-3" />
          <a
            href="mailto:wpm45@georgetown.edu"
            className="block mx-auto hover:underline w-min"
          >
            wpm45@georgetown.edu
          </a>
        </div>
      </section>
    </>
  );
}
