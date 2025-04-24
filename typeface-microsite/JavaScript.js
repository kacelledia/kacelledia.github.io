<script>
  document.querySelectorAll('.scattered').forEach(el => {
    const randTop = Math.random().toFixed(2);
    const randLeft = Math.random().toFixed(2);
    el.style.setProperty('--rand-top', randTop);
    el.style.setProperty('--rand-left', randLeft);
  });
</script>