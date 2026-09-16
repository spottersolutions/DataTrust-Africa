/* Supabase project configuration. */
/* Stripe Payment Links (create in Stripe Dashboard → Payment Links, one per tier):
   After purchase, set the link's confirmation page to:
   https://spottersolutions.github.io/DataTrust-Africa/app/index.html?unlocked={CHECKOUT_CLIENT_REFERENCE_ID} */
window.STRIPE_PAYMENT_LINKS = {
  // Single test-mode link bundling both tiers ($4 + $9 = $13).
  // Replace with separate live links when going to production.
  Plus: 'https://buy.stripe.com/test_00wbJ23vBcakgtl4lm4ZG00',
  Pro: 'https://buy.stripe.com/test_00wbJ23vBcakgtl4lm4ZG00'
};
window.SUPABASE_CONFIG = {
  url: 'https://agfkymkpyoqhbyjvagki.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZmt5bWtweW9xaGJ5anZhZ2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0ODU2MDYsImV4cCI6MjEwNTA2MTYwNn0.IkwOAPrc2-wMicolpCZM15RHgXQHNHDtPZ5sqz5zQZQ'
};
