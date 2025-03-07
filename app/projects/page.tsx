import { BlurBackground } from "@/components/blur-background";
import { DotBackground } from "@/components/dot-background";
import { Meteors } from "@/components/meteors";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import Image from "next/image";
import Link from "next/link";

const projects: {
  src?: string;
  logo?: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    logo: "https://ark-vet-demo.vercel.app/logo.svg",
    link: "https://ark-vet-demo.vercel.app",
    title: "Acme Vet.",
    description:
      "I created Acme Vet, a cloud-based platform that helps veterinary practices manage appointments, patient records, billing, and client communications. Features include a user-friendly calendar for scheduling, secure electronic medical records accessible from anywhere, and automated client communications like appointment reminders and follow-ups. ",
    tags: ["Next.js", "Tailwind", "Typescript", "Prisma", "PostgreSQL"],
  },
  {
    logo: "https://ark.collegecanine.com/logo-dark.svg",
    link: "https://ark.collegecanine.com",
    title: "Ark Gateway.",
    description:
      "Ark Gateway is a veterinary insurance platform that streamlines interactions between insurance providers and veterinarians. The platform offers secure transactions, integration capabilities, flexible user management, and real-time fraud detection using AI. Ark provides detailed reporting and analytics, along with comprehensive documentation and customer support for clients.",
    tags: ["Next.js", "Tailwind", "Typescript", "Prisma", "PostgreSQL"],
  },
  {
    logo: "https://pressxp.com/logo.svg",
    link: "https://pressxp.com",
    title: "PressXP.",
    description:
      "PressXP is an online gaming platform that offers users a personalized and interactive experience. Players can create accounts to access features such as commenting on games, receiving tailored game recommendations, and connecting with friends to share gaming experiences. ",
    tags: ["Next.js", "Tailwind", "Typescript", "Prisma", "PostgreSQL"],
  },
  {
    logo: "https://collegecanine.com/logo.png",
    link: "https://collegecanine.com",
    title: "College Canine.",
    description:
      "In May 2024, I launched College Canine, a platform connecting students with dog owners seeking reliable walking services. Within two months, the platform expanded to over 50 schools nationwide. I integrated features like real-time tracking, in-app messaging, user reviews, and Stripe Connect for secure payments, enhancing the overall user experience.",
    tags: ["Next.js", "Tailwind", "Typescript", "Prisma", "PostgreSQL"],
  },
  {
    src: "https://reroto.com/thumbnail.png",
    link: "https://reroto.com",
    title: "ReRoto.",
    description:
      "The second project that I worked on during my time at GDT was the ReRoto newspaper management system. It is currently used by a handful of college newspapers to manage their web presence, publication processes, and broadsheet printing.",
    tags: ["Next.js", "Tailwind", "Typescript", "Prisma", "PostgreSQL"],
  },
  {
    src: "https://assets.vercel.com/image/upload/front/vercel/twitter-card.png",
    link: "https://dictionary.gtowntech.org",
    title: "GU Student Dictionary.",
    description:
      "GUSD or Georgetown University Student Dictionary uses natural language processing and Generative Language Models to map the English language with word, definitions, images, synonyms, pronounciations, history, and more.",
    tags: ["Llama 2", "NLP", "Next.js", "Tailwind", "Memcached", "Vercel"],
  },
  {
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIxNiAxMDAiIGZpbGw9Im5vbmUiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPCEtLSA8cmVjdCB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEwMCIgZmlsbD0id2hpdGUiLz4gLS0+CiAgICA8IS0tIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPiAtLT4KICAgIDxwYXRoIGQ9Ik00Mi43NjE3IDMxLjQzNUM0NS42MjkyIDMwLjY3OTEgNDguNjc2NCAzMCA1MC41IDMwQzUyLjMyMzYgMzAgNTUuMzcwOCAzMC42NzkxIDU4LjIzODMgMzEuNDM1QzYxLjE3MTkgMzIuMjAzNyA2NC4xMjkyIDMzLjExMzQgNjUuODY4MiAzMy42NjQ0QzY2LjU5NTMgMzMuODk3MiA2Ny4yMzk5IDM0LjMyNDEgNjcuNzI3OSAzNC44OTYyQzY4LjIxNiAzNS40NjgyIDY4LjUyNzcgMzYuMTYyMSA2OC42MjczIDM2Ljg5ODJDNzAuMjAyNSA0OC4zNzA2IDY2LjU0NzQgNTYuODcyOSA2Mi4xMTI3IDYyLjQ5NzZDNjAuMjMyMiA2NC45MDM4IDU3Ljk4OTggNjcuMDIyNiA1NS40NjA2IDY4Ljc4MzRDNTQuNTg2MSA2OS4zOTI3IDUzLjY1OTUgNjkuOTI4NSA1Mi42OTA5IDcwLjM4NUM1MS45NTA5IDcwLjcyMzIgNTEuMTU1NCA3MSA1MC41IDcxQzQ5Ljg0NDYgNzEgNDkuMDUxNyA3MC43MjMyIDQ4LjMwOTEgNzAuMzg1QzQ3LjM0MDUgNjkuOTI4NiA0Ni40MTM5IDY5LjM5MjggNDUuNTM5NCA2OC43ODM0QzQzLjAxMDIgNjcuMDIyNiA0MC43Njc5IDY0LjkwMzcgMzguODg3MyA2Mi40OTc2QzM0LjQ1MjYgNTYuODcyOSAzMC43OTc1IDQ4LjM3MDYgMzIuMzcyNyAzNi44OTgyQzMyLjQ3MjMgMzYuMTYyMSAzMi43ODQgMzUuNDY4MiAzMy4yNzIxIDM0Ljg5NjJDMzMuNzYwMSAzNC4zMjQxIDM0LjQwNDcgMzMuODk3MiAzNS4xMzE4IDMzLjY2NDRDMzcuNjU2MiAzMi44NjE4IDQwLjIwMDMgMzIuMTE4NSA0Mi43NjE3IDMxLjQzNVoiIGZpbGw9IiMwRjAwNkMiLz4KICAgIDxwYXRoIGQ9Ik00NC4wMTY2IDM0LjIyNUM0Ni40MTkxIDMzLjU3OTcgNDguOTcyMSAzMyA1MC41IDMzQzUyLjAyNzkgMzMgNTQuNTgwOSAzMy41Nzk3IDU2Ljk4MzQgMzQuMjI1QzU5LjQ0MTMgMzQuODgxMiA2MS45MTkxIDM1LjY1NzggNjMuMzc2MSAzNi4xMjgxQzYzLjk4NTIgMzYuMzI2OSA2NC41MjUzIDM2LjY5MTMgNjQuOTM0MiAzNy4xNzk3QzY1LjM0MzEgMzcuNjY4IDY1LjYwNDMgMzguMjYwNCA2NS42ODc4IDM4Ljg4ODdDNjcuMDA3NSA0OC42ODIyIDYzLjk0NTEgNTUuOTQwMyA2MC4yMjk2IDYwLjc0MTlDNTguNjU0IDYyLjc5NTkgNTYuNzc1MyA2NC42MDQ3IDU0LjY1NjIgNjYuMTA3OEM1My45MjM1IDY2LjYyOCA1My4xNDcxIDY3LjA4NTMgNTIuMzM1NiA2Ny40NzVDNTEuNzE1NiA2Ny43NjM3IDUxLjA0OTEgNjggNTAuNSA2OEM0OS45NTA5IDY4IDQ5LjI4NjYgNjcuNzYzNyA0OC42NjQ0IDY3LjQ3NUM0Ny44NTI5IDY3LjA4NTQgNDcuMDc2NSA2Ni42MjggNDYuMzQzOCA2Ni4xMDc4QzQ0LjIyNDggNjQuNjA0NiA0Mi4zNDYxIDYyLjc5NTggNDAuNzcwNCA2MC43NDE5QzM3LjA1NDkgNTUuOTQwMyAzMy45OTI1IDQ4LjY4MjIgMzUuMzEyMiAzOC44ODg3QzM1LjM5NTcgMzguMjYwNCAzNS42NTY5IDM3LjY2OCAzNi4wNjU4IDM3LjE3OTdDMzYuNDc0NyAzNi42OTEzIDM3LjAxNDggMzYuMzI2OSAzNy42MjM5IDM2LjEyODFDMzkuNzM5IDM1LjQ0MyA0MS44NzA1IDM0LjgwODUgNDQuMDE2NiAzNC4yMjVaIiBmaWxsPSJ3aGl0ZSIvPgogICAgPHJlY3QgeD0iNDkiIHk9IjMyIiB3aWR0aD0iMyIgaGVpZ2h0PSIzNyIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTQwIDUwSDYxVjUzSDQwVjUwWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM4IDQxSDYzVjQ0SDM4VjQxWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTY3IDM4SDgxVjQxSDY3VjM4WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTY3IDQ0SDc5VjQ3SDY3VjQ0WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTY2IDUwSDc3VjUzSDY2VjUwWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM0IDM4SDIwVjQxSDM0VjM4WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM0IDQ0SDIyVjQ3SDM0VjQ0WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM1IDUwSDI0VjUzSDM1VjUwWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTExMC4zNCA2My41MzZIMTE1LjA0OFY2NkgxMDEuNDA4VjYzLjUzNkgxMDUuNDEyVjM3LjY2NEgxMDEuNDA4VjM1LjJIMTI1LjIxMlY0Mi40MTZIMTIyLjM5NlYzOC42MzJMMTIxLjUxNiAzNy42NjRIMTEwLjM0VjQ5LjcySDExOC4zMDRMMTE4Ljk2NCA0OS4wNlY0Ni45NDhIMTIxLjc4VjU1SDExOC45NjRWNTIuODg4TDExOC4zMDQgNTIuMTg0SDExMC4zNFY2My41MzZaTTEyOC44MjIgMzcuNjY0VjM1LjJIMTMzLjM5OEMxMzQuNzE4IDM1LjIgMTM2LjE0MSAzNS4xNDEzIDEzNy42NjYgMzUuMDI0QzEzOS4yMjEgMzQuOTA2NyAxNDAuNzE3IDM0Ljg0OCAxNDIuMTU0IDM0Ljg0OEMxNDMuNzY3IDM0Ljg0OCAxNDUuMzUxIDM1LjAwOTMgMTQ2LjkwNiAzNS4zMzJDMTQ4LjQ2MSAzNS42MjUzIDE0OS44MzkgMzYuMTM4NyAxNTEuMDQyIDM2Ljg3MkMxNTIuMjQ1IDM3LjYwNTMgMTUzLjIxMyAzOC41ODggMTUzLjk0NiAzOS44MkMxNTQuNzA5IDQxLjAyMjcgMTU1LjA5IDQyLjUzMzMgMTU1LjA5IDQ0LjM1MkMxNTUuMDkgNDYuMDgyNyAxNTQuNzA5IDQ3LjU3ODcgMTUzLjk0NiA0OC44NEMxNTMuMTgzIDUwLjA3MiAxNTIuMTcxIDUxLjA4NCAxNTAuOTEgNTEuODc2QzE0OS42NzggNTIuNjY4IDE0OC4yNDEgNTMuMjU0NyAxNDYuNTk4IDUzLjYzNkMxNDQuOTg1IDU0LjAxNzMgMTQzLjMxMyA1NC4yMDggMTQxLjU4MiA1NC4yMDhDMTQxLjQwNiA1NC4yMDggMTQxLjE0MiA1NC4yMDggMTQwLjc5IDU0LjIwOEMxNDAuNDM4IDU0LjIwOCAxNDAuMDU3IDU0LjIwOCAxMzkuNjQ2IDU0LjIwOEMxMzkuMjY1IDU0LjE3ODcgMTM4Ljg5OCA1NC4xNDkzIDEzOC41NDYgNTQuMTJDMTM4LjE5NCA1NC4wOTA3IDEzNy45MyA1NC4wNjEzIDEzNy43NTQgNTQuMDMyVjYzLjUzNkgxNDIuMTU0VjY2SDEyOC44MjJWNjMuNTM2SDEzMi44MjZWMzcuNjY0SDEyOC44MjJaTTEzNy43NTQgNTEuNTI0QzEzNy45MDEgNTEuNTgyNyAxMzguMTIxIDUxLjYyNjcgMTM4LjQxNCA1MS42NTZDMTM4LjczNyA1MS42NTYgMTM5LjA3NCA1MS42NzA3IDEzOS40MjYgNTEuN0MxMzkuNzc4IDUxLjcyOTMgMTQwLjExNSA1MS43NDQgMTQwLjQzOCA1MS43NDRDMTQwLjc5IDUxLjc0NCAxNDEuMDU0IDUxLjc0NCAxNDEuMjMgNTEuNzQ0QzE0Mi4zNzQgNTEuNzQ0IDE0My40NDUgNTEuNjEyIDE0NC40NDIgNTEuMzQ4QzE0NS40NjkgNTEuMDU0NyAxNDYuMzYzIDUwLjYxNDcgMTQ3LjEyNiA1MC4wMjhDMTQ3Ljg4OSA0OS40NDEzIDE0OC40OSA0OC42Nzg3IDE0OC45MyA0Ny43NEMxNDkuMzcgNDYuODAxMyAxNDkuNTkgNDUuNjcyIDE0OS41OSA0NC4zNTJDMTQ5LjU5IDQxLjk0NjcgMTQ4LjgyNyA0MC4xNzIgMTQ3LjMwMiAzOS4wMjhDMTQ1LjgwNiAzNy44ODQgMTQzLjc1MyAzNy4zMTIgMTQxLjE0MiAzNy4zMTJDMTQwLjM1IDM3LjMxMiAxMzkuNjkgMzcuMzQxMyAxMzkuMTYyIDM3LjRDMTM4LjYzNCAzNy40MjkzIDEzOC4xNjUgMzcuNDg4IDEzNy43NTQgMzcuNTc2VjUxLjUyNFpNMTYzLjg4OSA2NkgxNTMuMTA5VjYzLjUzNkgxNTYuNTQxTDE2Ny45MzcgMzUuMkgxNzIuNjAxTDE4My4wMjkgNjMuNTM2SDE4Ni4zMjlWNjZIMTczLjc0NVY2My41MzZIMTc3LjY2MUwxNzQuODAxIDU1Ljc5MkgxNjMuMDk3TDE2MC4xMDUgNjMuNTM2SDE2My44ODlWNjZaTTE2NC4xMDkgNTMuMzI4SDE3NC4wNTNMMTcwLjQ0NSA0My4xNjRMMTY5LjM0NSAzOC41SDE2OS4xNjlMMTY3Ljg5MyA0My4yNTJMMTY0LjEwOSA1My4zMjhaIiBmaWxsPSIjMEYwMDZDIi8+Cjwvc3ZnPgo=",
    link: "https://fairfieldprogramming.org",
    title: "Fairfield Programming Platform.",
    description:
      "During winter break my freshman year, I began working on the digital platform for the Fairfield Programming Association. Currently, the platform has functionality for creating and reading courses, but we are waiting until the Summer to add content.",
    tags: ["Next.js", "Tailwind", "Typescript", "Prisma", "PostgreSQL"],
  },
  {
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIxNiAxMDAiIGZpbGw9Im5vbmUiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPCEtLSA8cmVjdCB3aWR0aD0iMjE2IiBoZWlnaHQ9IjEwMCIgZmlsbD0id2hpdGUiLz4gLS0+CiAgICA8IS0tIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPiAtLT4KICAgIDxwYXRoIGQ9Ik00Mi43NjE3IDMxLjQzNUM0NS42MjkyIDMwLjY3OTEgNDguNjc2NCAzMCA1MC41IDMwQzUyLjMyMzYgMzAgNTUuMzcwOCAzMC42NzkxIDU4LjIzODMgMzEuNDM1QzYxLjE3MTkgMzIuMjAzNyA2NC4xMjkyIDMzLjExMzQgNjUuODY4MiAzMy42NjQ0QzY2LjU5NTMgMzMuODk3MiA2Ny4yMzk5IDM0LjMyNDEgNjcuNzI3OSAzNC44OTYyQzY4LjIxNiAzNS40NjgyIDY4LjUyNzcgMzYuMTYyMSA2OC42MjczIDM2Ljg5ODJDNzAuMjAyNSA0OC4zNzA2IDY2LjU0NzQgNTYuODcyOSA2Mi4xMTI3IDYyLjQ5NzZDNjAuMjMyMiA2NC45MDM4IDU3Ljk4OTggNjcuMDIyNiA1NS40NjA2IDY4Ljc4MzRDNTQuNTg2MSA2OS4zOTI3IDUzLjY1OTUgNjkuOTI4NSA1Mi42OTA5IDcwLjM4NUM1MS45NTA5IDcwLjcyMzIgNTEuMTU1NCA3MSA1MC41IDcxQzQ5Ljg0NDYgNzEgNDkuMDUxNyA3MC43MjMyIDQ4LjMwOTEgNzAuMzg1QzQ3LjM0MDUgNjkuOTI4NiA0Ni40MTM5IDY5LjM5MjggNDUuNTM5NCA2OC43ODM0QzQzLjAxMDIgNjcuMDIyNiA0MC43Njc5IDY0LjkwMzcgMzguODg3MyA2Mi40OTc2QzM0LjQ1MjYgNTYuODcyOSAzMC43OTc1IDQ4LjM3MDYgMzIuMzcyNyAzNi44OTgyQzMyLjQ3MjMgMzYuMTYyMSAzMi43ODQgMzUuNDY4MiAzMy4yNzIxIDM0Ljg5NjJDMzMuNzYwMSAzNC4zMjQxIDM0LjQwNDcgMzMuODk3MiAzNS4xMzE4IDMzLjY2NDRDMzcuNjU2MiAzMi44NjE4IDQwLjIwMDMgMzIuMTE4NSA0Mi43NjE3IDMxLjQzNVoiIGZpbGw9IiMwRjAwNkMiLz4KICAgIDxwYXRoIGQ9Ik00NC4wMTY2IDM0LjIyNUM0Ni40MTkxIDMzLjU3OTcgNDguOTcyMSAzMyA1MC41IDMzQzUyLjAyNzkgMzMgNTQuNTgwOSAzMy41Nzk3IDU2Ljk4MzQgMzQuMjI1QzU5LjQ0MTMgMzQuODgxMiA2MS45MTkxIDM1LjY1NzggNjMuMzc2MSAzNi4xMjgxQzYzLjk4NTIgMzYuMzI2OSA2NC41MjUzIDM2LjY5MTMgNjQuOTM0MiAzNy4xNzk3QzY1LjM0MzEgMzcuNjY4IDY1LjYwNDMgMzguMjYwNCA2NS42ODc4IDM4Ljg4ODdDNjcuMDA3NSA0OC42ODIyIDYzLjk0NTEgNTUuOTQwMyA2MC4yMjk2IDYwLjc0MTlDNTguNjU0IDYyLjc5NTkgNTYuNzc1MyA2NC42MDQ3IDU0LjY1NjIgNjYuMTA3OEM1My45MjM1IDY2LjYyOCA1My4xNDcxIDY3LjA4NTMgNTIuMzM1NiA2Ny40NzVDNTEuNzE1NiA2Ny43NjM3IDUxLjA0OTEgNjggNTAuNSA2OEM0OS45NTA5IDY4IDQ5LjI4NjYgNjcuNzYzNyA0OC42NjQ0IDY3LjQ3NUM0Ny44NTI5IDY3LjA4NTQgNDcuMDc2NSA2Ni42MjggNDYuMzQzOCA2Ni4xMDc4QzQ0LjIyNDggNjQuNjA0NiA0Mi4zNDYxIDYyLjc5NTggNDAuNzcwNCA2MC43NDE5QzM3LjA1NDkgNTUuOTQwMyAzMy45OTI1IDQ4LjY4MjIgMzUuMzEyMiAzOC44ODg3QzM1LjM5NTcgMzguMjYwNCAzNS42NTY5IDM3LjY2OCAzNi4wNjU4IDM3LjE3OTdDMzYuNDc0NyAzNi42OTEzIDM3LjAxNDggMzYuMzI2OSAzNy42MjM5IDM2LjEyODFDMzkuNzM5IDM1LjQ0MyA0MS44NzA1IDM0LjgwODUgNDQuMDE2NiAzNC4yMjVaIiBmaWxsPSJ3aGl0ZSIvPgogICAgPHJlY3QgeD0iNDkiIHk9IjMyIiB3aWR0aD0iMyIgaGVpZ2h0PSIzNyIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTQwIDUwSDYxVjUzSDQwVjUwWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM4IDQxSDYzVjQ0SDM4VjQxWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTY3IDM4SDgxVjQxSDY3VjM4WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTY3IDQ0SDc5VjQ3SDY3VjQ0WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTY2IDUwSDc3VjUzSDY2VjUwWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM0IDM4SDIwVjQxSDM0VjM4WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM0IDQ0SDIyVjQ3SDM0VjQ0WiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTM1IDUwSDI0VjUzSDM1VjUwWiIgZmlsbD0iIzBGMDA2QyIvPgogICAgPHBhdGggZD0iTTExMC4zNCA2My41MzZIMTE1LjA0OFY2NkgxMDEuNDA4VjYzLjUzNkgxMDUuNDEyVjM3LjY2NEgxMDEuNDA4VjM1LjJIMTI1LjIxMlY0Mi40MTZIMTIyLjM5NlYzOC42MzJMMTIxLjUxNiAzNy42NjRIMTEwLjM0VjQ5LjcySDExOC4zMDRMMTE4Ljk2NCA0OS4wNlY0Ni45NDhIMTIxLjc4VjU1SDExOC45NjRWNTIuODg4TDExOC4zMDQgNTIuMTg0SDExMC4zNFY2My41MzZaTTEyOC44MjIgMzcuNjY0VjM1LjJIMTMzLjM5OEMxMzQuNzE4IDM1LjIgMTM2LjE0MSAzNS4xNDEzIDEzNy42NjYgMzUuMDI0QzEzOS4yMjEgMzQuOTA2NyAxNDAuNzE3IDM0Ljg0OCAxNDIuMTU0IDM0Ljg0OEMxNDMuNzY3IDM0Ljg0OCAxNDUuMzUxIDM1LjAwOTMgMTQ2LjkwNiAzNS4zMzJDMTQ4LjQ2MSAzNS42MjUzIDE0OS44MzkgMzYuMTM4NyAxNTEuMDQyIDM2Ljg3MkMxNTIuMjQ1IDM3LjYwNTMgMTUzLjIxMyAzOC41ODggMTUzLjk0NiAzOS44MkMxNTQuNzA5IDQxLjAyMjcgMTU1LjA5IDQyLjUzMzMgMTU1LjA5IDQ0LjM1MkMxNTUuMDkgNDYuMDgyNyAxNTQuNzA5IDQ3LjU3ODcgMTUzLjk0NiA0OC44NEMxNTMuMTgzIDUwLjA3MiAxNTIuMTcxIDUxLjA4NCAxNTAuOTEgNTEuODc2QzE0OS42NzggNTIuNjY4IDE0OC4yNDEgNTMuMjU0NyAxNDYuNTk4IDUzLjYzNkMxNDQuOTg1IDU0LjAxNzMgMTQzLjMxMyA1NC4yMDggMTQxLjU4MiA1NC4yMDhDMTQxLjQwNiA1NC4yMDggMTQxLjE0MiA1NC4yMDggMTQwLjc5IDU0LjIwOEMxNDAuNDM4IDU0LjIwOCAxNDAuMDU3IDU0LjIwOCAxMzkuNjQ2IDU0LjIwOEMxMzkuMjY1IDU0LjE3ODcgMTM4Ljg5OCA1NC4xNDkzIDEzOC41NDYgNTQuMTJDMTM4LjE5NCA1NC4wOTA3IDEzNy45MyA1NC4wNjEzIDEzNy43NTQgNTQuMDMyVjYzLjUzNkgxNDIuMTU0VjY2SDEyOC44MjJWNjMuNTM2SDEzMi44MjZWMzcuNjY0SDEyOC44MjJaTTEzNy43NTQgNTEuNTI0QzEzNy45MDEgNTEuNTgyNyAxMzguMTIxIDUxLjYyNjcgMTM4LjQxNCA1MS42NTZDMTM4LjczNyA1MS42NTYgMTM5LjA3NCA1MS42NzA3IDEzOS40MjYgNTEuN0MxMzkuNzc4IDUxLjcyOTMgMTQwLjExNSA1MS43NDQgMTQwLjQzOCA1MS43NDRDMTQwLjc5IDUxLjc0NCAxNDEuMDU0IDUxLjc0NCAxNDEuMjMgNTEuNzQ0QzE0Mi4zNzQgNTEuNzQ0IDE0My40NDUgNTEuNjEyIDE0NC40NDIgNTEuMzQ4QzE0NS40NjkgNTEuMDU0NyAxNDYuMzYzIDUwLjYxNDcgMTQ3LjEyNiA1MC4wMjhDMTQ3Ljg4OSA0OS40NDEzIDE0OC40OSA0OC42Nzg3IDE0OC45MyA0Ny43NEMxNDkuMzcgNDYuODAxMyAxNDkuNTkgNDUuNjcyIDE0OS41OSA0NC4zNTJDMTQ5LjU5IDQxLjk0NjcgMTQ4LjgyNyA0MC4xNzIgMTQ3LjMwMiAzOS4wMjhDMTQ1LjgwNiAzNy44ODQgMTQzLjc1MyAzNy4zMTIgMTQxLjE0MiAzNy4zMTJDMTQwLjM1IDM3LjMxMiAxMzkuNjkgMzcuMzQxMyAxMzkuMTYyIDM3LjRDMTM4LjYzNCAzNy40MjkzIDEzOC4xNjUgMzcuNDg4IDEzNy43NTQgMzcuNTc2VjUxLjUyNFpNMTYzLjg4OSA2NkgxNTMuMTA5VjYzLjUzNkgxNTYuNTQxTDE2Ny45MzcgMzUuMkgxNzIuNjAxTDE4My4wMjkgNjMuNTM2SDE4Ni4zMjlWNjZIMTczLjc0NVY2My41MzZIMTc3LjY2MUwxNzQuODAxIDU1Ljc5MkgxNjMuMDk3TDE2MC4xMDUgNjMuNTM2SDE2My44ODlWNjZaTTE2NC4xMDkgNTMuMzI4SDE3NC4wNTNMMTcwLjQ0NSA0My4xNjRMMTY5LjM0NSAzOC41SDE2OS4xNjlMMTY3Ljg5MyA0My4yNTJMMTY0LjEwOSA1My4zMjhaIiBmaWxsPSIjMEYwMDZDIi8+Cjwvc3ZnPgo=",
    title: "FPA Landing Page.",
    link: "https://about.fairfieldprogramming.org",
    description:
      "Before coming to Georgetown, I ran the Fairfield Programming Association where we taught under-served children to code. I built the site to increase donations and awareness for the organization's mission, and our statistics show it worked.",
    tags: ["Gatsby", "Tailwind", "Github", "Markdown", "CI/CD"],
  },
  {
    // src: "https://gtowntech.org/static/history-ab97a701ff476402b1f0ee471311f789.jpeg",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiBmaWxsPSJ3aGl0ZSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzVfMikiPgo8cGF0aCBkPSJNNjkwLjUgMjQ5LjVINzIxTDQ2Mi41IDc5M0g0MzJMNjkwLjUgMjQ5LjVaIiBmaWxsPSIjRkMzODU4Ii8+CjxwYXRoIGQ9Ik02OTAuNSAyNDUuNUg2ODcuOTczTDY4Ni44ODggMjQ3Ljc4Mkw0MjguMzg4IDc5MS4yODJMNDI1LjY2OCA3OTdINDMySDQ2Mi41SDQ2NS4wMjdMNDY2LjExMiA3OTQuNzE4TDcyNC42MTIgMjUxLjIxOEw3MjcuMzMyIDI0NS41SDcyMUg2OTAuNVoiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iOCIvPgo8L2c+CjxtYXNrIGlkPSJtYXNrMF81XzIiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjMzNSIgeT0iMjQ5IiB3aWR0aD0iMzYwIiBoZWlnaHQ9IjU0NCI+CjxwYXRoIGQ9Ik0zMzUgMjQ5LjVMNjk1IDI0OS41TDQzNi41IDc5M0gzMzVMMzM1IDI0OS41WiIgZmlsbD0iI0Q5RDlEOSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfNV8yKSI+CjxwYXRoIGQ9Ik01MTkuNTYzIDcxOEgzNzcuNzY2VjMxOEg1MjAuNzM0QzU2MC45NjkgMzE4IDU5NS42MDQgMzI2LjAwOCA2MjQuNjQxIDM0Mi4wMjNDNjUzLjY3NyAzNTcuOTA5IDY3Ni4wMDggMzgwLjc2IDY5MS42MzMgNDEwLjU3OEM3MDcuMzg4IDQ0MC4zOTYgNzE1LjI2NiA0NzYuMDczIDcxNS4yNjYgNTE3LjYwOUM3MTUuMjY2IDU1OS4yNzYgNzA3LjM4OCA1OTUuMDgzIDY5MS42MzMgNjI1LjAzMUM2NzYuMDA4IDY1NC45NzkgNjUzLjU0NyA2NzcuOTYxIDYyNC4yNSA2OTMuOTc3QzU5NS4wODMgNzA5Ljk5MiA1NjAuMTg4IDcxOCA1MTkuNTYzIDcxOFpNNDYyLjMzNiA2NDUuNTM5SDUxNi4wNDdDNTQxLjA0NyA2NDUuNTM5IDU2Mi4wNzYgNjQxLjExMiA1NzkuMTMzIDYzMi4yNThDNTk2LjMyIDYyMy4yNzMgNjA5LjIxMSA2MDkuNDA2IDYxNy44MDUgNTkwLjY1NkM2MjYuNTI5IDU3MS43NzYgNjMwLjg5MSA1NDcuNDI3IDYzMC44OTEgNTE3LjYwOUM2MzAuODkxIDQ4OC4wNTIgNjI2LjUyOSA0NjMuODk4IDYxNy44MDUgNDQ1LjE0OEM2MDkuMjExIDQyNi4zOTggNTk2LjM4NSA0MTIuNTk2IDU3OS4zMjggNDAzLjc0MkM1NjIuMjcxIDM5NC44ODggNTQxLjI0MiAzOTAuNDYxIDUxNi4yNDIgMzkwLjQ2MUg0NjIuMzM2VjY0NS41MzlaIiBmaWxsPSIjMTkxODMwIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF81XzIiIHg9IjQwOS4zMzYiIHk9IjIzMS41IiB3aWR0aD0iMzM0LjMyOCIgaGVpZ2h0PSI1NzkuNSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC44NjY2NjcgMCAwIDAgMCAwLjg2NjY2NyAwIDAgMCAwIDAuODY2NjY3IDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd181XzIiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNV8yIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",
    link: "https://gtowntech.org",
    title: "Georgetown Disruptive Tech.",
    description:
      "The first project that I worked on for GDT was a total rebuild of the website in Gatsby. As the organization needed a free solution with a database that they could update, the final product uses Google Sheets to manage employees.",
    tags: ["Gatsby", "Javascript", "Google Sheets", "Tailwind", "SEO"],
  },
];

export default function Home() {
  return (
    <>
      <section className="w-screen min-h-screen p-3 pt-16">
        <div className="max-w-4xl mx-auto aspect-video flex justify-center items-center flex-col gap-3">
          <h1 className="font-bold font-poppins text-6xl text-center">
            My Projects.
          </h1>
          <p className="max-w-xl text-center text-xl">
            This is my portfolio of websites, tools, and other projects that I
            have collected over the last few years.
          </p>
        </div>
        {projects.map((i, n) => (
          <div
            key={n}
            className={`mx-auto max-w-4xl flex flex-col ${
              n % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-6 mt-12`}
          >
            <div className="w-full">
              <Link href={i.link}>
                {i.logo != undefined ? (
                  <div className="w-full h-full aspect-video bg-white border rounded-xl flex items-center justify-center">
                    <img
                      className="w-1/2 max-h-full"
                      src={i.logo}
                      alt={`The ${i.title} Logo`}
                    />
                  </div>
                ) : (
                  <></>
                )}
                {i.src != undefined ? (
                  <img
                    className="w-full object-cover overflow-hidden aspect-video rounded-xl"
                    src={i.src}
                    alt={`The ${i.title} Thumbnail`}
                  />
                ) : (
                  <></>
                )}
              </Link>
            </div>
            <div className="w-full">
              <h2 className="font-bold font-poppins text-2xl">{i.title}</h2>
              <p className="text-lg">{i.description}</p>
              <div className="flex flex-row mt-3 gap-1 text-sm overflow-hidden overflow-x-scroll">
                {i.tags.map((j, m) => (
                  <span
                    key={m}
                    className="px-2 bg-white border rounded-full whitespace-nowrap"
                  >
                    {j}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
