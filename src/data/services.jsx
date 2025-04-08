import ReusableTable from "../components/common/ReusableTable";
import serviceTables from "../data/serviceTables";


const services = [
  {
    id: 1,
    name: "Corte Vigas",
    customTitle: (
      <>
        Corte <span className="text-lacampana-red2">vigas</span>
      </>
    ),
    customDescription: (
      <>
        <p>
          Cortamos a la medida Vigas IPE-HEA <strong>Rango de corte</strong>
        </p>

        {/* Aquí insertamos la tabla */}
        <div className="mt-4">
          <ReusableTable
            headers={serviceTables[1].headers}
            data={serviceTables[1].data}
          />
        </div>

        <p className="mt-4 font-bold">Normas</p>
        <p>
          ASTM A6 = NTC 4537: Requisitos generales para barras, chapas, perfiles
          y tablestacas de acero laminado estructural.
        </p>

        <button className="mt-6 text-lacampana-red1 border border-lacampana-red1 px-8 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full w-auto hover:bg-lacampana-red1 hover:text-white hover:scale-90 transition duration-300 ease-in-out">
  Ficha Técnica
</button>

      </>
    ),
    image: "/images/services/corte-viga.png",

      advantages: {
        description: "Lorem ipsum dolor sit amet consectetur. Non molestie maecenas lectus dolor quis. Nisl pharetra id at morbi sed cursus ac. Eget sed lobortis maecenas sit augue semper. Sed sed maecenas amet congue cursus adipiscing dui id purus.",
        advantagesList: [
          { id: 1, description: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat" },
          { id: 2, description: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus" },
          { id: 3, description: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisiPellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc." },
        ],
      },
      faq: [
        {
          id: 1,
          question: "¿Qué incluye el corte?",
          answer: [
            "Lorem ipsum dolor sit amet.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum auctor dapibus neque.",
            "Nunc dignissim risus id metus."
          ]
        },
        {
          id: 2,
          question: "¿Se entrega certificado?",
          answer: ["Sí, se entrega certificado de calidad."]
        }
      ]
      
    },
    
    {
      id: 2,
      name: "Corte Planchas",
      customTitle: (
        <>
          Corte <span className="text-lacampana-red2">Planchas</span>
        </>
      ),
      customDescription: (
        <>
          <p>
            Cortamos a la medida Planchas Hot Rolled <strong>Rango de corte</strong>
          </p>
  
          {/* Tabla */}
          <div className="mt-4">
            <ReusableTable
              headers={serviceTables[2].headers}
              data={serviceTables[2].data}
            />
          </div>
  
          {/* Normas */}
          <p className="mt-4 font-bold">Normas</p>
          <p>
            ASTM A568 = NTC 7: Requisitos generales para láminas de acero al carbono, estructural y de alta resistencia, baja aleación, laminadas en caliente y frío.
          </p>
          <p>
            ASTM A6 = NTC 4537: Requisitos generales para barras, chapas, perfiles y tablestacas de acero laminado estructural.
          </p>
  
          {/* Botón */}
          <button className="mt-6 text-lacampana-red1 border border-lacampana-red1 px-8 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full w-auto hover:bg-lacampana-red1 hover:text-white hover:scale-90 transition duration-300 ease-in-out">
  Ficha Técnica
</button>

        </>
      ),
      image: "/images/services/corte-plancha.png",
      advantages: {
        description: "Lorem ipsum dolor sit amet consectetur. Non molestie maecenas lectus dolor quis. Nisl pharetra id at morbi sed cursus ac. Eget sed lobortis maecenas sit augue semper. Sed sed maecenas amet congue cursus adipiscing dui id purus.",
        advantagesList: [
          { id: 1, description: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat" },
          { id: 2, description: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus" },
          { id: 3, description: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisiPellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc." },
        ],
      },
      faq: [
        {
          id: 1,
          question: "¿Qué incluye el corte?",
          answer: [
            "Lorem ipsum dolor sit amet.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum auctor dapibus neque.",
            "Nunc dignissim risus id metus."
          ]
        },
        {
          id: 2,
          question: "¿Se entrega certificado?",
          answer: ["Sí, se entrega certificado de calidad."]
        }
      ]
      
    },

  
    {
      id: 3,
      name: "Corte Transversal de Bobinas",
      customTitle: (
        <>
          Corte <span className="text-lacampana-red2">transversal de bobinas</span>
        </>
      ),
      customDescription: (
        <>
          <p>
            Cortamos a la medida bobinas Cold Rolled, Hot Rolled, galvanizada, Aluzinc, Aceitada y decapada, Alfajor y Planchas. <strong>Rango de corte</strong>
          </p>
  
          {/* Tabla */}
          <div className="mt-4">
            <ReusableTable
              headers={serviceTables[3].headers}
              data={serviceTables[3].data}
            />
          </div>
  
          {/* Normas */}
          <p className="mt-4 font-bold">Normas</p>
          <p>
            ASTM A568 = NTC 7: Requisitos generales para láminas de acero al carbono, estructural y de alta resistencia, baja aleación, laminadas en caliente y frío.
          </p>
  
          {/* Botón */}
          <button className="mt-6 text-lacampana-red1 border border-lacampana-red1 px-8 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full w-auto hover:bg-lacampana-red1 hover:text-white hover:scale-90 transition duration-300 ease-in-out">
  Ficha Técnica
</button>

        </>
      ),
      image: "/images/services/corte-transversal.jpeg",
      advantages: {
        description: "Lorem ipsum dolor sit amet consectetur. Non molestie maecenas lectus dolor quis. Nisl pharetra id at morbi sed cursus ac. Eget sed lobortis maecenas sit augue semper. Sed sed maecenas amet congue cursus adipiscing dui id purus.",
        advantagesList: [
          { id: 1, description: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat" },
          { id: 2, description: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus" },
          { id: 3, description: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisiPellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc." },
        ],
      },
      faq: [
        {
          id: 1,
          question: "¿Qué incluye el corte?",
          answer: [
            "Lorem ipsum dolor sit amet.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum auctor dapibus neque.",
            "Nunc dignissim risus id metus."
          ]
        },
        {
          id: 2,
          question: "¿Se entrega certificado?",
          answer: ["Sí, se entrega certificado de calidad."]
        }
      ]
      
    },
  
  
    {
      id: 4,
      name: "Corte Longitudinal de Bobinas",
      customTitle: (
        <>
          Corte <span className="text-lacampana-red2">longitudinal de bobinas</span>
        </>
      ),
      customDescription: (
        <>
          <p>
            Cortamos a la medida bobinas Cold Rolled, Hot Rolled, galvanizada, Aluzinc, Aceitada y decapada, Alfajor y Planchas. <strong>Rango de corte</strong>
          </p>
    
          {/* Tabla */}
          <div className="mt-4">
            <ReusableTable
              headers={serviceTables[4].headers}
              data={serviceTables[4].data}
            />
          </div>
    
          {/* Normas */}
          <p className="mt-4 font-bold">Normas</p>
          <p>
            ASTM A568 = NTC 7: Requisitos generales para láminas de acero al carbono, estructural y de alta resistencia, baja aleación, laminadas en caliente y frío.
          </p>
    
          {/* Botón */}
          <button className="mt-6 text-lacampana-red1 border border-lacampana-red1 px-8 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full w-auto hover:bg-lacampana-red1 hover:text-white hover:scale-90 transition duration-300 ease-in-out">
  Ficha Técnica
</button>

        </>
      ),
      image: "/images/services/corte-longitudinal.jpeg",
      advantages: {
        description: "Lorem ipsum dolor sit amet consectetur. Non molestie maecenas lectus dolor quis. Nisl pharetra id at morbi sed cursus ac. Eget sed lobortis maecenas sit augue semper. Sed sed maecenas amet congue cursus adipiscing dui id purus.",
        advantagesList: [
          { id: 1, description: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat" },
          { id: 2, description: "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus" },
          { id: 3, description: "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisiPellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc." },
        ],
      },
      faq: [
        {
          id: 1,
          question: "¿Qué incluye el corte?",
          answer: [
            "Lorem ipsum dolor sit amet.",
            "Aliquam tincidunt mauris eu risus.",
            "Vestibulum auctor dapibus neque.",
            "Nunc dignissim risus id metus."
          ]
        },
        {
          id: 2,
          question: "¿Se entrega certificado?",
          answer: ["Sí, se entrega certificado de calidad."]
        }
      ]
      
    }
    
  ]
  
  export default services;
  