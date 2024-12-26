import indiancarpool from "/src/assets/images/indiancarpool-desktop.webp";
import delemate from "/src/assets/images/delemate-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import resume from "/src/assets/images/resume-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import deenflow from "/src/assets/images/deenflow.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-10">
           <Projects 
            link="https://deenflow-azimwarsiis-projects.vercel.app/"
            img={deenflow}
            alt="Pomodoro App"
            name="Time Management App"
            type="Design • Full-Stack Development"
            year="2024"
            tools=" Chakra UI • React • Firebase • NextJS"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://delemate.com/"
            img={delemate}
            alt="delemate"
            name="Courier with realtime updates"
            type="Full-Stack Web & Mobile Development"
            year="2024"
            tools="NextJS • React Native • Firebase • Chakra UI"
          />
        </div>
         {/* Project #3 */}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://www.youtube.com/watch?v=N3H0mRFHo2E"
            img={acc}
            alt="Concesia"
            name="Forms using Blockchain "
            type="Design • Full-Stack Development"
            year="2024"
            tools="React Native • Blockchain • Figma • NativeWind"
          />
        </div>
         {/* Project #4 */}
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://resume-maker-pi.vercel.app/"
            img={resume}
            alt="Resume Maker & Job Finder"
            name="RESUME MAKER & Job Finder"
            type="Full-Stack Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • React"
          />
        </div>
         {/* Project #5 */}
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://indian-carpool.vercel.app/"
            img={indiancarpool}
            alt="Indian Carpool"
            name="Ticket Booking Service"
            type="Full-Stack Development • Deployment"
            year="2023"
            tools="JavaScript • Vite • Firebase"
          />
        </div>
          {/* Project #6 */}
        <div className="col-span-1  h-fit md:col-start-6 md:col-end-13 ">
          <Projects
            link="https://www.youtube.com/watch?v=ImCkcmlosjk"
            img={sunnyside}
            alt="Indian Carpool"
            name="ML model that detects fish diseases & species"
            type="Application Development • Machine Learning"
            year="2024"
            tools=" TensorFlow • Expo • React Native • Firebase"

          />
        </div>
      </div>
    </section>
  );
}
