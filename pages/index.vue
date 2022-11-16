<template>
  <div>
    {{count}}
  </div>
</template>
  
<script setup>
import {getArticles} from '@/API.js'
definePageMeta({
  layout: "custom",
});

const runtimeConfig = useRuntimeConfig()
//const { data: count } = await useFetch('https://api.realworld.io/api/articles?limit=10&offset=0')
const { data: count } = await useLazyAsyncData('count', () => $fetch(`${runtimeConfig.public.apiBase}`+`${getArticles()}`))
</script>
  