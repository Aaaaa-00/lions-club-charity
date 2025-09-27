<template>
  <div>
    <h1>Contact Us</h1>
    <p>Get in touch with our Lions Club for more information about our charity events.</p>
    <div>
      <a href="/">← Back to Home</a>
      <br>
      <a href="/about">← About Us</a>
    </div>
  </div>
</template>

<script setup>
// Manual head management since auto-imports are disabled
const title = 'Contact Us - Lions Club Charity'
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
  display: inline-block;
}

a:hover {
  text-decoration: underline;
}
</style>