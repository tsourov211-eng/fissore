'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandsCarousel from '@/components/BrandsCarousel';
import { categories } from '@/lib/products';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="site-root" id="top">
      {/* 1-4. Reusable Header */}
      <Header
        cartCount={cartCount}
        onCartClick={() => setCartCount((c) => c + 1)}
      />

      {/* 5. Hero Slideshow / Banner */}
      <section
        className="a-banner"
        style={{
          backgroundImage:
            "url('https://www.fissore.com/modules/zoneslideshow/views/img/slideImages/1758205571.jpg')",
        }}
      >
        <div className="container">
          <div className="caption-wrapper">
            <h2>webnibo: online sale of tiles, faucets, and bathroom furniture</h2>
            <p className="text-slide">
              We offer you a wide selection of products for flooring, bathroom furniture, faucets, and
              more. Discover high-quality design solutions to transform your spaces into unique and
              elegant environments.
            </p>
            <Link className="btn_slide" href="/products">
              See all products
            </Link>
          </div>
        </div>
      </section>



      {/* 7. Special Offers Showcase CTA Banner */}
      <section className="container" id="offers">
        <div className="offers-cta-banner">
          <div className="offers-cta-content">
            <span className="offers-cta-badge">SPECIAL COLLECTION ON OFFER</span>
            <h2>EASY Bathroom Composition &amp; Tiles on Offer</h2>
            <p>
              Explore our full catalog of tiles, parquet, bathroom furniture, and wellness
              solutions. High quality design products with immediate delivery and discounts up to 10%.
            </p>
          </div>
          <div>
            <Link href="/products" className="btn_primary_brand" style={{ whiteSpace: 'nowrap' }}>
              View All Products &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Shop by Categories */}
      <section className="container" id="categories">
        <div className="pavimenti_container">
          <h2 className="accadue">Shop by Categories</h2>
          <div className="pavimenti_card_container">
            {categories.map((c) => (
              <div
                key={c.name}
                className="pavimenti_card"
                style={{ backgroundImage: `url('${c.image}')` }}
              >
                <div className="linea_pavimenti">{c.name}</div>
                <Link href={c.href}>
                  discover more &nbsp;
                  <i className="material-icons" style={{ fontSize: '15px' }}>
                    trending_flat
                  </i>
                </Link>
                <div className="gradient_black"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Our Brands Section - Single Line Train Carousel */}
      <BrandsCarousel />

      {/* 10. Reviews Section */}
      <section className="container reviews-section">
        <h3 className="sottotitolo">CUSTOMER REVIEWS</h3>
        <h2 className="accadue">What Our Clients Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-comment">
              &quot;Ordered Marazzi rectified porcelain tiles. Extremely fast shipping, immaculate
              packaging, and customer service helped with exact m² calculations!&quot;
            </p>
            <span className="reviewer-name">Marco B. — Verified Purchase</span>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-comment">
              &quot;Outstanding prices compared to retail stores. The showroom consultation over
              WhatsApp answered all my technical questions on adhesives and grouts.&quot;
            </p>
            <span className="reviewer-name">Elena R. — Verified Purchase</span>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-comment">
              &quot;First time ordering large bathroom furniture online. Arrived without a single
              scratch in prompt delivery. Will definitely order again!&quot;
            </p>
            <span className="reviewer-name">Giuseppe T. — Verified Purchase</span>
          </div>
        </div>
      </section>

      {/* 11. Detailed History & Showroom Story */}
      <section className="fissore_desc" id="about">
        <div className="container">
          {/* Part 1 */}
          <div className="fissore_desc_1">
            <div className="fissore_desc_text">
              <h3 className="sottotitolo">ABOUT WEBNIBO</h3>
              <h2 className="accadue" style={{ paddingTop: '10px' }}>
                Online Sale of Tiles, Faucets, and Bathroom Furniture
              </h2>
              <p>
                webnibo offers its customers the{' '}
                <span className="fw-bold">
                  best brands available on the market for tiles, parquet, laminates, PVC,
                  bathroom furniture, sanitary ware, and faucets.
                </span>{' '}
                Our company is inspired by three principles: price transparency, a logistics center and
                warehouse located next to the showroom, and owners who are always present and available
                in the company.
              </p>
              <p>
                The company was founded in 1970 thanks to our visionary founders who began marketing architectural products. In
                1981, the team expanded and set up
                the first showroom dedicated to tiles and bathroom furnishings.
              </p>
            </div>
            <div className="fissore_desc_img">
              <img
                src="https://www.fissore.com/img/cms/sezione-chi-siamo-home-2.jpg"
                alt="Showroom 1"
                loading="lazy"
              />
              <img
                src="https://www.fissore.com/img/cms/sezione-chi-siamo-home-1.jpg"
                alt="Showroom 2"
                loading="lazy"
              />
              <img
                src="https://www.fissore.com/img/cms/sezione-chi-siamo-home-3.jpg"
                alt="Showroom 3"
                loading="lazy"
              />
            </div>
          </div>

          {/* Part 2 */}
          <div className="fissore_desc_2">
            <div className="fissore_desc_img">
              <img
                src="https://www.fissore.com/img/cms/sezione-chi-siamo-home-4.jpg"
                alt="Showroom 4"
                loading="lazy"
              />
              <img
                src="https://www.fissore.com/img/cms/sezione-chi-siamo-home-5.jpg"
                alt="Showroom 5"
                loading="lazy"
              />
            </div>
            <div className="fissore_desc_text">
              <p>
                In the following years, the business grew in terms of revenue, staff, and exhibition
                spaces. Today,{' '}
                <span className="fw-bold">
                  webnibo has a 6000sqm showroom with more than 280 stands set up for bathroom
                  renovation.
                </span>
              </p>
              <p>
                In an effort to keep up with technology and globalization, the first ecommerce site
                webnibo.com was established in 2015, which today boasts more than 1 million visits per
                year and an average of 20 shipments per day worldwide.
              </p>
              <p>
                In 2020, a new exhibition space dedicated to furniture, kitchens, living rooms, sofas,
                bedrooms, and interior doors was created. In 2021, the digital catalog dedicated to indoor and
                outdoor furniture was launched.
              </p>
              <p>
                On our sites, you will find the same professionalism, expertise, and delivery speed that
                have allowed us to satisfy millions of customers over the years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Get Inspired */}
      <section
        className="lasciati_ispirare"
        style={{
          backgroundImage:
            "url('https://www.fissore.com/img/lasciati-ispirare-fissore-torino-ceramiche.jpg')",
        }}
      >
        <div className="box_lasciati_ispirare">
          <h2 className="accadue">Get Inspired</h2>
          <p>Discover the different solutions to create unique spaces with our products.</p>
          <a
            className="btn_inspirations"
            href="https://instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our inspirations
          </a>
        </div>
      </section>

      {/* Reassurance Strip - Placed right above the Footer */}
      <section className="container">
        <div className="container_contact">
          <div className="contact_item">
            <div className="contact_img">
              <img
                src="https://www.fissore.com/img/cms/icona-1-showroom-fissore.png"
                alt="Showroom Hours"
                width="44"
                height="44"
              />
            </div>
            <div className="contact_text">
              <div className="contact_text_title">Showroom Hours</div>
              <div>Monday – Friday: 09:00 – 18:00</div>
              <div>Saturday: 10:00 – 16:00</div>
              <div>Sunday: Closed</div>
              <div>Showroom: 123 Sample Avenue, Suite 100</div>
            </div>
          </div>

          <div className="contact_item">
            <div className="contact_img">
              <img
                src="https://www.fissore.com/img/cms/icona-2-showroom-fissore.png"
                alt="Showroom Contacts"
                width="44"
                height="44"
              />
            </div>
            <div className="contact_text">
              <div className="contact_text_title">Showroom Contacts</div>
              <div>
                ph. <a href="tel:+15550192834">+1 (555) 019-2834</a>
              </div>
              <div>
                mail <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <div>loc. 123 Sample Avenue, Demo City</div>
            </div>
          </div>

          <div className="contact_item">
            <div className="contact_img">
              <img
                src="https://www.fissore.com/img/cms/icona-3-showroom-fissore.png"
                alt="Assistance Hours"
                width="44"
                height="44"
              />
            </div>
            <div className="contact_text">
              <div className="contact_text_title">Assistance Hours</div>
              <div style={{ fontWeight: 600 }}>Online Support</div>
              <div>MON – SAT: 08:00 – 20:00</div>
              <div>Average response: &lt; 15 mins</div>
            </div>
          </div>

          <div className="contact_item">
            <div className="contact_img">
              <img
                src="https://www.fissore.com/img/cms/icona-4-showroom-fissore.png"
                alt="Online Assistance"
                width="44"
                height="44"
              />
            </div>
            <div className="contact_text">
              <div className="contact_text_title">Online Assistance Contacts</div>
              <div>
                ph. <a href="tel:+15550149201">+1 (555) 014-9201</a>
              </div>
              <div>
                mail <a href="mailto:support@example.com">support@example.com</a>
              </div>
              <div>help. 24/7 live chat &amp; tickets</div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Reusable Footer */}
      <Footer />
    </div>
  );
}
