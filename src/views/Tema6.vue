<template lang="pug">
  .curso-main-container.pb-3.tema1
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 6
        h1 Internet de las cosas (IoT)

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg.col
          p.mb-5 <b>La gestión de proyectos de tecnologías de la información y la comunicación - TI,</b> puede ser abordado desde diversos aspectos de la gestión empresarial según el contexto, pero en cualquiera de los casos, escenarios y/o contextos, para una adecuada administración de los proyectos de TI se deben considerar los siguientes aspectos.
        
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-8.col-2
          img.mb-lg-8.mb-3(alt="" src="@/assets/curso/temas/tema6/banner6.png")

      .row.justify-content-center.align-items-center(data-aos="fade-center")
        .col-0lg-5.col-md-5.col.px-35
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema6/titulo01.svg")
        .col-lg-04.col-12.mb-4-lg-0
         p <br>Para la buena administración de los proyectos de TI, es importante que se realice una estructuración por fases, teniendo en cuenta la planeación, ejecución, verificación y mejora de actividades del proyecto. Las actividades del proyecto son las acciones que se deben realizar para lograr los objetivos del mismo, estas deben ser planificadas y asignadas a los responsables de ejecución.<br><br>En general, las fases de un proyecto se estructuran con base al ciclo Deming o PHVA, por sus siglas en español: Planificar, Hacer, Verificar y Actuar, pero no es camisa de fuerza.
      

      TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
        .py-4.py-md-5(titulo="Planear" :icono="require('@/assets/curso/temas/tema6/icono01.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              p Es la primera fase o etapa donde se aborda el problema a resolver y se plantean los objetivos y alcances para solucionarlo. Asimismo, se designan las actividades para lograr los objetivos. Es esta fase también se deben considerar los recursos necesarios, humanos, económicos, tecnológicos y de información.
            .col-lg-4.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono01.svg', alt='')
      
        .py-4.py-md-5(titulo="Hacer" :icono="require('@/assets/curso/temas/tema6/icono02.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              p En esta fase se deben poner en marcha o ejecución las actividades de gestión y técnicas que se planearon por realizar. En los proyectos de TI, son aquellas actividades de instalación, implementación y/o apropiación de tecnologías hardware y software. También, pueden involucrar la adquisición de nuevos servicios de TI, como los servicios en la nube o aplicaciones de terceros.
            .col-lg-4.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono02.svg', alt='')
      
        .py-4.py-md-5(titulo="Verificar" :icono="require('@/assets/curso/temas/tema6/icono03.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              p En esta fase se deben poner en marcha o ejecución las actividades de gestión y técnicas que se planearon por realizar. En los proyectos de TI, son aquellas actividades de instalación, implementación y/o apropiación de tecnologías hardware y software. También, pueden involucrar la adquisición de nuevos servicios de TI, como los servicios en la nube o aplicaciones de terceros.
            .col-lg-4.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono03.svg', alt='')
      
        .py-4.py-md-5(titulo="Actuar" :icono="require('@/assets/curso/temas/tema6/icono04.svg')")
          .row.align-items-center.justify-content-center
            .col-lg-6.col
              p En esta última fase se toman las acciones de mejora, con base en los resultados de verificación o evaluación, con el fin de demarcar las acciones correctivas para la mejora.
            .col-lg-4.col-2
              img.img-a.img-t.mb-4(src='@/assets/curso/temas/tema6/bannericono04.svg', alt='')
    
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-04.col-12.mb-4-lg-0
          p <br>Para una adecuada planeación del proyecto, se debe realizar un cronograma de actividades a ejecutar en cada fase, dicho cronograma debe ser realizado en la fase de planeación. Un ejemplo de este cronograma puede ser:
        .col-lg-8.col-2
          img.mb-lg-8.mb-3(alt="" src="@/assets/curso/temas/tema6/tabla01.svg")

      .row.justify-content-center.align-items-center(data-aos="fade-center")
        .col-0lg-5.col-md-5.col.px-35
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema6/titulo02.svg")
        .col-lg-04.col-12.mb-4-lg-0
         p <br>Los recursos de un proyecto de TI. pueden estar agrupados en recursos humanos, económicos o financieros, tecnológicos, y de información.<br><br>En la gestión de proyectos de TI, y en especial en los proyectos de servicios en la nube, es importante la determinación de recursos necesarios, por lo que se deben considerar los siguientes criterios:<br>
        .col-lg-10.col-2
          img.mb-lg-7.mb-3(alt="" src="@/assets/curso/temas/tema6/tabla2.svg")

      .row.justify-content-center.align-items-center(data-aos="fade-center")
        .col-0lg-5.col-md-5.col.px-35
          img.mb-lg-0.mb-0(src="@/assets/curso/temas/tema6/titulo03.svg")
        .col-lg-04.col-12.mb-4-lg-0
          p <br>Dentro de los proyectos de TI se establecen las actividades que están a un nivel más bajo y las cuales se crean en función del cumplimiento de los objetivos específicos del proyecto. Para la planeación de actividades se deben considerar los siguientes criterios:<br>
        .col-lg-10.col-2
          img.mb-lg-7.mb-3(alt="" src="@/assets/curso/temas/tema6/recursos.svg")
          p <br>

      .row.justify-content-center.align-items-center(data-aos="fade-center")
        .col-lg-3.col-8
          img.mb-0(src="@/assets/curso/temas/tema6/titulo04.svg")
        .col-lg-04.col-12.mb-4-lg-0
          p <br><b>En la gestión de proyectos de TI,</b> se deben tener en cuenta los aspectos legales según el contexto, para lo cual se recomienda tener claro una matriz de cumplimiento legal, en donde se pueda identificar dentro de cada proyecto que requisitos legales se deben cumplir, esto con el fin de evitar incumplimientos que puedan generar impactos adversos de tipo económico, operativo o reputacional.<br>

      LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Contexto jurídico")
            .col-md-8.mb-4.mb-md-0
              p.text-small <br>El contexto jurídico, según la constitución política, corresponde con las leyes, decretos, entre otros lineamientos estatales del gobierno nacional y gobiernos locales, los cuales pueden ser prohibitivos o permisivos.
            .col-lg-3.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema6/aspectoslegales.svg")
        
          .row(numero="2" titulo="Validez legal")
            .col-md-8.mb-4.mb-md-0
              p.text-small <br>La validez legal, refiere al cómo se realiza el procedimiento legal, y se lleva a su realización. 
            .col-lg-3.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema6/aspectoslegales.svg")
        
          .row(numero="3" titulo="Contratación de servicios")
            .col-md-8.mb-4.mb-md-0
              p.text-small <br>En la contratación de servivico, se deben revisar las condiciones y acuerdos de nivel de servicio con proveedores, incluyendo el soporte, de tal manera que se cumplan con los requerimientos específicos del proyecto.
            .col-lg-3.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema6/aspectoslegales.svg")

          .row(numero="4" titulo="Protección de datos")
            .col-md-8.mb-4.mb-md-0
              p.text-small <br>Protección de datos personales, es de vital importancia que los prestadores de servicios cuenten con las regulaciones de protección de datos personales y que el procesamiento y almacenamiento de datos e información se de en países que cuentes con leyes o regulaciones sobre la protección de datos personales.
            .col-lg-3.col-8
              img.mb-0(alt="" src="@/assets/curso/temas/tema6/aspectoslegales.svg")

      .row.justify-content-center.align-items-center(data-aos="fade-center")
        .col-lg-2.col-8
          p <br>
          img.mb-0(src="@/assets/curso/temas/tema6/riesgos.svg")
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
          .col-lg-7.col-12
            p.mb-4 Un riesgo se define como aquello que puede generar una situación adversa a una meta, objetivo, propósito, proyecto, proceso o empresa. Dentro de la gestión de proyectos de TI, se deben gestionar los riesgos asociados a los mismos, para ello es importante que se identifiquen las posibles amenazas que generan riesgos al proyecto de tal manera que se pueda establecer la probabilidad de ocurrencia, el impacto generado, para finalmente determinar el nivel de cada riesgo del proyecto, y así poder realizar las acciones de mitigación o tratamiento de riesgos del proyecto.
            p.mb-lg-0.mb-3 Las organizaciones establecen o utilizan diversos métodos y escalas de valoración de riesgos según su contexto y gustos, ya que no existe una única metodología de riesgos. Se recomienda investigar sobre metodologías de riesgo, entre ellas ISO/IEC 31000, COSO, Magerit v3.<br><br>
            p.mb-4 En cualquier caso, para la determinación de riesgos de los proyectos de TI, se puede realizar siguiendo la siguiente fórmula:<br>
            p.mb-4 <i>Riesgo, R = Probabilidad, P. multiplicado por el Impacto, I. = R = P x I</i>
          .col-lg-5.col-8
            img.mb-0(alt="" src="@/assets/curso/temas/tema6/imagenriesgos.svg")
</template>

<script>
export default {
  name: 'Tema6',
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
