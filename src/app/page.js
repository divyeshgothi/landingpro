"use client";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

const page = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        const speed = 30;
        countersRef.current.forEach((counter, index) => {
          function updateCounter() {
            const targetNumber = parseInt(counter.dataset.target, 10);
            let initialNumber = parseInt(counter.innerText, 10);
            const incPerCount = targetNumber / speed;

            function animate() {
              initialNumber += incPerCount;
              if (counter.dataset.target === "45") {
                counter.innerText = initialNumber >= targetNumber ? `${targetNumber}M+` : `${initialNumber}`;
              } else {
                counter.innerText = Math.ceil(initialNumber);
              }
              if (initialNumber < targetNumber) {
                requestAnimationFrame(animate);
              }
            }

            animate();

            if (counter.parentElement.style.animation) {
              counter.parentElement.style.animation = '';
            } else {
              counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / countersRef.current.length + 0.5}s`;
            }
          }

          updateCounter();
        });

        observer.unobserve(counterRef.current);
      },
      {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
      }
    );

    counterObserver.observe(counterRef.current);
  }, []);

  useEffect(() => {
    countersRef.current = Array.from(counterRef.current.querySelectorAll('.count_review span'));
  }, []);

  return (
    <main>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero_main">
            <div className="hero_content">
              <div className="build_point">
                <p className="round"></p>
                <span>build everything</span>
              </div>
              <h1>Amazingly fexible, customizable and easy to use</h1>
              <p className="hero_descript">
                Build high quality landing pages using Landingpro now.
              </p>
              <Link href="#" className="btn btn_get_started">
                Get Started
              </Link>
              <div className="content_profile">
                <div className="profile_cover">
                  <Image
                    src="/images/Ellipse 7.png"
                    alt="logo"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                  />
                  <Image
                    src="/images/Ellipse 8.png"
                    alt="logo"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                  />
                  <Image
                    src="/images/Ellipse 9.png"
                    alt="logo"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                  />
                </div>
                <div className="profile_caption">
                  <p>
                    Need help? <Link href="#">Contact our experts</Link> Tell us
                    about your project
                  </p>
                </div>
              </div>
            </div>
            <div className="hero_image">
              <Image
                src="/images/hero_image.jpg"
                alt="logo"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                className="w_f"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="counter">
      <div className="container">
        <div className="counter_main" ref={counterRef}>
          <div className="count_review">
            <i className="m_icon google_plat"></i>
            <span data-target="4.86">0</span>
            <p>Out of 5 stars from 3896 reviews on google platform</p>
          </div>
          <div className="count_review">
            <i className="m_icon testimonials"></i>
            <span data-target="364">0</span>
            <p>Client testimonials received in year 2021</p>
          </div>
          <div className="count_review">
            <i className="m_icon project_market"></i>
            <span data-target="45">0</span>
            <p>Revenue generated through new projects & marketing</p>
          </div>
        </div>
      </div>
    </section>

      <section className="landing_section">
        <div className="container">
          <div className="landing_main">
            <div className="landing_image">
              <Image
                src="/images/Layer-282.png"
                alt="logo"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className=""
              />
            </div>
            <div className="landing_content">
              <div className="build_point">
                <p className="round"></p>
                <span>build everything</span>
              </div>
              <h2>Build amazing websites and landing pages with ease</h2>
              <p className="landing_descript">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
              <div className="landing_point">
                <div className="landing_option">
                  <i className="m_icon m_right"></i>
                  <p>Easy Drag & Drop</p>
                </div>
                <div className="landing_option">
                  <i className="m_icon m_right"></i>
                  <p>Create new sections</p>
                </div>
                <div className="landing_option">
                  <i className="m_icon m_right"></i>
                  <p>Powered by Elementor</p>
                </div>
                <div className="landing_option">
                  <i className="m_icon m_right"></i>
                  <p>Ready to use</p>
                </div>
              </div>
              <Link href="#" className="btn btn_get_started">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="amazing_box">
        <div className="container">
          <div className="build_point text_center">
            <p className="round"></p>
            <span>build everything</span>
          </div>
          <h2 className="box_title">
            Build amazing websites & landing pages with ease using Landingpro
          </h2>
          <div className="boxis_main">
            <div className="beautiful_design">
              <i className="m_design"></i>
              <h3>Beautiful designs premade</h3>
              <p>
                Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="#" className="btn_started_box">
                Get Started
                <i className="m_right_arrow"></i>
              </Link>
            </div>

            <div className="beautiful_design">
              <i className="m_coded"></i>
              <h3>Coded with much care & notes</h3>
              <p>
                Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="#" className="btn_started_box">
                Get Started
                <i className="m_right_arrow"></i>
              </Link>
            </div>

            <div className="beautiful_design">
              <i className="m_amazing"></i>
              <h3>Amazing demos included</h3>
              <p>
                Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="#" className="btn_started_box">
                Get Started
                <i className="m_right_arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="customer">
        <div className="container">
          <div className="happy_customer">
            <Image
              src="/images/Vector-Smart Object1.png"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
              className="w_f"
            />
            <p className="custmor_descrip">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exea commodo consequat.
            </p>
            <div className="customer_name">
              <strong>Jonathan Diesel</strong>
              <p>Happy Customer, Apple inc</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project_form">
        <div className="container">
          <div className="project_form_main">
            <div className="help_form">
              <div className="build_point">
                <p className="round"></p>
                <span className="text-white">build everything</span>
              </div>
              <h2>
                Let’s discuss about your project and take it the next level.
              </h2>
              <div className="form_field_main">
                <div className="form_field_help">
                  <label htmlFor="phone">Phone</label>
                  <input
                    className="input_help"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+323-25-8964"
                  />
                </div>
                <div className="form_field_help">
                  <label htmlFor="email">Email</label>
                  <input
                    className="input_help"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="me@landingpro.com"
                  />
                </div>
                <div className="form_field_help w-full">
                  <label htmlFor="location">Location</label>
                  <input
                    className="input_help"
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Mark Avenue, Dalls Road, New York"
                  />
                </div>
              </div>
              <div className="trustedby">
                <p className="text-white text-base pb-4">Trusted by</p>
                <div className="company_logo">
                  <Image
                    src="/images/Vector-Smart Object.png"
                    alt="logo"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                    className="w_f"
                  />
                  <Image
                    src="/images/image(24).png"
                    alt="logo"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                    className="w_f"
                  />
                  <Image
                    src="/images/Stripe-wordmark - slate.png"
                    alt="logo"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                    className="w_f"
                  />
                  <Image
                    src="/images/wise_hero_blue_navy_RGB.png"
                    alt="logo"
                    width={0}
                    height={0}
                    layout="responsive"
                    quality={100}
                    sizes="100vh"
                    className="w_f"
                  />
                </div>
              </div>
            </div>
            <div className="form-fix">
              <h2>Start the project</h2>
              <form className="form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="First name"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'First name'"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Last name'"
                  />
                </div>
                <div className="form-group fg-full-width">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="youremail@website.com"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'youremail@website.com'"
                  />
                </div>
                <div className="form-group fg-full-width">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Country'"
                  />
                </div>
                <div className="form-group fg-full-width">
                  <textarea
                    className="form-control"
                    placeholder="Let us know about your project"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Let us know about your project'"
                  ></textarea>
                </div>
                <div className="comment-form-cookies-consent">
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    value="yes"
                  />
                  <div>
                    I have read and acknowledge the{" "}
                    <p className="text-primary inline cursor-pointer">
                      Terms and Conditions{" "}
                    </p>
                  </div>
                </div>
                <div className="form-group fg-full-width">
                  <button className="btn submit-btn" type="submit">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
