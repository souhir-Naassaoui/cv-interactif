<template>
  <div id="app">
    <div class="row">
      <!-- <div class="col-md-2">
        <div class="sidebar">
      <router-link to="/informations" class="nav-link">Informations</router-link>
      <router-link to="/formations" class="nav-link">Formations</router-link>
      <router-link to="/experience" >Experiences</router-link>
      <router-link to="/competences" class="nav-link">skills</router-link>
      <router-link to="/projets" class="nav-link">Projets</router-link>
    </div>
    
      </div> -->
      
        
      <router-view />
    
     
    </div>
  </div>
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/experience" class="nav-link">Experiences</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/competences" class="nav-link">skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addCompetence" class="nav-link">Add skill</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projets" class="nav-link">Projets</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addProjet" class="nav-link">Add project</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/formations" class="nav-link">Formations</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addFormation" class="nav-link">Add formation</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/informations" class="nav-link">Informations</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/addCandidate" class="nav-link">Add candidate</router-link>
        </li>
      </div>
    </nav>-->
    
</template>
<script>
export default {
  name: "app"
};
</script>

<style scoped>

body {
  margin: 0;
  font-family: "Lato", sans-serif;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

</style>