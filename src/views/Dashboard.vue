<template>
    <VContainer class="w-100">
        Dashboard <br>
        
        <h1 color="primary">{{ user }}</h1>
        <pre>{{ user }}</pre>
        <hr class="my-10">
        <div class="bg-blue-lighten-3">{{ can }}</div>
        

    </VContainer>
</template>
  
<script setup>
import { useMe } from "@/store/me";
const { user, can } = useMe();


</script>