<template>
    <ul class="pagination" @click="changePage">
        <li class="page-item" :class="{ active: page === activePage }" :data-page="`${page}`" v-for="page in totalPages">{{page}}</li>
    </ul>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const props = defineProps({
    totalPages: Number
})
const emit = defineEmits(['page'])
let activePage = ref(1)
function changePage(e) {
    if(e.target.classList.contains('page-item')){
        activePage.value = parseInt(e.target.dataset.page);
        emit('page', activePage.value);
    }
}
</script>

<style lang="scss">
.pagination {
    @apply flex my-4;

    .page-item {
        &:first-child {
            margin-left: 0;
            border-bottom-left-radius: 0.25rem;
            border-top-left-radius: 0.25rem;
        }

        &:last-child {
            border-bottom-right-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
        }

        &.active {
            z-index: 2;
            color: #fff;
            cursor: default;
            background-color: #5CB85C;
            border-color: #5CB85C;
        }

        padding: 0.5rem 0.75rem;
        margin-left: -1px;
        color: #5CB85C;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd;
    }
}
</style>