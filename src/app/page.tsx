"use server";

import type { Book } from "@/types";
import { fetchCurrentBooks, fetchPastBooks } from "./actions";
import { BookEntry } from "@/components/book-entry";
import Link from "next/link";
import { ExperienceEntry } from "@/components/experience-entry";
import {
  ExperienceProject,
  ExperienceProjectItem,
} from "@/components/experience-project";
import { connection } from "next/server";

export default async function RootPage() {
  await connection();

  const currentBooks = await fetchCurrentBooks();
  const pastBooks = await fetchPastBooks();

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-black">Hey, I&apos;m William!</h1>
      <p className="text-muted-foreground">
        I&apos;m a software developer who enjoys running,&nbsp;
        <Link
          href={`https://goodreads.com/user/show/${process.env.GOODREADS_USER_ID}`}
          className="text-foreground underline"
          target="_blank"
        >
          reading
        </Link>
        , playing chess (though I&apos;m not very good at it), and playing video
        games. I sometimes write code too!
      </p>
      <h1 className="mt-4 text-2xl font-black">Experience</h1>
      <ExperienceEntry
        title="Explorator Labs"
        date="May 2020 - Oct 2024"
        role="Full-stack Developer"
        url="https://exploratorlabs.com"
      >
        <p>
          A small tech-startup that focuses on developing web-based
          applications.
        </p>
        <p>
          I&apos;ve worked on numerous client projects as a Full-stack Developer
          using a wide-range of technologies including React/React Native,
          NextJS, Ruby on Rails, Flutter, Firebase, PostgreSQL, Github, Docker
          and Cypress.
        </p>
      </ExperienceEntry>
      <ExperienceProject>
        <ExperienceProjectItem
          title="Chat Everywhere"
          date="Jun 2023 - Oct 2024"
        >
          <p>An accessible and feature-rich alternative to Chat-GPT.</p>
          <ul className="list-disc pl-4">
            <li>
              Developed a conversation mode feature by leveraging Azure AI
              Speech services to deliver real-time speech-to-text and
              text-to-speech capabilities, significantly improving user
              interaction and accessibility
            </li>
            <li>
              Developed a ranking system for seamless persistence of
              user-defined folder and conversation hierarchies in the database,
              enhancing data integrity and user experience
            </li>
            <li>
              Technologies included: React, Typescript, Next.js, Tailwindcss
              MobX, Supabase, Azure, Stripe, Git, Docker
            </li>
          </ul>
        </ExperienceProjectItem>
        <ExperienceProjectItem title="Circulr" date="May 2022 - Oct 2024">
          <p>
            A sustainable packaging platform that encourages reusable packaging
            of grocery items.
          </p>
          <ul className="list-disc pl-4">
            <li>Lead the development of the mobile app and backed system</li>
            <li>
              Designed and developed a REST API and an admin dashboard to access
              important information regarding returned packaging
            </li>
            <li>
              Redesigned Firebase Cloud Functions to significantly enhance the
              application&apos;s overall security and robustness
            </li>
            <li>Technologies included: Flutter, NodeJS, Firebase, Stripe</li>
          </ul>
        </ExperienceProjectItem>
        <ExperienceProjectItem
          title="Offshore Hires"
          date="May 2022 - Aug 2023"
        >
          <p>
            An all-in-one platform for connecting freelancers and businesses.
            The platform offers features that include posting jobs, managing
            projects, and chat-messaging team members. Technologies used
            included Ruby on Rails, React, Postgres, Stripe.
          </p>
        </ExperienceProjectItem>
        <ExperienceProjectItem title="Pivot" date="Aug 2021 - Mar 2022">
          <p>
            An all-in-one platform for restaurants to schedule employees, manage
            payroll, track labour analytics, and direct messaging for the entire
            team.
          </p>
          <ul className="list-disc pl-4">
            <li>
              Collaborated on refactoring legacy code across React Native and
              React web applications, improving maintainability and reducing
              technical debt
            </li>
            <li>
              Contributed to the planning and development of Version 2 React web
              and React Native applications, enhancing code maintainability
              compared to the previous version
            </li>
            <li>
              Communicated with clients to provide progress updates, address
              challenges, and define next steps
            </li>
            <li>Technologies included: React, React Native, Firebase </li>
          </ul>
        </ExperienceProjectItem>
        <ExperienceProjectItem
          title="Book With Float"
          date="Jun 2021 - Dec 2021"
        >
          <p>
            A marketplace-platform for booking and renting out boats.
            Technologies used included Ruby on Rails, React, and Stripe.
          </p>
        </ExperienceProjectItem>
        <ExperienceProjectItem
          title="Ottawa Inner City Health"
          date="May 2020 - Dec 2021"
        >
          <p>
            An internal program used for tracking and recording patients
            visiting harm reduction sites.
          </p>
          <ul className="list-disc pl-4">
            <li>
              Developed an automated report generation system in Ruby on Rails
              to export community treatment data to Excel, optimizing data
              analysis and reporting processes
            </li>
            <li>
              Developed and designed new features to facilitate usage of the app
            </li>
            <li>
              Wrote integration tests for key features utilizing RSpec,
              Capybara, and Selenium, ensuring robust functionality and
              reliability
            </li>
            <li>
              Technologies included: Ruby on Rails, React, Postgres, RSpec,
              Capybara, Selenium
            </li>
          </ul>
        </ExperienceProjectItem>
      </ExperienceProject>
      <ExperienceEntry
        title="Nokia"
        date="Jul 2019 - Aug 2019"
        role="Future Tech Intern"
        url="https://nokia.com"
      >
        <p>
          The Nokia Future Tech Internship is an 8 week program that gives high
          school opportunities to explore tech-related fields. I worked
          alongside a Nokia engineer to develop a Bash program which interfaced
          with Nokia&apos;s Netguard Identity Access Manager (NIAM) via REST API
          for the purpose of system provisioning, automation, and reporting.
        </p>
      </ExperienceEntry>
      <ExperienceEntry
        title="Digitera Interactive"
        date="Oct 2018 - Jun 2019"
        role="High School Co-op"
        url="https://digitalmarketingplus.com/"
      >
        <p>
          I developed a prototype school news mobile app using React Native and
          Firebase. Essential features such as authentication and the creation,
          publication, and viewing of articles have been implemented. After my
          co-op, I&apos;ve also briefly worked on an influencer app as an
          Android developer.
        </p>
      </ExperienceEntry>

      <h1 className="mt-4 text-2xl font-black">Books</h1>
      <CurrentBooks books={currentBooks} />
      <PastBooks books={pastBooks} />
    </div>
  );
}

interface CurrentBooksProps {
  books: Book[];
}

function CurrentBooks({ books }: CurrentBooksProps) {
  if (books.length > 0) {
    return (
      <>
        <p className="text-muted-foreground">I&apos;m currently reading:</p>
        {books.map((book) => (
          <BookEntry key={book.id} book={book} />
        ))}
      </>
    );
  }

  return (
    <p className="text-muted-foreground">
      I&apos;m not reading anything at the moment.
    </p>
  );
}

interface PastBooksProps {
  books: Book[];
}

function PastBooks({ books }: PastBooksProps) {
  return (
    <>
      <p className="text-muted-foreground">
        The last 3 books I&apos;ve finished:
      </p>
      {books.map((book) => (
        <BookEntry key={book.id} book={book} />
      ))}
    </>
  );
}
