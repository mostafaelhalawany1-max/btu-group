'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showNotifyPopup, setShowNotifyPopup] = useState(false); // 👈 حالة نافذة الاشعارات

  const logoFileName = "logo.png"; 
  const myPhoneNumber = "201093946313"; 

  useEffect(() => {
    // 1. إظهار نافذة الاشعارات بعد 3 ثواني من فتح الموقع
    const timer = setTimeout(() => {
      setShowNotifyPopup(true);
    }, 3000);

    // 2. كود اكتشاف إمكانية تثبيت التطبيق
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
      
      {/* 🌟 حل الأيقونة: ربطها بـ "إصدار" جديد عشان المتصفح يرفرشها */}
      <head>
        <link rel="icon" href={`/${logoFileName}?v=2`} /> 
        <link rel="apple-touch-icon" href={`/${logoFileName}?v=2`} />
        <link rel="manifest" href="/manifest.json" />
      </head>

      {/* 1. 📢 شريط الأخبار (نفس التنسيق المعتمد) */}
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

      {/* 2. 🔔 نافذة الاشعارات (زي اللي في سكن مصر) */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', borderRadius: '15px', padding: '25px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', zIndex: 2000, maxWidth: '400px', width: '90%', textAlign: 'center' }}>
          <img src={`/${logoFileName}`} alt="Logo" style={{ width: '80px', marginBottom: '15px' }} />
          <h3 style={{ color: '#1a365d', marginBottom: '10px' }}>اشترك في التنبيهات</h3>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>ليصلك أحدث عروض صيانة التكييف وفلاتر المياه فور صدورها.</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={() => setShowNotifyPopup(false)} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>اشترك الآن</button>
            <button onClick={() => setShowNotifyPopup(false)} style={{ backgroundColor: '#eee', color: '#666', border: 'none', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer' }}>لاحقاً</button>
          </div>
        </div>
      )}

      {/* 3. الهيرو سكشن (نفس كودك السابق) */}
      <header style={{ background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 20px', textAlign: 'center', color: 'white' }}>
        <img src={`/${logoFileName}`} alt="BTU Group" style={{ width: '220px', backgroundColor: 'white', padding: '12px', borderRadius: '15px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>BTU Group للمقاولات والتوريدات</h1>
        <div style={{ maxWidth: '500px', margin: '30px auto', position: 'relative' }}>
          <input type="text" placeholder="ابحث عن خدمتك..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '18px 25px', borderRadius: '35px', border: 'none', fontSize: '1.1rem', backgroundColor: '#FFFFFF', color: '#333' }} />
        </div>
      </header>

      {/* كروت الخدمات والشريط البرتقالي (نفس الكود) */}
      {/* ... باقي الكود ... */}

    </div>
  );
}
