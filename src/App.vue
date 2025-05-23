<template>
  <div class ="app">
    <div class="sidebar" :class ="{collapsed: isCollapsed}">
      <div class="logo" @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? '☰' : 'StayNap' }}
      </div>

      <RouterLink to="/">🏠{{ isCollapsed ? '' : 'Beranda' }}</RouterLink>
      <RouterLink to="/Booking">📅 {{ isCollapsed ? '' : 'Pemesanan' }}</RouterLink>
      <RouterLink to="/History">📜 {{ isCollapsed ? '' : 'Riwayat' }}</RouterLink>
      <RouterLink to="/Location">📍{{ isCollapsed ? '' : 'Lokasi' }}</RouterLink>
      <RouterLink to="/Profile">👤{{ isCollapsed ? '' : 'Profile' }}</RouterLink>
    </div>

    <div class="content">
      <h1>StayNap</h1>
      <RouterView />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapsed: false
      }
    }
  }
</script>

<style>
.app { display: flex; min-height: 100vh; }


.sidebar {
  width: 200px;
  background: #2c3e50;
  color: white;
  padding: 1rem;
  transition: width 0.3s;
}
.sidebar.collapsed { width: 60px; }

.logo {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.sidebar a {
  display: block;
  color: white;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  border-radius: 4px;
}
.sidebar a:hover { background: #34495e; }
.sidebar a.router-link-active { background: #3498db; }

.content {
  flex: 1;
  padding: 1rem;
}
.content h1 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}
</style>
