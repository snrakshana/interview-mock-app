<template>
  <div class="card">
    <div class="card-header">
      <div class="tabs-list">
        <div class="list-item">staff</div>
        <div class="list-item">employee</div>
      </div>
    </div>
    <div class="card-body">
      <div class="user-list">
        <div
          class="user-item"
          v-for="user in users"
          :key="user.key"
          @click="selectUser(user.key)"
        >
          <div class="profile-img" :class="`profile-img--${user.key}`">
            <div class="profile-symbol">{{ user.name.charAt(0) }}</div>
          </div>
          <div class="user-name">{{ user.name }}</div>
          <div class="detail-icon">
            <img src="../assets/images/Group_566.png" alt="dot icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "User",
  mounted() {
    this.fetchUser();
  },
  computed: {
    ...mapGetters({
      users: "user/users",
    }),
    firstLetter(username) {
      return username.charAt(0);
    },
  },
  methods: {
    ...mapActions({
      fetchUser: "user/fetchUsers",
    }),
    selectUser(id) {
      this.$emit("show", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  height: 100%;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
  margin-right: 3%;
  .card-header {
    border-bottom: 1px solid rgba(black, 0.4);
    .tabs-list {
      display: flex;
      justify-content: space-around;
      .list-item {
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 700;
        color: rgba(black, 0.3);
        width: 50%;
        padding: 20px;
        &:first-child {
          color: rgb(252, 35, 79);
          position: relative;
          &::before {
            content: "";
            position: absolute;
            bottom: -1%;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: rgb(252, 35, 79);
          }
        }
      }
    }
  }
  .card-body {
    padding: 40px 10px;
  }
}

.user-list {
  .user-item {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    margin-bottom: 4%;
    border: 1px solid rgba(black, 0.2);
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.4s ease-in;
    &:active {
      transform: scale(0.95);
    }
    .profile-img {
      width: 25px;
      height: 25px;
      margin: 0 10px;
      &--1 {
        background: linear-gradient(
          45deg,
          #ff5d8f,
          #ff5d8f 25%,
          #ff87ab 25%,
          #ff87ab 40%,
          #ffa6c1 40%,
          #ffa6c1 55%,
          #ffc4d6 55%,
          #ffc4d6 70%,
          #fadde1 70%
        );
      }
      &--2 {
        background: linear-gradient(
          45deg,
          #9163cb,
          #9163cb 25%,
          #a06cd5 25%,
          #a06cd5 40%,
          #b185db 40%,
          #b185db 55%,
          #c19ee0 55%,
          #c19ee0 70%,
          #d2b7e5 70%
        );
      }

      &--3 {
        background: linear-gradient(
          45deg,
          #0096c7,
          #0096c7 25%,
          #00b4d8 25%,
          #00b4d8 40%,
          #48cae4 40%,
          #48cae4 55%,
          #90e0ef 55%,
          #90e0ef 70%,
          #ade8f4 70%
        );
      }
      &--4 {
        background: linear-gradient(
          45deg,
          #07beb8,
          #07beb8 25%,
          #3dccc7 25%,
          #3dccc7 40%,
          #68d8d6 40%,
          #68d8d6 55%,
          #9ceaef 55%,
          #9ceaef 70%,
          #c4fff9 70%
        );
      }

      border-radius: 50%;
      .profile-symbol {
        font-size: 13px;
        font-weight: 600;
        line-height: 2em;
        color: white;
      }
    }
    .user-name {
      width: 80%;
      text-align: left;
      font-size: 13px;
      font-weight: 600;
      padding: 0 10px;
    }
    .detail-icon {
      display: flex;
      width: 5%;
    }
  }
}
</style>