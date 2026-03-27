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
      window.open(`https://wa.me/201093946313?text=كنت ببحث في الموقع عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6', minHeight: '100vh', margin: 0 }}>
      
      {/* 1. شريط الأخبار المتحرك */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', height: '40px', position: 'relative', zIndex: 100 }}>
        <div style={{ backgroundColor: '#333', padding: '0 15px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 101, position: 'relative' }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee-content { display: inline-block; animation: marquee 25s linear infinite; padding-right: 50px; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee-content">
            📢 خصم 20% على غسيل التكييفات! ——— 🛠️ قطع غيار أصلية بضمان عام كامل ——— 💧 مياه نقية مع فلاتر BTU Group
          </div>
        </div>
      </div>

      {/* 2. نافذة الاشعارات (Popup) */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '25px', maxWidth: '400px', width: '85%', textAlign: 'center', boxShadow: '0 15px 40px rgba(0,0,0,0.3)' }}>
            <img src="/logo.png" alt="Logo" style={{ width: '80px', marginBottom: '15px' }} />
            <h3 style={{ color: '#1a365d', marginBottom: '10px' }}>اشترك في التنبيهات</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>ليصلك أحدث عروض الصيانة من BTU Group فور صدورها.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>اشترك</button>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#eee', color: '#666', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}>لاحقاً</button>
            </div>
          </div>
        </div>
      )}

      {/* 3. الهيرو سكشن (تكبير اللوجو وضبط البحث) */}
      <header style={{ 
        background: 'linear-gradient(rgba(26, 54, 93, 0.85), rgba(26, 54, 93, 0.85)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', textAlign: 'center', color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
          <img src="/logo.png" alt="BTU Group" style={{ width: '250px', backgroundColor: 'white', padding: '10px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.3)', objectFit: 'contain' }} />
        </div>
        <h1 style={{ fontSize: '2.3rem', marginBottom: '10px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '35px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك (صيانة، فلاتر، توريد)..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ width: '100%', padding: '20px 25px', borderRadius: '40px', border: 'none', fontSize: '1.1rem', backgroundColor: '#FFFFFF', color: '#333', boxShadow: '0 8px 30px rgba(0,0,0,0.4)', outline: 'none' }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', left: '20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: '#1a365d' }}>🔍</button>
        </div>
      </header>

      {/* 4. قسم الخدمات (رجوع الكروت الـ 3) */}
      <main style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1a365d', marginBottom: '40px' }}>🏷️ عروض وخدمات حصرية</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', borderTop: '5px solid #25d366' }}>
            <h3 style={{ color: '#1a365d' }}>صيانة وتجهيز التكييف</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>فحص شامل وشحن فريون وتنظيف الوحدات بأحدث الأجهزة.</p>
            <a href="https://wa.me/201093946313?text=أريد صيانة تكييف" target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', padding: '14px', borderRadius: '30px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', borderTop: '5px solid #007bff' }}>
            <h3 style={{ color: '#1a365d' }}>تركيب فلاتر مياه</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>تركيب فلاتر 7 مراحل مع ضمان حقيقي وقطع غيار أصلية.</p>
            <a href="https://wa.me/201093946313?text=أريد تركيب فلتر" target="_blank" style={{ display: 'block', backgroundColor: '#007bff', color: 'white', padding: '14px', borderRadius: '30px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', borderTop: '5px solid #2d3748' }}>
            <h3 style={{ color: '#1a365d' }}>توريد وتركيب (مشاريع)</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>تكييفات كونسيلد ومركزي للمكاتب والفلل بأفضل الأسعار.</p>
            <a href="https://wa.me/201093946313?text=استفسار عن مشاريع التوريد" target="_blank" style={{ display: 'block', backgroundColor: '#2d3748', color: 'white', padding: '14px', borderRadius: '30px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>استفسر الآن</a>
          </div>

        </div>
      </main>

      {/* 5. شريط التثبيت البرتقالي الثابت */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', borderRadius: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3000, boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}>
          <span style={{ fontWeight: 'bold' }}>📥 ثبت تطبيق BTU Group على جهازك</span>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>تثبيت</button>
        </div>
      )}

      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '30px', marginTop: '40px' }}>
        <p>© 2026 BTU Group للمقاولات والتوريدات - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
