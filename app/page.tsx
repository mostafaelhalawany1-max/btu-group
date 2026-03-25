export default function Home() {
  // اسم الملف اللي إنت سميته في مجلد public
  const logoFileName = "logo.png"; 

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(rgba(26, 54, 93, 0.85), rgba(26, 54, 93, 0.85)), url("https://images.unsplash.com/photo-1581094288338-2314dddb7ee1?auto=format&fit=crop&q=80&w=1000")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* عرض اللوجو الخاص بك */}
      <img 
        src={`/${logoFileName}`} 
        alt="BTU Group"
        style={{ 
          height: '140px', 
          width: 'auto', 
          marginBottom: '20px', 
          backgroundColor: 'white', 
          padding: '15px',
          borderRadius: '20px',
          boxShadow: '0 8px 15px rgba(0,0,0,0.3)'
        }}
      />
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>BTU Group</h1>
      
      <p style={{ fontSize: '1.3rem', margin: '20px 0 30px 0', maxWidth: '700px', lineHeight: '1.8' }}>
        الحل الأمثل لتوريد وتركيب وصيانة التكييفات <br/> وفلاتر المياه بأعلى معايير الجودة
      </p>
      
      <a 
        href="https://wa.me/201093946313?text=أريد+حجز+موعد+صيانة" 
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          padding: '18px 45px', 
          backgroundColor: '#25d366', 
          color: 'white', 
          borderRadius: '50px', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          fontSize: '1.4rem',
          boxShadow: '0 10px 20px rgba(37, 211, 102, 0.4)'
        }}
      >
        اطلب صيانة الآن عبر واتساب
      </a>
      
      <div style={{ marginTop: '50px', fontSize: '0.9rem', opacity: 0.7 }}>
        © 2026 BTU Group - جميع الحقوق محفوظة
      </div>
    </div>
  );
}
