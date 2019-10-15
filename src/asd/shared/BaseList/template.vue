<template>
  <div>
    <ul
      class="list-icon list-xs"
      v-for="item in items"
      :key="item.id"
    >
      <li>
        <svg class="icon-svg" focusable="false">
          <use :xlink:href="icon"/>
        </svg> {{ item }}
      </li>
    </ul>
  </div>
</template>

<script type="text/babel" src="./script.js"></script>
