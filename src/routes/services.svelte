<script>
  import { onMount } from 'svelte'
  import { get } from 'svelte/store'
  import { setActivePage, activePage } from '../utensils/stores.js'
  import { updateVHVariable } from '../utensils/utils.js'
  import ServicesContent from '../containers/ServicesContent.svelte'

  onMount(() => {
    updateVHVariable()
    if (get(activePage) !== 'services') {
      setActivePage('services')
    }
  })
</script>

<ServicesContent />
