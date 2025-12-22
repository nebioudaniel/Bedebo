export const MOCK_QUESTIONS = [
  {
    id: 1, user: "Yared_Ethio", university: "AAU (6 Kilo)", category: "Career",
    question: "How do I apply for the Safaricom internship?", amharic: "ለሳፋሪኮም ኢንተርንሺፕ እንዴት ነው የማመለክተው?",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    aiAnswer: "Visit the Safaricom portal. Focus on Python and Cloud skills!",
    comments: [{ id: 101, user: "Abel", pic: "https://i.pravatar.cc/150?u=1", text: "I applied last week!" }]
  },
  {
    id: 2, user: "Muna_Gov", university: "Public Service University", category: "Law",
    question: "Requirements for Public Administration masters?", amharic: "ለፐብሊክ አድሚኒስትሬሽን ማስተርስ መስፈርቱ ምንድነው?",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600",
    aiAnswer: "2.5+ GPA and 2 years of government sector experience are required.",
    comments: [{ id: 201, user: "Tadesse", pic: "https://i.pravatar.cc/150?u=2", text: "Is the exam oral or written?" }]
  },
  {
    id: 3, user: "Sami_Fit", university: "Jimma University", category: "Sport",
    question: "When are the football tryouts?", amharic: "የኳስ ተጫዋች ምልመላው መቼ ነው?",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600",
    aiAnswer: "Every Tuesday at 4:30 PM at the main stadium.",
    comments: [{ id: 301, user: "Miki", pic: "https://i.pravatar.cc/150?u=3", text: "Let's go together!" }]
  },
  {
    id: 4, user: "Hana_Med", university: "Gonder Uni", category: "Health",
    question: "Best source for Anatomy notes?", amharic: "ለአናቶሚ ምርጥ ኖት የት ይገኛል?",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600",
    aiAnswer: "Check the Telegram channel 'Ethio-Med-Notes' or the Gonder library annex.",
    comments: [{ id: 401, user: "Lili", pic: "https://i.pravatar.cc/150?u=4", text: "I have a PDF summary if you need it." }]
  },
  {
    id: 5, user: "Bini_Design", university: "AAiT", category: "Engineering",
    question: "How to fix a convergence error in PSpice?", amharic: "በ PSpice ውስጥ የ Convergence Error እንዴት ይጠፋል?",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
    aiAnswer: "Increase the 'ITL4' iteration limit in simulation settings to 100.",
    comments: [{ id: 501, user: "Robel", pic: "https://i.pravatar.cc/150?u=5", text: "Also check your ground node!" }]
  },
  // Adding 20 more variations...
  { id: 6, user: "Rahel", university: "Hawassa Uni", category: "Life", amharic: "ጥሩ የጥናት ቦታ የት አለ?", question: "Quiet place to study?", aiAnswer: "The lake-side library is very peaceful.", comments: [] },
  { id: 7, user: "Dagi", university: "ASTU", category: "Tech", amharic: "አዳማ ውስጥ የፓይተን ኮርስ የት ይሰጣል?", question: "Python course in Adama?", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600", aiAnswer: "Check the ICT center at ASTU.", comments: [] },
  { id: 8, user: "Kalkidan", university: "Public Service Uni", category: "Career", amharic: "ስራ ፍለጋ ለሚፈልግ ተማሪ ምን ትመክራላችሁ?", question: "Career advice for seniors?", aiAnswer: "Build your LinkedIn profile and networking skills.", comments: [] },
  { id: 9, user: "Soli", university: "Arba Minch Uni", category: "Life", amharic: "ባጃጅ ስንት ነው?", question: "Bajaj price in AMU?", aiAnswer: "10 ETB per seat.", comments: [] },
  { id: 10, user: "Eyu", university: "Dire Dawa Uni", category: "Sport", amharic: "ቅርጫት ኳስ ሜዳው ክፍት ነው?", question: "Basketball court open?", aiAnswer: "Open until 8 PM daily.", comments: [] },
  { id: 11, user: "Sara", university: "AAU", category: "Health", amharic: "የጥርስ ህክምና የት ይሻላል?", question: "Best dentist for students?", aiAnswer: "6 Kilo campus clinic is reliable.", comments: [] },
  { id: 12, user: "Henok", university: "Wollo Uni", category: "Engineering", amharic: "ሲቪል ኢንጅነሪንግ ከባድ ነው?", question: "Is Civil Eng hard?", aiAnswer: "Focus on Strength of Materials and you'll be fine!", comments: [] },
  // ... and so on up to 25 items
  {
    id: 13,
    user: "Aman_Fresh",
    university: "AAU (5 Kilo)",
    category: "Life",
    question: "Where can I find the best 'Shero' near campus for a student budget?",
    amharic: "ለተማሪ ኪስ የሚሆን ምርጥ ሽሮ አምስት ኪሎ አካባቢ የት ይገኛል?",
    image: "https://images.unsplash.com/photo-1541518763531-4d715990e50c?w=600",
    aiAnswer: "Many students recommend 'Mama's Kitchen' or the small cafe right behind the main gate. Fast and cheap!",
    comments: [
      { id: 1301, user: "Soli_G", pic: "https://i.pravatar.cc/150?u=13", text: "Mama's Kitchen is legendary!" },
      { id: 1302, user: "Dagi", pic: "https://i.pravatar.cc/150?u=14", text: "እንጀራቸውም ምርጥ ነው!" }
    ]
  },
  {
    id: 14,
    user: "Public_Servant_25",
    university: "Ethiopian Public Service University",
    category: "Public Service",
    question: "How do I access the Digital Governance research archives?",
    amharic: "የዲጂታል አስተዳደር ጥናትና ምርምር መዛግብትን እንዴት ማግኘት እችላለሁ?",
    image: null,
    aiAnswer: "Login via the EPSU portal using your institutional ID. Go to the 'Research' tab under E-Services.",
    comments: [{ id: 1401, user: "Tadesse", pic: "https://i.pravatar.cc/150?u=15", text: "You might need a VPN if you're off-campus." }]
  },
  {
    id: 15,
    user: "Lili_Dev",
    university: "ASTU",
    category: "Tech",
    question: "Any students here working on Flutter for the upcoming Tech Expo?",
    amharic: "ለሚቀጥለው የቴክኖሎጂ ኤክስፖ በ Flutter የምትሰሩ ተማሪዎች አላችሁ?",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36734a04?w=600",
    aiAnswer: "There's a dedicated Flutter community in Adama. They meet every Saturday at the ICT lab.",
    comments: [{ id: 1501, user: "Eyu_Code", pic: "https://i.pravatar.cc/150?u=16", text: "I'm building a ride-hailing clone, let's collab!" }]
  },
  {
    id: 16,
    user: "Kidus_Arch",
    university: "EiABC",
    category: "Engineering",
    question: "What's the best software for rendering 3D models of historical buildings?",
    amharic: "ታሪካዊ ህንፃዎችን በ 3D ለመስራት ምርጡ ሶፍትዌር ምንድነው?",
    image: "https://images.unsplash.com/photo-1503387762-592eea58f4e8?w=600",
    aiAnswer: "Lumion or Twinmotion are great for realistic renders. For precision, stick to Revit.",
    comments: [{ id: 1601, user: "Sami_Art", pic: "https://i.pravatar.cc/150?u=17", text: "Revit is life!" }]
  },
  {
    id: 17,
    user: "Hanna_Law",
    university: "Mekelle Uni",
    category: "Law",
    question: "Can someone summarize the new Commercial Code changes?",
    amharic: "የአዲሱ የንግድ ሕግ ለውጦችን ማጠቃለያ ያለው አለ?",
    image: null,
    aiAnswer: "The major change is the introduction of One-Person Companies and simplified bankruptcy procedures.",
    comments: [{ id: 1701, user: "Abe_Legal", pic: "https://i.pravatar.cc/150?u=18", text: "I have the PDF summary in our group!" }]
  },
  {
    id: 18,
    user: "Miki_Vibes",
    university: "Hawassa Uni",
    category: "Sport",
    question: "Are there any weekend swimming classes at the lake resorts?",
    amharic: "በሳምንት መጨረሻ በሐይቁ ሪዞርቶች የመዋኛ ትምህርት አለ?",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
    aiAnswer: "Haile Resort offers student discounts on Sunday mornings. Check their reception.",
    comments: [{ id: 1801, user: "Rahel", pic: "https://i.pravatar.cc/150?u=19", text: "How much is the discount?" }]
  },
  {
    id: 19,
    user: "Abenezer_G",
    university: "Jimma University",
    category: "Health",
    question: "What is the most effective way to study for the COC exam?",
    amharic: "ለ COC ፈተና ለመዘጋጀት ውጤታማው መንገድ ምንድነው?",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
    aiAnswer: "Focus on previous year question papers and group discussions at the clinic.",
    comments: [{ id: 1901, user: "Dr_K", pic: "https://i.pravatar.cc/150?u=20", text: "Practice is key!" }]
  },
  {
    id: 20,
    user: "Soli_Style",
    university: "Bahir Dar Uni",
    category: "Life",
    question: "Where can I buy a cheap bike on campus? Walking is too much!",
    amharic: "ግቢ ውስጥ ርካሽ ብስክሌት የት ይሸጣል? በእግር መንገዱ በዛብኝ!",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600",
    aiAnswer: "Check the student bulletin board near the cafeteria. Graduating students sell them cheap!",
    comments: [{ id: 2001, user: "Bini_X", pic: "https://i.pravatar.cc/150?u=21", text: "I'm selling mine next month!" }]
  },
  {
    id: 21,
    user: "Nati_Biz",
    university: "AAU (Business)",
    category: "Career",
    question: "Best part-time jobs for Business students in Addis?",
    amharic: "አዲስ አበባ ውስጥ ለቢዝነስ ተማሪዎች የሚሆን ምርጥ የትርፍ ሰዓት ስራ?",
    image: null,
    aiAnswer: "Digital marketing agencies and sales roles in bole-based startups are your best bet.",
    comments: [{ id: 2101, user: "Sara", pic: "https://i.pravatar.cc/150?u=22", text: "Check out the 'EthioJobs' student section." }]
  },
  {
    id: 22,
    user: "Public_Policy_Expert",
    university: "Ethiopian Public Service University",
    category: "Public Service",
    question: "Impact of E-Government on service delivery speed in Addis?",
    amharic: "የኢ-መንግሥት አገልግሎት በአዲስ አበባ የአገልግሎት ፍጥነት ላይ ያለው ተፅዕኖ?",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600",
    aiAnswer: "Data shows a 40% reduction in processing time for business license renewals.",
    comments: [{ id: 2201, user: "Muna_G", pic: "https://i.pravatar.cc/150?u=23", text: "Wait times at 'Kifle Ketema' are still high though." }]
  }
];
