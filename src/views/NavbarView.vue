<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
export default {
  data() {
    return {
      navigation: [
        { name: 'Home', href: '/', current: true },
        { name: 'Utilities', href: '/utilities', current: false },
        { name: 'Notes', href: '/notes', current: false },
        { name: 'Games', href: '/games', current: false },
        { name: 'About', href: '/about', current: false },
      ],
    };
  },
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
  },
  beforeMount() {
    this.$store.commit('applyTheme');
  },
  watch: {
    $route() {
      this.navigation.map((navmenu) => {
        if (this.$route.path === navmenu.href) {
          navmenu.current = true;
        } else {
          navmenu.current = false;
        }
      });
    },
  },
};
</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="dark:bg-gray-800 shadow-md" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              z-40
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              dark:text-gray-100
              text-gray-900
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/">
              <img
                class="block h-8 w-auto"
                :src="$store.state.darkLightTheme.logo"
                alt="Workflow"
              />
            </router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'dark:text-gray-100 text-gray-800 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <button class="mr-3" @click="$store.commit('changeTheme')">
            <svg
              v-if="$store.state.darkLightTheme.themeColor === 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>

          <span class="dark:text-gray-100 text-gray-900 font-bold">{{
            new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}</span>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton>
          <router-link
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :to="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-800 dark:text-gray-100 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </router-link>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
