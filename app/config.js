/* Supabase project configuration. */
/* Stripe Payment Links (create in Stripe Dashboard → Payment Links, one per tier):
   After purchase, set the link's confirmation page to:
   https://spottersolutions.github.io/DataTrust-Africa/app/index.html?unlocked={CHECKOUT_CLIENT_REFERENCE_ID} */
window.STRIPE_PAYMENT_LINKS = {
  Plus: '',   // e.g. https://buy.stripe.com/xxxx ($4 link)
  Pro: ''     // e.g. https://buy.stripe.com/yyyy ($9 link)
};
window.SUPABASE_CONFIG = {
  url: 'https://agfkymkpyoqhbyjvagki.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnZmt5bWtweW9xaGJ5anZhZ2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0ODU2MDYsImV4cCI6MjEwNTA2MTYwNn0.IkwOAPrc2-wMicolpCZM15RHgXQHNHDtPZ5sqz5zQZQ'
};
