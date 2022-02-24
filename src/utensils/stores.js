import { writable, readable } from 'svelte/store'
import { quadInOut } from 'svelte/easing'

// Animation timers and easing
export const animationInDelay = readable(300)
export const animationInDuration = readable(300)
export const animationInEasing = readable(quadInOut)

export const animationOutDuration = readable(100)
export const animationOutEasing = readable(quadInOut)

// Menu handling
export const isMenuClicked = writable(false)

export function toggleIsMenuClicked() {
  isMenuClicked.update((n) => !n)
  return
}

// Scroll handling
export const scrollYPosition = writable(0)

// Page handling
export const activePage = writable('')

export function setActivePage(name) {
  activePage.set(name)
  return
}

// Services modal pages handling
export const servicesModalActive = writable('')

export function setServicesModalActive(name) {
  servicesModalActive.set(name)
  if (name !== '') {
    document.body.classList.add('body-is-not-visible')
  } else {
    document.body.classList.remove('body-is-not-visible')
  }
  return
}

export function handleServicesModalClick(name, type) {
  if (name !== null && type !== null) {
    setServicesModalActive(name)

    const currentUrl = document.location.href
    const newUrl = `${window.location.pathname}?name=${name}&type=${type}`

    if (currentUrl !== newUrl) {
      window.history.pushState('', '', newUrl)
    }
  }
  return
}

export function resetServicesModalActive() {
  const newUrl = `${window.location.pathname}`
  window.history.pushState('', '', newUrl)
  setServicesModalActive('')
  return
}

// Services page tab handling
// Music submenu
export const musicActiveTab = writable('mixing')

export function setActiveMusicTab(name) {
  musicActiveTab.set(name)
  return
}

export function handleMusicTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=music&type=${name}`

    window.history.pushState('', '', newUrl)
    setActiveMusicTab(name)
  }
  return
}

// Film submenu
export const filmActiveTab = writable('re-recording_mixing')

export function setActiveFilmTab(name) {
  filmActiveTab.set(name)
  return
}

export function handleFilmTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=film&type=${name}`

    window.history.pushState('', '', newUrl)
    setActiveFilmTab(name)
  }
  return
}

// 3D Audio submenu
export const threeDAudioActiveTab = writable('immersive_sound_design')

export function setActiveThreeDAudioTab(name) {
  threeDAudioActiveTab.set(name)
  return
}

export function handleThreeDAudioTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=3d_audio&type=${name}`

    window.history.pushState('', '', newUrl)
    setActiveThreeDAudioTab(name)
  }
  return
}

// Branding submenu
export const brandingActiveTab = writable('sonic_logo')

export function setActiveBrandingTab(name) {
  brandingActiveTab.set(name)
  return
}

export function handleBrandingTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?name=branding&type=${name}`

    window.history.pushState('', '', newUrl)
    setActiveBrandingTab(name)
  }
  return
}

// Work modal pages handling
export const workModalActive = writable('')

export function setWorkModalActive(name) {
  workModalActive.set(name)
  if (name !== '') {
    document.body.classList.add('body-is-not-visible')
  } else {
    document.body.classList.remove('body-is-not-visible')
  }
  return
}

export function handleWorkModalClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?project=${name}`
    window.history.pushState('', '', newUrl)
    setWorkModalActive(name)
  }
  return
}

export function resetWorkModalActive() {
  const newUrl = `${window.location.pathname}`
  window.history.pushState('', '', newUrl)
  setWorkModalActive('')
  return
}

// Equipment page tab handling
export const equipmentActiveTab = writable('')

export function setActiveEquipmentTab(name) {
  equipmentActiveTab.set(name)
  return
}

export function handleEquipmentTabClick(name) {
  if (name !== null) {
    const newUrl = `${window.location.pathname}?type=${name}`
    window.history.pushState('', '', newUrl)
    setActiveEquipmentTab(name)
  }
  return
}

// About us page handling
export const aboutUsActiveItem = writable('')

export function setAboutUsActiveItem(name) {
  aboutUsActiveItem.set(name)
  return
}

export function handleAboutUsItemClick(name) {
  const newUrl = `${window.location.pathname}?name=${name}`
  window.history.pushState('', '', newUrl)
  setAboutUsActiveItem(name)
  return
}
