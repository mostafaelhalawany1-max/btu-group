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
      window.open(`https://wa.me/201093946313?text=استفسار بخصوص: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f8fafc', minHeight: '100vh', margin: 0 }}>
      
      {/* 1. شريط الأخبار الثابت (Sticky Header) */}
      <div style={{ 
        backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', 
        padding: '0', fontWeight: 'bold', fontSize: '0.8rem', display: 'flex', alignItems: 'center', 
        height: '40px', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ backgroundColor: '#333', padding: '0 15px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 10 }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee { display: inline-block; animation: marquee 20s linear infinite; }
          .card:hover { transform: translateY(-5px); transition: 0.3s; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee">📢 خصم 20% لفترة محدودة على صيانة التكييف ——— 💧 مياه نقية مع فلاتر BTU Group الأصلية</div>
        </div>
      </div>

      {/* 2. الهيرو سكشن (اللوجو العريض والبحث الأبيض) */}
      <header style={{ 
        background: 'linear-gradient(rgba(42, 74, 115, 0.9), rgba(42, 74, 115, 0.9)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '40px 20px', textAlign: 'center', color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src="/logo.png" alt="BTU Group" style={{ width: '220px', height: 'auto', backgroundColor: 'white', padding: '10px 15px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }} />
        </div>
        <h1 style={{ fontSize: '1.9rem', marginBottom: '8px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '30px' }}>الحل الأمثل للتكييف وفلاتر المياه في مصر</p>
        
        {/* شريط البحث الأبيض النقي */}
        <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك هنا..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ width: '100%', padding: '16px 25px', borderRadius: '35px', border: 'none', fontSize: '1rem', backgroundColor: '#FFFFFF', color: '#333', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', outline: 'none' }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', left: '20px', top: '14px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', color: '#2a4a73' }}>🔍</button>
        </div>
      </header>

      {/* 3. الكروت الثلاثة (تنسيق محسن) */}
      <main style={{ padding: '40px 20px', maxWidth: '1150px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '18px', padding: '25px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderBottom: '4px solid #25d366' }}>
            <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>صيانة وتجهيز التكييف</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>غسيل تكييف، شحن فريون، فحص أعطال، وتجهيز المواسير بأفضل الخامات.</p>
            <a href="https://wa.me/201093946313?text=أريد صيانة تكييف" style={{ display: 'inline-block', backgroundColor: '#25d366', color: 'white', padding: '12px 30px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div className="card" style={{ backgroundColor: 'white', borderRadius: '18px', padding: '25px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderBottom: '4px solid #007bff' }}>
            <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>تركيب فلاتر مياه</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>فلاتر 7 مراحل تايواني أصلية مع ضمان لمدة عام ومتابعة دورية للصيانة.</p>
            <a href="https://wa.me/201093946313?text=أريد تركيب فلتر مياه" style={{ display: 'inline-block', backgroundColor: '#007bff', color: 'white', padding: '12px 30px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div className="card" style={{ backgroundColor: 'white', borderRadius: '18px', padding: '25px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderBottom: '4px solid #333' }}>
            <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>توريد وتركيب (مشاريع)</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>متخصصون في أنظمة الكونسيلد والمركزي للمكاتب، الفلل، والمباني التجارية.</p>
            <a href="https://wa.me/201093946313?text=استفسار عن مشاريع التوريد" style={{ display: 'inline-block', backgroundColor: '#333', color: 'white', padding: '12px 30px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>تواصل معنا</a>
          </div>

        </div>
      </main>

      {/* 4. الفوتر مع مساحة الشريط */}
      <footer style={{ backgroundColor: '#2a4a73', color: 'white', textAlign: 'center', padding: '30px', paddingBottom: '100px' }}>
        <p style={{ fontSize: '0.85rem' }}>© 2026 BTU Group للمقاولات والتوريدات - جميع الحقوق محفوظة</p>
      </footer>

      {/* 5. شريط إضافة الاختصار */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 9999, boxShadow: '0 -4px 20px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.3rem' }}>📲</span>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>أضف BTU Group إلى شاشتك الرئيسية لسهولة الوصول</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>إضافة</button>
            <button onClick={() => setShowInstallBanner(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.4rem', cursor: 'pointer' }}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
