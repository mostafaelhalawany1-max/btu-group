'use client'; 

import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const logoFileName = "logo.png"; 
  const myPhoneNumber = "201093946313"; // 👈 تم تحديث رقمك يا هندسة

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      window.open(`https://wa.me/${myPhoneNumber}?text=كنت ببحث في الموقع عن: ${searchQuery}`, '_blank');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6' }}>
      
      {/* 1. شريط الإعلانات العلوي */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', textAlign: 'center', padding: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
        📢 عرض خاص: خصم 20% على غسيل التكييفات لفترة محدودة!
      </div>

      {/* 2. القسم العلوي (Hero Section) - تم زيادة المساحة للوجو */}
      <header style={{ 
        background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', 
        padding: '50px 20px', // 👈 وسعنا المنطقة الزرقاء هنا
        textAlign: 'center', color: 'white'
      }}>
        
        {/* 🌟 اللوجو في النص - تم تكبيره وجعله أعرض */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
          <img 
            src={`/${logoFileName}`} 
            alt="BTU Group" 
            style={{ 
              width: '220px', // 👈 كبرنا العرض عشان يبقى مالي مركزه
              height: 'auto', 
              backgroundColor: 'white', 
              padding: '12px', 
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }} 
          />
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        {/* 🔍 شريط البحث */}
        <div style={{ maxWidth: '500px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="ابحث عن خدمتك (صيانة، فلاتر، توريد)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{ 
              width: '100%', 
              padding: '18px 60px 18px 25px', 
              borderRadius: '35px', 
              border: 'none',
              fontSize: '1.1rem',
              color: '#333', 
              backgroundColor: '#FFFFFF', 
              outline: 'none',
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)'
            }} 
          />
          <button 
            onClick={handleSearch}
            style={{ 
              position: 'absolute', 
              right: '20px', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '1.4rem',
              color: '#1a365d',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            🔍
          </button>
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '12px', color: 'white', opacity: 0.85 }}>اضغط على العدسة أو Enter للبحث السريع</p>
      </header>

      {/* 3. قسم العروض والخدمات */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1a365d', marginBottom: '35px', fontSize: '1.8rem' }}>🏷️ عروض وخدمات حصرية</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* كارت 1 */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>خصم 20%</div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1a365d', fontSize: '1.4rem', marginBottom: '10px' }}>صيانة وتجهيز التكييف</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>فحص شامل وشحن فريون وتنظيف الوحدات بأحدث الأجهزة.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد الاستفسار عن عرض صيانة التكييف`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px 25px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

          {/* كارت 2 */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#3182ce', color: 'white', padding: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>الأكثر طلباً</div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1a365d', fontSize: '1.4rem', marginBottom: '10px' }}>تركيب فلاتر مياه</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>تركيب فلاتر 7 مراحل مع ضمان حقيقي وقطع غيار أصلية.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد الاستفسار عن فلاتر المياه`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px 25px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>اطلب الآن</a>
            </div>
          </div>

          {/* كارت 3 */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#2d3748', color: 'white', padding: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>عقود سنوية</div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1a365d', fontSize: '1.4rem', marginBottom: '10px' }}>توريد وتركيب (مشاريع)</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>توريد تكييفات كونسيلد ومركزي للمكاتب والفلل بأفضل الأسعار.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد عرض أسعار لتوريد وتركيب تكييفات`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '12px 25px', borderRadius: '25px', marginTop: '15px', fontWeight: 'bold' }}>استفسر الآن</a>
            </div>
          </div>

        </div>
      </main>

      {/* 4. تذييل الصفحة - تم إزالة التخصيص الجغرافي */}
      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '30px 20px', marginTop: '40px' }}>
        <p style={{ fontSize: '1rem', marginBottom: '5px' }}>© 2026 BTU Group - جميع الحقوق محفوظة</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>خدمات احترافية بجودة عالمية</p>
      </footer>
    </div>
  );
}
