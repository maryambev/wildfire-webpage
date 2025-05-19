'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function MapClient() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-32"></div>

        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
          <div className="md:pl-4 lg:pl-12 xl:pl-16">
            <div className="font-architects-daughter text-xl text-purple-600 mb-2">Ambee</div>
            <h3 className="h3 mb-3">How to use the map</h3>
            <p className="mb-3 text-xl text-gray-400 mb-4">
              Ambee's extensive historical fire data covers the entire North American Region.
              <br /><br />
              1. To find your desired location, simply click and drag on the map. Scroll down to zoom out for a broader view and scroll up to zoom in for a closer look.
              <br />2. Hover your cursor over a fire emoticon to view summarized information.
              <br />3. Clicking on a fire emoticon will open a popup with comprehensive details, including temperature, humidity, wind speed, and other relevant factors contributing to the wildfire.
              <br />4. By default, the map displays data for the last 7 days. To explore a broader timeframe, extend the date range to cover the last 30 days.
              <br />5. Try finding out significant factors for wildfires?
            </p>
          </div>
        </div>

        <Container>
          <div>
            <iframe
              src="https://wildfires.getambee.com/?w=480&h=320"
              width="1100"
              height="1000"
              className="mt-[100px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wildfire Map"
              allowFullScreen
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
