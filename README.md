# 🧠💰 NeuroWealth

**Your Smartest Finance Companion** – NeuroWealth is an advanced AI-powered finance platform that helps users seamlessly manage their money, track budgets, analyze spending, and automate financial insights, all in one sleek, intelligent dashboard.

## 🔗 Live Demo Link

[Click here to visit the live site](https://neurowealth-green.vercel.app/)  

## 🎥 Recorded Demo Video

[Click here to watch the demo video](https://drive.google.com/drive/folders/1kgxUS8X5Ao4mAqIXRNXcF6CL0eWEUcRM?usp=sharing)

## 📌 Features

- ✅ **Multiple Bank Account Management**  
  Connect and manage all your bank accounts in one place.

- ✅ **AI-Powered Receipt Scanning (Gemini)**  
  Upload receipts and let Gemini extract and classify financial data.

- ✅ **Automated Monthly Reports with AI Insights**  
  Get smart summaries and forecasts at the end of every month.

- ✅ **User Authentication**  
  Sign in with Google or use secure Email/Password login.

- ✅ **Smart Transaction Categorization**  
  Auto-tag transactions with context-aware AI models.

- ✅ **Rate Limiting with Arcjet**  
  Protects API routes and ensures reliable request handling.

- ✅ **Interactive Charts & Analytics**  
  Beautiful graphs showing where your money flows and grows.

- ✅ **Budget Tracking with Alerts**  
  Set budget limits and receive smart notifications when you're close.

- ✅ **Recurring Transaction Management**  
  Easily track subscriptions, EMIs, and other recurring payments.

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**
- **React 19**
- **shadcn/ui**
- **Tailwind CSS**

### Backend & AI
- **Gemini API** – For AI insights, receipt parsing, and intelligent summaries
- **Prisma ORM + PostgreSQL** 
- **Inngest** – Background jobs for recurring tasks and monthly report automation
- **Arcjet** – Security & rate limiting to protect sensitive endpoints

### Other Integrations
- **Resend** – Email notifications & alerts
- **Vercel** – Deployment and CI/CD hosting

## 📮 Environment Variables

Here's what you need in your `.env`:

```env
# Clerk configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=

# Arcjet key (rate limiting / security)
ARCJET_KEY=

# Supabase database (connection pooling)
DATABASE_URL=

# Supabase direct connection (for migrations)
DIRECT_URL=

# Resend API key (for email service)
RESEND_API_KEY=

# Gemini API key (for AI features)
GEMINI_API_KEY=

```

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/foo`)  
3. Commit your changes (`git commit -am 'Add some foo'`)  
4. Push to the branch (`git push origin feature/foo`)  
5. Open a PR


