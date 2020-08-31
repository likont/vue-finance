<ul class="sidenav app-sidenav open">

  <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active" to="/"
  >
    <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
  </router-link>

</ul>

<script>
  export default {
    data : () => ({
      links: [
        {title: 'Счёт', url: '/'},
        {title: 'История', url: '/history'},
        {title: 'Планирование', url: '/planning'},
        {title: 'Новая запись', url: '/record'},
        {title: 'Категория', url: '/categories'}
      ]
    })
  }
</script>