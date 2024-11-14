<template>
  <div class="home">
    <header class="hero">
      <h1>{{ t('home.title') }}</h1>
      <p class="subtitle">{{ t('home.subtitle') }}</p>
      <button class="primary-button" @click="goToGenerator">
        {{ t('home.startButton') }}
      </button>
    </header>

    <section class="features">
      <h2>{{ t('home.features.title') }}</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">🎯</div>
          <h3>{{ t('home.features.personalized') }}</h3>
          <p>{{ t('home.features.personalizedDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="icon">🌟</div>
          <h3>{{ t('home.features.variety') }}</h3>
          <p>{{ t('home.features.varietyDesc') }}</p>
        </div>
        <div class="feature-card">
          <div class="icon">📖</div>
          <h3>{{ t('home.features.meaning') }}</h3>
          <p>{{ t('home.features.meaningDesc') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()

const goToGenerator = () => {
  router.push(`/${locale.value}/generator`)
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border-radius: 1rem;
  margin-bottom: 4rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.primary-button {
  background-color: white;
  color: #6366f1;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.primary-button:hover {
  transform: translateY(-2px);
}

.features {
  padding: 2rem 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: #1f2937;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #6b7280;
}
</style> 