'use client';

import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Heart, Search, SlidersHorizontal, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products, productCategories, type Product } from '@/lib/products';

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('category') || 'All products';
  const initialSearch = searchParams.get('search') || '';

  const [categoryFilter, setCategoryFilter] = useState<string>(
    productCategories.includes(initialCat) ? initialCat : 'All products'
  );
  const [search, setSearch] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<string>('default');
  const [liked, setLiked] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleLike = (name: string) => {
    setLiked((cur) =>
      cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]
    );
  };

  const handleAddToCart = (name: string) => {
    setCartCount((c) => c + 1);
    setToastMessage(`Added "${name}" to cart`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.id.includes(search);
      const matchesCategory =
        categoryFilter === 'All products' || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'price-low') {
      list = [...list].sort((a, b) => (a.rawPrice || 0) - (b.rawPrice || 0));
    } else if (sortBy === 'price-high') {
      list = [...list].sort((a, b) => (b.rawPrice || 0) - (a.rawPrice || 0));
    } else if (sortBy === 'name-asc') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [categoryFilter, search, sortBy]);

  return (
    <div className="site-root" id="top">
      <Header
        searchQuery={search}
        onSearchChange={setSearch}
        cartCount={cartCount}
        onCartClick={() => setCartCount((c) => c + 1)}
      />

      {toastMessage && (
        <div className="cart-toast-notification">
          <span>{toastMessage}</span>
        </div>
      )}

      <main className="products-page-main">
        {/* Breadcrumb Bar */}
        <div className="breadcrumb-wrapper">
          <div className="container">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">Products</span>
              {categoryFilter !== 'All products' && (
                <>
                  <span className="breadcrumb-separator">/</span>
                  <span className="breadcrumb-current">{categoryFilter}</span>
                </>
              )}
            </nav>
          </div>
        </div>

        {/* Page Banner / Header */}
        <section className="products-hero-section">
          <div className="container">
            <div className="products-hero-content">
              <h1 className="products-page-title">All Products &amp; Catalog</h1>
              <p className="products-page-desc">
                Discover our comprehensive selection of high-quality porcelain tiles, bathroom
                furniture, modern faucets, and wellness solutions designed to enhance any space.
              </p>
            </div>
          </div>
        </section>

        {/* Catalog Main Content */}
        <section className="container catalog-section" id="catalog">
          {/* Category Pills & Toolbar */}
          <div className="catalog-toolbar">
            <div className="filter-pills">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  className={categoryFilter === cat ? 'active' : ''}
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="catalog-actions-bar">
              <div className="catalog-search-inline">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Filter by name or code..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Filter products"
                />
                {search && (
                  <button
                    type="button"
                    className="clear-search-btn"
                    onClick={() => setSearch('')}
                  >
                    ×
                  </button>
                )}
              </div>

              <div className="catalog-sort-select-wrapper">
                <SlidersHorizontal size={15} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="catalog-sort-select"
                  aria-label="Sort products"
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>

            <div className="catalog-count-row">
              <span className="products-count-badge">
                Showing <strong>{filteredProducts.length}</strong> products
              </span>
              {(categoryFilter !== 'All products' || search) && (
                <button
                  className="reset-filters-btn"
                  onClick={() => {
                    setCategoryFilter('All products');
                    setSearch('');
                  }}
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((p) => {
                const isLiked = liked.includes(p.name);
                return (
                  <article key={p.id} className="product-miniature">
                    <div className="product-thumbnail">
                      <div className="product-flags">
                        {p.badge && (
                          <span className="product-flag online-only">{p.badge}</span>
                        )}
                        <span className="product-flag discount">{p.discount}</span>
                      </div>
                      <img src={p.image} alt={p.name} loading="lazy" />
                    </div>

                    <div className="product-info-wrap">
                      <h5 className="product-name">
                        <a href="#catalog" title={p.name}>
                          {p.name}
                        </a>
                      </h5>

                      <div className="price_no_discount">{p.oldPrice}</div>

                      <div className="first-prices">
                        <span className="product-price">{p.price}</span>
                        <span className="sconto_percentuale">{p.discount}</span>
                      </div>

                      <div className="prompt-delivery">
                        <Truck size={14} /> Prompt delivery
                      </div>

                      <div className="product-card-actions">
                        <button
                          className="button_card_product"
                          onClick={() => handleAddToCart(p.name)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className={`wishlist-heart-btn ${isLiked ? 'liked' : ''}`}
                          onClick={() => toggleLike(p.name)}
                          aria-label="Wishlist"
                        >
                          <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="no-products-state">
              <h3>No products found</h3>
              <p>Try adjusting your search criteria or clear your current filters.</p>
              <button
                className="btn_primary_brand"
                onClick={() => {
                  setCategoryFilter('All products');
                  setSearch('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '40px 0' }}>Loading products catalog...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  );
}
