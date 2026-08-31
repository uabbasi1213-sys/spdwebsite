"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  deliveryLocation: z.string().min(2, "Delivery location is required"),
  cargoType: z.string().min(2, "Cargo type is required"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        toast.success("Your request has been sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-white font-bold text-2xl mb-3">
          Request Sent Successfully!
        </h3>
        <p className="text-primary-300 mb-6">
          Thank you for contacting SUPER PAK DATA. We will get back to you
          shortly with a quote.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-primary"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your full name"
            className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+92 3XX XXXXXXX"
            className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1.5">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">
          Email Address{" "}
          <span className="text-primary-500 text-xs">(Optional)</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
          className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Pickup Location */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Pickup Location <span className="text-accent">*</span>
          </label>
          <input
            {...register("pickupLocation")}
            type="text"
            placeholder="Karachi area / address"
            className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20"
          />
          {errors.pickupLocation && (
            <p className="text-red-400 text-xs mt-1.5">
              {errors.pickupLocation.message}
            </p>
          )}
        </div>

        {/* Delivery Location */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Delivery Location <span className="text-accent">*</span>
          </label>
          <input
            {...register("deliveryLocation")}
            type="text"
            placeholder="Lahore area / address"
            className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20"
          />
          {errors.deliveryLocation && (
            <p className="text-red-400 text-xs mt-1.5">
              {errors.deliveryLocation.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Cargo Type */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Cargo Type <span className="text-accent">*</span>
          </label>
          <input
            {...register("cargoType")}
            type="text"
            placeholder="e.g. Electronics, Textiles, Furniture"
            className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20"
          />
          {errors.cargoType && (
            <p className="text-red-400 text-xs mt-1.5">
              {errors.cargoType.message}
            </p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Service Type <span className="text-accent">*</span>
          </label>
          <select
            {...register("serviceType")}
            className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20 appearance-none"
          >
            <option value="">Select a service...</option>
            <option value="lcl">LCL (Less than Container Load)</option>
            <option value="fcl">FCL (Full Container Load)</option>
            <option value="door-to-door">Door-to-Door Transportation</option>
            <option value="commercial-freight">Commercial Freight</option>
            <option value="not-sure">Not Sure / Need Advice</option>
          </select>
          {errors.serviceType && (
            <p className="text-red-400 text-xs mt-1.5">
              {errors.serviceType.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-white/80 text-sm font-medium mb-2">
          Additional Details / Message{" "}
          <span className="text-primary-500 text-xs">(Optional)</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us more about your cargo, timeline, special requirements..."
          className="w-full bg-primary-700/50 border border-white/10 focus:border-accent/50 rounded-xl px-4 py-3 text-white placeholder-primary-400 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/20 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Quote Request
          </>
        )}
      </button>
    </form>
  );
}
