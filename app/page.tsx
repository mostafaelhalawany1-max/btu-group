'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showNotifyPopup, setShowNotifyPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotifyPopup(true), 3000);

    // كود التقاط حدث التثبيت
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
      console.log("التطبيق جاهز للتثبيت ✅");
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
      window.open(`https://wa.me/201093946313?text=كنت ببحث في الموقع عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      
      {/* هيدر لإجبار الأيقونة على التغيير */}
      <head>
        <title>BTU Group | تكييف وفلاتر مياه</title>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=2" />
        <link rel="manifest" href="/manifest.json?v=2" />
      </head>

      {/* 📢 شريط الأخبار */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '0.9rem', position: 'relative', display: 'flex', alignItems: 'center', height: '45px' }}>
        <div style={{ backgroundColor: '#333', padding: '0 20px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 2 }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee-text { display: inline-block; animation: marquee 25s linear infinite; padding-right: 50px; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee-text">📢 عرض خاص: خصم 20% على غسيل التكييفات! ——— 🛠️ قطع غيار أصلية بضمان عام كامل!</div>
        </div>
      </div>

      {/* 🔔 نافذة الاشعارات */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', maxWidth: '400px', width: '90%', textAlign: 'center' }}>
            <img src="/favicon.ico" alt="Logo" style={{ width: '80px', marginBottom: '15px' }} />
            <h2 style={{ color: '#1a365d', marginBottom: '10px' }}>اشترك في التنبيهات</h2>
            <p style={{ color: '#666', marginBottom: '25px' }}>ليصلك أحدث عروض BTU Group فور صدورها.</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer' }}>اشترك الآن</button>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#f4f4f4', color: '#666', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer' }}>لاحقاً</button>
            </div>
          </div>
        </div>
      )}

      {/* 🏠 الهيرو سكشن (نفس شكل الصور اللي بعتها) */}
      <header style={{ background: 'linear-gradient(rgba(26, 54, 93, 0.85), rgba(26, 54, 93, 0.85)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")', backgroundSize: 'cover', padding: '60px 20px', textAlign: 'center', color: 'white' }}>
        <img src="/favicon.ico" style={{ width: '180px', backgroundColor: 'white', padding: '15px', borderRadius: '20px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <div style={{ maxWidth: '550px', margin: '30px auto', position: 'relative' }}>
          <input type="text" placeholder="ابحث عن خدمتك..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} style={{ width: '100%', padding: '18px 25px', borderRadius: '35px', border: 'none', fontSize: '1.1rem', color: '#333' }} />
        </div>
      </header>

      {/* 🛠️ الكروت والخدمات */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
          <h3>صيانة وتجهيز التكييف</h3>
          <a href="https://wa.me/201093946313?text=طلب صيانة" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '15px', textDecoration: 'none' }}>اطلب الآن</a>
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
          <h3>تركيب فلاتر مياه</h3>
          <a href="https://wa.me/201093946313?text=طلب فلتر" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '15px', textDecoration: 'none' }}>اطلب الآن</a>
        </div>
      </main>

      {/* 📥 شريط التثبيت البرتقالي */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', borderRadius: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
          <span style={{ fontWeight: 'bold' }}>📥 ثبت تطبيق BTU Group على جهازك</span>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>تثبيت</button>
        </div>
      )}
    </div>
  );
}
