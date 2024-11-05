<script setup lang="ts">
const carouselItems = [
  {
    titlePic: "/assets/images/core/schmidlogo.webp",
    imgUrl: "/assets/images/slideshow/background_maschinenbau.jpg",
    title: "SCHMID GMBH",
    description: "Wo Technologie auf Handwerk trifft"
  }
];
</script>

<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
          v-for="(item, index) in carouselItems"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
      >
        <div class="overlay">
          <img :src="item.imgUrl" class="d-block w-100" alt="Slide image">
          <div class="carousel-caption">
            <div class="overlay-logo">
              <img :src="item.titlePic" alt="">
            </div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.carousel-inner {
  width: 100%;
  height: 100%;
}

.carousel-item img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.overlay {
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
  max-width: 90%;
}

.carousel-caption h2 {
  font-size: 3rem;
  margin-top: 20px;
}

.carousel-caption p {
  font-size: 1.5rem;
}

.overlay-logo img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  z-index: 3;
  position: relative;
}

.carousel-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 3;
}

.carousel-control-prev {
  left: 30px;
}

.carousel-control-next {
  right: 30px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
}

/* For tablets and small desktops */
@media (max-width: 1024px) {
  .carousel-caption h2 {
    font-size: 2.5rem;
  }

  .carousel-caption p {
    font-size: 1.2rem;
  }

  .overlay-logo img {
    width: 150px;
    height: 150px;
  }
}

/* For mobile devices */
@media (max-width: 768px) {
  .carousel {
    height: 100vh;
  }

  .carousel-caption h2 {
    font-size: 2rem;
  }

  .carousel-caption p {
    font-size: 1rem;
  }

  .overlay-logo img {
    width: 120px;
    height: 120px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 6%;
  }

  .carousel-control-prev {
    left: 15px;
  }

  .carousel-control-next {
    right: 15px;
  }
}

/* For extra small screens (e.g., very small mobile devices) */
@media (max-width: 480px) {
  .carousel {
    height: 100vh;
  }

  .carousel-caption h2 {
    font-size: 1.5rem;
  }

  .carousel-caption p {
    font-size: 0.9rem;
  }

  .overlay-logo img {
    width: 100px;
    height: 100px;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 8%;
  }

  .carousel-control-prev {
    left: 10px;
  }

  .carousel-control-next {
    right: 10px;
  }
}
</style>
