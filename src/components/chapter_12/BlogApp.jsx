import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy-loaded components
const HomePage = lazy(() => import("./Home"));
const BlogPost = lazy(() => import("./BlogPost"));
const Dashboard = lazy(() => import("./Dashboard"));
const NotFound = lazy(() => import("./NotFound"));

function ProtectedRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

const BlogApp = () => {
  const isAuthenticated = false; // Simulated authentication status

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center text-xl font-semibold text-gray-700">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route
          path="dashboard"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default BlogApp;
