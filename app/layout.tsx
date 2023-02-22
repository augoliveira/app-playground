import '#/styles/globals.css';
import '#/styles/dark.css';
import '/styles/all.css';
import '/public/assets/dinamite/css/mqueries.css';
import '/public/assets/dinamite/css/animate.css';
import '/public/assets/dinamite/css/modal.css';
import '/public/assets/dinamite/lib/selectFx/cs-select.css';
import '/public/assets/dinamite/lib/selectFx/cs-skin-border.css';
import '/public/assets/dinamite/css/estilo.css';


import { AddressBar } from '#/ui/AddressBar';
import { GlobalNav } from '#/ui/GlobalNav';
import { VercelLogo } from '#/ui/VercelLogo';
import ScrollTop from '#/ui/ScrollTop'
import Cursor from '#/ui/Cursor'
import Link from 'next/link';
import StyledComponentsRegistry from './styling/styled-components/registry';
import GlobalStyle from '#/styles/GlobalStyle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]`}>
        
        <ScrollTop />
              <Cursor />
            <div className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
              <div className=""> 
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                <GlobalStyle />
                </div>
            </div>
            <div className="mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black/30 backdrop-blur-xl">
                <Byline />
              </div>
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}

function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <Link href="https://upexpert.com.br" title="up.expert">
          <div className="w-16 text-gray-100 hover:text-gray-50">
            <VercelLogo />
          </div>
        </Link>
      </div>

      <div className="text-sm text-gray-400">
        <Link
          className="text-orange-500 hover:text-gray-400"
          href="https://upexpert.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Marketing
        </Link>
        {' / '}
        <Link
          className="underline decoration-dotted underline-offset-4 hover:text-gray-400"
          href="https://upexpert.com.br/design"
          target="_blank"
          rel="noreferrer"
        >
          Design Estratégico
        </Link>
      </div>
    </div>
  );
}
