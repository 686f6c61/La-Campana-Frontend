import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faWallet } from '@fortawesome/free-solid-svg-icons';
import { VscWorkspaceTrusted } from "react-icons/vsc";


const TrustSection = () => {
    const features = [
        {
            id: 1,
            icon: (
                <img 
                    src="public/images/Group2.png" 
                    alt="Pagos seguros" 
                    className="mx-auto icon-style" 
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
                    className="mx-auto icon-style" 
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
                    className="mx-auto icon-style" 
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
                    className="mx-auto icon-style" 
                />
            ),
            title: "Envíos nacionales",
            description: "Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit.",
        },
    ];

    return (
        <section className="relative text-white py-16 md:px-32 lg:px-64 rounded-lg overflow-hidden">
            <div className="relative h-[300px] bg-lacampana-red2 px-16 md:px-32 lg:px-64">
                <div className="absolute inset-0">
                    <img
                        src="public/images/background.jpeg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 rounded-lg overflow-hidden"
                    />
                </div>
                
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h2 className="text-4xl text-white font-bold">Tranquilidad y confianza</h2>
                    <p className="mt-4 text-center text-white max-w-2xl">
                        En <span className="font-bold ">La Campana</span>, queremos que tu experiencia de compra sea excepcional. Por eso, te ofrecemos una serie de beneficios y garantías que te darán la tranquilidad y la confianza que necesitas para realizar tu compra.
                    </p>
                </div>
            </div>

            <div className="relative -mt-12 pb-16">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="bg-white rounded-xl p-6 shadow-lg text-center border-t-4 border-red-600"
                            >
                                <div className="mb-8">
                                    {feature.icon}
                                </div>
                               
                                <h3 className="text-lg font-bold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-20"></div>
        </section>
    );
};

export default TrustSection;
