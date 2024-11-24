'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer';
import GoldenTriangle from '../../../../public/images/slider/GoldenTriangle.jpeg';
import Rajasthan11Days from '../../../../public/images/slider/Rajasthan11Days.jpeg';
import Rajasthan8Days from '../../../../public/images/slider/Rajasthan8Days.jpeg';
import Rajasthan10daysOne from '../../../../public/images/slider/Rajasthan10DayesOne.jpeg';
import Rajasthan10daysTwo from '../../../../public/images/slider/Rajasthan10DayesTwo.jpeg';
import Rajasthan10daysThree from '../../../../public/images/slider/Rajasthan10DaysThree.jpeg';
import Rajasthan16Days from '../../../../public/images/slider/Rajasthan16Days.jpeg';
import Rajasthan20Days from '../../../../public/images/slider/Rajasthan20Days.jpeg';

const tours = [
    {
        title: 'Golden Triangle Tour: (6 Days)',
        cities: 'Delhi – Agra – Jaipur – Delhi in 6 days',
        description: `
            **Day 01: Arrival at Delhi**  
            A warm traditional welcome at Indira Gandhi International Airport awaits you at Delhi, followed by a transfer to your hotel for dinner and an overnight stay. You will also receive the full details of the tour itinerary during dinner.  
    
            **Day 02: Delhi**  
            After a delicious breakfast, you will go for a guided sightseeing tour of Delhi, the capital of India, in an A/C deluxe coach.  
            - **New Delhi Highlights:** Rashtrapati Bhawan (President's Palace), Parliament House, and India Gate, where you can enjoy a boat ride and well-maintained lawns. Explore Humayun's Tomb and Qutub Minar.  
            - **Old Delhi Highlights:** Red Fort, Jama Masjid (India's largest mosque), Raj Ghat (memorial to Mahatma Gandhi), and Chandni Chowk bazaar, where you can shop and enjoy famous delicacies.  
            End the day with a sound and light show at Red Fort. Overnight stay at the hotel.  
    
            **Day 03: Agra**  
            In the morning, leave for Agra, visiting Fatehpur Sikri en route.  
            - **Fatehpur Sikri Highlights:** Panch Mahal, Anup Talao, Diwan-e-Khas, sacred Tomb of Salim Chisti, and Buland Darwaza.  
            On arrival in Agra, check in at the hotel. Spend the evening exploring Agra's markets for souvenirs like marble crafts, leather items, brass handicrafts, and the famous sweet "Petha." Overnight stay at the hotel.  
    
            **Day 04: Agra**  
            After breakfast, enjoy a guided tour of Agra.  
            - **Highlights:** Taj Mahal (emblem of love), Agra Fort (with its palaces and mosques), and Sikandra (tomb of Emperor Akbar).  
            Overnight stay at the hotel in Agra.  
    
            **Day 05: Jaipur**  
            In the morning, drive to Jaipur, the capital of Rajasthan. Witness colorful traditional attire and turbans of locals.  
            - Check in at the hotel and freshen up.  
            - Enjoy a royal elephant ride to Amber Fort and visit the Hall of Victory and Jal Mahal (situated amidst Man Sagar Lake).  
            Overnight stay at the hotel.  
    
            **Day 06: Jaipur**  
            Explore the Pink City, Jaipur, in the morning.  
            - **Highlights:** City Palace (with its museum), Jantar Mantar, Hawa Mahal, and local bazaars.  
            Spend the evening at leisure, shopping, or savoring traditional Rajasthani cuisine like Dal Bati Churma and Bajre Ki Roti. Overnight stay at the hotel.  
    
            **Day 07: Delhi**  
            After breakfast, return to Delhi. Enjoy a farewell lunch at the hotel, followed by a transfer to the airport to catch your flight.  
        `,
        image: GoldenTriangle,
    },

    {
        title: 'Rajasthan (11 Days)',
        cities: 'Delhi - Agra - Jaipur - Jodhpur - Jaisalmer - Udaipur - Delhi',
        description: `
            **Day 1: Delhi**  
            Arrival at Indira Gandhi International Airport. Transfer to hotel by car. Overnight stay at the hotel.  
    
            **Day 2: Delhi**  
            City sightseeing tour covering:  
            - Red Fort  
            - Jama Masjid  
            - Raj Ghat (cremation place of Mahatma Gandhi)  
            - Qutub Minar  
            - Lotus Temple  
            - Humayun’s Tomb  
            - Indira Gandhi Museum  
            - India Gate  
            - President House  
            - Birla Temple  
            Overnight stay at the hotel.  
    
            **Day 3: Delhi to Agra**  
            Drive from Delhi to Agra. City sightseeing includes:  
            - Sikandra  
            - Dayal Bagh  
            - Agra Fort  
            - Itimad-ud-Daula  
            Overnight stay in Agra.  
    
            **Day 4: Agra to Jaipur**  
            Early morning visit to the Taj Mahal. Afternoon drive to Jaipur via Fatehpur Sikri. Overnight stay in Jaipur.  
    
            **Day 5: Jaipur**  
            - Early morning visit to Amber Fort with an elephant ride to ascend the hilltop fort.  
            - Visit Jal Mahal ("The Water Palace").  
            - Sightseeing tour of Jaipur: Hawa Mahal, City Palace, Royal Observatory, and Jaigarh Fort.  
            - Enjoy a traditional Rajasthani Thali dinner.  
            Overnight stay at the hotel.  
    
            **Day 6: Jaipur to Jodhpur**  
            Early morning transfer to Jodhpur (5-6 hours drive).  
            - Half-day village safari.  
            - Afternoon visit to Mehrangarh Fort, Jaswant Thada, and Mandore Garden.  
            - Evening free time at Old City Market.  
            Overnight stay at the hotel.  
    
            **Day 7: Jodhpur to Jaisalmer**  
            Early morning drive to Jaisalmer (4-5 hours drive).  
            - Half-day city visit or leisure time.  
            Overnight stay in Jaisalmer hotel.  
    
            **Day 8: Jaisalmer**  
            - After breakfast, visit Golden Jaisalmer Fort, Jain Temple, Manak Chowk, and Havelis.  
            - Visit Sam Sand Dunes (42 km): enjoy camel rides, gypsy dances, and dinner.  
            - Optional overnight stay in Royal Tents or in Jaisalmer hotel.  
    
            **Day 9: Jaisalmer to Udaipur**  
            After breakfast, drive to Udaipur.  
            - Visit the city and enjoy an optional boat ride in Lake Pichola and visit Jag Mandir.  
            Overnight stay at the hotel.  
    
            **Day 10: Udaipur**  
            Morning sightseeing tour includes:  
            - City Palace  
            - Jagdish Temple  
            - Bhartiya Lok Kala Museum  
            - Sahelion-ki-Bari  
            Overnight stay in Udaipur.  
    
            **Day 11: Udaipur to Delhi**  
            Morning sightseeing of Udaipur includes Lake Pichola and other attractions.  
            Evening flight to your next destination.  
        `,
        image: Rajasthan11Days,
    }
    ,
    {
        title: 'Rajasthan Tour: (8 Days)',
        cities: `
            Destinations Covered: Jaipur - Bikaner - Jaisalmer - Jodhpur - Mount Abu - Udaipur  
            Tour Package Duration: 08 Nights / 09 Days
        `,
        description: `
            **Day 01: Jaipur**  
            Arrival at Jaipur Airport and transfer to the hotel. After a traditional Rajasthani breakfast, proceed for a sightseeing tour of Jaipur.  
            - Visit Jantar Mantar, City Palace, and its museum, and Hawa Mahal.  
            - Evening excursion to Amer Fort with an elephant ride.  
            - Leisure time or explore the local markets.  
            Overnight stay at the hotel.  
    
            **Day 02: Bikaner**  
            Morning drive to Bikaner. Upon arrival, check in at the hotel.  
            - Visit the Camel Breeding Farm and explore other palaces and parks.  
            - Shop for camel-leather items and enjoy Bikaneri snacks.  
            Overnight stay at the hotel.  
    
            **Day 03: Bikaner / Jaisalmer**  
            After breakfast, visit Junagarh Fort in Bikaner.  
            - Drive to Jaisalmer and check in at the hotel.  
            - Visit Patwon-ki-Haveli.  
            Overnight stay at the hotel in Jaisalmer.  
    
            **Day 04: Jaisalmer**  
            After breakfast, explore the highlights of Jaisalmer:  
            - Jaisalmer Fort and Jain Temples.  
            - Enjoy a camel ride at Sam Sand Dunes followed by music and dance performances.  
            Overnight stay at the hotel.  
    
            **Day 05: Jodhpur**  
            Morning drive to Jodhpur and check in at the hotel.  
            - Visit Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace.  
            - Evening leisure time or explore the local market.  
            Overnight stay at the hotel.  
    
            **Day 06: Mount Abu**  
            Drive to Mount Abu, Rajasthan’s only hill station.  
            - Visit Delwara Jain Temples, Nakki Lake, and Sunset Point.  
            Overnight stay at the hotel.  
    
            **Day 07: Udaipur**  
            After breakfast, drive to Udaipur.  
            - Visit Ranakpur Temples and the marble complex of Adinath Shrine en route.  
            - Check in at the hotel in Udaipur.  
            Overnight stay in Udaipur.  
    
            **Day 08: Udaipur**  
            Full-day sightseeing in Udaipur:  
            - Enjoy a boat ride on Lake Pichola.  
            - Visit Kumbhalgarh Fort, City Palace, and other famous landmarks.  
            Overnight stay in Udaipur.  
        `,
        image: Rajasthan8Days,
    }
    ,
    {
        title: 'Rajasthan PALACE Tour: (10 Days)',
        cities: `
            Destinations Covered: Delhi - Jaipur - Jodhpur - Udaipur - Jaisalmer - Bikaner - Delhi  
            Tour Package Duration: 09 Nights / 10 Days
        `,
        description: `
            **Day 01: Arrival at Delhi – Jaipur**  
            Upon arrival at Delhi airport, meet our representatives. Drive to Jaipur and check in at the hotel.  
            Overnight stay at the hotel.  
    
            **Day 02: Jaipur Sightseeing**  
            Explore Amber Fort, Jagmandir, Jal Mahal, and Lake Pichola.  
            Visit City Palace, Hawa Mahal, and Jantar Mantar.  
            Dinner and overnight stay at the hotel.  
    
            **Day 03: Jaipur – Kota – Bundi**  
            Drive to Kota and visit Taragarh Fort and the 84-pillared cenotaph.  
            Proceed to Bundi and check in at the hotel.  
            Overnight stay at the hotel.  
    
            **Day 04: Bundi – Udaipur**  
            Drive to Udaipur.  
            Visit City Palace Museum and Jagdish Temple.  
            Overnight stay at the hotel.  
    
            **Day 05: Udaipur Sightseeing**  
            Visit Sahelion Ki Bari, Lake Pichola, and Jag Mandir.  
            Leisure time to explore Udaipur markets.  
            Overnight stay at the hotel.  
    
            **Day 06: Udaipur – Jodhpur**  
            Drive to Jodhpur, visiting Ranakpur Jain Temples en route.  
            Check in at the hotel in Jodhpur.  
    
            **Day 07: Jodhpur – Jaisalmer**  
            Visit Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, and Clock Tower.  
            Drive to Jaisalmer and check in at the hotel.  
    
            **Day 08: Jaisalmer Sightseeing**  
            Explore Jaisalmer Fort, Jain Temples, Havelis, and Sam Sand Dunes.  
            Enjoy cultural performances. Overnight stay at the hotel.  
    
            **Day 09: Jaisalmer – Bikaner**  
            Drive to Bikaner and visit Junagadh Fort, Bhand Sagar Temple, Lal Garh Palace, and Camel Breeding Farm.  
            Overnight stay at the hotel.  
    
            **Day 10: Bikaner – Mandawa**  
            Visit the havelis of Mandawa and explore their magnificent paintings.  
            Overnight stay at the hotel.  
    
            **Day 11: Mandawa – Delhi**  
            Drive to Delhi.  
            Visit Red Fort, Jama Masjid, and Chandni Chowk.  
            Overnight stay at the hotel.  
    
            **Day 12: Departure from Delhi**  
            Explore New Delhi’s landmarks, including the President's Palace, Parliament House, and India Gate.  
            Visit Akshardham Mandir and Qutub Minar.  
            Evening flight to your destination.  
        `,
        image: Rajasthan10daysOne,
    }
    ,
    {
        title: 'Rajasthan PALACE Tour : (10 Days)',
        cities: 'Destinations Covered: Delhi - Jaipur - Sariska - Mandawa - Bikaner - Khimsar - Jodhpur - Delhi',
        description: `
            Day 01: Arrival at Delhi
            Warm traditional welcome at the airport. Transfer to hotel for overnight stay.

            Day 02: Delhi
            Visit Red Fort, Jama Masjid, Chandni Chowk, Rajghat, India Gate, Rashtrapati Bhavan, Mughal Gardens, Qutab Minar, and Humayun's Tomb. Evening sound and light show at Red Fort. Overnight stay at hotel.

            Day 03: Jaipur
            Drive to Jaipur and check in at the hotel. Visit Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, Jai Garh Fort, and Sisodia-Rani-Ka-Bagh. Evening shopping or leisure time. Overnight stay at hotel.

            Day 04: Sariska
            Drive to Sariska Wildlife Sanctuary and spot wildlife species, including tigers. Overnight stay at Sariska resort.

            Day 05: Mandawa
            Drive to Mandawa. Explore the painted Havelis from the 18th and 19th centuries. Overnight stay at hotel.

            Day 06: Bikaner
            Drive to Bikaner and visit Camel Breeding Farm, Junagarh Fort, Lalgarh Palace, and Jain Temples. Leisure time in evening. Overnight stay at hotel.

            Day 07: Bikaner
            Sightseeing tour of Bikaner: Junagarh Fort, Jain Temples, and Bikaneri Bhujia. Overnight stay at hotel.

            Day 08: Khimsar
            Travel to Khimsar and check in at the hotel. Visit Khimsar Fort and enjoy traditional Rajasthani cuisine. Overnight stay at hotel.

            Day 09: Jodhpur
            Drive to Jodhpur. Visit Mehrangarh Fort, Umaid Bhawan Palace, and Jaswant Thada. Evening visit to the markets. Overnight stay at hotel.

            Day 10: Delhi
            Drive back to Delhi and depart for your onward journey.
        `,
        image: Rajasthan10daysTwo,
    },
    {
        title: 'Rajasthan Ethnic Tour : (10 Days)',
        cities: 'Destinations Covered: Delhi - Agra - Jaipur - Jodhpur - Udaipur - Kishangarh - Delhi',
        description: `
          Day 01 Arrival at Delhi 
          You will be received at the Indira Gandhi International Airport in New Delhi and transferred to the hotel, where a warm traditional welcome awaits you, complete with garlands, a welcome drink and sweets. Overnight stay at the hotel.
      
          Day 02 Delhi
          In the morning, go on a sightseeing tour of Delhi after breakfast in an A/C deluxe coach. The highlights of the first half of the tour are Raj Ghat, Mahatama Gandhi's memorial; Jama Masjid, the largest mosque in India; Red Fort; busy and narrow winding streets of old Chandani Chowk bazaar and its delicacies, all of which are situated in Old Delhi. The second half of the tour concentrates on New Delhi and has Humayun's Tomb, Qutub Minar, Rajpath, India Gate, Parliament House, President's Residence and shopping at Connaught Place and Palika Bazaar as its highlight. In the evening there are traditional dance performances for you to enjoy. Dinner and overnight stay at the hotel.
      
          Day 03 Agra
          Drive to Agra (which was the capital of Mughal Empire for a long time) after breakfast, which takes about four to five hours. The sightseeing tour of the city includes Taj Mahal, the seventh wonder of the world; Agra Fort with its palaces, gardens and Pearl Mosque; Tomb of Itmad-ud-Daulah, built by Empress Noor Jehan in memory of her father; and shopping markets of Agra. Enjoy Mughlai cuisine at the dinner. Overnight stay at the hotel in Agra.
      
          Day 04 Jaipur
          After breakfast, leave for Jaipur, visiting Fatehpur Sikri enroute. This city was built by Emperor Akbar but had to be abandoned soon due to scarcity of water. Some of its highlights are Sheikh Chi's Tomb, Buland Darwaza, Panch Mahal and Jodha Bai's Palace. Check in at the hotel at Jaipur on arrival. Jaipur is also known as the Pink City because all its building are in pink color. Overnight stay at the hotel in Jaipur.
      
          Day 05 Jaipur
          In the morning, go on excursion to the Amber Palace and enjoy the royal ride on the back of the elephant to the hilltop. The other highlights of the sightseeing tour of the day are City Palace with Chandra Mahal, Shri Govind Deo Temple and the City Palace Museum; the observatory known as Jantar Mantar with masonry astronomical instruments; and Hawa Mahal known as 'Palace of Winds' with its honeycomb façade. Spend the evening at leisure or go for shopping in the colorful bazaars of Jaipur. Overnight stay at the hotel.
      
          Day 06 Jodhpur
          Drive to Jodhpur after breakfast and check in at the hotel on arrival. Once capital of the Marwar State, the city has Mehrangarh Fort with many miniature paintings and Jaswant Thada Memorial as its chief attractions. Overnight stay at the hotel. 
      
          Day 07 Udaipur
          Drive to Udaipur in the morning, visiting the Jain Temple of Ranakpur enroute. This temple is unique as it has 200 pillars, each one carved differently and 29 halls adorned with beautiful carving and sculptures. Check in and overnight stay at the hotel in Udaipur, the City of Lakes.
      
          Day 08 Udaipur
          Relish the taste of typical Rajasthani cuisine at breakfast and then, embark on sightseeing tour of Udaipur. The highlights of the tour are City Palace with Shish Mahal, splendid courtyards including the Peacock Courtyard and the royal museum; the motor launch cruise on Lake Pichola; the island palaces of Jag Mandir and Jag Niwas; the 300-year-old Jagdish Temple and the Royal Cenotaphs. Overnight stay at the hotel.
      
          Day 09 Pushkar
          After breakfast, drive to one of the most important pilgrimage places of Hindus known as Pushkar, which is famed for having the only temple dedicated to Lord Brahma in the world. Visit Dargah Sharif at Ajmer on the way to Pushkar. At Pushkar, visit the famous Brahma Temple and if you are lucky, you may be able to fitness the famous camel fair of Pushkar too. Take a holy dip in the Pushkar Lake and visit its 52 bathing Ghats and more than 500 temples, each having its own legends of miraculous powers and powers of healing and displaying variety of architectural styles. Pushkar is also known all over the world for its beautiful roses and rose essence and you can visit the Rose Garden too in the evening. Overnight stay at the hotel in Pushkar.
      
          Day 10 Kishangarh/ Delhi
          Drive to Kishangarh in the morning, known all over the world for its miniature paintings and handicrafts. 100 km from Jaipur, Kishangarh also has the largest marble and granite cutting industry in India. Visit the Fort of Kishangarh; have lunch at Phool Mahal (or the Palace of Flowers) that serves as the private residence for the royal family of Kishangarh; watch birds such as flamingoes, pelicans, wild duck and cranes at centuries-old Gundalao Lake. In the evening, leave for Delhi, where you will be transferred to the airport so that you can catch your flight to onward destination.
        `,
        image: Rajasthan10daysThree,
    },
    {
        title: 'Rajasthan DESERT Tour : (16 Days)',
        cities: 'Destinations Covered: Delhi - Mandawa - Bikaner - Jaisalmer - Jodhpur - Jaipur - Delhi',
        description: `
            'Day 01 Arrival at Delhi
            You will be received at Indira Gandhi International Airport at New Delhi and then transferred to the hotel at overnight stay.
    
            Day 02 Delhi
            This day is reserved for the sightseeing tour of Delhi including Red Fort, Jama Masjid, a rickshaw ride in the 400 years old market of Chandni Chowk and Raj Ghat in Old Delhi and Birla Temple, Parliament House, Presidential House, India Gate, Government buildings and Qutab Minar in New Delhi. Enjoy Mughlai cuisine in the dinner and see the Indian cultural dance performances in the evening. Overnight stay at the hotel.
    
            Day 03 Mandawa
            After breakfast, drive to Mandawa in the Shekhawati region. Check in at the hotel for overnight stay. Visit the 150 to 200 year old carved and painted Havelis and see their beautiful frescoes done in natural colors.
    
            Day 04 Bikaner
            Drive to Bikaner and check in at the hotel for overnight stay. Visit the world-famous Camel Breeding Farms, where you can ride the camels and taste their milk. In the afternoon, visit the Junagarh Fort, Lalgarh Palace and the Fort Museum. Overnight stay at the hotel.
    
            Day 05 Khimsar
            After breakfast, drive to Khimsar, visiting the 600-years-old Deshnok Rat Temple enroute. The temple is a wonder because it is considered that the rats here are actually the devotees of the Goddess and so live here as pets. Check in at the hotel at Khimsar on arrival for overnight stay. Khimsar was the village found by Lord Mahavira and houses a 15th century Khimsar Fort. Go on a camel safari to nearby villages and catch some good snaps of sunset views of Thar Desert.
    
            Day 06 Ossian/Jaisalmer
            In the morning, drive to Jaisalmer visiting the 7th century Mahavira Jain Temple and 2000 years old Jija Mata Temple at Ossian village enroute. Check in at the hotel at Jaisalmer for overnight stay.
    
            // ... Add remaining days' itinerary here for completeness.
    
            Day 17 Delhi
            Drive back to Delhi in the morning, where you will check in at the hotel. Spend the day at leisure or go for shopping. You will receive a farewell dinner at the hotel and then you will be escorted to the international airport, from where you can catch your flight to onward destination.'
        `,
        image: Rajasthan16Days,
    },

    {
        title: "Rajasthan FORT– PALACE Tour : (20 Days)",
        cities: "Destinations Covered: Delhi - Agra - Jaipur - Pushkar - Ranthambhore - Kota - Bundi - Chittaurgarh - Bijaipur - Udaipur - Kumbhalgarh - Jodhpur - Jaisalmer - Bikaner - Mandawa - Delhi",
        description: `
    Day 01: Arrival at Delhi
    You will arrive at Delhi, the capital of India, a sprawling metropolis with a fascinating blend of the past and the present. Our representatives will receive you at the international airport. You will be guided to your hotel for an overnight stay. 
    
    Day 02: Agra
    After breakfast, drive to Agra, the City of Taj. Upon arrival, check in at the hotel and enjoy a sightseeing tour of the Taj Mahal, Agra Fort, and Itmad-ud-Daulah's Tomb. Overnight stay at the hotel.
    
    Day 03: Jaipur
    Drive to Jaipur, visiting Fatehpur Sikri en route. Check in and enjoy an overnight stay in Jaipur.
    
    Day 04: Jaipur
    After breakfast, visit Amber Fort with an optional elephant ride. Tour Jaipur's City Palace, Jantar Mantar, Hawa Mahal, and local artisans' workshops. Overnight stay in Jaipur.
    
    Day 05: Pushkar
    Leave for Pushkar, where you'll visit the Pushkar Lake, Brahma Temple, and Rose Garden. Enjoy a sunset cruise on Pushkar Lake. Overnight stay at the hotel.
    
    Day 06-07: Ranthambhore
    Spend two days exploring the Ranthambhore Tiger Reserve, its wildlife, and attractions like Jogi Mahal and Ranthambore Fort. Overnight stay at a jungle resort.
    
    Day 08: Kota
    Visit Kota, exploring City Palace, Jagmandir Temple, Kishore Sagar Lake, and Chambal Gardens. Kota is also known for its sarees and miniature paintings. Overnight stay at the hotel.
    
    Day 09: Bundi/Chittaurgarh
    Explore Bundi's Taragarh Fort, murals, and Sukh Mahal. In Chittaurgarh, visit its historic fort. Overnight stay at the hotel.
    
    Day 10-11: Udaipur
    Tour Udaipur, including City Palace, Sahelion-ki-Bari, Lake Pichola, and Jag Mandir. Enjoy a cruise and overnight stays in Udaipur.
    
    Day 12: Kumbhalgarh
    Visit the Ranakpur Jain Temples and Kumbhalgarh Fort. Overnight stay at the hotel.
    
    Day 13-14: Jodhpur
    Explore Jodhpur with a village safari, Mehrangarh Fort, Jaswant Thada, and Umaid Bhawan Palace. Overnight stays in Jodhpur.
    
    Day 15-16: Jaisalmer
    Visit Jaisalmer's Fort, Patwon-Ki-Haveli, Sam Sand Dunes, and enjoy cultural performances and a barbecue. Overnight stay in camping grounds.
    
    Day 17: Bikaner
    Explore Bikaner’s Camel Breeding Farm and wells. Overnight stay at the hotel.
    
    Day 18-19: Mandawa
    Discover Mandawa Fort and painted Havelis like Chowkhani and Gulab Rai Ladia. Return to Delhi on Day 19 for an overnight stay.
    
    Day 20: Delhi
    Take a sightseeing tour of Delhi, including Raj Ghat, Jama Masjid, Red Fort, Humayun's Tomb, and Qutub Minar. End with a farewell dinner and transfer to the airport for your onward journey.
        `,
        image: Rajasthan20Days ,
    }

];


const ContactUs = () => {
    const [activeTour, setActiveTour] = useState(tours[0]);

    return (
        <>
            <div id="header" className="relative w-full">
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading="Explore India" subHeading="Discover India" />
            </div>
            <section className="py-16 bg-gray-100">
    <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
                <h2 className="text-2xl font-bold text-center mb-6">Explore Tours</h2>
                <ul className="space-y-4">
                    {tours.map((tour, index) => (
                        <li key={index}>
                            <button
                                onClick={() => setActiveTour(tour)}
                                className={`block w-full p-4 text-left rounded-lg shadow-md transition transform ${
                                    activeTour.title === tour.title
                                        ? 'bg-orange-500 scale-105'
                                        : 'bg-gray-100 text-gray-800 hover:bg-orange-200'
                                }`}
                            >
                                {tour.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
            <Image
                src={activeTour.image}
                alt={activeTour.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <h2 className="text-3xl font-bold mb-4">{activeTour.title}</h2>
                <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold text-orange-500">Cities: </span>{activeTour.cities}
                </p>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {activeTour.description.split('**').map((text, index) => {
                        if (index % 2 === 1) {
                            return (
                                <span key={index} className="block mt-4 font-semibold text-orange-500">
                                    {text}
                                </span>
                            );
                        }
                        return (
                            <span key={index}>
                                {text}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
    
</section>


            <Footer />
        </>
    );
};

export default ContactUs;
