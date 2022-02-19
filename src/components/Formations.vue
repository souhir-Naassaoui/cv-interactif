


<template>
<div class="row">
          <div v-for="(formation, index) in formations" :key="index" class="col-lg-6">
            
            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>{{ formation.specialite }}</h4>
              <h5>Ecole : {{ formation.ecole }}</h5>
              <p><em>{{ formation.diplome }}</em></p>
               
            </div>
            
          
        </div></div>


<!-- 
  
  <div class="list row">
    <div class="col-md-8">
      
    </div>
    <div class="col-md-6">
      <h4>Formations</h4>
      <table class="table table-striped">
          <tr><th>Ecole</th><th>Diplome</th><th>Specialité</th></tr>
          <tr  v-for="(formation, index) in formations" :key="index">
              <td>{{ formation.ecole }}</td>
              <td>{{ formation.diplome }}</td>
              <td>{{ formation.specialite }}</td>
          
              <td><router-link :to="'/formations/' + formation.id" class="badge badge-warning">Edit</router-link></td>
              <button class="btn btn-danger" v-on:click="deleteFormation(formation)">Delete</button>
          </tr>
      </table>
      
    </div></div>
    -->
</template>
<script>
import CvService from "../services/CvService";
import moment from 'moment';
export default {
  name: "formations-list",
  data() {
    return {
      formations: [],
      currentFormations: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveFormations() {
      CvService.getAllFormations()
        .then(response => {
          this.formations = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveFormations();
      this.currentFormation = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentFormation = tutorial;
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
    deleteFormation: async function (employee) {
                CvService.deleteFormation(employee.id).then(()=>{
                    this.retrieveFormations();
                });
               
            },
    formater(value){
        if (value) {
            return moment(String(value)).format('MM-YYYY')
            }
    }
  },
  mounted() {
    this.retrieveFormations();
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