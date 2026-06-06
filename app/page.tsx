"use client";

import { FormEvent, ReactNode, useState } from "react";
import { motion, type Variants } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const viewportOnce = { once: true, margin: "-80px" } as const;

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const fadeUp = {
  initial: "hidden",
  whileInView: "show",
  viewport: viewportOnce,
  variants: fadeUpVariants,
};

const stagger = {
  initial: "hidden",
  whileInView: "show",
  viewport: viewportOnce,
  variants: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

const phoneStats = [
  { label: "Work", value: "42h", color: "bg-[#b88cff]" },
  { label: "Home", value: "56h", color: "bg-white" },
  { label: "Commute", value: "11h", color: "bg-[#7c4dff]" },
  { label: "Gym", value: "4h", color: "bg-[#6f5cff]" },
  { label: "Restaurants", value: "6h", color: "bg-[#3b2a68]" },
];

const problemStats = [
  { label: "Work", value: "42h" },
  { label: "Commute", value: "11h" },
  { label: "Gym", value: "4h" },
  { label: "Coffee Shops", value: "6h" },
];

const insights = [
  "You spent 3x more time commuting than exercising this week.",
  "Your social time decreased 42% compared to last month.",
  "You spent 19 days commuting this year.",
];

const yearStats = [
  { value: "84", label: "Days Working" },
  { value: "113", label: "Gym Visits" },
  { value: "34", label: "New Places" },
  { value: "19", label: "Days Commuting" },
];

const features = [
  {
    title: "Automatic Time Tracking",
    body: "Understand your routines without timers, manual logs, or spreadsheet rituals.",
  },
  {
    title: "AI Life Insights",
    body: "Get sharp, personal observations that turn invisible habits into clear signals.",
  },
  {
    title: "Weekly Reports",
    body: "A beautifully packaged recap of how your hours moved across work, home, health, and people.",
  },
  {
    title: "Goal Alignment",
    body: "See whether your calendar of real life matches the life you keep saying you want.",
  },
  {
    title: "Personal Analytics",
    body: "Spot trends across places, categories, seasons, and the moments that quietly compound.",
  },
  {
    title: "Privacy First",
    body: "Built around personal control, clear consent, and a private-by-default product philosophy.",
  },
];

const faqs = [
  {
    question: "How does Hora work?",
    answer:
      "Hora uses automatic signals from your phone to classify time into meaningful life categories, then turns those patterns into weekly AI reports.",
  },
  {
    question: "Does it track my location?",
    answer:
      "The upcoming app will use location only with your permission so it can understand places like work, home, gym, restaurants, and commute time.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Hora is designed for deeply personal analytics, so privacy, transparency, and user control are central to the product.",
  },
  {
    question: "When is launch?",
    answer:
      "Hora is launching soon. Join the waitlist and you will be among the first to get access.",
  },
];

function IconOrbit() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-7 w-7">
      <path
        d="M24 5.5c10.2 0 18.5 8.3 18.5 18.5S34.2 42.5 24 42.5 5.5 34.2 5.5 24 13.8 5.5 24 5.5Z"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <path
        d="M24 12v12l8 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
      <circle cx="35" cy="13" r="4" fill="currentColor" opacity="0.95" />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a6ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="purple-glow inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8c5bff] via-[#a77aff] to-[#d6c0ff] px-7 text-sm font-bold text-[#08020d] transition"
    >
      {children}
    </motion.a>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
      className="relative mx-auto w-full max-w-[330px] sm:max-w-[370px]"
    >
      <div className="absolute -inset-10 rounded-full bg-[#8c5bff]/25 blur-3xl" />
      <div className="iphone-shadow relative rounded-[3.4rem] border border-white/15 bg-[#0b0711] p-3">
        <div className="rounded-[2.75rem] border border-white/10 bg-black p-2">
          <div className="relative overflow-hidden rounded-[2.35rem] bg-[#07040c] px-5 pb-6 pt-4">
            <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(157,108,255,0.28),transparent_52%)]" />
            <div className="relative pt-8">
              <div className="flex items-center justify-between text-xs text-white/55">
                <span>Today</span>
                <span>Life Index 82</span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-sm text-white/50">Weekly time</p>
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    119h
                  </h3>
                </div>
                <div className="rounded-full border border-[#b88cff]/30 bg-[#b88cff]/10 px-3 py-1 text-xs font-medium text-[#d9c7ff]">
                  AI ready
                </div>
              </div>

              <div className="mt-6 grid grid-cols-[1fr_auto] gap-5">
                <div className="space-y-3">
                  {phoneStats.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                        />
                        <span className="text-xs text-white/60">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pie-chart h-28 w-28 rounded-full shadow-[0_0_40px_rgba(157,108,255,0.24)]" />
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.07] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#9d6cff] text-xs font-black text-white">
                    AI
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7a6ff]">
                    Weekly insight
                  </p>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  You spent more time commuting than exercising. Moving one trip
                  remote could recover 2.4 hours next week.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-7 rounded-lg bg-white/[0.05]"
                    style={{
                      opacity: 0.35 + ((index * 17) % 55) / 100,
                      background:
                        index % 5 === 0
                          ? "linear-gradient(180deg,#b88cff,#6f5cff)"
                          : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "success" | "invalid-email" | "server-error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setStatus("invalid-email");
      return;
    }

    const source =
      new URLSearchParams(window.location.search).get("source") || "direct";

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          source,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("API ERROR:", errorData);
        throw new Error("Failed to join waitlist");
      }

      setEmail("");
      setStatus("success");
    } catch (error) {
      console.error("WAITLIST ERROR:", error);
      setStatus("server-error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex w-full flex-col gap-3 sm:flex-row ${
        compact ? "max-w-xl" : "max-w-2xl"
      }`}
    >
      <label
        className="sr-only"
        htmlFor={compact ? "hero-email" : "waitlist-email"}
      >
        Email address
      </label>

      <input
        id={compact ? "hero-email" : "waitlist-email"}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);

          if (status !== "idle") {
            setStatus("idle");
          }
        }}
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@email.com"
        className="h-14 flex-1 rounded-full border border-white/10 bg-white/[0.07] px-5 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#b88cff]/70 focus:bg-white/[0.1] focus:ring-4 focus:ring-[#9d6cff]/20"
      />

      <motion.button
        whileHover={{ scale: 1.025, y: -1 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="purple-glow h-14 rounded-full bg-gradient-to-r from-[#8c5bff] via-[#a77aff] to-[#d6c0ff] px-7 text-sm font-bold text-[#08020d]"
      >
        Join Waitlist
      </motion.button>

      <div className="min-h-6 sm:absolute">
        {status === "success" && (
          <p className="pt-1 text-center text-sm font-medium text-[#d9c7ff] sm:text-left">
            You&apos;re on the list.
          </p>
        )}

        {status === "invalid-email" && (
          <p className="pt-1 text-center text-sm font-medium text-red-300 sm:text-left">
            Enter a valid email.
          </p>
        )}

        {status === "server-error" && (
          <p className="pt-1 text-center text-sm font-medium text-red-300 sm:text-left">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0 opacity-[0.035]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[36rem] bg-[radial-gradient(circle_at_50%_0%,rgba(157,108,255,0.24),transparent_62%)]" />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3"
        >
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Hora home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black tracking-tight text-black">
              H
            </span>
            <span className="text-sm font-black tracking-[0.28em] text-white">
              HORA
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/68 sm:flex">
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQ
            </a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-[#d9c7ff]"
          >
            Join Waitlist
          </a>
        </motion.nav>
      </header>

      <section
        id="top"
        className="relative z-10 px-4 pb-24 pt-36 sm:px-6 sm:pb-32 sm:pt-44"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b88cff]/25 bg-[#9d6cff]/10 px-4 py-2 text-sm font-medium text-[#d9c7ff]">
              <span className="h-2 w-2 rounded-full bg-[#b88cff] shadow-[0_0_18px_#b88cff]" />
              Launching Soon
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              See Where Your Life Goes.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl lg:mx-0">
              Track your time automatically. Discover where your hours are
              spent. Get AI-powered weekly reports about your life.
            </p>
            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
              <PrimaryButton href="#waitlist">Join the Waitlist</PrimaryButton>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <span className="flex -space-x-2">
                  {["A", "M", "J"].map((item) => (
                    <span
                      key={item}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-black bg-white text-xs font-bold text-black"
                    >
                      {item}
                    </span>
                  ))}
                </span>
                Early access opening soon
              </div>
            </div>
            <div className="mt-10">
              <WaitlistForm compact />
            </div>
          </motion.div>

          <PhoneMockup />
        </div>
      </section>

      <section
        className="relative z-10 px-4 py-20 sm:px-6"
        aria-labelledby="problem-heading"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>The problem</SectionEyebrow>
            <h2
              id="problem-heading"
              className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl"
            >
              You Track Your Money. Why Not Your Time?
            </h2>
          </motion.div>

          <motion.div
            {...stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {problemStats.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUpVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                className="glass-panel premium-border rounded-[2rem] p-6"
              >
                <p className="text-sm font-medium text-white/48">
                  {item.label}
                </p>
                <p className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp}
            className="mx-auto mt-12 max-w-2xl text-center text-2xl font-medium leading-snug text-white/78 sm:text-3xl"
          >
            Most people have no idea where their life actually goes.
          </motion.p>
        </div>
      </section>

      <section
        className="relative z-10 px-4 py-20 sm:px-6 text-center"
        aria-labelledby="insights-heading"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>AI insights</SectionEyebrow>
            <h2
              id="insights-heading"
              className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl"
            >
              Turn ordinary weeks into life-changing signals.
            </h2>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid gap-5 lg:grid-cols-3">
            {insights.map((insight, index) => (
              <motion.div
                key={insight}
                variants={fadeUpVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel premium-border group rounded-[2rem] p-7 transition"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#9d6cff]/16 text-[#d9c7ff] transition group-hover:bg-[#9d6cff]/28">
                  <IconOrbit />
                </div>
                <p className="text-xl font-medium leading-8 text-white">
                  {insight}
                </p>
                <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${62 + index * 11}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#7c4dff] to-[#d6c0ff]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="relative z-10 px-4 py-20 sm:px-6"
        aria-labelledby="wrapped-heading"
      >
        <motion.div
          {...fadeUp}
          className="glass-panel premium-border mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] p-6 sm:rounded-[3rem] sm:p-10"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(157,108,255,0.28),transparent_38%)]" />
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionEyebrow>Year in review</SectionEyebrow>
              <h2
                id="wrapped-heading"
                className="text-gradient text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-6xl"
              >
                Spotify Wrapped For Your Life
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                Your year, translated into the places, routines, relationships,
                and tradeoffs that actually shaped it.
              </p>
              <div className="mt-8 rounded-3xl border border-[#b88cff]/20 bg-[#9d6cff]/12 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d9c7ff]">
                  AI Summary
                </p>
                <p className="mt-3 text-2xl font-semibold leading-snug text-white">
                  You spent 84 days at work and 6 days at the gym this year.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {yearStats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -6 }}
                  className="rounded-[2rem] border border-white/10 bg-black/28 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                  <p className="text-6xl font-semibold tracking-[-0.07em] text-white">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/48">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="features"
        className="relative z-10 px-4 py-20 sm:px-6"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Features</SectionEyebrow>
            <h2
              id="features-heading"
              className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl"
            >
              Built for people who want their time back.
            </h2>
          </motion.div>

          <motion.div
            {...stagger}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                variants={fadeUpVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                className="glass-panel premium-border rounded-[2rem] p-6"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.07] text-[#d9c7ff]">
                  <span className="text-sm font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-white/58">{feature.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="waitlist"
        className="relative z-10 px-4 py-24 sm:px-6"
        aria-labelledby="waitlist-heading"
      >
        <motion.div
          {...fadeUp}
          className="glass-panel premium-border mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(157,108,255,0.34),transparent_44%)]" />
          <SectionEyebrow>Waitlist</SectionEyebrow>
          <h2
            id="waitlist-heading"
            className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl"
          >
            Be First To See Where Your Life Goes
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/62">
            Join the early list for product updates, private beta invites, and
            the first Hora life report.
          </p>
          <div className="relative mt-10">
            <WaitlistForm />
          </div>
        </motion.div>
      </section>

      <section
        id="faq"
        className="relative z-10 px-4 py-20 sm:px-6"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div {...fadeUp} className="text-center">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2
              id="faq-heading"
              className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl"
            >
              Questions before you join?
            </h2>
          </motion.div>
          <motion.div {...stagger} className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <motion.details
                key={faq.question}
                variants={fadeUpVariants}
                className="glass-panel group rounded-3xl p-6 open:bg-white/[0.08]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-white">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-[#d9c7ff] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-white/58">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <a
            href="#top"
            className="mx-auto flex items-center gap-3 sm:mx-0"
            aria-label="Hora home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black tracking-tight text-black">
              H
            </span>
            <span className="text-sm font-black tracking-[0.28em] text-white">
              HORA
            </span>
          </a>
          <div className="flex justify-center gap-6 text-sm font-medium text-white/50">
            <a
              className="transition hover:text-white"
              href="https://www.tiktok.com"
              rel="noreferrer"
            >
              TikTok
            </a>
            <a
              className="transition hover:text-white"
              href="https://twitter.com"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              className="transition hover:text-white"
              href="https://www.instagram.com"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <p className="text-sm text-white/42">© Hora</p>
        </div>
      </footer>
    </main>
  );
}
