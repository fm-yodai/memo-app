<template>
  <div>
    <div><input type="text" v-model="title"></div>
    <div><textarea v-model="content"></textarea></div>
    <div class="center">
      <button @click="save">save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoForm',
  props: [
    'memo'
  ],
  data () {
    return {
      title: this.memo.title,
      content: this.memo.content
    }
  },
  methods: {
    save () {
      let memo = {
        title: this.title,
        content: this.content
      }

      this.$store.commit('save', memo)
      this.$router.push('/')
    }
  }

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