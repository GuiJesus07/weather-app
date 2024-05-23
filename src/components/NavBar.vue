<script></script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">P2 Vue</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link active" aria-current="page" to="/about">Store</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link active" aria-current="page" to="/login">Login</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-link active" aria-current="page" to="/game">Game</RouterLink>
          </li>
          <RouterLink class="nav-link active" aria-current="page" to="/storage"
            >Your Storage</RouterLink
          >
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            v-model="pesquisa"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" @click="getMeal(pesquisa)" type="button">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
