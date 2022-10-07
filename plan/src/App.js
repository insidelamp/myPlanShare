import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

const Plan = lazy(() => import("./pages/Plan"));
const Login = lazy(() => import("./pages/Login"));
const Preview = lazy(() => import("./pages/Preview"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<div>Loading...!</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
