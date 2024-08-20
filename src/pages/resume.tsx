import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import "./index.css"
import photo from "../images/photo.jpg";

type SkillRating = number

function renderStars(starRating: number) {
    if (starRating <= 0) {
        return <span className="fa fa-star-o"></span>;
    } else if (starRating === 0.5) {
        return <span className="fa fa-star-half-o"></span>;
    } else {
        return <span className="fa fa-star"></span>;
    }
}

function renderSkill({name, rating}: Skill) {
    return <div className="skill">
        <span>{name}</span>
        <div className="rating">
            {renderStars(rating)}
            {renderStars(rating - 1)}
            {renderStars(rating - 2)}
            {renderStars(rating - 3)}
            {renderStars(rating - 4)}
        </div>
    </div>;
}

type Skill = { name: string, rating: SkillRating }
const skill = (name: string, rating: SkillRating): Skill => ({name, rating});

const programmingLanguages: Skill[] = [
    skill("Java", 5),
    skill("Kotlin", 4.5),
    skill("Scala", 4),
    skill("Javascript", 4),
    skill("Typescript", 4),
    skill("PHP", 5),
    skill("Bash", 3),
    skill("SQL", 5),
    skill("CSS", 4),
    skill("Groovy", 3),
]

const databases: Skill[] = [
    skill("MySQL", 5),
    skill("PostgreSQL", 4.5),
    skill("Oracle", 4),
    skill("MSSQL", 4),
    skill("DB2", 4),
    skill("MongoDB", 4),
    skill("Elasticsearch", 3.5),
    skill("BerkeleyDB", 3),
    skill("Redis", 3),
]

const frameworks: Skill[] = [
    skill("Spring", 5),
    skill("Spring Boot", 5),
    skill("GWT", 5),
    skill("Express.js", 4),
    skill("NestJS", 3.5),
    skill("ReactJS", 4),
    skill("Angular", 3.5),
    skill("Vue", 3),
    skill("JSF", 4),
    skill("Swing", 3.5),
    skill("Zend", 4.5),
    skill("Akka", 3.5),
    skill("Kafka", 4),
    skill("GraphQL", 3),
]

const libraries: Skill[] = [
    skill("JUnit", 5),
    skill("Hibernate", 5),
    skill("JDBC", 5),
    skill("JPA", 5),
    skill("MyBatis", 4),
    skill("Flyway", 5),
    skill("Node.js", 4.5),
    skill("JQuery", 4.5),
]

const devOps: Skill[] = [
    skill("Kubernetes", 5),
    skill("Docker", 5),
    skill("AWS", 4.5),
    skill("GCP", 4),
    skill("Terraform", 3.5),
]

const paradigms: Skill[] = [
    skill("Unit testing", 5),
    skill("Integration testing", 5),
    skill("TDD/BDD", 5),
    skill("Batch Processing", 5),
    skill("REST APIs", 5),
    skill("Distributed TX", 4.5),
    skill("Functional PG", 4.5)
]

type Certification = { name: string, issuer: string, date: string, details?: string, last?: boolean }

const certifications: Certification[] = [
    {
        name: "JSNSD: OpenJS Node.js Services Developer",
        issuer: "The Linux Foundation",
        date: "Jan 2021",
        details: "(LF-bu4q3nie69)",
    },
    {
        name: "Node.js Application Developer",
        issuer: "The Linux Foundation",
        date: "Dec 2020",
        details: "(LF-jo4gaje0f5)",
    },
    {
        name: "Certified Kubernetes Application Developer",
        issuer: "The Linux Foundation",
        date: "Sep 2020",
        details: "(LF-4ane2v4k8b)",
    },
    {
        name: "Docker, Docker Swarm, Kubernetes Course",
        issuer: "Kodekloud",
        date: "Dec 2019 ",
    },
    {
        name: "Functional Programming Principles in Scala",
        issuer: "Coursera",
        date: "Aug 2016",
        details: "(GSU8J25MK55B)"
    },
    {
        name: "Programming Languages",
        issuer: "Coursera",
        date: "Dec 2013",
    },
    {
        name: "Principles of Reactive Programming",
        issuer: "Coursera",
        date: "Dec 2013",
        last: true
    },
]


const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <page size="A4">
                <div className="container">
                    <div className="leftPanel">
                        <img src={photo}/>
                        <div className="details">
                            <div className="item bottomLineSeparator">
                                <h2>
                                    CONTACT
                                </h2>
                                <div className="smallText">
                                    <p>
                                        <i className="fa fa-envelope contactIcon" aria-hidden="true"></i>
                                        <a href="mailto:igor.inas@gmail.com">
                                            igor.inas@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        <i className="fa fa-map-marker contactIcon" aria-hidden="true"></i>
                                        Prešov, Slovakia
                                    </p>
                                    <p>
                                        <i className="fa fa-linkedin-square contactIcon" aria-hidden="true"></i>
                                        <a href="https://www.linkedin.com/in/ygorsk/">
                                            linkedin.com/ygorsk
                                        </a>
                                    </p>
                                    <p className="lastParagrafNoMarginBottom">
                                        <i className="fa fa-github contactIcon" aria-hidden="true"></i>
                                        <a href="https://github.com/ygor-sk/">
                                            github.com/ygor-sk
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="item bottomLineSeparator">
                                <h2>
                                    EDUCATION
                                </h2>
                                <div className="smallText">
                                    <p className="bolded white">
                                        Comenius University, Bratislava
                                    </p>
                                    <p>
                                        2000 - 2006
                                    </p>
                                    <p>
                                        Master's degree in Computer Science
                                        <br/>
                                    </p>
                                    <p>
                                        Parallel and distributed computing, Databases, Compilers
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <h2>
                                    PROGRAMMING LANGUAGES
                                </h2>
                                {programmingLanguages.map(renderSkill)}
                            </div>
                        </div>

                    </div>
                    <div className="rightPanel">
                        <div>
                            <h1>
                                Igor Ináš
                            </h1>
                            <div className="smallText">
                                <h3>
                                    Senior Software Developer
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h2>
                                About me
                            </h2>
                            <div className="smallText">
                                <p>
                                    I have been a Software developer for two decades now.
                                </p>
                                <p>
                                    While in touch with the latest frameworks, I always put emphasis on fundamental
                                    concepts and
                                    best practices in code writing first.
                                    I strive to write maintainable code and follow a strict separation of concerns.
                                    Duplicate or dead code is not an option.
                                </p>
                                <p>
                                    I follow a client-oriented approach, understanding that the client's success is my
                                    own success.
                                </p>
                            </div>
                        </div>
                        <div className="workExperience">
                            <h2>
                                Work experience
                            </h2>
                            <ul>
                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Senior Full-stack Developer (contract)
                </span>
                                        <span>
                  Apr 2024 - Sep 2024
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  DHL (Prague)
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Development of https://www.mydhlfreight.com/
                                        </p>
                                        <ul>
                                            <li>
                                                Development of multiple microservices, back-end REST APIs,
                                                website and administration UIs.
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, Spring Boot, Keycloak, Oracle DB2,
                                            Openshift, React, TypeScript
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Senior Full-stack and DevOps Developer (contract)
                </span>
                                        <span>
                  Oct 2021 - Mar 2024
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  Endeavor Streaming
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Providing Live streaming and VOD services, with focus on transcoding
                                            software and
                                            deployment to multiple clouds.
                                        </p>
                                        <ul>
                                            <li>
                                                Developed a set of microservices and back-end REST APIs, which allowed
                                                the
                                                management of streaming of events, primarily sports events.
                                            </li>
                                            <li>
                                                Designed and developed an ecosystem that allowed the launch of stateful
                                                instances of
                                                streaming encoding software in Amazon EC2 and various Kubernetes
                                                clusters (EKS, GKE,
                                                custom).
                                            </li>
                                            <li>
                                                Maintained Terraform configuration of various Kubernetes clusters.
                                            </li>
                                            <li>
                                                Contributed to React/Angular UI that allowed operators to manage the
                                                streaming of
                                                events.
                                            </li>
                                            <li>
                                                Documented API contracts, designs, design decisions, and handbooks.
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, Spring Boot, Scala, Akka,
                                            MySQL, PostgreSQL, Hibernate, MyBatis, Flyway,
                                            Amazon Web Services (AWS), Amazon EC2, Google Cloud Platform (GCP), Google
                                            Kubernetes
                                            Engine (GKE), Kubernetes, Amazon EKS,
                                            AWS CodeBuild, Terraform,
                                            Wowza, Video Streaming,
                                            Angular, React, TypeScript, FFmpeg, Bash
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Senior Full-stack Developer (contract)
                </span>
                                        <span>
                  Oct 2020 - Oct 2021
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  Yara International
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Agriculture company, manufacturing crop fertilizers.
                                            Providing online services for farmers, satellite imaging, assisting in
                                            application of
                                            fertilizers
                                        </p>
                                        <ul>
                                            <li>
                                                Built back-end REST and GraphQL APIs for the client's application that
                                                helps farmers
                                                manage farms, fields, and fertilizers.
                                            </li>
                                            <li>
                                                Created the supporting microservices, e.g., email notifications.
                                            </li>
                                            <li>
                                                Developed the Forest Admin GUI panel, used by the customer support team.
                                            </li>
                                            <li>
                                                Performed ad-hoc DevOps tasks in AWS, mainly Kubernetes and CircleCI.
                                            </li>
                                            <li>
                                                Migrated parts of legacy SpringBoot code into multiple NestJS
                                                microservices.
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, Spring Boot, TypeScript, NestJS,
                                            MongoDB, DocumentDB, PostgreSQL, Flyway,
                                            Test-driven Development (TDD), JUnit, Integration Testing,
                                            JSON REST APIs,
                                            Mailchimp, Mandrill,
                                            Apache Kafka, Project Lombok,
                                            GraphQL, Apollo Server,
                                            Amazon Web Services (AWS), Amazon Cognito, Amazon CloudFront CDN, Amazon S3
                                            (AWS S3),
                                            Amazon Route 53,
                                            AWS IAM, Kubernetes, JVM, Amazon Cognito User Pools, REST APIs
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </page>
            <page size="A4">
                <div className="container">
                    <div className="leftPanel">
                        <div className="details">
                            <div className="item bottomLineSeparator">
                                <h2>
                                    DATABASES
                                </h2>
                                {databases.map(renderSkill)}
                            </div>
                            <div className="item bottomLineSeparator">
                                <h2>
                                    FRAMEWORKS
                                </h2>
                                {frameworks.map(renderSkill)}
                            </div>
                            <div className="item">
                                <h2>
                                    LIBRARIES
                                </h2>
                                {libraries.map(renderSkill)}
                            </div>
                        </div>
                    </div>
                    <div className="rightPanel">
                        <div className="workExperience">
                            <ul>
                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Java, React, Typescript developer (freelance)
                </span>
                                        <span>
                  Jan 2020 - Sep 2020
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  Heatcraft Refrigeration Products
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Created website and product catalog for a company selling refrigeration
                                            products.
                                        </p>
                                        <ul>
                                            <li>
                                                Built customized solution using DotCMS, Bootstrap, JQuery.
                                            </li>
                                            <li>
                                                Imported product data from parsed Excel files or from crawled web pages.
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, DotCMS, Velocity, Node.js, Typescript, Docker, JQuery, React, MongoDB
                                        </p>
                                    </div>
                                </li>


                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Web and Back-Office Developer (freelance)
                </span>
                                        <span>
                  Jun 2019 - Aug 2020
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  Brisbane Capital Pty Ltd
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Private company providing injury related loans to clients.
                                        </p>
                                        <ul>
                                            <li>
                                                Maintained back-office application for management of loans and clients.
                                            </li>
                                            <li>
                                                Maintained and developed an online application portal for loan requests.
                                            </li>
                                            <li>
                                                Delivered ad-hoc reports.
                                            </li>
                                            <li>
                                                Developed new Angular/Express website.
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, J2EE, JSF,
                                            MySQL, MongoDB,
                                            Angular, Node.js, Express, Typescript,
                                            Docker, Docker Compose
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Kotlin Team Lead (contract)
                </span>
                                        <span>
                  Jan 2019 - Dec 2019
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  Hong Kong Standard Chartered Bank
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Development of new online banking application.
                                        </p>
                                        <ul>
                                            <li>
                                                Implemented multiple micro services, exposed and consumed REST APIs,
                                                backed by Kafka
                                                asynchronous communication
                                            </li>
                                            <li>
                                                Ensured high unit test coverage and integration testing.
                                            </li>
                                            <li>
                                                Integration with 3rd party bank and payment service APIs
                                            </li>
                                            <li>
                                                Served as the team lead and provided code reviews.
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Kotlin, Gradle, Spring Boot, JPA, Kafka, Spring Kafka
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  PHP senior developer/designer/team lead (contract)
                </span>
                                        <span>
                  Jun 2014 - Sep 2018
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  V-Lottery Systems GmbH
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Austrian company developing land-based and online gambling software.
                                            Development of two online gambling websites.
                                        </p>
                                        <ul>
                                            <li>
                                                Taking development over from a former development team
                                            </li>
                                            <li>
                                                Major cleanup, removing massive amount of duplicate code
                                            </li>
                                            <li>
                                                Developing large number of ad-hoc new features, mostly backend,
                                                occasionally
                                                frontend
                                            </li>
                                            <li>
                                                Deploying new features while maintaining virtually zero downtime
                                            </li>
                                            <li>
                                                Development and securement of financial transactions, online payments
                                            </li>
                                            <li>
                                                Development of high volume remote financial transaction API
                                            </li>
                                            <li>
                                                Establishing data retention procedures
                                            </li>
                                            <li>
                                                Code review and mentoring of junior developers
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            PHP, Zend Framework, Composer,
                                            HTML, JavaScript, JQuery, Vue.js,
                                            MySQL Enterprise Edition 5.7, Data replication,
                                            Centos 6,7, Apache HTTP Server, Redis, Docker,
                                            Scala, Akka
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Senior Java, J2EE software engineer
                </span>
                                        <span>
                  Jan 2010 - Jun 2014
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  Swiss Re, Bratislava
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Swiss reinsurance company with branches in USA, UK, India and Slovakia.
                                            Implementation of a proprietary data-store.
                                            Batch processing of financial data.
                                        </p>
                                        <ul>
                                            <li>
                                                Migration of existing solution from COBOL to Java, improvement and
                                                consolidation
                                            </li>
                                            <li>
                                                Full responsibility for design and implementation of new solution
                                            </li>
                                            <li>
                                                Performance improvements, parallelization
                                            </li>
                                            <li>
                                                Testing, release planning, documentation
                                            </li>
                                            <li>
                                                Improvement of end-user experience by introducing web and desktop GUI
                                                interfaces
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, J2EE Application Development, Spring, Enterprise JavaBeans (EJB),
                                            Hibernate, Java
                                            Swing,
                                            Batch Processing,
                                            IBM Websphere,
                                            IBM z/OS Websphere with Compute Grid,
                                            IBM z/OS DB2,
                                            IBM Mainframe (z10, z196)
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </page>
            <page size="A4">
                <div className="container">
                    <div className="leftPanel">
                        <div className="details">
                            <div className="item bottomLineSeparator">
                                <h2>
                                    DEVOPS
                                </h2>
                                {devOps.map(renderSkill)}
                            </div>
                            <div className="item bottomLineSeparator">
                                <h2>
                                    PARADIGMS
                                </h2>
                                {paradigms.map(renderSkill)}
                            </div>
                        </div>
                    </div>
                    <div className="rightPanel">
                        <div className="workExperience">
                            <ul>
                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  JAVA, J2EE developer/designer
                </span>
                                        <span>
                  May 2007 - Oct 2009
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  FINAMIS, Bratislava
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Austrian company with branches in Austria, Germany, Slovakia and Bulgaria.
                                            Development of portfolio management and banking software.
                                        </p>
                                        <ul>
                                            <li>
                                                Development of a legacy thick GUI client, J2EE backend.
                                            </li>
                                            <li>
                                                Development of backend services using Rational Software development.
                                            </li>
                                            <li>
                                                Designed new GWT web client and custom GUI libraries
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, JBoss Application Server, J2EE, EJB,
                                            Hibernate, Microsoft SQL Server, Oracle, PostgreSQL,
                                            JSF, Java Swing, GWT, HTML, CSS
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Junior Java Developer
                </span>
                                        <span>
                  Oct 2004 - Jul 2006
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  Siemens Enterprise Communications, Bratislava
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            My first Java job. I worked part time, while also finishing my university
                                            studies.
                                            I learned from the very best Java specialists and got exposed to the
                                            business side of
                                            the project early.
                                        </p>
                                        <ul>
                                            <li>
                                                Identity Management, User provisioning, Integration with external legacy
                                                systems
                                                (bank)
                                            </li>
                                            <li>
                                                Development of adapters, consultations and support in designing of
                                                processes/roles/rules
                                            </li>
                                            <li>
                                                Billing systems for telecommunications
                                            </li>
                                            <li>
                                                Providing extended middleware for billing systems infrastructure, AAA
                                                servers
                                            </li>
                                            <li>
                                                Systems optimization and verification
                                            </li>
                                            <li>
                                                Development of management tools (JMX)
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            Java, J2EE, Java Swing,
                                            Java Message Service (JMS),
                                            Oracle, PostgreSQL, Hibernate, Berkeley DB,
                                            IBM DB2, JMX, Java Networking, Profiling Tools,
                                            Identity and Access Management (IAM), Sun One
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div className="jobPosition">
                <span className="bolded">
                  Junior PHP programmer (traineeship)
                </span>
                                        <span>
                  Mar 2004 - Sep 2004
                </span>
                                    </div>
                                    <div className="projectName bolded">
                <span>
                  TURKTICARET.NET A.Ş. Bursa, Turkey
                </span>
                                    </div>
                                    <div className="smallText">
                                        <p>
                                            Turk Ticaret Net was my first IT job.
                                            I traveled abroad to Turkey, where I spent 7 months developing tens of small
                                            websites
                                            for small and middle sized companies.
                                        </p>
                                        <ul>
                                            <li>
                                                Programming of full web frontend and administration backend (PHP/MySQL)
                                                for multiple
                                                websites
                                            </li>
                                        </ul>
                                        <p>
                                            <span className="bolded">Skills: </span>
                                            MySQL, Apache, Server Side, Web Applications, HTML, PHP
                                        </p>
                                    </div>
                                </li>

                            </ul>
                            <h2>
                                Certifications
                            </h2>
                            <ul>
                                {certifications.map(certification =>
                                        <li last={certification.last ? 1: false}>
                                            <div className="jobPosition">
                <span className="bolded">
                    {certification.name}
                </span>
                                                <span>
                  {certification.date}
                </span>
                                            </div>
                                            <div className="projectName bolded">
                <span>
                  {certification.issuer}
                </span>
                                            </div>
                                            <div className="smallText">
                                                <p>
                                                    {certification.details}
                                                </p>
                                            </div>
                                        </li>
                                )}


                            </ul>
                        </div>
                    </div>
                </div>
            </page>
        </>
    )
}

export default IndexPage

export const Head: HeadFC = () => <>
    <title>Resume</title>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Julius+Sans+One&family=Open+Sans&family=Source+Sans+Pro&display=swap"
        rel="stylesheet"/>
</>
