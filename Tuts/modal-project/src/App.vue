<template lang="pug">
h1 {{ title }}

.container
  input(type="text" ref="name") 
  br
  span {{ value }}
  br
  button(@click="handleClick") Click me

.test(v-if="showModal")
  Modal(:header="header" :text="text" theme="sale" @close="toggleModal")

button(@click.shift="toggleModal") open Modal(shift)

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'Vue JS 3 Tutorial for Beginners',
      value: '',
      header: 'Lorem ipsum dolor sit amet 1',
      text: 'Lorem ipsum dolor sit amet 2',
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.value = this.$refs.name.value;
      this.$refs.name.classList.add('test')
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss">

body {
    margin-left: 0;
  margin-right: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
