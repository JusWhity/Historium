import { useEffect } from 'react';
import { initHistoriumApp } from './app';

export default function App() {
  useEffect(() => {
    initHistoriumApp();
  }, []);

  return (
    <>
      <a className="skip-link" id="skip-link" href="#app"></a>
      <div id="progress" aria-hidden="true"></div>
      <header className="site-header" id="site-header"></header>
      <main id="app" tabIndex={-1}>
        <noscript>
          <p style={{ padding: '2rem' }}>
            این سایت برای نمایش به جاوااسکریپت نیاز دارد. This site needs JavaScript to display.
          </p>
        </noscript>
      </main>
      <footer className="site-footer" id="site-footer"></footer>
    </>
  );
}
