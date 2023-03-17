import "#/styles/globals.css";

import "#/styles/dark.css";

import "#/styles/all.css";

import "/public/assets/dinamite/css/mqueries.css";

import "/public/assets/dinamite/css/modal.css";

import "/public/assets/dinamite/lib/selectFx/cs-select.css";

import "/public/assets/dinamite/lib/selectFx/cs-skin-border.css";

import "/public/assets/dinamite/css/estilo.css";

import GlobalStyle from "#/styles/GlobalStyle";
import { AddressBar } from "#/ui/address-bar";
import Byline from "#/ui/byline";
import Cursor from "#/ui/Cursor";
import { GlobalNav } from "#/ui/global-nav";
import ScrollTop from "#/ui/ScrollTop";

import StyledComponentsRegistry from "./styling/styled-components/registry";

export const metadata = {
  title: {
    default: "AGÊNCIA UP.EXPERT",

    template: "MARKETIGN DIGITAL EM BRASILIA | (61) 9 8669-2775",
  },

  description:
    "Agência de Marketing Digital em Brasília-DF e Goiânia, honesta e eficiente. Confie em quem mais entende de resultados no digital, fale com a UP.EXPERT.",

  keywords:
    "Marketing Digital - Agência de Publicidade e Propaganda - Sites Personalizados - Social Mídia - Impressos - Landing Page - Loja Virtual - Arte Acesse e saiba mais!",

  authors: [
    {
      name: "Agência full service up.expert",

      url: "https://upexpert.com.br",
    },
  ],

  openGraph: {
    url: "https://upexpert.com.br",

    title: "AGÊNCIA UP.EXPERT",

    description:
      "Somos especialistas altamente qualificados em engenharia de software, com uma ampla gama de habilidades e experiência em várias tecnologias populares. Sua paixão pela inovação e aprendizado constante é uma qualidade valiosa em um campo que está sempre evoluindo. Sua experiência em HTML, CSS, JavaScript e TypeScript, juntamente com sua proficiência em ReactJS, NextJS, React Native, Material-UI e Tailwind CSS, sugere que vocês têm as habilidades necessárias para criar interfaces de usuário atraentes e intuitivas.",

    images: [
      {
        url: "/cover.png",

        alt: "Vinicius Anchieta",
      },
    ],
  },

  icons: [
    {
      url: "/favicon.png",

      sizes: "32x32",

      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />

      <body className="overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        <GlobalNav />

        <ScrollTop />

        <Cursor />

        <div className="lg:pl-56">
          <div className="max-w-8xl mx-auto space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>

                <GlobalStyle />
              </div>
            </div>

            <Byline className="fixed sm:hidden" />
          </div>
        </div>
      </body>
    </html>
  );
}
