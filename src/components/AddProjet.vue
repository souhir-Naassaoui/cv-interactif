<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="titre">Titre</label>
        <input type="text" class="form-control" id="titre" required v-model="projet.titre" name="titre"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" required v-model="projet.description" name="description"/>
      </div>
      <div class="form-group">
        <label for="technologies">Technologies</label>
        <input type="text" class="form-control" id="technologies" required v-model="projet.technologies" name="technologies"/>
      </div>
      <div class="form-group">
        <label for="annee">Annee</label>
        <input type="text" class="form-control" id="annee" required v-model="projet.annee" name="annee"/>
      </div>
      <button @click="saveProjet" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProjet">Add</button>
    </div>
  </div>
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "add-projet",
  data() {
    return {
      projet: {
        id: null,
        titre: "",
        description:"",
        technologies:"",
        annee:""
      },
      submitted: false
    };
  },
  methods: {
    saveProjet() {
      var data = {
        titre: this.projet.titre,
        description: this.projet.description,
        technologies: this.projet.technologies,
        annee: this.projet.annee
      };
      CvService.addProjet(data)
        .then(response => {
          this.projet.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newProjet() {
      this.submitted = false;
      this.projet = {};
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