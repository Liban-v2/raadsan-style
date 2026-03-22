export default function RaadsanStyleWebsite() {
  const featuredProducts = [
    {
      name: "Luxury Diraac Collection",
      price: "$89",
      tag: "Wedding Favorite",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Elegant Abaya Set",
      price: "$75",
      tag: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Ladies Parfum & Heels",
      price: "$55",
      tag: "Modern Pick",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const categories = [
    "Diraac",
    "Abayas",
    "Ladies Parfum",
    "Shoes",
    "Wedding Collection",
    "Everyday Style",
  ];

  const testimonials = [
    {
      name: "Amina",
      text: "Great quality and fast reply on Facebook. I loved the fit.",
    },
    {
      name: "Yusuf",
      text: "The clothes look premium and the style is unique. I’ll order again.",
    },
    {
      name: "Hodan",
      text: "Easy to order and the pieces looked exactly like the photos.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight">Raadsan_Style</h1>
            <p className="text-xs text-zinc-500">Luxury modest fashion for every woman</p>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#shop" className="hover:text-zinc-600">Shop</a>
            <a href="#new" className="hover:text-zinc-600">New Arrivals</a>
            <a href="#about" className="hover:text-zinc-600">About</a>
            <a href="#reviews" className="hover:text-zinc-600">Reviews</a>
            <a href="#contact" className="hover:text-zinc-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Order Now
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-600">
              New Season Collection
            </p>
            <h2 className="max-w-xl text-4xl font-black leading-tight md:text-6xl">
              Feel elegant. Look graceful. Wear Raadsan_Style.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-600 md:text-lg">
              Discover luxury diraac, elegant abayas, ladies parfum, and stylish shoes designed for weddings, modern looks, and simple everyday beauty.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-lg"
              >
                Shop Collection
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900"
              >
                Message to Order
              </a>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border p-4">
                <p className="text-2xl font-black">500+</p>
                <p className="text-sm text-zinc-500">Happy Customers</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-2xl font-black">24/7</p>
                <p className="text-sm text-zinc-500">Order Support</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-2xl font-black">Fast</p>
                <p className="text-sm text-zinc-500">Delivery</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80"
              alt="Fashion model wearing modern clothing"
              className="h-[520px] w-full rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-zinc-500">Trending Now</p>
              <p className="text-lg font-bold">Luxury Modest Collection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8" id="shop">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Browse</p>
            <h3 className="text-3xl font-black">Shop by Category</h3>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border bg-zinc-50 px-4 py-5 text-center text-sm font-semibold shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" id="new">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Featured</p>
            <h3 className="text-3xl font-black">Best Picks This Week</h3>
          </div>
          <p className="max-w-md text-sm text-zinc-500">
            Hand-picked styles your customers can order directly through WhatsApp for weddings, special occasions, and everyday elegance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <div key={product.name} className="overflow-hidden rounded-[2rem] border bg-white shadow-sm">
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-80 w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold">
                  {product.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h4 className="text-lg font-bold">{product.name}</h4>
                  <p className="text-base font-black">{product.price}</p>
                </div>
                <p className="mb-4 text-sm leading-6 text-zinc-500">
                  Elegant design, beautiful details, and perfect for weddings, luxury occasions, or simple everyday wear.
                </p>
                <a
                  href="https://wa.me/31658974764?text=Hi%20I%20want%20to%20order%20from%20Raadsan_Style"
                  className="block w-full rounded-2xl bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900 px-6 py-16 text-white" id="about">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">About Brand</p>
            <h3 className="mt-2 text-3xl font-black md:text-4xl">Raadsan_Style is created for women who love luxury, modesty, modern elegance, and timeless beauty.</h3>
          </div>
          <div>
            <p className="text-base leading-7 text-zinc-300">
              We focus on beautiful diraac, elegant abayas, ladies parfum, and stylish shoes that make every woman feel confident and graceful. Whether she is shopping for a wedding, a luxury occasion, or a simple everyday look, Raadsan_Style brings beauty and quality together.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="font-bold">Premium Feel</p>
                <p className="mt-1 text-zinc-400">Luxury pieces that feel elegant and premium.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <p className="font-bold">Easy Ordering</p>
                <p className="mt-1 text-zinc-400">Customers can order by message in seconds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16" id="reviews">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Customer Love</p>
          <h3 className="text-3xl font-black">What People Say</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div key={review.name} className="rounded-[2rem] border bg-zinc-50 p-6 shadow-sm">
              <p className="text-base leading-7 text-zinc-600">“{review.text}”</p>
              <p className="mt-5 text-sm font-black">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16" id="contact">
        <div className="rounded-[2rem] bg-zinc-100 p-8 shadow-inner md:p-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Contact</p>
            <h3 className="mt-2 text-3xl font-black">Ready to order?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Message Raadsan_Style on WhatsApp to place your order, ask for sizes, or request the newest diraac, abayas, parfum, and shoes.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a href="#" className="rounded-2xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1">
              <p className="text-sm text-zinc-500">Facebook</p>
              <p className="mt-1 font-bold">@Raadsan_Style</p>
            </a>
            <a href="#" className="rounded-2xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1">
              <p className="text-sm text-zinc-500">Instagram</p>
              <p className="mt-1 font-bold">@Raadsan_Style</p>
            </a>
            <a href="https://wa.me/31658974764" className="rounded-2xl bg-zinc-900 p-5 text-center text-white shadow-sm transition hover:-translate-y-1">
              <p className="text-sm text-zinc-300">WhatsApp</p>
              <p className="mt-1 font-bold">Order Now</p>
            </a>
          </div>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none ring-0"
            />
            <input
              type="email"
              placeholder="Your email"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none ring-0"
            />
            <input
              type="text"
              placeholder="Product you want"
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none ring-0 md:col-span-2"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 outline-none ring-0 md:col-span-2"
            />
            <a
              href="https://wa.me/31658974764"
              className="rounded-2xl bg-zinc-900 px-6 py-3 text-center text-sm font-semibold text-white md:col-span-2"
            >
              Order via WhatsApp
            </a>
          </form>
        </div>
      </section>

      <footer className="border-t px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-zinc-500 md:flex-row md:text-left">
          <p>© 2026 Raadsan_Style. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-900">Facebook</a>
            <a href="#" className="hover:text-zinc-900">Instagram</a>
            <a href="https://wa.me/31658974764" className="hover:text-zinc-900">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
