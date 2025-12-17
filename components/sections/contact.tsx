"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

const contacts = [
  {
    icon: "/mail.svg",
    text: "ipeter1010x@gmail.com",
    href: "mailto:ipeter1010x@gmail.com",
  },
  {
    icon: "/whatsapp.svg",
    text: "+234 8165262297.",
    href: "https://wa.me/2348165262297",
  },
  {
    icon: "/telegram.svg",
    text: "@iPetercrx",
    href: "https://t.me/iPetercrx",
  },
  {
    icon: "/twitter.svg",
    text: "@iPeter_crx",
    href: "https://x.com/iPeter_crx",
  },
];

const socials = [
  {
    icon: "/github.svg",
    href: "https://github.com/POA200",
    alt: "GitHub",
  },
  {
    icon: "/behance.svg",
    href: "https://behance.net/peteroluwaseyi1",
    alt: "Behance",
  },
];

export default function ContactSection() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const res = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
      }
    );
    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setState({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-16 px-2 md:px-0 flex justify-center items-center"
    >
      <div className="w-full bg-primary/5 py-6 md:py-24 px-4 md:px-84 flex flex-col md:flex-row gap-8 md:gap-8">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-2 justify-center">
          <span className="text-lg text-foreground">Want to work with me?</span>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Contact Me
          </h2>
          <div className="flex flex-col gap-4 mb-4">
            {contacts.map((c) => (
              <a
                key={c.text}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-black dark:text-white hover:text-primary transition-colors"
              >
                <Image src={c.icon} alt="icon" width={28} height={28} />
                {c.text}
              </a>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={s.icon} alt={s.alt} width={32} height={32} />
              </a>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-transparent"
        >
          <Input
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleChange}
            required
            className="border-primary focus-visible:ring-primary"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
            className="border-primary focus-visible:ring-primary"
          />
          <Textarea
            name="message"
            placeholder="Message"
            value={state.message}
            onChange={handleChange}
            required
            className="border-primary focus-visible:ring-primary min-h-[120px]"
          />
          <Button
            type="submit"
            size="lg"
            className="rounded-full mt-2"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
          {success && (
            <span className="text-green-600 text-sm mt-2">
              Message sent successfully!
            </span>
          )}
        </form>
      </div>
    </section>
  );
}
