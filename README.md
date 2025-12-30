# Cryptology

A modern crypto dashboard built with **Next.js App Router**, designed as a portfolio project with a strong focus on clean architecture, type safety, and scalable frontend patterns.

This project consumes data from a **private backend API**, which aggregates and normalizes data originally sourced from **CoinGecko** and **Frankfurter**.

---

## ✨ Overview

**Cryptology** is a practice-oriented project developed to showcase real-world frontend skills, including:

- Structured layout composition
- API abstraction and validation
- Modern UI development with shadcn/ui
- Caching strategies in Next.js 16
- Production-ready project organization

The project is released publicly starting from **v1.0.0**, while the development history remains private.

---

## 🧩 Layout Structure

The application follows a consistent layout pattern using the Next.js App Router:

```tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider>
      <div className="container mx-auto">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  </body>
</html>
```

### Home Page Composition

```tsx
<Banner />
<CoinSection />
<ExchangesSection /> {/* Coming soon */}
<NFTsSection /> {/* Coming soon */}
<NewsSection />
```

---

## 🚀 Features

### UI & UX
- System-based Dark / Light mode (via next-themes)
- Component-driven UI using shadcn/ui
- Responsive tables with horizontal scrolling on small devices
- Custom-designed 404 and error pages

### Banner & Global Statistics
- Global crypto market statistics
- Data fetched from `/global/info`

### Coins Section
- Top platforms by market cap
- Endpoint: `/coins?orderby=marketCap&sort=desc&per_page=3&page=1`

#### Coins Table
- Displays top 20 cryptocurrencies
- Sticky columns for rank and name
- Sparkline chart for last 7 days
- Coin logos served from: `/coin-logos/{id}`

**Columns:**
- Rank
- Name + Logo
- Price
- Market Cap
- 24h Change
- Last 7 Days

Total coin count fetched from: `/coins/count`

### News Section
- Displays 4 random crypto news items per request
- Scraped from:
    - CryptoPotato
    - CoinTelegraph
- News are:
    - Scraped on 2025-12-10
    - Limited to articles published within the previous 24 hours
- Endpoint: `/news/get_top_news`

Each news card includes:
- Title
- Summary
- Author
- Source
- Publish date
- Redirects to the original article

**Note:** For CryptoPotato news, `main_image_url` may fallback due to missing images during scraping.

### Reserved / Future Features
- Currency switching
- Language selection (i18n)
- Authentication (Sign in / Sign up)

---

## 🧠 Data Strategy

- All data is served from a private API
- Data is static, collected once:
    - Coins data: 2025-12-10 13:36:49
    - Currency rates: 2025-12-10 13:39:12
- Strong runtime validation using Zod
- Centralized API abstraction

### API Fetching Pattern

```ts
export async function fetchApi<T>(
  endpoint: string,
  schema: z.ZodSchema<T>
): Promise<T>
```

- Automatic schema validation
- Typed responses
- Error handling on invalid data

---

## ⚡ Caching

The project leverages Next.js 16 caching features:

- Most endpoints: `cacheLife("days")`
- News endpoint: `cacheLife("minutes")` (for better UX)

Despite static data, caching is used to simulate real-world production behavior.

---

## 🛠 Tech Stack

Highlighted technologies:

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zod
- @t3-oss/env-nextjs
- Recharts

---

## 📦 Installation & Running Locally

```bash
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
SERVER_URL=
SERVER_ASSETS_URL=
SECRET=
```

- API access is protected with rate limiting and CORS
- Environment variables are handled using T3 Env for performance and safety

---

## 🌐 Live Demo

- **Demo:** https://cryptology.a-karimkhani.ir
- **Repository:** https://github.com/amirkarimiii/cryptology

---

## 🤝 Contributing

Contributions are welcome under supervision.

Typical flow:
1. Fork the repository
2. Create a feature branch
3. Commit with clear messages
4. Open a Pull Request

Please ensure:
- Type safety is preserved
- Existing architecture is respected
- UI changes follow the current design system

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Credits

Data sources:
- CoinGecko
- Frankfurter
- CryptoPotato
- CoinTelegraph

Credits are referenced both in the header and footer of the application.

---

## 📌 Notes

This project is primarily intended for:
- Portfolio demonstration
- Skill showcasing
- Controlled team collaboration

It is **not** intended as a production financial platform.