'use strict';

class PhoneCatalog {
    constructor ({elem}) {
        this._element = elem;
        this._render();
    }
    _render() {
        this._element.innerHTML ='<ul class="phones">\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-xoom-with-wi-fi" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Motorola XOOM™ with Wi-Fi" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'            \\n\' +\n' +
            '            \'                                <div class="phones__btn-buy-wrapper">\\n\' +\n' +
            '            \'                                    <a class="btn btn-success">\\n\' +\n' +
            '            \'                                        Add\\n\' +\n' +
            '            \'                                    </a>\\n\' +\n' +
            '            \'                                </div>\\n\' +\n' +
            '            \'            \\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-xoom-with-wi-fi">Motorola XOOM™ with Wi-Fi</a>\\n\' +\n' +
            '            \'                                <p>The Next, Next Generation\\n\' +\n' +
            '            \'            \\n\' +\n' +
            '            \'                                    Experience the future with Motorola XOOM with Wi-Fi, the world\\\\\\\'s first tablet powered by Android 3.0 (Honeycomb).</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-xoom" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="MOTOROLA XOOM™" src="img/phones/motorola-xoom.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-xoom">MOTOROLA XOOM™</a>\\n\' +\n' +
            '            \'                                <p>The Next, Next Generation\\n\' +\n' +
            '            \'            \\n\' +\n' +
            '            \'                                    Experience the future with MOTOROLA XOOM, the world\\\\\\\'s first tablet powered by Android 3.0 (Honeycomb).</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-atrix-4g" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="MOTOROLA ATRIX™ 4G" src="img/phones/motorola-atrix-4g.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-atrix-4g">MOTOROLA ATRIX™ 4G</a>\\n\' +\n' +
            '            \'                                <p>MOTOROLA ATRIX 4G the world\\\\\\\'s most powerful smartphone.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/dell-streak-7" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Dell Streak 7" src="img/phones/dell-streak-7.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/dell-streak-7">Dell Streak 7</a>\\n\' +\n' +
            '            \'                                <p>Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry around, big enough to gather around.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-gem" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Samsung Gem™" src="img/phones/samsung-gem.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-gem">Samsung Gem™</a>\\n\' +\n' +
            '            \'                                <p>The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps, more features and a more affordable price.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/dell-venue" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Dell Venue" src="img/phones/dell-venue.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/dell-venue">Dell Venue</a>\\n\' +\n' +
            '            \'                                <p>The Dell Venue; Your Personal Express Lane to Everything</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/nexus-s" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Nexus S" src="img/phones/nexus-s.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/nexus-s">Nexus S</a>\\n\' +\n' +
            '            \'                                <p>Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/lg-axis" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="LG Axis" src="img/phones/lg-axis.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/lg-axis">LG Axis</a>\\n\' +\n' +
            '            \'                                <p>Android Powered, Google Maps Navigation, 5 Customizable Home Screens</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-galaxy-tab" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Samsung Galaxy Tab™" src="img/phones/samsung-galaxy-tab.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-galaxy-tab">Samsung Galaxy Tab™</a>\\n\' +\n' +
            '            \'                                <p>Feel Free to Tab™. The Samsung Galaxy Tab™ brings you an ultra-mobile entertainment experience through its 7” display, high-power processor and Adobe® Flash® Player compatibility.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-showcase-a-galaxy-s-phone" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Samsung Showcase™ a Galaxy S™ phone" src="img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-showcase-a-galaxy-s-phone">Samsung Showcase™ a Galaxy S™ phone</a>\\n\' +\n' +
            '            \'                                <p>The Samsung Showcase™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance, even outdoors</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/droid-2-global-by-motorola" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="DROID™ 2 Global by Motorola" src="img/phones/droid-2-global-by-motorola.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/droid-2-global-by-motorola">DROID™ 2 Global by Motorola</a>\\n\' +\n' +
            '            \'                                <p>The first smartphone with a 1.2 GHz processor and global capabilities.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/droid-pro-by-motorola" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="DROID™ Pro by Motorola" src="img/phones/droid-pro-by-motorola.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/droid-pro-by-motorola">DROID™ Pro by Motorola</a>\\n\' +\n' +
            '            \'                                <p>The next generation of DOES.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-bravo-with-motoblur" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="MOTOROLA BRAVO™ with MOTOBLUR™" src="img/phones/motorola-bravo-with-motoblur.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-bravo-with-motoblur">MOTOROLA BRAVO™ with MOTOBLUR™</a>\\n\' +\n' +
            '            \'                                <p>An experience to cheer about.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-defy-with-motoblur" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Motorola DEFY™ with MOTOBLUR™" src="img/phones/motorola-defy-with-motoblur.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-defy-with-motoblur">Motorola DEFY™ with MOTOBLUR™</a>\\n\' +\n' +
            '            \'                                <p>Are you ready for everything life throws your way?</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/t-mobile-mytouch-4g" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="T-Mobile myTouch 4G" src="img/phones/t-mobile-mytouch-4g.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/t-mobile-mytouch-4g">T-Mobile myTouch 4G</a>\\n\' +\n' +
            '            \'                                <p>The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-mesmerize-a-galaxy-s-phone" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Samsung Mesmerize™ a Galaxy S™ phone" src="img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-mesmerize-a-galaxy-s-phone">Samsung Mesmerize™ a Galaxy S™ phone</a>\\n\' +\n' +
            '            \'                                <p>The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance,even outdoors</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/sanyo-zio" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="SANYO ZIO" src="img/phones/sanyo-zio.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/sanyo-zio">SANYO ZIO</a>\\n\' +\n' +
            '            \'                                <p>The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                               <a href="#!/phones/samsung-transform" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Samsung Transform™" src="img/phones/samsung-transform.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/samsung-transform">Samsung Transform™</a>\\n\' +\n' +
            '            \'                                <p>The Samsung Transform™ brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed “Sprint ID Service Pack”.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/t-mobile-g2" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="T-Mobile G2" src="img/phones/t-mobile-g2.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/t-mobile-g2">T-Mobile G2</a>\\n\' +\n' +
            '            \'                                <p>The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile\\\\\\\'s new network. Get the information you need, faster than you ever thought possible.</p>\\n\' +\n' +
            '            \'                            </li>\\n\' +\n' +
            '            \'                            <li class="thumbnail">\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-charm-with-motoblur" class="thumb">\\n\' +\n' +
            '            \'                                    <img alt="Motorola CHARM™ with MOTOBLUR™" src="img/phones/motorola-charm-with-motoblur.0.jpg">\\n\' +\n' +
            '            \'                                </a>\\n\' +\n' +
            '            \'                                <a href="#!/phones/motorola-charm-with-motoblur">Motorola CHARM™ with MOTOBLUR™</a>\\n\' +\n' +
            '            \'                                <p>Motorola CHARM fits easily in your pocket or palm. Includes MOTOBLUR service.</p>\\n\' +\n' +
            '            \'                           </li>\\n\' +\n' +
            '            \'                        </ul>';
    }