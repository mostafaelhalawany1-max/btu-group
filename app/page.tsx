'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    // إظهار الشريط للتأكد من التنسيق
    setShowInstallBanner(true); 
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
      window.open(`https://wa.me/201093946313?text=استفسار من الموقع عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f8fafc', minHeight: '100vh', margin: 0 }}>
      
      {/* 1. شريط الأخبار */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '0.8rem', display: 'flex', alignItems: 'center', height: '35px' }}>
        <div style={{ backgroundColor: '#333', padding: '0 12px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 10 }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee { display: inline-block; animation: marquee 20s linear infinite; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee">📢 خصم 20% لفترة محدودة على صيانة التكييف ——— 💧 مياه نقية مع فلاتر BTU Group الأصلية</div>
        </div>
      </div>

      {/* 2. الهيرو سكشن (اللون الأفتح واللوجو في النص) */}
      <header style={{ 
        background: 'linear-gradient(rgba(42, 74, 115, 0.88), rgba(42, 74, 115, 0.88)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '30px 20px', textAlign: 'center', color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
          <img src="/logo.png" alt="BTU Group" style={{ width: '150px', backgroundColor: 'white', padding: '8px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
        </div>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '5px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '0.95rem', opacity: 0.85, marginBottom: '20px' }}>خدمات التكييف وفلاتر المياه الاحترافية</p>
        
        {/* شريط البحث الملموم */}
        <div style={{ maxWidth: '420px', margin: '0 auto', position: 'relative' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ width: '100%', padding: '12px 20px', borderRadius: '30px', border: 'none', fontSize: '0.95rem', color: '#333', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', outline: 'none' }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', left: '15px', top: '10px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: '#2a4a73' }}>🔍</button>
        </div>
      </header>

      {/* 3. الكروت الثلاثة */}
      <main style={{ padding: '30px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#2a4a73', fontSize: '1.2rem' }}>صيانة التكييف</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>فحص وتنظيف شامل لضمان أعلى كفاءة.</p>
            <a href="https://wa.me/201093946313?text=صيانة تكييف" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '10px', borderRadius: '20px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#2a4a73', fontSize: '1.2rem' }}>تركيب فلاتر مياه</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>فلاتر 7 مراحل أصلية ومياه نقية.</p>
            <a href="https://wa.me/201093946313?text=تركيب فلتر" style={{ display: 'block', backgroundColor: '#007bff', color: 'white', padding: '10px', borderRadius: '20px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#2a4a73', fontSize: '1.2rem' }}>توريد ومشاريع</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>حلول تكييف متكاملة للمكاتب والفلل.</p>
            <a href="https://wa.me/201093946313?text=استفسار مشاريع" style={{ display: 'block', backgroundColor: '#333', color: 'white', padding: '10px', borderRadius: '20px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>استفسر الآن</a>
          </div>

        </div>
      </main>

      {/* 4. الفوتر مع مساحة إضافية عشان شريط التثبيت */}
      <footer style={{ backgroundColor: '#2a4a73', color: 'white', textAlign: 'center', padding: '25px', paddingBottom: '90px' }}>
        <p style={{ fontSize: '0.8rem', margin: 0 }}>© 2026 BTU Group للمقاولات والتوريدات - جميع الحقوق محفوظة</p>
      </footer>

      {/* 5. شريط "أضف للاختصارات" (الجديد والمحسن) */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#f37021', color: 'white', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 9999, boxShadow: '0 -4px 15px rgba(0,0,0,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.2rem' }}>📱</span>
            <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>أضف BTU Group إلى شاشتك الرئيسية</span>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '7px 15px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem' }}>إضافة</button>
            <button onClick={() => setShowInstallBanner(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
