'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  const logoFileName = "logo.png"; // 👈 تأكد إن الملف ده جوه فولدر public
  const myPhoneNumber = "201093946313"; 

  useEffect(() => {
    // كود اكتشاف إمكانية تثبيت التطبيق
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    });

    window.addEventListener('appinstalled', () => {
      setShowInstallBanner(false);
      setDeferredPrompt(null);
    });
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallBanner(false);
      }
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      window.open(`https://wa.me/${myPhoneNumber}?text=كنت ببحث في الموقع عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6', paddingBottom: showInstallBanner ? '80px' : '0' }}>
      
      {/* 🌟 🛠️ الجزء ده هو اللي هيربط الأيقونات باللوجو بتاعك */}
      <head>
        <title>BTU Group للمقاولات والتوريدات | خدمات التكييف وفلاتر المياه</title>
        {/* أيقونة المتصفح (Favicon) */}
        <link rel="icon" type="image/png" href={`/${logoFileName}`} />
        <link rel="shortcut icon" href={`/${logoFileName}`} />
        {/* أيقونة التطبيق للأيفون */}
        <link rel="apple-touch-icon" href={`/${logoFileName}`} />
        {/* ربط ملف المانيفست اللي عملناه للتطبيق */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a365d" />
      </head>

      {/* 1. 📢 شريط الأخبار المتحرك مع الكلمة الثابتة (نفس الكود السابق) */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '0.9rem', position: 'relative', display: 'flex', alignItems: 'center', height: '45px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <div style={{ backgroundColor: '#333', padding: '0 20px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 2, position: 'relative', boxShadow: '5px 0 15px rgba(0,0,0,0.3)' }}>
          شريط الأخبار 📡
        </div>
        <style>{`
          @keyframes marqueeLeftToRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .marquee-content { display: inline-block; animation: marqueeLeftToRight 25s linear infinite; }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee-content" style={{ paddingRight: '50px' }}>
            📢 عرض خاص: خصم 20% على غسيل التكييفات لفترة محدودة! ——— 🛠️ قطع غيار أصلية بضمان عام كامل ——— 💧 احمِ عائلتك مع فلاتر المياه 7 مراحل بتركيب مجاني! ——— 📞 BTU Group خبرة أكثر من 10 سنوات
          </div>
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
          <img src={`/${logoFileName}`} alt="BTU Group" style={{ width: '220px', height: 'auto', backgroundColor: 'white', padding: '12px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} />
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        {/* شريط البحث الأبيض */}
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="ابحث عن خدمتك..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ 
              width: '100%', 
              padding: '18px 60px 18px 25px', 
              borderRadius: '35px', 
              border: 'none',
              fontSize: '1.1rem', 
              outline: 'none', 
              backgroundColor: '#FFFFFF', 
              color: '#333', 
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)' 
            }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: '#1a365d' }}>🔍</button>
        </div>
      </header>

      {/* 3. قسم العروض والخدمات */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1a365d', marginBottom: '35px', fontSize: '1.8rem' }}>🏷️ عروض وخدمات حصرية</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {/* الكروت كاملة ومفصلة */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#1a365d' }}>صيانة وتجهيز التكييف</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>فحص شامل وتنظيف الوحدات بأحدث الأجهزة لضمان أعلى كفاءة.</p>
            <a href={`https://wa.me/${myPhoneNumber}?text=أريد صيانة تكييف`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#1a365d' }}>تركيب فلاتر مياه</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>فلاتر 7 مراحل أصلية تضمن مياه نقية وصحية لعائلتك.</p>
            <a href={`https://wa.me/${myPhoneNumber}?text=أريد تركيب فلتر مياه`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center', padding: '20px' }}>
            <h3 style={{ color: '#1a365d' }}>توريد وتركيب (مشاريع)</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>حلول تكييف متكاملة للمكاتب والفلل والمشاريع بأفضل الأسعار.</p>
            <a href={`https://wa.me/${myPhoneNumber}?text=أريد استفسار عن توريد للمشاريع`} target="_blank" style={{ display: 'block', backgroundColor: '#2d3748', color: 'white', textDecoration: 'none', padding: '12px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>استفسر الآن</a>
          </div>
        </div>
      </main>

      {/* 4. شريط "تثبيت التطبيق" (المربع البرتقالي) */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', right: '20px', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', borderRadius: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
          <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            📥 ثبت تطبيق BTU Group لسهولة الوصول خدماتنا
          </div>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>تثبيت الآن</button>
        </div>
      )}

      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '30px 20px', marginTop: '40px' }}>
        <p>© 2026 BTU Group - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
