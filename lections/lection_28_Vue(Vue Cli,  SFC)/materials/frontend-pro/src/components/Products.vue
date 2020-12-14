<template>
  <div class="products" ref="hello">
    <Product
      v-for="product in products"
      :product="product"
      :currency="'UAH'"
      :key="product.id"
    />

    <Modal class="products__modal" v-show="isShowModal" @close="closeModal">
      <template v-slot:header>
        <span
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima aut
          accusantium, animi nisi facere nobis quia temporibus cum quisquam,
          magni odit natus. Modi officia, unde officiis vel consequatur sit
          doloribus! Eligendi sed quis, necessitatibus consectetur voluptate
          explicabo obcaecati. Dolorem similique rerum molestiae possimus saepe
          consectetur iste aspernatur soluta iure illum. Repudiandae rem odio
          incidunt distinctio dignissimos perferendis voluptas, dolores
          eligendi. Dolorem porro beatae nobis quod repudiandae cupiditate quo.
          Incidunt iusto, quasi inventore accusantium, reiciendis consectetur
          aspernatur corporis error ab soluta, alias optio magni voluptate.
          Velit, eligendi laboriosam. Dolores, sunt laborum!</span
        >
      </template>

      <template v-slot:content>
        <div>Content - products</div>
      </template>

      <template v-slot:footer>
        <div>Footer - products</div>
      </template>
    </Modal>

    <button @click="showModal">Show modal products</button>
  </div>
</template>

<script>
import getApiUrl from "@/helper/getApiUrl";
import Product from "./Product.vue";
import Modal from "./common/Modal.vue";
import modalMixin from "@/mixins/modal.js";

export default {
  mixins: [modalMixin],
  data() {
    return {
      name: "Valera",
      products: [],
    };
  },
  components: {
    Product,
    Modal,
  },
  methods: {
    run() {
    }
  },
  mounted() {
    //console.log(this.$refs.hello);
  },
  async created() {
    //this.products = (await (await fetch(getApiUrl("products"))).json()) || [];
  },
};
</script>

<style lang="scss">
.products {
  display: flex;
  justify-content: space-between;

  &__modal .header {
    color: red;
    border: 1px solid blue;
  }
}
</style>
