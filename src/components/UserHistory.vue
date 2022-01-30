<template>
  <div class="history-container">
    <div class="history-header">
      <div class="header-title">
        <div class="title">History</div>
        <div class="username">({{ userLogs.user }} )</div>
      </div>
      <div class="tabs-list">
        <div class="list-item">All</div>
        <div class="list-item">Location</div>
        <div class="list-item">Message</div>
        <div class="list-item">Alert</div>
      </div>
      <div class="icon">
        <img src="../assets/images/Group_618.png" alt="" />
      </div>
    </div>
    <div class="history-body">
      <div class="history-table">
        <div class="table-header">
          <div class="header-title">Date</div>
          <div class="header-title">Alter View</div>
          <div class="header-title">Time</div>
          <div class="header-title">Location</div>
        </div>
        <div class="table-body">
          <div class="table-item" v-for="log in userLogs.logs" :key="log.id">
            <user-log :log="log"></user-log>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserLog from "./UserLog.vue";
export default {
  components: { UserLog },
  name: "UserHistory",
  date() {
    return {
      // id: this.$route.params.user_id,
    };
  },
  watch: {
    "$route.params.user_id"(val) {
      if (this.$route.name === "dashboard") {
        this.fetchUserLogs({ id: val });
      }
    },
  },
  async created() {
    await this.fetchUserLogs({ id: this.$route.params.user_id });
  },
  computed: {
    ...mapGetters({
      userLogs: "user/userLogs",
    }),
  },
  methods: {
    ...mapActions({
      fetchUserLogs: "user/fetchUserLogs",
    }),
  },
};
</script>

<style lang="scss" scoped>
.history-container {
  background-color: white;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
  margin: 3% 0;
  height: 100%;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(black, 0.4);
  padding: 10px 20px;
  .header-title {
    width: 25%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-right: 1px solid rgba(black, 0.3);
    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }
    .title {
      font-size: 12px;
      font-weight: 700;
      margin-right: 15px;
    }
    .username {
      font-size: 12px;
      font-weight: 500;
    }
  }
  .tabs-list {
    width: 65%;
    display: flex;
    justify-content: space-around;
    .list-item {
      font-size: 12px;
      text-transform: capitalize;
      font-weight: 700;
      color: rgba(black, 0.3);
      // width: 25%;
      padding: 0 15px;
      &:first-child {
        color: rgb(252, 35, 79);
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: -110%;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: rgb(252, 35, 79);
        }
      }
    }
  }
}
.history-body {
  padding: 20px 20px 0;
}
.history-table {
  .table-header {
    display: flex;
    justify-content: space-between;
    .header-title {
      width: 25%;
      font-size: 12px;
      font-weight: 700;
    }
  }
  .table-body {
    margin-top: 2%;
    max-height: 120px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>