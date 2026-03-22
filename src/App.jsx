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
    <div className="min-h-screen bg-zinc-900 text-white">
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
            <p className="mb-3 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              New Season Collection
            </p>
            <h2 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
              Feel elegant. Look graceful. Wear Raadsan_Style.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300 md:text-lg">
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
                className="rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-white"
              >
                Message to Order
              </a>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-yellow-500/30 bg-zinc-950 p-4">
                <p className="text-2xl font-black text-white">500+</p>
                <p className="text-sm text-zinc-400">Happy Customers</p>
              </div>
              <div className="rounded-2xl border border-yellow-500/30 bg-zinc-950 p-4">
                <p className="text-2xl font-black text-white">24/7</p>
                <p className="text-sm text-zinc-400">Order Support</p>
              </div>
              <div className="rounded-2xl border border-yellow-500/30 bg-zinc-950 p-4">
                <p className="text-2xl font-black text-white">Fast</p>
                <p className="text-sm text-zinc-400">Delivery</p>
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
            <h3 className="text-3xl font-black text-white">Shop by Category</h3>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border bg-zinc-900 text-white border border-yellow-500/30 px-4 py-5 text-center text-sm font-semibold shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

            <section className="mx-auto max-w-4xl px-6 py-16" id="contact">
        <div className="rounded-[2rem] bg-zinc-100 p-8 shadow-inner md:p-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">Contact</p>
            <h3 className="mt-2 text-3xl font-black text-black">Ready to order?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-700">
              Message Raadsan_Style on WhatsApp to place your order, ask for sizes, or request the newest diraac, abayas, parfum, and shoes.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="#"
              className="rounded-2xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1"
            >
              <p className="text-sm text-zinc-700">Facebook</p>
              <p className="mt-1 font-bold text-black">@Raadsan_Style</p>
            </a>

            <a
              href="#"
              className="rounded-2xl bg-white p-5 text-center shadow-sm transition hover:-translate-y-1"
            >
              <p className="text-sm text-zinc-700">Instagram</p>
              <p className="mt-1 font-bold text-black">@Raadsan_Style</p>
            </a>

            <a
              href="https://wa.me/31658974764?text=Hi%20I%20want%20to%20order%20from%20Raadsan_Style"
              className="rounded-2xl bg-yellow-500 p-5 text-center text-black shadow-sm transition hover:-translate-y-1"
            >
              <p className="text-sm text-zinc-800">WhatsApp</p>
              <p className="mt-1 font-bold">Order Now</p>
            </a>
          </div>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-yellow-500 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-400 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your email"
              className="rounded-2xl border border-yellow-500 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-400 outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Product you want"
              className="rounded-2xl border border-yellow-500 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-400 outline-none focus:border-yellow-400 md:col-span-2"
            />

            <textarea
              placeholder="Your message"
              rows={5}
              className="rounded-2xl border border-yellow-500 bg-zinc-900 px-4 py-3 text-white placeholder:text-zinc-400 outline-none focus:border-yellow-400 md:col-span-2"
            ></textarea>

            <a
              href="https://wa.me/31658974764?text=Hi%20I%20want%20to%20order%20from%20Raadsan_Style"
              className="rounded-2xl bg-yellow-500 px-6 py-3 text-center text-sm font-semibold text-black md:col-span-2"
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
