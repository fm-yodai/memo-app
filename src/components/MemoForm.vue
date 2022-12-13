<template>
  <div>
    <div><input type="text" v-model="title"></div>
    <div><textarea v-model="content"></textarea></div>
    <div class="center">
      <button>save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoForm'
}
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
input[type=text] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 30em;
}
button {
  width: 5em;
  margin: 3px;
}
.center {
  text-align: center;
}
</style>