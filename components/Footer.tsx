'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-main">
        <div className="container footer-grid-row">
          {/* Column 1: Info & About */}
          <div className="footer-about-us">
            <Link href="/" title="webnibo">
              <img src="/logo.png" alt="webnibo" className="footer-logo-img" />
            </Link>
            <p>
              <MapPin size={15} /> 123 Business Avenue, Suite 500, New York, NY 10001
            </p>
            <p>
              <Phone size={15} /> +1 (555) 019-2834
            </p>
            <p>
              <Phone size={15} /> +1 (555) 014-9201
            </p>
            <p>
              <i className="fa fa-mobile" style={{ fontSize: '18px', width: '15px' }}></i> +1 (555)
              012-3456
            </p>
            <p>
              <Mail size={15} /> info@example.com
            </p>
            <p>
              <Mail size={15} /> support@example.com
            </p>
            <p style={{ marginTop: '14px' }}>
              <a href="#footer" style={{ textDecoration: 'underline', fontSize: '14px' }}>
                Update cookie preferences
              </a>
            </p>

            <div className="block-social">
              <p className="h4">Follow us</p>
              <ul className="social-links">
                <li>
                  <a
                    href="https://facebook.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Newsletter */}
          <div className="block-newsletter">
            <p className="h4">Newsletter</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-form">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  required
                />
                <button type="submit" className="btn-primary">
                  <i className="fa fa-envelope-o"></i> Subscribe
                </button>
              </div>
              <div className="newsletter-message">
                <p>
                  You may unsubscribe at any moment. For that purpose, please find our contact info in
                  the legal notice.
                </p>
              </div>
              <label className="custom-checkbox">
                <input type="checkbox" defaultChecked />
                <span>I agree to the terms and conditions and the privacy policy</span>
              </label>
            </form>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-menu">
            <p className="h4">Legal</p>
            <ul>
              <li>
                <a href="#footer">Terms of Sale</a>
              </li>
              <li>
                <a href="#footer">Tax incentives</a>
              </li>
              <li>
                <a href="#footer">Privacy Policy</a>
              </li>
              <li>
                <a href="#footer">Payments and Shipping</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="footer-menu">
            <p className="h4">Company</p>
            <ul>
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/products">Products Catalog</Link>
              </li>
              <li>
                <a href="#footer">Store Location</a>
              </li>
              <li>
                <a href="#footer">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Account */}
          <div className="footer-menu">
            <p className="h4">Account</p>
            <ul>
              <li>
                <a href="#footer">My Account</a>
              </li>
              <li>
                <Link href="/products">Orders</Link>
              </li>
              <li>
                <a href="#footer">Addresses</a>
              </li>
              <li>
                <a href="#footer">Personal Data</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container copyright-row">
          <div>
            <p>© 2026 webnibo | All rights reserved</p>
            <p style={{ color: '#777', fontSize: '12px' }}>
              123 Business Avenue, Suite 500, New York, NY 10001 · Tax ID: 00-1234567
            </p>
          </div>
          <div>
            <img
              src="https://www.fissore.com/img/cms/pagamenti-accettati-fissore.png"
              alt="Payments Accepted"
              className="payment-logos"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
