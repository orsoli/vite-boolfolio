<script>
export default {
    name: 'Header',
    data() {
        return {
          //Variables
          pages: [
            'Home',
            'Projects',
            'About',
            'Contact',
          ]

        };
    },
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Boolfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="(page, i) in pages" :key="i">
                        <router-link :to="{ name: page.toLocaleLowerCase() }" class="navbar-brand fs-6">
                            {{page}}
                        </router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link :to="{ name:'projects' }">
                            Projects
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link :to="{ name:'about' }">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name:'contact' }">
                            Contact
                        </router-link>
                    </li> -->
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang='scss' scoped>
</style>