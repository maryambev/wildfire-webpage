import React from 'react';
import { Button, Dropdown, Flex, Tooltip } from 'antd';


export default function Questions() {
 

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-[#801100]">
        <div className="py-12 md:py-20 border-t border-gray-800" >

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Trivia Questions</h2>
            <p className="text-xl">Take the time to learn some cool facts regarding the topic of Wildfires!</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow"> Which is not a type of wildfire? </blockquote>
              <blockquote className="text-lg text-gray-400 grow">a) Surface</blockquote>
              <blockquote className="text-lg text-gray-400 grow">b) Crown </blockquote>
              <blockquote className="text-lg text-gray-400 grow">c) Pleat </blockquote>
              <blockquote className="text-lg text-gray-400 grow">d) Wildland-urban interface </blockquote>
              <blockquote className="text-lg text-gray-400 grow">e) Bush </blockquote>

            
              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "c) Pleat">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>
            
            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Which human activity(s) have been linked to igniting a wildfire? </blockquote>
              <blockquote className="text-lg text-gray-400 grow">a) Cigarette Butts</blockquote>
              <blockquote className="text-lg text-gray-400 grow">b) Fireworks </blockquote>
              <blockquote className="text-lg text-gray-400 grow">c) Campfires </blockquote>
              <blockquote className="text-lg text-gray-400 grow">d) Arson </blockquote>
              <blockquote className="text-lg text-gray-400 grow">e) All of the Above </blockquote>

              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "e) All of the Above">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">In the United States, humans are responsible for starting approximately ______% of wildfires? </blockquote>
              <blockquote className="text-lg text-gray-400 grow">a) 55%</blockquote>
              <blockquote className="text-lg text-gray-400 grow">b) 65% </blockquote>
              <blockquote className="text-lg text-gray-400 grow">c) 75% </blockquote>
              <blockquote className="text-lg text-gray-400 grow">d) 85% </blockquote>
              <blockquote className="text-lg text-gray-400 grow">e) 95% </blockquote>

              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "d) 85%">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">True of False: Human-sparked fires cause more damage than nature induced wildfires? </blockquote>
              <blockquote className="text-lg text-gray-400 grow">True</blockquote>
              <blockquote className="text-lg text-gray-400 grow">False </blockquote>

              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "True">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>

            {/* 5th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">On average how long does a wildfire burn in the US? </blockquote>
              <blockquote className="text-lg text-gray-400 grow">a) 4 days</blockquote>
              <blockquote className="text-lg text-gray-400 grow">b) 15 days </blockquote>
              <blockquote className="text-lg text-gray-400 grow">c) 37 days </blockquote>
              <blockquote className="text-lg text-gray-400 grow">d) 50 days </blockquote>
              <blockquote className="text-lg text-gray-400 grow">e) 100 days </blockquote>
              
              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "c) 37 days">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>

            {/* 6th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow"> Do wildfires only occur in North and South Americas? </blockquote>
              <blockquote className="text-lg text-gray-400 grow">Duh</blockquote>
              <blockquote className="text-lg text-gray-400 grow">No - wildfires only occur in North America</blockquote>
              <blockquote className="text-lg text-gray-400 grow">What world are you living in - wildfires occur all over the world. </blockquote>
              
              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "What world are you living in - wildfires occur all over the world.">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>

            {/* 7th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Fun Fact: These areas have a high affinity for wilfire</blockquote>
              <blockquote className="text-lg text-gray-400 grow">a) Mediterranean Region - countries such as Spain, Portugal, Greece, and Southern Italy</blockquote>
              <blockquote className="text-lg text-gray-400 grow">b) African Savannah - countries such as Kenya, Tanzania, and South Africa  </blockquote>
              <blockquote className="text-lg text-gray-400 grow">c) Australia </blockquote>
              <blockquote className="text-lg text-gray-400 grow">d) Brazil - Amazon Rainforest</blockquote>
              <blockquote className="text-lg text-gray-400 grow">e) Russia - Siberia </blockquote>
              <blockquote className="text-lg text-gray-400 grow">f) USA - California </blockquote>
              <blockquote className="text-lg text-gray-400 grow">g) Indonesia </blockquote>

            </div>

            {/* 8th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">True of False: Humans can take actions to mitigate wilfires? </blockquote>
              <blockquote className="text-lg text-gray-400 grow">True</blockquote>
              <blockquote className="text-lg text-gray-400 grow">False </blockquote>
              
              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "True">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>

            {/* 9th testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">What are actions that humans can partake in that can reduce the occurence of wildfires </blockquote>
              <blockquote className="text-lg text-gray-400 grow">a) properly put out campfires</blockquote>
              <blockquote className="text-lg text-gray-400 grow">b) Cease tossing burning cigarettes on ground</blockquote>
              <blockquote className="text-lg text-gray-400 grow">c) Starting a fire when there is a fire watch </blockquote>
              <blockquote className="text-lg text-gray-400 grow">d) A and B </blockquote>
              <blockquote className="text-lg text-gray-400 grow">e) All of the above </blockquote>
              
              <div className="font-medium mt-6 pt-5 border-t border-gray-700 ">
                <Tooltip title = "d) A and B">
                  <span> 
                    <Button type="primary">
                      See Answer
                    </Button>
                  </span>
                </Tooltip>
              
              </div>
            </div>

 
          </div>

        </div>
      </div>
    </section>
  )
}
