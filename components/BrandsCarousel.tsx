'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { brands } from '@/lib/products';

export default function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Tripled brands list for an infinite, seamless continuous train animation
  const trainBrands = [...brands, ...brands, ...brands];

  return (
    <section className="block-brands-section" id="brands">
      <div className="container">
        <div className="brands-copy-header">
          <h3 className="sottotitolo">OUR BRANDS</h3>
          <h2 className="accadue">Brands for Your Furnishing Project</h2>
          <p>
            Explore our curated selection of brands offering a wide range of quality products for
            your project. Find reliable brands, renowned for their innovative design and attention to
            detail on webnibo.com. Choose excellence to transform your space into a unique and
            distinctive environment.
          </p>
        </div>
      </div>

      {/* Train-like continuous single-line carousel */}
      <div
        className="brands-train-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="brands-nav-btn prev-btn"
          onClick={() => handleManualScroll('left')}
          aria-label="Previous brands"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="brands-train-scroller" ref={scrollRef}>
          <div className={`brands-train-track ${isPaused ? 'paused' : ''}`}>
            {trainBrands.map((b, idx) => (
              <div
                key={`${b.name}-${idx}`}
                className="brand_train_item"
                title={b.name}
              >
                <img src={b.image} alt={b.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="brands-nav-btn next-btn"
          onClick={() => handleManualScroll('right')}
          aria-label="Next brands"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="container brands-cta-row">
        <Link href="/products" className="btn_primary_brand">
          Discover all the brands &rarr;
        </Link>
      </div>
    </section>
  );
}
