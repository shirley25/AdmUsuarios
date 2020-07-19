<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/datasoft.png" alt="Vuetify.js" class="mb-5">
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script type="text/javascript">
var t;
window.onload=resetTimer;
document.onkeypress=resetTimer;
document.onmousemove
function logout()
{
alert("El sistema se cierra por 40 segundos de inactividad.");

this.$router.Push('Login') 
}
function resetTimer()
{
clearTimeout(t);
t=setTimeout(logout,40000) //40 segundos de inactividad, tiempo en ms
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
