<template>
  <div v-if="currentFormation" class="edit-form">
    <h4>Formation</h4>
    <form>
      <div class="form-group">
        <label for="ecole">Ecole</label>
        <input type="text" class="form-control" id="ecole"  v-model="currentFormation.ecole" name="ecole"/>
      </div>
      <div class="form-group">
        <label for="diplome">Diplome</label>
        <input type="text" class="form-control" id="diplome" v-model="currentFormation.diplome" name="diplome"/>
      </div>
      <div class="form-group">
        <label for="specialite">Spécialité</label>
        <input type="text" class="form-control" id="specialite"  v-model="currentFormation.specialite" name="specialite"/>
      </div>
    </form>
   
    <button type="submit" class="badge badge-success" @click="updateFormation"> Update</button>
    <p>{{ message }}</p>
  </div>
 
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "formation",
  data() {
    return {
      currentFormation: null,
      message: ''
    };
  },
  methods: {
    getFormation(id) {
      CvService.getFormation(id)
        .then(response => {
          this.currentFormation = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    updateFormation() {
      CvService.updateFormation(this.currentFormation.id, this.currentFormation)
        .then(response => {
          console.log(response.data);
          this.message = 'The informations was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getFormation(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>