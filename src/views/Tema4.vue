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
              .col-lg-2.col-md-5.col-8.px-5
                img.mb-0(alt="" src="@/assets/curso/temas/tema4/software.svg")
    
      .fondo1.p-8.mb-0
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
          .col-lg-10.col-12.position-relative
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(alt="" src="@/assets/curso/temas/tema4/figura12.png")
  
      .col-lg-04.col-12.mb-4-lg-0
        p <br>Este tipo de arquitecturas cuenta con dos componentes: por un lado, está el servidor y por otra parte el cliente o grupo de clientes; el servidor es una computadora que capaz de atender los requerimientos solicitados y devolverles la respuesta en concordancia.<br><br>Además, se debe contar con otros componentes adicionales, como:

      TabsA.color-acento-botones(data-aos="fade-left")
        .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Red")
          .row.justify-content-center       
            .col-lg-8.col-12
              p.mb-0 <b>Red</b><br><br>Conjunto de dispositivos, que permiten la conexión y comunicación, mediante protocolos de transmisión de información establecidos.
            .col-lg-4.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema4/cliente.png")

        .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Cliente ")
          .row.justify-content-center
            .col-lg-8.col-12
              p.mb-0 <b>Cliente</b><br><br>Puede ser un ordenador, computador personal, o una aplicación, la cual requiere información, que se trasmite en una la red para poder funcionar.
            .col-lg-4.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema4/cliente.png")
              
        .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Características del cliente")
          .row.justify-content-center
            .col-lg-8.col-12
              p.mb-0 <b>Características del cliente</b><br><br>Se trata de un computador con características técnicas iguales a las de los computadores usados en hogares u oficinas, por el cual las personas se conectan a internet (por medio de un cable de red o inalámbrica) en uno o varios servidores.
            .col-lg-4.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema4/cliente.png")
        
        .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Servidores alojados en la nube")
          .row.justify-content-center
            .col-lg-8.col-12
              p.mb-0 <b>Servidores alojados en la nube</b><br><br>Conjunto de dispositivos, que permiten la conexión y comunicación, mediante protocolos de transmisión de información establecidos.
            .col-lg-4.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema4/cliente.png")
       
        .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Características del cliente")
          .row.justify-content-center
            .col-lg-8.col-12
              p.mb-0 <b>Características del cliente</b><br><br>Los servicios en la nube hacen referencia al uso de una gran red de servidores remotos que están conectados a internet, donde es posible administrar, almacenar y procesar datos, bases de datos, servidores y softwares.
            .col-lg-4.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema4/cliente.png")
        
        .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Ventajas")
          .row.justify-content-center
            .col-lg-8.col-12
              p.mb-0 <b>Ventajas</b><br><br>Las grandes ventajas de esta arquitectura cliente-servidor, son: la fácil integración de nuevas tecnologías, el crecimiento computacional de la organización no se vería afectado, se pueden integrar equipos de diferentes características técnicas y trabajar simultáneamente.
            .col-lg-4.col-8
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema4/cliente.png")
        
        .tarjeta.tarjeta1.p-lg-5.p-3( titulo="Desventajas")
          .row.justify-content-center
            .col-lg-8.col-12
              p.mb-0 <b>Desventajas</b><br><br>La seguridad está en riesgo, ya que, al haber y compartir tantos canales de información entre clientes y servidores, al tener pocos procesos de validación, se pueden tener puertas abiertas a ataques o amenazas de malware.
            .col-lg-4.col-8
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
