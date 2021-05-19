import { ExperienceCard, HeaderText, Layout } from '@/components'
import { motion } from 'framer-motion'
import { pageVariants, pageTransition } from '@/theme'

export default function Experience() {
  return (
    <Layout title="Will Smith - Experience" pageName="experience">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="flex overflow-y-auto flex-row flex-wrap w-full justify-evenly"
      >
        <HeaderText text="Education" />
        <ExperienceCard
          title="Indiana University"
          subtitle="Fall 2017 - Spring 2020"
          imageUrl="/trident.jpg"
          color="red"
        >
          <div>
            <p className="text-3xl">B.S. Computer Science</p>
            <p className="text-lg">Minor: Mathematics</p>
            <p className="text-lg">
              Specializations: Artificial Intelligence, Data Science
            </p>
          </div>
        </ExperienceCard>
        <HeaderText text="Experience" />
        <ExperienceCard
          title="Microsoft"
          subtitle="SWE Intern"
          imageUrl="/microsoft.svg"
          color="yellow"
        >
          <div>
            <p>
              At Microsoft, I was given the opportunity to spend a summer
              contributing to a trailblazing new open-source project: Dapr.
              During my time there (well, virtually), my project was to create
              Dapr Dashboard, which would be a ‘one-stop-shop’ for viewing and
              managing microservices running on Dapr. These microservices could
              be running locally, on Kubernetes, or on virtually any
              environment, so my work had to be scalable and extensible.
            </p>
            <br />
            <p>
              Over the course of this project, I learned tons of new
              technologies, such as Angular, Go, Kubernetes, and Docker. I had
              to onboard quickly, because Dapr was speeding towards a v1.0
              release, and the Dashboard was a crucial element. The project was
              open-source, so I developed the application alongside community
              engagement.
            </p>
            <br />
            <p>
              I found this experience to be extremely rewarding, and I learned
              so much ranging from these languages to to open-source
              architecture to cloud-native microservices.
            </p>
          </div>
        </ExperienceCard>
        <ExperienceCard
          title="Liberty Mutual"
          subtitle="TechStart Intern"
          imageUrl="/libertymutual.png"
          color="blue"
        >
          <div>
            <p>
              At Liberty Mutual, I was paired with another intern and we were
              tasked with recreating a legacy web application used by more than
              4000 claims employees. Users were reporting crashes and high
              memory use, so a low memory profile was our highest priority.
              Users of this application had been using it for many years, so we
              were also tasked with making sure the new application was
              user-driven and backwards-compatible.
            </p>
            <br />
            <p>
              My partner and I worked on the project in a pair-programming
              fashion, and this was my first experience working in this way. I
              also constructed the application in a test-driven and agile
              manner, which were both new concepts to me. I had to integrate
              with a legacy application, which was actually older than I was.
              These new learning experiences, as well as the host of new
              technologies that I used, allowed me to gain a much broader
              perspective on the type of career that I was pursuing.
            </p>
            <br />
            <p>
              Ultimately, we reduced the memory footprint of the application by
              60-70%, which reduced the number of crashes and allowed the claims
              employees to continue their work uninterrupted. This was my first
              software development experience, and it solidified my goal of
              continuing this profession in the future.
            </p>
          </div>
        </ExperienceCard>
      </motion.div>
    </Layout>
  )
}
