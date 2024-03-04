<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-17.col-22
          p Aquí comienza el estudio del componente formativo <b>“Infraestructura y servicios tecnológicos”;</b> en este punto, emprenda su recorrido formativo, observando con atención el vídeo que, a continuación, se muestra. ¡Adelante!
      figure(data-aos="fade-right")
        .video.mb-1
          iframe(width="1280" height="720" src="https://youtube.com/embed/Zx2p6cloSws" title="Infraestructura y servicios tecnológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Infraestructura y servicios tecnológicos
        
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
