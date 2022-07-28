const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image':
          "url('https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
      },
    },
  },
  plugins: [],
});
  // content: ['./src/**/*.{js,jsx}'],