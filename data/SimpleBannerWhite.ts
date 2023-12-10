const SimpleBannerWhite =  `
  <!-- 
  If you also want to use the Same Font then add this css file somewhere in your project
    <style>
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&display=swap');
      
      .font-dm-sans {
        font-family: 'DM Sans', sans-serif;
      } 
    </style>  
  -->

  <div class="relative isolate flex rounded-t-xl items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <svg width="26" viewBox="0 0 53 40" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_259_6555)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00195312 0H53.0007V13.3359H-0.00195312V0Z" fill="black"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00195312 13.3359H53.0007V26.6641H-0.00195312V13.3359Z" fill="white"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00195312 26.6641H53.0007V40H-0.00195312V26.6641Z" fill="#009900"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.00195312 40L29.8105 20L-0.00195312 0V40Z" fill="#FF0000"></path>
              </g>
              <defs>
                  <clipPath id="clip0_259_6555">
                      <path d="M0 4C0 1.79086 1.79086 0 4 0H49C51.2091 0 53 1.79086 53 4V36C53 38.2091 51.2091 40 49 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="white"></path>
                  </clipPath>
              </defs>
          </svg>
          <p class="text-sm leading-6 text-gray-900 font-medium">We stand with Palestine and human rights. Help Provide Humanitarin Aid to Palestine.</p>
          <a href="#" target="_blank" class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm  text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all ease-in-out duration-500">Donate<span aria-hidden="true"> →</span>
          </a>
      </div>
      <div class="flex flex-1 justify-end -m-3 p-3">
          <button type="button" class="focus-visible:outline-offset-[-4px] p-.5 hover:bg-[#00000010] rounded-full transition-all ease-in-out duration-500">
              <svg class="h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
              </svg>
          </button>
      </div>
  </div>
`

export default SimpleBannerWhite