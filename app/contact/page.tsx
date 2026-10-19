"use client";

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";

const inputClass =
  "neu-card-inverse w-full rounded-full bg-transparent px-6 py-4 font-secondary text-sm text-accent outline-none placeholder:text-accent/40";

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
    <div className="px-10 py-8">
      {/* Header */}
      <div className="flex items-end gap-5">
        <h1 className="whitespace-nowrap font-primary text-[15vh] font-bold uppercase leading-[15vh] text-accent">
          Reach Out
        </h1>
        <div className="h-px w-full bg-accent" />
      </div>

      {/* Page Content */}
      <form onSubmit={handleSubmit} className="neu-card mt-10 rounded-4xl bg-primary p-10">
        <h2 className="font-secondary text-2xl font-semibold text-accent">Leave me a Message?</h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Left: inputs */}
          <div className="flex flex-col gap-6">
            <input name="firstName" value={form.firstName} onChange={update} placeholder="First Name" required className={inputClass} />
            <input name="lastName" value={form.lastName} onChange={update} placeholder="Last Name" required className={inputClass} />
            <input type="email" name="email" value={form.email} onChange={update} placeholder="Email Address" required className={inputClass} />
          </div>

          {/* Right: message + schedule + send */}
          <div className="flex flex-col gap-6">
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Your Message"
              required
              rows={4}
              className="neu-card-inverse w-full resize-none rounded-4xl bg-transparent px-6 py-4 font-secondary text-sm text-accent outline-none placeholder:text-accent/40 focus:ring-1 focus:ring-accent/40"
            />

            <div className="flex items-center justify-between gap-4 px-4 font-secondary text-accent">
              <span>Schedule a call?</span>
              <div className="flex gap-8">
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
              className="neu-accent flex w-fit items-center gap-3 self-end rounded-full bg-accent px-8 py-3 font-primary text-lg font-bold uppercase text-primary transition-transform hover:-translate-y-0.5 active:translate-y-0.5 hover:cursor-pointer"
            >
              Send <FaPaperPlane className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>

      {/* Contact chips */}
      <div className="mt-8 flex flex-wrap gap-6">
        {contacts.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="neu-card-dynamic flex items-center gap-4 rounded-full bg-primary px-7 py-4"
          >
            <Icon className="h-7 w-7 shrink-0 text-accent" />
            <span className="font-secondary text-sm uppercase opacity-80">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}