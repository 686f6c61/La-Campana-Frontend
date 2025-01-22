import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faWallet } from "@fortawesome/free-solid-svg-icons";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const TrustSection = () => {
    const features = [
        {
            id: 1,
            icon: (
                <img
                    src="public/images/Group2.png"
                    alt="Pagos seguros"
                    className="mx-auto w-16 h-16 sm:w-20 sm:h-20 icon-style"
                />
            ),
            title: "Pagos seguros",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
        {
            id: 2,
            icon: (
                <img
                    src="public/images/Group3.png"
                    alt="Calidad asegurada"
                    className="mx-auto w-16 h-16 sm:w-20 sm:h-20 icon-style"
                />
            ),
            title: "Calidad garantizada",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
        {
            id: 3,
            icon: (
                <img
                    src="public/images/Group4.png"
                    alt="Asesoría permanente"
                    className="mx-auto w-16 h-16 sm:w-20 sm:h-20 icon-style"
                />
            ),
            title: "Asesoría permanente",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
        {
            id: 4,
            icon: (
                <img
                    src="public/images/Group1.png"
                    alt="Envios nacionales"
                    className="mx-auto w-16 h-16 sm:w-20 sm:h-20 icon-style"
                />
            ),
            title: "Envíos nacionales",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
    ];

    return (
        <section className="relative text-white py-10 md:py-16 px-4 md:px-8 lg:px-16 rounded-lg overflow-hidden">
            <div className="relative h-[250px] sm:h-[300px] bg-lacampana-red2 px-6 sm:px-16 md:px-32 lg:px-64">
                <div className="absolute inset-0">
                    <img
                        src="public/images/background.jpeg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 rounded-lg"
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lacampana-white">Tranquilidad y confianza</h2>
                    <p className="mt-4 text-sm sm:text-base max-w-2xl text-lacampana-white">
                        En <span className="font-bold text-lacampana-white">La Campana</span>, queremos que tu experiencia de compra sea excepcional. Por eso, te ofrecemos una serie de beneficios y garantías que te darán la tranquilidad y la confianza que necesitas para realizar tu compra.
                    </p>
                </div>
            </div>

            <div className="relative -mt-12 pb-16">
                <div className="container mx-auto max-w-screen-xl px-4 sm:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="rounded-xl p-8 sm:p-12 bg-lacampana-white shadow-lg text-center border-t-4 border-red-600"
                            >
                                <div className="mb-6">{feature.icon}</div>

                                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
