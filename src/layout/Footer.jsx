import { Link } from "react-router";
import footerInfo from "../utils/footerInfo";
import FooterItem from "../components/layouts/FooterItem";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { links, socialMedia } = footerInfo;
  const location = useLocation();

  const shouldHideFooter =
    location.pathname === "/micuenta" || location.pathname === "/carrito";
  console.log(shouldHideFooter);
  const empresa = links.find((item) => item.title === "Empresa");
  const cuenta = links.find((item) => item.title === "Mi Cuenta");
  const legal = links.find((item) => item.title === "Legal");

  return (
    <footer
      className={`bg-lacampana-white relative ${
        shouldHideFooter ? "hidden" : "block"
      }`}
    >
      <div className="absolute w-32 h-32 left-1/2 -translate-x-1/2 -top-8 rounded-full bg-lacampana-white " />

      <article className="flex flex-col tablet:flex-wrap desktop:flex-nowrap tablet:flex-row gap-8 px-4 tablet:px-8 py-8 tablet:py-16 max-w-screen-desktop w-full justify-self-center mx-auto">
        <section className="flex flex-col text-start w-full tablet:w-2/5 desktop:w-1/4 gap-4">
          <img
            className="w-12 h-12"
            src="/images/logoSilhouette.png"
            alt="logo"
          />
          <div>
            <p>¿Tienes alguna pregunta?</p>
            <strong className="text-lacampana-gray1">
              PBX: (601) 370.22.00
            </strong>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Etiam id enim diam
            sollicitudin ut molestie velit
          </p>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <Link
                key={social.id}
                className="flex hover:scale-90 transition duration-300 ease-in-out"
                title={social.title}
                to={social.link}
              >
                <img src={social.icon} alt="icon" />
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-6 gap-6 w-full pt-8">
          <div className="col-span-1 md:col-span-1">
            <FooterItem title={empresa.title} links={empresa.links} />
          </div>

          {/* Mi Cuenta con espacio visual extra */}
          <div className="col-span-1 md:col-span-1 md:min-w-[192px]">
            <FooterItem title={cuenta.title} links={cuenta.links} />
          </div>

          <div className="col-span-2 md:col-span-2 md:translate-x-14">
            <FooterItem title={legal.title} links={legal.links} collapsible />
          </div>

          <div className="col-span-2 md:col-span-2">
            <h5 className="text-lacampana-red2 mb-4 text-left">News Letter</h5>
            <div className="flex flex-col gap-4">
              <input
                className="lacampana-btn py-2 px-4 border border-lacampana-gray4"
                type="text"
                placeholder="Correo electrónico"
              />
              <button className="lacampana-btn bg-lacampana-red2 text-white px-8 py-2 w-full border-2 border-lacampana-red2/0 hover:scale-90 hover:bg-white hover:text-lacampana-red2 hover:border-lacampana-red2 transition duration-300 ease-in-out">
                Suscribirme
              </button>
              <label className="flex gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-none checked:bg-lacampana-red2"
                />
                <Link className="text-p3-desktop text-lacampana-gray1 hover:text-lacampana-red1">
                  He leído y acepto la política de privacidad
                </Link>
              </label>
            </div>
          </div>
        </section>
      </article>
    </footer>
  );
};

export default Footer;
