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
const Profile = lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "profile" */
      'pages/Profile'
    )
);

const AppRoutes = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<MyChatbots />} />
      <Route path="/profile/:shortName" element={<Profile />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
