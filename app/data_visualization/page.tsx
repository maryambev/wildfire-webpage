export const metadata = {
  title: 'Data visualization',
  description: 'Page description',
}

import Link from 'next/link'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function data_visualization() {
  return (
    <section className="relative">
      <Zigzag />
    </section>
  )
}
