<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 3
        h1 Tecnologías y conceptos básicos de <i>networking</i>

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-17.col-22
      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/0mbw-CgmkEA" title="Tecnologías y conceptos básicos de <i>networking</i>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Tecnologías y conceptos básicos de <i>networking</i>

        Separador
      #t_1_2.titulo-segundo.color-acento-contenido
        h2 3.1  Conceptos básicos <i>Networking</i>

      .bloque2.p-0.mb-5
        .bloque-texto-b.color-secundario.p-14.mb-0(data-aos="fade-left")
          .bloque-texto-b__texto
            .row.justify-content-center.align-items-center.d-flex
              .col-lg-2.col-8.px-5
                  img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema3/icono3.1.svg")
              .col-lg-10.col-12
                  p Se puede definir como un sistema de apoyo para compartir información y servicios entre usuarios, dispositivos, terminales y grupos de trabajo que pertenecen a redes comunes o independientes. A continuación, se abordan los conceptos básicos de Networking.

        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-center")
        .col-lg-2.col-md-5.col-8.px-35
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema3/Internet.svg")
        .col-lg-04.col-12.mb-4-lg-0
          p <br>Dentro de los requisitos necesarios para la conexión a internet se tienen, conexión física utilizando una tarjeta adaptadora, tal como un módem o una NIC, desde un PC a una red, una conexión lógica que aplica estándares denominados protocolos, unas aplicaciones encargadas de interpretar datos y mostrar la información en un formato comprensible como los navegadores Web Google Chrome, Microsoft Edge, Firefox, entre otros.<br>

        .row.justify-content-center.align-items-center.mb-10(data-aos="fade-center")
        .col1.lg-6.col1-2md-8.col1.px-15
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema3/ConInternet.svg")
        .col1.lg.col1.mb-lg-0

        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-center")
        .col-lg-2.col-md-5.col-8.px-35
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema3/abanda.svg")

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-7.col-12
          p <br>Los datos enviados por una red de computadoras, son divididos en bloques pequeños llamados paquetes, cada cual contiene información de la dirección de origen y destino, este paquete, junto con la información de dirección física, se denomina trama, también posee información que describe cómo volver a unir los paquetes en el destino. El ancho de banda determina la cantidad de paquetes que pueden transmitirse en un lapso de tiempo fijo. La unidad de medida del ancho de banda es el bit por segundo y generalmente, se indica con las siguientes unidades:
        .col-lg-5.col-8
          img.mb-0(alt="" src="@/assets/curso/temas/tema3/anchobanda.svg")

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-center")
        .col-lg-2.col-md-5.col-8.px-35
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema3/Internet.svg")
        .col-lg-04.col-12.mb-4-lg-0
          p <br>Las direcciones binarias de 32 bits usadas para acceder a Internet se llaman direcciones de Protocolo Internet (IP) La dirección IP de un dispositivo se forma por una parte de red y una de host que representa a un dispositivo específico de una red en particular. Para que el dispositivo sepa cómo está dividida la dirección IP, se utiliza un segundo número de 32 bits llamado máscara de subred, que se conforma de números unos identifican la porción de red y por números ceros que indican el host en la red. Con la ayuda de la matemática de red al realizar una operación AND booleana entre la dirección IP 10.10.23.134 y la máscara de subred 255.0.0.0 se obtiene como resultado la dirección de red de este host.<br>

          .row.justify-content-center.align-items-center.mb-10(data-aos="fade-center")
        .col1.lg-8.col1-2md-8.col1.px-15
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema3/direccionamiento.svg")
        .col1.lg.col1.mb-lg-0
</template>

<script>
export default {
  name: "Tema3",
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh();
    });
  },
  updated() {
    this.$aosRefresh();
  }
};
</script>

<style lang="sass"></style>
