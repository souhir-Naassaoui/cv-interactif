<template>

  <div  style="margin-top:50px;">

      <div v-for="(stage, index) in stages" :key="index"  >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"><span class="text-warning">Société : </span>{{ stage.societe }}</h5>
        <p class="card-text"><span class="text-warning">Sujet : </span>{{ stage.titre }}</p>
        <p><span class="text-warning">Poste : </span>{{ stage.poste }}</p>
        <p><span class="text-warning">Missions : </span> {{ stage.description }}</p>

        <p ><span class="text-warning">Technologies :</span> {{ stage.technologies }}</p>
        <p><span class="text-warning">Début de stage : </span>{{ formater(stage.dateDeb) }}</p>
        <p><span class="text-warning">Fin de stage : </span>{{ formater(stage.dateFin) }}</p>
      </div>
    </div><br> <br> 
  </div>
  
  </div>
<!--
  
  <div class="list row">
    <div class="col-md-8">
      
    </div>
    <div class="col-md-6">
      <h4>Experiences</h4>
      <table class="table table-striped">
          <tr><th>Poste</th><th>Societe</th><th>Titre</th><th>Technologies</th><th>Debut</th><th>Fin</th></tr>
          <tr  v-for="(stage, index) in stages" :key="index">
              <td>{{ stage.poste }}</td>
              <td>{{ stage.societe }}</td>
              <td>{{ stage.titre }}</td>
              <td>{{ stage.technologies }}</td>
              <td>{{ formater(stage.dateDeb) }}</td>
              <td>{{ formater(stage.dateFin) }}</td>
              <td><router-link :to="'/experiences/' + stage.id" class="badge badge-warning">Edit</router-link></td>
              <button class="btn btn-danger" v-on:click="deleteEmployee(stage)">Delete</button>
          </tr>
      </table>
      
    </div></div>-->
    
</template>
<script>
import CvService from "../services/CvService";
import moment from 'moment';
export default {
  name: "experiences-list",
  data() {
    return {
      stages: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveExperiences() {
      CvService.getAll()
        .then(response => {
          this.stages = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveExperiences();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },
    delete(id){
        CvService.delete(id)
        .then(() => {
          this.retrieveExperiences();
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteEmployee: async function (employee) {
                CvService.delete(employee.id).then(()=>{
                    this.retrieveExperiences();
                });
               
            },
    formater(value){
        if (value) {
            return moment(String(value)).format('MM-YYYY')
            }
    }
  },
  mounted() {
    this.retrieveExperiences();
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