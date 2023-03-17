"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { Icons } from "./styles";
import "#/ui/flutuante/styles.css";

export function Links() {
  return (
    <>
      <Icons>
        <Link
          href={"https://github.com/EvanderInacio"}
          target="_blank"
          aria-label="Link para o Github"
        >
          <FaGithub />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/evander-inacio/"}
          target="_blank"
          aria-label="Link para o Linkedin"
        >
          <FaLinkedin />
        </Link>
        <Link
          href={"https://www.facebook.com/evandder.lopes/"}
          target="_blank"
          aria-label="Link para o Facebook"
        >
          <FaFacebook />
        </Link>
        <Link
          href={"https://twitter.com/Evander_Inacio"}
          target="_blank"
          aria-label="Link para o Twitter"
        >
          <FaTwitter />
        </Link>
        <Link
          href={"https://api.whatsapp.com/send?phone=5511995085916"}
          target="_blank"
          aria-label="Link para entrar em contato via whatsapp"
        >
          <FaWhatsapp />
        </Link>
        <div className="barra"></div>
      </Icons>
    </>
  );
}
