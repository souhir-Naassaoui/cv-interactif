<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
                <label for="ecole">Ecole</label>
                <input type="text" class="form-control" id="ecole" required v-model="formation.ecole" name="ecole"/>
            </div>
            <div class="form-group">
                <label for="diplome">Diplome</label>
                <input type="text" class="form-control" id="diplome" required v-model="formation.diplome" name="diplome"/>
            </div>
            <div class="form-group">
                <label for="specialite">Spécialité</label>
                <input type="text" class="form-control" id="specialite" required  v-model="formation.specialite" name="specialite"/>
            </div>
      <button @click="saveFormation" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newFormation">Add</button>
    </div>
  </div>
</template>
<script>
import CvService from "../services/CvService";
export default {
  name: "add-formation",
  data() {
    return {
      formation: {
        id: null,
        ecole: "",
        diplome:"",
        specialite:""
      },
      submitted: false
    };
  },
  methods: {
    saveFormation() {
      var data = {
        ecole: this.formation.ecole,
        diplome: this.formation.diplome,
        specialite: this.formation.specialite
      };
      CvService.addFormation(data)
        .then(response => {
          this.formation.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newFormation() {
      this.submitted = false;
      this.formation = {};
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