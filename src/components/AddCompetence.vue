<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nom">Ajouter une competence</label>
        <input type="text" class="form-control" id="nom" required v-model="competence.nom" name="nom"/>
      </div>
      <button @click="saveCompetence" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newCompetence">Add</button>
    </div>
  </div>
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "add-competence",
  data() {
    return {
      competence: {
        id: null,
        nom: "",
      },
      submitted: false
    };
  },
  methods: {
    saveCompetence() {
      var data = {
        nom: this.competence.nom,
        
      };
      CvService.addCompetence(data)
        .then(response => {
          this.competence.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newCompetence() {
      this.submitted = false;
      this.competence = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>