import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hopeful Heartfelt Vulture</title>
        <meta property="og:title" content="Hopeful Heartfelt Vulture" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Transform your garden with our landscaping guides and techniques.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Sign Up</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">/plants</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">/home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Landscaping</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Plants</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">/landscaping</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Heckyourgarden, your ultimate gardening resource!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Discover a variety of plants and learn how to care for them.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">/outdoor-spaces</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">Outdoor Spaces</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Get inspired to create stunning outdoor spaces with our tips and
              ideas.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Get Started</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Get Started</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Explore More</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to Heckyourgarden</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Your ultimate destination for all things gardening. Discover tips,
              inspiration, and expert advice to elevate your outdoor space.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Discover creative landscaping ideas for your outdoor space.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Landscaping Inspiration</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              Learn about different plant species and how to care for them.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Vibrant Plant Life</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Explore a variety of colorful flowers and plants to enhance your
              garden.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Plant Care Tips</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">
              Ready to transform your garden?
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore our website for expert tips and inspiration to create your
              dream outdoor space.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Get Started</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Discover expert landscaping tips to transform your garden into a
              beautiful and inviting oasis.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Explore our comprehensive plant care guides to help you nurture
              your plants and keep them healthy.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Outdoor Design Ideas</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Plant Care Guides</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Get inspired with our outdoor design ideas to create stunning and
              functional outdoor spaces.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Landscaping Tips</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$29.99/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Sign Up Now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign Up Now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Weekly gardening tips</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">
              Monthly virtual gardening workshops
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign Up Now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Customized garden design plans</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">
              Exclusive access to gardening webinars
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">
              One-on-one consultations with gardening experts
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Personalized landscaping ideas</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$19.99/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Discounts on gardening tools</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Access to plant care guides</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Priority customer support</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$9.99/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Select plants that are suitable for your climate and gardening
              experience level.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Follow planting instructions, provide adequate water and sunlight,
              and monitor plant health.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Prepare Your Outdoor Space</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Clear the area, remove weeds, and ensure proper soil quality for
              planting.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Choose Your Plants Wisely</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Plant Carefully</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Regularly water, prune, and fertilize your plants to keep your
              garden thriving. Sit back, relax, and enjoy the beauty of your
              outdoor space.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Maintain and Enjoy</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Botanist</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Master Gardener</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">Sarah Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Emily Brown</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              I have learned so much from Heckyourgarden. The detailed plant
              guides are invaluable for any gardening enthusiast.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Michael Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Urban Gardener</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">David Lee</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Heckyourgarden has been my go-to resource for all things
              gardening. The tips and advice have truly transformed my outdoor
              space.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Landscape Designer</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">5 stars</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Heckyourgarden helped me enhance my landscaping projects with
              their creative ideas and inspiration.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              I never knew gardening could be so enjoyable until I discovered
              Heckyourgarden. Highly recommended!
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">Privacy Policy</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">FAQs</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">About Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
