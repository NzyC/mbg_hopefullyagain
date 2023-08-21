import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

const filters = [];

function ProjectClassic1() {
    useEffect(() => {
        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            });
        }

        loadScript('./assets/js/masonary.js');
    }, []);

    const projects = [
        {
            image: require('./../../images/our-partners/strong.png'),
            title: 'Simpson Strong-Tie',
            description: `A leader in structural systems research, testing and innovation, Simpson Strong-Tie is one of the world's largest suppliers of structural solutions and building products that help people build safer and stronger structures since 1956.
    
            Simpson Strong-Tie is committed to providing exceptional products and services to its customers, including engineering and field support, product testing and training.`
        },
        {
            image: require('./../../images/our-partners/ekodeck.png'),
            title: 'ECKODECK',
            description: `Ekodeck is Australia’s largest composite decking supplier, with a strong emphasis on quality, finish, customer service and value. We have been pioneers in developing composite materials which not only go the distance, but look great for years to come.
    
            Since 2009 Ekodeck has a proven history of performance in the Australian climate, readily available and guaranteed to impress – Ekodeck is a step ahead.`
        },
        {
            image: require('./../../images/our-partners/tayco.png'),
            title: 'TAYCO ALUMINIUM',
            description: `Tayco Aluminium focuses on your aluminium fabricating needs, wants, styles and designs to provide you a product that meets and where possible excels your expectations. We deliver products that will compliment your home yet meet the safety requirements with a flare that catches your eye.
    
            Products range from - glass and aluminium hand rails - gates and privacy screens - window awnings, shutters and shades - glass pool fencing – in a large range of powder coated colours or a wood grain finish, as well as Automated Aluminium opening pergolas! We specialise in fabricating products that are simple but stylish, to the elaborate and architecturally designed.`
        },
        {
            image: require('./../../images/our-partners/clickdeck.png'),
            title: 'CLICKDECK®',
            description: `The Clickdeck® system is a complete building system that can provide a subfoor solution for decking, tiles , artificial lawn and many more. The versatility of having multiple footing solutions and capabilities in low, mid and elevated installations ensures an all in one solution. Clickdeck is manufactured in Australia from local aluminium providing durability to withstand extreme conditions. Clickdeck® has been Australian engineered and vigorously tested to outperform Australian building standards.`
        },
        {
            image: require('./../../images/our-partners/safestyle.png'),
            title: 'SafeStyle',
            description: `SafeStyle Protective Eyewear was created by a tradie, for the tradies after seeing a gap in the market for stylish & comfortable safety glasses. In 2017, after driving home from a job & noticing himself in the rear vision mirror wearing ‘speed dealers’, Tim went about designing a pair of safeties that can be worn on-site & on the weekend.
    
            These are the first safety glasses that don’t look or feel like ‘safety glasses’ with all the protection, & none of the discomfort. SafeStyle are the safety glasses you’ll never want to take off which helps us fulfill our mission of making the work place look good & feel safe.`
        },
        {
            image: require('./../../images/our-partners/N01.png'),
            title: 'NO1 ROOFING & BUILDING SUPPLIES',
            description: `No 1 Roofing & Building Supplies is one of the largest wholesale suppliers of metal roofing & building products in Sydney. With a proud family history we now have 8 branches servicing our customers in NSW.
            
            We are supported by some of the biggest names in the industry like BlueScope, Lysaght, Colorbond, Velux, Bradford’s Insulation, CSR Gyprock & Fibre Cement, Soudal & Stramit to name a few. In addition to this we manufacture a number of products to support and compliment the range of premium products we offer from our suppliers. We are a service driven company that puts our customers first.
            
            Whether it is a new build, renovation, addition or simply adding a home improvement like a gazebo we have everything under one roof to supply your next project.`
        },
        {
            image: require('./../../images/our-partners/premier.png'),
            title: 'Premier Tapes & Packaging',
            description: `Premier Tapes are an adhesive tape and protective packaging specialist supplying distributors, manufactures & end-users throughout Australia since 1984. We specialise in adhesive tapes for a range of applications & have an extremely strong network of industry experts and suppliers we work closely with including global companies like tesa Tapes, Tenacious Tapes and Optiseal Adhesives. Our ability to customise the range of adhesive tape products to suit a specific clients requirements results in Premier Tapes providing unparalleled levels of service and expertise.`
        },
        {
            image: require('./../../images/our-partners/Mitre_Logo.png'),
            title: 'TRADIFY',
            description: `Tradify is the highest-rated, fast and easy job management app for tradies. Join tens of thousands of electricians, plumbers, gas engineers, HVAC techs, builders, landscapers, and other trade business owners using Tradify to manage their jobs. Available across all your devices — desktop, tablet, iPhone, and Android. Tradify is your all-in-one digital tool for:
            - Quoting, Estimating & Invoicing
            - Online Payments
            - Timesheets
            - Scheduling Staff & Subcontractors
            - Customer Enquiries
            - Text Messages to Customers
            - Job Tracking
            - Website Building
            Find out how Tradify can save you 10+ hours/week of boring admin. Get your life back! Start Your Free 14-Day Free Trial at tradifyhq.com and use code MONUMENTAL50 to get 50% off your first 3 months.`
        },
    ]

    return (
        <>
            <Header />
            <div className="page-content">
                <Banner title="Our Partners" pagename="Partners" />

                {/* SECTION CONTENT START */}
                <div className="section-full p-tb80 bg-gray inner-page-padding">
                    {/* GALLERY CONTENT START */}
                    <div className="container-fluid">
                        {/* PAGINATION START */}
                        <div className="filter-wrap p-b30 text-center">
                            <ul className="filter-navigation inline-navigation masonry-filter link-style text-uppercase">
                                <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                        {/* PAGINATION END */}
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-lg-3 col-md-4 col-sm-6 m-b30`}>
                                    <div className="project-classic">
                                        <div className="mt-box ">
                                            <div className="mt-thum-bx img-center-icon">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="mt-info p-t20">
                                            <h4 className="mt-title m-b20 m-t0">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* GALLERY CONTENT END */}
                </div>
                {/* SECTION CONTENT END  */}
            </div>

            <Footer />
        </>
    );
}

export default ProjectClassic1;
