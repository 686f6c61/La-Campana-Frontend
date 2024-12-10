import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faWallet } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineSupportAgent } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Confianza = () => {
    const features = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faWallet} className="text-red-600 text-5xl" />,
            title: "Pagos seguros",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
        {
            id: 2,
            icon: <VscWorkspaceTrusted className="mx-auto h-14 w-14 text-red-600" />,
            title: "Calidad garantizada",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
        {
            id: 3,
            icon: <MdOutlineSupportAgent className="mx-auto h-14 w-14 text-red-600" />,
            title: "Asesoría permanente",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
        {
            id: 4,
            icon: <FontAwesomeIcon icon={faTruckFast} className="text-red-600 text-5xl" />,
            title: "Envíos nacionales",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
    ];

    return (
        <section className="relative text-white py-16 md:px-32 lg:px-64 rounded-lg overflow-hidden">
            <div className="relative h-[300px] my-bg-primary px-16 md:px-32 lg:px-64">
                <div className="absolute inset-0">
                    <img
                        src="src/assets/images/background.jpeg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 rounded-lg overflow-hidden "
                    />
                </div>
                {/* Texto encima del fondo */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h2 className="text-4xl font-bold">Tranquilidad y confianza</h2>
                    <p className="mt-2 text-center max-w-2xl">
                        En <span className="font-bold">La Campana</span>, queremos que tu experiencia de compra sea excepcional. Por eso, te ofrecemos una serie de beneficios y garantías que te darán la tranquilidad y la confianza que necesitas para realizar tu compra.
                    </p>
                </div>
            </div>

            {/* Features (sobresalientes) */}
            <div className="relative -mt-20 pb-16">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-red-600"
                            >
                                {/* Ícono */}
                                <div className="mb-4">
                                    {feature.icon}
                                </div>
                                {/* Título */}
                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                {/* Descripción */}
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Espaciado para evitar solapamiento con la sección siguiente */}
            <div className="mt-20"></div>
        </section>
    );
};

export default Confianza;
