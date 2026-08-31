"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Truck, Eye, EyeOff, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push("/admin/dashboard");
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-950 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-orange-glow">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-black text-white">SUPER PAK DATA</h1>
          <p className="text-primary-400 text-sm mt-1">Admin Panel</p>
        </div>

        {/* Login Card */}
        <div className="bg-primary-800/60 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-700 rounded-xl flex items-center justify-center">
              <Lock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Admin Login</h2>
              <p className="text-primary-400 text-sm">Enter your password to continue</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Admin Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full btn-primary py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Login to Admin
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-primary-500 text-xs text-center">
              Default password:{" "}
              <code className="text-primary-300 bg-primary-700 px-2 py-0.5 rounded">
                SuperPak2024
              </code>
            </p>
            <p className="text-primary-600 text-xs text-center mt-1">
              Change in .env.local file → ADMIN_PASSWORD
            </p>
          </div>
        </div>

        <p className="text-center text-primary-600 text-xs mt-6">
          <a href="/" className="hover:text-primary-400 transition-colors">
            ← Back to Website
          </a>
        </p>
      </div>
    </div>
  );
}
