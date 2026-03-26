export default function Home() {
  const logoFileName = "logo.png"; 

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl', backgroundColor: '#f4f7f6' }}>
      
      {/* 1. شريط الإعلانات العلوي (زي سكن مصر) */}
      <div style={{ backgroundColor: '#ff4d4d', color: 'white', textAlign: 'center', padding: '10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
        📢 عرض خاص: خصم 20% على غسيل التكييفات لفترة محدودة!
      </div>

      {/* 2. القسم العلوي (Hero Section) */}
      <header style={{ 
        background: 'linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.8)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?q=80&w=1000")',
        backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 20px', textAlign: 'center', color: 'white'
      }}>
        <img src={`/${logoFileName}`} alt="BTU Group" style={{ height: '100px', backgroundColor: 'white', padding: '10px', borderRadius: '15px', marginBottom: '20px' }} />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>BTU Group للمقاولات والتوريدات</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>بوابتك الرسمية لخدمات التكييف وفلاتر المياه الاحترافية</p>
        
        {/* شريط البحث (منظر جمالي) */}
        <div style={{ marginTop: '30px', maxWidth: '500px', margin: '30px auto', position: 'relative' }}>
          <input type="text" placeholder="ابحث عن خدمتك (صيانة، فلاتر، توريد)..." style={{ width: '100%', padding: '15px 20px', borderRadius: '30px', border: 'none', fontSize: '1rem' }} />
        </div>
      </header>

      {/* 3. قسم العروض والخدمات (الكروت) */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#1a365d', marginBottom: '30px' }}>🏷️ عروض وخدمات حصرية</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          
          {/* كارت خدمة 1 */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '5px', fontSize: '0.8rem', fontWeight: 'bold' }}>خصم 20%</div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1a365d' }}>صيانة وتجهيز التكييف</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>فحص شامل وشحن فريون وتنظيف الوحدات بأحدث الأجهزة.</p>
              <button style={{ backgroundColor: '#25d366', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '20px', marginTop: '15px', cursor: 'pointer', fontWeight: 'bold' }}>اطلب الآن</button>
            </div>
          </div>

          {/* كارت خدمة 2 */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#3182ce', color: 'white', padding: '5px', fontSize: '0.8rem', fontWeight: 'bold' }}>الأكثر طلباً</div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1a365d' }}>تركيب فلاتر مياه</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>تركيب فلاتر 7 مراحل مع ضمان حقيقي وقطع غيار أصلية.</p>
              <button style={{ backgroundColor: '#25d366', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '20px', marginTop: '15px', cursor: 'pointer', fontWeight: 'bold' }}>اطلب الآن</button>
            </div>
          </div>

          {/* كارت خدمة 3 */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#2d3748', color: 'white', padding: '5px', fontSize: '0.8rem', fontWeight: 'bold' }}>عقود سنوية</div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1a365d' }}>توريد وتركيب (مشاريع)</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>توريد تكييفات كونسيلد ومركزي للمكاتب والفلل بأفضل الأسعار.</p>
              <button style={{ backgroundColor: '#25d366', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '20px', marginTop: '15px', cursor: 'pointer', fontWeight: 'bold' }}>استفسر الآن</button>
            </div>
          </div>

        </div>
      </main>

      {/* 4. تذييل الصفحة (Footer) */}
      <footer style={{ backgroundColor: '#1a365d', color: 'white', textAlign: 'center', padding: '40px 20px', marginTop: '50px' }}>
        <p>© 2026 BTU Group - جميع الحقوق محفوظة</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>الشيخ زايد - 6 أكتوبر - القاهرة الكبرى</p>
      </footer>
    </div>
  );
}
