<template>
  <div>
    <h1>About Our Lions Club</h1>
    <p>Learn more about our community service mission.</p>
    <NuxtLink to="/">← Back to Home</NuxtLink>
    <br>
    <NuxtLink to="/contact">Contact Us →</NuxtLink>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components'

// Page meta for SEO
useHead({
  title: 'About Us - Lions Club Charity'
})
</script>

<style scoped>
h1 {
  color: #2c3e50;
  font-family: 'Poppins', sans-serif;
}

p {
  color: #34495e;
  font-size: 1.1rem;
  margin: 1rem 0;
}

a {
  color: #007bff;
  text-decoration: none;
  margin: 0.5rem;
}

a:hover {
  text-decoration: underline;
}
</style>