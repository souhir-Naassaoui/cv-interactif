<template>
<div style="margin-top:50px;">
<div  >
    
   <div v-for="(information, index) in informations" :key="index">
     <p><span class="text-weight-bold text-warning">Nom :</span> {{ information.nom }}</p>
     <p> <span class="text-weight-bold text-warning">Prenom : </span>{{ information.prenom }}</p>
     <p><span class="text-weight-bold text-warning">Email :</span> {{ information.email }}</p>
     <p><span class="text-weight-bold text-warning">Numéro : </span>{{ information.numero }}</p>
     <p><span class="text-weight-bold text-warning">Adresse :</span> {{ information.adresse }}</p>
   </div>
      
      
       
       <!--
         <table class="table table-striped">
          <tr><th>Nom</th><th>Prenom</th><th>Email</th><th>Numero</th></tr>
          <tr  >
              <td></td>
              <td>{{ information.prenom }}</td>
              <td>{{ information.email }}</td>
              <td>{{ information.numero }}</td>
              <td>{{ information.adresse }}</td>
              <td>{{ information.motivation }}</td>
          
              <td><router-link :to="'/informations/' + information.id" class="badge badge-warning">Edit</router-link></td>
              <button class="btn btn-danger" v-on:click="deleteCandidate(formation)">Delete</button>
          </tr>
      </table>--><br> <br>
      <p v-for="(information, index) in informations" :key="index" >
        <a href="http://localhost:8087/candidate/cv/1" class="btn btn-warning " download="newfilename">Telecharger mon cv</a></p>
    </div></div>

  
</template>
<script>
import CvService from "../services/CvService";
import moment from 'moment';
export default {
  name: "informations-list",
  data() {
    return {
      informations: [],
      urlCV:'http://localhost:8087/candidate/cv/1',
      currentCandidate: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveCandidate() {
      CvService.getAllCandidate()
        .then(response => {
          this.informations = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCandidate();
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
    deleteCandidate: async function (employee) {
                CvService.deleteCandidate(employee.id).then(()=>{
                    this.retrieveCandidate();
                });
               
            },
    formater(value){
        if (value) {
            return moment(String(value)).format('MM-YYYY')
            }
    }
  },
  mounted() {
    this.retrieveCandidate();
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