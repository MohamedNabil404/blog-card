import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] justify-center container mx-auto"
    >
      <body className={`$antialiased`}>{children}</body>
    </html>
  );
}
