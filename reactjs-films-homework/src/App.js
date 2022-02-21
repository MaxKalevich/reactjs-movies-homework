import Header from "./components/header/Header";

import { Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "./components/error-fallback/ErrorFallback";

import { routes } from "./routes/routes";

import styles from "./app-styles.module.scss";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <div className={styles.appWrapper}>
          <Routes>
            {routes.map((route) => {
              return <Route path={route.path} element={route.component} />;
            })}
          </Routes>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
