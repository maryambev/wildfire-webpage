import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Image from 'next/image'
import FeatImage01 from '@/public/images/california_fire.png'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div>
            <Container>
              <iframe
                width="700" height="415"
                src="https://www.youtube.com/embed/5hghT1W33cY?si=ZmmR-2Ndg7rbOsVo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{ display: 'block', margin: 'auto', marginTop: '-130px', marginBottom: '100px' }}
                // loading="lazy"
                allowFullScreen>
              </iframe>
            </Container>
            <div className="mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Wildfires are becoming more prevalent around the world.</h2>
              <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">According to data provided by the National Park Service, humans cause about 85 percent of all wildfires yearly in the United States.</p>
            </div>
          </div>

          {/* Graphs */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            <h3 className="h3 mb-3">4.5 million U.S. homes are at high or extreme risk from wildfires, with over 2 million in California alone. </h3>
            <p className="text-xl text-gray-400 mb-2"> As climate change continues to worsen, California's hot and dry summers make the environment more susceptible to wildfires.</p>
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={500} height={505} alt="Features 02" />
          </div>

        </div>
      </div>
    </section>
  )
}
