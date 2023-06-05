import { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("../pages/Home/Home"));
const TweetsPage = lazy(() => import("../pages/Tweets/Tweets"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;