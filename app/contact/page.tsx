"use client";

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const inputClass =
  "neu-card-inverse w-full rounded-full bg-transparent px-5 py-3.5 font-secondary text-sm text-accent outline-none placeholder:text-accent/40 sm:px-6 sm:py-4";

const contacts = [
  { Icon: MdEmail, label: "pushkaraj232002@gmail.com", href: "mailto:pushkaraj232002@gmail.com" },
  { Icon: FaPhoneAlt, label: "+91 9096582399", href: "tel:+919096582399" },
  { Icon: FaLinkedin, label: "@LinkedIn", href: "https://linkedin.com/in/your-handle" },
  { Icon: FaGithub, label: "@pushkaraj23", href: "https://github.com/pushkaraj23" },
  { Icon: FaInstagram, label: "@the.wannabe.polymath", href: "https://instagram.com/the.wannabe.polymath" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    schedule: "no",
  });

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // replace with your API call / email service
  };

  return (
    <div className="px-5 pt-24 pb-10 sm:px-8 md:px-10 md:py-8">
      {/* Header */}
      <div className="flex items-end gap-3 sm:gap-5">
        <h1 className="font-primary text-accent shrink-0 text-[clamp(2.25rem,9vw,15vh)] leading-none font-bold uppercase">
          Reach Out
        </h1>
        <div className="bg-accent h-px w-full" />
      </div>

      {/* Page Content */}
      <form
        onSubmit={handleSubmit}
        className="neu-card bg-primary mt-8 rounded-3xl p-5 sm:mt-10 sm:rounded-4xl sm:p-8 md:p-10"
      >
        <h2 className="font-secondary text-accent text-xl font-semibold sm:text-2xl">
          Leave me a Message?
        </h2>

        <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2">
          {/* Left: inputs */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <input
              name="firstName"
              value={form.firstName}
              onChange={update}
              placeholder="First Name"
              required
              className={inputClass}
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={update}
              placeholder="Last Name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={update}
              placeholder="Email Address"
              required
              className={inputClass}
            />
          </div>

          {/* Right: message + schedule + send */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Your Message"
              required
              rows={4}
              className="neu-card-inverse font-secondary text-accent w-full resize-none rounded-3xl bg-transparent px-5 py-3.5 text-sm outline-none placeholder:text-accent/40 focus:ring-1 focus:ring-accent/40 sm:rounded-4xl sm:px-6 sm:py-4"
            />

            <div className="font-secondary text-accent flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4">
              <span>Schedule a call?</span>
              <div className="flex gap-6 sm:gap-8">
                {["yes", "no"].map((val) => (
                  <label key={val} className="flex cursor-pointer items-center gap-3 capitalize">
                    <input
                      type="radio"
                      name="schedule"
                      value={val}
                      checked={form.schedule === val}
                      onChange={update}
                      className="peer sr-only"
                    />
                    <span
                      className="grid h-5 w-5 place-items-center rounded-full border-2 border-accent transition-shadow
                        after:h-2.5 after:w-2.5 after:scale-0 after:rounded-full after:bg-accent after:transition-transform after:content-['']
                        peer-checked:shadow-[0_0_12px_var(--accent)] peer-checked:after:scale-100
                        peer-focus-visible:ring-2 peer-focus-visible:ring-accent/50"
                    />
                    {val}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="neu-accent bg-accent font-primary text-primary flex w-full items-center justify-center gap-3 rounded-full px-8 py-3 text-lg font-bold uppercase transition-transform hover:-translate-y-0.5 hover:cursor-pointer active:translate-y-0.5 sm:w-fit sm:self-end"
            >
              Send <FaPaperPlane className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>

      {/* Contact chips */}
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-6">
        {contacts.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="neu-card-dynamic bg-primary flex items-center gap-3 rounded-full px-5 py-3.5 sm:gap-4 sm:px-7 sm:py-4"
          >
            <Icon className="text-accent h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
            <span className="font-secondary text-xs uppercase opacity-80 sm:text-sm">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
