import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">

                  <img width="50px" height="50px" src={"/images/fire_protection.svg"} alt="firelogo" />
                </Link>
              </div>
              <div className="text-gray-400">Environmental Data Collection &</div>
              <div className="text-gray-400">Visualization of Wildfires</div>
              <div className="text-gray-400">Comp 484/490 </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1"></h6>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="https://www.getambee.com/api/fire" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Ambee</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0379711218303941" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Fire Safety Journal</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="https://livingatlas.arcgis.com/wildfireaware/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Wildfire Aware - Esri Map</Link>
                   </li>
                   <li className="mb-1">
                   <Link href="https://www.nifc.gov/fire-information/statistics/wildfires" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">National Interagency Fire Center</Link>
                   </li>
                   <li className="mb-1">
                   <Link href="https://www.redcross.org/about-us/our-work/disaster-relief/wildfire-relief.html" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Wildfire Relief</Link>
                   </li>
                  {/* <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li> */}
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between"></div>
        </div>
      </div>
    </footer>
  )
}
