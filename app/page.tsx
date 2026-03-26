'use client'; // ضروري عشان خاصية البحث تشتغل

export default function Home() {
  const logoFileName = "logo.png"; 
  const myPhoneNumber = "201093946313"; // 👈 ضع رقمك هنا مكان الـ X

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6' }}>
      
      {/* 1. شريط الإعلانات العلوي - صغرنا حجمه شوية كمان */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', textAlign: 'center', padding: '8px', fontWeight: 'bold', fontSize: '0.85rem' }}>
        📢 عرض خاص: خصم 20% على غسيل التكييفات لفترة محدودة!
      </div>

      {/* 2. القسم العلوي المطور (Hero Section) - تم تقليل المساحة بشكل كبير */}
      <header style={{ 
        background: 'linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', 
        padding: '30px 20px', // 👈 تم تقليل المسافة هنا للنصف تماماً
        textAlign: 'center', color: 'white'
      }}>
        {/* 🌟 اللوجو بقى في النص فوق الكلمة وصغرنا حجمه */}
        <img src={`/${logoFileName}`} alt="BTU Group" style={{ height: '70px', backgroundColor: 'white', padding: '8px', borderRadius: '12px', marginBottom: '15px' }} />
        
        {/* صغرنا أحجام الخطوط شوية عشان توفر مساحة */}
        <h1 style={{ fontSize: '2rem', marginBottom: '5px', fontWeight: 'bold' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '20px' }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        {/* 🔍 شريط البحث الذكي (أبيض بتباين عالي) - تم تقليل المسافات حوله */}
        <div style={{ maxWidth: '450px', margin: '0 auto', position: 'relative' }}>
          <input 
            type="text" 
            placeholder="ابحث عن خدمتك (صيانة، فلاتر، توريد)..." 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const query = (e.target as HTMLInputElement).value;
                window.open(`https://wa.me/${myPhoneNumber}?text=كنت ببحث في الموقع عن: ${query}`, '_blank');
              }
            }}
            style={{ 
              width: '100%', 
              padding: '15px 20px', // 👈 شريط أنحف
              borderRadius: '25px', 
              border: '2px solid rgba(255,255,255,0.3)',
              fontSize: '1rem', // خط أصغر شوية
              color: '#333', 
              backgroundColor: '#FFFFFF', 
              outline: 'none',
              boxShadow: '0 5px 20px rgba(0,0,0,0.3)'
            }} 
          />
          {/* أيقونة البحث */}
          <div style={{ position: 'absolute', left: '20px', top: '15px', fontSize: '1.1rem', color: '#1a365d' }}>🔍</div>
          <p style={{ fontSize: '0.75rem', marginTop: '8px', color: 'white', opacity: 0.85 }}>اضغط Enter للبحث السريع</p>
        </div>
      </header>

      {/* 3. قسم العروض والخدمات (الكروت) - تم تقريبها من الـ Header */}
      <main style={{ padding: '20px 20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1a365d', marginBottom: '25px', fontSize: '1.6rem' }}>🏷️ عروض وخدمات حصرية</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          
          {/* كارت خدمة 1 */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>خصم 20%</div>
            <div style={{ padding: '15px' }}>
              <h3 style={{ color: '#1a365d', fontSize: '1.2rem', marginBottom: '8px' }}>صيانة وتجهيز التكييف</h3>
              <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.4' }}>فحص شامل وشحن فريون وتنظيف الوحدات بأحدث الأجهزة.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد الاستفسار عن عرض صيانة التكييف`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '8px 20px', borderRadius: '20px', marginTop: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>اطلب الآن</a>
            </div>
          </div>

          {/* كارت خدمة 2 */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#3182ce', color: 'white', padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>الأكثر طلباً</div>
            <div style={{ padding: '15px' }}>
              <h3 style={{ color: '#1a365d', fontSize: '1.2rem', marginBottom: '8px' }}>تركيب فلاتر مياه</h3>
              <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.4' }}>تركيب فلاتر 7 مراحل مع ضمان حقيقي وقطع غيار أصلية.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد الاستفسار عن فلاتر المياه`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '8px 20px', borderRadius: '20px', marginTop: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>اطلب الآن</a>
            </div>
          </div>

          {/* كارت خدمة 3 */}
          <div style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 15px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#2d3748', color: 'white', padding: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>عقود سنوية</div>
            <div style={{ padding: '15px' }}>
              <h3 style={{ color: '#1a365d', fontSize: '1.2rem', marginBottom: '8px' }}>توريد وتركيب (مشاريع)</h3>
              <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.4' }}>توريد تكييفات كونسيلد ومركزي للمكاتب والفلل بأفضل الأسعار.</p>
              <a href={`https://wa.me/${myPhoneNumber}?text=أريد عرض أسعار لتوريد وتركيب تكييفات لمشروع`} target="_blank" style={{ display: 'block', backgroundColor: '#25d366', color: 'white', textDecoration: 'none', padding: '8px 20px', borderRadius: '20px', marginTop: '12px', fontWeight: 'bold', fontSize: '0.9rem' }}>استفسر الآن</a>
            </div>
          </div>

        </div>
      </main>

      {/* 4. تذييل الصفحة (Footer) - تم تصغيره */}
      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '25px 20px', marginTop: '30px' }}>
        <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>© 2026 BTU Group - جميع الحقوق محفوظة</p>
        <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>الشيخ زايد - 6 أكتوبر - القاهرة الكبرى</p>
      </footer>
    </div>
  );
}
