<template>
  <div v-if="currentExperience" class="edit-form">
    <h4>Experience</h4>
    <form>
      <div class="form-group">
        <label for="poste">Poste</label>
        <input type="text" class="form-control" id="poste" v-model="currentExperience.poste" />
      </div>
     <div class="form-group">
        <label for="societe">Societe</label>
        <input type="text" class="form-control" id="societe" v-model="currentExperience.societe" />
      </div>
      <div class="form-group">
        <label for="titre">Titre</label>
        <input type="text" class="form-control" id="titre" v-model="currentExperience.titre" />
      </div>
      <div class="form-group">
        <label for="technologies">Technologies</label>
        <input type="text" class="form-control" id="technologies" v-model="currentExperience.technologies" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" v-model="currentExperience.description" />
      </div>
      <div class="form-group">
        <label for="dateDeb">Date de debut</label>
        <input type="date" class="form-control" id="dateDeb" v-model="currentExperience.dateDeb" />
      </div>
      <div class="form-group">
        <label for="dateFin">Date de fin</label>
        <input type="date" class="form-control" id="dateFin" v-model="currentExperience.dateFin" />
      </div>
    </form>
   
    <button type="submit" class="badge badge-success" @click="updateExperience"> Update</button>
    <p>{{ message }}</p>
  </div>
 
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "experience",
  data() {
    return {
      currentExperience: null,
      message: ''
    };
  },
  methods: {
    getExperience(id) {
      CvService.get(id)
        .then(response => {
          this.currentExperience = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    updateExperience() {
      CvService.update(this.currentExperience.id, this.currentExperience)
        .then(response => {
          console.log(response.data);
          this.message = 'The experience was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getExperience(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>