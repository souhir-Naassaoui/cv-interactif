<template>
  <div>
    


  <!-- ======= Mobile nav toggle button ======= -->
  <!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex flex-column justify-content-center">

    <nav id="navbar" class="navbar nav-menu">
      <ul>
        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Formation</span></a></li>
        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Projets</span></a></li>
       <!--  <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li> -->
        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Experience</span></a></li>
      </ul>
    </nav><!-- .nav-menu -->

  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Souhir Naassaoui</h1>
      <p>I'm a Software Engineer<span class="typed" data-typed-items="Software engineer, Developer"></span></p>
      <div class="social-links">
        <a href="#" class="github"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/souhir-naassaoui/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
		<a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
      </div>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p>Je suis étudiante en 3éme année génie informatique à l'école Nationale d'Ingénieurs de Sfax</p>
           <p>J’apprends vite et j’espère atteindre mes objectifs en
travaillant dur, j’ai soif de connaissances,
sérieuse et motivée pour prendre de nouveaux challenges professionnels et d’intégrer un groupe dynamique afin 
d'améliorer mes compétences.</p>
      <p>Je suis passionné par le développement des applications web, coté front-end et back-end</p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/hero-bg.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
           <Candidate/>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    


    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Formation</h2>
          <Formations/>
          
        </div>

        

      </div>
    </section><!-- End Resume Section -->
    
    <!-- ======= Skills Section ======= -->
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
          
    <Competence/>
      </div></div>
    </section><!-- End Skills Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Projets académiques</h2>
          <Projets/></div></div>
    </section><!-- End Portfolio Section -->

   



    <!-- ======= Resume Section ======= -->
    <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Experience professionnel</h2>
          <Experience/>
          
        </div>

        

      </div>
    </section><!-- End Resume Section -->
   
  </main><!-- End #main -->

  
  


  </div>
</template>

<script>
import Formations from '../components/Formations.vue'
import Candidate from '../components/Candidate.vue'
import Competence from '../components/Competence.vue'
import Projets from '../components/Projets.vue'
import Experience from '../components/Experience.vue'
export default {
components:{Formations,Candidate,Competence,Projets,Experience
},
name:"Home"
}
</script>

<style>

</style>