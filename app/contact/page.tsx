import { BlurBackground } from "@/components/blur-background";
import { DotBackground } from "@/components/dot-background";
import { Meteors } from "@/components/meteors";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center p-3">
        <div
          style={{
            backgroundBlendMode: "lighten",
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.13' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E") rgba(255, 255, 255, 0.75)`,
          }}
          className="border rounded-xl max-w-md w-full h-min p-6"
        >
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
