<template>


<div  style="margin-top:50px;">
  
  <div class="row">
      <div v-for="(competence, index) in competences" :key="index" class="col-md-2"  >
        <div class="card">
          <div class="card-body">
            {{competence.nom}}
            <router-link :to="'/competences/' + competence.id" class="badge badge-warning">Edit</router-link>
              <button class="btn btn-default" v-on:click="deleteCompetence(competence)">Delete</button>
          </div>
      </div>
    <br>
  </div>
  </div>
  </div>
<!-- 
  <div class="list row">
    <div class="col-md-8">
      
    </div>
    <div class="col-md-6">
      <h4>Competences</h4>
      <table class="table table-striped">
          <tr><th>Competences</th></tr>
          <tr  v-for="(competence, index) in competences" :key="index">
              <td>{{ competence.nom }}</td>
              <td><router-link :to="'/competences/' + competence.id" class="badge badge-warning">Edit</router-link></td>
              <button class="btn btn-danger" v-on:click="deleteCompetence(competence)">Delete</button>
          </tr>
      </table>
      
    </div></div>-->
    
</template>
<script>
import CvService from "../services/CvService";
import moment from 'moment';
export default {
  name: "competence-list",
  data() {
    return {
      competences: [],
      currentCompetence: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveCompetences() {
      CvService.getAllCompetences()
        .then(response => {
          this.competences = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCompetences();
      this.currentTutorial = null;
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
    deleteCompetence: async function (employee) {
                CvService.deleteCompetence(employee.id).then(()=>{
                    this.retrieveCompetences();
                });
               
            },
    formater(value){
        if (value) {
            return moment(String(value)).format('MM-YYYY')
            }
    }
  },
  mounted() {
    this.retrieveCompetences();
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