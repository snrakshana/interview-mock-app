<template>
  <nav class="navbar">
    <div class="nav-menu">
      <ul class="menu-list">
        <li class="menu-item">
          <div class="item-icon">
            <img src="../assets/images/Group_537.png" alt="icon" />
          </div>
        </li>
        <li class="menu-item">
          <div class="item-icon">
            <img src="../assets/images/Group_538.png" alt="icon" />
          </div>
        </li>
        <li class="menu-item">
          <div class="item-icon">
            <img src="../assets/images/Group_563.png" alt="icon" />
          </div>
        </li>
        <li class="menu-item">
          <div class="item-icon">
            <img src="../assets/images/Group_548.png" alt="icon" />
          </div>
        </li>
        <li class="menu-item">
          <div class="item-icon">
            <img src="../assets/images/Group_549.png" alt="icon" />
          </div>
        </li>
        <li class="menu-item">
          <div class="item-icon">
            <img src="../assets/images/Group_555.png" alt="icon" />
          </div>
        </li>
      </ul>
    </div>
    <div class="last-menu">
      <div class="item-icon">
        <img src="../assets/images/Group_565.png" alt="icon" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:"Navabar"
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75px;
  background-color: rgb(34, 48, 70);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .nav-menu {
    height: 70%;
    .menu-list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
  .last-menu {
    height: 15%;
    display: flex;
    .item-icon {
      margin: auto;
      width: 75px;
      height: 90px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
.menu-item {
  padding: 20px;
  &:first-child {
    background-color: rgb(252, 35, 79);
  }
  .item-icon {
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
    }
  }
}
</style>