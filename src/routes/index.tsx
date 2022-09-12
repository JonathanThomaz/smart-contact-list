import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const MyChatbots = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "my-chatbots" */
      'pages/MyChatbots'
    )
);

const AppRoutes = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<MyChatbots />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
