'use client'; 

import { useState, useEffect } from 'react';
import Head from 'next/head'; // تأكد من استيراد Head لربط الأيقونة صح

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showNotifyPopup, setShowNotifyPopup] = useState(false);

  const logoFileName = "logo.png"; 
  const myPhoneNumber = "201093946313"; 

  useEffect(() => {
    // إظهار نافذة الاشعارات بعد 3 ثواني
    const timer = setTimeout(() => {
      setShowNotifyPopup(true);
    }, 3000);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    });

    return () => clearTimeout(timer);
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
      window.open(`https://wa.me/${myPhoneNumber}?text=كنت ببحث عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6' }}>
      
      {/* 🛠️ الجزء المسؤول عن تغيير الأيقونة وإخفاء مثلث فيرسل */}
      <head>
        <title>BTU Group | صيانة تكييفات وفلاتر مياه</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href={`/${logoFileName}`} />
        <link rel="apple-touch-icon" href={`/${logoFileName}`} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a365d" />
      </head>

      {/* 1. 📢 شريط الأخبار المتحرك */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '0.9rem', position: 'relative', display: 'flex', alignItems: 'center', height: '45px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <div style={{ backgroundColor: '#333', padding: '0 20px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 2, position: 'relative', boxShadow: '5px 0 15px rgba(0,0,0,0.3)' }}>
          شريط الأخبار 📡
        </div>
        <style>{`
          @keyframes marqueeLeftToRight { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee-content { display: inline-block; animation: marqueeLeftToRight 25s linear infinite; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee-content" style={{ paddingRight: '50px' }}>
            📢 عرض خاص: خصم 20% على غسيل التكييفات لفترة محدودة! ——— 🛠️ قطع غيار أصلية بضمان عام كامل ——— 💧 احمِ عائلتك مع فلاتر المياه 7 مراحل بتركيب مجاني!
          </div>
        </div>
      </div>

      {/* 2. 🔔 نافذة الاشعارات المنبثقة */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', maxWidth: '400px', width: '90%', textAlign: 'center', boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }}>
            <img src={`/${logoFileName}`} alt="Logo" style={{ width: '100px', marginBottom: '15px' }} />
            <h2 style={{ color: '#1a365d', marginBottom: '10px', fontSize: '1.4rem' }}>اشترك في التنبيهات</h2>
            <p style={{ color: '#666', marginBottom: '25px', fontSize: '0.95rem' }}>ليصلك أحدث عروض صيانة التكييف وفلاتر المياه فور صدورها.</p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>اشترك الآن</button>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#f4f4f4', color: '#666', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer' }}>لاحقاً</button>
            </div>
          </div>
        </div>
      )}

      {/* 3. الهيرو سكشن (نفس تصميمك في الصورة) */}
      <header style={{ background: 'linear-gradient(rgba(26, 54, 93, 0.85), rgba(26, 54, 93, 0.85)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', textAlign: 'center', color: 'white' }}>
        <img src={`/${logoFileName}`} alt="BTU Group" style={{ width: '220px', backgroundColor: 'white', padding: '15px', borderRadius: '20px', marginBottom: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }} />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '35px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك (صيانة، فلاتر، توريد)..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '20px 30px', borderRadius: '40px', border: 'none', fontSize: '1.1rem', backgroundColor: '#FFFFFF', color: '#333', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} 
          />
        </div>
      </header>

      {/* باقي الكروت والشريط البرتقالي (نفس الكود) */}
      <main style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* الكروت الـ 3 كما في الصورة */}
        </div>
      </main>

    </div>
  );
}
