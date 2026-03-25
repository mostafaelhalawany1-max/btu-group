export default function Home() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '80px 20px', 
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl'
    }}>
      <h1 style={{ color: '#1a365d' }}>BTU Group</h1>
      <h2 style={{ color: '#2d3748' }}>لصيانة التكييفات وفلاتر المياه</h2>
      <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
        خدمة احترافية لعملائنا في الشيخ زايد و6 أكتوبر
      </p>
      <br />
      <a 
        href="https://wa.me/201093946313" 
        style={{ 
          padding: '15px 30px', 
          backgroundColor: '#25d366', 
          color: 'white', 
          borderRadius: '50px', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}
      >
        اطلب صيانة الآن عبر واتساب
      </a>
    </div>
  );
}
