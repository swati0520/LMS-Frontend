"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "@/views/auth/AuthShell";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthShell
      title="Welcome Back"
      description="Continue your learning journey."
      footer={<>Don&apos;t have an account? <Link href="/auth/register" className="ml-1 font-semibold text-lime-200 transition hover:text-lime-100">Sign Up</Link></>}
    >
      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <Field label="Email address" name="email" type="email" placeholder="you@example.com" autoComplete="email" />

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-white/75">Password</label>
          <div className="relative">
            <input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" required autoComplete="current-password" className={`${inputClass} pr-16`} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 text-xs font-semibold text-teal-200/80 transition hover:text-teal-100" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? "Hide" : "Show"}</button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-0.5 text-xs sm:text-sm">
          <label className="flex min-h-6 cursor-pointer items-center gap-2.5 text-white/55"><input type="checkbox" name="remember" className="size-4 rounded border-white/20 bg-white/[0.06] accent-lime-300 focus:ring-lime-200/30" />Remember me</label>
          <a href="#" onClick={(event) => event.preventDefault()} className="font-medium text-teal-200/80 transition hover:text-teal-100">Forgot password?</a>
        </div>

        <button type="submit" className="group mt-1 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-lime-200 px-5 py-3 text-sm font-semibold text-[#11170b] shadow-[0_8px_28px_rgba(190,242,100,0.13)] transition hover:bg-lime-100 hover:shadow-[0_8px_34px_rgba(190,242,100,0.22)] focus:outline-none focus:ring-4 focus:ring-lime-200/25">
          Login <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
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

const inputClass = "min-h-12 w-full rounded-2xl border border-white/[0.12] bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/25 hover:border-white/20 focus:border-lime-200/45 focus:bg-white/[0.045] focus:ring-4 focus:ring-lime-200/[0.07]";
