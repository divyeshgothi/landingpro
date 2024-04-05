import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_main">
          <div className="footer_top_part">
            <Link href="#" className="ftr_logo">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
            </Link>
            <div className="social_icon">
              <Link href="#">
                <i className="m_twitter"></i>
              </Link>
              <Link href="#">
                <i className="m_facebook"></i>
              </Link>
              <Link href="#">
                <i className="m_linkdin"></i>
              </Link>
            </div>
          </div>
          <div className="footer_menu_part">
            <div className="ftr_menu">
              <h4>Features</h4>
              <ul>
                <li>
                  <Link href="#">Online Payments</Link>
                </li>
                <li>
                  <Link href="#">Financial Projections</Link>
                </li>
                <li>
                  <Link href="#">Bookkeeping</Link>
                </li>
                <li>
                  <Link href="#">Banking</Link>
                </li>
              </ul>
            </div>

            <div className="ftr_menu">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href="#">Documentation</Link>
                </li>
                <li>
                  <Link href="#">Integrations</Link>
                </li>
                <li>
                  <Link href="#">API Reference</Link>
                </li>
                <li>
                  <Link href="#">Support</Link>
                </li>
                <li>
                  <Link href="#">Help</Link>
                </li>
              </ul>
            </div>

            <div className="ftr_menu">
              <h4>Platform</h4>
              <ul>
                <li>
                  <Link href="#">Infrastructure</Link>
                </li>
                <li>
                  <Link href="#">Certifications</Link>
                </li>
                <li>
                  <Link href="#">Licenses</Link>
                </li>
                <li>
                  <Link href="#">Terms and conditions</Link>
                </li>
                <li>
                  <Link href="#">Legal</Link>
                </li>
              </ul>
            </div>

            <div className="ftr_menu relative">
              <h4>Sign up for updates</h4>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
              <i className="m_enter"></i>
              <p>© Copyright 2022. All rights reserved by LandingPro Theme.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
