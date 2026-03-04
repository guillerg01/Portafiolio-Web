"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocale } from "@/app/providers/LocaleProvider";

type ContactFormValues = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export function ContactSection() {
  const {
    content: { contact },
  } = useLocale();

  const { register, handleSubmit, reset } = useForm<ContactFormValues>({
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const mailtoBase = useMemo(() => `mailto:guillerg0101@gmail.com`, []);

  const onSubmit = (values: ContactFormValues) => {
    const params = new URLSearchParams({
      subject: `New opportunity from ${values.name}`,
      body: [
        `Hi Guillermo,`,
        "",
        values.message,
        "",
        `From: ${values.name}`,
        `Email: ${values.email}`,
        values.company ? `Company: ${values.company}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    window.location.href = `${mailtoBase}?${params.toString()}`;
    reset();
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen snap-center flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      <header className="absolute top-24 text-center">
        <h2 className="text-3xl uppercase tracking-[18px] text-gray-500">
          {contact.sectionTitle}
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[6px] text-gray-400">
          {contact.subtitle}
        </p>
      </header>

      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-[#F7AB0A]/10 via-transparent to-transparent blur-2xl" />

      <div className="mt-40 grid w-full max-w-5xl gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white">
            {contact.subtitle}
          </h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {contact.intro}
          </p>
          <ul className="space-y-4 text-sm text-gray-200">
            {contact.channels.map((channel) => (
              <li
                key={`${channel.type}-${channel.value}`}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-[#F7AB0A]/60 hover:bg-white/10"
              >
                <div>
                  <p className="text-xs uppercase tracking-[4px] text-gray-400">
                    {channel.type}
                  </p>
                  <p className="text-sm text-white">{channel.value}</p>
                </div>
                <a
                  href={channel.url}
                  className="rounded-full border border-[#F7AB0A]/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#F7AB0A] transition hover:bg-[#F7AB0A]/10"
                >
                  {channel.cta}
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs uppercase tracking-[6px] text-gray-400">
            {contact.availability}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              {contact.form.name}
              <input
                {...register("name", { required: true })}
                placeholder={contact.form.name}
                className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#F7AB0A]"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-300">
              {contact.form.email}
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="you@company.com"
                className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#F7AB0A]"
                required
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm text-gray-300">
            {contact.form.company}
            <input
              {...register("company")}
              placeholder={contact.form.companyPlaceholder}
              className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#F7AB0A]"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-gray-300">
            {contact.form.message}
            <textarea
              {...register("message", { required: true })}
              placeholder={contact.form.messagePlaceholder}
              rows={5}
              className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[#F7AB0A]"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[#F7AB0A] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#F7AB0A]/80"
          >
            {contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
