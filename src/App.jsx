import "./i18n";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import HomePage from "./pages/HomePage";
import ExamplePage from "./pages/ExamplePage";

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise}>
        <Router>
          <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/example/:id/*" element={<ExamplePage />} />
            </Routes>
          </div>
        </Router>
      </Elements>
    </ApolloProvider>
  );
};

export default App;
