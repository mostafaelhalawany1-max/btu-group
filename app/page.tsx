'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  const logoFileName = "logo.png"; 
  const myPhoneNumber = "201093946313"; // رقمك المعتمد

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
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
      
      {/* 1. شريط الأخبار المتحرك (Marquee) */}
      <div style={{ 
        backgroundColor: '#ff4d4d', 
        color: 'white', 
        overflow: 'hidden', 
        whiteSpace: 'nowrap', 
        padding: '10px 0',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee 20s linear continuous infinite'
        }}>
          <style>{`
            @keyframes marquee {
              0% { transform: translate(0, 0); }
              100% { transform: translate(100%, 0); }
            }
            .marquee-text {
              display: inline-block;
              animation: marquee 15s linear infinite;
            }
          `}</style>
          <span className="marquee-text">
            📢 عرض خاص: خصم 20% على غسيل التكييفات لفترة محدودة! ——— 🛠️ يتوفر لدينا قطع غيار أصلية بضمان عام كامل ——— 💧 احمِ عائلتك مع فلاتر المياه 7 مراحل بتركيب مجاني!
          </span>
        </div>
      </div>

      {/* 2. القسم العلوي (Hero Section) */}
      <header style={{ 
        background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', 
        padding: '50px 20px', textAlign: 'center', color: 'white'
      }}>
        {/* اللوجو في النص وحجمه كبير */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
          <img src={`/${logoFileName}`} alt="BTU Group" style={{ width: '220px', height: 'auto', backgroundColor: 'white', padding: '12px', borderRadius: '15px' }} />
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        {/* شريط البحث مع العدسة */}
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="ابحث عن خدمتك..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ width: '100%', padding: '18px 60px 18px 25px', borderRadius: '35px', border: 'none', fontSize: '1.1rem', outline: 'none', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: '#1a365d' }}>🔍</button>
        </div>
      </header>

      {/* 3. قسم العروض والخدمات */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#1a365d' }}>صيانة وتجهيز التكييف</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>فحص شامل وتنظيف الوحدات بأحدث الأجهزة.</p>
            <a href={`https://wa.me/${myPhoneNumber}?text=أريد صيانة تكييف`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#1a365d' }}>تركيب فلاتر مياه</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>فلاتر 7 مراحل أصلية مع ضمان حقيقي.</p>
            <a href={`https://wa.me/${myPhoneNumber}?text=أريد تركيب فلتر مياه`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

        </div>
      </main>

      {/* شريط تثبيت التطبيق (PWA) */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#f37021', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
          <div>ثبت تطبيق BTU Group لسهولة الوصول إلينا</div>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 15px', borderRadius: '5px', fontWeight: 'bold' }}>تثبيت</button>
        </div>
      )}

      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '30px 20px' }}>
        <p>© 2026 BTU Group - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
