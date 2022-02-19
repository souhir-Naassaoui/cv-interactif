<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="poste">Poste</label>
        <input type="text" class="form-control" id="poste" required v-model="stage.poste" name="poste"/>
      </div>
      <div class="form-group">
        <label for="societe">Société</label>
        <input type="text" class="form-control" id="societe" required v-model="stage.societe" name="societe"/>
      </div>
      <div class="form-group">
        <label for="titre">Titre du sujet</label>
        <input type="text" class="form-control" id="titre" required v-model="stage.titre" name="titre"/>
      </div>
      <div class="form-group">
        <label for="technologies">Technologies</label>
        <input type="text" class="form-control" id="technologies" required v-model="stage.technologies" name="technologies"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" required v-model="stage.description" name="description"/>
      </div>
      <div class="form-group">
        <label for="dateDeb">Date de début</label>
        <input type="date" class="form-control" id="dateDeb" required v-model="stage.dateDeb" name="dateDeb"/>
      </div>
      <div class="form-group">
        <label for="dateFin">Date de fin</label>
        <input type="date" class="form-control" id="dateFin" required v-model="stage.dateFin" name="dateFin"/>
      </div>
      <button @click="saveExperience" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newExperience">Add</button>
    </div>
  </div>
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "add-experience",
  data() {
    return {
      stage: {
        id: null,
        poste: "",
        societe: "",
        titre:"",
        technologies:"",
        description:"",
        dateDeb:new Date(),
        dateFin:new Date()
      },
      submitted: false
    };
  },
  methods: {
    saveExperience() {
      var data = {
        poste: this.stage.poste,
        societe: this.stage.societe,
        titre:this.stage.titre,
        technologies:this.stage.technologies,
        description:this.stage.description,
        dateDeb:this.stage.dateDeb,
        dateFin:this.stage.dateFin
      };
      CvService.create(data)
        .then(response => {
          this.stage.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newExperience() {
      this.submitted = false;
      this.stage = {};
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