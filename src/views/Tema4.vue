<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 4
        h1 Arquitectura y equipos de cómputo, clientes y servidores

      .bloque1.p-0
        .bloque-texto-b.color-secundario(data-aos="fade-left")
          .bloque-texto-b__texto
            .row.justify-content-center.d-flex
              .col-lg-10.col-10
                p Cuando se habla de arquitectura cliente-servidor, se está haciendo referencia a un modelo de diseño de #[em software] en el que los trabajos se reparten entre los proveedores de recursos o servicios; estos son llamados servidores, y los demandantes, son llamados clientes. <br><br>
                p Un cliente realiza una o varias peticiones a otro u otros programas; el servidor es quien le da respuesta y almacena los datos que navegan en la red.<br><br>Se puede identificar y analizar, en el siguiente esquema, la arquitectura cliente servidor:
              .col-lg-2.col-md-2.col-3
                img.mb-0(alt="" src="@/assets/curso/temas/tema4/subir.svg")
    
        .py-2
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-12.col-12.position-relative.resaltado-amarillo.p-4
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 15.] Arquitectura cliente-servidor
            .row.justify-content-center.align-items-center
              .col-lg-6  
                img(alt="La imagen expone una arquitectura cliente-servidor en la que varios PC clientes están conectados a Internet y se comunican con un servidor central. Este servidor aloja bases de datos y contenido web, permitiendo a los clientes realizar consultas y transferir datos. Los PC clientes envían solicitudes a través de Internet al servidor, que responde proporcionando la información solicitada. Esta infraestructura es común en empresas para gestionar y distribuir datos de manera eficiente." src="@/assets/curso/temas/tema4/figura12.png")
              .col-lg-4.p-4
                p En el diagrama anterior, la infraestructura #[em cliente-servidor] muestra a varios computadores de la empresa conectados a la internet, con el fin de realizar consultas o intercambios de datos en la web. Todo contenido de información de página web está en una base de datos dentro de un servidor.
    
      p.py-4 Este tipo de arquitecturas cuenta con dos componentes: por un lado, está el servidor y por otra parte el cliente o grupo de clientes; el servidor es una computadora que capaz de atender los requerimientos solicitados y devolverles la respuesta en concordancia.<br><br>Además, se debe contar con otros componentes adicionales, como:

      .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
        .col-lg-12.col-md-12.p-2
          .row.justify-content-center.align-items-center
            .col-lg-4.p-2
              .tarjeta.gris-claro.p-4.tamano-tarjeta
                h4 Red
                p
                | Conjunto de dispositivos, que permiten la conexión y comunicación, mediante protocolos de transmisión de información establecidos.<br><br>
           
            .col-lg-4.p-2
              .tarjeta.gris-claro.p-4.tamano-tarjeta
                h4 Cliente
                p
                | Puede ser un ordenador, computador personal, o una aplicación, la cual requiere información, que se trasmite en una la red para poder funcionar.
           
            .col-lg-4.p-2
              .tarjeta.gris-claro.p-4.tamano-tarjeta 
                h4 Características del cliente
                p
                | Se trata de un computador con características técnicas iguales a las de los computadores usados en hogares u oficinas, por el cual las personas se conectan a internet (por medio de un cable de red o inalámbrica) en uno o varios servidores.
          
          .row.justify-content-center.align-items-center
            .col-lg-4.p-2
              .tarjeta.gris-claro.p-4.tamano-tarjeta 
                h4 Servidores de internet, alojados en la nube
                p
                | Los servicios en la nube hacen referencia al uso de una gran red de servidores remotos que están conectados a internet, donde es posible administrar, almacenar y procesar datos, bases de datos, servidores y #[em softwares].

            .col-lg-4.p-2
              .tarjeta.gris-claro.p-4.tamano-tarjeta 
                h4 Ventajas
                p
                | Las grandes ventajas de esta arquitectura #[em cliente-servidor], son: la fácil integración de nuevas tecnologías, el crecimiento computacional de la organización no se vería afectado, se pueden integrar equipos de diferentes características técnicas y trabajar simultáneamente.

            .col-lg-4.p-2
              .tarjeta.gris-claro.p-4.tamano-tarjeta
                h4 Desventajas
                p
                | La seguridad está en riesgo, ya que, al haber y compartir tantos canales de información entre clientes y servidores, al tener pocos procesos de validación, se pueden tener puertas abiertas a ataques o amenazas de #[em malware].





</template>

<script>
export default {
  name: 'Tema4',
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
