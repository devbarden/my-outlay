export default {
  name: 'BaseIconLink',
  props: {
    link: {
      type: String,
      required: true,
      validator: (str) => str.length > 0,
    },
    // icon: {
    //   type: String,
    //   required: true,
    //   validator: (str) => str.length > 0,
    // }
  },
}
