<template>
    <nav class="navbar-glass fs--1 navbar-top sticky-kit navbar navbar-expand navbar-light">
        <ul class="align-items-center d-none d-lg-block navbar-nav">
            <li class="nav-item">
                <div class="search-box dropdown">
                    <div class="toggle" id="" aria-expanded="false" data-toggle="dropdown">
                        <form class="position-relative">
                            <input placeholder="Search..." aria-label="Search" type="search" class="rounded-pill search-input form-control" value>
                        </form>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="navbar-nav-icons ms-auto flex-row align-items-center navbar-nav">
            <li class="dropdown">
                <a class="nav-link px-2 nine-dots toggle cursor-pointer" id="vue-nine-dots-toggle-1" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="37" viewBox="0 0 16 16" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
                        <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
                        <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
                        <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
                        <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
                        <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
                        <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
                        <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
                        <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
                    </svg>
                </a>
                <div aria-labelledby="vue-nine-dots-toggle-1" data-bs-popper="static" class="dropdown-menu-card dropdown-menu-end dropdown-caret-bg dropdown-menu">
                    <div class="dropdown-menu-end shadow-none card">
                        <div data-simplebar="init" class="nav-quick-links">
                            <div class="simplebar-wrapper" style="margin: 0px;">
                                Hello World
                            </div>
                            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                Hello World 2
                            </div>
                            <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                Hello World 3
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="dropdown">
                <a class="pe-0 ps-2 nav-link toggle" id="vue-avatar-8" aria-expanded="false" href="">
                    <div class="avatar avatar-xl">
                        <img class="rounded-circle" src="../../assets/media/fake_avatar.jpg" alt>
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default ({
    name: 'TopPageNavBar',
    components: {}
})
</script>

<style scoped>

</style>
