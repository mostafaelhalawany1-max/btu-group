'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // التقاط حدث التثبيت لضمان ظهور الشريط البرتقالي
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
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
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* ⚠️ أهم جزء: تعريف الأيقونة والمانيفست برقم إصدار جديد لإجبار المتصفح على التحديث */}
      <head>
        <title>BTU Group | صيانة تكييف وفلاتر مياه</title>
        <link rel="icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/logo.png?v=3" />
        <link rel="manifest" href="/manifest.json?v=3" />
      </head>

      {/* 📢 شريط الأخبار المتحرك */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', height: '40px' }}>
        <div style={{ backgroundColor: '#333', padding: '0 15px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 10 }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee-box { display: inline-block; animation: marquee 20s linear infinite; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee-box">📢 خصم 20% على صيانة التكييفات لفترة محدودة! ——— 💧 تركيب فلاتر مياه بضمان BTU Group ——— 🛠️ قطع غيار أصلية</div>
        </div>
      </div>

      {/* 🏠 الهيرو سكشن (تم إصلاح تداخل العناصر) */}
      <header style={{ 
        background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: '60px 20px', textAlign: 'center', color: 'white'
      }}>
        {/* اللوجو في المنتصف وحجمه واضح */}
        <div style={{ marginBottom: '25px' }}>
          <img src="/logo.png" alt="BTU Group" style={{ width: '200px', backgroundColor: 'white', padding: '10px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '35px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        {/* شريط البحث الأبيض */}
        <div style={{ maxWidth: '550px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ width: '100%', padding: '18px 25px', borderRadius: '35px', border: 'none', fontSize: '1.1rem', outline: 'none', color: '#333', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', left: '20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem' }}>🔍</button>
        </div>
      </header>

      {/* 🛠️ قسم الخدمات (الكروت) */}
      <main style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#1a365d' }}>تركيب فلاتر مياه</h3>
            <p style={{ color: '#666' }}>فلاتر 7 مراحل بضمان حقيقي.</p>
            <a href="https://wa.me/201093946313?text=أريد تركيب فلتر" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '25px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#1a365d' }}>صيانة وتجهيز التكييف</h3>
            <p style={{ color: '#666' }}>تنظيف وفحص شامل للوحدات.</p>
            <a href="https://wa.me/201093946313?text=أريد صيانة تكييف" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>
        </div>
      </main>

      {/* 📥 شريط التثبيت البرتقالي (سيظهر حتماً الآن) */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '20px', left: '15px', right: '15px', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', borderRadius: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <span style={{ fontWeight: 'bold' }}>📥 ثبت تطبيق BTU Group الآن</span>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>تثبيت</button>
        </div>
      )}

      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '30px' }}>
        <p>© 2026 BTU Group للمقاولات والتوريدات</p>
      </footer>
    </div>
  );
}
