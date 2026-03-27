'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  const logoFileName = "logo.png"; 
  const myPhoneNumber = "201093946313"; 

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true); // هيظهر شريط التثبيت للاب توب والموبايل
    });
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
      window.open(`https://wa.me/${myPhoneNumber}?text=كنت ببحث في الموقع عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6', paddingBottom: showInstallBanner ? '80px' : '0' }}>
      
      {/* 1. 📢 شريط الأخبار المتحرك مع كلمة "شريط الأخبار" ثابتة */}
      <div style={{ 
        backgroundColor: '#ff4d4d', 
        color: 'white', 
        overflow: 'hidden', 
        whiteSpace: 'nowrap', 
        padding: '0',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '45px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        {/* الكلمة الثابتة على اليمين */}
        <div style={{ 
          backgroundColor: '#333', 
          padding: '0 20px', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          zIndex: 2,
          position: 'relative',
          boxShadow: '5px 0 15px rgba(0,0,0,0.3)'
        }}>
          شريط الأخبار 📡
        </div>

        <style>{`
          @keyframes marqueeLeftToRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .marquee-content {
            display: inline-block;
            animation: marqueeLeftToRight 25s linear infinite;
          }
        `}</style>
        
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee-content" style={{ paddingRight: '50px' }}>
            📢 عرض خاص: خصم 20% على غسيل التكييفات لفترة محدودة! ——— 🛠️ قطع غيار أصلية بضمان عام كامل ——— 💧 احمِ عائلتك مع فلاتر المياه 7 مراحل بتركيب مجاني!
          </div>
        </div>
      </div>

      {/* 2. القسم العلوي (Hero Section) */}
      <header style={{ 
        background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', 
        padding: '50px 20px', textAlign: 'center', color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
          <img src={`/${logoFileName}`} alt="BTU Group" style={{ width: '220px', height: 'auto', backgroundColor: 'white', padding: '12px', borderRadius: '15px' }} />
        </div>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>BTU Group للمقاولات والتوريدات</h1>
        
        {/* شريط البحث الأبيض */}
        <div style={{ maxWidth: '500px', margin: '30px auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="ابحث عن خدمتك..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ 
              width: '100%', padding: '18px 60px 18px 25px', borderRadius: '35px', border: 'none', 
              fontSize: '1.1rem', backgroundColor: '#FFFFFF', color: '#333', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' 
            }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: '#1a365d' }}>🔍</button>
        </div>
      </header>

      {/* 3. قسم العروض والخدمات (الـ 3 كروت كاملة) */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <h3>صيانة وتجهيز التكييف</h3>
            <a href={`https://wa.me/${myPhoneNumber}?text=طلب صيانة`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <h3>تركيب فلاتر مياه</h3>
            <a href={`https://wa.me/${myPhoneNumber}?text=طلب فلتر`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <h3>توريد وتركيب مشاريع</h3>
            <a href={`https://wa.me/${myPhoneNumber}?text=استفسار مشاريع`} target="_blank" style={{ display: 'block', backgroundColor: '#2d3748', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>استفسر الآن</a>
          </div>
        </div>
      </main>

      {/* 🌟 زرار التثبيت للاب توب والموبايل (زي سكن مصر) */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', borderRadius: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <span style={{ fontWeight: 'bold' }}>📥 ثبت تطبيق BTU Group على جهازك</span>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>تثبيت الآن</button>
        </div>
      )}

      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '30px 20px' }}>
        <p>© 2026 BTU Group - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
