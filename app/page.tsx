'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showNotifyPopup, setShowNotifyPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotifyPopup(true), 3000);
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setShowInstallBanner(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      window.open(`https://wa.me/201093946313?text=استفسار بخصوص: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#e0f2fe', minHeight: '100vh', margin: 0 }}>
      
      <head>
        <title>BTU Group | صيانة تكييفات وفلاتر مياه</title>
        {/* سطر التحقق من جوجل - تم إضافته هنا فقط */}
        <meta name="google-site-verification" content="GnBnOrp1gL_I623oKpY8YrDXosh0S38l2N-eFPHxS0g" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* شريط الأخبار */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '10px 0', fontWeight: 'bold', position: 'sticky', top: 0, zIndex: 1000 }}>
         📢 خصم 20% على غسيل التكييفات ——— 💧 مياه نقية مع فلاتر BTU Group ——— 🛠️ ضمان عام كامل
      </div>

      {/* الهيرو سكشن */}
      <header style={{ background: '#2a4a73', padding: '50px 20px', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src="/logo.png" alt="BTU Group" style={{ width: '220px', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }} />
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>BTU Group للمقاولات والتوريدات</h1>
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <input type="text" placeholder="ابحث عن خدمتك..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '15px 25px', borderRadius: '35px', border: 'none', color: '#333', outline: 'none' }} />
        </div>
      </header>

      {/* الكروت - الترتيب الأصلي */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          <div style={{ background: 'white', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3>تورد ومشاريع</h3>
            <p>حلول تكييف متكاملة للمكاتب والفلل.</p>
            <button onClick={() => window.open('https://wa.me/201093946313')} style={{ backgroundColor: '#333', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', cursor: 'pointer' }}>استفسر الآن</button>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3>تركيب فلاتر مياه</h3>
            <p>فلاتر 7 مراحل بضمان حقيقي.</p>
            <button onClick={() => window.open('https://wa.me/201093946313')} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', cursor: 'pointer' }}>اطلب الآن</button>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3>صيانة التكييف</h3>
            <p>فحص وتنظيف شامل لضمان أعلى كفاءة.</p>
            <button onClick={() => window.open('https://wa.me/201093946313')} style={{ backgroundColor: '#25d366', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', cursor: 'pointer' }}>اطلب الآن</button>
          </div>

        </div>
      </main>

      {/* شريط التثبيت */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#f37021', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2000 }}>
          <span>ثبت تطبيق BTU Group على موبايلك</span>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold' }}>تثبيت</button>
        </div>
      )}

      <footer style={{ backgroundColor: '#2a4a73', color: 'white', textAlign: 'center', padding: '30px', marginTop: '40px' }}>
        <p>© 2026 BTU Group - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
