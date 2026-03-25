import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // العنوان اللي بيظهر فوق في المتصفح وفي واتساب
  title: "BTU Group - صيانة تكييفات وفلاتر مياه",
  
  // الوصف اللي بيظهر تحت اللينك
  description: "الحل الأمثل لتوريد وتركيب وصيانة التكييفات وفلاتر المياه بأعلى معايير الجودة وقطع غيار أصلية.",
  
  // إعدادات المعاينة لواتساب وفيسبوك (Open Graph)
  openGraph: {
    title: "BTU Group | خبرة +10 سنوات",
    description: "تخصصنا التكييف وفلاتر المياه. سرعة استجابة وقطع غيار أصلية.",
    url: "https://btu-group.vercel.app",
    siteName: "BTU Group",
    images: [
      {
        url: "/logo.png", // هيسحب اللوجو اللي إنت رفعته
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
