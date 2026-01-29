<template>

<div class="examples-layout">

    <div class="examples-menu">
      <ul>
        <li
          v-for="item in cancelMenu"
          :key="item.id"
          @click="scrollToCancel(item.id)"
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
  gap: 20px;
}

.examples-menu {
  position: sticky;
  top: 20px;
  width: 180px; /* было ~240 */
  background: #0f172a; /* тёмно-синий, не чёрный */
  border-radius: 14px;
  padding: 12px 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.35);
  height: fit-content;
}

.examples-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.examples-menu li {
  padding: 9px 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 14px;
  color: #e5e7eb;
  transition: all 0.2s ease;
}

.examples-menu li:hover {
  background: #1e293b;
  color: #ffffff;
  transform: translateX(3px);
}

.examples-content {
  flex: 1;
}


</style>