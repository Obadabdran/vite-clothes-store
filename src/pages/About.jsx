import pic_01 from "../assets/gro.webp"
import pic_02 from "../assets/cam.webp"
import { useEffect } from "react"


const About = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <div className="px-16">
        <div className=" border-t-2 mt-4 mb-8">
            <div className="flex justify-center mt-12 text-teal-900 font-cinzel mb-12"><span className=" text-2xl md:text-6xl">About Mollyjogger</span></div>
            <div className="flex flex-col md:flex-row space-x-6">
                <div className="flex flex-col ">
                    <h2 className="flex justify-center mb-6 font-cinzel text-stone-400 text-xl md:text-2xl">Our Story</h2>
                    <div className="flex justify-center  items-center w-full md:w-[500px]">
                        <p className=" text-center font-garmond text-lg text-stone-600 mx-0 md:mx-4">Mollyjogger,® is an authentic heritage brand, based in the Ozark Mountains, celebrating the region’s unique history of outdoor recreation and folklore.
                         Adopting the name Mollyjogger from the original Mollyjoggers Fishing & Hunting Club, 
                         circa 1890; their Spring and Fall excursions included wagons loaded with provisions,
                          bird dogs and a camp cook. Members filled their days with hunting and fishing, 
                          and evenings with campfire tales.
                        </p>
                    </div>
                </div>
                <img src={pic_01} className="w-[700px] h-[400px]"/>
            </div>
              <div className="flex flex-col md:flex-row">
                  <img src={pic_02} className="w-[400px] " />

                  <div className="flex  md:flex-row   font-medium mt-8 justify-start  md:ml-8">
                      
                          <div className="border-l-4 border-teal-900 h-48 md:h-28 mr-4 md:mr-2 md:ml-12 mt-1 "></div>
                         <div className=""> 
                          <p className="w-[300px] md:w-[500px] font-cinzel">Each were highly respected business men,
                              yet as a whole were good naturedly regarded as a no-account,
                              fun-loving, hard-drinking minnow tribe.
                              They called themselves The Mollyjoggers.
                          </p>
                          <h1 className="font-cinzel">— Cheri Lungstrum</h1>
                          </div>
                  </div>
              </div>
            <div className=" flex justify-center mt-8">
                <p className="w-[800px] font-garmond text-lg text-stone-700 leading-10">
                Considerable curiosity has often been expressed why the name of “Mollyjoggers” was adopted by this club. Like the odd and catchy names of other associations, formed for either business or pleasure, it was merely a matter of accident. The club was camped at one time at what is known as Gibson hole, and were celebrating the feast day of the week—Friday, when they were joined by a neighboring mountaineer, who came to spend the evening. He was made to feel at home, invited to participate in the many good things to eat and drink, and hugely enjoyed the fun and good stories. Late in the evening, as he was about to depart for home, he stepped in the tent door and addressed his host as follows:

“I’ve knowned you ’uns fer many a year in your stores in town, and never ’lowed they wus any fun in ye, but out here on the crick ye are jest like a lot of Mollyjoggers.”

For those who are not familiar with the different species of the finny tribe found in the Ozarks streams, it will perhaps be interesting to know that there is a minnow inhabiting these waters—a horny-headed, spotted fellow, who is absolutely worthless, not even tempting the versatile appetite of gars and turtles when used as bait, and this fish is called by the natives the “mollyjogger.” What the old mountaineer said that evening struck home, and the name was adopted at once.

<br/>— John Dunckel, circa 1905
                </p>
            </div>
        </div>
    </div>
  )
}

export default About