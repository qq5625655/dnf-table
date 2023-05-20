import { CustomLayout } from '../components/layout'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomLayout>
        {children}
        </CustomLayout>
        
      </body>
    </html>
  );
}
