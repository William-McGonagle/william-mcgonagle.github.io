import { BlurBackground } from "@/components/blur-background";
import { DotBackground } from "@/components/dot-background";
import { Meteors } from "@/components/meteors";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Image from "next/image";
import ArticleCard from "@/components/article";

import Connecticut1 from "@/res/connecticut1.webp";
import Connecticut2 from "@/res/connecticut3.webp";
import Engineering1 from "@/res/engineering1.webp";
import Engineering2 from "@/res/engineering2.webp";
import Engineering3 from "@/res/engineering3.webp";

const articles = [
  {
    url: "https://www.ctinsider.com/westport/article/fairfield-programming-association-computer-science-18276679.php",
    title: "Fairfield County teens teach other students how to code",
    description:
      "WESTPORT — Computer scientists seek each other out. At least, that's what co-founder of the Fairfield Programming Association Neil Chaudhari says. It's a nonprofit started by Greens Farms Academy students dedicated to providing computer science education in Fairfield County, and will soon expand.",
    photo:
      "https://s.hdnux.com/photos/01/33/74/63/24104191/3/ratio3x2_960.webp",
    important: true,
  },
  {
    url: "https://www.gfacademy.org/community/news/single-post/~board/news/post/challenging-intellectual-property-in-the-coding-game-will-mcgonagle-23-and-neil-choudhari-24-found-a-non-profit-aimed-to-bring-equity-to-the-world-of-programming",
    title: "Challenging Intellectual Property in the Coding Game",
    description:
      "At seven years old, now senior Will McGonagle “feigned illness” to stay home from school. While this is not usually celebrated in GFA publications, Will’s intentions were (pretty) pure. “I wanted to learn how to make my own video games so that I could make some new friends,” he admits. When he Googled “how to make a video game” free online coding courses came up and in short order, he was a self-taught coder with a new passion.",
    photo:
      "https://s.hdnux.com/photos/01/33/74/64/24104192/3/ratio3x2_960.webp",
    important: false,
  },
  {
    url: "https://patch.com/connecticut/darien/fairfield-county-teens-look-educate-others-computer-science",
    title: "Fairfield County Teens Look To Educate Others In Computer Science",
    description:
      "DARIEN, CT — With technology seemingly ingrained in every aspect of life, the need for computer literacy has never been higher. Some local teenagers hope to fulfill that need through Fairfield Programing Association (FPA), a student-run nonprofit that aims to teach computer science to underserved students here in the United States and abroad.",
    photo:
      "https://patch.com/img/cdn20/users/24996209/20230804/013122/styles/patch_image/public/screen-shot-2023-08-03-at-114150-am-1___04132715699.jpg?width=1200",
    important: true,
  },
  {
    url: "https://www.gfacademy.org/community/news/single-post/~board/news/post/seniors-soloists-soar-at-upper-school-spring-concert",
    title: "Seniors, Soloists Soar at Upper School Spring Concert",
    description:
      "On Tuesday, May 16 the Upper School concert wowed audience members by featuring upbeat numbers and popular selections. It was a special evening for our senior GFA musicians including Wick Ackerman, Dylan Cofsky, Molly Duffy, Charles Henry, Elias Kennon, Will McGonagle, Tyler Shea, and Charlie Yates of the Wind Ensemble, LyNeta Brand, Kendall Caron-Quinn, Daniela Galik, Elizabeth Jones, Max Laferriere, Charles LaFreniere, Sadie Paulos...",
    photo:
      "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_5/v1684411795/greenfarms/fs140jel2jiuvyjqbsnt/USSpringConcert23-51.jpg",
    important: false,
  },
  {
    url: "https://06880danwoog.com/2023/07/28/gfa-programming-program-goes-global/",
    title: "Bridgeport-Local Programming Program Goes Global",
    description:
      "Neil Chaudhari started coding in 8th grade, the summer before entering Greens Farms Academy. He knows he’s lucky. Many schools don’t teach computer science at all. Computer literacy — including coding — are “so important,” Neil says. “It teaches analytical thinking and problem solving. Those skills are imperative to any student’s success.: So a couple of years ago he and a friend, William McGonagle, founded the Fairfield Programming Association. Neil is now a rising senior. William graduated, and is at Georgetown University. And FPA is flourishing.",
    photo:
      "https://i0.wp.com/06880danwoog.com/wp-content/uploads/2023/07/Fairfield-Programming-Association-teaching.jpg?resize=1024%2C821&ssl=1",
    important: true,
  },
  {
    url: "https://www.gfacademy.org/community/news/single-post/~board/news/post/coding-to-build-community",
    title: "Coding to Build Community in South-Western Connecticut",
    description:
      "Often, great ideas are born from the desire to fulfill a need. Computer science aficionados-turned-advocates Neil Chaudhari ’24 and junior Will McGonagle ’23 noticed that their shared passion for programming didn’t have much of a community presence, particularly among people their age. That, they decided, needed to change.",
    photo:
      "https://resources.finalsite.net/images/f_auto,q_auto/v1644949063/greenfarms/otdv3ly3winreahdllof/image0.jpg",
    important: false,
  },
];

const skills = [
  "Next.js",
  "Tailwind",
  "Typescript",
  "PostgreSQL",
  "Prisma",
  "Git + Github",
  "CI/CD",
  "Java + Kotlin",
  "Python",
  "C++",
  "Javascript",
  "C#",
  "CSS",
  "HTML",
  "Dart",
  "Figma",
  "Flutter",
  "Unity",
  "Microsoft Excel",
  "PHP",
  "React",
  "SASS",
  "RSS",
  "HTTP",
  "OpenGL",
  "Microsoft Word",
  "Bash",
  "C",
  "Microsoft Powerpoint",
];

const photos = [
  {
    main: Connecticut1,
    second: Connecticut2,
    // second:
    //   "https://images.unsplash.com/flagged/photo-1577288393957-49e76121a4bd",
    title: "I'm from Connecticut.",
    description:
      "We're known as the 'Nutmeg State', but we also have access to the beautiful sound.",
  },
  {
    main: "https://images.unsplash.com/photo-1695921417179-2b7f8c22989b",
    second: Engineering2,
    title: "I've always loved machines.",
    description:
      "Since I was a kid, I would take apart and fix broken nicknacks and devices.",
  },
  {
    second: Engineering3,
    // main: "https://images.unsplash.com/photo-1654350289588-50233e7f122e",
    main: "https://images.unsplash.com/photo-1654350414859-821b11f56fa7",

    title: "I go to Georgetown.",
    description:
      "Located in the Nation's Capital, I have gotten the opportunity to meet interesting people and experience cool new things.",
  },
  // {
  //   main: "https://images.unsplash.com/photo-1654350414859-821b11f56fa7",
  //   second: "https://images.unsplash.com/photo-1654350289588-50233e7f122e",
  //   title: "And I love it all!",
  //   description:
  //     "Located in the Nation's Capital, I have gotten the opportunity to meet interesting people and experience cool new things.",
  // },
];

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
            Where You&apos;ve Seen Me.
          </h2>
          <p className="max-w-md text-lg mb-6">
            Because of my work with the FPA, I have been in the news a few
            times. Below is a collection of a few times that I have made it into
            the local news.
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 gap-y-16">
            {articles.map((i, n) => {
              return <ArticleCard key={n} {...i} />;
            })}
          </div>
        </div>
      </section>
      <section className="p-3 mt-12">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="font-bold font-poppins text-4xl mb-3 mt-12">
            My Skills.
          </h2>
          <p className="max-w-md text-lg mb-6">
            I learned to code when I was seven years old, feigning illness so I
            could stay home from school to learn Javascript and build my own
            video game.
          </p>
          <div className="w-full">
            {skills.map((i, n) => {
              return (
                <span
                  key={n}
                  className="inline-block font-poppins p-2 px-3 border rounded-full bg-white mx-1 my-1 whitespace-nowrap"
                >
                  {i}
                </span>
              );
            })}
          </div>
        </div>
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
            {photos.map((i, n) => {
              return (
                <>
                  {n % 2 == 1 ? (
                    <Image
                      width="800"
                      height="800"
                      className="hidden md:flex col-span-2 rounded-xl aspect-[4/3] object-cover"
                      src={i.second}
                      alt=""
                    />
                  ) : (
                    <></>
                  )}
                  <div className="flex flex-col col-span-1">
                    <Image
                      width="800"
                      height="800"
                      className="aspect-video md:aspect-square rounded-xl object-cover"
                      src={i.main}
                      alt=""
                    />
                    <div className="h-full bottom-0 flex flex-col gap-3 p-2 py-9 md:py-2 justify-center">
                      <h2 className="font-bold font-poppins text-3xl">
                        {i.title}
                      </h2>
                      <p className="text-lg">{i.description}</p>
                    </div>
                  </div>
                  {n % 2 == 0 ? (
                    <Image
                      width="800"
                      height="800"
                      className="hidden md:flex col-span-2 rounded-xl aspect-[4/3] object-cover"
                      src={i.second}
                      alt=""
                    />
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
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
