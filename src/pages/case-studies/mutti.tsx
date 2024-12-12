import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowBack } from "../../components/icons";
import { ProjectTitle } from "../../components/ui/case-studies/project-title";
import { Paragraph } from "../../components/ui/case-studies/paragraph";
import { Card } from "../../components/ui/case-studies/card";
import muttiLandingPage from "../../assets/case-studies/mutti-landing-page.png";
import { ImageComponent } from "../../components/ui/case-studies/image-component";
import { TSectionItem } from "../../types";
import { useVisibleSection } from "../../hooks/useVisibleSection";
import { SideMenu } from "../../components/ui/case-studies/side-menu";
import { motion } from "framer-motion";
import { fadeInAnimationSettings } from "../../animations/config";
import { fadeIn } from "../../animations/variants";

const sections: TSectionItem[] = [
  { id: "section1", title: "Summary" },
  { id: "section2", title: "Product impact" },
  { id: "section3", title: "My Role" },
  { id: "section4", title: "What I did" },
  { id: "section5", title: "Who I worked with" },
  { id: "section6", title: "Challenge" },
  { id: "section7", title: "User Interview Questions" },
  { id: "section8", title: "Insights & Solutions" },
  { id: "section9", title: "User testing" },
  { id: "section10", title: "Learnings" },
];

export const Mutti = () => {
  const visibleSection = useVisibleSection(sections);

  return (
    <section className="relative ">
      <motion.aside
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, type: "tween", ease: "easeInOut" }}
        className="fixed hidden h-screen px-5 overflow-auto w-80 md:block "
      >
        <div className="my-10 ">
          <Link to={"/case-studies"}>
            <Button>
              <ArrowBack className="mr-1" /> Back
            </Button>
          </Link>
        </div>
        <SideMenu sections={sections} visibleSection={visibleSection} />
      </motion.aside>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, type: "tween", ease: "easeInOut" }}
        className="flex flex-col pb-8 mt-4 mb-10 border-b md:mx-56 max-w-7xl border-b-border-color"
      >
        <div className="flex my-4 md:hidden">
          <Link to={"/case-studies"}>
            <Button className="px-0 border-0">
              <ArrowBack className="mr-1" /> Back
            </Button>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold md:mb-6 md:text-4xl text-tertiary-accent-foreground">
          Product inventory management system for mymutti
        </h1>

        <div id="section1">
          <ProjectTitle> Summary</ProjectTitle>
          <div className="flex flex-col space-y-2">
            <Paragraph>
              mymutti is an e-commerce platform where over-the-counter(OTC)
              medications are sold and delivered to people in their specified
              locations. However, products sold on the earliest version of the
              platform were managed by developers via dJango, a Python web
              framework used for managing content on web apps. So, I designed a
              complete system for stakeholders(operations & marketing) that
              allow basic CRUD(Create, Read, Update and Delete) actions for
              products on mymutti.com. This will also help stakeholders to
              monitor and manage stock levels of mymutti.com’s inventory.
            </Paragraph>
          </div>
        </div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section2"
        >
          <ProjectTitle>Product impact</ProjectTitle>
          <div className="grid space-y-4 ">
            <Card
              title="80% reduction in support requests for product uploads"
              desc="by designing a platform that requires no engineering input during product upload."
            />
            <Card
              title="Less than 30 minutes completion time for new product updates"
              desc="from 2 weeks product update time. It took a longer time to make updates to products or upload a new one 
because it was previously an engineering task."
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section3"
        >
          <ProjectTitle>My Role</ProjectTitle>
          <div className="flex flex-col space-y-2">
            <Paragraph>
              As a Product Designer, I collaborated with a team of 5(product
              manager and software developers) to identify key pain points in
              the product upload and management process. I analysed the research
              findings and translated the insights into actionable and
              user-centered design solutions. Additionally, I solely worked on
              the user interface designs and interactive prototypes, ensuring a
              smooth experience for the stakeholders involved.
            </Paragraph>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section4"
        >
          <ProjectTitle>What I did</ProjectTitle>
          <div className="flex flex-col space-y-2">
            <Paragraph>
              User interview, UI design, prototyping, and user testing.
            </Paragraph>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section5"
        >
          <ProjectTitle>Who I worked with</ProjectTitle>
          <div className="flex flex-col gap-y-2">
            <Paragraph>
              Frontend engineers, a backend engineer, a product manager, and the
              operations team.
            </Paragraph>
            <div className="mt-10 ">
              <ImageComponent
                src={muttiLandingPage}
                alt="Mutti landing page"
                caption="The new product upload page"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section6"
        >
          <ProjectTitle>Challenge</ProjectTitle>
          <div className="flex flex-col gap-y-2">
            <Paragraph>
              Over the years, as products sold on mymutti grew, it became
              impossible for the stakeholders(operations, marketing, and
              engineering) to update product details, edit, delete, or add a new
              product without a hassle. The engineering team would have to add
              product updates to their tasks in every sprint. Creating a simple
              and scalable solution for the product operations team to manage
              product updates all by themselves without input from the
              engineering team became an important need.
            </Paragraph>
            <Paragraph className="italic ">
              Through user interviews, I identified the need for intuitive user
              interface design to ensure seamless product uploads. It means a
              clear display of product properties - product name, description,
              pricing, variants, inventory, category, and status, with the
              ability to edit and delete any product without engineering input.
            </Paragraph>
            <Paragraph className="my-10 text-base italic font-medium text-center ">
              “How might we ensure the product operations team can manage <br />
              product inventory without input from engineering?”
            </Paragraph>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section7"
        >
          <ProjectTitle>User interview questions</ProjectTitle>
          <div className="grid space-y-4 ">
            <Card
              title="How has the dJango platform performed?"
              desc="This gave them the opportunity to express what they like when using dJango for product uploads and updates,
and also the challenges they face during the entire process."
            />
            <Card
              title="What should be prioritised in this new platform?"
              desc="This gave them the opportunity to talk about important features without which this new platform for product uploads, updates, and product inventory management won’t be successful."
            />
            <Card
              title="What is a typical user journey when uploading a new product or making product updates?"
              desc="This gave them the opportunity to talk about the steps they take immediately there is a new product in stock 
and needs to be on sale."
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section8"
        >
          <ProjectTitle>Insights & Solution</ProjectTitle>
          <div className="flex flex-col gap-y-2">
            <Paragraph>
              From the interviews, apart from providing a platform to replace
              the current one, users want a seamless navigation experience
              because products usually have a lot of properties attached to them
              like description, pricing, variants, inventory, etc. I designed a
              quick navigation section so users can quickly move through product
              properties when updating product details. I also ensured that each
              property had a clear visible header so differentiate between the
              sections. Below is the prototype of the first iteration.
            </Paragraph>
            <div className="mt-10 ">
              <ImageComponent
                src={muttiLandingPage}
                alt="Mutti landing page"
                caption="A video prototype of the entire flow"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section9"
        >
          <ProjectTitle>User testing</ProjectTitle>
          <div className="flex flex-col gap-y-2">
            <div className="text-sm font-normal leading-6 text-tertiary-accent-foreground">
              <span> Findings from the user testing session were:</span>
              <ol className="pl-2 mt-6 space-y-1 list-decimal">
                <li>
                  Users would like to switch between countries since they manage
                  multiple countries.{" "}
                </li>
                <li>
                  They would also like to see the current facility they are
                  adding new products to.
                </li>
                <li>
                  Instead of the single discounted price in the pricing section,
                  it should be changed to two distinct prices - one for mutti
                  members and the other one for guest members.
                </li>
                <li>
                  Product variants could not be supported in the version 1 due
                  to technical issues.
                </li>
              </ol>
            </div>
            <div className="mt-10 ">
              <ImageComponent
                src={muttiLandingPage}
                alt="Mutti landing page"
                caption="A video prototype of the new flow after the user testing session"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "up", delay: 0.1 })}
          {...fadeInAnimationSettings}
          id="section10"
        >
          <ProjectTitle>Learning</ProjectTitle>
          <Paragraph>
            Collaborate with users to get a usable product. <br />
            Test early and often. The success of this project was measured by
            the amount of time saved on both the engineering side and the
            product operations team. Also, we were able to conveniently scale
            this product across countries Mymutti stores are present in and it
            has become a tool different teams(product, marketing, operations) in
            the organisation can use.
          </Paragraph>
        </motion.div>
      </motion.div>
    </section>
  );
};
