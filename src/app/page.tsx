"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Support",
          id: "contact",
        },
      ]}
      brandName="ScanFood AI"
      button={{
        text: "Get Started",
        href: "/auth",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      title="Track Smarter, Eat Better with ScanFood AI"
      description="Unlock your potential with instant, AI-powered nutritional insights. Scan your meals and crush your goals with our premium health tracking companion."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahfit",
          testimonial: "The best tracking tool I've used. So fast and accurate!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-smiling-white_1187-4020.jpg",
        },
        {
          name: "Mark D.",
          handle: "@mark_lifts",
          testimonial: "Finally, a way to track without the headache. Totally worth it.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sexy-tattoed-shirtless-man-with-touchpad-leans-against-brick-wall-smiling-looking-away_613910-9906.jpg",
        },
        {
          name: "Lisa T.",
          handle: "@lisafitness",
          testimonial: "Simple, intuitive, and extremely helpful. Love the AI tips.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-athletic-fitness-male-dressed-sportswear-grey-vignette-background_613910-9846.jpg",
        },
        {
          name: "Anna K.",
          handle: "@anna_run",
          testimonial: "Perfect for my marathon training. I feel so much more informed.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-woman-wearing-sport-clothes_329181-13208.jpg",
        },
        {
          name: "David W.",
          handle: "@david_active",
          testimonial: "Changed the way I eat. No more guessing calories.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-sportive-girl-posing-dark-wall_176420-637.jpg",
        },
      ]}
      buttons={[
        {
          text: "Get Started",
          href: "/auth",
        },
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/physical-activity-stats-around-person_23-2150163347.jpg"
      imageAlt="AI Nutrition Scanner"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-having-fun-while-running_1139-224.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-smiling-white_1187-3790.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-crossing-arms_1187-4046.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/carefree-lovely-tanned-young-woman-standing-balcony-near-green-plant-smiling-laughing-out-loud-look-adorable-grin-camera-talking-casually-coworker-veranda-enjoy-perfect-sunny-summer-days_197531-30354.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-afro-american-sportsman-listening-music_171337-9402.jpg",
          alt: "User 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "AI Powered",
        },
        {
          type: "text",
          text: "Instant Scanning",
        },
        {
          type: "text",
          text: "Meal Planning",
        },
        {
          type: "text",
          text: "Macro Tracking",
        },
        {
          type: "text",
          text: "Expert Coaching",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Snap & Scan",
          description: "Instant nutrient estimates just by taking a photo of your food.",
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-technology-concept_23-2151908074.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "AI Coach",
          description: "24/7 nutrition advice and meal guidance in your pocket.",
          imageSrc: "http://img.b2bpic.net/free-photo/customer-relationship-management-concept_23-2150038403.jpg",
          buttonIcon: "MessageCircle",
        },
        {
          title: "Macro Dashboard",
          description: "Visual overview of your daily intake with real-time feedback.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-view-woman-working-eating_23-2148515983.jpg",
          buttonIcon: "BarChart3",
        },
        {
          title: "Smart Meal Plans",
          description: "Generate custom plans tailored to your specific fitness goals.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-weekly-meal-planner_23-2148478193.jpg",
          buttonIcon: "Calendar",
        },
      ]}
      title="Everything You Need to Reach Your Peak"
      description="Powerful tools designed to keep you focused, motivated, and on track with your nutritional goals."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1M+",
          description: "Meals tracked successfully",
        },
        {
          id: "m2",
          value: "500k",
          description: "AI analysis performed",
        },
        {
          id: "m3",
          value: "95%",
          description: "User satisfaction rate",
        },
      ]}
      title="Results You Can Trust"
      description="Join thousands of users who have transformed their health through better nutrition tracking."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-portrait_93675-133073.jpg",
        },
        {
          id: "t2",
          name: "Mark D.",
          imageSrc: "http://img.b2bpic.net/free-photo/muscular-man-posing-floor-gym_651396-288.jpg",
        },
        {
          id: "t3",
          name: "Lisa T.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-darkskinned-browneyed-brunette-longsleeved-tshirt-looks-into-camera-runs-upstairs-outdoors_197531-28721.jpg",
        },
        {
          id: "t4",
          name: "Anna K.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-fit-man-gym_23-2149517268.jpg",
        },
        {
          id: "t5",
          name: "David W.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-athletic-woman-outdoors-by-beach_23-2148781775.jpg",
        },
      ]}
      cardTitle="Loved by Fitness Enthusiasts"
      cardTag="Success Stories"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Healthy",
          name: "Poke Bowl",
          price: "High Protein",
          rating: 5,
          reviewCount: "1.2k",
          imageSrc: "http://img.b2bpic.net/free-photo/black-plates-with-pasta-beans-dark-background_23-2148340394.jpg",
        },
        {
          id: "p2",
          brand: "Gourmet",
          name: "Salmon & Veg",
          price: "High Protein",
          rating: 5,
          reviewCount: "800",
          imageSrc: "http://img.b2bpic.net/free-photo/smoked-salmon-bruschetta-with-avocado-cream-cheese-served-with-salad_140725-1619.jpg",
        },
        {
          id: "p3",
          brand: "Fresh",
          name: "Smoothie Bowl",
          price: "Antioxidant",
          rating: 4,
          reviewCount: "500",
          imageSrc: "http://img.b2bpic.net/free-photo/diet-breakfast-with-fruit-nuts_23-2148594978.jpg",
        },
        {
          id: "p4",
          brand: "Minimal",
          name: "Avocado Toast",
          price: "Healthy Fat",
          rating: 5,
          reviewCount: "900",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-salad-white-plate_23-2148747520.jpg",
        },
        {
          id: "p5",
          brand: "Fresh",
          name: "Quinoa Salad",
          price: "High Fiber",
          rating: 4,
          reviewCount: "450",
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-with-salad_23-2148515517.jpg",
        },
        {
          id: "p6",
          brand: "Healthy",
          name: "Chicken Bowl",
          price: "Balanced",
          rating: 5,
          reviewCount: "1.5k",
          imageSrc: "http://img.b2bpic.net/free-photo/buddha-bowl-rice-with-salmon-radish-red-cabbage-edamame-beans-sesame-seeds-concept-delicious-healthy-food-top-view_127032-2846.jpg",
        },
      ]}
      title="Healthy Food Made Simple"
      description="Explore popular healthy meal choices verified by our community."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "monthly",
          tag: "Basic",
          price: "$14.99",
          period: "/mo",
          description: "Get started with advanced tracking features.",
          button: {
            text: "Get Started",
          },
          featuresTitle: "Included",
          features: [
            "Unlimited scans",
            "AI Coach access",
            "Meal planning tool",
          ],
        },
        {
          id: "quarterly",
          tag: "Popular",
          price: "$29.99",
          period: "/3mo",
          description: "Commit to your health for the next season.",
          button: {
            text: "Get Started",
          },
          featuresTitle: "Everything in Basic, plus:",
          features: [
            "Ad-free experience",
            "Progress timeline",
            "Priority support",
          ],
        },
        {
          id: "yearly",
          tag: "Best Value",
          price: "$49.99",
          period: "/yr",
          description: "The ultimate transformation package.",
          button: {
            text: "Get Started",
          },
          featuresTitle: "Everything in Pro, plus:",
          features: [
            "Annual priority",
            "Advanced analytics",
            "Exclusive AI features",
          ],
        },
      ]}
      title="Unlock Premium Results"
      description="Upgrade your experience with advanced AI tracking and meal plans."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Is my data private?",
          content: "Absolutely. Your data is encrypted and never shared without permission.",
        },
        {
          id: "f2",
          title: "Can I cancel anytime?",
          content: "Yes, cancel your subscription at any time via your settings.",
        },
        {
          id: "f3",
          title: "Is the AI always accurate?",
          content: "Our AI provides estimates which are highly accurate but should be used as guidance.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about ScanFood AI."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/healthy-food-concept-with-tablet_23-2147802987.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get In Touch"
      description="Have questions? Our support team is here to help you get the most out of ScanFood AI."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/elevated-view-digital-tablet-fresh-healthy-vegetables_23-2147926912.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Support",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="ScanFood AI"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
