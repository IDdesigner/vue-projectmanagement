<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">B+N</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/about" activeClass="active" tag="li"><a>About</a></router-link>
          <router-link to="/management" activeClass="active" tag="li"><a>Project Management</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <router-link to="/new" activeClass="active" tag="li"><a>New</a></router-link>
          <li class="dropdown">
            <a href="#" 
                  class="dropdown-toggle" 
                  data-toggle="dropdown" 
                  role="button" 
                  aria-haspopup="true" 
                  aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>