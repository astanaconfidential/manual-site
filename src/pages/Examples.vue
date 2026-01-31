<template>

<div class="examples-layout">

    <div class="examples-menu">
      <ul>
        <li
  v-for="item in cancelMenu"
  :key="item.id"
  @click="scrollToCancel(item.id)"
  :class="{ active: activeId === item.id }"
>
  {{ item.label }}
</li>

      </ul>
    </div>

    <div class="examples-content">
      <CancelList />
    </div>

  </div>

</template>

<script setup>
import CancelList from '../components/cancel-list/TestCancel.vue'
import { ref, onMounted } from 'vue'




const cancelMenu = [
  { label: 'Битое видео', id: 'VID_ERR' },
  { label: 'Не ГРНЗ', id: 'NO_GRNZ' },
  { label: 'Неверное определение ГРНЗ', id: 'WRONG_GRNZ' },
  { label: 'Некорректные данные контроллера', id: 'CTRL_ERR' },
  { label: 'Нет факта нарушения', id: 'NO_VIOL' },
  { label: 'Нечитаемый номерной знак', id: 'UNREAD_GRN' },
  { label: 'Ошибочные грузовые/М3', id: 'WRONG_M3' },
  { label: 'Отсутствие разметки', id: 'NO_MARK' },
  { label: 'Ошибки в линии трека', id: 'TRACK_ERR' },
  { label: 'Перекрытие разметки', id: 'MARK_OVER' },
  { label: 'Погодные условия', id: 'WEATHER' },
  { label: 'Помехи перед камерой', id: 'CAM_OBST' },
  { label: 'Проблемы проекции ТС', id: 'PROJ_ERR' },
  { label: 'Сбился фокус', id: 'FOCUS_ERR' },
  { label: 'Сбился битрейт', id: 'BITR_ERR' },
  { label: 'Сбился лучший кадр', id: 'BEST_FRAME' },
  { label: 'Съехавшие настройки камеры', id: 'SETT_ERR' },
  { label: 'Съехала камера', id: 'CAM_MISAL' },
  { label: 'Рассинхрон', id: 'SYNC_ERR' },
  { label: 'Ведомые ТС', id: 'TOW_TS' }
]

const activeId = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { threshold: 0.4 }
  )

  cancelMenu.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

const scrollToCancel = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

</script>
<style>
.examples-layout {
  display: flex;
  gap: 16px;
}

.examples-menu {
  position: sticky;
  top: 16px;
  width: 180px;
  max-height: calc(100vh - 32px);
  overflow-y: auto;

  background: #1f2933; /* близко к PrimeVue dark */

  border-radius: 0 14px 14px 0; /* слева ровно */
  padding: 10px 6px 16px 6px;

  box-shadow: 4px 0 12px rgba(0,0,0,0.25);
  
}

/* кастомный скролл */
.examples-menu::-webkit-scrollbar {
  width: 6px;
}

.examples-menu::-webkit-scrollbar-track {
  background: transparent;
}

.examples-menu::-webkit-scrollbar-thumb {
  background: #475569;
  border-radius: 6px;
}

.examples-menu::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

.examples-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.examples-menu li {
  padding: 9px 10px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  color: #e5e7eb;
  transition: 0.2s ease;
}

.examples-menu li:hover {
  background: #334155;
  color: #ffffff;
}

.examples-content {
  flex: 1;
}

.examples-menu li.active {
  background: rgba(59,130,246,0.25);
  color: #fff;
  font-weight: 600;
  border-left: 3px solid #3b82f6;
}
.examples-menu li {
  transition: background 0.25s ease, color 0.25s ease;
}

</style>