import { PressCard } from "./PressCard";


const data = [
    {
        "id": 1,
        "imgURL": "",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96.",
        "title": "AvaWatz Patents FALCON, A New Trust Assessment and Auto-Correction for AI Models and Machine Learning",
        "source": "Yahoo Finance",
        "date": "Sep 12, 2023",
        "description": "DALLAS, Sept. 12, 2023 /PRNewswire/ -- AvaWatz Company AvaWatz, a technology company that supports collaboration among robots, is pleased to announce the filing of another patent application with the United States Patent and Trademark Office (USPTO). The patent application, titled Systems and Methods for Trust-Aware Error Detection, Correction, and Explainability in Machine Learning and Computer Vision, introduces the AvaWatz approach to make Machine learning and deep learning models more trustworthy and reliable.",

    },
    {
        "id": 2,
        "imgURL": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/041/137/41137-1708026267-6f1481f4ed3d400957520aa9ca280ca363dff64b.",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/137/41137-1708026267-b8b25c8947d0e72efc2831187ba286421ede46d6.",
        "title": "The Startup Pioneering The All-Robot Workforce With Collaborative Drones and Robots",
        "source": "Benzinga",
        "date": "May 22, 2023",
        "description": "On the surface, everything about AvaWatz sounds like something out of a science fiction movie. Through the use of decision intelligence, the companys platform allows robots to collaborate and work together to accomplish tasks.",
    },
    {
        "id": 3,
        "imgURL": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/041/134/41134-1708026180-e19aaa91a89a0993fd73a78659546cdcd4107493.",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96.",
        "title": `AvaWatz Patents a Solution for Efficient, Cost-Effective ...`,
        "source": "Yahoo Finance",
        "date": "May 17, 2023",
        "description": `AvaWatz Company, ("AvaWatz"), a technology company that supports collaboration among robots, is pleased to announce the f...`,
    },
    {
        "id": 4,
        "imgURL": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/041/141/41141-1708027464-c94afc78919c98dd8ef10df68b4c8c33f3655a70.",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96.",
        "title": `Is This A Robotics Company With No True Competitors? Meet...`,
        "source": "Yahoo Finance",
        "date": "Oct 21, 2022",
        "description": `By Faith Ashmore, Benzinga`,
    },
    {
        "id": 5,
        "imgURL": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/041/141/41141-1708027464-c94afc78919c98dd8ef10df68b4c8c33f3655a70.",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96.",
        "title": `AvaWatz: Building Collaborative Teams Of Robots For The B...`,
        "source": "Yahoo Finance",
        "date": "Oct 12, 2022",
        "description": `Benzinga Digital Content Studio`,
    },
    {
        "id": 6,
        "imgURL": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/041/134/41134-1708026180-e19aaa91a89a0993fd73a78659546cdcd4107493.",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/135/41135-1708026211-8b6aff9acb4019d5e44383f9a4e911c15dc0aa96.",
        "title": `AvaWatz Awarded Contract by U.S. Department of Homeland Security for Trusted AI Solution GENIE`,
        "source": "Yahoo Finance",
        "date": "",
        "description": `AvaWatz Company ("AvaWatz"), a leading-edge AI company at the forefront of collaborative robotics, proudly announces that it has been awarded a contract by the U.S. Department of Homeland Security (DHS) for its Trusted AI product GENIE, codenamed "Clarifier". This contract underscores the recognition of GENIE's unparalleled capabilities in addressing fundamental challenges in machine learning (ML) and its potential to revolutionize critical sectors.`,
    },
    {
        "id": 7,
        "imgURL": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/041/139/41139-1708026510-f1b700d330b5204a4abdb31ea5f219edaab055d1.",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium_2x/000/041/139/41139-1708026510-73a7674cf9de0d3a808bdeafe70cb592fa4017be.",
        "title": `Driving the Future of Safe Robotics`,
        "source": "KingsCrowd",
        "date": "",
        "description": `Discover AvaWatz's journey under CEO Rajini Anachi, where advanced robotics meets human ingenuity. Learn about their mission to increase human safety in various sectors through AI-powered robotic solutions.`,
    },
    {
        "id": 7,
        "imgURL": "https://uploads.republic.com/p/embedly_extracts/images/cover_small/000/041/138/41138-1708026387-c9345c4746bf47e07ad7df1688f69cd1a4864799.",
        "iconURL": "https://uploads.republic.com/p/embedly_extracts/favicons/medium/000/041/138/41138-1708026387-90122d803dc4bf6f99d676e07dd9e1c4ad46609f.",
        "title": `AvaWatz: Revolutionizing Transit, Flightline, and Surveillance with Robotics`,
        "source": "Siliconindia",
        "date": "",
        "description": `AvaWatz, a next-generation AI decision intelligence company, provides an innovative solution to the problem of hazardous material removal by implementing robot teams. The firm employs aerial robots to detect hazardous materials on runways and subsequently deploys ground robots to remove the debris from the locations identified by the aerial robots. This approach allows diverse robotic agents to collaborate effectively, enabling them to accomplish more intricate tasks. Furthermore, AvaWatz’s product platform enables teams of mobile robotic agents to work independently or alongside human partners to perform complex, multi-part tasks that are difficult, dangerous, or tedious for humans.`,
    },
    
]

export function Press() {
    return (
        <div className="flex flex-col justify-center items-center pt-[45px] border-b pb-[30px]">
            <div className="text-[#666] text-2xl font-extrabold ">Press</div>
            <hr className="w-[40px] h-[2px] mx-auto  border-0 rounded mt-[10px] mb-[34px] dark:bg-blue-700"></hr>
            <div className="grid grid-cols-3 gap-[20px]">
                {data.map((item) => {
                    return <div key={item.id} >
                        <PressCard 
                            imgURL={item.imgURL}
                            iconURL={item.iconURL}
                            title={item.title.slice(0, 57)}
                            source={item.source}
                            date={item.date}
                            description={item.description.slice(0, 121)}
                        />
                    </div>
                })}
            </div>
        </div>
    )
}