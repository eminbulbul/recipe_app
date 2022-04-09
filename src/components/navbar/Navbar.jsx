import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
// import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<Emin's>"}</i>
        <span>recipes</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!isOpen)}>
        <span />
        <span />
        <span />

        {/* <GiHamburgerMenu />  react iconstan hamburger almak istersek*/}
      </Hamburger>

      <Menu osman={isOpen}>
        <MenuLink onClick={() => setOpen(!isOpen)} to="/about">
          About
        </MenuLink>
        <a
          href="https://github.com/eminbulbul"
          target="_blank"
          rel="noopener noreferrer"
          // Noreferrer etiketi önceleri noopener etiketiyle beraber kullanılan, target="_blank" etiketinden gelebilecek tehditlere karşı sitenizi ve bilgisayarınızı korumak için noopener etiketiyle birlikte komut oluşturan etikettir. Güvenlik açıklarını kapatabilmek ve SEO çalışmalarına da katkıda bulunmak için noopenerle birlikte yazılan noreferrer, WordPress'in güvenliği iyileştirmeye yönelik yeni güncellemeleriyle kaldırıldı ve noopener etiketi tek başına kullanılmaya başlandı.
          // Noopener, web sitenizin güvenliğini artırmak ve diğer web sitelerinin sayfanıza erişim sağlamasını önlemek için gereklidir (tarayıcı oturumu aracılığıyla).
          // Noreferrer, yönlendirme bilgilerinin hedef web sitesine aktarılmasını önlemek için kullanılır ve bu aynı zamanda Google analitikteki yönlendirme trafiğini de gizler.
          style={{ textDecoration: "none" }}
        >
          <code className="brand">{"<Emin/> "}</code>
          {/* <></> işaretlerini kullanabilmek için code */}
        </a>
        <MenuLink
          onMouseUp={() => sessionStorage.clear()}
          onClick={() => setOpen(!isOpen)}
          to="/"
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
