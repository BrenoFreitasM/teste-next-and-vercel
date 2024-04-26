import Image from "next/image"
import Link from "next/link"

import LogoImg from '/public/logo.svg';
import SearchIcon from '/public/icon-search.svg';
import IconUser from '/public/icon-user.svg';
import { GridContainer } from "./Grid";

export function Header() {
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer>
        <Image
          src={LogoImg}
          alt={"logo"}
        />
        <div>
          <div>
            <nav>
              <Link href="#">Inicio</Link>
              <Link href="#">Benefícios</Link>
              <Link href="#">Para quem é o curso</Link>
              <Link href="#">Preços Promocionais</Link>
              <Link href="#">Sobre nós</Link>
            </nav>
          </div>
          <div>
            <button>
              <Image src={SearchIcon} alt="search icon" />
            </button>
            <button>
              <Image src={IconUser} alt="icon user" />
              <span>Fazer Login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  )
}