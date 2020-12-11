<template>
    <div 
        class="product"
        :class="{'product__bought': product.isBought}"
    >
       <section class="product__name">Name: {{ product.name }}</section>
       <section class="product__price">Price: {{ price }}</section>
    </div>
</template>

<script>

export default {
    props: {
        product: Object,
        currency: String
    },
    computed: {
        price() {
            return `${this.product.coast} ${this.currency}`
        }
    }
}
</script>

<style lang="scss">
    .product {
        border: 1px solid red;
        width: 25%;
        min-height: 100px;

        &__name {
            color: blue;
        }

        &__bought {
            opacity: .5;
        }
    }
</style>