export default function Home() {
  const logoFileName = "logo.png"; 

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(rgba(26, 54, 93, 0.92), rgba(26, 54, 93, 0.92)), url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      
      {/* اللوجو */}
      <img 
        src={`/${logoFileName}`} 
        alt="BTU Group"
        style={{ 
          height: '130px', 
          width: 'auto', 
          marginBottom: '20px', 
          backgroundColor: 'white', 
          padding: '15px',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
        }}
      />
      
      <h1 style={{ fontSize: '3rem', marginBottom: '10px', fontWeight: 'bold' }}>BTU Group</h1>
      
      <p style={{ fontSize: '1.4rem', marginBottom: '40px', maxWidth: '800px', lineHeight: '1.8', opacity: 0.9 }}>
        الحل الأمثل لتوريد وتركيب وصيانة التكييفات <br/> وفلاتر المياه بأعلى معايير الجودة
      </p>

      {/* قسم المميزات - متجاوب مع الموبايل واللابتوب */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        marginBottom: '40px',
        maxWidth: '1000px' 
      }}>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', width: '250px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h3 style={{ color: '#63b3ed' }}>⚡ سرعة استجابة</h3>
          <p style={{ fontSize: '1rem' }}>نلتزم بالمواعيد ونصلك في أسرع وقت</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', width: '250px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h3 style={{ color: '#63b3ed' }}>⚙️ قطع غيار أصلية</h3>
          <p style={{ fontSize: '1rem' }}>نستخدم أفضل الخامات وقطع الغيار الأصلية</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '15px', width: '250px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <h3 style={{ color: '#63b3ed' }}>🏆 خبرة +10 سنوات</h3>
          <p style={{ fontSize: '1rem' }}>دقة واحترافية في التنفيذ بفضل خبرتنا الطويلة</p>
        </div>
      </div>
      
      {/* زر الواتساب */}
      <a 
        href="https://wa.me/201093946313?text=أريد+حجز+موعد+صيانة+من+الموقع" 
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          padding: '20px 60px', 
          backgroundColor: '#25d366', 
          color: 'white', 
          borderRadius: '50px', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          fontSize: '1.5rem',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          display: 'inline-block'
        }}
      >
        اطلب صيانة الآن عبر واتساب
      </a>
      
      <div style={{ marginTop: '60px', fontSize: '0.9rem', opacity: 0.6 }}>
        © 2026 BTU Group - جميع الحقوق محفوظة
      </div>
    </div>
  );
}
