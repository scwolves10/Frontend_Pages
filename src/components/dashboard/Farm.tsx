import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import "../../style.css";
import Dashboard from "./Dashboard";

const queryClient = new QueryClient();

const Farm = () => {
  return (
    <div>
      <Dashboard />


    </div>
  );
}
export default Farm;