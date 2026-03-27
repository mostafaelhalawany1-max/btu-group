'use client'; 

import { useState, useEffect } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showNotifyPopup, setShowNotifyPopup] = useState(false);

  const logoFileName = "logo.png"; 
  const myPhoneNumber = "201093946313"; 

  useEffect(() => {
    // إظهار نافذة الاشعارات بعد 3 ثواني
    const timer = setTimeout(() => setShowNotifyPopup(true), 3000);

    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
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
      window.open(`https://wa.me/${myPhoneNumber}?text=استفسار من الموقع عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#e0f2fe', minHeight: '100vh', margin: 0, padding: 0 }}>
      
      {/* ⚠️ أهم جزء: ربط اللوجو كأيقونة المتصفح (Favicon) و apple-touch-icon */}
      <head>
     <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>BTU Group | صيانة تكييفات وفلاتر مياه</title>
        <link rel="icon" type="image/png" href={`/${logoFileName}`} />
        <link rel="apple-touch-icon" href={`/${logoFileName}`} />
        <link rel="shortcut icon" href={`/${logoFileName}`} />
        <link rel="manifest" href="/manifest.json" />
      </head>

      {/* 1. 📢 شريط الأخبار الثابت ( Sticky) */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', overflow: 'hidden', whiteSpace: 'nowrap', padding: '0', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', height: '45px', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ backgroundColor: '#333', padding: '0 15px', height: '100%', display: 'flex', alignItems: 'center', zIndex: 10 }}>شريط الأخبار 📡</div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
          .marquee { display: inline-block; animation: marquee 18s linear infinite; }
          .card:hover { transform: translateY(-8px); transition: 0.3s; box-shadow: 0 12px 30px rgba(0,0,0,0.1); }
        `}</style>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div className="marquee">📢 خصم 20% لفترة محدودة على صيانة التكييف ——— 💧 مياه نقية مع فلاتر BTU Group الأصلية ——— 🛠️ ضمان عام كامل على جميع قطع الغيار</div>
        </div>
      </div>

      {/* 2. الهيرو سكشن (اللوجو المتوسط والبحث الأبيض) */}
      <header style={{ 
        background: 'linear-gradient(rgba(42, 74, 115, 0.92), rgba(42, 74, 115, 0.92)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '45px 20px', textAlign: 'center', color: 'white'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={`/${logoFileName}`} alt="BTU Group" style={{ width: '230px', backgroundColor: 'white', padding: '12px 18px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.2)' }} />
        </div>
        <h1 style={{ fontSize: '2rem', marginBottom: '8px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '35px' }}>خبراء التكييف وفلاتر المياه في مصر</p>
        
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative' }}>
          <input 
            type="text" placeholder="ابحث عن خدمتك (صيانة، فلاتر، توريد)..." 
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ width: '100%', padding: '18px 25px', borderRadius: '40px', border: 'none', fontSize: '1.05rem', backgroundColor: '#FFFFFF', color: '#333', boxShadow: '0 12px 30px rgba(0,0,0,0.3)', outline: 'none' }} 
          />
          <button onClick={handleSearch} style={{ position: 'absolute', left: '20px', top: '14px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: '#2a4a73' }}>🔍</button>
        </div>
      </header>

      {/* 3. نافذة الاشعارات (Popup) */}
      {showNotifyPopup && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 10000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '25px', padding: '30px', maxWidth: '400px', width: '100%', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
            <img src={`/${logoFileName}`} alt="BTU Logo" style={{ width: '100px', marginBottom: '15px' }} />
            <h3 style={{ color: '#2a4a73', marginBottom: '10px' }}>خليك أول واحد يعرف!</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '25px' }}>اشترك في التنبيهات عشان توصلك عروض BTU Group الحصرية فور صدورها.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>اشترك الآن</button>
              <button onClick={() => setShowNotifyPopup(false)} style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#64748b', border: 'none', padding: '12px', borderRadius: '12px', cursor: 'pointer' }}>لاحقاً</button>
            </div>
          </div>
        </div>
      )}

      {/* 4. قسم العروض والخدمات (الكروت الـ 3 كاملة الصور) */}
      <main style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          
                   {/* كارت 3: التكييف (صورة وحدة تكييف) */}
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderBottom: '5px solid #25d366' }}>
            <div style={{ height: '160px', background: 'url("https://images.unsplash.com/photo-1599933310631-db671a53381a?q=80&w=600") center/cover' }}></div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#2a4a73', marginBottom: '15px' }}>صيانة وتجهيز التكييف</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7' }}>غسيل تكييف، شحن فريون، فحص أعطال، وتجهيز المواسير بأفضل الخامات العالمية.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد طلب صيانة/تجهيز تكييف`} target="_blank" style={{ display: 'inline-block', backgroundColor: '#25d366', color: 'white', padding: '12px 30px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

          {/* كارت 2: الفلاتر (صورة صنبور مياه نقي) */}
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderBottom: '5px solid #007bff' }}>
            <div style={{ height: '160px', background: 'url("https://images.unsplash.com/photo-1585832770485-e38953556501?q=80&w=600") center/cover' }}></div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#2a4a73', marginBottom: '15px' }}>تركيب فلاتر مياه</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7' }}>فلاتر 7 مراحل تايواني أصلية مع ضمان لمدة عام ومتابعة دورية للصيانة.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد طلب تركيب فلتر مياه 7 مراحل تايواني`} target="_blank" style={{ display: 'inline-block', backgroundColor: '#007bff', color: 'white', padding: '12px 30px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

 {/* كارت 1: المشاريع (صورة موقع عمل) */}
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderBottom: '5px solid #333' }}>
            <div style={{ height: '160px', background: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600") center/cover' }}></div>
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#2a4a73', marginBottom: '15px' }}>توريد وتركيب (مشاريع)</h3>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7' }}>نحن متخصصون في أنظمة الكونسيلد والمركزي للمكاتب، الفلل، والمباني التجارية الكبيرة.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=استفسار عن مشاريع توريد للمباني والفلل`} target="_blank" style={{ display: 'inline-block', backgroundColor: '#333', color: 'white', padding: '12px 30px', borderRadius: '25px', marginTop: '20px', textDecoration: 'none', fontWeight: 'bold' }}>تواصل معنا</a>
            </div>
          </div>

        </div>
      </main>

      {/* 5. شريط إضافة الاختصار (المحسن) */}
      {showInstallBanner && (
        <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', backgroundColor: '#f37021', color: 'white', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 9999, boxShadow: '0 -5px 25px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.3rem' }}>📲</span>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>أضف BTU Group إلى شاشتك الرئيسية لسهولة الطلب</span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <button onClick={handleInstallClick} style={{ backgroundColor: 'white', color: '#f37021', border: 'none', padding: '8px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>إضافة</button>
            <button onClick={() => setShowInstallBanner(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.4rem', cursor: 'pointer' }}>✕</button>
          </div>
        </div>
      )}

      {/* 6. الفوتر */}
      <footer style={{ backgroundColor: '#2a4a73', color: 'white', textAlign: 'center', padding: '35px', paddingBottom: '110px' }}>
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>© 2026 BTU Group للمقاولات والتوريدات - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
