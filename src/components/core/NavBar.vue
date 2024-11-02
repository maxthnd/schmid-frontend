<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const navItems = ref([
  {
    title: 'Startseite',
    submenu: [
      { name: 'Startseite', url: '/'}
    ]
  },
  {
    title: 'Vorrichtung- & Anlagenbau',
    submenu: [
      { name: 'Übersicht', url: '/vorrichtungs-und-anlagenbau' },
      { name: 'Messtechnik', url: '/messtechnik' },
      { name: 'Maschinenpark', url: '/maschinenpark' },
      { name: 'Fräserei', url: '/fraeserei' },
      { name: 'CAD/CAM', url: '/cad-cam' },
      { name: 'Leistungsspektrum', url: '/leistungsspektrum' }
    ]
  },
  {
    title: 'Unternehmen',
    submenu: [
      { name: 'Über uns', url: '/ueber-uns' },
      { name: 'Kundenreferenzen', url: '/kundenreferenzen' },
      { name: 'Nachhaltigkeit', url: '/nachhaltigkeit' },
      { name: 'Lieferantenbewerbung', url: '/lieferantenbewerbung' }
    ]
  },
  {
    title: 'Karriere',
    submenu: [
      { name: 'Karriereportal', url: '/karriereportal' },
      { name: 'Weitere Informationen', url: '/weitere-informationen' },
      { name: 'Dashboard', url: '/dashboard' },
    ]
  }
]);

const isMenuVisible = ref(false);
const menuAnimationClass = ref('');

const showMenu = () => {
  menuAnimationClass.value = 'slide-down';
  isMenuVisible.value = true;
};

const hideMenu = () => {
  menuAnimationClass.value = 'fade-out';
  setTimeout(() => {
    isMenuVisible.value = false;
  }, 300);
};

const handleScroll = () => {
  hideMenu();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div
      class="navbar"
      @mouseenter="showMenu"
  >
    <div class="nav-left">
      <img src="/assets/images/core/schmid-website-logo.png" style="height: 28px" />
    </div>
    <ul class="nav-right">
      <li
          v-for="(item, idx) in navItems"
          :key="idx"
          class="nav-item"
          @mouseenter="showMenu"
          @click="showMenu"
      >
        <a>{{ item.title }}</a>
      </li>
    </ul>
  </div>

  <transition name="fade">
    <div
        v-if="isMenuVisible"
        :class="['megamenu', menuAnimationClass]"
        @mouseenter="showMenu"
        @mouseleave="hideMenu"
    >
      <div class="megamenu-grid">
        <div v-for="(item, idx) in navItems" :key="idx" class="megamenu-column">
          <h3>{{ item.title }}</h3>
          <ul v-if="item.submenu.length">
            <li v-for="(subItem, subIdx) in item.submenu" :key="subIdx">
              <a :href="subItem.url">{{ subItem.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.navbar {
  background: #222222;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  align-items: center;
  padding: 0 20px;
}

.navbar ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  margin: 0 20px;
  position: relative;
}

.navbar ul li a {
  text-decoration: none;
  font-size: 14px;
  color: white;
  transition: color 0.3s;
}

.navbar ul li:hover > a {
  color: #00a5ff;
}

.megamenu {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100vw;
  background-color: #333;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-down {
  animation: slideDown 0.3s ease forwards;
}

.fade-out {
  animation: fadeOut 0.3s ease forwards; /* Fading Animation */
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}


.megamenu-grid {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
}

.megamenu-column {
  flex: 1;
  padding: 10px;
}

.megamenu-column h3 {
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
  border-bottom: 1px solid #00a5ff;
  padding-bottom: 5px;
}

.megamenu-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.megamenu-column ul li {
  padding: 5px 0;
}

.megamenu-column ul li a {
  color: #ddd;
  text-decoration: none;
  font-size: 14px;
}

.megamenu-column ul li a:hover {
  color: #00a5ff;
}

body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>


