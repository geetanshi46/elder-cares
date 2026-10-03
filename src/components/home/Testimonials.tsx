import { useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "I have studied upto 10th Standard and worked as a clerk cum supervisor at a Govt. Hospital. I am single and my aged parents are dependent on me. After retirement I needed to continue working to support myself and my elderly parents. For sometime I struggled to find a job. When I came to know about Nightingales Jobs 60+, I immediately registered for a job and also for training in computer skills to improve my job prospects. After completing computer training successfully, I was selected as a marketing executive for a private company. I am grateful to Nightingales Jobs 60+ for helping me gain confidence through computer training and for helping me find a suitable job.",
    name: "Laxmi Hegde",
    role: "Aged 61 years; student of the 16th batch of computer training at Nightingales Jobs 60+",
    initials: "LH",
    title: "Became financially independent...",
  },

  {
    quote:
      "We were worried to leave our aged mother alone at home when we had to go out for work. After a long search Nightingales Medical Trust's Dementia Day Care Centre seemed to be the best place in terms of facility and care. So having trusted we have placed her in these safe hands. We are now at peace. They keep her busy with activities so that she doesn’t feel left alone. The care shown towards her is very heart warming. It’s amazing to see how she’s become calm and more alert and is getting more involved in daily activities like reading newspaper and helping us in folding clothes. We are immensely grateful to the staff for taking care of my mother so patiently and keeping her in safe hands...",
    name: "Ms Rangini",
    role: "Daughter of one of the members of our Dementia Day Care Centres, Bangalore",
    initials: "R",
    title: "Trusted place for our parents...",
  },

  {
    quote:
      "We were skeptical at first when we decided to bring our mother to Nightingales Centre for Ageing and Alzheimer’s, but as soon as my sister and I stepped into the institution and talked to the doctors, we felt assured that this was the right place. We finally had someone who could explain to us the nature of the disease, provide the medicines that will help soothe my mother, and provide individual care without having to impose on her space and freedom. Setting a routine in an expanded, yet controlled environment, we found, was critical. As the months went by, we felt her grow calmer, more relaxed and more vocal. Only at NCAA, were we able to understand the unique problems that came with dementia and we finally felt that she was able to get the help that she required. My mother has been here for over 7 years now. Even though her physical faculties have reduced considerably, we are very sure that the best place that she could be taken care of is in NCAA. And we are grateful every day to all of the staff who takes such loving care of my mother.",
    name: "Vanaja Nair",
    role: "Daughter of one of the residents of our Residential Dementia Care Centre at Bangalore",
    initials: "VN",
    title: "Best care for my mother...",
  },

  {
    quote:
      "My mother has greatly benefitted from the program conducted by the Red Cross - Nightingales Dementia Care Centre. She is involved in many creative activities on a daily basis like drawing, puzzle solving, cooking and Physiotherapy at the Centre. I have seen a drastic change in her health and activity since she has been enrolled. She seems to be mentally happier, and physically active. She truly has a great time with the volunteers and staff there. I would like to thank the team for this wonderful improvement in my mother’s life.",
    name: "Nizar Ali",
    role: "Son of Mrs Habeeba Begum, a regular member at the Dementia Day Care Centre, Hyderabad",
    initials: "NA",
    title: "My mother is active and happy...",
  },

  {
    quote:
      "My daughter Tanya Mathias, now 54 years old, is mentally challenged and autistic. I know what it is like to care for those suffering from mental and physical disabilities. For years I have worried about “What after me?\" A caregiver plays a very important part in the well-being of a patient and it is very difficult to find trusted and reliable caregivers. Upon a visit to Nightingales Centre for Ageing and Alzheimer's, I was pleased to find how diligently and affectionately the patients are taken care of. This inspired me to associate myself with NMT and support their cause.",
    name: "Veronica Mathias",
    role: "Partnered with NMT to set up the Nightingales Trust Tanya Mathias Eldercare Centre, Bangalore",
    initials: "VM",
    title: "Proud to be associated with NMT",
  },

  {
    quote:
      "I would like to share my sincere thanks to the staff and management for keeping our dear ones engaged and active at the Dementia Day Care Centre. This has brought about marked improvement in the behavior and health condition of my mother. I am really thankful and grateful for the support each person extends in terms of pickup and drop or anything of concern which is handled very well at personal and professional level. Thanks would just not seem enough. At times we are at loss of words but just filled with gratitude and glad have found support in you guys. Thanks from the bottom of my heart!",
    name: "Daughter of a member",
    role: "Daughter of a member at our Dementia Day Care Centre, Bangalore",
    initials: "D",
    title: "Grateful for the support...",
  },

  {
    quote:
      "I have been visiting Sandhya Suraksha over the last few months and I find myself coming back regularly. The residents, all of who come from extremely disturbed backgrounds, are very well cared for by the dedicated staff. From medical attention to emotional support, from recuperation to rehabilitation, no stone is left unturned to ensure the highest standard of attention and care to each and every individual. The staff go beyond 'just another job' to really looking after the elderly residents as family. Most importantly the facilities are impeccably clean and hygienic. I am grateful for having been welcomed into the Sandhya Suraksha family and look forward to participating more wholeheartedly in my personal capacity in their beautiful endeavor.",
    name: "Mahita Nagaraj",
    role: "Volunteered at Sandhya Suraksha - Home for Destitute Elderly Women, Bangalore",
    initials: "MN",
    title: "A happy home for the homeless...",
  },

  {
    quote:
      "I deeply appreciate the patient, consistent and compassionate care you are giving to the eldely, especially to those who become helpless with Dementia. Please keep up your good work and my best wishes and blessings to all your team members.",
    name: "Dr Ali Khwaja",
    role: "Founder Director - Banjara Academy",
    initials: "AK",
    title: "Appreciate your work...",
  },

  {
    quote:
      "I was introduced to The Nightingales Trust - Bagchi Centre for Active Ageing in 2014 by my son and since then, I have been an active member of the Active Ageing program organized here. Before NBCAA, most of my time was spent at home either sitting idle or helping with same old routine work. Now, my day begins with yoga, chair-based exercises and gym workouts often followed by cognitive exercises like playing Sudoku, solving quiz and puzzles. On special days, there are movie and park outings to keep me engaged. I feel young again and have something to look forward to each day. Centers like these are a great way to keep oneself engaged and active post sixty.",
    name: "Sathya Chari",
    role: "Member of the Nightingales Trust - Bagchi Centre for Active Ageing, Bangalore",
    initials: "SC",
    title: "I feel young again...",
  },
];

export function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = Math.min(
      sliderRef.current.clientWidth * 0.82,
      420
    );

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = window.setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        scroll("right");
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Testimonials"
      className="
        relative
        overflow-hidden
        border-y
        border-[#ED6439]/25
        bg-[#ED6439]/[0.10]
        py-20
        lg:py-28
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-96
          w-96
          rounded-full
          bg-[#ED6439]/20
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#ED6439]/15
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[28rem]
          w-[28rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ED6439]/10
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            SECTION HEADING
            ===================================================== */}

        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            className="
              mt-6
              font-display
              text-3xl
              font-extrabold
              leading-tight
              text-ink
              sm:text-4xl
              lg:text-[3.2rem]
            "
          >
            Our{" "}
            <span className="text-[#ED6439]">
              Testimonials
            </span>
          </h2>

          {/* Accent divider */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span
              className="
                h-px
                w-14
                bg-[#ED6439]/60
              "
            />

            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-[#ED6439]
                shadow-[0_0_14px_rgba(237,100,57,0.55)]
              "
            />

            <span
              className="
                h-px
                w-14
                bg-[#ED6439]/60
              "
            />
          </div>
        </Reveal>


       {/* =====================================================
    TESTIMONIAL CAROUSEL
===================================================== */}

<div className="relative mt-14 lg:px-14">

  {/* LEFT ARROW — OUTSIDE CARDS */}

  <button
    type="button"
    onClick={() => scroll("left")}
    aria-label="Previous testimonial"
    className="
      absolute
      left-0
      top-1/2
      z-30
      hidden
      h-12
      w-12
      -translate-y-1/2
      place-items-center
      rounded-full
      border
      border-[#ED6439]/20
      bg-white
      text-[#ED6439]
      shadow-[0_8px_25px_rgba(237,100,57,0.18)]
      transition-all
      duration-300
      hover:bg-[#ED6439]
      hover:text-white
      hover:shadow-[0_12px_30px_rgba(237,100,57,0.28)]
      lg:grid
    "
  >
    <ChevronLeft className="h-5 w-5" strokeWidth={2.3} />
  </button>


  {/* RIGHT ARROW — OUTSIDE CARDS */}

  <button
    type="button"
    onClick={() => scroll("right")}
    aria-label="Next testimonial"
    className="
      absolute
      right-0
      top-1/2
      z-30
      hidden
      h-12
      w-12
      -translate-y-1/2
      place-items-center
      rounded-full
      border
      border-[#ED6439]/20
      bg-white
      text-[#ED6439]
      shadow-[0_8px_25px_rgba(237,100,57,0.18)]
      transition-all
      duration-300
      hover:bg-[#ED6439]
      hover:text-white
      hover:shadow-[0_12px_30px_rgba(237,100,57,0.28)]
      lg:grid
    "
  >
    <ChevronRight className="h-5 w-5" strokeWidth={2.3} />
  </button>


  {/* =====================================================
      SLIDER
  ===================================================== */}

  <div
    ref={sliderRef}
    className="
      flex
      gap-5
      overflow-x-auto
      scroll-smooth
      snap-x
      snap-mandatory
      pb-3
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
      sm:gap-6
    "
  >

    {TESTIMONIALS.map((t, i) => (
      <Reveal
        key={`${t.name}-${i}`}
        delay={i * 60}
        className="
          min-w-[88%]
          snap-start
          sm:min-w-[520px]
          lg:min-w-[calc((100%-48px)/3)]
        "
      >

        <figure
          className="
            group
            relative
            flex
            h-[450px]
            flex-col
            overflow-hidden
            border
            border-[#ED6439]/20
            bg-white
            p-6
            shadow-[0_20px_55px_-18px_rgba(120,75,20,0.20)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#ED6439]/45
            hover:shadow-[0_30px_70px_-18px_rgba(237,100,57,0.28)]
            sm:h-[460px]
            sm:p-7
          "
        >

          {/* TOP ACCENT */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[3px]
              bg-[#ED6439]
            "
          />


          {/* DECORATIVE GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-36
              w-36
              rounded-full
              bg-[#ED6439]/10
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />


          {/* QUOTE ICON */}

          <div
            className="
              relative
              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                grid
                h-12
                w-12
                place-items-center
                rounded-full
                bg-[#ED6439]
                text-white
                shadow-[0_10px_24px_rgba(237,100,57,0.25)]
                transition-transform
                duration-500
                group-hover:scale-105
              "
            >
              <Quote
                className="h-6 w-6"
                strokeWidth={1.8}
              />
            </span>

            <span
              className="
                font-serif
                text-4xl
                font-bold
                leading-none
                text-[#ED6439]/15
              "
            >
              “
            </span>

          </div>


          {/* TITLE */}

          <h3
            className="
              relative
              mt-5
              font-display
              text-lg
              font-extrabold
              leading-tight
              text-[#263746]
              sm:text-xl
            "
          >
            {t.title}
          </h3>


          {/* TESTIMONIAL TEXT */}

          <blockquote
            className="
              relative
              mt-4
              flex-1
              overflow-y-auto
              pr-2
              font-serif
              text-[14px]
              italic
              leading-[1.65]
              text-ink
              sm:text-[14.5px]
              [scrollbar-color:#ED6439_transparent]
              [scrollbar-width:thin]
            "
          >
            “{t.quote}”
          </blockquote>


          {/* DIVIDER */}

          <div
            className="
              mt-5
              h-px
              w-full
              shrink-0
              bg-[#ED6439]/30
            "
          />


          {/* PERSON */}

          <figcaption
            className="
              mt-5
              flex
              min-w-0
              shrink-0
              items-center
              gap-3
            "
          >

            <span
              className="
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-full
                bg-[#ED6439]
                font-display
                text-sm
                font-extrabold
                text-white
                shadow-[0_8px_20px_rgba(237,100,57,0.25)]
              "
            >
              {t.initials}
            </span>

            <span className="min-w-0">

              <span
                className="
                  block
                  truncate
                  text-sm
                  font-bold
                  text-ink
                "
              >
                {t.name}
              </span>

              <span
                className="
                  mt-0.5
                  block
                  text-xs
                  leading-relaxed
                  text-muted-foreground
                "
              >
                {t.role}
              </span>

            </span>

          </figcaption>


          {/* HOVER ACCENT */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              bg-[#ED6439]
              transition-all
              duration-500
              group-hover:w-full
            "
          />

        </figure>

      </Reveal>
    ))}

  </div>


  {/* MOBILE ARROWS */}

  <div
    className="
      mt-6
      flex
      justify-center
      gap-3
      lg:hidden
    "
  >

    <button
      type="button"
      onClick={() => scroll("left")}
      aria-label="Previous testimonial"
      className="
        grid
        h-10
        w-10
        place-items-center
        rounded-full
        border
        border-[#ED6439]/20
        bg-white
        text-[#ED6439]
        shadow-sm
        transition-colors
        hover:bg-[#ED6439]
        hover:text-white
      "
    >
      <ChevronLeft className="h-5 w-5" />
    </button>


    <button
      type="button"
      onClick={() => scroll("right")}
      aria-label="Next testimonial"
      className="
        grid
        h-10
        w-10
        place-items-center
        rounded-full
        border
        border-[#ED6439]/20
        bg-white
        text-[#ED6439]
        shadow-sm
        transition-colors
        hover:bg-[#ED6439]
        hover:text-white
      "
    >
      <ChevronRight className="h-5 w-5" />
    </button>

  </div>

</div>

      </div>
    </section>
  );
}