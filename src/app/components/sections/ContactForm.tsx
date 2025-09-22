"use client";

import * as React from "react";
import { GradientButton } from "../primitives/GradientButton";

export function ContactForm() {
  return (
    <section className="w-full bg-[#00102A]">
      <div className="mx-auto w-full max-w-[1352px] px-6 pb-20 pt-10 md:pt-14">

        <h2
          className="text-center text-white"
          style={{
            fontFamily: "Sora, ui-sans-serif, system-ui",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4.5vw, 4rem)", // 32→64
            lineHeight: 1.2,
          }}
        >
          Don’t Wait For The Next Breach
        </h2>
        <p className="mx-auto mt-3 max-w-[720px] text-center text-[18px] leading-[150%] text-[#F5F7FA]">
          We’re here to support your business. Whether you want to learn more about our services,
          explore collaboration opportunities, or need guidance, our team is ready to help you
          strengthen your open source security.
        </p>


        <div className="mx-auto mt-10 w-full max-w-[512px]">
          <div
            className="rounded-[16px] border p-6 backdrop-blur"
            style={{
              background: "rgba(0, 16, 42, 0.6)",
              borderColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 25px 50px -12px rgba(239, 77, 172, 0.25)",
            }}
          >

            <div
              className="text-white"
              style={{
                fontFamily: "Sora, ui-sans-serif, system-ui",
                fontSize: "40px",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Get In Touch
            </div>
            <p className="mt-1 text-[20px] leading-[150%] text-white">
              This is so that we can get in contact with you in case any opportunity comes up
            </p>


            <form className="mt-5 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label htmlFor="name" className="text-sm text-white">
                  <span className="block">Your Full Name*</span>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    className="mt-1 w-full rounded-[8px] border bg-[#001331] px-3 py-2 text-white outline-none"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  />
                </label>

                <label htmlFor="email" className="text-sm text-white">
                  <span className="block">Your Email*</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="mt-1 w-full rounded-[8px] border bg-[#001331] px-3 py-2 text-white outline-none"
                    style={{
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  />
                </label>
              </div>

              <label htmlFor="linkedin" className="text-sm text-white">
                <span className="block">Your LinkedIn</span>
                <input
                  id="linkedin"
                  name="linkedin"
                  placeholder="Your LinkedIn"
                  className="mt-1 w-full rounded-[8px] border bg-[#001331] px-3 py-2 text-white outline-none"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                />
              </label>

              <label htmlFor="message" className="text-sm text-white">
                <span className="block">Your Message*</span>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Enter your message..."
                  className="mt-1 w-full resize-y rounded-[8px] border bg-[#001331] px-3 py-2 text-white outline-none"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                />
              </label>


              <style jsx>{`
                input::placeholder,
                textarea::placeholder {
                  color: #d2d2d3;
                  opacity: 1;
                }
              `}</style>

              <div className="flex justify-end pt-2">
                <GradientButton href="/" label="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
