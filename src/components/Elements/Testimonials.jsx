import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        reviewername: 'Volkan Kaya',
        position: 'Ponds, NSW',
        review: 'Team has done an excellent job to finish our incomplete decking project. They attacked the job and completed in amazingly 3 days. No time wasted for material shortages and very good clean-up at the end. Besides they created multiple values for us along the way.'
    },
    {
        reviewername: 'Belinda Byway',
        position: 'Ruse, NSW',
        review: 'Highly recommend Nathan and his team. Nathan listened to what I wanted for my new car port and they went above and beyond and did a superb job. Thank you again Nathan im absolutely stoked with the result.'
    },
    {
        reviewername: 'Bev Bush',
        position: 'Camden, NSW',
        review: 'Absolute dream to deal with, on time and extremely professional. Nathan and his team are expert craftsmen.'
    },
    {
        reviewername: 'Amanda',
        position: 'Carnes Hill, NSW',
        review: 'We asked these guys for a composite deck and pergola for our newly built house. They have created an amazing outdoor space that we love and will make memories in for many years to come. Nathan’s knowledge of products and recommendations for those that would give us the look we were after was the reason they won our quote.'
    },
    {
        reviewername: 'Peter',
        position: 'Ruse, NSW',
        review: "From the very start, Nathan from Monumental Building came in with a welcoming and positive energy. I received several quotes that were extremely overpriced and put doubt in my mind I would be able to achieve what I was after with the budget I had but luckily I was able to meet someone like Nathan. As this was the first time I've ever done any sort of renovation work, Nathan was kind enough to provide me with as much help and advice he could offer. He went above and beyond to help me achieve the goals I was after and did a fantastic carpentry job. His level of craftsmen and professionalism cannot be measured. I highly recommend anyone to use Nathan for all their renovation works."
    }
]

const bnr1 = require('./../../images/background/bg6.jpg');

const Testimonials = () => {
    const options = {
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        }
    };

    return (
        <>
            <div className="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover" style={{ backgroundImage: `url(${bnr1})` }}>
                <div className="container">
                    <div className="section-content">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Client</span> Testimonials</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* TESTIMONIAL START */}
                        <OwlCarousel className="owl-carousel testimonial-home" {...options}>

                            {testimonials.map((item, index) => (
                                <div key={index} className="item">
                                    <div className="testimonial-2 m-a30 hover-animation-1">
                                        <div className=" block-shadow bg-white p-a30">
                                            <div className="testimonial-detail clearfix">
                                                <h4 className="testimonial-name m-b5">{item.reviewername} -</h4>
                                                <span className="testimonial-position">{item.position}</span>
                                            </div>
                                            <div className="testimonial-text">
                                                <span className="fa fa-quote-right" />
                                                <p> {item.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>

                    </div>
                </div>
                <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                    <strong>Testimonials</strong>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
