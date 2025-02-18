import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ContactPage from './pages/ContactPage';
import { LanguageProvider } from './context/LanguageContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col bg-gray-900">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Base routes */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Language prefixed routes */}
                <Route path="/:lang/projects" element={<Projects />} />
                <Route path="/:lang/projects/:projectId" element={<ProjectDetailsPage />} />
                <Route path="/:lang/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
