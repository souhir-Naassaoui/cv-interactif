<template>
  <div v-if="currentCompetence" class="edit-form">
    <h4>Competence</h4>
    <form>
      <div class="form-group">
        <label for="nom">Ajouter une competence</label>
        <input type="text" class="form-control" id="nom" v-model="currentCompetence.nom" />
      </div>
    </form>
   
    <button type="submit" class="badge badge-success" @click="updateCompetence"> Update</button>
    <p>{{ message }}</p>
  </div>
 
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "competence",
  data() {
    return {
      currentCompetence: null,
      message: ''
    };
  },
  methods: {
    getCompetence(id) {
      CvService.getCompetence(id)
        .then(response => {
          this.currentCompetence = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    updateCompetence() {
      CvService.updateCompetence(this.currentCompetence.id, this.currentCompetence)
        .then(response => {
          console.log(response.data);
          this.message = 'The competnece was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCompetence(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>