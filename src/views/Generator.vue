<template>
  <div class="generator">
    <h1>{{ t('generator.title') }}</h1>
    
    <div class="filters">
      <div class="filter-group">
        <label>{{ t('generator.petType') }}</label>
        <select v-model="filters.petType">
          <option value="dog">{{ t('generator.types.dog') }}</option>
          <option value="cat">{{ t('generator.types.cat') }}</option>
          <option value="bird">{{ t('generator.types.bird') }}</option>
        </select>
      </div>

      <div class="filter-group">
        <label>{{ t('generator.gender') }}</label>
        <select v-model="filters.gender">
          <option value="male">{{ t('generator.genders.male') }}</option>
          <option value="female">{{ t('generator.genders.female') }}</option>
        </select>
      </div>

      <div class="filter-group">
        <label>{{ t('generator.personality') }}</label>
        <select v-model="filters.personality">
          <option value="playful">{{ t('generator.personalities.playful') }}</option>
          <option value="calm">{{ t('generator.personalities.calm') }}</option>
          <option value="friendly">{{ t('generator.personalities.friendly') }}</option>
        </select>
      </div>
    </div>

    <button @click="generateName" class="generate-button">
      {{ t('generator.generateButton') }}
    </button>

    <div v-if="generatedName" class="result">
      <h2>{{ t('generator.result') }}</h2>
      <div class="name-card">
        <h3>{{ generatedName }}</h3>
        <p>{{ nameDescription }}</p>
        <button @click="saveName" class="save-button">
          {{ t('generator.saveButton') }}
        </button>
      </div>
    </div>

    <div class="recent-names">
      <h2>{{ t('generator.recentNames') }}</h2>
      <div class="names-grid">
        <div v-for="name in recentNames" :key="name.id" class="name-item">
          <h4>{{ name.name }}</h4>
          <p>{{ name.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const filters = reactive({
  petType: 'dog',
  gender: 'male',
  personality: 'playful'
})

const generatedName = ref('')
const nameDescription = ref('')
const recentNames = ref([])

const generateName = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/pet-names/random?` +
      new URLSearchParams({
        type: filters.petType,
        gender: filters.gender,
        personality: filters.personality
      })
    )
    const data = await response.json()
    
    if (data) {
      generatedName.value = data.name
      nameDescription.value = data.meaning || `A perfect name for your ${filters.personality} ${filters.petType}!`
    }
  } catch (error) {
    console.error('Error generating name:', error)
  }
}

const saveName = () => {
  // TODO: 实现保存功能
  recentNames.value.unshift({
    id: Date.now(),
    name: generatedName.value,
    description: nameDescription.value
  })
}

const fetchRecentNames = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pet-names/recent`)
    const data = await response.json()
    recentNames.value = data
  } catch (error) {
    console.error('Error fetching recent names:', error)
  }
}

onMounted(() => {
  fetchRecentNames()
})
</script>

<style scoped>
.generator {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

select {
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.generate-button {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;
  margin: 2rem 0;
}

.result {
  margin: 2rem 0;
}

.name-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.save-button {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
}

.names-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.name-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0.1);
}
</style> 