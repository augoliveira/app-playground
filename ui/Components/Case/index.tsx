/* eslint-disable react/jsx-no-comment-textnodes */

"use client";

import Image from "next/image";
import Link from "next/link";

import Case1 from "/public/assets/dinamite/Gestor/upoads/cases/1.jpg";
import Case10 from "/public/assets/dinamite/Gestor/upoads/cases/10.jpg";
import Case11 from "/public/assets/dinamite/Gestor/upoads/cases/11.jpg";
import Case12 from "/public/assets/dinamite/Gestor/upoads/cases/12.jpg";
import Case2 from "/public/assets/dinamite/Gestor/upoads/cases/2.jpg";
import Case3 from "/public/assets/dinamite/Gestor/upoads/cases/3.jpg";
import Case4 from "/public/assets/dinamite/Gestor/upoads/cases/4.jpg";
import Case5 from "/public/assets/dinamite/Gestor/upoads/cases/5.jpg";
import Case6 from "/public/assets/dinamite/Gestor/upoads/cases/6.jpg";
import Case7 from "/public/assets/dinamite/Gestor/upoads/cases/7.jpg";
import Case8 from "/public/assets/dinamite/Gestor/upoads/cases/8.jpg";
import Case9 from "/public/assets/dinamite/Gestor/upoads/cases/9.jpg";

import Seta from "../../../public/img/seta.png";
import {
  Container,
  TextContainer,
  InfosContainer,
  Identidade,
  Design,
} from "./styles";

function HomeHero() {
  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-[100%] py-16">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Link
              href="#"
              className={`group relative h-28 min-w-[180px] cursor-pointer transition duration-500 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
            >
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden bg-gray-200">
                <Image
                  src={Case1}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>

              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>

              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </Link>

            <Link
              href="#"
              className={`group relative h-28 min-w-[180px] cursor-pointer transition duration-500 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
            >
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={Case2}
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="rounded-sm object-cover md:rounded"
                />
              </div>

              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>

              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </Link>

            <Link
              href="#"
              className={`group relative h-28 min-w-[180px] cursor-pointer transition duration-500 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
            >
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={Case3}
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>

              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>

              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </Link>

            <Link
              href="#"
              className={`group relative h-28 min-w-[180px] cursor-pointer transition duration-500 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
            >
              <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={Case4}
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />

                <div
                  className={`group absolute top-0 left-0 z-50 flex h-full w-full items-end justify-center pb-8 duration-500 hover:bg-black/70`}
                >
                  <h3>Machined Mechanical Pencil</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
