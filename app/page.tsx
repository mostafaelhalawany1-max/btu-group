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
      
      {/* الجزء الخاص بالأيقونة - الاعتماد على favicon.ico */}
      <head>
        <title>BTU Group | صيانة تكييفات وفلاتر مياه</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      {/* 1. شريط الأخبار */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', height: '45px', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ backgroundColor: '#333', padding: '0 15px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 10 }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee { display: inline-block; animation: marquee 20s linear infinite; }
          .card { overflow: hidden; transition: 0.3s; background: white; border-radius: 20px; text-align: center; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
          .card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee">📢 خصم 20% لفترة محدودة على صيانة التكييف ——— 💧 مياه نقية مع فلاتر BTU Group الأصلية ——— 🛠️ ضمان عام كامل على جميع قطع الغيار</div>
        </div>
      </div>

      {/* 2. الهيرو سكشن */}
      <header style={{ background: 'linear-gradient(rgba(42, 74, 115, 0.9), rgba(42, 74, 115, 0.9)), url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000") center/cover', padding: '50px 20px', textAlign: 'center', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src="/logo.png" alt="BTU Group" style={{ width: '220px', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }} />
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>BTU Group للمقاولات والتوريدات</h1>
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <input type="text" placeholder="ابحث عن خدمتك..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '100%', padding: '15px 25px', borderRadius: '35px', border: 'none', color: '#333', outline: 'none' }} />
          <button onClick={handleSearch} style={{ position: 'absolute', left: '15px', top: '12px', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>🔍</button>
        </div>
      </header>

      {/* 3. قسم الكروت بالترتيب والصور الكاملة */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* الكارت 1: التكييف */}
          <div className="card">
            <div style={{ height: '180px', background: 'url("https://images.unsplash.com/photo-1599933310631-db671a53381a?auto=format&fit=crop&w=600") center/cover' }}></div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#2a4a73' }}>صيانة وتجهيز التكييف</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>غسيل تكييف، شحن فريون، وتجهيز مواسير بأفضل الخامات.</p>
              <a href="https://wa.me/201093946313" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

          {/* الكارت 2: الفلاتر */}
          <div className="card">
            <div style={{ height: '180px', background: 'url("https://images.unsplash.com/photo-1585832770485-e38953556501?auto=format&fit=crop&w=600") center/cover' }}></div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#2a4a73' }}>تركيب فلاتر مياه</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>مياه نقية مع فلاتر 7 مراحل تايواني أصلية بضمان عام.</p>
              <a href="https://wa.me/201093946313" style={{ display: 'block', backgroundColor: '#007bff', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

          {/* الكارت 3: المشاريع */}
          <div className="card">
            <div style={{ height: '180px', background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600") center/cover' }}></div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#2a4a73' }}>توريد وتركيب (مشاريع)</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>حلول تكييف كونسيلد ومركزي للفلل والمباني التجارية.</p>
              <a href="https://wa.me/201093946313" style={{ display: 'block', backgroundColor: '#333', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>تواصل معنا</a>
            </div>
          </div>

        </div>
      </main>

      {/* شريط الإضافة للشاشة الرئيسية */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#f37021', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2000 }}>
          <span>أضف BTU Group لشاشتك لسهولة الطلب</span>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold' }}>إضافة</button>
        </div>
      )}

      {/* نافذة الإشعارات */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', textAlign: 'center', maxWidth: '350px' }}>
            <img src="/logo.png" style={{ width: '80px', marginBottom: '10px' }} />
            <h3>اشترك في التنبيهات</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>ليصلك أحدث عروض BTU Group فور صدورها.</p>
            <button onClick={() => setShowNotifyPopup(false)} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '10px', cursor: 'pointer' }}>اشترك</button>
          </div>
        </div>
      )}

      <footer style={{ backgroundColor: '#2a4a73', color: 'white', textAlign: 'center', padding: '30px', marginTop: '40px' }}>
        <p>© 2026 BTU Group - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
