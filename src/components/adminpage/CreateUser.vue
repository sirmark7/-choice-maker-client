<template>
  <div class="create-user">
    <h1>Create User</h1>
    <form @submit.prevent="createUser">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="personalId">Personal ID</label>
        <input type="text" id="personalId" v-model="personalId" maxlength="6" required />
      </div>
      <div class="form-group">
        <label for="role">Role</label>
        <select id="role" v-model="role" required>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      personalId: '',
      role: 'student',
      password: '',
    };
  },
  methods: {
    createUser() {
      const newUser = {
        name: this.name,
        personalId: this.personalId,
        role: this.role,
        password: this.password,
      };
      console.log('User Created:', newUser);
      // Here you would typically send newUser to the backend API
    },
  },
};
</script>

<style scoped>
.create-user {
  padding: 20px;
    width: 60%;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
