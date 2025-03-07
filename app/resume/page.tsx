import { BlurBackground } from "@/components/blur-background";
import { DotBackground } from "@/components/dot-background";
import { Meteors } from "@/components/meteors";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const experiences: {
  title: string;
  position: string;
  description: string[];
  location: string;
  from: Date;
  to?: Date;
}[] = [
  {
    title: "Fox Corporation",
    position: "Business Intelligence Intern",
    location: "New York, NY",
    from: new Date("9/1/2024"),
    description: [
      "Generated analytical reports of viewership data and demographic trends to find improvements and performance indicators for foxnews.com, foxbusiness.com, and other Fox mobile apps.",
      "Automated creation of advertisement assessments for ad-sales and finance teams, allowing stakeholders to be notified whenever key performance milestones were hit.",
    ],
  },
  {
    title: "Goldman Sachs Asset Management",
    position: "Emerging Leaders Series Participant",
    location: "Jersey City, NJ",
    from: new Date("10/1/2024"),
    to: new Date("3/20/2025"),
    description: [
      "Developed foundational knowledge in portfolio management, risk analysis, and investment strategies, with a focus on both traditional and alternative asset classes.",
      "Engaged in case studies, real-world simulations, and mentorship to deepen understanding of market trends and industry skills, such as asset allocation and risk management.",
    ],
  },
  {
    title: "Fox Corporation",
    position: "Data Governance and Tagging Intern",
    location: "New York, NY",
    from: new Date("6/1/2024"),
    to: new Date("8/1/2024"),
    description: [
      "Worked with GPT-4.0 to build digital assistants that give institutional insights to various teams across the organization while ensuring data privacy. ",
      "Made decisions using statistical tools like A/B Tests, surveys, and interviews to discover the needs of each department and to develop plans to increase the productivity of individuals and teams.",
      "Trained in analytics software like Heap, Amplitude, and Adobe Analytics.",
    ],
  },
  {
    title: "College Canine",
    position: "Co-Founder and Chief Technology Officer",
    location: "Washington, DC",
    from: new Date("5/1/2024"),
    description: [
      "Founded program that connects students with local pet owners at 6+ Universities (Georgetown, Howard University, GW, American University, etc.), offering dog-walking and pet-sitting services.",
      "Generated 1000+ signups, 1500+ dog walks, and $40k in yearly revenue.",
      "Built algorithm and coded platform that matches pet owners with available college students for dog walks.",
      "Worked with Stripe, AWS, Google Cloud, Twilio, Next.js, Tailwind, and OAuth2.",
    ],
  },
  {
    title: "Georgetown Disruptive Technologies",
    position: "President",
    location: "Washington, DC",
    from: new Date("9/1/2023"),
    description: [
      "Designed Hoya Space, a social network for Georgetown students, which integrates dozens of University Services into one, and rebuilt our website to include member pages and events",
      "Led the launch of and managed speaker events initiative, which coordinates speaker events with White House offices, heads of industry in technology, law, and finance, and leaders in modern research. This program grew membership threefold, making GDT the 4th largest club on campus (125+ members)",
      "Built a Content Management System for University newspapers, generating $4,000 for the club endowment within two months",
    ],
  },
  {
    title: "Apollo Defense Group",
    position: "Chief Technical Officer",
    location: "Washington, DC",
    from: new Date("10/1/2023"),
    description: [
      "Programmed systems that are currently in use by the US military and billion-dollar, security-adjacent companies, managing 24 engineers from Georgetown, MIT, and Stanford",
      "Garnered $98,000 in funding from the Department of Defense to build a network of universities to be deployed for security purposes",
    ],
  },
  {
    title: "Fairfield Programming Association",
    position: "President and Founder",
    location: "Bridgeport, CT",
    from: new Date("10/1/2020"),
    to: new Date("8/1/2023"),
    description: [
      "Educated students by creating free educational resources, scholastic aptitude exams, programming competitions and other events in Computer Science.",
      "Led global development team of 18 people and spread charter programs to 16 states and three countries, providing free computer learning resources for over 1,100 children around the world",
      "Created an open-source video game and accompanying learning videos on how it was built, through a contract with $16.85 billion-dollar company, Unity Technologies",
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="w-screen min-h-screen p-3 pt-16">
        <div className="max-w-4xl mx-auto aspect-video flex justify-center items-center flex-col gap-3">
          <h1 className="font-bold font-poppins text-6xl text-center">
            My Resumé.
          </h1>
          <Link
            href="/resume.pdf"
            className="max-w-xl text-center text-sky-500 text-xl hover:underline hover:text-sky-600"
          >
            Download the PDF Version Here
          </Link>
        </div>
        {experiences.map((i, n) => (
          <div
            key={n}
            className={`mx-auto max-w-4xl flex flex-col ${
              n % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-6 mt-12`}
          >
            <div className="w-full">
              <div className="w-full flex flex-row">
                <div></div>
                <div className="w-full">
                  <h2 className="font-bold font-poppins text-2xl uppercase">
                    {i.title}
                  </h2>
                  <p className="text-xl font-poppins text-italic mb-3">
                    {i.position}
                  </p>
                </div>
                <div>
                  <p className="whitespace-nowrap text-xl text-italic text-right">
                    {i.location}
                  </p>
                  <p className="whitespace-nowrap text-md text-italic text-right font-bold">
                    {months[i.from.getMonth()]} {i.from.getFullYear()}
                    {i.to != undefined ? (
                      <>
                        {" "}
                        - {months[i.to.getMonth()]} {i.to.getFullYear()}
                      </>
                    ) : (
                      <> - Present</>
                    )}
                  </p>
                </div>
              </div>
              <ul className="text-md">
                {i.description.map((i, n) => (
                  <li className="list-disc ml-3" key={n}>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
