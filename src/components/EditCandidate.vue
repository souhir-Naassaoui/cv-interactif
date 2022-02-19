<template>
  <div v-if="currentCandidate" class="edit-form">
    <h4>Informations</h4>
    <form>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" class="form-control" id="nom"  v-model="currentCandidate.nom" name="nom"/>
      </div>
      <div class="form-group">
        <label for="prenom">Prenom</label>
        <input type="text" class="form-control" id="prenom"  v-model="currentCandidate.prenom" name="prenom"/>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email"  v-model="currentCandidate.email" name="email"/>
      </div>
      <div class="form-group">
        <label for="numero">Numero</label>
        <input type="text" class="form-control" id="numero"  v-model="currentCandidate.numero" name="numero"/>
      </div>
      <div class="form-group">
        <label for="adresse">Adresse</label>
        <input type="text" class="form-control" id="adresse"  v-model="currentCandidate.adresse" name="adresse"/>
      </div>
      <div class="form-group">
        <label for="motivation">Motivation</label>
        <input type="text" class="form-control" id="motivation"  v-model="currentCandidate.motivation" name="motivation"/>
      </div>
    </form>
   
    <button type="submit" class="badge badge-success" @click="updateCandidate"> Update</button>
    <p>{{ message }}</p>
  </div>
 
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "competence",
  data() {
    return {
      currentCandidate: null,
      message: ''
    };
  },
  methods: {
    getCandidate(id) {
      CvService.getCandidate(id)
        .then(response => {
          this.currentCandidate = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    updateCandidate() {
      CvService.updateCandidate(this.currentCandidate.id, this.currentCandidate)
        .then(response => {
          console.log(response.data);
          this.message = 'The inforamtions was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCandidate(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>