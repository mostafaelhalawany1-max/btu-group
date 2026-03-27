'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showNotifyPopup, setShowNotifyPopup] = useState(false);

  useEffect(() => {
    // إظهار نافذة الاشعارات بعد 3 ثواني
    const timer = setTimeout(() => setShowNotifyPopup(true), 3000);

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    // إجبار ظهور شريط الإضافة للتجربة
    setShowInstallBanner(true); 

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
      
      {/* ⚠️ الجزء الخاص بالأيقونة - ربط مباشر بملف logo.png لضمان عدم العطل */}
      <head>
        <title>BTU Group | تكييف وفلاتر مياه</title>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      {/* 1. شريط الأخبار الثابت (من الشمال لليمين) */}
      <div style={{ 
        backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', 
        padding: '0', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', 
        height: '45px', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ backgroundColor: '#333', padding: '0 15px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 10 }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee { display: inline-block; animation: marquee 20s linear infinite; }
          .card { overflow: hidden; transition: 0.3s; }
          .card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee">📢 خصم 20% لفترة محدودة على صيانة التكييف ——— 💧 مياه نقية مع فلاتر BTU Group الأصلية ——— 🛠️ ضمان عام كامل على جميع قطع الغيار</div>
        </div>
      </div>

      {/* 2. نافذة الاشعارات (Popup) */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '25px', padding: '30px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
            <img src="/logo.png" alt="BTU Logo" style={{ width: '100px', marginBottom: '15px' }} />
            <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>خليك أول واحد يعرف!</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '25px' }}>اشترك عشان توصلك عروض BTU Group الحصرية فور صدورها.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>اشترك الآن</button>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#64748b', border: 'none', padding: '12px', borderRadius: '12px', cursor: 'pointer' }}>ليس الآن</button>
            </div>
          </div>
        </div>
      )}

      {/* 3. الهيرو سكشن (اللوجو المتوسط والبحث الأبيض) */}
      <header style={{ 
        background: 'linear-gradient(rgba(42, 74, 115, 0.92), rgba(42, 74, 115, 0.92)), url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '45px 20px', textAlign: 'center', color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src="/logo.png" alt="BTU Group" style={{ width: '220px', backgroundColor: 'white', padding: '10px 15px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.2)' }} />
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '35px' }}>خبراء التكييف وفلاتر المياه في مصر</p>
        
        <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك (صيانة، فلاتر، توريد)..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ width: '100%', padding: '16px 25px', borderRadius: '35px', border: 'none', fontSize: '1rem', backgroundColor: '#FFFFFF', color: '#333', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', outline: 'none' }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', left: '20px', top: '14px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', color: '#2a4a73' }}>🔍</button>
        </div>
      </header>

      {/* 4. قسم الكروت بالصور (الخلفية سماوي) */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '30px' }}>
          
          {/* كارت صيانة التكييف */}
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ height: '160px', background: 'url("https://images.unsplash.com/photo-1599933310631-db671a53381a?q=80&w=600") center/cover' }}></div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>صيانة وتجهيز التكييف</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>غسيل شامل، شحن فريون وتجهيز المواسير بأفضل الخامات.</p>
              <a href="https://wa.me/201093946313?text=أريد صيانة تكييف" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

          {/* كارت فلاتر المياه */}
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ height: '160px', background: 'url("https://images.unsplash.com/photo-1585832770485-e38953556501?q=80&w=600") center/cover' }}></div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>تركيب فلاتر مياه</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>مياه نقية لك ولعائلتك مع فلاتر 7 مراحل تايواني أصلية.</p>
              <a href="https://wa.me/201093946313?text=أريد تركيب فلتر مياه" style={{ display: 'block', backgroundColor: '#007bff', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

          {/* كارت المشاريع */}
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <div style={{ height: '160px', background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600") center/cover' }}></div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>توريد وتركيب (مشاريع)</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>حلول تكييف متكاملة للمباني والفلل (كونسيلد ومركزي).</p>
              <a href="https://wa.me/201093946313?text=استفسار عن مشاريع التوريد" style={{ display: 'block', backgroundColor: '#333', color: 'white', padding: '12px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>تواصل معنا</a>
            </div>
          </div>

        </div>
      </main>

      {/* 5. الفوتر */}
      <footer style={{ backgroundColor: '#2a4a73', color: 'white', textAlign: 'center', padding: '35px', paddingBottom: '110px' }}>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>© 2026 BTU Group للمقاولات والتوريدات - جميع الحقوق محفوظة</p>
      </footer>

      {/* 6. شريط "أضف BTU Group لشاشتك" */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 9999, boxShadow: '0 -5px 25px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.4rem' }}>📲</span>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>أضف BTU Group إلى شاشتك الرئيسية لسهولة الطلب</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>إضافة</button>
            <button onClick={() => setShowInstallBanner(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
