


import React from 'react'

import SkillFullItem from '../SkillFullItem'

import {SkillsItemDetailsContainer,SkillsItemHeading,UnOrderedListContainerOfSkill} from './styledComponents'

import './index.css'

const SkillItemFullDetailsList = [
    {
        id : 1,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748436279/22-1024_hcije6.webp",
        name : 'HTML',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."

    },
    {
        id : 2,
        
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748436892/html-css-js-icons-11563328364gmstz4ubs9_oiaa31.png",
        name : 'CSS',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 3,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748437027/470-4707396_javascript-icon-html-css-js-icons_rn8aq5.jpg",
        name : 'JAVASCRIPT',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 4,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748437838/re269re79-react-logo-react-logo-_pmh9n8.png",
        name : 'REACT JS',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 5,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748437940/R_dcxcry.png",
        name : 'BOOTSTRAP',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 6,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438345/sql-database-generic-icon-1521x2048-d0vdpxpg_ppskcp.png",
        name : 'SQL',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 7,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438458/OIP_n7sbva.jpg",
        name : 'PYTHON',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 8,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438570/no6273n057-node-js-logo-nodejs-transparent-logo-google-search_h0v3dc.png",
        name : 'NODE JS',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 9,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748438775/github_b8oa7m.jpg",
        name : 'GIT HUD',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },
    {
        id : 10,
        imageUrl : "https://res.cloudinary.com/dulecuhzf/image/upload/v1748439945/flexbox_hfxxfk.jpg",
        name : 'HTML',
        description : "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It allows developers to define elements such as headings, paragraphs, links, images, and more. HTML provides the foundation for web pages, working alongside CSS and JavaScript to build visually engaging and interactive sites.Every HTML document is made up of elements enclosed in tags, such as &lt;html&gt;, &lt;head&gt;, &lt;body&gt;, and many others. These tags help structure the content in a logical way, making it easier for both users and search engines to understand the webpage."


    },


]

const SkillsItemFullDetails = () => {


  return (

    <SkillsItemDetailsContainer>
    <SkillsItemHeading>Skill Item Full Details</SkillsItemHeading>
    <UnOrderedListContainerOfSkill>


    {SkillItemFullDetailsList.map((eachSkillItemDetails) => (
        <SkillFullItem skillItemDetails = {eachSkillItemDetails} key = {eachSkillItemDetails.id} />
    ))}

    </UnOrderedListContainerOfSkill>

    </SkillsItemDetailsContainer>
  )
}

export default SkillsItemFullDetails
