<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 2
        h1 Redes de datos
  
      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
          .bg--piel.p-4.br_01.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-4
                figure
                  img(src='@/assets/curso/temas/tema2/redesdedatos.png', alt='imagen decorativa') 
              .col-lg-8.mb-3.mb-lg-0
                p Una red informática es una colección de dispositivos conectados entre sí utilizando un medio de transmisión, que comparten recursos e intercambian información. La comunicación en la red informática posee dos roles para los elementos conectados, que son el emisor y receptor, estos se asumen y alternan en diferentes instantes de tiempo.<br><br>Las redes de datos son infraestructuras creadas para transmitir información a través del intercambio de datos. Según Moro (2013) son arquitecturas específicas para este fin, cuya base principal es la conmutación de paquetes y que atienden a una clasificación exclusiva, teniendo en cuenta la distancia que es capaz de cubrir su arquitectura física y por supuesto, el tamaño que presentan.

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
                Separador
        #t_2_1.titulo-segundo.color-acento-contenido
         h2 2.1 Historia  

        figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/Zx2p6cloSws" title="Infraestructura y servicios tecnológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Infraestructura y servicios tecnológicos

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
                Separador
        #t_2_2.titulo-segundo.color-acento-contenido
         h2 2.2 Conceptos básicos y componentes de una red

      .topSquare02.clr--Yellow.mb-5(data-aos="fade-left")
        .row
          .col-lg-2.col-auto
            figure
              img(src="@/assets/curso/temas/tema2/icono2.2.svg", alt="alt").img75.m-auto
          .col
            p.mb-0 Una red implica que en ella intervengan varios actores que básicamente se pueden enmarcar en cuatro bien definidos que son: los dispositivos, el medio, la información y los recursos que va a utilizar o compartir para mejorar la eficiencia de los mismos.
      
      .row.justify-content-center.mb-4(data-aos="zoom-in") 
        .col-lg-2.col-auto
        p Los dispositivos son aquellos elementos que se conectan a la red y están divididos en dos grandes grupos:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10.col-10
          img.mb-0(alt="" src="@/assets/curso/temas/tema2/2.2.png")

      .row.justify-content-center.mb-4(data-aos="zoom-in") 
        .col-lg-2.col-auto
        p El medio es la conexión que permite a dispositivos relacionarse entre sí. A su vez se define la información como la unidad que se intercambia entre dispositivos de gestión, acceso, comunicación y de usuario final como es el texto, imágenes, música, hipertexto, video, entre otros. Por otra parte, los recursos hacen referencia a todo aquello que un dispositivo pide a la red, se identifica y accede directamente. Estos recursos pueden ser archivos compartidos en otros dispositivos de la red, un documento a imprimir en una impresora compartida, un servicio a consumir, información, espacio en disco duro, tiempo de procesamiento, etc.<br><br>A continuación se definen los dispositivos y elementos más importantes en las redes de datos:
       
      TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
        .py-4.py-md-5(titulo="Servidor" :icono="require('@/assets/curso/temas/tema2/img01.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
                h4 Servidor<br>
                p Es un computador que en la red tiene la función de proveer servicios a otros dispositivos llamados clientes. También se suele denominar con la palabra servidor a una aplicación informática o programa que realiza algunas tareas en beneficio de otras aplicaciones llamadas clientes.  Entre los servicios ofrecidos por un servidor, está el manejo de archivos y aplicaciones. Los primeros consisten en un proceso de lectura y escritura por parte de los usuarios sobre archivos almacenados en una estación de trabajo. Las aplicaciones permiten a los usuarios finales realizar tareas acordes a sus necesidades.
            .col-lg-6.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img1.png', alt='')
      
        .py-4.py-md-5(titulo="Estación de trabajo" :icono="require('@/assets/curso/temas/tema2/img02.svg')")
         .row.align-items-center.justify-content-center
            .col-lg-6.col
                h4 Estación de trabajo<br>
                p Son los nodos finales de una red de computadoras. Normalmente, las estaciones de trabajo permiten a los usuarios ejecutar aplicaciones y almacenar diferentes tipos de información. Sin embargo, una impresora conectada a la red podría verse como un nodo final de ésta y verse como una estación de trabajo, pero con prestaciones diferentes y reducidas comparadas con la de un computador.
            .col-lg-6.col-2
               img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img2.png', alt='')
      
        .py-4.py-md-5(titulo="Tarjeta de conexión a la red" :icono="require('@/assets/curso/temas/tema2/img03.svg')")
         .row.align-items-center.justify-content-center
            .col-lg-6.col
                h4 Tarjeta de conexión a la red<br>
                p Es un dispositivo que le permite a todo computador conectarse a la red informática ya sea para conexión cableada o inalámbrica. Cuando se trata de una conexión alámbrica, se habla de una tarjeta de red o NIC (Network Interface Card) por sus siglas en inglés, la cual puede ser insertada directamente en la placa madre por medio de un puerto PCI. Dicha tarjeta trae consigo un conector para cable de red. Por otro lado, las tarjetas de red inalámbricas también pueden ser conectadas a la tarjeta madre por medio del puerto PCI o de manera externa por medio de un puerto USB.
            .col-lg-6.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img3.png', alt='')
      
        .py-4.py-md-5(titulo="Repetidores" :icono="require('@/assets/curso/temas/tema2/img04.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
                h4 Repetidores<br>
                p Se trata de un dispositivo electrónico capaz de transmitir una señal recibida de bajo nivel y re transmitirla a más alto nivel, permitiendo con esto cubrir distancias largas sin que haya degradación considerable de la señal. En los inicios de la telegrafía se utilizó para regenerar las señales telegráficas.
            .col-lg-6.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img4.png', alt='')
        
        .py-4.py-md-5(titulo="Routers" :icono="require('@/assets/curso/temas/tema2/img05.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
                h4 Routers<br>
                p Es un dispositivo de red encargado de indicar la ruta más adecuada para transmitir el mensaje que ha enviado el transmisor hacia un destino determinado dentro o fuera de la red a la cual pertenecen, utilizando los protocolos adecuados.
            .col-lg-6.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img5.png', alt='')
        
        .py-4.py-md-5(titulo="Switch" :icono="require('@/assets/curso/temas/tema2/img06.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
                h4 Switch<br>
                p Es un dispositivo de red que se encarga de interconectar varios segmentos de red, por medio de la dirección MAC de los dispositivos destino de las tramas de red.
            .col-lg-6.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img6.png', alt='')
        
        .py-4.py-md-5(titulo="Cableado" :icono="require('@/assets/curso/temas/tema2/img07.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
                h4 Cableado<br>
                p Se trata del medio físico utilizado para la conexión de los dispositivos hacia la red en la cual solicitarán los servicios dependiendo de los requerimientos de longitud, velocidad entre otros.
            .col-lg-6.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img7.png', alt='')
        
        .py-4.py-md-5(titulo="Protocolo" :icono="require('@/assets/curso/temas/tema2/img08.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-10.col
                h4 Protocolo<br>
                p Es el elemento software de la red, encargado de establecer los parámetros de comunicación entre dispositivos, habilitar mecanismos de identificación de los equipos y usuarios en la red, definir el formato de la información que circula en la red. 
            .col-lg-8.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema2/img8.png', alt='')   

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
                Separador
        #t_2_3.titulo-segundo.color-acento-contenido
          h2 2.3 Medios de transmisión
        .col-lg-12
          p Son los caminos por los cuales viaja la información o los datos. Estos medios según como como conducen las señales se clasifican en dos tipos:           

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
                Separador
        #t_2_4.titulo-segundo.color-acento-contenido
         h2 2.4 Protocolos de comunicación

      .topSquare02.clr--Yellow.mb-5(data-aos="fade-left")
        .row
          .col-lg-2.col-auto
            figure
              img(src="@/assets/curso/temas/tema2/2.4.svg", alt="alt").img75.m-auto
          .col
            p.mb-0 Cuando se trata de la comunicación entre ordenadores primero se deben conocer cuáles son las normas que permiten esta comunicación, o lo que es lo mismo, qué protocolo de comunicación utilizan. Para Stallings, Tanenbaum y Stevens (2000), un protocolo de red es un grupo de reglas que establece la forma para identificarse, transmitir la información y cómo procesar los datos en la red.  Los protocolos pueden ser de tipo hardware (tarjetas de red), software (drivers), o combinación de ambos.
      
      .row.justify-content-center.mb-4(data-aos="zoom-in") 
        .col-lg-2.col-auto
        p Existen diferentes protocolos, cada uno de ellos está identificado por la capa del modelo OSI en la que va a trabajar. Por nombrar algunos: 

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-10.col-10
          img.mb-0(alt="" src="@/assets/curso/temas/tema2/2.4.png")

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-10
                Separador
        #t_2_5.titulo-segundo.color-acento-contenido
         h2 2.5 Clasificación de redes

      .row.justify-content-center.mb-4(data-aos="zoom-in") 
        .col-lg-2.col-auto
        p Las redes están clasificadas de diferentes maneras teniendo en cuenta el número de dispositivos conectados y la distancia entre los mismos, el tipo de conexión o la tecnología utilizada, esta clasificación se detalla a continuación:
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
