import image1 from '../images/case2.jpg'
import case2a from '../images/case2a.jpg'
import case2b from '../images/case2b.jpg'

import image2 from '../images/image2.jpg'
import case3a from '../images/case3a.jpg'
import case3b from '../images/case3b.jpg'

import image4 from '../images/image4.jpg'
import case5a from '../images/case5a.jpg'
import case5b from '../images/case5b.jpg'

import image5 from '../images/image5.jpg'
import case6a from '../images/case6a.jpg'
import case6b from '../images/case6b.jpg'


const casestudy = {
  case1: {
    title: "Transition from a Digital Asset Management system to Salesforce Marketing Cloud",
    description: "This case study delves into the seamless process implemented between DAM and Salesforce Marketing Cloud (SFMC) to distribute assets while ensuring metadata integrity and organized storage.",
    backgroundImage: image4,
    brief_description1: "In the modern digital landscape, businesses rely heavily on robust DAM platforms for asset management and Salesforce Marketing Cloud for marketing operations. The challenge was to create a seamless bridge between these platforms to ensure assets' accurate distribution, consistent naming, and comprehensive metadata integration.",
    brief_description2: "Ensure assets distributed from the DAM are accurately stored in SFMC. Maintain consistent asset naming conventions across platforms. Incorporate DAM metadata into SFMC for enhanced asset categorization and searchability. Upon initiating asset distribution from DAM to SFMC, a specific folder is designated in DAM’s order form. This ensures that all assets are systematically stored within the pre-defined SFMC folder, streamlining the asset retrieval process.",
    industry: "Finance",
    location: "UK",
    involvement: "Digital Migration",
    visit: "https://www.salesforce.com/uk/",
    firstimage: case5a,
    secondimage: case5b,
    link: "../salesforce",
    tags: ["Salesforce", "Migration", "Digital Strategy"],
    outcome_description1: "To avoid any naming discrepancies, the asset name provided in the DAM is mirrored in SFMC. In instances where duplicate names exist, SFMC intelligently appends a '(1)' to maintain uniqueness, eliminating potential naming conflicts. One of the critical success factors was the integration of metadata tags from DAM into SFMC. These metadata tags, originally associated with the assets in the DAM, are seamlessly transferred and added as image tags in SFMC. This integration ensures that assets retain their categorization and are easily searchable within the SFMC environment. Beyond basic metadata, the DAM’s additional parameters, including campaign details, audience specifications, and product categories, are embedded into the asset description within SFMC. This enriched description provides a holistic view of the asset's context, aiding marketers in strategic asset utilization.",
    outcome_description2: ["Enhanced Efficiency: The streamlined process reduced manual interventions, minimizing errors, and accelerating asset distribution timelines.", "Metadata Consistency: By maintaining metadata integrity across platforms, asset categorization and retrieval became more efficient within SFMC.", "Improved Collaboration: The seamless integration fostered better collaboration between teams using the DAM and SFMC, enhancing overall marketing operations."]
  },
  case2: {
    title: "Driving Operational Excellence at FarFill through Product Management Transformation",
    description: "This case study delves into our transformative journey with FarFill, focusing on product management enhancements that catalyzed operational excellence.",
    backgroundImage: image5,
    brief_description1: "FarFill's internal processes, while robust, showcased areas ripe for refinement. Inventory Management: Challenges in real-time tracking and forecasting. Product Launches: Delays and inefficiencies in the new product introduction process. Communication Gaps: Siloed departments leading to disjointed workflows.",
    brief_description2: "Streamline inventory management for enhanced agility, accelerate the product launch timeline while ensuring quality and foster cross-departmental collaboration and communication.",
    industry: "eCommerce",
    location: "UAE",
    involvement: "Product Transformation",
    visit: "https://farfill.co.uk/",
    firstimage: case6a,
    secondimage: case6b,
    link: "../farfill",
    tags: ["Innovation", "eCommerce", "Product Management"],
    outcome_description1: ["Phase 1 (Diagnostic Deep Dive): Before prescribing solutions, we immersed ourselves in FarFill's ecosystem. We conducted stakeholder interviews, analyzed existing processes and identified bottlenecks and benchmarked against industry best practices.", "Phase 2 (Strategy and Implementation): Armed with insights, we crafted a tailored product management strategy. We also implemented a real-time tracking system with predictive analytics. For instance, integrating IoT sensors in storage areas provided live inventory updates, reducing stockouts by 40%. Our team introduced a phased launch approach. For the new SwiftShip service, we divided the launch into teaser campaigns, pre-launch events, and the grand reveal, leading to a 30% increase in early sign-ups compared to previous launches. Finally, we rolled out a unified communication platform, integrating tools like Slack and Asana, ensuring seamless information flow across departments.", "Phase 3 (Training and Ongoing Tracking): We conducted training sessions to familiarize teams with new tools and processes. We also established key performance indicators (KPIs) to track progress. For instance, we monitored inventory turnover rates and launch timelines closely."],
    outcome_description2: ["Inventory Turnaround: Reduced lead times by 25%, optimizing storage costs and minimizing waste.", "Product Launch Efficiency: Achieved a 15% faster time-to-market for new services, enhancing FarFill's competitive positioning.", "Team Collaboration: Fostered a culture of collaboration, with inter-departmental meetings becoming more frequent and productive."]
  },
  case3: {
    title: "Building an Asana Plugin for Business Digital Roadmap Creation",
    description: "Developed a custom Asana plugin for businesses to streamline the creation and management of digital roadmaps.",
    backgroundImage: image1,
    brief_description1: "Orca Digital partnered with Luuby, a technology-focused company, to design and implement a bespoke Asana plugin.",
    brief_description2: "The solution facilitated efficient digital roadmap planning, task assignment, and progress tracking. The plugin's main objective was to create a shareable, aesthetic roadmap for businesses so they could share upcoming features with their customers and other stakeholders",
    industry: "Technology",
    location: "UK",
    involvement: "Software Development",
    visit: "https://www.luuby.co.uk",
    firstimage: case2a,
    secondimage: case2b,
    link: "../luuby",
    tags: ["Asana Plugin", "Digital Roadmap", "Project Management"],
    outcome_description1: ["Phase 1 (Understand and Define Requirements): During the initial phase, we collaborated closely with Luuby, to meticulously gather and define the requirements for the bespoke Asana plugin. This involved in-depth discussions to ascertain Luuby's specific needs, outlining key functionalities. The project's scope is carefully delineated, establishing clear objectives and deliverables that will guide the subsequent phases of design and development.", "Phase 2 (Design and Development): Moving into the design and development phase, we focused on translating the identified requirements into a comprehensive plan for the Asana plugin. This involved creating an intuitive and aesthetically pleasing user interface (UI) and user experience (UX) design. The development team then diligently implemented the agreed-upon functionalities, ensuring seamless integration with Luuby's systems. Thorough testing was conducted to identify and address any potential bugs, guaranteeing a polished and reliable user experience.", "Phase 3 (Deployment and Collaboration): With the Asana plugin developed and tested, we proceeded to the deployment phase, where the plugin was seamlessly integrated into Luuby's technology infrastructure. Rigorous testing in a live environment was conducted to validate the plugin's functionality and performance. During this phase, close collaboration with Luuby's team was maintained to provide necessary training and support. Post-deployment, ongoing monitoring was established to track the plugin's usage."],
    outcome_description2: [
      "Client Satisfaction and Increased Productivity: The bespoke Asana plugin led to high client satisfaction, with Luuby expressing contentment. Real-time updates and notifications boosted team collaboration, resulting in a 15% productivity increase.",
      "Widening Impact Beyond the Client: The Asana plugin's success extended to other businesses, showcasing its effectiveness and versatility. Various enterprises adopted it for sharing roadmaps, establishing it as a go-to tool for transparency and communication.",
      "Transparency and Efficiency Across Stakeholders: The Asana plugin promoted transparency, allowing effective communication with customers. Shareable roadmaps improved project management efficiency, reducing task completion times by 20% and fostering successful collaborations."
    ]
  },
  case4: {
    title: "Creating an Influencer Marketing Platform for a Global Advertising Agency",
    description: "Designed and developed a robust influencer marketing platform to elevate the advertising agency's global reach.",
    backgroundImage: image2,
    brief_description1: "Orca Digital collaborated with Lolly, a global advertising agency, to create a state-of-the-art influencer marketing platform.",
    brief_description2: "The platform was a SAAS that Lolly was planning to sell to businesses looking to find creators that were relevant to their brand. The client required that this software, although B2B, had a brilliant UX and that it functioned more like a marketplace where creators could also come to look for work.",
    industry: "Marketing",
    location: "UK",
    involvement: "Software Development",
    visit: "https://www.lolly.com/",
    firstimage: case3a,
    secondimage: case3b,
    link: "../lolly",
    tags: ["Influencer Marketing", "Global Reach", "Advertising"],
    outcome_description1: [
      "Influencer Discovery and Matching: The software streamlines the process of finding relevant creators, considering factors such as brand alignment and business life stage. It provides tailored recommendations, suggesting micro-influencers for startups and high-profile names for established brands.",
      
      "Integrated Outreach and Relationship Management: The platform acts as a comprehensive Customer Relationship Management (CRM) system, seamlessly integrating with communication channels like email and SMS. This functionality enhances influencer outreach, making it more efficient and facilitating effective relationship management.",
    
      "Job Management and Collaboration: The software serves as a centralized hub for managing influencer collaborations. It facilitates smooth communication and collaboration between brands and influencers, incorporating features for handling feedback, making changes, and implementing a rigorous approval process to ensure alignment with the brand's vision.",
    
      "Comprehensive Marketing Metrics Reporting: Offering a robust reporting system, the software tracks and analyzes key marketing metrics, including monetary data. Brands gain access to detailed insights into the performance of influencer campaigns, enabling informed decision-making and optimization of future marketing strategies.",
    
      "Creator Portal for Seamless Collaboration: The platform includes a dedicated Creator Portal, empowering influencers to discover collaboration opportunities. Creators can browse and apply for relevant work within the portal, streamlining the connection between brands and influencers and fostering a collaborative ecosystem."
    ],
    outcome_description2: [
      "Client Base Expansion: The software's success is reflected in the client's substantial growth, boasting over 50 clients. This expansion underscores the platform's effectiveness in meeting the diverse needs of a growing client base.",
      
      "Vast Creator Network: With over 1 million creators actively engaged on the platform, the software has successfully attracted a large and diverse community of influencers. This expansive creator network enhances the platform's ability to match brands with the most relevant and influential content creators.",
      
      "Recognition and Awards: The software has garnered industry recognition as an up-and-coming solution, winning awards and receiving positive reviews across various feedback channels, including platforms like G2. This acknowledgment highlights the platform's excellence and positive reception within the competitive software lands."
    ]    
  },
  
};

export default casestudy;

/*
import image from '../images/cover.png'
import case1a from '../images/case1a.jpg'
import case1b from '../images/case1b.png'


import image3 from '../images/image3.jpg'
import case4a from '../images/case4a.jpg'
import case4b from '../images/case4b.jpg'

case1: {
    title: "Crafting a Comprehensive Digital Strategy for a Personalized Running Coach App",
    description: "Crafted a comprehensive digital strategy to enhance the user experience and engagement for a personalized running coach app.",
    backgroundImage: image,
    brief_description1: "Orca Digital collaborated with Runna, a leading health and fitness app, to develop a strategic plan for optimizing their digital presence.",
    brief_description2: "The project involved in-depth analysis, user research, and the implementation of cutting-edge digital solutions to improve overall app performance and user satisfaction.",
    industry: "Health",
    location: "UK",
    involvement: "Digital Strategy",
    visit: "https://www.runna.com",
    firstimage: case1a,
    secondimage: case1b,
    link: "../runna",
    tags: ["Digital Strategy", "User Experience", "Health & Fitness"],
    outcome_description1: "Implemented a personalized content delivery system based on user preferences, resulting in a 30% increase in user engagement.",
    outcome_description2: "Optimized the app's performance, leading to a 25% reduction in bounce rates and improved overall user satisfaction.",
  },
  case4: {
    title: "Pioneering Innovative Features for a Distinctive Energy Company",
    description: "Led the development of innovative features to enhance the digital capabilities of a leading energy company.",
    backgroundImage: image3,
    brief_description1: "Orca Digital collaborated with EON Next, a pioneering energy company, to introduce cutting-edge features for their digital platform.",
    brief_description2: "The project involved extensive user research, software development, and user experience enhancements, positioning EON Next as an industry innovator.",
    industry: "Energy",
    location: "UK",
    involvement: "User Research",
    visit: "https://www.eonnext.com",
    firstimage: case4a,
    secondimage: case4b,
    link: "../eonnext",
    tags: ["Innovation", "Energy Sector", "User Experience"],
    outcome_description1: "Introduced smart energy consumption tracking, allowing users to monitor and optimize their usage, resulting in a 15% reduction in energy consumption.",
    outcome_description2: "Implemented a user-friendly interface, leading to a 20% increase in user satisfaction and a positive response from customers."
  },*/
