const FlatBannerWhite = `
  <!-- 
    If you also want to use the Same Font then add this css file somewhere in your project
    
    <style>
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&display=swap');
      
      .font-dm-sans {
        font-family: 'DM Sans', sans-serif !important;
      } 

      Then you use this class on banner, "font-dm-sans ...other_classes"
    </style>  
  -->

  <div class="absolute rounded-t-xl top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50">
      <div class="flex items-center mx-auto">
          <p class="flex items-center text-sm font-normal text-gray-500">
              <svg width="24" viewBox="0 0 396 373" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_154_928)">
                      <rect x="45.0411" y="251.708" width="344.05" height="128.79" transform="rotate(-40.9852 45.0411 251.708)" fill="white"></rect>
                      <path d="M53.945 384.491C231.806 354.46 559.969 -1.83851 435.88 121.701C496.935 77.0061 455.167 47.6053 442.002 29.6213C428.837 11.6374 480.478 -50.1587 343.986 51.5696C307.421 57.6232 215.5 261.881 53.945 384.491Z" fill="#00860D"></path>
                      <path d="M354.949 -30.8626C288.811 113.717 -218.431 475.414 61.7232 250.38C12.811 295.173 -105.21 397.475 -115.615 386.114C-126.019 374.752 -62.17 237.136 31.1179 174.491C85.6352 137.882 222.23 87.3948 354.949 -30.8626Z" fill="black"></path>
                      <path d="M174.162 185.41C155.752 304.421 6.6496 532.38 96.828 500.817C64.5866 524.419 -70.2548 318.852 -84.1245 299.905C-97.9943 280.958 -143.351 288.884 -69.9091 237.029C-37.6677 213.427 85.576 245.684 174.162 185.41Z" fill="#DF2935"></path>
                  </g>
                  <defs>
                      <clipPath id="clip0_154_928">
                          <rect width="329.464" height="219.643" fill="white" transform="translate(0 195) rotate(-36.2058)"></rect>
                      </clipPath>
                  </defs>
              </svg>
              <span class="ml-2">We stand with Palestine and human rights. Help Provide Humanitarin Aid to Palestine. <a target="_blank" href="#" class="inline font-medium text-blue-600 underline hover:text-blue-500 decoration-600 decoration-solid transition-all ease-in-out duration-500">Donate</a>
              </span>
          </p>
      </div>
      <div class="flex items-center">
          <button class="flex-shrink-0 inline-flex justify-center w-5 h-5 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 transition-all duration-500 ease-in-out">
              <svg class="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
              </svg>
          </button>
      </div>
  </div>
`

export default FlatBannerWhite