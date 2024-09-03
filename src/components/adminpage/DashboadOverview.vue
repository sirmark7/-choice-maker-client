<template>
  <div class="dashboard">
    <main>
      <section class="overview">
        <div class="card">
          <h2>Active Elections</h2>
          <p>{{ activeElectionsCount }}</p>
        </div>
        <div class="card">
          <h2>Total Users</h2>
          <p>{{ totalUsersCount }}</p>
        </div>
        <div class="card">
          <h2>Votes Cast</h2>
          <p>{{ totalVotesCast }}</p>
        </div>
      </section>

      <section class="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li v-for="activity in recentActivities" :key="activity.id">
            {{ activity.message }}
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeElectionsCount: 3,
      totalUsersCount: 150,
      totalVotesCast: 320,
      recentActivities: [
        { id: 1, message: 'New election created: School President' },
        { id: 2, message: 'User John Doe added to the system' },
        { id: 3, message: 'Election results published for School President' },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}

.overview {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.card {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.recent-activity {
  margin-top: 40px;
}

.recent-activity ul {
  list-style: none;
  padding: 0;
}

.recent-activity li {
  background-color: #e9ecef;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>
