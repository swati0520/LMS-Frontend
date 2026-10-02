"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/views/auth/AuthShell";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthShell
      title="Create Account"
      description="Start learning something new today."
      footer={<>Already have an account? <Link href="/auth/login" className="ml-1 font-semibold text-lime-200 transition hover:text-lime-100">Login</Link></>}
    >
      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <Field label="Full name" name="name" type="text" placeholder="Your full name" autoComplete="name" />
        <Field label="Email address" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
        <PasswordField label="Password" name="password" show={showPassword} onToggle={() => setShowPassword(!showPassword)} />
        <PasswordField label="Confirm password" name="confirm-password" show={showConfirmPassword} onToggle={() => setShowConfirmPassword(!showConfirmPassword)} />

        <button type="submit" className="group mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lime-200 px-5 py-3 text-sm font-semibold text-[#11170b] shadow-[0_8px_28px_rgba(190,242,100,0.13)] transition hover:bg-lime-100 hover:shadow-[0_8px_34px_rgba(190,242,100,0.22)] focus:outline-none focus:ring-4 focus:ring-lime-200/25">
          Create Account <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </form>
    </AuthShell>
  );
}

function Field({ label, name, type, placeholder, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white/75">{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} required autoComplete={autoComplete} className={inputClass} />
    </div>
  );
}

function PasswordField({ label, name, show, onToggle }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-white/75">{label}</label>
      <div className="relative">
        <input id={name} name={name} type={show ? "text" : "password"} placeholder="At least 8 characters" required minLength={8} autoComplete="new-password" className={`${inputClass} pr-16`} />
        <button type="button" onClick={onToggle} className="absolute inset-y-0 right-4 text-xs font-semibold text-teal-200/80 transition hover:text-teal-100" aria-label={show ? "Hide password" : "Show password"}>{show ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

const inputClass = "min-h-12 w-full rounded-2xl border border-white/[0.12] bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 hover:border-white/20 focus:border-lime-200/45 focus:bg-white/[0.045] focus:ring-4 focus:ring-lime-200/[0.07]";
