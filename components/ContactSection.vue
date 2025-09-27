<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Contact Information</h3>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>(555) 123-4567</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>info@lionsclub-icecream.org</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>123 Community Street, Your City</span>
          </div>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="contact-form">
          <h3>Send us a Message</h3>
          <form @submit.prevent="submitForm">
            <input 
              type="text" 
              v-model="formData.name" 
              placeholder="Your Name" 
              required
            >
            <input 
              type="email" 
              v-model="formData.email" 
              placeholder="Your Email" 
              required
            >
            <textarea 
              v-model="formData.message" 
              placeholder="Your Message" 
              rows="5" 
              required
            ></textarea>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';

// Get emitter from plugin
const { $emitter } = useNuxtApp();

// Form data
const formData = ref({
  name: '',
  email: '',
  message: ''
});

// Methods
const submitForm = () => {
  // In a real app, you would send this data to a server
  // For now, we'll just show a success message
  const message = `Thank you ${formData.value.name}! Your message has been sent. We'll get back to you soon at ${formData.value.email}.`;
  
  // Emit event to show success message
  $emitter.emit('show-success-message', message);
  
  // Reset form
  formData.value.name = '';
  formData.value.email = '';
  formData.value.message = '';
  
  // Scroll to top
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1000);
};
</script>

<style scoped>
.contact {
  padding: 80px 0;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
}

.contact-info h3,
.contact-form h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.contact-item i {
  color: #e74c3c;
  margin-right: 1rem;
  width: 20px;
}

.social-links {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: #c0392b;
  transform: translateY(-3px);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #e74c3c;
}

/* Responsive styles */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>