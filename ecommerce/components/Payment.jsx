import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  return (
    <StripeProvider
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_51M06bhSHw84yPPMVw2LNxSo568jiP0JLOuVfEG3VIHgAL5TP27wc3wNFj98bsR53yWoWPb5ddUGECa6JhMDahmqX00gqG0uoly"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.ecommerce" // required for Apple Pay
    >
      // Your app code here
    </StripeProvider>
  );
}