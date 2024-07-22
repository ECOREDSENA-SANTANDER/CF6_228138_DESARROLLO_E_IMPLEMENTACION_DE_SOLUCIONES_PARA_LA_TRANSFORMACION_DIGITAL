export default {
  global: {
    componenteFormativo: 'Infraestructura y servicios tecnológicos',
    descripcionCurso:
      'Este componente formativo aborda el uso de tecnologías emergentes y la creación de productos y servicios, por parte de empresas u organizaciones, para el crecimiento de la sociedad. Con su estudio responsable, el aprendiz conocerá a profundidad, generalidades sobre tecnologías como IOT <i>blockchain, machine learning, deep learning</i> y los grandes desarrollos que traen: impresoras 3D, embriones artificiales, redes degenerativas, entre otras.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Infraestructura de hardware y software',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de software',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Escalabilidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Licenciamiento',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Marcos de referencia y buenas prácticas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Redes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: ' Historia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conceptos básicos y componentes de una red',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Medios de transmisión',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Protocolos de comunicación',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Clasificación de redes',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Topologías de redes',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Modelo TCP/IP y OSI',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tecnologías y conceptos básicos de networking',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: ' Conceptos básicos Networking',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Arquitectura y equipos de cómputo, clientes y servidores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Internet de las cosas (IoT)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: ' Aplicaciones',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: ' Desarrollos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Proyectos de TI',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cableado estructurado',
      referencia:
        'Joskowicz, J. (2013). Cableado Estructurado.Universidad de la República Montevideo, URUGUAY',
      tipo: 'Documento PDF',
      link:
        'https://iie.fing.edu.uy/ense/asign/ccu/material/docs/Cableado%20Estructurado.pdf',
    },
    {
      tema: 'Arquitectura y equipos de cómputo, clientes y servidores ',
      referencia: '<i>Public Cloud Services Comparison.</i> (2021). ',
      tipo: 'Página <i>web</i> ',
      link: 'https:www.comparecloud.in',
    },
    {
      tema: 'Contratación ',
      referencia:
        'Agencia española de protección de datos. (2013). Guía para clientes que contraten servicios de <i>Computing</i>.',
      tipo: 'Documento PDF',
      link:
        'http://www.oas.org/es/sla/ddi/docs/Gu%C3%ADa%20para%20clientes%20que%20contraten%20servicios%20de%20Cloud%20Computing%20-%20AGPD.pdf  ',
    },
    {
      tema: 'Contratación',
      referencia:
        'Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial 48587 de octubre 18 de 2012. ',
      tipo: 'Documento PDFdd',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado: 'dispositivo que añade funcionalidad de red a su equipo.',
    },
    {
      termino: 'Ancho de banda',
      significado:
        'capacidad de transmisión de un dispositivo o red determinado',
    },
    {
      termino: 'Bit (dígito binario)',
      significado: 'unidad más pequeña de información de una máquina.',
    },
    {
      termino: 'Comunicación',
      significado:
        'transmisión y recepción de datos entre dos o más actores con el fin de transmitir o recibir mensajes u opiniones distintas.',
    },
    {
      termino: 'Conmutador',
      significado:
        'dispositivo que es el punto central de conexión de equipos y otros dispositivos de una red, de forma que los datos puedan transmitirse a velocidad de transmisión completa.',
    },
    {
      termino: 'Contratación',
      significado:
        'según la RAE, “Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas”.',
    },
    {
      termino: 'Cloud Computing',
      significado:
        'computación en la nube, conocida también como servicios en la nube, consiste en el uso de una red de servidores remotos alojados en Internet para almacenar, administrar y procesar datos e información, en lugar de un servidor local o una computadora personal.',
    },
    {
      termino: 'Criptografía',
      significado:
        'arte de escribir con clave secreta o de un modo enigmático.',
    },
    {
      termino: 'Criptomoneda',
      significado: 'son monedas digitales que se intercambian online.',
    },
    {
      termino: 'DHCP (Protocolo de configuración dinámica de host):',
      significado:
        'protocolo que permite a un dispositivo de una red, conocido como servidor DHCP, asigna direcciones IP temporales a otros dispositivos de red y normalmente equipos.',
    },
    {
      termino: 'Dirección IP',
      significado:
        'dirección que se utiliza para identificar un equipo o dispositivo en una red.',
    },
    {
      termino: 'Enrutador',
      significado:
        'dispositivo de red que conecta redes múltiples, tales como una red local e Internet.',
    },
    {
      termino: 'Migración',
      significado:
        'en tecnología, consiste en el desplazamiento del <i>software</i>, aplicaciones o sistemas de información de una infraestructura tecnológica a otra, por ejemplo, la migración de una aplicación de un servidor local a un servidor en la nube.',
    },
    {
      termino: 'Proveedor',
      significado: 'sujeto o entidad que suministra un producto o servicios.',
    },
    {
      termino: 'Red',
      significado:
        'serie de equipos o dispositivos conectados con el fin de compartir datos, almacenamiento y la transmisión entre usuarios.',
    },
    {
      termino: 'TCP (Transport Control Protocol)',
      significado:
        'protocolo de red para la transmisión de datos que requiere la confirmación del destinatario de los datos enviados.',
    },
    {
      termino: 'Topología',
      significado: 'distribución física de una red.',
    },
  ],
  referencias: [
    {
      referencia: 'Allcode.com (2021). 10 Top Cloud Providers in 2021',
      link: 'https://allcode.com/cloud-providers/',
    },
    {
      referencia:
        'Claranet.es (2021). 6 enfoques para afrontar la migración a la nube. ',
      link:
        'https://www.claranet.es/blog/6-enfoques-para-afrontar-la-migracion-a-la-nube',
    },
    {
      referencia: 'Corona, A. E. (2004). Protocolos tcp/ip de internet.',
      link: '',
    },
    {
      referencia: 'La red y todo sobre ella. ',
      link: 'https://basicamente18.wixsite.com/todored/historia',
    },
    {
      referencia:
        'Moro Vallina, M. (2013). Infraestructuras de redes de datos y sistemas de telefonía. Editorial Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa.',
      link: '',
    },
    {
      referencia: 'RAE / Real Academia Española (2021). Contratar',
      link: 'https://dle.rae.es/contratar ',
    },
    {
      referencia: 'SANTOS GARCÍA (2012).  Comunicación oral y escrita',
      link:
        'https://www.aliat.click/BibliotecasDigitales/Axiologicas/Comunicacion_oral_y_escrita.pdf',
    },
    {
      referencia:
        'SECRETARIA GENERAL DE LA ORGANIZACIÓN DE LOS ESTADOS AMERICANOS (1992). Honduras - Proyecto de Manejo de los Recursos Naturales Renovables de la Cuenca del Embalse el Cajón - Estudio de Factibilidad. Costos y financiamiento. ',
      link: 'https://www.oas.org/dsd/publications/Unit/oea15s/ch09.htm',
    },
    {
      referencia:
        'Stallings, W., Stallings, W., Tanenbaum, A., Fall, K. R., y Stevens, W. R. (2000). Comunicaciones y Redes de Computadores, 7ª Edición. Pearson Prentice-Hall',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Cesar Antonio Villamizar Núñez',
          cargo: 'Experto Temático',
          centro: 'Regional Norte de Santander - Centro CIES',
          fecha: 'Septiembre,2022',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesor metodológico y pedagógico',
          centro: 'Regional Distrito Capital. Centro de Diseño y Metrología. ',
          fecha: 'Septiembre,2022',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander. Centro Industrial del Diseño y la Manufactura',
          fecha: 'Septiembre,2022',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Norte de Santander - Centro CIES',
          fecha: 'Septiembre,2022',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Norte de Santander. Centro de la Industria, la Empresa y los Servicios',
          fecha: 'Septiembre,2022',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vera',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Ingeniero desarrollador <i>Full Stack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
