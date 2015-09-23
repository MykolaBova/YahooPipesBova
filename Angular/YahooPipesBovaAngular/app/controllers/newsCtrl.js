/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    angular
        .module("news")
        .controller("NewsCtrl",
                    NewsCtrl);

    function NewsCtrl() {
        var vm = this;

        vm.news =
            {
                "count": 10,
                "value": {
                    "title": "NASA picture of the day",
                    "description": "This Pipe demonstrates how you can use the Fetch module.",
                    "link": "http://pipes.yahoo.com/pipes/pipe.info?_id=e9a2e77dffb3205d035c4e311d77bbe6",
                    "pubDate": "Wed, 23 Sep 2015 09:35:43 +0000",
                    "generator": "http://pipes.yahoo.com/pipes/",
                    "callback": "",
                    "items": [
                        {
                            "title": "Curiosity's Stars and Stripes",
                            "link": "http://www.nasa.gov/mission_pages/msl/multimedia/pia15882.html",
                            "description": "This view of the American flag medallion on NASA's Mars rover Curiosity was taken by the rover's Mars Hand Lens Imager (MAHLI) during the 44th Martian day, or sol, of Curiosity's work on Mars (Sept. 19, 2012). The flag is one of four \"mobility logos\" placed on the rover's mobility rocker arms.",
                            "enclosure": {
                                "length": "1349043",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/images/690463main_pia15882_Flag_FINAL_full.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/mission_pages/msl/multimedia/pia15882.html"
                            },
                            "pubDate": "Thu, 02 Jul 2015 11:12 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "15",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "12",
                                "utime": "1435849920",
                                "day": "2",
                                "day_ordinal_suffix": "nd",
                                "day_of_week": "4",
                                "day_name": "Thursday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/mission_pages/msl/multimedia/pia15882.html"
                            },
                            "y:title": "Curiosity's Stars and Stripes"
                        },
                        {
                            "title": "Stellar Sparklers That Last",
                            "link": "http://www.nasa.gov/mission_pages/chandra/stellar-sparklers-that-last.html",
                            "description": "While fireworks only last a short time here on Earth, a bundle of cosmic sparklers in a nearby cluster of stars will be going off for a very long time.",
                            "enclosure": {
                                "length": "4653169",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/ngc1333.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/mission_pages/chandra/stellar-sparklers-that-last.html"
                            },
                            "pubDate": "Sat, 04 Jul 2015 09:39 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "13",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "39",
                                "utime": "1436017140",
                                "day": "4",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "6",
                                "day_name": "Saturday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/mission_pages/chandra/stellar-sparklers-that-last.html"
                            },
                            "y:title": "Stellar Sparklers That Last"
                        },
                        {
                            "title": "The North Sea Abloom",
                            "link": "http://www.nasa.gov/image-feature/the-north-sea-abloom",
                            "description": "Despite its cold waters and harsh winds, the North Sea is a fertile basin for phytoplankton blooms. The drifting, plantlike organisms tend to be most abundant in late spring and early summer due to high levels of nutrients in the water and increasing sunlight.",
                            "enclosure": {
                                "length": "4199085",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/northsea_amo_2015162_lrg.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/image-feature/the-north-sea-abloom"
                            },
                            "pubDate": "Mon, 06 Jul 2015 11:06 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "15",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "6",
                                "utime": "1436195160",
                                "day": "6",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "1",
                                "day_name": "Monday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/image-feature/the-north-sea-abloom"
                            },
                            "y:title": "The North Sea Abloom"
                        },
                        {
                            "title": "July 7, 2003, NASA's Opportunity Rover Launches to Mars",
                            "link": "http://www.nasa.gov/image-feature/july-7-2003-nasas-opportunity-rover-launches-to-mars",
                            "description": "On July 7, 2003, NASA launched its second Mars Exploration Rover, Opportunity, aboard a Delta II launch vehicle.  Opportunity and its twin rover Spirit landed on Mars in 2004 to begin missions planned to last three months. Both rovers far exceeded those plans. Spirit worked for six years, and Opportunity is still active.",
                            "enclosure": {
                                "length": "6441352",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/03pp2099.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/image-feature/july-7-2003-nasas-opportunity-rover-launches-to-mars"
                            },
                            "pubDate": "Tue, 07 Jul 2015 11:24 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "15",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "24",
                                "utime": "1436282640",
                                "day": "7",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "2",
                                "day_name": "Tuesday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/image-feature/july-7-2003-nasas-opportunity-rover-launches-to-mars"
                            },
                            "y:title": "July 7, 2003, NASA's Opportunity Rover Launches to Mars"
                        },
                        {
                            "title": "NuSTAR Stares at the Sun",
                            "link": "http://www.nasa.gov/jpl/pia19821/nustar-stares-at-the-sun",
                            "description": "Flaring, active regions of our sun are highlighted in this new image combining observations from several telescopes.",
                            "enclosure": {
                                "length": "1569336",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/pia19821-nustar_xrt_sun.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/jpl/pia19821/nustar-stares-at-the-sun"
                            },
                            "pubDate": "Wed, 08 Jul 2015 12:47 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "16",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "47",
                                "utime": "1436374020",
                                "day": "8",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "3",
                                "day_name": "Wednesday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/jpl/pia19821/nustar-stares-at-the-sun"
                            },
                            "y:title": "NuSTAR Stares at the Sun"
                        },
                        {
                            "title": "January 19, 2006: New Horizons Launches for Pluto",
                            "link": "http://www.nasa.gov/image-feature/january-19-2006-new-horizons-launches-for-pluto",
                            "description": "On Jan. 19, 2006, Clouds part as NASA’s New Horizons spacecraft roars into the blue sky after an on-time liftoff at 2 p.m. EST aboard an Atlas V rocket from Complex 41 on Cape Canaveral Air Force Station in Florida.",
                            "enclosure": {
                                "length": "370957",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/new_horizons_launch.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/image-feature/january-19-2006-new-horizons-launches-for-pluto"
                            },
                            "pubDate": "Thu, 09 Jul 2015 09:04 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "13",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "4",
                                "utime": "1436447040",
                                "day": "9",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "4",
                                "day_name": "Thursday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/image-feature/january-19-2006-new-horizons-launches-for-pluto"
                            },
                            "y:title": "January 19, 2006: New Horizons Launches for Pluto"
                        },
                        {
                            "title": "Hubble Looks at Stunning Spiral",
                            "link": "http://www.nasa.gov/image-feature/goddard/hubble-looks-at-leda-89996",
                            "description": "This little-known galaxy, officially named J04542829-6625280, but most often referred to as LEDA 89996, is a classic example of a spiral galaxy.",
                            "enclosure": {
                                "length": "315654",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/hubble_friday_07102015.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/image-feature/goddard/hubble-looks-at-leda-89996"
                            },
                            "pubDate": "Fri, 10 Jul 2015 11:29 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "15",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "29",
                                "utime": "1436542140",
                                "day": "10",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "5",
                                "day_name": "Friday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/image-feature/goddard/hubble-looks-at-leda-89996"
                            },
                            "y:title": "Hubble Looks at Stunning Spiral"
                        },
                        {
                            "title": "Pluto as seen from New Horizons on July 11, 2015",
                            "link": "http://www.nasa.gov/image-feature/pluto-as-seen-from-new-horizons-on-july-11-2015",
                            "description": "One million miles to go; Pluto is more intriguing than ever!",
                            "enclosure": {
                                "length": "416259",
                                "type": "image/png",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/071215_pluto_alone_0.png"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/image-feature/pluto-as-seen-from-new-horizons-on-july-11-2015"
                            },
                            "pubDate": "Mon, 13 Jul 2015 09:24 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "13",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "24",
                                "utime": "1436793840",
                                "day": "13",
                                "day_ordinal_suffix": "rd",
                                "day_of_week": "1",
                                "day_name": "Monday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/image-feature/pluto-as-seen-from-new-horizons-on-july-11-2015"
                            },
                            "y:title": "Pluto as seen from New Horizons on July 11, 2015"
                        },
                        {
                            "title": "NASA Celebrates New Horizons' Closest Approach to Pluto",
                            "link": "http://www.nasa.gov/image-feature/nasa-celebrates-new-horizons-closest-approach-to-pluto",
                            "description": "Guests and New Horizons team members countdown to the spacecraft's closest approach to Pluto, Tuesday, July 14, 2015.",
                            "enclosure": {
                                "length": "3219861",
                                "type": "image/jpeg",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/201507140007hq.jpg"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/image-feature/nasa-celebrates-new-horizons-closest-approach-to-pluto"
                            },
                            "pubDate": "Tue, 14 Jul 2015 11:20 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "15",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "20",
                                "utime": "1436887200",
                                "day": "14",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "2",
                                "day_name": "Tuesday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/image-feature/nasa-celebrates-new-horizons-closest-approach-to-pluto"
                            },
                            "y:title": "NASA Celebrates New Horizons' Closest Approach to Pluto"
                        },
                        {
                            "title": "The Icy Mountains of Pluto",
                            "link": "http://www.nasa.gov/image-feature/the-icy-mountains-of-pluto",
                            "description": "New close-up images of a region near Pluto’s equator reveal a giant surprise: a range of youthful mountains.",
                            "enclosure": {
                                "length": "1238466",
                                "type": "image/png",
                                "url": "http://www.nasa.gov/sites/default/files/thumbnails/image/nh-plutosurface.png"
                            },
                            "guid": {
                                "isPermaLink": "false",
                                "content": "http://www.nasa.gov/image-feature/the-icy-mountains-of-pluto"
                            },
                            "pubDate": "Wed, 15 Jul 2015 15:25 EDT",
                            "source": {
                                "url": "http://www.nasa.gov/rss/dyn/image_of_the_day.rss",
                                "content": "NASA Image of the Day"
                            },
                            "y:published": {
                                "hour": "19",
                                "timezone": "UTC",
                                "second": "0",
                                "month": "7",
                                "month_name": "July",
                                "minute": "25",
                                "utime": "1436988300",
                                "day": "15",
                                "day_ordinal_suffix": "th",
                                "day_of_week": "3",
                                "day_name": "Wednesday",
                                "year": "2015"
                            },
                            "y:id": {
                                "permalink": "false",
                                "value": "http://www.nasa.gov/image-feature/the-icy-mountains-of-pluto"
                            },
                            "y:title": "The Icy Mountains of Pluto"
                        }
                    ]
                }
            };

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        }

    }
}());