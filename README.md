# Fresh Pour Mobile App

React/Vite/TypeScript conversion of the original Fresh Pour HTML/Tailwind/AlpineJS ordering app.

The original static site is preserved as `index.vanilla.html`. The React app now uses `index.html`.

## Stack

- React + Vite + TypeScript
- TailwindCSS
- Shadcn-compatible project config
- Framer Motion
- Recharts
- Supabase Auth, Database, Storage, Realtime-ready schema
- Razorpay Edge Function templates
- Capacitor Android packaging
- PWA manifest/service worker through `vite-plugin-pwa`

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Set these values in `.env`:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_RAZORPAY_KEY_ID=
```

Server-only secrets belong in Supabase Edge Function secrets:

```bash
supabase secrets set RAZORPAY_KEY_ID=...
supabase secrets set RAZORPAY_KEY_SECRET=...
supabase secrets set FCM_SERVER_KEY=...
```

## Supabase

Run the SQL in this order:

```bash
supabase/schema.sql
supabase/rls.sql
```

Create a Supabase Storage bucket named `products` for product uploads. Store public product image URLs in `products.image_url`.

To make a user an admin:

```sql
update public.users
set role = 'admin'
where phone = '+919999999999';
```

## Razorpay

Deploy Edge Functions:

```bash
supabase functions deploy create-razorpay-order
supabase functions deploy verify-razorpay-payment
```

The frontend hook is in `src/lib/payments.ts`. Load Razorpay Checkout in production before calling UPI checkout:

```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

## Android

```bash
npm run build
npx cap add android
npx cap sync
npx cap open android
```

From Android Studio:

```text
Build > Generate Signed Bundle / APK > Android App Bundle
```

## Play Store Checklist

- Replace placeholder app id if needed in `capacitor.config.ts`
- Configure production Supabase and Razorpay keys
- Add real app icons and adaptive icons
- Configure Firebase Cloud Messaging
- Test OTP login on real devices
- Verify Razorpay payment signature flow
- Enable RLS in production
- Generate signed AAB
- Complete store listing, screenshots, privacy policy, data safety form
- Test internal release before production rollout

## Notes

This project preserves the Fresh Pour claymorphism visual identity and local app behavior while adding production integration points. Supabase and Razorpay need live credentials before real OTP, realtime orders, payment verification, push notifications, and storage uploads can run end to end.
