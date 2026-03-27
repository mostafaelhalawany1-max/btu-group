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
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f0f9ff', minHeight: '100vh', margin: 0 }}>
      
      <head>
        <title>BTU Group | صيانة تكييفات وفلاتر مياه</title>
        {/* سطر التحقق من جوجل اللي بعته */}
        <meta name="google-site-verification" content="GnBnOrp1gL_I623oKpY8YrDXosh0S38l2N-eFPHxS0g" />
        
        {/* وصف الموقع لتحسين البحث (SEO) */}
        <meta name="description" content="BTU Group للمقاولات والتوريدات - خبراء صيانة التكييف وتركيب فلاتر المياه في مصر." />
        
        {/* ربط الأيقونة باللوجو */}
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>

      {/* شريط الأخبار */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '10px', textAlign: 'center', fontWeight: 'bold', position: 'sticky', top: 0, zIndex: 1000 }}>
         📢 خصم 20% على غسيل التكييفات لفترة محدودة! ——— 🛠️ قطع غيار أصلية بضمان عام كامل!
      </div>

      {/* الهيرو سكشن */}
      <header style={{ background: '#2a4a73', padding: '50px 20px', textAlign: 'center', color: 'white' }}>
        <img src="/logo.png" alt="BTU Group" style={{ width: '200px', backgroundColor: 'white', padding: '10px', borderRadius: '15px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '2.2rem', margin: '0 0 10px 0' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ opacity: 0.9, marginBottom: '30px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', padding: '15px 20px', borderRadius: '30px', border: 'none', color: '#333', outline: 'none' }} 
          />
        </div>
      </header>

      {/* الكروت الـ 3 بالترتيب والصور */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* تكييف */}
          <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ height: '180px', background: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600") center/cover' }}></div>
            <div style={{ padding: '20px' }}>
              <h3>صيانة وتجهيز التكييف</h3>
              <p style={{ color: '#666' }}>تنظيف وفحص شامل للوحدات لضمان أعلى كفاءة.</p>
              <button onClick={() => window.open('https://wa.me/201093946313')} style={{ backgroundColor: '#25d366', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>اطلب الآن</button>
            </div>
          </div>

          {/* فلاتر */}
          <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ height: '180px', background: 'url("https://images.unsplash.com/photo-1585832770485-e38953556501?w=600") center/cover' }}></div>
            <div style={{ padding: '20px' }}>
              <h3>تركيب فلاتر مياه</h3>
              <p style={{ color: '#666' }}>فلاتر 7 مراحل أصلية تضمن مياه نقية لعائلتك.</p>
              <button onClick={() => window.open('https://wa.me/201093946313')} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>اطلب الآن</button>
            </div>
          </div>

          {/* مشاريع */}
          <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ height: '180px', background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600") center/cover' }}></div>
            <div style={{ padding: '20px' }}>
              <h3>توريد ومشاريع</h3>
              <p style={{ color: '#666' }}>حلول تكييف متكاملة للمكاتب والفلل (كونسيلد ومركزي).</p>
              <button onClick={() => window.open('https://wa.me/201093946313')} style={{ backgroundColor: '#333', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>استفسر الآن</button>
            </div>
          </div>

        </div>
      </main>

      {/* شريط الإضافة للشاشة الرئيسية */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#f37021', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2000 }}>
          <span>ثبت تطبيق BTU Group على موبايلك</span>
          <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold' }}>تثبيت</button>
        </div>
      )}

      {/* نافذة الإشعارات */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', textAlign: 'center', maxWidth: '350px' }}>
            <img src="/logo.png" style={{ width: '80px', marginBottom: '10px' }} />
            <h3>خليك متابعنا!</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>اشترك لتعرف أحدث عروض BTU Group فور صدورها.</p>
            <button onClick={() => setShowNotifyPopup(false)} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 30px', borderRadius: '10px' }}>حسناً</button>
          </div>
        </div>
      )}

      <footer style={{ backgroundColor: '#2a4a73', color: 'white', textAlign: 'center', padding: '30px', marginTop: '40px' }}>
        <p>© 2026 BTU Group - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
