import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faWallet } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono específico
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Confianza = () => {
  const features = [
    {
      id: 1,
      icon: (
        <FontAwesomeIcon icon={faWallet} className="text-red-600 text-4xl" />
      ),
      title: "Pagos seguros",
      description:
        "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
    },
    {
      id: 2,
      icon: <VscWorkspaceTrusted className="mx-auto h-12 w-12 text-red-600" />,
      title: "Calidad garantizada",
      description:
        "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
    },
    {
      id: 3,
      icon: (
        <MdOutlineSupportAgent className="mx-auto h-12 w-12 text-red-600" />
      ),
      title: "Asesoría permanente",
      description:
        "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
    },
    {
      id: 4,
      icon: (
        <FontAwesomeIcon icon={faTruckFast} className="text-red-600 text-4xl" />
      ),
      title: "Envíos nacionales",
      description:
        "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
    },
  ];

  return (
    <section className="relative text-lacampana-white py-16 md:px-32 lg:px-64 rounded-lg overflow-hidden">
      <div className="relative h-[300px] bg-lacampana-red2 px-16 md:px-32 lg:px-64">
        <div className="absolute inset-0">
          <img
            src="/images/background.jpeg"
            alt="Background"
            className="w-full h-full object-cover opacity-40 rounded-lg overflow-hidden "
          />
        </div>
        {/* Texto encima del fondo */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold">Tranquilidad y confianza</h2>
          <p className="mt-2">
            En <span className="font-bold">La Campana</span>, queremos que tu
            experiencia de compra sea excepcional. Por eso, te ofrecemos una
            serie de beneficios y garantías que te darán la tranquilidad y la
            confianza que necesitas para realizar tu compra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-100 rounded-lg p-6 shadow-lg text-center"
            >
              <div className="mb-4">
                {typeof feature.icon === "string" ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="mx-auto h-12 w-12"
                  />
                ) : (
                  feature.icon
                )}
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Confianza;
