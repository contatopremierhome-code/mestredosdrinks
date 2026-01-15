import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Mestre dos Drinks - Desbloqueie +500 Receitas de Coquetéis',
  description: 'Torne-se o bartender oficial de todas as festas. Domine receitas de coquetéis com ingredientes simples. Não precisa de equipamento chique.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`!scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2672206122872429');
              fbq('init', '902096692069775');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=2672206122872429&ev=PageView&noscript=1"
          />
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=902096692069775&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
