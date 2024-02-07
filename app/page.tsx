import { BlurBackground } from "@/components/blur-background";
import { DotBackground } from "@/components/dot-background";
import { Meteors } from "@/components/meteors";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex items-center justify-center p-3">
        <BlurBackground
          colors={["#3333FF", "#FF3333", "#33FF33"]}
          className="max-w-6xl w-full mx-auto aspect-video rounded-xl m-3"
        >
          <Meteors
            className="absolute left-0 right-0 top-0 bottom-0"
            number={20}
          ></Meteors>
          <div className="z-20 w-full aspect-video text-white flex items-center justify-center flex-col p-3 gap-2">
            <h1 className="font-bold font-poppins text-4xl md:text-5xl lg:text-6xl text-center">
              Hey, I&apos;m Will.
            </h1>
            <p className="text-2xl font-poppins md:text-3xl lg:text-4xl text-center">
              A developer, writer, and sailor.
            </p>
          </div>
        </BlurBackground>
      </section>
      <section className="p-3">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="font-bold font-poppins text-4xl mb-3 mt-12">
            A Little About Me.
          </h2>
          <p className="max-w-md text-lg mb-6">
            A picture speaks a thousand words, so consider this a{" "}
            <span className="inline md:hidden">3,000</span>
            <span className="hidden md:inline">6,000</span> word writeup about
            my life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 mx-auto gap-3">
            <div className="flex flex-col col-span-1">
              <img
                className="aspect-video md:aspect-square rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1628272802060-c10ca8869576?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbm5lY3RpY3V0fGVufDB8fDB8fHww"
                alt=""
              />
              <div className="h-full bottom-0 flex flex-col gap-3 p-2 py-9 md:py-2 justify-center">
                <h2 className="font-bold font-poppins text-3xl">
                  I&apos;m from Connecticut.
                </h2>
                <p className="text-lg">
                  We&apos;re known as the &apos;Nutmeg State&apos;, but we also
                  have access to the beautiful sound.
                </p>
              </div>
            </div>
            <img
              className="hidden md:flex col-span-2 rounded-xl aspect-[4/3] object-cover"
              src="https://images.unsplash.com/flagged/photo-1577288393957-49e76121a4bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbm5lY3RpY3V0fGVufDB8fDB8fHww"
              alt=""
            />
            <img
              className="hidden md:flex col-span-2 rounded-xl aspect-[4/3] object-cover"
              src="https://images.unsplash.com/photo-1695921417179-2b7f8c22989b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="flex flex-col col-span-1">
              <img
                className="aspect-video md:aspect-square rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1644260318860-0726b0bdf348?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="h-full bottom-0 flex flex-col gap-3 p-2 py-9 md:py-2 justify-center">
                <h2 className="font-bold font-poppins text-3xl">
                  We have cities too.
                </h2>
                <p className="text-lg">
                  This is Bridgeport, Connecticut&mdash; the city that I was
                  born in, and live today.
                </p>
              </div>
            </div>
            <div className="flex flex-col col-span-1">
              <img
                className="aspect-video md:aspect-square rounded-xl object-cover"
                src="https://images.unsplash.com/photo-1654350414859-821b11f56fa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2VvcmdldG93biUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="h-full bottom-0 flex flex-col gap-3 p-2 py-9 md:py-2 justify-center">
                <h2 className="font-bold font-poppins text-3xl">
                  I attend Georgetown.
                </h2>
                <p className="text-lg">
                  Located in the Nation&apos;s Capital, I have gotten the
                  opportunity to meet interesting people and experience cool new
                  things.
                </p>
              </div>
            </div>
            <img
              className="hidden md:flex col-span-2 rounded-xl aspect-[4/3] object-cover"
              src="https://images.unsplash.com/photo-1654350289588-50233e7f122e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2VvcmdldG93biUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </section>
      <hr className="my-12" />
      <section>
        <div className="max-w-2xl mx-auto p-4">
          <h2 className="font-bold font-poppins text-4xl mb-3 mt-12">
            Finally, My Favorite Poem.
          </h2>
          <p className="text-lg mb-12">
            I love three poems: &apos;Do Not Go Gentle&apos;, &apos;Annabel
            Lee&apos;, and &apos;Do Not Stand At My Grave and Weep&apos;. But,
            by far &apos;Do Not Go Gentle&apos; is my favorite.
          </p>
          <TextGenerateEffect
            paragraph={[
              "Do not go gentle into that good night,",
              "Old age should burn and rave at close of day;",
              "Rage, rage against the dying of the light.",
              "",
              "Though wise men at their end know dark is right,",
              "Because their words had forked no lightning they",
              "Do not go gentle into that good night.",
              "",
              "Good men, the last wave by, crying how bright",
              "Their frail deeds might have danced in a green bay,",
              "Rage, rage against the dying of the light.",
              "",
              "Wild men who caught and sang the sun in flight,",
              "And learn, too late, they grieved it on its way,",
              "Do not go gentle into that good night.",
              "",
              "Grave men, near death, who see with blinding sight",
              "Blind eyes could blaze like meteors and be gay,",
              "Rage, rage against the dying of the light.",
              "",
              "And you, my father, there on the sad height,",
              "Curse, bless, me now with your fierce tears, I pray.",
              "Do not go gentle into that good night.",
              "Rage, rage against the dying of the light.",
            ]}
          />
        </div>
      </section>
    </>
  );
}
