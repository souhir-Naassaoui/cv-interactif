<template>

<div class="row">
          <div v-for="(projet, index) in projets" :key="index"  class="col-lg-6">
            
            <h3 class="resume-title">{{ projet.titre }}</h3>
            <div class="resume-item">
              <h4></h4>
              <h5>{{ projet.description }}</h5>
              <p><em class="text-warning">{{ projet.technologies }}</em></p><br>
               
            </div>
            
          
        </div></div>


<!-- 
  <div  style="margin-top:50px;">
  <h3 class="text-warning">Projets académiques</h3> <br>
  <div class="row">
   
      <div v-for="(projet, index) in projets" :key="index" class="col-md-6"  >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ projet.titre }}</h5>
        <p class="card-text">{{ projet.description }}</p>
        <p class="text-warning">{{ projet.technologies }}</p>
      </div>
    </div>
  </div>
  
  </div>
</div>
-->

<!-- <div class="col-md-2">{{ projet.titre }}</div>
    <div class="col-md-6">{{ projet.description }}</div>
    <div class="col-md-3">{{ projet.technologies }}</div>
    <div class="col-md-1">{{ projet.annee }}</div>
</div>
  <div class="list row">
    <div class="col-md-8">
      
    </div>
    <div class="col-md-6">
      <h4>Projets</h4>
      <table class="table table-striped">
          <tr><th>Titre</th><th>Description</th><th>Technologies</th><th>Annee</th></tr>
          <tr  v-for="(projet, index) in projets" :key="index">
              <td>{{ projet.titre }}</td>
              <td>{{ projet.description }}</td>
              <td>{{ projet.technologies }}</td>
              <td>{{ projet.annee }}</td>
              <td><router-link :to="'/projets/' + projet.id" class="badge badge-warning">Edit</router-link></td>
              <button class="btn btn-danger" v-on:click="deleteProjet(projet)">Delete</button>
          </tr>
      </table>
      
    </div></div>
    -->
</template>
<script>
import CvService from "../services/CvService";
import moment from 'moment';
export default {
  name: "projets-list",
  data() {
    return {
      projets: [],
      currentProjet: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveProjets() {
      CvService.getAllProjets()
        .then(response => {
          this.projets = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveProjets();
      this.currentProjet = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },
    deleteCompece(id){
        CvService.delete(id)
        .then(() => {
          this.retrieveCompetences();
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteProjet: async function (employee) {
                CvService.deleteProjet(employee.id).then(()=>{
                    this.retrieveProjets();
                });
               
            },
    formater(value){
        if (value) {
            return moment(String(value)).format('MM-YYYY')
            }
    }
  },
  mounted() {
    this.retrieveProjets();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>