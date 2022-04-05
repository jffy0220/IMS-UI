<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import TopPageNavBar from '@/components/navbar/TopPageNavBar.vue'

</script>

<template>
  <div class="container">
    <nav class="navbar-vertical navbar navbar-expand-xl navbar-light">
      <div class="d-flex align-items-center">
        <button type="button" id="toggleNavigation" class="navbar-toggler-humburger-icon navbar-vertical-toggle btn btn-link">
          <span class="navbar-toggle-icon"></span>
        </button>
        <a class="text-decoration-none navbar-brand text-left" href="#">
          <div class="d-flex align-items-center py-3">
            <span class="font-sans-serif">Falcon</span>
          </div>
        </a>
      </div>
      <div class="navbar-collapse collapse">
        <div class="navbar-vertical-content scrollbar">
          <ul class="flex-column navbar-nav">
            <li class="nav-item">
              <RouterLink to="/">
                <a aria-expanded="false" role="button" class="dropdown-indicator cursor-pointer nav-link" tabindex="0" href="#">
                  <div class="d-flex align-items-center">
                    <span class="nav-link-icon"></span>
                    <span class="nav-link-text ps-1">Home</span>
                  </div>
                </a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about">
                <a aria-expanded="false" role="button" class="dropdown-indicator cursor-pointer nav-link" tabindex="0" href="#">
                  <div class="d-flex align-items-center">
                    <span class="nav-link-icon"></span>
                    <span class="nav-link-text ps-1">About</span>
                  </div>
                </a>
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/inventory">
                <a aria-expanded="false" role="button" class="dropdown-indicator cursor-pointer nav-link" tabindex="0" href="#">
                  <div class="d-flex align-items-center">
                    <span class="nav-link-icon"></span>
                    <span class="nav-link-text ps-1">Inventory</span>
                  </div>
                </a>
              </RouterLink>
            </li>  
          </ul>
        </div>
      </div>
    </nav>
    <div class="content">
      <TopPageNavBar />
      <RouterView />
    </div>
  </div>
  
</template>

<style>

</style>
