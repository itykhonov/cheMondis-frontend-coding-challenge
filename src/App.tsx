import React, { FC } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { PhotosPage } from './pages/photos';
import { AlbumsPage } from './pages/albums';
import { useStyles } from './styles';
import { ERoutes } from './types/enums';
import { PhotoModal } from './components/photoModal';

const App: FC = () => {
  useStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={ERoutes.albums} replace />} />
        <Route path={ERoutes.photos} element={<PhotosPage />}>
          <Route path=":photoId" element={<PhotoModal />} />
        </Route>
        <Route path={ERoutes.albums} element={<AlbumsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
