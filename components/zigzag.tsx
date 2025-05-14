import Image from 'next/image'

import FeatImage01 from '@/public/images/visulization1.png'
import FeatImage02 from '@/public/images/visulization2.png'
import FeatImage03 from '@/public/images/Wildfire_across.png'

export default function Zigzag() {

  return (
    <section>
      {/* <div>
        {figure && <Plot data={figure.data} layout={figure.layout} />}
      </div> */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-15 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-5 text-green-600 bg-green-200 rounded-full mb-4">Data Visualization</div>
            <h1 className="h2 mb-4"></h1>
            <p className="text-xl text-gray-400">This dataset was created based on Remote Sensing data to predict the occurrence of wildfires. It contains Data related to:
              <br></br> <b>1. the state of crops (NDVI: Normalized Difference Vegetation Index),
                <br></br> 2. meteorological conditions (LST: Land Surface Temperature)
                <br></br> 3. the fire indicator “Thermal Anomalies”.
                <br></br> 4. the corresponding class (fire or no_fire)</b>
              <br></br> All three parameters were collected from MODIS (Moderate Resolution Imaging Spectroradiometer), an instrument carried on board the Terra platform.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 className="h3 mb-3">Scatter plot of NDVI and LST</h3>
                  <p className="text-xl text-gray-400 mb-4">The Data contains parameters with high influence of wildfires occurrence collected using remote sensing.
                    <br></br>The Dataset contains: </p>

                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>804 rows: 386 instances of the class “fire” </span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span> 418 rows: 418 instances of the class “no fire” </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 className="h3 mb-3">Box plot of NVDI by Class</h3>
                  <p className="text-xl text-gray-400 mb-4">The data were downloaded from the official website of NASA's Land Processes Distributed Active Archive Center (LP DAAC).<br></br>
                    The study area is composed of multiple zones located in the center of Canada. The surface of this area is approximately 2 million hectares. (chosen to apply the experiment in a big region of Canada's forests because it is known for its high rate of wildfires and also for the availability of fire information) </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3">Bubble Map</h3>
                  <p className="text-xl text-gray-400 mb-4">The bubble map of the wildfires across the United States was made with Plotly, a data visualization library for Javascript and other coding languages. The 2022 data was sampled from NASA FIRMS, which utilizes satellite data to detect and monitor active wildfires around the world. The legend on the right shows the three different classes of wildfires (0 being the least severe and 2 being the most severe) by separating them into three categories based on the Fire Radiative Power (FRP). The size of the bubbles show the strength of the wildfire in comparison to the other fires spread over the map.</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
