<script lang="ts">
import { ref, onMounted } from 'vue';
import { defineComponent } from 'vue';

interface Service {
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

export default defineComponent({
  setup() {
    const services = ref<Service[]>([]);

    const fetchServices = async () => {
      try {
        const response = await fetch('/assets/coreservices.json');
        const data = await response.json();
        services.value = data.services;
      } catch (error) {
        console.error("Fehler beim Laden der Services:", error);
      }
    };

    onMounted(() => {
      console.log('LsCards component mounted');
      fetchServices();
    });

    return {
      services
    };
  }
});
</script>

<template>
  <div class="leistungsspektrum-services">
    <CardTopic
        v-for="(service, index) in services"
        :key="index"
        :title="service.title"
        :description="service.description"
        :details="service.details"
        :imageUrl="service.imageUrl"
    />
  </div>
</template>


<style scoped>
.leistungsspektrum-services {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
}
</style>
