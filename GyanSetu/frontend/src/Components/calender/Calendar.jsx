import React, { useState, useEffect } from 'react';
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  addDays,
  isSameMonth,
  isToday,
  differenceInCalendarDays,
  parseISO
} from 'date-fns';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

// List of Indian cultural festivals to filter out API results
const indianFestivals = [
  "Diwali", "Holi", "Dussehra", "Navratri", "Makar Sankranti", "Gudi Padwa",
  "Pongal", "Ganesh Chaturthi", "Raksha Bandhan", "Janmashtami", "Ram Navami",
  "Mahashivratri", "Chhath Puja", "Baisakhi", "Karva Chauth", "Bhai Dooj",
  "Lohri", "Vasant Panchami", "Hartalika Teej", "Hariyali Teej", "Kajari Teej",
  "Ahoi Ashtami", "Govardhan Puja", "Annakut", "Shitala Ashtami",
  "Skanda Sashti", "Ayyappa Mandala Pooja", "Ratha Saptami", "Akshaya Tritiya",
  "Onam", "Ugadi", "Vishu", "Thai Pusam", "Karthigai Deepam", "Avani Avittam",
  "Margazhi Festival", "Masi Magam", "Tirukarthikai", "Meena Sankranti",
  "Varamahalakshmi Vratham", "Kumbha Mela", "Attukal Pongala", "Bhoothanatha Aradhana",
  "Guru Nanak Jayanti", "Baisakhi", "Hola Mohalla", "Gurpurabs", "Maghi Mela",
  "Buddha Purnima", "Mahavir Jayanti", "Paryushana", "Kartik Purnima", "Losar",
  "Asalha Puja", "Dhamma Chakra Pravartan Din", "Uposatha", "Ollala Festival",
  "Eid-ul-Fitr", "Eid-ul-Adha", "Muharram", "Shab-e-Barat", "Ramadan",
  "Milad-un-Nabi", "Jamat-Ul-Vida", "Laylat al-Qadr", "Chaand Raat",
  "Christmas", "Good Friday", "Easter", "Palm Sunday", "Feast of St. Thomas",
  "St. Francis Xavier Feast", "New Year (Christian)", "All Saints' Day",
  "Pentecost", "Ascension Day",
  "Navroz", "Khordad Sal", "Zarthost No Deeso", "Mehergan", "Sadeh Festival",
  "Jamshedi Navroz",
  "Hornbill Festival", "Losoong", "Wangala Festival", "Bihu", "Chapchar Kut",
  "Kang Chingba", "Sarhul", "Mim Kut", "Tusu Parab", "Bastar Dussehra",
  "Karma Puja", "Sume-Gelirak", "Kailpoldu", "Kottiyoor Utsavam",
  "Bhogali Bihu", "Magh Bihu", "Karam Festival", "Moatsu Mong", "Chakan Gaan-Ngai",
  "Hanuman Jayanti", "Surya Shashti", "Tulsi Vivah", "Sharad Purnima",
  "Vaikunta Ekadashi", "Saraswati Puja", "Nag Panchami", "Anant Chaturdashi",
  "Ganga Dussehra", "Hanuman Jayanti", "Vat Purnima", "Sharad Purnima",
  "Jivitputrika (Jitiya) Vrat", "Paush Purnima", "Tulsidas Jayanti",
  "Guru Purnima", "Rishi Panchami", "Somvati Amavasya"
];

// Local descriptions for a few festivals (expand as needed)
const festivalDescriptions = {
  "Diwali": `Diwali, the festival of lights, is celebrated with immense joy across India.
It marks the victory of light over darkness and good over evil.
Families light oil lamps, burst crackers, and decorate their homes.
This celebration symbolizes new beginnings and the triumph of hope.
People come together to share sweets, prayers, and blessings in a spirit of renewal.`,

  "Holi": `Holi, the vibrant festival of colors, heralds the arrival of spring.
It celebrates love, unity, and the playful spirit of life.
Participants throw colored powders and water, expressing joy and forgiveness.
The festival is a reminder to let go of past grievances and start afresh.
Communities gather to dance, sing, and enjoy a festive array of treats.`,

  "Dussehra": `Dussehra marks the victory of good over evil, celebrating the defeat of the demon king Ravana.
It is observed with dramatic enactments and the burning of effigies.
The festival teaches the values of righteousness, courage, and justice.
People engage in rituals that invoke moral strength and communal unity.
It is a time of reflection on how truth and virtue overcome adversity.`,

  "Navratri": `Navratri is a nine-night celebration dedicated to the divine feminine energy.
Devotees fast, perform dances, and recite prayers in honor of Goddess Durga.
The festival is a tribute to strength, resilience, and the power of womanhood.
It brings communities together through vibrant cultural programs.
Each night signifies a step in the journey toward spiritual and personal renewal.`,

  "Makar Sankranti": `Makar Sankranti celebrates the sun’s transition into Capricorn and the end of winter.
It is a harvest festival filled with kite flying, feasts, and holy dips in rivers.
People express gratitude for nature’s bounty and the promise of longer days.
The celebrations mark new beginnings and the reawakening of the earth.
Communities come together to share traditional foods and joyful rituals.`,

  "Gudi Padwa": `Gudi Padwa marks the traditional New Year in Maharashtra with a display of hope and prosperity.
A decorated “Gudi” (a flag-like symbol) is hoisted outside homes as a sign of triumph.
Families engage in rituals that invoke blessings for the year ahead.
The festival emphasizes the renewal of spirit and the victory of knowledge.
It is celebrated with feasts, music, and the joy of starting afresh.`,

  "Pongal": `Pongal is a harvest festival celebrated predominantly in Tamil Nadu.
It is a time to give thanks to nature and the sun for a bountiful harvest.
Families cook a special dish called “Pongal” and share it with loved ones.
The festival fosters gratitude, community bonding, and cultural pride.
It also marks a time of renewal, festivity, and the joy of reaping nature’s gifts.`,

  "Ganesh Chaturthi": `Ganesh Chaturthi celebrates the birth of Lord Ganesha, the remover of obstacles.
Devotees install clay idols and perform elaborate prayers and processions.
The festival signifies new beginnings, wisdom, and the power of devotion.
Communities join together to share sweets, songs, and cultural events.
It is a time to seek blessings, celebrate unity, and overcome challenges.`,

  "Raksha Bandhan": `Raksha Bandhan honors the special bond between brothers and sisters.
Sisters tie a protective thread (rakhi) on their brothers’ wrists as a symbol of love.
The festival is a celebration of familial duty, protection, and care.
Families exchange gifts and heartfelt wishes during the festive day.
It reaffirms the commitment to look after one another with warmth and respect.`,

  "Janmashtami": `Janmashtami commemorates the birth of Lord Krishna, a beloved deity in Hindu mythology.
Devotees observe the day with fasting, singing devotional songs, and dramatic reenactments.
The celebration underscores the themes of love, mischief, and divine wisdom.
Communities gather at temples and homes to share prayers and festive treats.
It is a time to reflect on moral values, joy, and spiritual devotion.`,

  "Ram Navami": `Ram Navami celebrates the birth of Lord Rama, an exemplar of virtue and honor.
Devotees observe rituals, fasting, and recitations from ancient epics.
The festival emphasizes the triumph of good, duty, and righteous living.
Communities participate in processions and cultural performances.
It serves as a reminder of the power of faith and moral integrity.`,

  "Mahashivratri": `Mahashivratri is dedicated to Lord Shiva, the destroyer and transformer.
Devotees spend the night in meditation, prayers, and temple visits.
The festival symbolizes spiritual awakening and the renewal of inner strength.
It emphasizes the importance of overcoming obstacles through devotion.
Communities unite in a sacred atmosphere of introspection and celebration.`,

  "Chhath Puja": `Chhath Puja is a unique festival dedicated to the Sun God.
Devotees perform rigorous fasting and offer prayers at riverbanks.
It celebrates the life-giving energy of the sun and its role in nature.
The festival brings families and communities together in reverence.
It is observed as a means to invoke blessings, purity, and gratitude.`,

  "Baisakhi": `Baisakhi marks the harvest season and also the Sikh New Year.
It commemorates the formation of the Khalsa and the birth of Sikh identity.
Communities engage in prayers, processions, and festive meals.
The festival symbolizes renewal, prosperity, and cultural pride.
It is a time for gratitude, reflection, and communal unity.`,

  "Karva Chauth": `Karva Chauth is observed by married women who fast for the long life of their husbands.
The day is filled with rituals, prayers, and social gatherings.
It highlights marital devotion, sacrifice, and the strength of familial bonds.
Women adorn themselves in traditional attire and celebrate with grace.
The festival reaffirms commitment, love, and cultural traditions within families.`,

  "Bhai Dooj": `Bhai Dooj celebrates the special bond between brothers and sisters.
It involves sisters praying for their brothers’ well-being and longevity.
The festival is marked by the exchange of gifts and heartfelt promises.
Families come together to honor love, protection, and mutual respect.
It is a joyful reminder of the strength of familial connections.`,

  "Lohri": `Lohri marks the end of winter in North India and welcomes the warmth of longer days.
It is celebrated with bonfires, traditional songs, and dances.
Families gather to share roasted treats and festive meals around the fire.
The festival symbolizes fertility, prosperity, and community spirit.
It is a time of gratitude for the harvest and the promise of a new season.`,

  "Vasant Panchami": `Vasant Panchami heralds the arrival of spring and is dedicated to Goddess Saraswati.
It is celebrated with vibrant colors, music, and artistic expressions.
Devotees seek wisdom, creativity, and educational blessings.
The festival encourages learning and cultural rejuvenation.
It marks a time of hope, renewal, and the beauty of nature in full bloom.`,

  "Hartalika Teej": `Hartalika Teej is observed by married women through fasting and prayers.
It commemorates the union of Goddess Parvati and Lord Shiva.
The festival emphasizes marital devotion, fertility, and renewal.
Women dress in traditional attire and perform elaborate rituals.
It is a celebration that strengthens the bonds of love and commitment.`,

  "Hariyali Teej": `Hariyali Teej celebrates nature’s bounty and the rejuvenation of the earth.
It marks the arrival of the monsoon and the onset of greenery.
Women observe fasts and engage in dances and rituals.
The festival is a time to honor health, prosperity, and fertility.
It symbolizes the vibrant connection between nature and cultural tradition.`,

  "Kajari Teej": `Kajari Teej is celebrated with folk songs, dances, and traditional gatherings.
It reflects the joy of the monsoon season and the lush beauty of nature.
Communities join together to share cultural performances and rituals.
The festival emphasizes renewal, prosperity, and artistic expression.
It is a celebration of local heritage and the spirit of togetherness.`,

  "Ahoi Ashtami": `Ahoi Ashtami is observed with deep reverence and fasting among its devotees.
It involves a series of prayers and ritualistic offerings to invoke divine protection.
The festival commemorates ancient traditions of sacrifice and devotion.
Communities come together to perform time-honored ceremonies.
It is a celebration that strengthens faith, unity, and spiritual resolve.`,

  "Govardhan Puja": `Govardhan Puja honors the sacred Govardhan Hill and the legend of Lord Krishna.
Devotees prepare elaborate offerings and perform ceremonial rituals.
The festival underscores the importance of nature, gratitude, and humility.
It teaches lessons of faith, community service, and environmental respect.
Celebrations include communal feasts, prayers, and joyful processions.`,

  "Annakut": `Annakut, meaning “mountain of food,” celebrates the harvest and abundance.
Devotees prepare a variety of dishes as offerings to deities.
The festival is a time to express gratitude for nature’s generosity.
Families and communities share meals and festive treats with joy.
It symbolizes unity, prosperity, and the spirit of giving.`,

  "Shitala Ashtami": `Shitala Ashtami is dedicated to Goddess Shitala, revered for her healing powers.
Devotees observe the day with prayers, offerings, and traditional rituals.
It is celebrated as a means to seek protection from diseases.
The festival emphasizes compassion, health, and the nurturing power of faith.
Communities come together to honor healing, care, and divine mercy.`,

  "Skanda Sashti": `Skanda Sashti is dedicated to Lord Murugan and commemorates his victory over evil.
Devotees observe fasting, recite hymns, and participate in processions.
The festival emphasizes courage, sacrifice, and spiritual strength.
It is a time for community gatherings and temple rituals.
Celebrations remind devotees of the power of faith and perseverance.`,

  "Ayyappa Mandala Pooja": `Ayyappa Mandala Pooja is observed over several days by devotees of Lord Ayyappa.
It involves strict fasting, pilgrimages, and continuous prayers.
The festival signifies spiritual discipline, self-restraint, and devotion.
Pilgrims undertake a sacred journey that transforms both body and soul.
It is a celebration of humility, perseverance, and divine grace.`,

  "Ratha Saptami": `Ratha Saptami marks the change of seasons and is dedicated to the Sun God.
Devotees offer prayers and perform special rituals to honor the sun’s energy.
It symbolizes the rejuvenation of life, light, and power.
The festival brings communities together through cultural performances.
It serves as a reminder of the cyclical nature of life and renewal.`,

  "Akshaya Tritiya": `Akshaya Tritiya is considered one of the most auspicious days, symbolizing eternal prosperity.
It marks the beginning of new ventures and the promise of abundance.
Devotees perform rituals, invest in new projects, and seek blessings.
The festival is celebrated with prayers, feasts, and acts of charity.
It inspires hope, optimism, and a spirit of continual growth.`,

  "Onam": `Onam is the principal festival of Kerala, celebrating the legendary King Mahabali.
It is observed with grand feasts, intricate floral arrangements, and traditional dances.
The festival symbolizes prosperity, cultural richness, and the joy of harvest.
Families and communities come together in elaborate rituals and sports.
It is a time for unity, gratitude, and the celebration of local heritage.`,

  "Ugadi": `Ugadi marks the New Year in several South Indian states with a promise of new beginnings.
Families decorate their homes and prepare special festive dishes.
The celebration involves prayers, music, and recitations of ancient texts.
It symbolizes renewal, hope, and the commencement of a vibrant cycle.
Communities join in festivities that emphasize cultural identity and optimism.`,

  "Vishu": `Vishu is celebrated as the New Year in Kerala, heralding the arrival of spring.
It involves special rituals like the display of “Vishu Kani” to invite prosperity.
Families share a festive meal and exchange blessings for the future.
The festival is a time for renewal, joy, and community bonding.
It reflects gratitude for nature’s bounty and the promise of a fresh start.`,

  "Thai Pusam": `Thai Pusam is observed by the Tamil community in honor of Lord Murugan.
Devotees engage in fasting, processions, and special prayers.
The festival celebrates courage, faith, and the victory of good over evil.
It brings together communities through vibrant rituals and cultural events.
It is a time to renew spiritual commitment and express devotion.`,

  "Karthigai Deepam": `Karthigai Deepam is the festival of lights in Tamil Nadu, dedicated to divine energy.
Homes and temples are adorned with oil lamps and decorative lights.
It symbolizes the victory of light over darkness and spiritual illumination.
Communities gather for prayers, music, and cultural performances.
The festival inspires hope, unity, and the celebration of life’s blessings.`,

  "Avani Avittam": `Avani Avittam marks an important ritual in the Tamil calendar involving the change of sacred threads.
Devotees renew their vows and perform specific rites for purification.
It emphasizes discipline, cultural identity, and spiritual commitment.
Families participate in ceremonies that invoke blessings for prosperity.
The festival is a celebration of tradition, renewal, and inner strength.`,

  "Margazhi Festival": `Margazhi Festival is a time of devotion and classical music celebrated in Tamil Nadu.
It features spiritual songs, dance performances, and communal gatherings.
The festival fosters introspection, artistic expression, and cultural pride.
Devotees immerse themselves in devotional rituals and creative art forms.
It is a celebration of faith, heritage, and the beauty of spiritual music.`,

  "Masi Magam": `Masi Magam is celebrated on the full moon day in the Tamil month of Masi.
Devotees take holy baths and offer prayers at riverbanks and temples.
The festival symbolizes purification, renewal, and the washing away of sins.
Communities engage in processions and vibrant cultural rituals.
It is a time to embrace spiritual cleansing and communal joy.`,

  "Tirukarthikai": `Tirukarthikai is observed as the festival of lights in Tamil Nadu.
It honors the divine spark and the power of illumination.
Families light lamps and perform special pujas to dispel darkness.
The festival symbolizes hope, renewal, and spiritual clarity.
It unites communities in a celebration of light and cultural heritage.`,

  "Meena Sankranti": `Meena Sankranti marks the sun’s transit into the zodiac sign of Pisces.
It is observed with rituals that honor the cosmic cycle and nature’s rhythm.
Devotees take sacred dips and perform prayers for health and prosperity.
The festival emphasizes renewal, balance, and spiritual awakening.
It is a time for reflection on the cyclical patterns of life and nature.`,

  "Varamahalakshmi Vratham": `Varamahalakshmi Vratham is dedicated to Goddess Lakshmi, the embodiment of wealth and prosperity.
Devotees observe strict fasting and perform intricate rituals.
It emphasizes the importance of fortune, abundance, and family well-being.
Communities gather to share prayers, offerings, and festive meals.
The festival is a heartfelt expression of gratitude and the desire for divine blessings.`,

  "Kumbha Mela": `Kumbha Mela is one of the world’s largest religious gatherings.
Millions of devotees come together for spiritual bathing, meditation, and prayers.
The festival marks a significant astrological event and a renewal of spirit.
It symbolizes unity, cleansing, and the power of collective devotion.
Communities share in cultural exchange and an intense spiritual atmosphere.`,

  "Attukal Pongala": `Attukal Pongala is a unique festival celebrated predominantly by women in Kerala.
It involves preparing a special sweet dish as an offering to the Goddess.
The ritual underscores the power of collective devotion and community spirit.
Women come together in kitchens and public spaces to cook and celebrate.
It is a vibrant celebration of cultural identity, unity, and divine blessings.`,

  "Bhoothanatha Aradhana": `Bhoothanatha Aradhana is observed with deep reverence as devotees honor ancestral spirits.
It involves ritualistic prayers, processions, and communal gatherings.
The festival emphasizes the remembrance of tradition and respect for heritage.
Communities partake in ceremonies that invoke blessings from past generations.
It is a celebration of continuity, spiritual legacy, and cultural identity.`,

  "Guru Nanak Jayanti": `Guru Nanak Jayanti celebrates the birth of Guru Nanak, the founder of Sikhism.
Devotees participate in prayers, kirtans, and processions at gurudwaras.
The festival emphasizes equality, service, and the spiritual teachings of the Guru.
Communities come together to share meals, recite hymns, and reflect on his legacy.
It is a day of joy, unity, and the celebration of profound moral values.`,

  "Hola Mohalla": `Hola Mohalla is a dynamic Sikh festival celebrated with martial arts displays and cultural parades.
It is marked by demonstrations of valor, traditional sports, and community prayers.
The festival reinforces the importance of courage, honor, and fellowship.
Participants engage in simulated battles and skillful performances.
It is a celebration of heritage, physical prowess, and the spirit of camaraderie.`,

  "Gurpurabs": `Gurpurabs are celebrations that mark important events in the lives of Sikh Gurus.
They include devotional singing, communal prayers, and acts of service.
The festivals honor the wisdom, sacrifice, and teachings of the Gurus.
Communities unite in remembrance and reflection on spiritual guidance.
They are a time for reaffirming values of compassion, equality, and humility.`,

  "Maghi Mela": `Maghi Mela is a traditional fair and religious gathering observed with great enthusiasm.
Devotees take part in prayers, cultural performances, and community rituals.
It signifies the celebration of life, heritage, and the passage of time.
Communities honor age-old customs through processions and festive events.
The festival is a vibrant expression of cultural unity and spiritual renewal.`,

  "Buddha Purnima": `Buddha Purnima commemorates the birth, enlightenment, and passing of Lord Buddha.
Devotees observe the day with meditation, prayers, and recitation of sacred texts.
The festival emphasizes compassion, mindfulness, and the quest for inner peace.
Temples and communities host cultural programs and spiritual discussions.
It is a time for reflection, learning, and the celebration of a profound legacy.`,

  "Mahavir Jayanti": `Mahavir Jayanti celebrates the birth of Lord Mahavir, a central figure in Jainism.
Devotees observe the day with fasting, prayers, and acts of charity.
It emphasizes non-violence, truth, and the pursuit of spiritual purity.
Communities engage in processions and share stories of his life and teachings.
The festival inspires self-reflection, ethical living, and compassion for all beings.`,

  "Paryushana": `Paryushana is one of the most important Jain festivals focused on spiritual purification.
Devotees engage in fasting, introspection, and the recitation of scriptures.
It emphasizes forgiveness, self-discipline, and moral renewal.
Communities come together for extended periods of prayer and reflection.
The festival fosters an atmosphere of inner cleansing and ethical commitment.`,

  "Kartik Purnima": `Kartik Purnima is celebrated on the full moon day of the Hindu month of Kartik.
It is marked by temple visits, prayers, and ritualistic bathing.
The festival signifies spiritual renewal, devotion, and community bonding.
Devotees express gratitude for divine protection and guidance.
It is a day for introspection, celebration, and cultural festivities.`,

  "Losar": `Losar is the Tibetan New Year celebrated with colorful traditions and rituals.
It marks the renewal of life, hope, and the triumph of light over darkness.
Communities observe the day with prayers, dances, and festive feasts.
The festival emphasizes cultural heritage, unity, and spiritual rebirth.
It is a time for family gatherings, introspection, and joyful celebration.`,

  "Asalha Puja": `Asalha Puja commemorates the first sermon given by Lord Buddha.
Devotees observe the day with meditation, teachings, and spiritual reflection.
It emphasizes the importance of the Dharma and ethical living.
Communities gather in temples to listen to discourses and chant prayers.
It is a time to renew commitment to the path of mindfulness and compassion.`,

  "Dhamma Chakra Pravartan Din": `Dhamma Chakra Pravartan Din marks the reintroduction of Buddhism in India.
Devotees celebrate with prayers, meditation, and cultural events.
The festival highlights the revival of ancient spiritual teachings.
It is observed with a focus on self-improvement and community harmony.
The celebration is a reaffirmation of faith, enlightenment, and unity.`,

  "Uposatha": `Uposatha is observed by Buddhists as a day of intensified spiritual practice.
Devotees engage in meditation, recitations, and reflection on the Buddha’s teachings.
The festival emphasizes self-discipline, mindfulness, and ethical conduct.
It is a time for communal worship, study, and introspection.
Uposatha reinforces the commitment to inner peace and spiritual growth.`,

  "Ollala Festival": `Ollala Festival is celebrated with unique local traditions and artistic expressions.
It brings communities together through music, dance, and traditional rituals.
The festival is a celebration of local heritage and creative spirit.
Devotees partake in communal events that highlight cultural diversity.
It symbolizes unity, joy, and the preservation of indigenous customs.`,

  "Eid-ul-Fitr": `Eid-ul-Fitr marks the end of Ramadan and a month of fasting.
Muslims celebrate the day with communal prayers, feasts, and acts of charity.
It is a time for joy, gratitude, and spiritual renewal.
Communities come together in a spirit of unity and generosity.
The festival reflects discipline, compassion, and the values of faith.`,

  "Eid-ul-Adha": `Eid-ul-Adha commemorates the willingness of Prophet Ibrahim to sacrifice his son.
It is celebrated with prayers, the sacrifice of an animal, and sharing of meals.
The festival emphasizes obedience, selflessness, and faith.
Muslims around the world engage in acts of charity and kindness.
It is a day to reflect on sacrifice, community, and divine mercy.`,

  "Muharram": `Muharram is one of the most solemn periods in the Islamic calendar.
It marks the beginning of the Islamic New Year and is observed with reflection.
Devotees remember historical sacrifices and moments of valor.
The period is marked by processions, prayers, and communal gatherings.
It is a time to reflect on justice, resilience, and the cost of sacrifice.`,

  "Shab-e-Barat": `Shab-e-Barat is observed as a night of forgiveness and prayers by Muslims.
Devotees spend the night in reflection, seeking divine mercy.
The festival emphasizes repentance, compassion, and spiritual renewal.
Communities gather for late-night prayers and cultural recitations.
It is celebrated as a night of hope, forgiveness, and blessed unity.`,

  "Ramadan": `Ramadan is a holy month of fasting, prayer, and self-reflection in Islam.
Muslims abstain from food and drink from sunrise to sunset.
The month is dedicated to spiritual cleansing, charity, and community bonding.
Families and friends come together for iftar meals and nightly prayers.
It is a period of discipline, empathy, and renewed commitment to faith.`,

  "Milad-un-Nabi": `Milad-un-Nabi celebrates the birth of Prophet Muhammad, the founder of Islam.
Devotees observe the day with recitations, prayers, and communal gatherings.
The festival highlights the values of peace, compassion, and unity.
It is a time to reflect on the Prophet’s teachings and legacy.
Communities share in acts of kindness, storytelling, and spiritual reflection.`,

  "Jamat-Ul-Vida": `Jamat-Ul-Vida is observed as a significant farewell prayer in the Islamic tradition.
Muslims gather for communal prayers and reflective discussions.
The observance reinforces the bonds of community and shared faith.
It is a time to reaffirm spiritual commitment and mutual respect.
The festival embodies the essence of unity and divine guidance.`,

  "Laylat al-Qadr": `Laylat al-Qadr, the Night of Power, is believed to be when the Quran was revealed.
Devotees spend the night in deep prayer, meditation, and recitation.
The festival emphasizes the power of faith, mercy, and divine intervention.
It is a time for introspection, heightened devotion, and spiritual renewal.
Communities observe this sacred night with hope, discipline, and gratitude.`,

  "Chaand Raat": `Chaand Raat marks the eve of Eid, filled with anticipation and communal celebration.
It is a night when markets come alive and families prepare for the festivities.
The festival is a prelude to a day of prayer, joy, and shared blessings.
People decorate their homes and exchange warm wishes.
It symbolizes the unity and excitement that precedes the joyous day of Eid.`,

  "Christmas": `Christmas commemorates the birth of Jesus Christ and is celebrated worldwide.
Families decorate homes, exchange gifts, and share festive meals.
The festival signifies hope, love, and the spirit of giving.
It is observed with church services, carols, and acts of charity.
Communities come together to celebrate peace, unity, and renewal of spirit.`,

  "Good Friday": `Good Friday is a solemn day that commemorates the crucifixion of Jesus Christ.
Christians observe it with fasting, prayer, and reflective silence.
It serves as a reminder of sacrifice, redemption, and the power of love.
Communities engage in processions and meditative services.
It is a time for deep reflection, mourning, and spiritual renewal.`,

  "Easter": `Easter celebrates the resurrection of Jesus Christ and the triumph of life over death.
It is observed with church services, festive gatherings, and joyful feasts.
Families share moments of hope, renewal, and heartfelt gratitude.
The festival symbolizes victory, rebirth, and divine love.
It inspires communities to embrace a future filled with optimism and unity.`,

  "Palm Sunday": `Palm Sunday marks the beginning of Holy Week in the Christian tradition.
It commemorates Jesus Christ’s triumphant entry into Jerusalem.
Devotees carry palm fronds as symbols of peace, victory, and hope.
The festival invites reflection, prayer, and communal celebration.
It is a prelude to a week of deep spiritual significance and renewal.`,

  "Feast of St. Thomas": `The Feast of St. Thomas honors the apostle who played a key role in spreading Christianity in India.
It is celebrated with prayers, processions, and cultural events.
The festival emphasizes faith, perseverance, and cross-cultural exchange.
Communities reflect on the legacy of St. Thomas through music and rituals.
It serves as a bridge between tradition, history, and spiritual devotion.`,

  "St. Francis Xavier Feast": `St. Francis Xavier Feast commemorates the contributions of the esteemed missionary.
Devotees participate in processions, prayers, and charitable activities.
The festival celebrates his role in spreading the message of love and service.
It is a day of remembrance, unity, and spiritual inspiration.
Communities honor his legacy with acts of kindness and devotion.`,

  "New Year (Christian)": `The Christian New Year is celebrated with hope, reflection, and joyful anticipation.
Families gather for special services, prayers, and festive meals.
It signifies the promise of new beginnings and the renewal of spirit.
The day is marked by celebrations that honor past blessings and future hopes.
Communities embrace the future with faith, optimism, and shared joy.`,

  "All Saints' Day": `All Saints' Day is dedicated to remembering and honoring the saints and martyrs.
Devotees visit cemeteries, light candles, and offer prayers.
The festival emphasizes gratitude for spiritual role models and divine guidance.
Communities come together to reflect on the legacy of faith.
It is a time for remembrance, unity, and reverence for sacred lives.`,

  "Pentecost": `Pentecost celebrates the descent of the Holy Spirit upon the apostles.
It is observed with church services, prayers, and jubilant singing.
The festival symbolizes the spread of the Christian message and unity.
Devotees reflect on spiritual empowerment and renewal of faith.
It is a day of celebration, communal joy, and divine inspiration.`,

  "Ascension Day": `Ascension Day commemorates the day Jesus Christ ascended to heaven.
It is observed with prayers, hymns, and moments of reflection.
The festival signifies the promise of eternal life and divine guidance.
Communities gather to honor spiritual fulfillment and hope.
It is a time for gratitude, contemplation, and celebration of the sacred.`,

  "Navroz": `Navroz marks the Persian New Year and celebrates the arrival of spring.
It is observed with festive meals, music, and cultural performances.
The festival symbolizes renewal, hope, and the continuity of tradition.
Communities come together to share in joyous rituals and family gatherings.
It is a celebration of heritage, unity, and the promise of new beginnings.`,

  "Khordad Sal": `Khordad Sal is observed by followers of Zoroastrian traditions to celebrate the birthday of Prophet Zoroaster.
Devotees engage in prayers, communal feasts, and cultural rituals.
The festival emphasizes wisdom, righteousness, and spiritual renewal.
It is a time to reflect on ancient teachings and moral values.
Communities unite in celebration of heritage, faith, and hope.`,

  "Zarthost No Deeso": `Zarthost No Deeso is celebrated to honor the teachings of Zoroastrianism.
It involves rituals, prayers, and gatherings that invoke ancient wisdom.
The festival symbolizes the triumph of truth, light, and ethical living.
Communities come together to express cultural pride and spiritual devotion.
It is a time for reflection, unity, and the celebration of an enduring legacy.`,

  "Mehergan": `Mehergan is a traditional festival celebrated by the Zoroastrian community.
It marks a time of harvest, gratitude, and cultural festivities.
Devotees observe rituals, share meals, and enjoy artistic performances.
The festival symbolizes abundance, unity, and respect for nature.
It is a celebration that bridges ancient tradition with modern hope.`,

  "Sadeh Festival": `Sadeh Festival commemorates the discovery of fire in ancient times.
It is observed with bonfires, communal gatherings, and traditional songs.
The festival emphasizes the life-giving power of fire and warmth.
Communities celebrate with dance, music, and joyful rituals.
It symbolizes the triumph of light, energy, and the spirit of innovation.`,

  "Jamshedi Navroz": `Jamshedi Navroz is celebrated as the Persian New Year in honor of King Jamshed.
It involves cultural festivities, prayers, and family gatherings.
The festival signifies renewal, historical continuity, and cultural pride.
Devotees share traditional foods and engage in age-old rituals.
It is a time for reflection, joy, and the celebration of a rich heritage.`,

  "Hornbill Festival": `The Hornbill Festival is a vibrant celebration of the indigenous cultures of Northeast India.
It showcases traditional dances, music, and art forms in colorful displays.
The festival is a platform for cultural exchange and unity.
Communities come together to celebrate diversity and local traditions.
It is a joyous expression of heritage, creativity, and communal pride.`,

  "Losoong": `Losoong is celebrated with distinctive local customs and community festivities.
It involves traditional music, dance, and cultural rituals.
The festival marks a season of harvest, renewal, and local pride.
Communities gather to share stories, food, and artistic expressions.
It is a celebration of regional heritage, unity, and hope.`,

  "Wangala Festival": `Wangala Festival is celebrated by the Garo tribe with energetic music and dance.
It marks the harvest season and expresses gratitude for nature’s bounty.
Traditional drumming, singing, and communal rituals create a festive atmosphere.
The festival symbolizes cultural identity, unity, and joyous celebration.
It is a time to honor nature, heritage, and the collective spirit of the community.`,

  "Bihu": `Bihu is one of Assam’s most important festivals, celebrating the agricultural cycle.
It marks the harvest, new beginnings, and cultural vibrancy.
Families engage in folk dances, songs, and shared feasts.
The festival is a time of hope, unity, and the celebration of nature.
It reflects the deep bond between the people and the land they nurture.`,

  "Chapchar Kut": `Chapchar Kut is a spring festival celebrated by the indigenous communities of Mizoram.
It marks the end of the slash-and-burn cultivation cycle and the arrival of spring.
Festivities include traditional dance, music, and community feasts.
The festival is a joyful expression of renewal, hope, and cultural identity.
It brings communities together in celebration of nature and collective resilience.`,

  "Kang Chingba": `Kang Chingba is celebrated by local communities with traditional rituals and performances.
It signifies the arrival of a new season and the rejuvenation of nature.
Devotees participate in processions, folk music, and dance.
The festival emphasizes cultural heritage, unity, and the renewal of life.
It is a time to honor tradition and the natural cycle of growth.`,

  "Sarhul": `Sarhul is a festival celebrated by tribal communities marking the onset of spring.
It involves rituals, dance, and traditional music to honor nature.
The festival emphasizes the sacred bond between humans and the earth.
Communities share in feasts, prayers, and cultural ceremonies.
It is a time of renewal, gratitude, and the celebration of life’s cycles.`,

  "Mim Kut": `Mim Kut is celebrated by tribal communities in Northeast India to mark the end of the harvest season.
It is a time of gratitude, feasting, and traditional rituals.
Devotees engage in dance, music, and communal gatherings.
The festival symbolizes abundance, renewal, and cultural continuity.
It is a celebration of community spirit, heritage, and joy.`,

  "Tusu Parab": `Tusu Parab is a harvest festival observed with local customs and traditional music.
It involves folk songs, dances, and community feasts.
The festival celebrates the bounty of nature and the spirit of togetherness.
It emphasizes gratitude, cultural identity, and the promise of new beginnings.
Communities unite in a vibrant display of tradition and joy.`,

  "Bastar Dussehra": `Bastar Dussehra is a unique celebration in the Bastar region with its own distinctive traditions.
It differs from mainstream Dussehra by emphasizing local myths and rituals.
Festivities include processions, dance performances, and community prayers.
The festival celebrates regional deities and the triumph of local culture.
It is a time for embracing diversity, heritage, and communal pride.`,

  "Karma Puja": `Karma Puja is observed to honor nature’s forces and ancestral spirits.
Devotees perform dances, rituals, and prayers to seek blessings.
The festival emphasizes the balance between human life and nature.
It is celebrated with community gatherings and traditional music.
It is a reflection of gratitude, cultural identity, and spiritual renewal.`,

  "Sume-Gelirak": `Sume-Gelirak is a regional festival with deep cultural significance.
It involves traditional rituals, music, and community feasting.
The celebration marks an important seasonal or spiritual milestone.
Devotees come together to honor age-old customs and ancestral wisdom.
It is a time for reflection, unity, and joyful cultural expression.`,

  "Kailpoldu": `Kailpoldu is observed with local customs to mark seasonal transitions.
It involves prayers, folk songs, and communal celebrations.
The festival emphasizes cultural heritage, nature’s rhythms, and renewal.
Communities gather to share traditional foods and festive rituals.
It is a time for unity, reflection, and celebrating the bounty of nature.`,

  "Kottiyoor Utsavam": `Kottiyoor Utsavam is a grand festival celebrated in the Kottiyoor region.
It involves elaborate pilgrimages, ritualistic ceremonies, and cultural performances.
The festival is dedicated to spiritual renewal and honoring local legends.
Communities unite to share prayers, art, and time-honored traditions.
It symbolizes devotion, unity, and the celebration of sacred heritage.`,

  "Bhogali Bihu": `Bhogali Bihu is the harvest festival of Assam, focused on feasting and merriment.
It marks the culmination of the harvest season with abundant food and dance.
Families and communities gather to share traditional recipes and cultural performances.
The festival is a time to express gratitude for nature’s bounty.
It celebrates community, joy, and the spirit of togetherness.`,

  "Magh Bihu": `Magh Bihu is observed in Assam as a festival of community feasting and bonfires.
It marks the end of the harvest season with shared meals and social gatherings.
Devotees celebrate with traditional sports, songs, and warmth of community.
The festival symbolizes gratitude, renewal, and the spirit of unity.
It is a time for reflecting on abundance and celebrating life’s harvest.`,

  "Karam Festival": `Karam Festival is celebrated by tribal communities to honor nature and fertility.
It involves communal prayers, dance performances, and traditional songs.
The festival emphasizes the harmony between nature and human life.
Communities come together to express gratitude and cultural pride.
It is a vibrant celebration of heritage, unity, and the cycles of nature.`,

  "Moatsu Mong": `Moatsu Mong is a regional festival celebrated with local customs and traditional art.
It involves cultural performances, rituals, and communal meals.
The festival marks an important seasonal or historical event.
Devotees express gratitude, unity, and pride in their heritage.
It is a time for collective joy, remembrance, and cultural celebration.`,

  "Chakan Gaan-Ngai": `Chakan Gaan-Ngai is observed with unique local traditions and cultural performances.
It involves traditional music, dance, and community rituals.
The festival celebrates local legends, heritage, and spiritual values.
Communities come together to honor their past and inspire the future.
It is a reflection of unity, joy, and the preservation of cultural identity.`,

  "Hanuman Jayanti": `Hanuman Jayanti celebrates the birth of Lord Hanuman, an icon of strength and devotion.
Devotees observe the day with prayers, fasting, and community gatherings.
The festival emphasizes courage, loyalty, and selfless service.
It inspires people to overcome obstacles with determination and faith.
Communities celebrate by recounting his tales of bravery and divine devotion.`,

  "Surya Shashti": `Surya Shashti is dedicated to the Sun God and the energy he provides.
Devotees offer prayers, perform rituals, and seek blessings for health.
The festival signifies renewal, vitality, and spiritual awakening.
Communities gather to honor the life-giving power of the sun.
It is a time to celebrate nature’s energy and the promise of a new day.`,

  "Tulsi Vivah": `Tulsi Vivah marks the ceremonial marriage of the sacred Tulsi plant to Lord Vishnu.
It is celebrated with elaborate rituals, songs, and festive decorations.
The festival signifies the union of nature with divinity and tradition.
Families and communities perform ceremonies to invoke prosperity and love.
It is a time to celebrate devotion, cultural heritage, and spiritual unity.`,

  "Sharad Purnima": `Sharad Purnima is celebrated on the full moon night of the autumn season.
It is marked by moon-gazing, prayers, and the sharing of sweets.
The festival symbolizes abundance, divine blessings, and seasonal change.
Communities gather to celebrate nature’s beauty and spiritual renewal.
It is a night of joy, reflection, and the celebration of cosmic light.`,

  "Vaikunta Ekadashi": `Vaikunta Ekadashi is observed by devotees of Lord Vishnu with fasting and prayers.
It marks the opening of the celestial door to the divine abode.
The festival emphasizes spiritual cleansing, hope, and renewal.
Communities come together in temples to share in sacred rituals.
It is a time for introspection, devotion, and the promise of divine grace.`,

  "Saraswati Puja": `Saraswati Puja is dedicated to Goddess Saraswati, the deity of knowledge and arts.
Devotees offer prayers, perform cultural programs, and seek wisdom.
The festival highlights the importance of learning, creativity, and inspiration.
Communities celebrate with music, dance, and traditional recitations.
It is a day to honor education, art, and the power of knowledge.`,

  "Nag Panchami": `Nag Panchami is celebrated in reverence of snake deities, symbolizing fertility and protection.
Devotees offer milk and prayers to honor these sacred creatures.
The festival emphasizes the balance of nature and the sanctity of life.
Communities perform rituals that highlight respect for all living beings.
It is a celebration of tradition, renewal, and ecological harmony.`,

  "Anant Chaturdashi": `Anant Chaturdashi is observed with deep devotion to Lord Vishnu.
Devotees perform rituals, fast, and offer prayers for divine protection.
The festival symbolizes eternal renewal, abundance, and cosmic balance.
It is a time for introspection, community bonding, and spiritual discipline.
Communities gather to honor the infinite nature of life and its blessings.`,

  "Ganga Dussehra": `Ganga Dussehra celebrates the sacred river Ganga and its purifying powers.
Devotees take ritual baths and offer prayers along the riverbanks.
The festival emphasizes the importance of nature in spiritual cleansing.
It is a time to express gratitude for the life-sustaining force of the river.
Communities unite to celebrate purity, renewal, and divine blessings.`,

  "Vat Purnima": `Vat Purnima is celebrated predominantly by married women to honor marital fidelity.
Devotees perform rituals and fast around sacred banyan trees.
The festival emphasizes the sanctity of marriage, love, and longevity.
It is a day for reflection, prayer, and reaffirmation of family bonds.
Communities share in the joy of tradition, unity, and hope for enduring love.`,

  "Jivitputrika (Jitiya) Vrat": `Jivitputrika Vrat is observed by mothers praying for the well-being of their children.
It involves fasting, prayers, and specific traditional rituals.
The festival symbolizes maternal love, sacrifice, and hope for long life.
Communities come together to share blessings and cultural customs.
It is a celebration of family, nurturing care, and spiritual devotion.`,

  "Paush Purnima": `Paush Purnima is celebrated on the full moon of the Paush month, marking seasonal transitions.
Devotees engage in prayers, cultural performances, and community feasts.
The festival emphasizes nature’s rhythms, renewal, and divine grace.
It is a time for introspection, celebration, and cultural continuity.
Communities unite to honor the cycles of nature and shared traditions.`,

  "Tulsidas Jayanti": `Tulsidas Jayanti commemorates the birth of the great poet-saint Tulsidas.
Devotees recite his works, perform bhajans, and hold cultural events.
The festival emphasizes the power of literature, devotion, and moral teachings.
Communities reflect on his contributions to spiritual and cultural heritage.
It is a day to celebrate art, wisdom, and the legacy of soulful expression.`,

  "Guru Purnima": `Guru Purnima is dedicated to honoring spiritual teachers and mentors.
Devotees express gratitude through prayers, offerings, and communal gatherings.
The festival underscores the importance of wisdom, guidance, and learning.
It is a time for reflection on the transformative power of a true guru.
Communities celebrate the sacred bond between teacher and student.`,

  "Rishi Panchami": `Rishi Panchami is observed as a day to honor ancient sages and their teachings.
Devotees perform rituals, offer prayers, and seek blessings from nature.
The festival emphasizes respect for wisdom, learning, and cultural heritage.
Communities come together to reflect on the legacy of the seers.
It is a time for gratitude, reflection, and spiritual connection.`,

  "Somvati Amavasya": `Somvati Amavasya is a special new moon day with deep cultural and spiritual significance.
Devotees observe fasts, perform rituals, and engage in quiet reflection.
The festival symbolizes new beginnings, renewal, and inner cleansing.
Communities gather to share prayers, stories, and ancestral traditions.
It is a time for introspection, gratitude, and the celebration of life’s cyclical nature.`
};


function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [year, setYear] = useState(currentMonth.getFullYear());
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fetch events from Calendarific API
  useEffect(() => {
    const apiUrl = `https://calendarific.com/api/v2/holidays?api_key=0rtvZDjDpZz02bgAi8nkAlY9lfwDFWqA&country=IN&year=${year}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data?.response?.holidays) {
          // Filter only those festivals matching our list
          const festivalEvents = data.response.holidays.filter((holiday) =>
            indianFestivals.some(festival => holiday.name.includes(festival))
          );
          const eventList = festivalEvents.map((holiday) => ({
            date: holiday.date.iso,
            title: holiday.name,
          }));
          setEvents(eventList);
        }
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, [year]);

  // Update year when currentMonth changes
  useEffect(() => {
    setYear(currentMonth.getFullYear());
  }, [currentMonth]);

  // Calculate upcoming events (within next 10 days) and prompt the user for the first one
  useEffect(() => {
    const now = new Date();
    const upcoming = events.filter((ev) => {
      const eventDate = parseISO(ev.date);
      const diff = differenceInCalendarDays(eventDate, now);
      return diff >= 0 && diff <= 10;
    });

    if (upcoming.length > 0 && !selectedEvent) {
      const firstEvent = upcoming[0];
      const userResponse = window.confirm(`Do you know why we celebrate ${firstEvent.title}?`);
      if (userResponse) {
        setSelectedEvent(firstEvent);
      }
    }
    setUpcomingEvents(upcoming);
  }, [events, selectedEvent]);

  // Calendar grid calculation
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  const rows = [];
  let day = startDate;
  while (day <= endDate) {
    const daysInRow = [];
    for (let i = 0; i < 7; i++) {
      const dayString = format(day, 'yyyy-MM-dd');
      const dayEvents = events.filter((ev) => ev.date === dayString);

      daysInRow.push(
        <TableCell
          key={day.toString()}
          style={{
            verticalAlign: 'top',
            height: '100px',
            width: '100px',
            border: '1px solid #ccc',
            padding: '8px',
            backgroundColor: !isSameMonth(day, monthStart) ? '#f9f9f9' : '#fff',
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              color: isSameMonth(day, monthStart) ? '#333' : '#999',
              backgroundColor: isToday(day) ? 'rgba(255, 165, 0, 0.3)' : 'transparent',
              borderRadius: '4px',
              display: 'inline-block',
              padding: '2px 4px',
            }}
          >
            {format(day, 'd')}
          </div>
          {dayEvents.length > 0 && (
            <div style={{ marginTop: '4px', fontSize: '0.9rem', color: '#b80' }}>
              {dayEvents.map((ev, index) => (
                <div key={index}>{ev.title}</div>
              ))}
            </div>
          )}
        </TableCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<TableRow key={rows.length}>{daysInRow}</TableRow>);
  }

  return (
    <div style={{ width: '650px', padding: '1rem', minHeight: '100vh' }}>
      {/* Display the detailed festival info if a festival is selected */}
      {selectedEvent && (
        <div style={{ background: '#fffae6', padding: '1rem', marginBottom: '1rem', border: '1px solid #ffb74d' }}>
          <strong>{selectedEvent.title}</strong>: {festivalDescriptions[selectedEvent.title] || "Information not available."}
        </div>
      )}
      {/* Notification banner for upcoming festivals */}      
      {upcomingEvents.length > 0 && (
        <div style={{ background: 'linear-gradient(90deg, #fff7e6, #ffe9d0)', padding: '0.75rem', marginBottom: '1rem', textAlign: 'center', color: '#6d6875', fontWeight: 'bold' }}>
          Upcoming Festivals: {upcomingEvents.map((ev, i) => (
            <span key={i}>{ev.title} on {ev.date}{i < upcomingEvents.length - 1 ? ", " : ""}</span>
          ))}
        </div>
      )}
      {/* Navigation buttons for month change */}      
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <Button variant="outlined" onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} style={{ marginRight: '1rem' }}>Prev</Button>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{format(currentMonth, 'MMMM yyyy')}</span>
        <Button variant="outlined" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} style={{ marginLeft: '1rem' }}>Next</Button>
      </div>
      {/* Calendar table */}      
      <Table>
        <TableHead>
          <TableRow>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
              <TableCell key={dayName} align="center" style={{ fontWeight: 'bold', backgroundColor: '#d1e0e0', border: '1px solid #ccc' }}>
                {dayName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </Table>
    </div>
  );
}

export default Calendar;