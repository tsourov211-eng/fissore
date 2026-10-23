'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Header({
  searchQuery = '',
  onSearchChange,
  cartCount = 0,
  onCartClick,
}: HeaderProps) {
  const [internalSearch, setInternalSearch] = useState(searchQuery);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchChange) {
      onSearchChange(internalSearch);
    } else if (internalSearch.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(internalSearch)}`;
    }
  };

  const handleInputChange = (val: string) => {
    setInternalSearch(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* 1. Header Event Banner */}
      <div className="header-event-banner">
        <div className="container">
          <p className="topbar-text">
            Access to the showroom is <strong>free from Monday afternoon to Saturday</strong>. Book a
            consultant&apos;s assistance: <strong>+1 (555) 019-2834</strong>
          </p>
        </div>
      </div>

      {/* 2. Top Utility Nav */}
      <div className="header-top-nav">
        <div className="container top-nav-inner">
          <ul className="top-nav-links">
            <li>
              <Link href="/products" onClick={closeMenu}>
                <strong>Offers of the Month</strong>
              </Link>
            </li>
            <li>
              <Link href="/#brands" onClick={closeMenu}>
                Search by Brand
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={closeMenu}>
                <i className="material-icons" style={{ fontSize: '16px' }}>
                  contacts
                </i>{' '}
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#footer" onClick={closeMenu}>
                <i className="material-icons" style={{ fontSize: '16px' }}>
                  mail
                </i>{' '}
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-link"
              >
                <i className="fa fa-whatsapp"></i> +1 (555) 019-2834
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Main Header */}
      <header className="main-header">
        <div className="container header-wrapper">
          <div className="header-logo">
            <Link href="/" title="webnibo">
              <img src="/logo.png" alt="webnibo" className="logo" />
            </Link>
          </div>

          <div className="searchbar-wrapper">
            <div className="search-widget">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search our catalog"
                  value={internalSearch}
                  onChange={(e) => handleInputChange(e.target.value)}
                  aria-label="Search"
                />
                <button type="submit" className="btn-primary" aria-label="Search button">
                  <i className="material-icons search">search</i>
                </button>
              </form>
            </div>
          </div>

          <div className="header-right-tools">
            <div className="feedaty-store-badge">
              <span className="feedaty-stars">★★★★★</span>
              <div className="feedaty-info">
                <strong>Feedaty 4.8 / 5</strong>
                <span>3,420+ reviews</span>
              </div>
            </div>

            <button className="language-btn" type="button" aria-label="Select language">
              <img src="https://www.fissore.com/img/l/1.jpg" alt="English" width="16" height="11" />
              <span>EN</span>
              <ChevronDown size={12} />
            </button>

            <Link href="/#footer" className="account-link" title="Account" aria-label="Customer Account">
              <i className="material-icons" style={{ fontSize: '26px' }}>
                person
              </i>
            </Link>

            <div
              className="cart-button"
              onClick={onCartClick}
              role="button"
              tabIndex={0}
              aria-label="Shopping Cart"
            >
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              <span className="cart-products-count">{cartCount}</span>
              <span>{cartCount === 0 ? '0.00 €' : `${(cartCount * 10.98).toFixed(2)} €`}</span>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Mega-Menu Bar */}
      <nav className="header-bottom">
        <div className="container header-main-menu-wrapper">
          <div className="left-nav-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="nav-trigger-left">
              <i className="material-icons">{mobileMenuOpen ? 'close' : 'view_headline'}</i>
              <span>Products</span>
            </div>
            <i className="material-icons nav-trigger-arrow">
              {mobileMenuOpen ? 'expand_less' : 'expand_more'}
            </i>
          </div>

          <ul className={`anav-top ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li className="amenu-item">
              <Link href="/" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">HOME</span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/products" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">ALL PRODUCTS</span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/products" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">Tiles on offer</span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/products" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">PARQUET</span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/products" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">WINDOWS</span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/products" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">KITCHENS</span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/#brands" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">Brand</span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/#about" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">
                  <i className="material-icons" style={{ fontSize: '15px' }}>
                    contacts
                  </i>{' '}
                  About Us
                </span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <Link href="/#footer" className="amenu-link" onClick={closeMenu}>
                <span className="menu-link-title">
                  <i className="material-icons" style={{ fontSize: '15px' }}>
                    mail
                  </i>{' '}
                  Contacts
                </span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </Link>
            </li>
            <li className="amenu-item">
              <a
                href="https://wa.me/15550192834"
                target="_blank"
                rel="noreferrer"
                className="amenu-link whatsapp-nav-item"
                onClick={closeMenu}
              >
                <span className="menu-link-title">
                  <i className="fa fa-whatsapp"></i> Support
                </span>
                <i className="material-icons mobile-chevron">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
