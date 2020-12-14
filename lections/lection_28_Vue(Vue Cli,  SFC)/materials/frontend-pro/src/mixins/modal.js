const modalMixin = {
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
  },
  mounted() {
    console.log("hello world");
  },
};

export default modalMixin;
