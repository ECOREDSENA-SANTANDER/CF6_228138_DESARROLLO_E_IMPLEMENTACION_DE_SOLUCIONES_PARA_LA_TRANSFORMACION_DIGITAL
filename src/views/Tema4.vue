<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 4
        h1 Arquitectura y equipos de cómputo, clientes y servidores

      .bloque1.p-0
        .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
          .bloque-texto-b__texto
            .row.justify-content-center.align-items-center.d-flex
              .col-lg-10.col-12.mb-4.mg-lg-0
                p Cuando se habla de arquitectura cliente-servidor, se está haciendo referencia a un modelo de diseño de software en el que los trabajos se reparten entre los proveedores de recursos o servicios; estos son llamados servidores, y los demandantes, son llamados clientes. <br><br>
                p Un cliente realiza una o varias peticiones a otro u otros programas; el servidor es quien le da respuesta y almacena los datos que navegan en la red.<br><br>Se puede identificar y analizar, en el siguiente esquema, la arquitectura cliente servidor:
              .col-lg-2.col-md-5.col-6.px-5
                img.mb-0(alt="" src="@/assets/curso/temas/tema4/software.svg")
    
  
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-10.col-12.position-relative.resaltado-amarillo.p-4
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 12.] Arquitectura cliente - servidor
            .row.justify-content-center
              .col-lg-5   
                img(alt="" src="@/assets/curso/temas/tema4/figura12.png")
              .col-lg-5.p-4
                p En el diagrama anterior, la infraestructura cliente-servidor muestra a varios computadores de la empresa conectados a la internet, con el fin de realizar consultas o intercambios de datos en la web. Todo contenido de información de página web está en una base de datos dentro de un servidor.
        
      .col-lg-04.col-12.mb-4-lg-0
        p <br>Este tipo de arquitecturas cuenta con dos componentes: por un lado, está el servidor y por otra parte el cliente o grupo de clientes; el servidor es una computadora que capaz de atender los requerimientos solicitados y devolverles la respuesta en concordancia.<br><br>Además, se debe contar con otros componentes adicionales, como:

      
      .row(data-aos="fade-left") 
        .col.lg-8
          TabsA.color-acento-botones(data-aos="fade-left")
            .tarjeta.tarjeta1.p-lg-5.p-2( titulo="Red")
              .row.justify-content-center       
                .col-lg-12.col-12
                  h5 Red
                  p.mb-0 Conjunto de dispositivos, que permiten la conexión y comunicación, mediante protocolos de transmisión de información establecidos.
            
            .tarjeta.tarjeta1.p-lg-5.p-2( titulo="Cliente ")
              .row.justify-content-center
                .col-lg-12.col-12
                  h5 Cliente
                  p.mb-0 Puede ser un ordenador, computador personal, o una aplicación, la cual requiere información, que se trasmite en una la red para poder funcionar.
                  
            .tarjeta.tarjeta1.p-lg-5.p-2( titulo="Características del cliente")
              .row.justify-content-center
                .col-lg-12.col-12
                  h5 Características del cliente
                  p.mb-0 Se trata de un computador con características técnicas iguales a las de los computadores usados en hogares u oficinas, por el cual las personas se conectan a internet (por medio de un cable de red o inalámbrica) en uno o varios servidores.
            
            .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Servidores alojados en la nube")
              .row.justify-content-center
                .col-lg-12.col-12
                  h5 Servidores alojados en la nube
                  p.mb-0 Conjunto de dispositivos, que permiten la conexión y comunicación, mediante protocolos de transmisión de información establecidos.
          
            .tarjeta.tarjeta1.p-lg-5.p-2( titulo="Características del cliente")
              .row.justify-content-center
                .col-lg-12.col-12
                  h5 Características del cliente
                  p.mb-0 Los servicios en la nube hacen referencia al uso de una gran red de servidores remotos que están conectados a internet, donde es posible administrar, almacenar y procesar datos, bases de datos, servidores y softwares.
            
            .tarjeta.tarjeta1.p-lg-5.p-2( titulo="Ventajas")
              .row.justify-content-center
                .col-lg-12.col-12
                  h5 Ventajas
                  p.mb-0 Las grandes ventajas de esta arquitectura cliente-servidor, son: la fácil integración de nuevas tecnologías, el crecimiento computacional de la organización no se vería afectado, se pueden integrar equipos de diferentes características técnicas y trabajar simultáneamente.
        
            .tarjeta.tarjeta1.p-lg-5.p-2( titulo="Desventajas")
              .row.justify-content-center
                .col-lg-12.col-12
                 h5 Desventajas
                 p.mb-0 La seguridad está en riesgo, ya que, al haber y compartir tantos canales de información entre clientes y servidores, al tener pocos procesos de validación, se pueden tener puertas abiertas a ataques o amenazas de malware.

        .col-lg-4.col-8.p-2
          img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema4/cliente.png")
        
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
