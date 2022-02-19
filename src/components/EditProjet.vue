<template>
  <div v-if="currentProjet" class="edit-form">
    <h4>Projet</h4>
    <form>
      <div class="form-group">
        <label for="titre">Titre</label>
        <input type="text" class="form-control" id="titre"  v-model="currentProjet.titre" name="titre"/>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="currentProjet.description" name="description"/>
      </div>
      <div class="form-group">
        <label for="technologies">Technologies</label>
        <input type="text" class="form-control" id="technologies"  v-model="currentProjet.technologies" name="technologies"/>
      </div>
      <div class="form-group">
        <label for="annee">Annee</label>
        <input type="text" class="form-control" id="annee"  v-model="currentProjet.annee" name="annee"/>
      </div>
    </form>
   
    <button type="submit" class="badge badge-success" @click="updateProjet"> Update</button>
    <p>{{ message }}</p>
  </div>
 
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "competence",
  data() {
    return {
      currentProjet: null,
      message: ''
    };
  },
  methods: {
    getProjet(id) {
      CvService.getProjet(id)
        .then(response => {
          this.currentProjet = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    updateProjet() {
      CvService.updateProjet(this.currentProjet.id, this.currentProjet)
        .then(response => {
          console.log(response.data);
          this.message = 'The project was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getProjet(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>