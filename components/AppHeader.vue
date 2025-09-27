<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <i class="fas fa-paw"></i>
          <span>Lions Club</span>
        </div>
        <ul class="nav-menu" :class="{ 'active': isMenuActive }">
          <li><a href="#" @click.prevent="scrollToSection('home')">Home</a></li>
          <li><a href="#" @click.prevent="scrollToSection('about')">About</a></li>
          <li><a href="#" @click.prevent="scrollToSection('flavors')">Ice Cream</a></li>
          <li><a href="#" @click.prevent="scrollToSection('impact')">Impact</a></li>
          <li><a href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
        </ul>
        <div class="hamburger" :class="{ 'active': isMenuActive }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive state
const isMenuActive = ref(false);

// Methods
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // Close menu if open
    isMenuActive.value = false;
  }
};

// Header scroll effect
const handleScroll = () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar {
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #e74c3c;
}

.logo i {
  margin-right: 0.5rem;
  color: #f39c12;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #e74c3c;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

/* Responsive styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: white;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    padding: 2rem 0;
  }
  
  .nav-menu.active {
    left: 0;
  }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}
</style>