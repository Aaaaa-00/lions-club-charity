<template>
  <section id="home" class="hero">
    <div v-if="successMessage" class="success-message show">
      {{ successMessage }}
    </div>
    <div class="hero-content">
      <h1 class="hero-title">Sweet Scoops for a <span class="highlight">Sweet Cause</span></h1>
      <p class="hero-subtitle">Join Lions Club in making a difference, one delicious scoop at a time!</p>
      <p class="hero-description">Every ice cream purchase helps fund our community service projects and supports those in need.</p>
      <div class="hero-buttons">
        <button class="btn btn-primary" @click="scrollToSection('flavors')">
          <i class="fas fa-ice-cream"></i> Order Now
        </button>
        <button class="btn btn-secondary" @click="scrollToSection('about')">
          <i class="fas fa-heart"></i> Learn More
        </button>
      </div>
    </div>
    <div class="hero-image">
      <div class="ice-cream-illustration">
        <i class="fas fa-ice-cream fa-8x"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reactive state
const successMessage = ref('');

// Methods
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Method to show success message
const showSuccessMessage = (message) => {
  successMessage.value = message;
  setTimeout(() => {
    successMessage.value = '';
  }, 5000);
};

// Expose method to be used by other components
defineExpose({
  showSuccessMessage
});

// Add floating animation to ice cream icon
onMounted(() => {
  setTimeout(() => {
    const heroImage = document.querySelector('.ice-cream-illustration');
    if (heroImage) {
      heroImage.style.animation = 'float 3s ease-in-out infinite';
    }
  }, 500);
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
  padding: 120px 20px 80px;
  position: relative;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
  line-height: 1.2;
}

.highlight {
  color: #e74c3c;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #f39c12;
  border-radius: 2px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ice-cream-illustration {
  color: #ff6b6b;
}

.success-message {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 800px;
  z-index: 100;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Responsive styles */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 100px 20px 60px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
}
</style>