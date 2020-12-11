<template>
  <div id="app" class="app">
    <ProductsPage />

    <Modal 
      v-show="isShowGlobalModal" 
      @close="closeModal"
      class="app__modal"
    > 
        <template v-slot:header>
            <span>Header - Appp</span>
        </template>

        <template v-slot:content>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit necessitatibus repudiandae iusto quisquam, 
                et, quidem deleniti nam qui quo quia quasi libero distinctio aspernatur, quod quas animi autem porro possimus?
            </div>
        </template>

        <template v-slot:footer>
            <div>
                Footer - Appp
            </div>
        </template>
    </Modal>

    <button @click="showModal">Show modal in app component</button>
  </div>
</template>

<script>
import ProductsPage from './components/ProductsPage.vue'
import Modal from './components/common/Modal.vue'

export default {
  name: 'App',
    data() {
      return {
          isShowGlobalModal: false
      }
  },
  methods: {
        showModal() {
            this.isShowGlobalModal = true;
        },
        closeModal() {
            this.isShowGlobalModal = false;
        }
  },
  components: {
    ProductsPage,
    Modal
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 


.app {
  &__modal .header,  
  &__modal .content, 
  &__modal .footer {
    width: 50%;
    margin: 0 auto;
    color: pink;
    border: 1px dashed salmon;

    padding: 10px;
  }
}
</style>
