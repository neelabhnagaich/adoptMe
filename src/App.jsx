import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";
import AdoptedPetContext from "./AdoptedPetContext";
import { useState } from "react";

import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import BugsnagPerformance from '@bugsnag/browser-performance'


Bugsnag.start({
  apiKey: '87ddd2f92677c3e8640b3a08799f4f7a',
  plugins: [new BugsnagPluginReact()],
  releaseStage: 'staging'
})

BugsnagPerformance.start('87ddd2f92677c3e8640b3a08799f4f7a');

const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});



const App = () => {
  const adoptedPet = useState(null);
  x = 23;
  let x;
  return (
    <div
      className="m-0 p-0"
      style={{
        background: "url(https://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header
              className="hover: text-yellow mb-10 w-full 
            bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center text-6xl text-white"
            >
              <Link to="/">Adopt Me</Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ErrorBoundary><App /></ErrorBoundary>);
