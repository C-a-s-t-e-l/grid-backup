// const dummyStories = [
//     {
//         id: '1',
//         title: 'The White Lady of Balete Drive',
//         locationName: 'Balete Drive, Quezon City',
//         lat: 14.6282, lng: 121.0448,
//         snippet: 'A famous urban legend about a ghostly woman often seen by motorists at night...',
//         fullStory: "Balete Drive in Quezon City is notorious for sightings of a 'White Lady.' Legend has it that she was a young woman who died tragically in the area, either in a car accident or as a victim of a heinous crime during the Japanese occupation. Motorists, especially taxi drivers passing through late at night, have reported seeing a beautiful woman in white hailing them, only to have her vanish from the backseat or appear terrifyingly in their rearview mirror. The large, old balete trees lining the street are said to be her favored haunting grounds, adding to the eerie atmosphere of this well-known road.",
//         authorNickname: 'ManilaByNight',
//         createdAt: '2023-10-15T14:30:00.000Z'
//     },
//     {
//         id: '2',
//         title: 'Manila Film Center Tragedy',
//         locationName: 'Manila Film Center, Pasay',
//         lat: 14.5500, lng: 120.9849,
//         snippet: 'Rumors of workers buried alive during its rushed construction in 1981...',
//         fullStory: "The Manila Film Center, built in a rush for an international film festival in 1981 under the Marcos regime, is shrouded in tragedy and ghostly tales. During its construction, a scaffolding collapsed, and it's widely rumored that many workers were buried alive in wet cement to meet the tight deadline, their bodies never recovered and entombed within the structure. Since then, employees and visitors have reported disembodied cries, apparitions, and an overwhelming sense of dread, particularly in the main theater. The building is considered one of the most haunted locations in Metro Manila.",
//         authorNickname: 'UrbanLegendSeeker',
//         createdAt: '2023-10-12T11:25:10.000Z'
//     },
//     {
//         id: '3',
//         title: 'Haunted Diplomat Hotel',
//         locationName: 'Diplomat Hotel, Baguio City',
//         lat: 16.4023, lng: 120.5795,
//         snippet: 'Once a seminary, then a hotel during WWII, now known for paranormal activity...',
//         fullStory: "The Diplomat Hotel in Baguio City sits atop Dominican Hill and has a dark history. Originally a rest house and seminary for Dominican friars in the early 20th century, it was later seized by Japanese forces during World War II and used as a garrison where many atrocities, including beheadings of priests, nuns, and refugees, reportedly took place. After the war, it was converted into a hotel, but tales of headless apparitions, ghostly children, and chilling screams persisted. Now abandoned, it's a popular spot for ghost hunters and curious visitors drawn by its terrifying reputation.",
//         authorNickname: 'BaguioBoy',
//         createdAt: '2022-09-05T21:45:00.000Z'
//     },
//     {
//         id: '4',
//         title: 'Tiyanak of San Pablo',
//         locationName: 'San Pablo City, Laguna',
//         lat: 14.0678, lng: 121.3250,
//         snippet: 'A vampiric creature from Philippine folklore that takes the form of a baby...',
//         fullStory: "The Tiyanak is a malevolent creature in Philippine mythology that often takes the form of a crying baby to lure unsuspecting victims into remote areas. Once picked up or approached, it reveals its true, monstrous form – often described as a small, goblin-like creature with sharp claws and fangs – and attacks. Stories of Tiyanaks are prevalent in rural areas, particularly near forests or old trees. Travelers are warned to be wary of infant cries heard in desolate places, as it might be a Tiyanak waiting to ensnare them.",
//         authorNickname: 'ProbinsyanoTales',
//         createdAt: '2023-05-20T09:15:22.000Z'
//     },
//     {
//         id: '5',
//         title: 'Biringan City',
//         locationName: 'Somewhere in Samar',
//         lat: 11.8000, lng: 125.0000,
//         snippet: 'A mythical invisible city said to be inhabited by engkantos...',
//         fullStory: "Biringan City is a legendary, invisible city said to exist somewhere in the island of Samar. It is believed to be a highly advanced, beautiful city inhabited by engkantos (elemental spirits or fairies) that can only be seen by certain individuals or under specific conditions. Those who have claimed to see it describe modern-looking structures and bright lights. However, Biringan is also associated with disappearances, as it's said that engkantos sometimes lure humans into their world, from which they can never return. Fishermen often avoid certain areas of the sea believed to be gateways to Biringan.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2023-08-01T18:05:45.000Z'
//     },
//     {
//         id: '6',
//         title: 'Old UST Hospital',
//         locationName: 'UST Hospital (Old Building), Manila',
//         lat: 14.6091, lng: 120.9898,
//         snippet: 'Many ghostly tales from the old hospital wings and corridors...',
//         fullStory: "The University of Santo Tomas (UST) is one of the oldest universities in Asia, and its historic campus, particularly the old hospital buildings, has accumulated numerous ghost stories over the centuries. During World War II, the campus was used as an internment camp by the Japanese. Many have reported seeing ghostly figures of nuns, priests, soldiers, and former patients roaming the halls, especially at night. Cold spots, unexplained noises, and feelings of being watched are common experiences reported by students, faculty, and hospital staff who have spent time in the older sections.",
//         authorNickname: 'EstudyanteBlues',
//         createdAt: '2023-09-28T23:10:00.000Z'
//     },
//     {
//         id: '7',
//         title: 'Ang Humahagulgol sa Lumang PGH Wing',
//         locationName: 'Philippine General Hospital, Manila',
//         lat: 14.5761, lng: 120.9894,
//         snippet: 'Duty ako noon, tapos may narinig akong iyak ng babae sa isang kwartong walang tao...',
//         fullStory: "Nurse 'yung tita ko dati sa PGH, sa isa sa mga lumang wing. Madalas daw talaga may mga naririnig silang kakaiba doon, lalo na 'pag graveyard shift. Pero 'yung pinaka-creepy na na-experience niya, 'yung isang gabi na nagro-rounds siya. May narinig daw siyang humahagulgol na babae, parang sobrang sakit ng nararamdaman. Sinundan niya 'yung tunog, papunta sa dulo ng hallway, sa isang kwarto na matagal nang hindi ginagamit.\n\nPagdating niya doon, medyo nakaawang 'yung pinto. Sumilip siya, tapos kitang-kita niya raw 'yung anino ng babaeng nakaupo sa kama, yumuyugyog. Kinilabutan daw tita ko, pero inisip niya baka pasyente lang na naligaw. Tinawag niya, 'Ma'am, okay lang po kayo?' Bigla daw tumigil 'yung iyak. Tapos dahan-dahang lumingon 'yung anino. Hindi raw makita 'yung mukha, pero ramdam na ramdam niya 'yung lungkot at galit. Bigla na lang daw nag-flicker 'yung ilaw sa hallway.\n\nSa sobrang takot ng tita ko, tumakbo na lang siya pabalik sa nurse's station. Nanginginig daw siya. Kinabukasan, tinanong niya 'yung mga senior nurse. Sabi nila, baka raw 'yun 'yung kaluluwa ng isang nanay na namatayan ng anak doon noong unang panahon pa. Minsan daw talaga nagpaparamdam, lalo na 'pag may mga bagong pasyente na kritikal ang lagay. Hindi na raw bumalik mag-isa si Tita sa parteng 'yun ng ospital.",
//         authorNickname: 'NurseJoyless',
//         createdAt: '2023-11-03T04:30:15.000Z'
//     },
//     {
//         id: '8',
//         title: 'Ang Estudyanteng Ayaw Umalis sa UP Main Library',
//         locationName: 'UP Diliman Main Library (Gonzalez Hall), Quezon City',
//         lat: 14.6546, lng: 121.0663,
//         snippet: 'Sabi nila may multong estudyante na laging nag-aaral sa isang section ng library, kahit sarado na...',
//         fullStory: "Taga-UP Diliman 'yung pinsan ko, and 'yung Main Library daw nila, specifically 'yung Gonzalez Hall, may mga kwento talaga. Isa sa pinakasikat 'yung tungkol sa isang estudyante na hanggang ngayon daw, nag-aaral pa rin doon. Usually daw sa Filipiniana section or sa mga carrel sa bandang itaas. Kahit daw sarado na 'yung library at wala nang tao, may mga guard na nakakakita ng ilaw na bukas sa isang table, tapos 'pag pinuntahan nila, may anino ng taong nakayuko, parang nagbabasa.\n\nOne time, 'yung kaibigan ng pinsan ko, nag-overtime mag-aral for finals. Medyo late na, konti na lang sila sa section nila. Pagtingin niya sa dulo ng aisle ng bookshelves, may nakita siyang figure ng babae, parang naghahanap ng libro. Akala niya, staff or ibang student. Pero nung tinitigan niya, parang translucent daw 'yung babae, tapos biglang nawala sa pagitan ng mga estante. Sobrang creepy daw, nagligpit agad siya ng gamit at tumakbo palabas.\n\nSabi-sabi, estudyante raw 'yun na namatay dahil sa sobrang pressure sa pag-aaral, or baka naman during a historical event. Basta, 'pag napunta ka raw doon at may naramdaman kang malamig o parang may nakatingin sa'yo, baka siya na 'yun. Kaya 'pag gabi, marami na ring umiiwas mapadpad sa mga liblib na parte ng Main Lib.",
//         authorNickname: 'CampusGhost',
//         createdAt: '2023-10-29T13:00:50.000Z'
//     },
//     {
//         id: '9',
//         title: 'The Black Dog of Loakan Airport',
//         locationName: 'Loakan Airport, Baguio City',
//         lat: 16.3750, lng: 120.6197,
//         snippet: 'Isang malaking itim na aso raw ang nagpapakita bago may masamang mangyari sa airport o sa paligid nito...',
//         fullStory: "Laking Baguio ang lolo ko, at may kwento siya tungkol sa Loakan Airport na hanggang ngayon, 'di ko makalimutan. Sabi niya, may isang malaking itim na aso raw na nagpapakita doon. Hindi raw 'yun ordinaryong aso; sobrang laki daw at pulang-pula 'yung mga mata. Madalas daw itong makita na tumatawid sa runway o nakatayo lang sa gilid, parang nagmamasid, lalo na kapag makulimlim o bago magkaroon ng bagyo.\n\nAng nakakatakot daw, 'pag nagpakita 'yung asong 'yun, parang may bad omen. May mga pilots daw dati na nakakakita diyan bago sila mag-take off or mag-landing, tapos maya-maya, magkakaroon ng aberya or 'di kaya, may malalaman silang aksidente na nangyari malapit sa area. Kahit 'yung mga nakatira malapit sa airport, 'pag nakita nila 'yung itim na aso na paikot-ikot, kinakabahan na sila.\n\nSabi ng matatanda, 'bantay' daw 'yun ng lugar, pero hindi sa paraang poprotektahan ka. Parang tagapagbigay ng babala, or baka nga siya mismo 'yung nagdadala ng kamalasan. Hanggang ngayon, 'pag may mga unusual flight delays or cancellations daw sa Loakan, 'yung iba, 'yun agad ang naiisip: 'Nagpakita na naman kaya 'yung itim na aso?'",
//         authorNickname: 'BaguioBoy',
//         createdAt: '2023-08-11T19:22:03.000Z'
//     },
//     {
//         id: '10',
//         title: 'Ang Manananggal sa Kisame ng Kapitbahay Namin sa Capiz',
//         locationName: 'Isang Baryo sa Capiz',
//         lat: 11.3833, lng: 122.6500, 
//         snippet: 'Gabi-gabi raw may naririnig silang kaluskos sa bubong, tapos parang may pumapatak...',
//         fullStory: "Hindi ko 'to first-hand experience, pero kwento 'to ng lola ko noong bata pa siya sa Capiz. Sikat ang Capiz sa mga aswang, 'di ba? Well, totoo raw talaga 'yun, at least doon sa baryo nila. May kapitbahay daw sila na bagong panganak. Tapos, gabi-gabi, may naririnig silang kaluskos sa yero ng bubong nila, parang may mabigat na naglalakad. Minsan, may parang pumapatak pa raw sa sahig nila galing sa kisame, pero wala namang butas.\n\nIsang gabi, 'yung tatay daw ng sanggol, nagbantay. Nagtago siya sa madilim na sulok ng bahay nila, may dalang itak. Maya-maya, narinig na naman 'yung kaluskos, tapos may nakita siyang parang anino na mahaba at payat na dumadaan sa bintana nila, papunta sa direksyon ng kwarto ng mag-ina. Kasabay noon, may narinig silang parang 'lagapak' sa bubong ng kapitbahay – 'yung bahay ng may sanggol.\n\nKinabukasan, 'yung kapitbahay nila, may nakitang kakaibang mantsa sa labas ng bahay nila, malapit sa bintana ng kwarto ng sanggol. Tapos, 'yung isang matandang babae sa baryo nila na laging masama ang tingin, bigla na lang daw nagkasakit at hindi na makalakad ng ilang araw. Sabi ng lola ko, 'yun daw 'yung manananggal. Nag-iwan daw ng bakas 'yung kalahati ng katawan niya nung bumagsak. Brrr, buti na lang sa Maynila na kami lumaki!",
//         authorNickname: 'AswangDiaries',
//         createdAt: '2023-11-01T22:00:00.000Z'
//     },
//     {
//         id: '11',
//         title: 'Ang Nawawalang Hiker sa Bundok Makiling',
//         locationName: 'Mt. Makiling, Laguna',
//         lat: 14.1360, lng: 121.1947,
//         snippet: 'May mga hikers daw na naliligaw at hindi na nakakabalik, kinuha raw ni Maria Makiling or ng mga engkanto...',
//         fullStory: "Mahilig ako umakyat ng bundok, and Mt. Makiling is one of those na may reputation talaga. Bukod sa ganda niya, kilala rin siya sa mga kwento ng mga hikers na naliligaw or 'di kaya'y 'tinatago' raw ng mga engkanto or ni Maria Makiling mismo. May isang sikat na kwento tungkol sa isang grupo ng hikers. Isa sa kanila, medyo mayabang daw at nagkalat pa ng basura, tapos nagsisigaw sa gubat.\n\nNoong pababa na sila, bigla na lang daw nawala 'yung mayabang na hiker. Hinanap nila, pero parang bula na naglaho. Kahit 'yung mga local guides at rescuers, ilang araw naghanap, wala talaga. Ang sabi ng matatanda doon, 'kinuha' na raw siya. Siguro nagalit 'yung mga tagabantay ng bundok. May mga nagsasabi rin na minsan, 'pag gabi, may naririnig silang boses na parang tumatawag or humihingi ng tulong sa parteng malalim na ng gubat, pero 'pag sinundan mo, lalo ka lang maliligaw.\n\nKaya 'pag umaakyat kami ng Makiling, sobrang respeto talaga. 'Tabi-tabi po,' tapos bawal mag-ingay nang sobra or magkalat. May mga areas din doon na parang ang bigat ng pakiramdam, 'yung tipong alam mong may 'iba' pang kasama kayo. Hindi lang daw 'yun dahil sa pagod. Isa pa, 'yung mga kwento tungkol sa mga prutas doon na nagiging ginto 'pag uwi mo, pero 'wag na 'wag mo raw kukunin ng walang paalam. Baka hindi ka na makababa.",
//         authorNickname: 'Lakwatsero',
//         createdAt: '2023-07-18T10:45:12.000Z'
//     },
//     {
//         id: '12',
//         title: 'Ang Batang Naglalaro sa Manila North Cemetery',
//         locationName: 'Manila North Cemetery, Manila',
//         lat: 14.6248, lng: 120.9891,
//         snippet: 'Pag Undas, or kahit ordinaryong araw, may mga nakakakita raw ng batang multo na naglalaro sa mga puntod...',
//         fullStory: "Madalas kaming dumalaw sa Manila North Cemetery kasi doon nakalibing 'yung lolo't lola ko. Sobrang laki ng sementeryo na 'yun, parang isang maliit na siyudad na. Ang daming kwento, pero 'yung isa sa pinaka-common 'yung tungkol sa mga batang multo na naglalaro. Minsan daw, kahit hindi Undas, 'pag medyo palubog na 'yung araw at tahimik na, may maririnig kang hagikgikan ng mga bata.\n\nMay pinsan ako, one time, sumama siya sa tita namin maglinis ng puntod. Medyo napalayo siya ng konti, tapos may nakita siyang grupo ng mga bata, mga lima sila, naghahabulan sa pagitan ng mga nitso. Akala niya, mga batang nakatira lang doon. Nginitian pa raw niya, pero 'yung mga bata, parang hindi siya nakikita, tapos 'yung suot nila, parang luma na. Nung tinawag siya ng tita niya, paglingon niya ulit sa mga bata, wala na sila. Bigla na lang naglaho.\n\nSabi ng mga caretaker doon, marami raw talagang batang kaluluwa na 'nakatira' sa sementeryo. Mga namatay noong maliit pa, or baka 'yung iba, doon na talaga ipinanganak at namatay. Hindi naman daw sila nananakit, pero 'pag nagpakita sila, nakakakilabot pa rin. Lalo na 'pag narinig mo 'yung mga bulungan nila or 'yung tunog ng parang holen na gumugulong sa marmol kahit wala namang tao.",
//         authorNickname: 'MisteryoManila',
//         createdAt: '2023-11-01T15:20:30.000Z'
//     },
//     {
//         id: '13',
//         title: 'Ang Pugot na Pari sa Fort Santiago',
//         locationName: 'Fort Santiago, Intramuros, Manila',
//         lat: 14.5960, lng: 120.9700,
//         snippet: 'Sa dungeons daw ng Fort Santiago, minsan may nagpapakitang pari na walang ulo, biktima ng giyera...',
//         fullStory: "History buff ako, kaya paborito kong pasyalan ang Intramuros, lalo na ang Fort Santiago. Ang daming nangyari doon, 'di ba? Lalo na noong Spanish era at World War II. Kaya hindi nakapagtataka na ang daming ghost stories. Isa sa pinakakilala 'yung tungkol sa pugot na pari. Sabi nila, madalas daw itong magpakita sa mga lumang selda at dungeons, lalo na 'pag gabi.\n\nMay kwento 'yung isang tour guide doon na minsan, may grupo siyang tinour, medyo late afternoon na. Habang nagkukwento siya tungkol sa mga pinahirapan doon, bigla na lang daw may isang turista na namutla at napasigaw. Tinuro niya 'yung isang madilim na corner ng isang selda. Sabi niya, may nakita raw siyang pari, nakasutana, pero walang ulo, tapos may hawak na rosaryo. Pagtingin ng tour guide at ng iba, wala naman silang nakita. Pero 'yung turista, nanginginig na sa takot.\n\nNaniniwala 'yung iba na baka isa 'yun sa mga paring GOMBURZA, or baka isang nameless priest na pinatay noong panahon ng Hapon. Ang creepy pa, minsan daw may maririnig kang parang nagdarasal o umiiyak sa loob ng mga selda, kahit wala namang tao. Kaya 'pag pumupunta ako doon, laging may kasamang dasal at respeto. Ang bigat kasi ng energy ng lugar, ramdam mo 'yung history at 'yung mga trahedyang nangyari.",
//         authorNickname: 'UrbanLegendSeeker',
//         createdAt: '2023-06-12T16:30:00.000Z'
//     },
//     {
//         id: '14',
//         title: 'Ang Babaeng Tumatawid sa San Juanico Bridge',
//         locationName: 'San Juanico Bridge, Leyte-Samar',
//         lat: 11.3167, lng: 124.9750,
//         snippet: 'May mga driver daw na nakakakita ng babaeng bigla na lang tumatawid sa gitna ng tulay, kahit hatinggabi...',
//         fullStory: "Ang San Juanico Bridge, 'di ba, napakaganda? Pero may mga kwento rin ng kababalaghan diyan, lalo na 'yung mga driver na bumibiyahe ng gabi. May tito ako na truck driver, madalas siyang tumatawid diyan papuntang Samar or Leyte. Sabi niya, may isang beses, mga ala-una ng madaling araw, siya lang mag-isa sa kalsada. Bigla na lang daw, sa gitna ng tulay, may nakita siyang babae, nakaputi, biglang tumawid.\n\nNagpreno daw siya ng malakas, muntik na siyang maaksidente. Pagbaba niya para tingnan kung nasagasaan niya o kung sino 'yun, wala siyang nakitang tao. As in, wala. Imposible raw na may makakatawid ng ganun kabilis at mawala agad sa gitna ng tulay na 'yun. Kinilabutan daw tito ko, sumakay na lang ulit siya ng truck at pinaharurot. Simula noon, 'pag dumadaan siya doon ng gabi, nagdadasal na lang siya at binibilisan ang takbo.\n\nNarinig ko rin sa iba, may mga urban legend na ginamitan daw ng dugo ng mga bata 'yung construction ng tulay para tumibay. Ewan ko kung totoo 'yun, pero 'yun daw 'yung dahilan kung bakit may mga restless spirits doon. 'Yung iba naman, sabi baka kaluluwa ng mga biktima ng bagyong Yolanda na hindi matahimik. Nakakatakot isipin, lalo na 'pag mag-isa kang tumatawid doon sa gabi.",
//         authorNickname: 'TitoDriverChronicles',
//         createdAt: '2023-04-10T02:15:45.000Z'
//     },
//     {
//         id: '15',
//         title: 'Ang Mambabarang sa Isla ng Siquijor',
//         locationName: 'Siquijor Island',
//         lat: 9.1833, lng: 123.6000,
//         snippet: 'Kilala ang Siquijor sa mysticism, pero may mga kwento rin ng mambabarang na dapat ingatan...',
//         fullStory: "Pumunta kami ng Siquijor for vacation a few years back. Sobrang ganda ng isla, 'yung mga beach, 'yung mga falls. Pero 'di maiaalis na may reputation din siya as an island of healers, faith healers, and yes, 'yung mga gumagawa ng 'hindi maganda' like kulam or barang. 'Yung tour guide namin, medyo open siya sa mga ganitong topic. Sabi niya, totoo raw 'yun, at dapat mag-ingat, lalo na sa pakikitungo sa mga local.\n\nMay kwento siya tungkol sa isang turista na naging bastos daw sa isang matandang babae sa palengke. Nagmura raw 'yung turista at minata 'yung matanda. Wala namang ginawa 'yung matanda, tiningnan lang daw 'yung turista. Kinagabihan, 'yung turista, bigla na lang daw nagkasakit. Sobrang taas ng lagnat, tapos nagsusuka ng kung anu-ano, minsan daw may kasamang insekto. Dinala sa ospital, pero 'di makita ng doktor kung ano 'yung sakit niya.\n\n'Yung mga kasama niyang turista, naalala nila 'yung incident sa palengke. Pinuntahan nila 'yung matanda, humingi ng tawad. Medyo matagal bago pumayag 'yung matanda, pero eventually, binigyan sila ng parang langis at inumin para sa kaibigan nila. Gumaling naman daw 'yung turista, pero lesson learned. Sabi ng guide namin, 'di lahat ng matatanda doon ordinaryo. 'Yung iba, may 'kakayahan.' Kaya doble ingat at respeto lagi, lalo na 'pag nasa lugar ka na 'di mo kabisado ang kultura at paniniwala.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2022-12-25T14:30:20.000Z'
//     },
//     {
//         id: '16',
//         title: 'Ang mga Hiyawan sa Bahay na Pula',
//         locationName: 'Bahay na Pula, San Ildefonso, Bulacan',
//         lat: 15.0800, lng: 120.9450,
//         snippet: 'Dating garrison ng Hapon, saksi sa maraming karahasan. Sabi nila, maririnig mo pa rin ang mga sigaw...',
//         fullStory: "Ang Bahay na Pula sa San Ildefonso, Bulacan, sikat 'yan sa mga ghost hunters. Alam naman natin 'yung history niyan, 'di ba? Naging garrison 'yan ng mga Hapon noong World War II, at maraming comfort women ang dumanas ng hirap at namatay diyan. Kaya 'yung bigat ng atmosphere, grabe. May mga kaibigan akong nag-attempt mag-ghost hunting diyan, 'yung mga matatapang kuno.\n\nKwento nila, pagpasok pa lang daw sa compound, ang bigat na agad sa pakiramdam. Parang may nakatingin sa'yo, tapos ang lamig ng hangin kahit mainit 'yung panahon. Pumasok sila sa loob ng bahay, or kung ano man ang natitira doon. Habang naglalakad sila, may narinig daw silang parang humihikbi na babae. Hinanap nila 'yung source, pero wala silang makita. Tapos, bigla na lang daw, may sumigaw na babae, parang sobrang sakit at takot 'yung sigaw. Nagtakbuhan daw sila palabas.\n\nSabi nila, 'yung mga sigaw at iyak, parang echo ng mga nangyari doon dati. Mga kaluluwa ng mga babaeng hindi matahimik. Kahit 'yung mga caretaker daw or 'yung mga nakatira malapit doon, umiiwas na mapadaan 'pag gabi. Minsan daw, may mga anino silang nakikita sa bintana, or parang may mga naglalakad sa loob. Sobrang tragic ng history ng lugar, kaya siguro 'yung negative energy, nananatili pa rin.",
//         authorNickname: 'GhostHunterPH',
//         createdAt: '2023-01-15T20:18:00.000Z'
//     },
//     {
//         id: '17',
//         title: 'Ang Kapre sa Lumang Akasya sa Probinsya Namin',
//         locationName: 'Isang Lumang Akasya sa Batangas',
//         lat: 13.9424, lng: 121.1627, 
//         snippet: 'Sa tabi ng kalsada, may malaking puno ng akasya. Sabi ng lola ko, may kapre raw doon na mahilig sa sigarilyo...',
//         fullStory: "Noong bata ako, 'pag umuuwi kami sa probinsya namin sa Batangas, may isang malaking puno ng akasya sa gilid ng kalsada na lagi kong tinitingnan. Sobrang tanda na ng puno, 'yung mga sanga niya, ang lalaki at ang haba. Kwento ng lola ko, may nakatira raw na kapre doon. Sabi niya, 'wag daw akong titingala 'pag dumadaan kami doon, lalo na 'pag gabi, baka makita ko raw.\n\nSabi niya, minsan daw, 'yung mga tricycle driver na dumadaan doon ng hatinggabi, nakakakita ng parang dalawang baga ng sigarilyo na lumulutang sa taas ng puno. Tapos, mangangamoy daw ng tabako. 'Yun na raw 'yung kapre, nagpapausok. Minsan naman, may maririnig silang parang tawa na malalim at malakas galing sa puno. Wala namang bahay doon malapit, puro bukid lang.\n\nMay isang pinsan daw ako na medyo pasaway, sinubukan niyang sumilip isang gabi. Nagtago siya sa may damuhan. Maya-maya, naamoy niya 'yung tabako, tapos may nakita siyang anino na sobrang laki, nakaupo sa isa sa mga sanga. Hindi niya maaninag 'yung mukha, pero kitang-kita niya 'yung laki. Sa sobrang takot, tumakbo siya pauwi. Simula noon, 'di na siya umulit. Ako naman, hanggang tingin na lang sa malayo, 'di ko na sinubukang alamin kung totoo nga.",
//         authorNickname: 'LolaNenaStories',
//         createdAt: '2023-03-22T19:55:10.000Z'
//     },
//     {
//         id: '18',
//         title: 'Ang Phantom Jeepney sa Aurora Boulevard',
//         locationName: 'Aurora Boulevard, Quezon City',
//         lat: 14.6204, lng: 121.0543,
//         snippet: 'May jeep raw na pumapasada sa gabi...',
//         fullStory: "Taga-Project 4 'yung kaibigan ko, at madalas siyang umuwi ng late galing trabaho, minsan madaling araw na. Sumasakay siya ng jeep sa Aurora Boulevard. May kwento siya na minsan, may nasakyan siyang jeep na kakaiba. Konti lang daw 'yung pasahero, tapos lahat sila, parang tulala at hindi gumagalaw. 'Yung driver, hindi rin umiimik.\n\nHabang umaandar 'yung jeep, napansin niya na parang ang tagal na nilang bumibiyahe, pero 'yung mga nadadaanan nila, parang hindi familiar. Tapos, biglang nanlamig daw 'yung pakiramdam niya. Tiningnan niya ulit 'yung ibang pasahero, parang ang paputla nila. Nag-para siya, pero parang hindi siya narinig ng driver. Paulit-ulit siyang nag-para, hanggang sa bigla na lang huminto 'yung jeep sa isang madilim na lugar na wala siyang makitang ibang sasakyan o tao.\n\nBumaba siya ng nanginginig. Paglingon niya, wala na 'yung jeep. Bigla na lang nawala. Naglakad siya hanggang makakita siya ng taxi. Sabi niya, parang ang layo ng binabaan sa kanya, ibang area na. Sabi ng matatanda, may mga 'phantom jeepney' daw talaga na pumapasada, lalo na sa mga lumang kalsada. Sinasakay nila 'yung mga napapagod na kaluluwa, or minsan, mga buhay na naliligaw. Creepy!",
//         authorNickname: 'TheNightShift',
//         createdAt: '2023-07-30T03:05:00.000Z'
//     },
//     {
//         id: '19',
//         title: 'Ang Galit ng Engkanto sa Hinulugang Taktak',
//         locationName: 'Hinulugang Taktak, Antipolo, Rizal',
//         lat: 14.6008, lng: 121.1733,
//         snippet: 'Nag-outing kami dati sa Hinulugang Taktak, tapos may isa kaming kasama na nagbiro sa mga...',
//         fullStory: "High school kami noon, nag-field trip kami sa Hinulugang Taktak sa Antipolo. Alam mo naman 'pag kabataan, maingay at makulit. May isa kaming kaklase, si Mark, na medyo mayabang at palabiro. Habang naglalakad kami malapit sa falls, may nakita kaming parang maliit na mound ng lupa, parang punso. Bigla ba namang sinipa ni Mark 'yun, tapos tumawa pa, sabi, 'Tabi-tabi po, baka po masipa kayo!' Lahat kami sinaway siya, pero tinawanan lang kami.\n\nPagkatapos ng ilang oras, habang nasa bus na kami pauwi, biglang sumakit 'yung tiyan ni Mark. Sobrang sakit daw, parang pinipilipit. Namumutla na siya at pinagpapawisan ng malamig. Pagdating namin sa school, dinala agad siya sa clinic. Walang makitang dahilan 'yung nurse. Tapos, 'yung isa naming kaklase na medyo 'sensitive', sabi niya, 'Nagalit yata 'yung sinipa niya kanina.'\n\nPinuntahan ng nanay ni Mark 'yung isang albularyo. Sabi ng albularyo, 'nabati' raw si Mark or 'nagalit 'yung engkanto' doon sa ginawa niya. Nagbigay ng kung anu-anong dahon at langis 'yung albularyo, tapos pinagdasal si Mark. Kinabukasan, medyo okay na siya, pero sabi niya, parang may naramdaman siyang malamig na kamay na humahaplos sa tiyan niya buong gabi. Simula noon, takot na si Mark mambastos ng kalikasan. Lesson learned talaga 'yun para sa aming lahat.",
//         authorNickname: 'EngkantoEncounter',
//         createdAt: '2023-02-14T11:40:55.000Z'
//     },
//     {
//         id: '20',
//         title: 'Ang mga Kaluluwa sa Laperal White House',
//         locationName: 'Laperal White House, Baguio City',
//         lat: 16.4140, lng: 120.6046,
//         snippet: 'Isa sa pinaka-haunted na bahay sa Baguio. Sabi nila, nandiyan pa rin daw ...',
//         fullStory: "Ang Laperal White House sa Baguio, 'di ba, sikat na sikat sa pagiging haunted? Nakakatakot na 'yung itsura pa lang niya from the outside, lalo na 'pag gabi. May mga kwento na 'yung original owners, 'yung Laperal family, nandiyan pa rin daw 'yung spirits nila. Tapos, noong World War II, ginamit daw 'yan ng mga Hapon, kaya marami ring tragic stories associated with it.\n\nMay kaibigan 'yung parents ko na taga-Baguio, at kwento niya, 'yung mga caretaker daw dati, madalas makarinig ng mga yapak, mga boses na bumubulong, at minsan, may nakikitang anino sa mga bintana kahit wala namang tao. May isang sikat na kwento tungkol sa isang babae na multo, madalas daw makita sa may hagdanan or sa may nursery room. Minsan naman, may multo ng isang maliit na bata.\n\nNung nabuksan 'yan sa public for a time as a museum, may mga visitors na nakakaramdam ng biglang panlalamig, parang may dumaan, or parang may nakatitig sa kanila. 'Yung iba, nakukunan daw ng litrato na may mga 'orb' or 'di kaya, may extra figure na hindi naman nila kasama. Kahit ako, 'nung napadaan kami diyan, parang ang bigat ng pakiramdam. Parang may lungkot at takot na bumabalot sa buong lugar. Definitely not for the faint of heart.",
//         authorNickname: 'BaguioBoy',
//         createdAt: '2022-11-20T22:33:00.000Z'
//     },
//     {
//         id: '21',
//         title: 'Mga Ungol Mula sa Sunog na Star City',
//         locationName: 'Star City (after the fire), Pasay City',
//         lat: 14.5547, lng: 120.9867,
//         snippet: 'Pagkatapos masunog ang Star City, may mga guard daw na nakakarinig ng mga kakaibang tunog mula sa ruins...',
//         fullStory: "Naalala niyo 'yung malaking sunog sa Star City? Grabe 'yun, 'no? Halos naubos 'yung amusement park. After nun, siyempre, 'yung lugar, naging parang ghost town. May kwento 'yung kakilala ko na security guard na na-assign doon pansamantala habang inaaayos pa 'yung investigation at clearing.\n\nSabi niya, 'pag gabi, sobrang creepy daw. Tahimik, pero minsan, may maririnig silang parang mga ungol or hikbi na nanggagaling sa parteng pinaka-nasunog, lalo na doon sa may Snow World at sa may mga ride na natupok. Minsan daw, parang may tunog ng music box, 'yung parang sa carousel, pero sobrang distorted at malungkot. Kinikilabutan daw sila, pero trabaho nila magbantay, kaya tiniis nila.\n\nMay isang gabi, nagro-ronda raw 'yung kasama niyang guard malapit sa dating entrance ng Gabi ng Lagim. Bigla na lang daw siyang tumakbo pabalik sa guard house, putlang-putla. Sabi niya, may nakita raw siyang anino ng mga tao, parang nakapila, pero 'pag sininagan niya ng flashlight, nawawala. Parang mga kaluluwa raw na 'di maka-move on, or baka 'yung mga 'character' ng Gabi ng Lagim na ayaw pa ring umalis. Ewan ko ba, pero 'yung mga lugar na masaya dati tapos biglang nagkaroon ng tragedy, parang mas nagiging prone sa mga ganitong kababalaghan.",
//         authorNickname: 'TagaSouth',
//         createdAt: '2023-01-28T21:12:34.000Z'
//     },
//     {
//         id: '22',
//         title: 'Ang Operating Room sa Lumang Clark Air Base Hospital',
//         locationName: 'Old Clark Air Base Hospital, Pampanga',
//         lat: 15.1744, lng: 120.5371,
//         snippet: 'Abandoned hospital na pero yung operating room daw, active pa rin sa mga multo ng sundalo...',
//         fullStory: "Ang Clark Air Base, dating US facility 'yan, 'di ba? Ang daming history, lalo na noong Vietnam War. 'Yung lumang ospital daw doon, 'yung Clark Air Base Hospital, grabe 'yung mga kwento. Abandonado na 'yun ngayon, pero sikat sa mga paranormal investigators. Sabi nila, isa sa pinaka-active na area 'yung dating operating room.\n\nMay grupo ng mga explorers na pumasok doon one time, documented pa nila. Pagdating nila sa OR, bigla na lang daw bumigat 'yung hangin. 'Yung EMF meters nila, nagsi-spike. Tapos, may narinig silang parang tunog ng medical equipment, 'yung parang gumagalaw 'yung mga metal tray, kahit wala namang hangin or tao na gumagalaw. Nakaramdam din sila ng biglaang pagbaba ng temperatura.\n\nAng pinaka-creepy, may isa sa kanila na nakarinig ng bulong, parang 'Help me...' daw. Nangilabot sila lahat. Sabi-sabi, mga kaluluwa raw 'yun ng mga sundalong namatay doon habang inooperahan, or 'yung mga hindi na na-save. 'Yung iba, nakakakita pa raw ng anino ng mga doktor at nurses na parang busy pa rin sa loob ng OR, kahit sira-sira na 'yung lugar. Sobrang eerie, parang na-trap sila sa oras ng kamatayan nila.",
//         authorNickname: 'GhostHunterPH',
//         createdAt: '2023-09-10T23:50:11.000Z'
//     },
//     {
//         id: '23',
//         title: 'Ang Babae sa Bintana ng Taal Vista Hotel',
//         locationName: 'Taal Vista Hotel (Old Wing), Tagaytay',
//         lat: 14.0936, lng: 120.9373,
//         snippet: 'Sa lumang wing daw ng hotel, may babaeng multo na sumisilip sa bintana, nakatingin sa Taal Volcano...',
//         fullStory: "Ang Taal Vista Hotel, isa sa mga pinaka-iconic na hotel sa Tagaytay. Ang ganda ng view, 'di ba? Pero dahil matagal na rin siyang nakatayo, may mga kwento rin ng multo, lalo na raw sa may lumang wing. May kaibigan 'yung nanay ko na nag-stay doon dati, tapos 'yung kwarto nila, nasa older section.\n\nIsang gabi, nagising daw siya ng madaling araw kasi naiihi. Pagbangon niya, napatingin siya sa bintana. Kitang-kita 'yung Taal Volcano, pero ang nakakuha ng pansin niya, 'yung reflection sa salamin ng bintana. May nakita raw siyang babae na nakatayo sa likod niya, nakatingin din sa labas. Akala niya, asawa niya, pero naalala niya, tulog pa 'yung asawa niya sa kama. Dahan-dahan siyang lumingon, tapos wala namang tao sa likod niya. Pagtingin niya ulit sa bintana, nandoon pa rin 'yung reflection ng babae, tapos dahan-dahan daw ngumiti sa kanya. Sobrang creepy daw ng ngiti.\n\nNagtalukbong na lang siya ng kumot at nagdasal hanggang mag-umaga. Kinabukasan, tinanong nila 'yung staff. May mga bulung-bulungan daw talaga tungkol sa isang 'Lady of the Lake' or isang babaeng multo na madalas makita sa mga kwarto na may view ng bulkan. Baka raw 'yun 'yung dating guest na sobrang na-in love sa view, or baka may tragic story na konektado sa lugar. Basta, 'pag nag-stay ka raw doon, 'wag ka masyadong tititig sa bintana 'pag gabi.",
//         authorNickname: 'TakotAkoPH',
//         createdAt: '2023-05-05T01:25:00.000Z'
//     },
//     {
//         id: '24',
//         title: 'Ang mga Anino sa Balay Negrense',
//         locationName: 'Balay Negrense, Silay City, Negros Occidental',
//         lat: 10.7981, lng: 122.9754,
//         snippet: 'Ancestral house to na naging museum. Sabi nila, yung mga dating may-ari, nagpaparamdam pa rin daw...',
//         fullStory: "Nakapunta na ako sa Balay Negrense sa Silay. Ang ganda ng bahay, parang bumalik ka sa panahon ng mga haciendero. Pero alam mo 'yun, 'yung mga lumang bahay, lalo na 'yung mga ganito kalaki at katanda, parang laging may kasamang kwentong kababalaghan. At totoo nga, may mga naririnig akong sabi-sabi mula sa mga local.\n\nSabi nila, 'yung pamilya raw ni Victor Gaston, 'yung original owner, parang 'nandiyan' pa rin daw. Minsan daw, 'yung mga caretaker or 'yung mga huling bisita 'pag pasara na 'yung museum, may naririnig silang mga yapak sa second floor, kahit wala namang tao doon. Minsan naman, parang may nagpapatugtog ng piano, or may mga boses na nag-uusap in Spanish. May mga anino rin daw na dumadaan sa mga pasilyo, lalo na sa may malalaking salamin.\n\nMay isang area doon, 'yung parang silid-dasalan, na sabi nila, medyo mabigat daw 'yung pakiramdam. 'Yung iba, nakakaramdam ng biglang panlalamig or parang may nakamasid sa kanila. Hindi naman daw sila nananakit, parang 'lingering presence' lang ng mga dating nakatira. Pero siyempre, 'pag ikaw 'yung naka-experience, matatakot ka pa rin. Kaya 'pag nag-picture-picture kami doon, medyo may kaba, baka may sumama sa picture, 'di ba?",
//         authorNickname: 'CebuanoExplorer',
//         createdAt: '2023-08-21T13:13:13.000Z'
//     },
//     {
//         id: '25',
//         title: 'Ang Janitor sa Baguio City Hall Pag Gabi',
//         locationName: 'Baguio City Hall, Baguio City',
//         lat: 16.4136, lng: 120.5920,
//         snippet: 'May mga empleyado raw na nag-oovertime na nakakakita ng janitor na naglilinis, kahit wala namang naka-duty na janitor...',
//         fullStory: "Pinsan ko, nagtrabaho dati sa Baguio City Hall. Madalas silang mag-overtime, lalo na 'pag malapit na 'yung Panagbenga or 'pag may budget hearing. Kwento niya, 'pag gabi na at konti na lang 'yung tao sa opisina nila, may mga weird na nangyayari. Minsan daw, may maririnig silang parang may nagwawalis sa labas ng pinto nila, or parang may nagpupunas ng sahig. Pagtingin nila, wala naman.\n\nAng pinaka-common na sighting daw 'yung tungkol sa isang 'janitor.' May mga nakakakita raw ng figure ng lalaki na naka-uniform ng janitor, tahimik lang na naglilinis sa hallway or sa CR. Pero 'pag tinanong nila sa admin or sa security, wala naman daw naka-duty na janitor sa ganung oras sa specific floor na 'yun. Minsan daw, 'yung 'janitor' na 'yun, titingin lang sa kanila, tapos magpapatuloy sa paglilinis, tapos bigla na lang mawawala 'pag 'di sila nakatingin.\n\nSabi-sabi, baka raw 'yun 'yung kaluluwa ng isang dating janitor na sobrang dedicated sa trabaho niya, or baka namatay doon sa City Hall. Hindi naman daw nananakot, parang nagtatrabaho lang. Pero siyempre, 'pag ikaw 'yung nakakita, ibang usapan na 'yun. Kaya 'yung pinsan ko, 'pag kailangan niyang mag-CR ng gabi, nagyayaya pa ng kasama.",
//         authorNickname: 'TheNightShift',
//         createdAt: '2023-02-28T02:22:22.000Z'
//     },
//     {
//         id: '26',
//         title: 'Ang Pugot Mamu ng Ilocos',
//         locationName: 'Rural areas in Ilocos Region',
//         lat: 17.9734, lng: 120.7000, 
//         snippet: 'Sa mga probinsya ng Ilocos, may kinatatakutang pugot na gumagala raw sa gabi, naghahanap ng ulo...',
//         fullStory: "Laking Ilocos Sur 'yung tatay ko, and 'pag umuuwi kami doon noong bata pa ako, laging may kwentong katatakutan 'yung mga matatanda. Isa sa pinaka-memorable 'yung tungkol sa 'Pugot Mamu.' Hindi ko sure kung ano exactly 'yung Mamu, pero 'pugot' siya, as in, headless. Sabi nila, gumagala raw 'to sa mga bukirin at sa mga liblib na kalsada 'pag malalim na ang gabi.\n\nAng kwento, naghahanap daw 'to ng ulo, or baka naman, 'yung sarili niyang ulo na nawawala. Minsan daw, nakikita 'to na nakaupo sa tabi ng daan, or nakasandal sa puno. 'Yung iba naman, sabi, 'pag may naamoy kang sobrang bangong bulaklak, tapos biglang susundan ng sobrang baho, malapit na raw 'yung Pugot Mamu. Dapat daw magtago ka agad or magdasal.\n\nMay isang kwento 'yung tiyuhin ko. Galing daw siya sa sayawan sa kabilang baryo, naglalakad lang pauwi. Bigla raw siyang nakaramdam ng takot, tapos may narinig siyang parang kaluskos sa may palayan. Pagsilip niya, may nakita siyang mataas na figure, maitim, pero walang ulo. Nagtatakbo raw siya pauwi, hindi na lumingon. Kinabukasan, 'yung tsinelas niya, naiwan pala doon. Pero 'di na niya binalikan. Sabi nila, swerte raw 'yung mga nakakakita pero 'di napapansin ng Pugot Mamu.",
//         authorNickname: 'ProbinsyanoTales',
//         createdAt: '2023-06-25T21:09:18.000Z'
//     },
//     {
//         id: '27',
//         title: 'Ang Batang Umiiyak sa CR ng Starmall Alabang',
//         locationName: 'Starmall Alabang, Muntinlupa City',
//         lat: 14.4180, lng: 121.0450,
//         snippet: 'May mga nakakarinig daw ng iyak ng bata sa isa sa mga cubicle ng CR, pero pag tiningnan, walang tao...',
//         fullStory: "Itong kwento na 'to, narinig ko sa mga kaibigan kong taga-South. Sa Starmall Alabang daw, 'yung luma pa, may isang CR doon, 'di ko sure kung saang floor, na medyo creepy. Sabi nila, minsan daw, lalo na 'pag medyo walang tao, may maririnig kang iyak ng maliit na bata na nanggagaling sa isa sa mga cubicle.\n\nNatural, 'pag may narinig kang umiiyak na bata, sisilipin mo, 'di ba? Baka naligaw or kailangan ng tulong. Pero 'pag sinilip daw nila 'yung cubicle kung saan nanggagaling 'yung iyak, wala namang tao. Minsan daw, 'yung iyak, parang nasa kabilang cubicle naman. Para kang pinaglalaruan. May isang saleslady daw dati na pumasok sa CR, narinig niya 'yung iyak. Kinatok niya 'yung pinto ng cubicle, sabi niya, 'Bata, okay ka lang?' Tumigil daw 'yung iyak, tapos may bumulong, 'Laro tayo.'\n\nSa sobrang takot ng saleslady, tumakbo siya palabas. Sabi-sabi, baka raw kaluluwa ng batang naaksidente or namatay malapit doon. Or baka naman, 'yung mga usual na mall ghosts. Ewan ko, pero 'pag napapadaan ako sa Starmall Alabang at kailangan kong mag-CR, medyo pinipili ko na 'yung matao. Mahirap na, baka ako 'yung makarinig ng iyak or yayain makipaglaro.",
//         authorNickname: 'TagaSouth',
//         createdAt: '2023-09-01T17:44:01.000Z'
//     },
//     {
//         id: '28',
//         title: 'Ang Madre sa Lumang Gusali ng Miriam College',
//         locationName: 'Miriam College (Old Buildings), Quezon City',
//         lat: 14.6392, lng: 121.0742,
//         snippet: 'Sa mga lumang building daw ng Miriam, may madreng multo na nagpapakita, lalo na sa mga estudyanteng nag-o-overnight...',
//         fullStory: "Ate ko, graduate ng Miriam College, or Maryknoll pa noong time niya. Ang dami niyang kwento tungkol sa campus nila, lalo na sa mga older buildings. Isa sa pinakasikat 'yung tungkol sa isang madreng multo. Sabi nila, 'pag gabi na at tahimik na 'yung campus, minsan daw may makikitang madre na naglalakad sa mga hallway, or nakatayo sa may bintana.\n\nMay isang time, nag-overnight 'yung ate ko at 'yung mga ka-org niya sa isa sa mga lumang building para sa isang project. Hatinggabi na, gising pa sila, nagtatrabaho. Bigla na lang daw, may narinig silang parang kumakalampag sa kabilang kwarto, 'yung kwartong dapat ay walang tao. Sinilip nila, pero wala. Pagbalik nila sa pwesto nila, may nakita silang anino ng madre na dumaan sa labas ng bintana nila. Eh nasa second floor sila, imposible na may taong dumaan doon.\n\nSabi-sabi, baka raw 'yun 'yung kaluluwa ng isang madre na namatay doon noong unang panahon, or baka isa sa mga founding nuns. Hindi naman daw nananakot, parang nagbabantay lang. Pero siyempre, 'pag nakakita ka ng multong madre, matatakot ka pa rin. May mga area din daw sa campus na sobrang lamig, kahit 'di naman naka-aircon. 'Yun daw 'yung mga paboritong lugar ng madreng multo.",
//         authorNickname: 'CampusGhost',
//         createdAt: '2023-04-19T22:10:30.000Z'
//     },
//     {
//         id: '29',
//         title: 'Ang mga Multo sa Malacañang Palace',
//         locationName: 'Malacañang Palace, Manila',
//         lat: 14.5944, lng: 120.9941,
//         snippet: 'Sabi ng mga staff, maraming kaluluwa ang nagpaparamdam sa loob ng palasyo, mula sa mga dating presidente hanggang sa mga biktima ng kasaysayan...',
//         fullStory: "Ang Malacañang Palace, 'di lang 'yan tirahan ng Presidente, 'di ba? Saksi 'yan sa napakaraming yugto ng kasaysayan ng Pilipinas. Kaya hindi nakakagulat na may mga kwento ng multo diyan. Narinig ko 'to sa isang dating staff na nagtrabaho doon. Sabi niya, totoo raw 'yung mga 'di nakikitang residente' ng palasyo.\n\nMinsan daw, sa mga state rooms or sa mga lumang hallway, may maririnig kang mga yapak kahit wala namang tao. Minsan, parang may bumubulong or tumatawa. May mga specific ghosts pa raw na kilala na ng mga matatagal na staff. Sabi nila, 'yung multo raw ni President Quezon, minsan nagpapakita sa kanyang dating opisina. Mayroon ding 'White Lady' na gumagala sa mga hardin.\n\nAng pinaka-creepy raw, 'yung pakiramdam na laging may nakamasid sa'yo, lalo na sa mga parte ng palasyo na hindi masyadong ginagamit. May mga kwarto raw na sobrang lamig, kahit walang aircon. Sabi ng staff, baka 'yun 'yung mga kaluluwa ng mga taong namatay noong mga panahon ng giyera or 'yung mga biktima ng martial law na 'di matahimik. Nakakatindig-balahibo isipin na 'yung lugar kung saan nagdedesisyon ang lider ng bansa, may mga ganung kababalaghan din.",
//         authorNickname: 'MisteryoManila',
//         createdAt: '2023-10-10T10:10:10.000Z'
//     },
//     {
//         id: '30',
//         title: 'Ang Bundok ng Demonyo: Mt. Cristobal',
//         locationName: 'Mt. Cristobal, Quezon-Laguna',
//         lat: 14.0597, lng: 121.4361,
//         snippet: 'Kabaligtaran ng banal na Mt. Banahaw, ang Mt. Cristobal ay kilala bilang "Devil\'s Mountain" dahil sa mga madidilim na kwento...',
//         fullStory: "Katapat ng sagradong Mt. Banahaw ang Mt. Cristobal. Kung ang Banahaw ay kilala sa pagiging holy mountain, ang Cristobal naman, tinatawag na 'Devil's Mountain.' Ang daming kwento kung bakit. Sabi nila, maraming engkanto at masasamang espiritu raw ang nakatira dito. Marami rin daw ang mga naliligaw at hindi na nakakabalik.\n\nMay kwento 'yung isang mountaineer na umakyat ng Cristobal. Sabi niya, kakaiba raw talaga 'yung aura ng bundok. Parang ang bigat, tapos pakiramdam mo, laging may nakatingin sa'yo. Habang naglalakad sila sa trail, may narinig silang parang may sumusunod sa kanila, pero 'pag lilingon sila, wala naman. Tapos, may mga parteng bigla na lang silang nalilito sa daan, kahit may guide sila. Parang pinaglalaruan daw sila.\n\nAng pinaka-creepy, noong nag-camp sila, may narinig silang parang may umiiyak na malayo, tapos biglang may parang tumawa ng malakas. Hindi raw tawa ng tao. Kinabukasan, 'yung pagkain nila, parang may kumain ng konti, kahit selyado pa. Sabi ng mga local, 'wag daw basta-basta aakyat ng Cristobal, lalo na kung 'di ka handa spiritually. Marami raw 'sumusubok' sa mga umaakyat. Nakakatakot, 'no? Parang 'dark side' ng Banahaw.",
//         authorNickname: 'Lakwatsero',
//         createdAt: '2022-08-19T18:30:00.000Z'
//     },
//     {
//         id: '31',
//         title: 'Ang mga Nagpaparamdam sa Teacher\'s Camp',
//         locationName: 'Teacher\'s Camp, Baguio City',
//         lat: 16.4139, lng: 120.6103,
//         snippet: 'Isa sa pinaka-haunted na lugar sa Baguio. Bawat sulok daw, may kwento ng multo...',
//         fullStory: "Teacher's Camp sa Baguio. Sino ba namang hindi nakarinig ng ghost stories diyan? Parang required 'ata 'pag pumunta ka ng Baguio, marinig mo 'yung mga kwento. Sabi nila, dahil ginamit daw 'yan ng mga Hapon noong giyera, at bago pa 'yun, may mga native rituals din daw na ginagawa sa area. Kaya ang daming 'nakatira' na hindi natin nakikita.\n\nMay kaibigan ako, nag-seminar sila diyan. Sa isa sa mga lumang cottages sila nag-stay. Sabi niya, gabi-gabi, may naririnig silang yapak sa labas ng kwarto nila, 'yung parang mabibigat na bota. Minsan, may kumakatok sa pinto, pero 'pag binuksan, wala namang tao. 'Yung isang gabi, 'yung roommate niya, nagising kasi parang may humihinga raw malapit sa tenga niya. Pagdilat niya, may nakita siyang anino ng sundalong Hapon na nakatayo sa gilid ng kama niya. Napatili siya, tapos biglang nawala 'yung anino.\n\nSabi pa, 'wag ka raw titingin sa mga salamin doon ng matagal, baka may makita kang 'extra.' At 'yung mga lumang auditorium, 'pag gabi, parang may mga nanonood pa rin daw ng palabas. Sobrang daming kwento, from white ladies, to headless priests, to ghostly children. Kaya 'pag nag-Teacher's Camp ka, be prepared for some uninvited guests.",
//         authorNickname: 'BaguioBoy',
//         createdAt: '2023-11-04T01:01:01.000Z'
//     },
//     {
//         id: '32',
//         title: 'Ang mga Hiyaw sa Tunnel ng Corregidor Island',
//         locationName: 'Malinta Tunnel, Corregidor Island, Cavite',
//         lat: 14.3833, lng: 120.5775,
//         snippet: 'Sa loob ng Malinta Tunnel, maririnig mo pa rin daw ang mga sigaw at daing ng mga sundalong namatay noong giyera...',
//         fullStory: "Nag-tour kami dati sa Corregidor Island, at siyempre, kasama sa itinerary 'yung Malinta Tunnel. Grabe 'yung history noon, 'di ba? Naging ospital, naging headquarters, at saksi sa matinding labanan noong World War II. Habang nasa loob kami ng tunnel, 'yung tour guide, nagkukwento tungkol sa mga nangyari. Tapos, may part na pinatay nila 'yung ilaw for a few seconds para ma-feel daw namin 'yung atmosphere. Nung time na 'yun, sobrang tahimik, pero parang ang bigat ng hangin.\n\nSabi ng guide, maraming visitors ang nakakarinig ng mga kakaibang tunog sa loob ng tunnel, lalo na 'pag medyo konti 'yung tao. Mga bulong, mga yapak, minsan parang may umiiyak or sumisigaw ng mahina. May mga nagsasabi rin na nakakaramdam sila ng biglang panlalamig or parang may dumaan sa likod nila. 'Yung iba, nakakakita pa raw ng mga anino ng sundalo.\n\nMay isang area doon, 'yung tinatawag na '1000-bed hospital' wing. Sabi nila, 'yun daw 'yung isa sa pinaka-active. Imagine mo na lang, ospital 'yun sa gitna ng giyera. Ang daming namatay doon, siguro 'yung iba, hindi pa rin matahimik 'yung kaluluwa. Nakakatindig-balahibo, pero at the same time, parang reminder din ng sacrifices nila.",
//         authorNickname: 'UrbanLegendSeeker',
//         createdAt: '2023-03-03T13:33:33.000Z'
//     },
//     {
//         id: '33',
//         title: 'Ang mga Hagulgol Mula sa Ozamiz Ferry Disaster Site',
//         locationName: 'Off the coast of Ozamiz City (near Panguil Bay)',
//         lat: 8.1500, lng: 123.8300,
//         snippet: 'Pagkatapos ng isang malaking ferry tragedy, may mga mangingisda raw na nakakarinig ng mga iyak at tulong mula sa dagat...',
//         fullStory: "Hindi ko na maalala 'yung exact name ng ferry, pero may malaking maritime disaster na nangyari malapit sa Ozamiz City maraming taon na ang nakalipas. Daan-daang tao 'yung namatay. Pagkatapos noon, 'yung mga mangingisda raw sa area, may mga kakaibang karanasan.\n\nMay kwento 'yung lolo ng kaibigan ko, mangingisda siya. Sabi niya, ilang linggo pagkatapos ng trahedya, 'pag pumapalaot sila ng gabi, may mga naririnig silang parang mga hagulgol at sigaw ng tulong na nanggagaling sa parteng dagat kung saan lumubog 'yung barko. Minsan daw, sobrang lakas, parang andiyan lang sa tabi ng bangka nila. Pero 'pag titingnan nila, wala namang ibang tao or bangka.\n\nMay isang gabi, malakas daw 'yung alon, tapos biglang may nakita silang parang mga kamay na umaahon sa tubig, kumakaway na parang humihingi ng saklolo. Sobrang dami daw. Kinilabutan sila, nagdasal na lang tapos mabilis na umalis sa lugar na 'yun. Sabi nila, mga kaluluwa raw 'yun ng mga biktima na hindi pa rin matahimik, naghahanap pa rin ng rescue. Nakakalungkot at nakakatakot at the same time.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2023-08-18T05:50:00.000Z'
//     },
//     {
//         id: '34',
//         title: 'Ang mga Monghe sa Ilalim ng San Agustin Church',
//         locationName: 'San Agustin Church Crypts, Intramuros, Manila',
//         lat: 14.5895, lng: 120.9746,
//         snippet: 'Sa crypt ng San Agustin, kung saan nakalibing ang mga prayle, may mga nagpaparamdam daw na mga monghe...',
//         fullStory: "Ang San Agustin Church sa Intramuros, isa sa mga pinakamatandang simbahan sa Pilipinas. Ang ganda ng architecture, 'di ba? Pero bukod sa taas, 'yung ilalim niya, 'yung crypt, may sarili ring kwento. Doon nakalibing 'yung maraming prayle at prominenteng tao noong unang panahon.\n\nNag-tour kami diyan dati, at 'yung guide, binanggit niya na may mga 'paranormal activities' daw na nararanasan doon. Minsan daw, 'pag tahimik at wala masyadong tao, may maririnig kang parang Gregorian chant, 'yung parang dasal ng mga monghe. Minsan naman, may anino kang makikita na naka-abito, parang naglalakad sa mga pasilyo ng crypt. May mga area din daw na biglang lumalamig, kahit walang ventilation.\n\nMay isang kwento tungkol sa isang staff na nag-lock up ng gabi. Pagdaan niya sa may crypt, may nakita siyang figure ng monghe na nakatalikod, parang nagdarasal sa harap ng isang nitso. Akala niya, isa sa mga pari. Tinawag niya, pero 'di lumingon. Nung lalapitan na niya, dahan-dahan daw nag-fade 'yung figure hanggang sa nawala. Simula noon, 'di na siya nagpapa-late mag-lock up. Parang 'yung mga dating tagabantay ng simbahan, nandoon pa rin, nagbabantay.",
//         authorNickname: 'ManilaByNight',
//         createdAt: '2023-09-22T16:04:05.000Z'
//     },
//     {
//         id: '35',
//         title: 'Ang White House sa Camp John Hay',
//         locationName: 'The Bell House (formerly The White House), Camp John Hay, Baguio',
//         lat: 16.4014, lng: 120.6141,
//         snippet: 'Hindi lang daw si Bell ang nagpaparamdam dito. May iba pang mga spirits from its long history...',
//         fullStory: "Sa Camp John Hay, 'yung Bell House, or 'White House' kung tawagin ng iba, isa rin sa mga 'di papahuling haunted spots sa Baguio. Originally, summer residence 'yan ng mga American commanding generals. Tapos, siyempre, ginamit din noong World War II. Kaya ang daming layers ng history at, well, ghosts.\n\nSabi ng mga nagtrabaho doon or 'yung mga nakapag-tour, 'pag nasa loob ka, parang may ibang energy. Minsan daw, may maririnig kang mga yapak sa second floor, kahit wala namang umaakyat. 'Yung piano, minsan parang may tumutugtog ng mahina. May mga nakakakita rin daw ng anino ng lalaki na naka-unipormeng Amerikano, baka si General Bell nga, or ibang sundalo.\n\nPero hindi lang daw 'yun. May mga kwento rin ng mga Pilipinong spirits, baka 'yung mga dating nagsilbi doon or 'yung mga biktima noong panahon ng Hapon. 'Yung garden area, sabi nila, medyo creepy rin daw 'pag gabi. Parang may mga nagmamasid sa'yo mula sa mga puno. Kaya 'pag pumupunta kami diyan, picture-picture lang sa labas, tapos 'pag pumasok, mabilisang tour lang. Mahirap na, baka may 'souvenir' na sumama pauwi.",
//         authorNickname: 'BaguioBoy',
//         createdAt: '2023-10-02T12:00:00.000Z'
//     },
//     {
//         id: '36',
//         title: 'Ang mga Kalansay sa Capuchin Church Catacombs',
//         locationName: 'National Shrine of Our Lady of Lourdes (Capuchin Church), Quezon City',
//         lat: 14.6352, lng: 121.0190,
//         snippet: 'Sa ilalim ng simbahan, may catacombs na puno ng mga buto. Sabi nila, may mga kaluluwang hindi matahimik...',
//         fullStory: "Alam niyo ba na 'yung Capuchin Church sa Retiro, Quezon City, may catacombs sa ilalim? Hindi siya open sa public usually, pero may mga nakakapasok, lalo na 'yung mga taga-simbahan or 'pag may special permission. Doon daw nakalagak 'yung mga buto ng mga prayleng Capuchin at ilang miyembro ng community noong unang panahon. Imagine, rows of skulls and bones.\n\nMay kwento 'yung isang seminarista na napunta doon. Sabi niya, pagbaba pa lang nila sa hagdan, ramdam na agad 'yung lamig at 'yung 'bigat' ng lugar. Sobrang tahimik daw, pero parang may mga bumubulong. Habang naglalakad sila, may mga parteng parang may sumusunod sa kanila. 'Yung kasama niyang pari, bigla na lang daw nag-sign of the cross at nagdasal ng malakas.\n\nSabi-sabi, may mga kaluluwa raw doon na hindi pa rin matahimik, or baka 'yung mga 'guardian' ng mga labi. Minsan daw, 'yung mga buto, parang gumagalaw ng kusa. Or may maririnig kang parang may humihinga ng malalim. Sobrang creepy. Kahit sabihin mong banal na lugar 'yung simbahan sa taas, 'yung ilalim, ibang kwento. Parang portal sa ibang panahon.",
//         authorNickname: 'AninoSaDilim',
//         createdAt: '2023-05-16T23:45:00.000Z'
//     },
//     {
//         id: '37',
//         title: 'Ang mga Ninuno sa Heritage Houses ng Vigan',
//         locationName: 'Crisologo Street, Vigan, Ilocos Sur',
//         lat: 17.5711, lng: 120.3890,
//         snippet: 'Sa mga lumang bahay sa Vigan, sabi nila, nanonood pa rin daw ang mga dating may-ari mula sa mga bintana...',
//         fullStory: "Ang Vigan, parang time capsule, 'di ba? Lalo na sa Calle Crisologo. 'Yung mga bahay doon, sobrang tanda na, at marami sa kanila, naging inn or museum. Pero 'wag ka, 'yung mga dating nakatira, parang 'di pa rin umaalis. Kwento ng kaibigan ko na nag-stay sa isa sa mga heritage house-turned-hotel doon, may na-experience silang kakaiba.\n\nSabi niya, 'yung kwarto nila, nasa second floor, 'yung may malalaking capiz windows. Isang gabi, nagising siya kasi parang may yumuyugyog ng kama niya. Akala niya, lindol, pero 'yung kasama niya, tulog na tulog. Tapos, may narinig siyang parang naglalakad sa labas ng kwarto nila, 'yung tunog ng tsinelas sa kahoy na sahig. Pero 'pag sinilip niya, wala namang tao. Kinabukasan, 'yung staff, parang sanay na sa mga ganung kwento. Sabi nila, 'normal' lang daw 'yun, 'nagpaparamdam lang 'yung mga ninuno.'\n\nMay mga turista rin daw na nakakakita ng mga anino sa bintana ng mga bahay, kahit sarado na. Or parang may sumisilip sa kanila mula sa itaas. Sabi nila, 'wag ka raw magugulat kung may makita kang matandang babae na naka-bestida ng luma, or lalaking naka-barong, na bigla na lang susulpot tapos mawawala. Part na raw 'yun ng Vigan experience. Creepy but fascinating!",
//         authorNickname: 'Lakwatsero',
//         createdAt: '2023-08-08T08:08:08.000Z'
//     },
//     {
//         id: '38',
//         title: 'Ang mga Heswita sa Lumang Rizal Library ng Ateneo',
//         locationName: 'Ateneo de Manila University (Old Rizal Library), Quezon City',
//         lat: 14.6391, lng: 121.0770,
//         snippet: 'Bago pa yung bagong Rizal Lib, yung luma raw, may mga kwento ng mga paring Heswita na nagpaparamdam...',
//         fullStory: "Taga-Ateneo 'yung pinsan ko, and 'yung campus nila, lalo na 'yung mga older parts, may mga ghost stories din. Isa na diyan 'yung Old Rizal Library. Bago pa raw 'yung modernong library nila ngayon, 'yung luma, medyo may 'character' na. Sabi nila, may mga paring Heswita raw na multo na madalas magpakita doon. Mga dating propesor or librarians siguro.\n\nMay kwento 'yung isang estudyante na nag-aaral mag-isa sa isang secluded section. Gabi na 'yun. Bigla na lang daw siyang nakaramdam ng malamig na hangin, tapos may naamoy siyang insenso. Pagtingin niya sa dulo ng aisle, may nakita siyang figure ng pari, naka-sutana, nakatalikod, parang nagbabasa ng libro sa estante. Akala niya, totoong pari. Pero nung tinitigan niya, parang dahan-dahang nagiging transparent 'yung figure hanggang sa nawala.\n\nMay mga kwento rin ng mga libro na bigla na lang nahuhulog sa estante, or mga upuan na gumagalaw ng kusa. Minsan, may maririnig kang parang may nagtuturo sa isang empty classroom malapit sa library. Sabi nila, 'yung mga Heswitang 'yun, 'di naman daw nananakot, parang 'nandiyan' lang, continuing their scholarly pursuits even in the afterlife. Still, kung ikaw makakita, ewan ko lang kung 'di ka tatakbo.",
//         authorNickname: 'EstudyanteBlues',
//         createdAt: '2023-09-15T20:55:00.000Z'
//     },
//     {
//         id: '39',
//         title: 'Ang Multo sa St. La Salle Hall ng DLSU',
//         locationName: 'De La Salle University (St. La Salle Hall), Manila',
//         lat: 14.5646, lng: 120.9937,
//         snippet: 'Ang iconic St. La Salle Hall, lalo na yung chapel, may mga kwento ng mga Brothers at biktima ng giyera...',
//         fullStory: "Ang St. La Salle Hall sa DLSU, 'di ba, National Historical Landmark 'yan? Sobrang ganda ng architecture, pero dahil sa history niya, lalo na noong World War II, marami ring kwentong kababalaghan. Sabi ng mga Lasallista, 'yung chapel daw sa loob ng hall, isa sa mga pinaka-active. Maraming Brothers at sibilyan ang namatay doon noong Battle of Manila.\n\nMay mga estudyante at staff na nakakarinig daw ng mga bulong, mga dasal, or minsan, mga iyak sa loob ng chapel, kahit wala namang tao. May mga nakakakita rin daw ng anino ng mga Brothers na parang nagdarasal pa rin. 'Yung hallways din daw ng St. La Salle Hall, lalo na 'pag gabi, may mga 'naglalakad.' May mga nagre-report ng biglang paglamig ng temperatura, or 'yung pakiramdam na may dumaan sa likod mo.\n\nIsa sa mga pinaka-creepy na kwento, 'yung tungkol sa isang janitor na naglilinis ng gabi. May narinig daw siyang parang may naglalaro ng organ sa chapel. Pagpunta niya, wala namang tao, pero 'yung tunog, andun pa rin. Tapos, bigla na lang daw may bumagsak na isang prayer book mula sa taas. Simula noon, 'di na siya naglilinis mag-isa sa area na 'yun 'pag gabi. Ang bigat daw kasi ng pakiramdam, parang laging may kasama.",
//         authorNickname: 'CampusGhost',
//         createdAt: '2023-10-21T00:30:10.000Z'
//     },
//     {
//         id: '40',
//         title: 'Ang mga Kaluluwa sa Pindangan Ruins',
//         locationName: 'Pindangan Ruins, San Fernando, La Union',
//         lat: 16.5919, lng: 120.3211,
//         snippet: 'Mga guho ng lumang simbahan na sinira ng lindol. Sabi nila, marami pa ring residente doon...',
//         fullStory: "Ang Pindangan Ruins sa San Fernando, La Union, 'yung mga natitirang pader na lang ng isang lumang simbahan. Ang ganda niya for photoshoots, 'di ba? Pero dahil ruins siya ng simbahan, at may history ng lindol at marahil, mga labanan noong unang panahon, may mga kwento rin ng kababalaghan.\n\nMay mga local doon na nagsasabi na 'pag dapit-hapon or 'pag gabi, 'wag daw masyadong mag-iingay or magulo sa ruins. Baka raw 'maistorbo' 'yung mga 'nakatira' doon. Sabi nila, minsan daw, may maririnig kang parang may nagdarasal or kumakanta ng mga lumang awiting pansimbahan. Minsan naman, parang may mga anino na gumagalaw sa paligid ng mga pader, kahit wala namang ibang tao.\n\nMay isang grupo ng mga turista na nag-stay doon hanggang medyo dumilim para kumuha ng sunset photos. Sabi nila, habang nagpi-picture sila, bigla na lang daw namatay 'yung mga camera nila, tapos 'yung phone ng isa sa kanila, biglang nag-play ng parang choral music na 'di nila alam kung saan galing. Kinilabutan daw sila, kaya nagmadali na silang umalis. Parang paalala na 'yung lugar, kahit ruins na, may 'sagradong' aspeto pa rin at dapat irespeto.",
//         authorNickname: 'PinoyHorrorFan',
//         createdAt: '2023-04-01T17:50:40.000Z'
//     },
//     {
//         id: '41',
//         title: 'Ang mga Bumubulong sa Paco Park Cemetery',
//         locationName: 'Paco Park and Cemetery, Manila',
//         lat: 14.5831, lng: 120.9863,
//         snippet: 'Dating sementeryo, ngayon park. Pero yung mga dating nakalibing daw, minsan bumubulong pa rin...',
//         fullStory: "Ang Paco Park, ang ganda niya, 'di ba? Tahimik at peaceful, lalo na 'pag umaga. Pero 'wag natin kalimutan, sementeryo 'yan dati. Diyan nga unang nilibing si Jose Rizal, 'di ba? Kaya 'yung mga pader niyan, 'yung mga nitso sa loob, ang daming kwento.\n\nMay mga nagtatrabaho doon or 'yung mga madalas mag-jogging na nagsasabi na minsan, lalo na 'pag konti 'yung tao or 'pag palubog na 'yung araw, parang may mga bumubulong. Hindi mo maintindihan kung ano 'yung sinasabi, pero ramdam mo na may boses. Minsan daw, parang may sumisitsit sa'yo. Paglingon mo, wala naman.\n\nMay isang kwento tungkol sa isang security guard. Nagro-ronda siya isang gabi, tapos sa may St. Pancratius Chapel, may narinig siyang parang may nag-uusap. Dahan-dahan siyang sumilip, tapos may nakita siyang dalawang anino, parang naka-damit pang-kastila. Akala niya, mga nag-trespass lang. Pero nung sisitahin na niya, bigla na lang nawala 'yung mga anino. Sabi nila, baka 'yun 'yung mga kaluluwa ng mga prominenteng tao na nakalibing doon noong unang panahon. Nagpaparamdam lang.",
//         authorNickname: 'ManilaByNight',
//         createdAt: '2023-08-30T18:15:00.000Z'
//     },
//     {
//         id: '42',
//         title: 'Ang Doppelgänger sa Harrison Plaza',
//         locationName: 'Harrison Plaza (Former Site), Malate, Manila',
//         lat: 14.5660, lng: 120.9910,
//         snippet: 'Kahit demolished na, yung mga kwento ng multo sa Harrison Plaza, buhay pa rin. Isa na yung doppelgänger...',
//         fullStory: "Naalala niyo pa ba ang Harrison Plaza? 'Yung 'HP' sa Malate. Kahit wala na 'yun ngayon, ang daming urban legends diyan. Isa sa pinaka-creepy na narinig ko, 'yung tungkol sa doppelgänger. Sabi nila, may mga instances daw na makikita mo 'yung kakilala mo, tapos 'pag tinawag mo or nilapitan, biglang mawawala, or 'di kaya, 'pag nakausap mo, malalaman mo later na imposible kasi nasa ibang lugar pala 'yung totoong tao.\n\nMay kwento 'yung tita ko. Nagtatrabaho siya dati sa isa sa mga department store doon. Isang hapon, nakita niya 'yung supervisor niya na naglalakad papuntang stockroom. Sinundan niya kasi may itatanong siya. Pagpasok niya sa stockroom, wala 'yung supervisor niya. Nagtaka siya. Maya-maya, dumating 'yung supervisor niya galing sa kabilang entrance, galing daw sa lunch break. Imposible raw na siya 'yung nakita ng tita ko kanina.\n\nSabi ng matatanda, masamang pangitain daw 'pag nakakita ka ng doppelgänger mo or ng kakilala mo. 'Yung iba naman, sabi, baka 'yun 'yung mga 'hindi tao' na nagpapanggap. Kahit 'yung mga sinehan daw sa HP dati, may mga kwento rin ng mga 'extra audience.' Nakakamiss 'yung HP, pero 'yung mga multo, sana 'di na sumama sa bagong itatayo doon.",
//         authorNickname: 'TagaSouth',
//         createdAt: '2023-01-10T20:05:33.000Z'
//     },
//     {
//         id: '43',
//         title: 'Ang mga Nawawalang Bata sa Bundok Arayat',
//         locationName: 'Mt. Arayat, Pampanga',
//         lat: 15.2033, lng: 120.7433,
//         snippet: 'Sagradong bundok daw ito ni Mariang Sinukuan. May mga bata raw na kinukuha at hindi na bumabalik...',
//         fullStory: "Ang Mt. Arayat sa Pampanga, isa rin 'yan sa mga bundok na balot ng alamat. Sabi nila, tahanan daw 'yan ni Mariang Sinukuan, 'yung diwata ng bundok. At dahil diyan, may mga kwento rin ng mga 'paglalaro' ng mga engkanto, lalo na sa mga bata. May mga local stories tungkol sa mga batang naglalaro malapit sa paanan ng bundok, tapos bigla na lang daw nawawala.\n\nHahanapin ng mga magulang at ng buong baryo, pero parang bula na naglaho. Minsan daw, pagkatapos ng ilang araw, bigla na lang susulpot 'yung bata, pero parang tulala at hindi makapagsalita. 'Pag naka-recover na, ikukwento nila na may nakita silang magandang babae or mga kalarong kakaiba na nagyaya sa kanila sa isang magandang lugar sa loob ng gubat. Pinakain daw sila ng masasarap na prutas. 'Yung iba, hindi na talaga nakakabalik.\n\nSabi ng matatanda, 'kinukuha' raw sila ni Mariang Sinukuan or ng ibang engkanto para maging kalaro or para 'alagaan.' Kaya 'pag may mga taga-labas na pumupunta doon, lalo na 'pag may kasamang bata, laging may paalala na 'wag masyadong lalayo or mag-iingay. Kailangan daw laging may 'tabi-tabi po.' Respeto sa mga 'di nakikita.",
//         authorNickname: 'EngkantoEncounter',
//         createdAt: '2023-07-07T07:07:07.000Z'
//     },
//     {
//         id: '44',
//         title: 'Ang Babaeng Pula sa PICC',
//         locationName: 'Philippine International Convention Center (PICC), Pasay City',
//         lat: 14.5531, lng: 120.9820,
//         snippet: 'Sa mga grand halls ng PICC, may nagpapakita raw na babae na laging nakapula, lalo na pag may malalaking event...',
//         fullStory: "Ang PICC, 'di ba, venue 'yan ng mga malalaking international conferences, concerts, at graduations. Pero alam niyo ba na may urban legend din diyan tungkol sa isang 'Lady in Red'? Sabi ng mga staff na matagal na doon, at kahit 'yung mga event organizers, minsan daw, may nakikitang babae na naka-eleganteng pulang bestida, naglalakad sa mga hallway or nakaupo sa isa sa mga upuan sa plenary hall, kahit wala pa namang event or tapos na.\n\nIsang kwento, during a rehearsal for a big concert, 'yung isa sa mga singers, habang nasa stage, may napansin siyang babae na nakapula sa may audience area, nakatitig sa kanya. Akala niya, part ng production crew. Pero nung tinanong niya 'yung director, wala naman daw dapat taong nandoon. Pagtingin nila ulit, wala na 'yung babae. Minsan daw, sa mga CR, may makikitang anino ng babaeng nakapula sa salamin.\n\nWalang sure kung sino siya or ano'ng kwento niya. Baka raw dating guest na may strong attachment sa lugar, or baka naman, isang 'engkantada' na na-aattract sa mga grand events. Hindi naman daw nananakot, pero 'yung presence niya, enough na para kilabutan ka. Kaya 'pag may event sa PICC, baka 'di lang kayo-kayo ang audience.",
//         authorNickname: 'UrbanLegendSeeker',
//         createdAt: '2023-06-01T12:34:56.000Z'
//     },
//     {
//         id: '45',
//         title: 'Ang Anino sa Simbahan ng Silliman University',
//         locationName: 'Silliman University Church, Dumaguete City',
//         lat: 9.3100, lng: 123.3062,
//         snippet: 'Isa sa pinakamatandang American university sa Asia, yung simbahan daw nila, may shadow figure na nagbabantay...',
//         fullStory: "Ang Silliman University sa Dumaguete, ang ganda ng campus, lalo na 'yung mga lumang acacia trees at 'yung Silliman Church. Protestante 'yung simbahan na 'yun, at isa sa mga iconic structures sa campus. Dahil matagal na rin siyang nakatayo, may mga kwento rin ng 'di matahimik na kaluluwa.\n\nMay mga estudyante at faculty na nakakakita raw ng isang 'shadow figure' sa loob ng simbahan, lalo na 'pag gabi or 'pag madaling araw. Minsan daw, makikita 'to na nakatayo malapit sa altar, or nakaupo sa isa sa mga pew. Hindi raw clear 'yung itsura, basta maitim na anino ng tao. Minsan, parang may hawak na libro. May mga nagsasabi na baka 'yun 'yung spirit ng isa sa mga founding missionaries or isang dating pastor.\n\nIsang estudyante, nag-practice ng organ sa simbahan ng gabi. Mag-isa lang siya. Bigla na lang daw siyang nakaramdam ng sobrang lamig, tapos sa peripheral vision niya, may nakita siyang anino na dumaan sa likod niya. Hindi na siya lumingon, tinapos na lang niya 'yung piyesa niya tapos mabilis na umalis. Sabi nila, 'di naman daw nananakot 'yung anino, parang 'guardian' lang ng simbahan. Pero kahit na, 'pag ikaw 'yung makakita, matatakot ka pa rin.",
//         authorNickname: 'CebuanoExplorer',
//         createdAt: '2023-10-05T19:00:21.000Z'
//     },
//     {
//         id: '46',
//         title: 'Ang Sumisilip sa MTRCB Office',
//         locationName: 'MTRCB Office, Quezon City',
//         lat: 14.6413, lng: 121.0408,
//         snippet: 'Sa opisina kung saan nagre-review ng mga pelikula at palabas, may extra reviewer daw na nagpapakita...',
//         fullStory: "Ang MTRCB (Movie and Television Review and Classification Board), 'di ba, sila 'yung nanonood at nagbibigay ng rating sa mga pelikula at TV shows? Nakakatuwa isipin na 'yung opisina nila, may kwento rin ng multo. Narinig ko 'to sa isang kaibigan na may kamag-anak na nagtatrabaho doon dati.\n\nSabi niya, minsan daw, 'pag nagre-review sila ng mga materyal sa screening room, lalo na 'pag late na or 'pag horror 'yung pinapanood nila, parang may 'sumasabay' sa kanila. May mga pagkakataon daw na may makikitang anino sa dulo ng kwarto, or parang may dumaan sa likod nila. Minsan, 'yung pinto ng screening room, bigla na lang bubukas o sasara ng kusa.\n\nMay isang board member daw dati, habang nanonood mag-isa, may naramdaman siyang parang may huminga sa batok niya. Paglingon niya, wala namang tao. Tapos, 'yung upuan sa tabi niya, parang may umupo, lumubog ng konti. Hindi naman daw siya natakot, parang nasanay na lang daw sila. Sabi nila, baka raw 'yun 'yung kaluluwa ng isang dating board member na sobrang dedicated sa trabaho, or baka 'character' mula sa isa sa mga horror films na napanood doon na 'di na umalis. Creepy 'pag iniisip mo, 'di ba?",
//         authorNickname: 'PinoyHorrorFan',
//         createdAt: '2023-09-18T22:45:00.000Z'
//     },
//     {
//         id: '47',
//         title: 'Ang Lumang Mansyon sa Sariaya, Quezon',
//         locationName: 'Gala-Rodriguez Ancestral House, Sariaya, Quezon',
//         lat: 13.9643, lng: 121.5245,
//         snippet: 'Isa sa mga grand ancestral houses sa Sariaya. Sabi nila, yung mga dating may-ari, nagpaparamdam pa rin...',
//         fullStory: "Ang Sariaya, Quezon, kilala sa mga magaganda at malalaking ancestral houses. Isa na diyan 'yung Gala-Rodriguez house. Ang ganda niya, parang museum. Pero siyempre, 'yung mga ganitong lumang bahay, laging may kasamang kwentong kababalaghan. At 'yung bahay na 'to, 'di raw pahuhuli.\n\nMay mga tourista at kahit 'yung mga caretaker na nakaka-experience ng mga 'di maipaliwanag na bagay. Minsan daw, 'pag naglalakad ka sa loob, parang may sumusunod sa'yo. 'Yung mga ilaw, minsan nagfi-flicker. May mga nakakarinig din daw ng mga yapak sa second floor, kahit wala namang tao doon. 'Yung iba, parang may naririnig na nag-uusap na mga boses, pero 'di maintindihan 'yung salita, parang Spanish.\n\nAng pinaka-common daw na sighting, 'yung anino ng isang babae na nakadungaw sa bintana, lalo na 'pag gabi. Minsan, 'yung piano sa sala, bigla na lang daw tutunog ng kusa. Sabi nila, mga kaluluwa raw 'yun ng mga dating miyembro ng pamilya Gala-Rodriguez, binabantayan pa rin 'yung bahay nila. Hindi naman daw sila nananakot, pero 'yung presence nila, mararamdaman mo talaga. Nakakakilabot pero at the same time, parang ang lungkot din.",
//         authorNickname: 'BaryoTales',
//         createdAt: '2023-02-19T14:14:14.000Z'
//     },
//     {
//         id: '48',
//         title: 'Ang Madreng Walang Mukha sa St. Paul University QC',
//         locationName: 'St. Paul University Quezon City (Old Buildings/Chapel)',
//         lat: 14.6173, lng: 121.0301,
//         snippet: 'Sa campus daw nila, may madreng multo na gumagala, pero pag tiningnan mo, wala raw mukha...',
//         fullStory: "Pinsan ko, nag-aral sa St. Paul University sa Quezon City. Ang dami niyang kwento tungkol sa campus nila, lalo na sa mga lumang building at sa chapel. Isa sa pinaka-creepy 'yung tungkol sa 'Faceless Nun.' Sabi nila, may madreng multo raw na madalas magpakita, lalo na sa mga estudyanteng naglalakad mag-isa sa hallway 'pag gabi or 'pag madaling araw.\n\nMakikita mo raw siya na naglalakad, naka-abito ng madre. Aakalain mo, ordinaryong madre lang. Pero 'pag napatingin ka raw sa mukha niya, or 'pag lumingon siya sa'yo, wala raw siyang mukha. As in, blanko lang daw, or 'di kaya, sobrang dilim na parang butas. Sobrang nakakatakot daw 'yun. May mga estudyante raw na napapatili na lang or natutulala sa takot.\n\nSabi-sabi, baka raw 'yun 'yung kaluluwa ng isang madre na dumanas ng matinding trahedya noong unang panahon. Or baka naman, 'representation' ng isang 'di matahimik na espiritu. 'Yung chapel din daw nila, may mga 'nagdarasal' na 'di nakikita. Kaya 'yung pinsan ko, 'pag kailangan niyang dumaan sa mga lumang hallway ng gabi, takbo raw siya, 'wag lang siyang makasalubong ng madre.",
//         authorNickname: 'CampusGhost',
//         createdAt: '2023-08-25T01:11:11.000Z'
//     },
//     {
//         id: '49',
//         title: 'Ang Lumulutang na Kabaong sa Ilog Pasig',
//         locationName: 'Pasig River, Metro Manila',
//         lat: 14.5800, lng: 121.0000, 
//         snippet: 'May mga nakakakita raw ng kabaong na palutang-lutang sa Ilog Pasig, lalo na pag malalim na ang gabi...',
//         fullStory: "Ang Ilog Pasig, 'di ba, ang dami nang history niyan. Mula sa panahon ng mga Kastila hanggang ngayon. At dahil diyan, marami ring kwentong kababalaghan na nakakabit dito. Isa sa mga narinig ko, 'yung tungkol sa lumulutang na kabaong. Sabi ng mga matatanda na nakatira malapit sa ilog, or 'yung mga namamangka dati, minsan daw, lalo na 'pag hatinggabi at tahimik, may makikita kang kabaong na palutang-lutang sa gitna ng ilog.\n\nMinsan daw, ordinaryong kabaong lang. Pero minsan, may kasama raw na parang kandila na nakasindi sa ibabaw. Ang pinaka-creepy, 'pag sinubukan mong lapitan or sundan, bigla na lang daw lulubog or mawawala. May mga nagsasabi na baka 'yun 'yung mga biktima ng mga krimen na itinapon sa ilog, or 'yung mga namatay noong mga panahon ng digmaan na hindi nabigyan ng maayos na libing.\n\nMay isang kwento 'yung mangingisda, nakakita raw siya ng kabaong. Nung una, akala niya, basura lang. Pero nung lumapit siya, kitang-kita niya 'yung korte ng kabaong. Tapos, bigla raw siyang nakarinig ng parang may umiiyak na nanggagaling doon. Sa sobrang takot, mabilis siyang umalis. Simula noon, 'pag gabi na, 'di na siya masyadong pumapagitna sa ilog.",
//         authorNickname: 'MisteryoManila',
//         createdAt: '2023-06-06T00:06:00.000Z'
//     },
//     {
//         id: '50',
//         title: 'Ang Lalaking Nakaitim sa Libingan ng mga Bayani',
//         locationName: 'Libingan ng mga Bayani, Taguig City',
//         lat: 14.5180, lng: 121.0499,
//         snippet: 'Sa sementeryo ng mga bayani, may misteryosong lalaki raw na laging nakaitim, nagbabantay sa mga puntod...',
//         fullStory: "Ang Libingan ng mga Bayani, solemne at tahimik na lugar, 'di ba? Dito nakahimlay 'yung mga sundalo, mga dating presidente, at mga national artists. Pero kahit gaano katahimik, may mga kwento pa rin ng 'di maipaliwanag. Isa na rito 'yung tungkol sa isang 'Man in Black.' Sabi ng mga guwardiya at 'yung mga naglilinis doon, minsan daw, lalo na 'pag dapit-hapon or 'pag walang masyadong bisita, may makikita silang lalaki na laging nakasuot ng itim na amerikana, parang luma.\n\nTahimik lang daw itong naglalakad sa pagitan ng mga puntod, or minsan, nakatayo lang sa harap ng isang partikular na lapida, parang nagluluksa or nagbabantay. 'Pag sinubukan daw nilang lapitan or kausapin, dahan-dahan lang itong maglalakad palayo hanggang sa mawala sa paningin, parang naglaho sa hangin. Hindi raw ito namiminsala, pero 'yung presence niya, sobrang misteryoso at medyo nakakakilabot.\n\nMay mga haka-haka na baka raw 'yun 'yung kaluluwa ng isang 'unknown soldier' na hindi pa rin matahimik, or baka isang 'tagabantay' ng mga bayani. Minsan daw, 'pag may mga importanteng okasyon or 'pag may bagong libing, mas madalas daw siyang magpakita. Parang sinisigurado niya na maayos at nirerespeto ang lugar. Nakakatindig-balahibo, pero parang may halong respeto rin 'yung pakiramdam.",
//         authorNickname: 'AninoSaDilim',
//         createdAt: '2023-11-11T11:11:11.000Z'
//     },
//     {
//         "id": "51",
//         "title": "Ang Umiiyak na Bata sa Mansyon ng mga Lopez (Iloilo)",
//         "locationName": "Lopez Heritage House (Nelly Garden), Jaro, Iloilo City",
//         "lat": 10.7319, "lng": 122.5575,
//         "snippet": "Tour kami sa lumang mansyon, tapos may narinig kaming iyak ng bata, pero sabi ng guide, wala raw bata doon...",
//         "fullStory": "First time ko maka-tour sa Nelly Garden sa Jaro. Grabe, ang ganda ng bahay, parang bumalik ka sa past. Habang naglalakad kami sa second floor, 'yung guide, busy sa pagkukwento tungkol sa history ng pamilya Lopez. Bigla, may narinig kaming parang umiiyak na bata. Mahina lang, pero distinct. Nagkatinginan kami ng mga kasama ko.\n\n'Yung isa kong kaibigan, tinanong 'yung guide, 'Ma'am, may bata po bang kasama sa tour or nakatira dito?' Ngumiti lang si Ma'am, medyo weird 'yung ngiti. Sabi niya, 'Wala pong bata dito, sir. Matagal nang wala.' Tapos, parang binalewala na niya, nagpatuloy sa kwento. Pero kami, 'di na mapakali. Paulit-ulit naming naririnig 'yung iyak, parang nanggagaling sa isa sa mga saradong kwarto.\n\nNung pababa na kami, 'yung isa naming kasama na medyo 'sensitive', namutla. Sabi niya, nung napadaan daw siya malapit sa isang pinto, may naramdaman siyang malamig na hangin tapos parang may maliit na kamay na humawak sa laylayan ng damit niya. Hindi na kami nagtagal doon. Paglabas namin, parang ang bigat ng pakiramdam na nawala. Sabi ng mga local, may mga 'batang espiritu' raw talaga na naglalaro pa rin sa loob ng mansyon.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2023-07-14T15:22:05.000Z'
//     },
//     {
//         "id": "52",
//         "title": "Ang Sumusunod na Anino sa Kennon Road",
//         "locationName": "Kennon Road, Benguet",
//         "lat": 16.3500, "lng": 120.5833,
//         "snippet": "Pauwi kami galing Baguio, hatinggabi. May anino sa gilid ng kalsada, parang sumusunod sa takbo ng sasakyan...",
//         "fullStory": "This happened to my dad and his friends. Pauwi sila galing Baguio, mga 2 AM na, so Kennon Road 'yung dinaanan nila para mas mabilis daw. Tahimik 'yung byahe, medyo foggy pa. Bigla, 'yung katabi ni Daddy sa passenger seat, napansin niya sa side mirror, parang may anino ng tao na tumatakbo sa gilid ng kalsada, kasabay ng takbo ng van nila.\n\nSinabihan niya si Daddy, 'Pre, tingnan mo sa kanan mo.' Pagsilip ni Daddy, wala naman daw. Akala nila, guni-guni lang, pagod sa byahe. Pero after a few minutes, nakita na naman nila. This time, mas malinaw. Maitim na anino, parang tao, pero 'yung takbo, sobrang bilis, effortless na nasasabayan sila. Hindi nila maaninag 'yung mukha. Walang ibang sasakyan sa daan, maliban sa kanila.\n\nKinilabutan na sila. Nag-decide si Daddy na bilisan pa 'yung takbo. For a good 10 minutes, andun pa rin 'yung anino, parang nakikipagkarera. Tapos, bigla na lang, sa isang sharp curve, nawala na. Pagdating nila sa kapatagan, nag-stop over sila sa isang gas station, lahat sila pinagpapawisan. Sabi nila, baka raw 'yun 'yung mga 'bantay' ng Kennon or kaluluwa ng mga naaksidente doon. Never again daw sila dadaan ng Kennon ng hatinggabi.",
//         authorNickname: 'TitoDriverChronicles',
//         createdAt: '2023-09-09T03:15:44.000Z'
//     },
//     {
//         "id": "53",
//         "title": "Ang mga Bumubulong sa Pader ng Lumang Kumbento (Cebu)",
//         "locationName": "Ruins of an Old Convent, Oslob, Cebu",
//         "lat": 9.4650, "lng": 123.3800,
//         "snippet": "Nag-explore kami sa ruins ng isang lumang kumbento. Bigla, parang may mga bumubulong sa paligid namin...",
//         "fullStory": "My cousins and I love exploring old places. One time, we went to Oslob, Cebu, and heard about these really old Spanish-era convent ruins, medyo off the beaten path. Syempre, pinuntahan namin. It was late afternoon, and 'yung atmosphere, sobrang quiet and a bit eerie. Ang ganda ng stonework, pero halata mong matagal nang abandonado.\n\nWhile we were walking through what used to be a courtyard, bigla kaming nakarinig ng whispers. Parang maraming boses, pero hindi namin maintindihan 'yung sinasabi. Akala namin, may ibang tao. We called out, 'Hello? Anyone here?' Pero walang sumasagot. 'Yung bulungan, tuloy pa rin. Parang nanggagaling sa mga pader mismo. Tapos, naamoy namin 'yung parang old incense, 'yung amoy sa mga lumang simbahan.\n\nKinilabutan na kami. 'Yung isa kong pinsan, sabi niya, parang may naramdaman siyang humawak sa braso niya, pero wala namang tao sa tabi niya. Nagmadali na kaming umalis. Habang papalayo kami, parang may narinig kaming mahinang tawa ng babae. Sabi ng mga local na napagtanungan namin, 'wag daw basta-basta pumapasok doon, lalo na 'pag mag-isa or 'pag palubog na ang araw. Marami raw 'naiwan' na madre at pari doon.",
//         authorNickname: 'CebuanoExplorer',
//         createdAt: '2022-11-28T17:20:10.000Z'
//     },
//     {
//         "id": "54",
//         "title": "Ang Naglalarong Bote sa Opisina (Makati)",
//         "locationName": "An Office Building in Makati CBD",
//         "lat": 14.5547, "lng": 121.0244,
//         "snippet": "Graveyard shift ako. Bigla na lang 'yung bote ng tubig ko sa table, gumalaw mag-isa. Akala ko lindol, pero hindi...",
//         "fullStory": "I used to work the graveyard shift in a call center in Makati. Our office was on one of ahe higher floors. Sanay na ako sa katahimikan at sa pagiging 'zombie' 'pag madaling araw. One night, mga 3 AM, break ko, so ako lang sa station ko, nanonood ng YouTube sa phone. May bote ako ng mineral water sa table, half-full.\n\nBigla na lang, 'yung bote, gumalaw. As in, umusog ng mga two inches to the right. Napatingin ako agad. Akala ko, imagination ko lang. Tinitigan ko 'yung bote. After a few seconds, gumalaw ulit! This time, parang umikot pa ng konti. Walang hangin, walang vibration from aircon, walang lindol. Ako lang mag-isa sa row na 'yun.\n\nKinabahan na ako. Tinawag ko 'yung TL ko, pinakita ko. Sabi niya, 'Baka inaantok ka lang.' Pero nung kami na 'yung nakatingin, 'yung takip ng bote, biglang lumuwag tapos nahulog sa table! Nagkatinginan kami ni TL, tapos sabi niya, 'Tara, kape muna tayo sa pantry.' Hindi na namin pinag-usapan, pero a few days later, narinig ko sa ibang agents, may 'bata' raw talagang naglalaro sa floor namin 'pag gabi. Minsan, 'yung mga swivel chair, umiikot mag-isa.",
//         authorNickname: 'TheNightShift',
//         createdAt: '2023-10-24T03:33:00.000Z'
//     },
//     {
//         "id": "55",
//         "title": "Hitchhiker at Lumang Pera (Quezon Province)",
//         "locationName": "A Highway in Lucban, Quezon",
//         "lat": 14.1119, "lng": 121.5529,
//         "snippet": "May pinasakyang matandang babae 'yung tito ko. Pagbaba, 'yung bayad niya, perang Hapon...",
//         "fullStory": "Kuwento 'to ng tito ko, jeepney driver siya sa Quezon. Isang gabi, pauwi na siya from a long trip, medyo liblib na 'yung part ng highway. May nakita siyang matandang babae, nakabarong saya, nakatayo sa gilid ng daan, kumakaway. Naawa siya, so pinasakay niya kahit siya na lang 'yung pasahero. Tahimik lang daw 'yung matanda sa buong byahe.\n\nPagdating sa may bayan, nagpara 'yung matanda sa tapat ng lumang simbahan. Bago bumaba, nag-abot daw ng bayad. Kinuha naman ng tito ko, 'di na niya tiningnan. Pag-alis ng matanda, tsaka lang niya sinilip 'yung pera. Laking gulat niya, 'yung pera, 'Mickey Mouse money' – 'yung perang ginagamit noong panahon ng Hapon! Tapos, 'yung sukli na dapat ibibigay niya, hawak pa niya.\n\nLumingon siya para habulin 'yung matanda, pero wala na. Parang bula na naglaho. Kinilabutan tito ko. Pag-uwi niya, pinakita niya 'yung pera sa lola ko. Sabi ni Lola, baka kaluluwa raw 'yun na hindi matahimik. Itinago na lang daw ng tito ko 'yung pera. Simula noon, 'pag may nakikita siyang matandang nakabarong saya sa daan 'pag gabi, nilalakasan na lang niya 'yung radyo at 'di na tumitigil.",
//         authorNickname: 'LoloKiko',
//         createdAt: '2023-01-20T21:40:19.000Z'
//     },
//     {
//         "id": "56",
//         "title": "Ang Mangingisdang Nakakita ng Siyokoy (Palawan)",
//         "locationName": "Coastal Waters near El Nido, Palawan",
//         "lat": 11.2000, "lng": 119.4000,
//         "snippet": "Gabi na, mag-isa lang siyang nangingisda. Bigla, may humila sa lambat niya, sobrang lakas...",
//         "fullStory": "Lolo ko, mangingisda sa Palawan. Marami siyang kwentong dagat, pero 'yung isa, tungkol sa siyokoy, 'di ko makalimutan. Isang gabi, medyo malayo 'yung napuntahan niyang pangisdaan. Mag-isa lang siya sa bangka niya. Naghagis siya ng lambat, tapos maya-maya, naramdaman niyang sobrang bigat. Akala niya, jackpot, maraming huli.\n\nHinila niya nang hinila, pero parang may humihila rin pabalik, sobrang lakas. Tapos, bigla raw, may umangat na ulo mula sa tubig, malapit sa bangka niya. Hindi raw mukhang tao. Berde raw 'yung balat, may kaliskis, tapos 'yung mata, malalaki at dilaw. Nakatingin daw ng masama sa kanya. Binitawan ni Lolo 'yung lambat sa sobrang takot.\n\n'Yung nilalang daw, sumisid pabalik, pero bago 'yun, parang may sinabi na hindi niya naintindihan. Nagmadali si Lolo umuwi, nanginginig. Kinabukasan, 'yung lambat niya, nakita nilang nakasabit sa isang malaking bato sa pampang, punit-punit. Sabi ng ibang matatandang mangingisda, baka 'teritoryo' ng siyokoy 'yung napuntahan niya. Simula noon, 'di na pumalaot si Lolo nang mag-isa 'pag gabi.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2023-04-22T02:10:00.000Z'
//     },
//     {
//         "id": "57",
//         "title": "Amoy ng Sampaguita sa Saradong Kwarto (Davao)",
//         "locationName": "An Old House in Downtown Davao City",
//         "lat": 7.0678, "lng": 125.6073,
//         "snippet": "Nag-stay kami sa lumang bahay ng lola ng friend ko. Isang gabi, naamoy ko 'yung sampaguita, pero wala namang bulaklak...",
//         "fullStory": "Nag-sleepover kami sa bahay ng lola ng friend ko sa Davao. Sobrang luma na nung bahay, Spanish era pa yata. 'Yung kwarto kung saan kami natulog, andaming antigong gamit. Mga hatinggabi na, nagising ako kasi naamoy ko 'yung sampaguita. Sobrang tapang ng amoy. Akala ko, 'yung friend ko, nag-spray ng pabango or something.\n\nTinanong ko siya, pero tulog na tulog. Bumangon ako, hinanap ko kung saan galing 'yung amoy. Lahat ng bintana, sarado. Walang sampaguita sa loob ng kwarto, or kahit sa labas. Pero 'yung amoy, andun pa rin, parang nanggagaling sa isang sulok ng kwarto, malapit sa isang lumang aparador. Kinilabutan ako, bumalik na lang ako sa higaan at nagtalukbong ng kumot.\n\nKinabukasan, kinwento ko sa lola ng friend ko. Ngumiti lang siya, sabi niya, 'Ah, si Manang Ines 'yan. Mahilig 'yan sa sampaguita nung nabubuhay pa. Nagpaparamdam lang 'yan paminsan-minsan.' Si Manang Ines daw, 'yung dating caretaker ng bahay na matagal nang pumanaw. Hindi na ako nagtanong pa. Pero 'di ko makakalimutan 'yung amoy na 'yun.",
//         authorNickname: 'AteGirlAdventures',
//         createdAt: '2023-08-16T23:12:34.000Z'
//     },
//     {
//         "id": "58",
//         "title": "Ang Tren na Walang Tigil sa Paco Station",
//         "locationName": "PNR Paco Station (Old), Manila",
//         "lat": 14.5804, "lng": 120.9947,
//         "snippet": "Sabi ng mga taga-Paco, minsan daw may dumadaang tren sa lumang istasyon, pero 'di humihinto at walang sakay...",
//         "fullStory": "Laki ako sa Paco, Manila, malapit sa dating PNR station. May mga kwento 'yung mga matatanda doon na minsan daw, lalo na 'pag malalim na ang gabi, may maririnig kang tunog ng tren na dumadaan sa lumang riles. Ang kakaiba, 'yung tunog daw, parang 'di galing sa mga bagong tren. Mas mabigat, mas maingay, parang tren noong unang panahon.\n\nAng pinaka-creepy, 'pag sinilip mo raw, makikita mo 'yung tren na dumadaan, pero walang ilaw sa loob, madilim. Tapos, hindi raw ito humihinto sa istasyon, diretso lang. At wala raw itong sakay na tao. Parang ghost train. May isang beses, 'yung tiyuhin ko, lasing na umuwi, napadaan siya sa may riles. Nakita niya raw 'yung tren. Sinubukan niyang habulin, akala niya, may byahe pa. Pero 'yung tren, bigla na lang daw nag-fade sa dilim.\n\nSabi-sabi, baka 'yun daw 'yung mga tren na ginamit noong panahon ng giyera, or baka mga kaluluwa ng mga pasaherong naaksidente dati. Hanggang ngayon, 'pag napapadaan ako doon sa gabi, 'di ko maiwasang mapakinggan kung may paparating na 'ibang' tren.",
//         authorNickname: 'ManilaByNight',
//         createdAt: '2023-05-15T01:50:00.000Z'
//     },
//     {
//         "id": "59",
//         "title": "The Shifting Furniture in our Old Dumaguete Apartment",
//         "locationName": "An old apartment building, Dumaguete City",
//         "lat": 9.3077, "lng": 123.3054,
//         "snippet": "We'd come home to find chairs moved, or the small table in a different spot. No one else had keys...",
//         "fullStory": "When I was in college in Dumaguete, I rented a room in this very old apartment building near the university. It was cheap, but definitely had a vibe. The creepiest thing was the furniture. Sometimes, my roommate and I would come home from class, and a chair in the common area would be slightly out of place, or the small coffee table would be angled differently than how we left it.\n\nAt first, we thought maybe one of us just forgot. But it kept happening. We made sure to always put things back in their exact spots before leaving. Still, we'd find them moved. One time, we were both out for the entire weekend. When we got back Sunday night, the heavy wooden bookshelf in the hallway, which took two people to even nudge, was about an inch further from the wall. There was no sign of forced entry, and no one else had keys.\n\nWe asked the landlady, and she just gave this knowing smile and said, 'Oh, the previous tenants sometimes like to redecorate.' She said it so casually! We didn't stay there for another semester. It wasn't overtly scary, but the thought of unseen hands constantly shifting heavy furniture around us was just too unsettling.",
//         authorNickname: 'EstudyanteBlues',
//         createdAt: '2022-07-21T11:10:45.000Z'
//     },
//     {
//         "id": "60",
//         "title": "Ang Sigbin sa Gubat ng Bohol",
//         "locationName": "Rural forested area, Bohol",
//         "lat": 9.8200, "lng": 124.1500,
//         "snippet": "May nakita raw na kakaibang hayop 'yung magsasaka, parang aso pero paurong maglakad at may mahabang buntot...",
//         "fullStory": "Kuwento 'to ng lola ng kaibigan ko na taga-Bohol. May isang magsasaka raw sa baryo nila na galing sa bukid, medyo hapon na. Habang naglalakad siya sa may gilid ng gubat, may nakita siyang kakaibang hayop. Ang description niya, parang aso na walang balahibo, pero 'yung ulo, nakayuko palagi na parang sumisipsip sa lupa. Tapos, ang pinaka-weird daw, paurong ito maglakad, at 'yung buntot, sobrang haba na parang latigo.\n\nNatakot 'yung magsasaka, nagtago siya sa likod ng puno. Pinanood niya 'yung hayop. Mabilis daw itong kumilos, at parang may hinahanap. Maya-maya, bigla na lang itong tumalon papasok sa gubat at nawala. Pag-uwi ng magsasaka, kinwento niya sa mga matatanda. Sabi nila, 'Sigbin' daw 'yun.\n\nAng Sigbin daw, lumalabas 'pag gabi, sumisipsip ng dugo ng mga biktima, lalo na 'yung mga natutulog. Minsan daw, alaga 'yan ng mga aswang. Kinabukasan, 'yung alagang manok ng magsasaka, may nawawala. Walang bakas, walang ingay. Sabi nila, baka 'yun 'yung kinuha ng Sigbin. Brrr, buti na lang sa city ako lumaki.",
//         authorNickname: 'AswangDiaries',
//         createdAt: '2023-10-30T20:30:20.000Z'
//     },
//     {
//         "id": "61",
//         "title": "The Face in the Window of Aguinaldo Shrine",
//         "locationName": "Aguinaldo Shrine, Kawit, Cavite",
//         "lat": 14.4439, "lng": 120.9042,
//         "snippet": "Late afternoon visit. Took a photo of the iconic window, and later, saw a faint face looking out...",
//         "fullStory": "We visited the Aguinaldo Shrine in Kawit a few years back. It was a fascinating place, so much history. We were there until late afternoon, almost closing time. I was taking photos, and of course, I took one of the famous balcony window where independence was proclaimed. It was getting a bit dim, so I used my flash for some shots.\n\nLater that night, I was reviewing the photos on my camera. When I got to the one of the window, I zoomed in just to check the details. My blood ran cold. In the upper pane of the window, very faintly, there was what looked like a face. It was pale, with dark, hollow-looking eyes, and it seemed to be looking straight out, almost at the camera. It wasn't a reflection of anyone in our group, as we were all on the ground level looking up.\n\nI showed it to my family, and they were all creeped out. We couldn't explain it. Some said it might be a trick of the light or a smudge, but it really looked like a face. Considering the history of the house, the battles fought, and the lives lost, it wouldn't be surprising if some spirits still lingered there. I still have the photo, but I rarely look at it.",
//         authorNickname: 'GhostHunterPH',
//         createdAt: '2023-06-11T17:45:00.000Z'
//     },
//     {
//         "id": "62",
//         "title": "Ang Malamig na Kamay sa Retreat House (Tagaytay)",
//         "locationName": "A Retreat House in Tagaytay City",
//         "lat": 14.1167, "lng": 120.9609,
//         "snippet": "School retreat namin. Natutulog ako, tapos naramdaman kong may humawak sa paa ko. Sobrang lamig...",
//         "fullStory": "High school retreat namin 'to sa Tagaytay. 'Yung retreat house, medyo luma na, tapos 'yung rooms namin, dormitory style. First night, mga hatinggabi na, tulog na lahat ng roommates ko. Ako, medyo gising pa, 'di makatulog. Nakahiga ako, nakatalukbong ng kumot.\n\nBigla, naramdaman ko na parang may humawak sa paa ko, sa labas ng kumot. Akala ko, isa sa mga roommate ko, baka nanggigising or nagbibiro. Pero 'yung kamay, sobrang lamig! As in, parang yelo. Tapos, dahan-dahan siyang humigpit, parang kinukurot 'yung ankle ko. Natigilan ako sa takot. Hindi ako makagalaw, hindi ako makasigaw.\n\nAfter a few seconds, biglang nawala 'yung kamay. Pero 'yung lamig, andun pa rin sa paa ko. Dahan-dahan akong sumilip sa baba ng kumot. Walang tao. Lahat ng roommates ko, mahimbing na natutulog. Kinabukasan, kinwento ko sa kanila. Sabi ng isa, baka raw 'binangungot' lang ako. Pero alam ko 'yung naramdaman ko. 'Yung lamig na 'yun, hindi normal. May mga kwento rin pala 'yung ibang batches na may 'nagpaparamdam' daw talaga sa retreat house na 'yun.",
//         authorNickname: 'TakotAkoPH',
//         createdAt: '2023-09-19T02:22:00.000Z'
//     },
//     {
//         "id": "63",
//         "title": "The Whispering Walls of Fort Pilar (Zamboanga)",
//         "locationName": "Fort Pilar, Zamboanga City",
//         "lat": 6.8989, "lng": 122.0767,
//         "snippet": "Visiting the old fort, very quiet. Heard faint whispers, like prayers, but no one was near me...",
//         "fullStory": "Fort Pilar in Zamboanga is a really historical place, and also a shrine. I went there on a weekday afternoon, so it wasn't very crowded. I was walking along one of the old ramparts, looking out at the sea. It was very peaceful, almost too quiet. Then, I started hearing it – faint whispers. It sounded like multiple voices, very soft, like people praying or murmuring in a language I couldn't quite make out. Spanish, maybe?\n\nI looked around, thinking there might be a group praying nearby, but I was completely alone in that section of the fort. The whispers seemed to be coming from the ancient stone walls themselves. It wasn't scary in an aggressive way, more... solemn and a bit unsettling. I felt like I was intruding on something very private, very old.\n\nI continued my walk, and the whispers faded as I moved to a different area. I later read that the fort has seen centuries of conflict and devotion. It's said that Our Lady of the Pillar, the patroness, has performed miracles there. Maybe what I heard were the echoes of countless prayers offered over the years, or perhaps, the spirits of those who defended the fort. It gave me goosebumps.",
//         authorNickname: 'Lakwatsero',
//         createdAt: '2023-02-02T16:02:10.000Z'
//     },
//     {
//         "id": "64",
//         "title": "Ang Duwende sa Ilalim ng Punso (Bulacan)",
//         "locationName": "A backyard in a rural part of Bulacan",
//         "lat": 14.8400, "lng": 120.9500,
//         "snippet": "May punso sa likod-bahay namin. Minsan, 'yung mga laruan ng kapatid ko, nawawala tapos makikita malapit sa punso...",
//         "fullStory": "Sa likod-bahay namin sa Bulacan, may malaking punso. Sabi ni Lola, 'wag daw naming gagalawin or duduraan 'yun, kasi 'bahay' daw ng mga duwende. Noong bata ako, 'di ako naniniwala. Pero 'yung kapatid kong bunso, madalas siyang maglaro sa labas, malapit doon.\n\nMinsan, 'yung mga paborito niyang laruan, bigla na lang nawawala. Hahanapin namin sa buong bahay, wala. Tapos, after a few days, makikita na lang namin 'yung laruan, nakapatong sa gilid ng punso, or minsan, medyo nakabaon pa sa lupa. Parang 'hinihiram' daw ng mga duwende. Minsan naman, 'yung kapatid ko, magkakaroon ng biglaang sakit ng tiyan or lagnat na 'di maipaliwanag. Sabi ni Lola, 'nabati' raw ng duwende.\n\nPinapatawas namin siya, tapos 'yung albularyo, mag-aalay ng pagkain at kendi doon sa punso, tapos hihingi ng pasensya. Madalas, gumagaling naman 'yung kapatid ko. Simula noon, natuto na kaming magbigay-galang sa punso. Laging may 'tabi-tabi po.' Hindi man namin sila nakikita, pero naniniwala kaming nandiyan sila.",
//         authorNickname: 'LolaNenaStories',
//         createdAt: '2023-07-25T18:40:00.000Z'
//     },
//     {
//         "id": "65",
//         "title": "Ang Nagpapakitang Sundalo sa Corregidor Barracks",
//         "locationName": "Mile-Long Barracks, Corregidor Island",
//         "lat": 14.3810, "lng": 120.5765,
//         "snippet": "Touring the ruins. Saw a figure in an old uniform standing in a doorway, then it vanished...",
//         "fullStory": "Corregidor is just steeped in heavy history, and you can feel it everywhere. We were touring the Mile-Long Barracks, or what's left of it. It's just a shell, but you can imagine how it once was. I was a bit separated from our tour group, looking into one of the many empty, crumbling rooms through a ruined doorway.\n\nFor a split second, I saw a figure standing just inside. It was a man, and he seemed to be wearing an old-fashioned, khaki-colored military uniform, maybe American GI. He was just standing there, looking out, but not at me, more like through me. It was so quick, I blinked, and he was gone. I thought my eyes were playing tricks on me because of the heat and the somber atmosphere.\n\nBut then, as I was walking away to rejoin my group, I felt a sudden cold spot, even though it was a hot day. And I heard a very faint sound, like a sigh, or someone clearing their throat, right behind me. I spun around, but of course, no one was there. The tour guide later mentioned that soldiers' apparitions are commonly reported in the barracks. I guess I met one of them.",
//         authorNickname: 'UrbanLegendSeeker',
//         createdAt: '2023-03-04T14:44:44.000Z'
//     },
//     {
//         "id": "66",
//         "title": "Ang Tumatawag na Boses sa Phone (Bicol)",
//         "locationName": "A remote village in Sorsogon, Bicol Region",
//         "lat": 12.8000, "lng": 123.9500,
//         "snippet": "Nawalan ng signal 'yung phone ko. Bigla, may tumawag, unknown number. Boses ng lola ko, pero patay na siya...",
//         "fullStory": "This is a story from my cousin who lives in a remote part of Sorsogon. Cell signal is very spotty there. One night, there was a strong typhoon, and all power and communication lines were down. My cousin's phone had no signal at all. She was alone in their house, feeling a bit scared.\n\nSuddenly, her phone rang. She was shocked because, again, no signal. The caller ID showed 'Unknown Number.' Hesitantly, she answered. The voice on the other end was very faint, full of static, but she recognized it immediately. It was their lola's voice – their grandmother who had passed away two years prior. The voice just said, 'Apo, mag-ingat ka. Dito lang ako.' (Grandchild, take care. I'm just here.) Then the call dropped.\n\nMy cousin was terrified and confused. How could her phone ring without signal? And how could it be her dead grandmother? After the typhoon passed, she told her parents. Her mom said that maybe their lola was just watching over her. But my cousin couldn't shake off the creepiness of it all. She said the voice sounded so real, so close, yet so... otherworldly.",
//         authorNickname: 'ProbinsyanoTales',
//         createdAt: '2023-09-29T20:19:00.000Z'
//     },
//     {
//         "id": "67",
//         "title": "The Shadow Figure in our Ancestral Home (Pampanga)",
//         "locationName": "An ancestral house in Bacolor, Pampanga",
//         "lat": 15.0000, "lng": 120.6500,
//         "snippet": "Every time we visit our lola's old house, I see a tall, dark shadow moving in the hallways at night...",
//         "fullStory": "Our ancestral house in Bacolor, Pampanga, is very old. It survived lahar, but it's always had this... presence. Every time we visit, especially if I stay overnight, I see it. It's a tall, dark shadow figure, man-shaped but with no discernible features. It usually moves silently along the upstairs hallway, or sometimes stands in the doorway of one of the empty rooms.\n\nI'm not the only one who's seen it. My cousins have, my aunts and uncles too. It doesn't seem to do anything, just... observes. But its presence is heavy. You feel a drop in temperature when it's near, and the hairs on your arms stand up. We've tried taking photos, but it never shows up. We've had the house blessed multiple times, but it always comes back, or perhaps, it never really leaves.\n\nMy lola used to say it was a 'bantay' (guardian) of the house, one of the very old ancestors. She wasn't scared of it. But for us younger ones, it's a constant, unnerving reminder that we're never truly alone in that house. It's particularly active when there are many family members around, as if it's checking on everyone.",
//         authorNickname: 'AninoSaDilim',
//         createdAt: '2023-11-02T22:22:22.000Z'
//     },
//     {
//         "id": "68",
//         "title": "Ang Kumakatok na Walang Tao sa Condo Unit (Taguig)",
//         "locationName": "A condominium building in BGC, Taguig",
//         "lat": 14.5500, "lng": 121.0500,
//         "snippet": "Mag-isa ako sa unit. May kumakatok sa pinto, tatlong beses. Pagbukas ko, wala. Nangyari 'to ng ilang gabi...",
//         "fullStory": "I live alone in a condo in BGC. It's a relatively new building, so I didn't expect anything spooky. But for about a week, I experienced something really weird. It would always happen around 11 PM. I'd be watching TV or reading, and I'd hear three distinct knocks on my unit door: KNOCK. KNOCK. KNOCK. Not too loud, not too soft.\n\nThe first time, I got up and looked through the peephole. No one. I opened the door. Empty hallway. I thought, maybe kids from another unit, or someone got the wrong door. But it happened again the next night. Same time, same three knocks. Again, no one. This went on for five straight nights.\n\nI started getting really creeped out. I even asked the guard at the lobby if they saw anyone suspicious on my floor around that time via CCTV, but they said no unusual activity. On the sixth night, I was dreading 11 PM. When the knocks came, I just froze. I didn't answer. After a minute, I heard them again, but this time, they sounded like they were coming from *inside* my unit, on the other side of my bedroom door. I slept on the sofa that night with all the lights on. Thankfully, it stopped after that. I still don't know what it was.",
//         authorNickname: 'TakotAkoPH',
//         createdAt: '2023-10-18T23:00:00.000Z'
//     },
//     {
//         "id": "69",
//         "title": "Ang Dalakit Tree sa Palayan (Antique)",
//         "locationName": "A rice field near a Dalakit tree, Antique Province",
//         "lat": 11.4500, "lng": 122.0800,
//         "snippet": "Sabi nila, 'wag daw titingin sa taas ng Dalakit 'pag gabi, baka makakita ng engkantada or 'di maganda...",
//         "fullStory": "Sa probinsya namin sa Antique, maraming kwento tungkol sa mga Dalakit tree. Ito 'yung mga malalaki at matatandang puno na parang balete, na pinaniniwalaang tirahan ng mga engkanto. May isa kaming palayan na may malaking Dalakit sa gilid. Sabi ng lolo ko, 'wag na 'wag daw kaming titingala doon 'pag kabilugan ng buwan or 'pag hatinggabi, baka raw 'di kami makauwi.\n\nMay isang pinsan daw ako na medyo matapang, sinubukan niyang sumilip isang gabi. Nagtago siya sa may pilapil. Maya-maya, may nakita raw siyang parang mga ilaw na maliliit na paikot-ikot sa taas ng puno, parang mga alitaptap pero mas malaki at iba-iba ang kulay. Tapos, may narinig siyang parang tugtugin, mahina lang, parang plawta. Nung tumingala siya, may nakita raw siyang anino ng babae na sobrang ganda, nakaputi, nakaupo sa isa sa mga sanga. Nakatingin daw ito sa kanya at ngumingiti.\n\nBigla raw siyang kinilabutan at parang nahihilo. Tumakbo siya pauwi. Kinabukasan, nilagnat siya ng ilang araw. Sabi ng albularyo, 'natuwaan' daw siya ng engkantada. Simula noon, 'di na siya umulit. Ako, hanggang tingin na lang sa puno 'pag umaga, 'di ko na sinusubukan 'pag gabi.",
//         authorNickname: 'EngkantoEncounter',
//         createdAt: '2023-08-28T21:28:28.000Z'
//     },
//     {
//         "id": "70",
//         "title": "The Empty Swing Set Moving (Subic Bay)",
//         "locationName": "An old playground near the former US Naval Base, Subic Bay",
//         "lat": 14.8210, "lng": 120.2840,
//         "snippet": "Abandoned playground. One swing was moving back and forth on its own. No wind at all.",
//         "fullStory": "My family used to live near Subic Bay, and there were a lot of areas around the former US base that felt... a bit haunted. There was this one old, slightly overgrown playground that my friends and I sometimes passed by. It had rusty swing sets and a creepy old slide.\n\nOne late afternoon, as the sun was starting to set, we were walking past it. It was a very still day, absolutely no wind. But one of the swings, just one, was moving. Not wildly, but steadily, back and forth, back and forth, as if a small child had just gotten off it. The chains were even creaking softly. We all just stopped and stared. There was no one else around. The other swings were perfectly still.\n\nIt went on for a good minute before it slowly started to lose momentum and stop. We didn't say anything to each other, just sort of looked at each other with wide eyes and then walked away a bit faster. We heard stories later that some of the old housing areas for American families had their share of unexplained happenings. Maybe a child's spirit was still enjoying the playground.",
//         authorNickname: 'PinoyHorrorFan',
//         createdAt: '2023-04-14T17:55:00.000Z'
//     },
//     {
//         "id": "71",
//         "title": "Ang Pumipigil sa Sasakyan sa Atimonan (Zigzag Road)",
//         "locationName": "Old Zigzag Road (Bitukang Manok), Atimonan, Quezon",
//         "lat": 14.0050, "lng": 121.8980,
//         "snippet": "Byaheng Bicol. Biglang bumigat 'yung takbo ng bus namin sa Bitukang Manok. Parang may nakakapit...",
//         "fullStory": "Madalas kaming mag-Bicol ng pamilya ko, at 'yung Old Zigzag Road sa Atimonan, or Bitukang Manok, kilala talaga sa mga aksidente at kwentong kababalaghan. Isang beses, gabi kami bumibyahe, sakay kami ng bus. Pagpasok namin sa pinaka-curvy part ng Bitukang Manok, biglang parang bumagal at bumigat 'yung takbo ng bus, kahit naka-apak na 'yung driver sa gas.\n\nParang may humihila sa amin pababa or pumipigil sa pag-usad. 'Yung makina ng bus, umuugong na, pero ang bagal pa rin ng takbo namin. Nagdasal na lang 'yung nanay ko. Tapos, may katabi kaming matandang babae, bumulong siya, 'Naku, andiyan na naman sila.' Tinanong namin kung sino, sabi niya, 'Yung mga ayaw patawirin.' After mga 10 minutes na parang hirap na hirap 'yung bus, bigla na lang gumaan ulit 'yung takbo at bumilis kami.\n\nPaglabas namin ng Zigzag, 'yung driver, nag-stop over. Sabi niya, first time daw niyang naranasan 'yun na ganun kabigat. Parang may nakasabit daw na isang truck sa likod nila. Sabi ng matandang babae, 'swerte' pa raw kami kasi nakalusot. 'Yung iba daw, 'di na nakakalabas. Simula noon, 'pag dumadaan kami doon, doble dasal na talaga.",
//         authorNickname: 'TitoDriverChronicles',
//         createdAt: '2023-09-02T01:05:00.000Z'
//     },
//     {
//         "id": "72",
//         "title": "Ang Multong Pusa sa Aming Garahe (General Santos)",
//         "locationName": "A house in General Santos City",
//         "lat": 6.1167, "lng": 125.1667,
//         "snippet": "May alaga kaming pusa dati, si Mingming. Namatay siya. Pero minsan, naririnig pa rin namin 'yung meow niya sa garahe...",
//         "fullStory": "May alaga kaming pusa dati, si Mingming. Sobrang love namin 'yun. One day, nasagasaan siya malapit sa bahay namin, namatay. Sobrang lungkot namin. Inilibing namin siya sa backyard. Mga ilang linggo pagkatapos, nagsimula 'yung mga weird na bagay.\n\nMinsan, 'pag nasa sala kami, maririnig namin 'yung distinct na meow ni Mingming, parang nanggagaling sa may garahe. Sisilipin namin, pero wala. Minsan naman, 'yung food bowl niya na iniwan namin sa garahe as a sort of memorial, makikita naming umusog ng konti. Or 'yung paborito niyang laruang bola, gugulong mag-isa.\n\nAng pinaka-nakakakilabot, one night, 'yung kapatid ko, nagising kasi parang may naramdaman siyang pusa na tumalon sa kama niya at humiga sa paanan niya, 'yung laging ginagawa ni Mingming. Pero pagdilat niya, wala. Sabi namin, baka nagpaparamdam lang si Mingming, nami-miss kami. Hindi naman siya nananakot, pero 'yung lungkot at 'yung konting takot, andun pa rin 'pag naririnig namin 'yung 'ghost meows' niya.",
//         authorNickname: 'AteGirlAdventures',
//         createdAt: '2023-05-24T20:44:00.000Z'
//     },
//     {
//         "id": "73",
//         "title": "The Girl in the Reflection (An old mirror in Vigan)",
//         "locationName": "A curio shop with old items, Vigan, Ilocos Sur",
//         "lat": 17.5745, "lng": 120.3880,
//         "snippet": "Looking at an antique mirror. For a second, my reflection was a different girl in old clothes...",
//         "fullStory": "I was in Vigan with friends, and we were browsing in one of those curio shops that sell antiques and old items. There was this beautiful, large, ornate mirror, clearly very old. I stood in front of it, just looking at my reflection. For a split second, and I swear this happened, my reflection flickered. It wasn't me looking back.\n\nIt was a young girl, maybe Filipina-Spanish, with long dark hair, wearing what looked like a very old-fashioned, high-necked dress. She looked sad, and her eyes seemed to meet mine for that briefest moment. Then, just as quickly, my own reflection was back. I gasped and stepped away from the mirror, my heart pounding.\n\nMy friends asked what was wrong, but I couldn't really explain it without sounding crazy. I just said the mirror creeped me out. I kept glancing back at it, but I only saw normal reflections after that. I often wonder who that girl was and what her story was. It felt like I'd looked through a window into the past, or perhaps, she had looked out.",
//         authorNickname: 'Lakwatsero',
//         createdAt: '2023-08-09T15:15:15.000Z'
//     },
//     {
//         "id": "74",
//         "title": "Ang Tumatawid na Kalabaw na Biglang Nawawala (Isabela)",
//         "locationName": "A provincial road in Isabela Province",
//         "lat": 17.1500, "lng": 121.8000,
//         "snippet": "Nagda-drive 'yung tatay ko, may kalabaw na tumatawid. Nagpreno siya. Pagtingin ulit, wala na 'yung kalabaw...",
//         "fullStory": "Tatay ko, byahero 'yan dati, nagde-deliver ng mga goods sa iba't-ibang probinsya. One time, nasa Isabela siya, gabi na, medyo madilim 'yung kalsada, puro palayan sa gilid. Bigla raw, may nakita siyang kalabaw na tumatawid sa daan, mga 50 meters ahead. Natural, nag-menor siya at nagpreno para 'di niya mabangga.\n\nPaglapit niya sa spot kung saan niya nakita 'yung kalabaw, wala. As in, wala. Tiningnan niya sa kaliwa't kanan ng kalsada, sa mga palayan, wala siyang makitang kalabaw. Imposible raw na ganun kabilis mawala 'yung kalabaw, lalo na't malaki 'yun. Wala ring ibang tao or sasakyan.\n\nKinilabutan daw tatay ko. Pinatakbo na lang niya ulit 'yung truck niya. Sabi niya, baka raw 'elemental' 'yun or 'multo ng kalabaw.' Narinig niya sa ibang driver, may mga ganun daw talagang 'nagpapakita' sa mga liblib na daan, parang nanloloko or nagpaparamdam lang. Buti na lang daw 'di siya bumaba ng truck para hanapin.",
//         authorNickname: 'ProbinsyanoTales',
//         createdAt: '2023-03-12T22:30:45.000Z'
//     },
//     {
//         "id": "75",
//         "title": "Yapak sa Bubong ng Nipa Hut Namin (Siargao)",
//         "locationName": "A nipa hut near the beach, Siargao Island",
//         "lat": 9.8700, "lng": 126.1000,
//         "snippet": "Natutulog kami. Bigla, may narinig kaming mabibigat na yapak sa bubong namin. Pero nipa hut lang 'yun...",
//         "fullStory": "When I first went to Siargao years ago, we stayed in a very basic nipa hut right by the beach. It was charming, but one night was genuinely terrifying. It was around 2 or 3 AM, dead quiet except for the sound of the waves. My friend and I were asleep when we were both jolted awake by the sound of heavy footsteps on our roof.\n\nTHUMP. THUMP. THUMP. Like someone was slowly, deliberately walking across it. The thing is, it was a nipa roof. It wouldn't support the weight of a person. And even if it could, who would be on our roof in the middle of the night? There were no tall trees nearby for someone to jump from. We were frozen in fear, just listening. The footsteps went from one end of the small hut to the other, then stopped.\n\nWe didn't sleep for the rest of the night. The next morning, we checked the roof from the outside. Nothing. No damage, no footprints (not that we expected any on nipa). We asked some locals if they knew of anything. They just shrugged and said, 'Ah, the island has many spirits.' Some mentioned the 'Wakwak' or other creatures that are said to land on roofs. We moved to a concrete cottage after that.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2023-01-05T02:45:00.000Z'
//     },
//     {
//         "id": "76",
//         "title": "Ang Nawawalang Santo sa Lumang Simbahan (Laguna)",
//         "locationName": "Nagcarlan Underground Cemetery and Church, Laguna",
//         "lat": 14.1356, "lng": 121.4171,
//         "snippet": "Sa underground cemetery, may kwento tungkol sa isang rebulto ng santo na nawawala tapos bumabalik mag-isa...",
//         "fullStory": "Ang Nagcarlan Underground Cemetery, 'di ba, sikat na 'yan? Pero 'yung simbahan mismo sa taas, may mga kwento rin. May narinig ako sa isang local doon tungkol sa isang maliit na rebulto ng santo, 'di ko na maalala kung sinong santo, na nasa isa sa mga side altars. Sabi nila, minsan daw, nawawala 'yung rebulto.\n\nHahanapin ng mga sacristan, wala. Akala nila, ninakaw. Pero after a few days, or minsan, kinabukasan lang, makikita na lang nila 'yung rebulto, balik na ulit sa pwesto niya, parang walang nangyari. Minsan daw, medyo iba 'yung pwesto, or parang may alikabok na galing sa labas, na parang 'naglakwatsa' raw 'yung santo.\n\nMay isang matandang caretaker daw dati na nakakita mismo. Papasok siya sa simbahan ng madaling araw para maglinis. Pagtingin niya sa altar, wala 'yung rebulto. Nagulat siya. Habang nagpupunas siya sa ibang parte, narinig niya 'yung parang maliit na kaluskos. Paglingon niya, nakita niya 'yung rebulto na dahan-dahang umuusog pabalik sa pwesto niya, parang may 'di nakikitang kamay na naglalagay. Hindi na raw siya nagsalita, nagdasal na lang. Creepy 'pag 'yung santo na mismo ang 'gumagala'.",
//         authorNickname: 'BaryoTales',
//         createdAt: '2023-08-14T10:10:00.000Z'
//     },
//     {
//         "id": "77",
//         "title": "The Cold Spot and Perfume in the UP Vargas Museum",
//         "locationName": "Jorge B. Vargas Museum, UP Diliman, Quezon City",
//         "lat": 14.6580, "lng": 121.0660,
//         "snippet": "Walking through a gallery, suddenly hit a very cold spot, and a strong smell of old lady perfume. Then it was gone.",
//         "fullStory": "I was visiting the Vargas Museum in UP Diliman. It's a great museum, lots of art and historical items. I was in one of the upstairs galleries, looking at some paintings. It was a warm day, and the gallery was air-conditioned but not freezing. As I walked past a particular display case with some old Filipiniana attire, I suddenly stepped into an intensely cold spot. It was like walking into a freezer for a second. The air was noticeably colder than the rest of the room.\n\nAt the exact same moment, I smelled a very strong, distinct perfume. It wasn't a modern scent; it smelled like old-fashioned floral perfume, the kind my grandmother used to wear. It was quite overpowering for a moment. I looked around, thinking maybe a staff member had walked past wearing it, but I was alone in that section of the gallery. The people I could see were at the other end of the room.\n\nThen, as quickly as it came, the coldness and the perfume vanished. I took a few more steps, and the temperature was back to normal. I even sniffed the air, but the perfume smell was completely gone. It was so bizarre. I've heard UP has its share of ghosts, so maybe one of them was checking out the exhibits with me.",
//         authorNickname: 'CampusGhost',
//         createdAt: '2023-03-23T15:35:00.000Z'
//     },
//     {
//         "id": "78",
//         "title": "Ang mga Mata sa Dilim sa Balay na Bato (Aklan)",
//         "locationName": "Balay na Bato (Old Spanish House), Ibajay, Aklan",
//         "lat": 11.8180, "lng": 122.1670,
//         "snippet": "Nag-overnight kami sa lumang bahay. Paggising ko, may dalawang mata na nakatitig sa akin mula sa dilim...",
//         "fullStory": "My friend's family owns an old 'balay na bato' in Ibajay, Aklan, and we got to stay there one weekend. Sobrang authentic, 'yung mga gamit, luma talaga. No electricity in some parts, so we used gas lamps. Sa isang malaking kwarto kami natulog, sa sahig lang, may mga banig.\n\nMga madaling araw, nagising ako. Sobrang dilim, 'yung gas lamp namin, 'di na umabot 'yung ilaw sa parteng pader. Habang nakahiga ako, trying to go back to sleep, napansin ko, parang may dalawang tuldok na kumikinang sa dilim, sa may bandang paanan ng kwarto. Akala ko, reflection lang ng kung ano. Pero nung tinitigan ko, 'yung dalawang tuldok, parang mga mata. At parang nakatitig sa akin.\n\nHindi gumagalaw, pero alam kong mata 'yun. Hindi mata ng pusa or aso, kasi 'yung pwesto, mataas, parang mata ng taong nakatayo. Sinubukan kong 'di pansinin, pumikit ako. Pero ramdam ko pa rin 'yung titig. After a few minutes, naglakas-loob akong dumilat ulit. Wala na 'yung mga mata. Hindi na ako nakatulog hanggang mag-umaga. Kinwento ko sa friend ko, sabi niya, baka 'guni-guni' ko lang daw. Pero 'yung titig na 'yun, tandang-tanda ko pa rin.",
//         authorNickname: 'AninoSaDilim',
//         createdAt: '2023-07-17T03:17:00.000Z'
//     },
//     {
//         "id": "79",
//         "title": "Ang Batang Naglalaro ng Holen sa Sementeryo (La Loma)",
//         "locationName": "La Loma Cemetery, Caloocan/Manila",
//         "lat": 14.6300, "lng": 120.9850,
//         "snippet": "Undas. May narinig kaming naglalaro ng holen sa isang lumang nitso. Pagtingin namin, walang bata...",
//         "fullStory": "Every Undas, we visit our relatives at La Loma Cemetery. It's a huge, sprawling place, and some parts are very old. One evening, it was getting dark, and we were lighting candles. My younger cousins and I were near a cluster of very old, somewhat neglected tombs. Suddenly, we heard the distinct 'click-clack' sound of marbles – holen – being played.\n\nIt sounded like it was coming from just behind one of the big, mausoleum-type tombs. We thought maybe some other kids were playing there. We peeked around the corner, expecting to see them. But there was no one. The sound stopped the moment we looked. We waited a bit, then we heard it again, from the same spot. 'Click-clack-click.' We quickly looked again – still empty. The ground was just dirt and old leaves, no sign of marbles or anyone playing.\n\nWe got a bit spooked and went back to our family. We told our tita, and she said, 'Naku, baka 'yung mga batang kaluluwa 'yan. Hayaan niyo lang sila maglaro.' It wasn't a terrifying experience, but it was definitely eerie to hear sounds of children playing in a place where no living child was present.",
//         authorNickname: 'MisteryoManila',
//         createdAt: '2022-11-01T19:30:00.000Z'
//     },
//     {
//         "id": "80",
//         "title": "The Persistent Knocking at the Hotel Door (Bacolod)",
//         "locationName": "An old hotel in Bacolod City",
//         "lat": 10.6740, "lng": 122.9500,
//         "snippet": "Checked into an old hotel. Middle of the night, someone knocked. Peephole showed an empty hallway. It happened three times.",
//         "fullStory": "I was in Bacolod for work and stayed in one of the older, more 'classic' hotels in the city. My room was at the end of a long, dimly lit hallway. The first night, around 1 AM, I was woken up by a series of firm knocks on my door – three knocks, then a pause, then three more. I got up, a bit groggy, and looked through the peephole. The hallway was completely empty. I figured it was a late-arriving guest who got the wrong room.\n\nAbout an hour later, it happened again. Same pattern of knocks. This time, I was more alert. I quickly looked through the peephole. Still empty. I even opened the door a crack. Nothing. Now I was getting a bit uneasy. I tried to go back to sleep, but then, for a third time, around 3:30 AM, the knocking came again, more insistent this time. I didn't even bother looking; I just yelled, 'Wrong room!' very loudly. The knocking stopped.\n\nThe next morning, I mentioned it to the front desk, just in case. The receptionist looked a bit uncomfortable and just said they hadn't received any other complaints. I read online later that some old hotels have 'resident ghosts' who like to make their presence known to new guests. I requested a different room for my remaining nights.",
//         authorNickname: 'CebuanoExplorer',
//         createdAt: '2023-09-25T01:30:00.000Z'
//     },
//     {
//         "id": "81",
//         "title": "Ang Babaeng Nakaputi sa Hibok-Hibok Volcano Trail (Camiguin)",
//         "locationName": "Mt. Hibok-Hibok Trail, Camiguin Island",
//         "lat": 9.2030, "lng": 124.6730,
//         "snippet": "Nagha-hike kami paakyat. Sa isang section ng trail, may nakita kaming babae, nakaputi, nakatayo sa malayo. Paglapit namin, wala na.",
//         "fullStory": "My friends and I decided to hike Mt. Hibok-Hibok in Camiguin. It was a challenging but beautiful trail. We were with a local guide. About halfway up, we were navigating a densely forested section. Ahead of us, maybe 50 meters down the trail where it curved, we all saw her – a figure of a woman, standing still, wearing a long white dress. Her back was mostly to us, and her hair was long and dark.\n\nOur guide, who was in front, suddenly stopped and made a small gesture, like 'wait'. We all paused. The woman didn't move. After a moment, our guide started walking again, and we followed. As we rounded the curve where we had seen her, she was gone. There was nowhere she could have gone that quickly without us seeing her. The trail was narrow, with thick vegetation on either side. No side paths.\n\nWe asked our guide, 'Nakita niyo 'yung babae kanina?' He just nodded slowly and said, 'Oo. Tagabantay 'yan dito. Minsan nagpapakita.' He didn't elaborate, and we didn't press him. But the rest of the hike, we were all a bit more quiet, a bit more aware of our surroundings. It wasn't scary, more like a reminder that some places have guardians you don't see.",
//         authorNickname: 'Lakwatsero',
//         createdAt: '2023-04-25T11:00:00.000Z'
//     },
//     {
//         "id": "82",
//         "title": "The Music Box in the Abandoned House (Antipolo)",
//         "locationName": "An abandoned house in a subdivision in Antipolo, Rizal",
//         "lat": 14.5870, "lng": 121.1760,
//         "snippet": "Urban exploring. Heard a faint music box tune coming from an upstairs room. The house was supposedly empty for years.",
//         "fullStory": "My friends and I were into urban exploring for a while, and there was this abandoned house in a subdivision in Antipolo that we'd heard stories about. Supposedly, the family just left everything and moved abroad years ago. We managed to get in one afternoon. It was dusty, cobweb-filled, and eerily silent. Furniture was still there, covered in white sheets, like a time capsule.\n\nAs we were cautiously exploring the ground floor, we suddenly heard it – a very faint, tinkling melody, like a music box. It seemed to be coming from upstairs. We froze, listening. It played for about 30 seconds, then stopped. We were all looking at each other, like, 'Did you hear that?' We slowly made our way upstairs, our hearts pounding. We checked every room. All empty, all dusty. No sign of a music box, or anything that could have made that sound.\n\nWe decided we'd seen enough and got out of there pretty quickly. The thought of that delicate music playing in a house that had been silent and empty for so long was deeply unsettling. Who, or what, was playing it?",
//         authorNickname: 'GhostHunterPH',
//         createdAt: '2023-08-12T16:20:00.000Z'
//     },
//     {
//         "id": "83",
//         "title": "Ang mga 'Hindi Nakikitang' Mangingisda sa Pantabangan Dam",
//         "locationName": "Pantabangan Dam, Nueva Ecija",
//         "lat": 15.8167, "lng": 121.1333,
//         "snippet": "Sabi ng mga local, 'yung lumang bayan na nalubog sa ilalim ng dam, may mga ' residente' pa rin daw na nangingisda 'pag gabi.",
//         "fullStory": "Ang Pantabangan Dam, 'di ba, may lumang bayan na nalubog sa ilalim niyan noong ginawa 'yung dam? May mga kwento 'yung mga local na mangingisda doon na medyo creepy. Sabi nila, minsan daw, 'pag pumapalaot sila sa dam 'pag gabi, lalo na 'pag kabilugan ng buwan at kalmado 'yung tubig, may makikita silang parang mga anino ng bangka sa malayo.\n\nPero 'pag nilapitan nila, wala naman. Or minsan, may maririnig silang parang may kumakanta or nag-uusap, 'yung boses, parang galing sa ilalim ng tubig. Ang pinaka-creepy, may mga nakakakita raw ng parang mga ilaw ng lampara na gumagalaw sa ilalim ng tubig, sa parteng dating kinatatayuan ng lumang bayan. Para raw 'yung mga dating residente, 'nangingisda' pa rin or 'naglalakad' sa kanilang lumang tahanan.\n\nSabi ng isang matandang mangingisda, 'wag daw masyadong magtatagal sa gitna ng dam 'pag gabi, baka raw 'isama' ka ng mga 'taga-ilalim.' Parang 'yung mga kaluluwa ng lumang Pantabangan, hindi pa rin tuluyang umalis.",
//         authorNickname: 'BaryoTales',
//         createdAt: '2023-09-30T21:00:30.000Z'
//     },
//     {
//         "id": "84",
//         "title": "Ang Umaakyat na Anino sa Hagdan (Old House in Silay)",
//         "locationName": "Bernardino Jalandoni Museum (Pink House), Silay City, Negros Occidental",
//         "lat": 10.7975, "lng": 122.9763,
//         "snippet": "Nasa baba kami ng grand staircase. Bigla, may nakita kaming anino na paakyat, pero wala namang tao.",
//         "fullStory": "Silay City is famous for its beautiful ancestral houses. We were visiting the Bernardino Jalandoni Museum, also known as the Pink House. It's stunning. We were on the ground floor, near the foot of the magnificent wooden grand staircase. The house wasn't crowded, just a few other visitors milling about.\n\nSuddenly, my sister grabbed my arm and whispered, 'Look!' I looked where she was pointing – at the staircase. We both saw it: a dark, human-shaped shadow, as if cast by someone, slowly ascending the stairs. But there was no one on the stairs. No one walking up, no one who could have cast that shadow. It glided up a few steps and then just... dissolved into the darker shadows of the upper landing.\n\nWe were both speechless for a moment. We looked around to see if anyone else had noticed, but the other visitors seemed oblivious. The air around the staircase felt noticeably colder. We didn't go upstairs immediately after that. The caretakers there are used to such stories, apparently. They say the original owners still 'walk around' their beloved home.",
//         authorNickname: 'CebuanoExplorer',
//         createdAt: '2023-11-05T14:45:00.000Z'
//     },
//     {
//         "id": "85",
//         "title": "Ang Misteryosong Kabaong sa Lumang Sapa (Samar)",
//         "locationName": "A remote creek in a forested area of Samar",
//         "lat": 12.0000, "lng": 125.0000,
//         "snippet": "Nagliligo 'yung mga bata sa sapa. Bigla, may inanod na maliit na kabaong. Pagbukas nila, walang laman. Tapos nawala 'yung kabaong.",
//         "fullStory": "This story comes from a friend whose family is from a very remote village in Samar. May isang grupo raw ng mga bata na naglalaro at naliligo sa isang sapa (creek) na malapit sa gubat. Habang masaya silang nagtatampisaw, may napansin silang inanod na parang kahon. Nung lumapit, nakita nila, maliit na kabaong, parang kabaong ng sanggol or maliit na bata.\n\nSa halip na matakot, na-curious 'yung mga bata. Iniahon nila 'yung kabaong sa pampang. Medyo luma na 'yung itsura. Nagtulungan silang buksan. Pagbukas nila, wala namang laman. Medyo disappointed sila. Iniwan nila 'yung kabaong sa gilid ng sapa at nagpatuloy sa paglalaro. Maya-maya, nung paalis na sila, binalikan nila 'yung kabaong. Wala na. Naglaho na parang bula. Hinanap nila sa paligid, pero 'di na nila nakita.\n\nPag-uwi nila at kinwento sa mga magulang, pinagalitan sila. Sabi ng matatanda, masamang pangitain daw 'yun or baka 'laruan' ng mga engkanto 'yung kabaong. Baka raw may 'sumama' sa kanila pauwi. Buti na lang, wala namang nangyaring masama sa mga bata, pero 'di na sila pinayagang maligo ulit sa sapang 'yun.",
//         authorNickname: 'ProbinsyanoTales',
//         createdAt: '2023-01-31T13:31:31.000Z'
//     },
//     {
//         "id": "86",
//         "title": "The Unseen Watcher in our Baguio Rental Cabin",
//         "locationName": "A rental cabin in a wooded area of Baguio City",
//         "lat": 16.4000, "lng": 120.6000,
//         "snippet": "Felt like someone was constantly watching us, especially at night. Doors would creak open on their own.",
//         "fullStory": "My family rented a cabin in Baguio for a holiday, one of those charming, slightly isolated ones surrounded by pine trees. From the first night, we all felt it – this distinct, unnerving feeling of being watched. It was strongest at night. You'd be sitting in the living room, and you'd just get this prickling sensation on your neck, like someone was standing right behind you, or peering in from the dark windows.\n\nDoors would also creak open slowly on their own, even when there was no draft. The master bedroom door was particularly bad; we'd close it firmly, and a few minutes later, we'd hear it creak open again. My mom, who is a bit sensitive, said she kept seeing fleeting shadows out of the corner of her eye, especially near the old stone fireplace.\n\nIt wasn't anything aggressive, but the constant feeling of an unseen presence made it hard to relax. It felt like the cabin had a permanent, invisible resident who wasn't too keen on sharing their space. We cut our stay short by a day. The relief we felt upon leaving that cabin was immense.",
//         authorNickname: 'BaguioBoy',
//         createdAt: '2022-12-28T20:20:20.000Z'
//     },
//     {
//         "id": "87",
//         "title": "Ang mga Kaluluwa sa Sunken Cemetery ng Camiguin (Pag Gabi)",
//         "locationName": "Sunken Cemetery, Catarman, Camiguin",
//         "lat": 9.2125, "lng": 124.6417,
//         "snippet": "Sumakay kami ng bangka papunta sa cross 'pag gabi. Parang may mga anino sa ilalim ng tubig...",
//         "fullStory": "Kilala 'yung Sunken Cemetery sa Camiguin, 'di ba? Usually, 'pag daytime 'yung punta. Pero may mga boatmen doon na nag-ooffer ng night tour, lalo na 'pag full moon, para daw mas 'atmospheric'. Na-try namin 'to ng mga kaibigan ko. Medyo kinakabahan, pero sige lang.\n\nHabang papunta kami sa malaking cross, 'yung tubig, sobrang itim, pero kitang-kita 'yung reflection ng buwan. Tahimik. Bigla, 'yung isa kong kaibigan, tinuro niya 'yung tubig. 'Guys, tingnan niyo!' Pagtingin namin, parang may mga anino na gumagalaw sa ilalim, malapit sa mga lumang puntod na kita pa 'yung outline. Hindi isda, kasi 'yung korte, parang tao. Marami sila, parang naglalakad or lumalangoy ng dahan-dahan.\n\n'Yung boatman namin, ngumiti lang. Sabi niya, 'Mga dating residente 'yan. Nagpaparamdam lang sila sa mga bisita.' Kinilabutan kami, pero at the same time, parang ang lungkot. Imagine, 'yung sementeryo nila, nasa ilalim na ng dagat. Hindi na kami nagtagal. Pagbalik namin sa pampang, parang ang bigat ng dala naming experience.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2023-10-14T21:30:00.000Z'
//     },
//     {
//         "id": "88",
//         "title": "The Handprint on the Dusty Car Window (Tagaytay Highlands)",
//         "locationName": "A secluded parking lot in Tagaytay Highlands",
//         "lat": 14.1310, "lng": 120.9810,
//         "snippet": "Parked our car for a few hours. When we came back, there was a child's handprint on the dusty rear window. We don't have kids.",
//         "fullStory": "My husband and I were at Tagaytay Highlands for an event. We parked our car in one of the more secluded, unpaved parking areas, a bit far from the main buildings. It was late afternoon. Our car was quite dusty from the drive up. We were gone for about three hours.\n\nWhen we returned to the car, it was already getting dark. As I was about to open my door, I noticed something on the dusty rear windshield. It was a perfect, small handprint – clearly a child's handprint. It was pressed firmly into the dust. The weird thing is, we don't have children. And we hadn't seen any kids playing around that remote parking lot when we arrived or when we left. The car had been locked the whole time.\n\nIt was so distinct and out of place. My husband saw it too and was just as baffled. It wasn't a smudge; you could see the little fingers and palm. We just wiped it off, feeling a bit uneasy. It was like a little ghost had decided to lean on our car while we were away. It's a small thing, but it stuck with us because it was so inexplicable.",
//         authorNickname: 'AteGirlAdventures',
//         createdAt: '2023-02-22T19:22:10.000Z'
//     },
//     {
//         "id": "89",
//         "title": "Ang Tumatawang Engkanto sa Marilog District (Davao)",
//         "locationName": "Marilog District, Davao City (Mountainous Area)",
//         "lat": 7.3500, "lng": 125.3000,
//         "snippet": "Nag-camping kami. Gabi, may narinig kaming tawa, parang bata pero 'di tao. Nanggagaling sa gubat.",
//         "fullStory": "My barkada and I went camping in Marilog District, 'yung bulubunduking part ng Davao. Ang ganda ng lugar, very peaceful. First night namin, nakagawa na kami ng bonfire, nagkukwentuhan. Mga bandang 10 PM, biglang tumahimik 'yung paligid, pati 'yung mga kuliglig.\n\nTapos, may narinig kaming tawa. Hindi tawa ng tao. Parang tawa ng bata, pero may echo at parang 'di natural. Nanggagaling sa direksyon ng gubat, medyo malayo pero malinaw. Nagkatinginan kami. Tumawa ulit, this time, parang mas malapit. Kinilabutan na kami. 'Yung isa naming kasama na local doon, sabi niya, 'Engkanto 'yan. 'Wag niyong papansinin. Mag-ingay lang tayo.'\n\nSinunod namin siya. Nagpatugtog kami ng malakas sa phone, nagkantahan kami, kahit pilit. After mga 15 minutes, nawala 'yung tawa. Pero 'di na kami mapakali. Hindi na kami masyadong nakatulog 'nun. Sabi ng kasama naming local, 'mabait' pa raw 'yun kasi tawa lang. 'Yung iba daw, nagpapakita or nanliligaw. Lesson learned: 'pag nasa gubat, laging magbigay-respeto sa mga 'di nakikita.",
//         authorNickname: 'EngkantoEncounter',
//         createdAt: '2023-05-30T22:30:40.000Z'
//     },
//     {
//         "id": "90",
//         "title": "The Whispering Mannequin (A Department Store in Cubao)",
//         "locationName": "A department store in Cubao, Quezon City",
//         "lat": 14.6195, "lng": 121.0510,
//         "snippet": "Working late, fixing a display. Swear I heard one of the mannequins whisper my name.",
//         "fullStory": "I used to work part-time in a big department store in Cubao, often doing late shifts for inventory or changing displays. One night, I was alone in the women's section, dressing a group of mannequins for a new promotion. It was very late, almost midnight, and the store was dead silent, except for the hum of the AC.\n\nI was adjusting the arm of one mannequin, and I swear, I heard a very soft, breathy whisper right by my ear say my name: 'Anna...' I froze. I even looked at the mannequin's face, half-expecting its painted lips to move. Of course, they didn't. There was absolutely no one else around. The other staff were on a different floor.\n\nI quickly finished what I was doing, my hands shaking a bit, and practically ran to the staff locker room. I told my supervisor the next day, and she laughed, saying the mannequins probably get lonely at night. But other older staff members told me that particular section had always been a bit 'creepy,' with stories of items falling off shelves on their own or shadows moving. I always felt uneasy around those mannequins after that.",
//         authorNickname: 'TheNightShift',
//         createdAt: '2022-10-10T23:58:00.000Z'
//     },
//     {
//         "id": "91",
//         "title": "Ang Itim na Aso sa Sementeryo ng Paete (Laguna)",
//         "locationName": "Paete Cemetery (Old Section), Laguna",
//         "lat": 14.3620, "lng": 121.4820,
//         "snippet": "Dumalaw kami sa puntod. May malaking itim na aso na nakaupo sa tabi, nakatitig. Pag-alis namin, wala na.",
//         "fullStory": "Ang Paete Cemetery, lalo na 'yung lumang parte, medyo may kakatakutan din. Pumunta kami doon para dalawin 'yung lolo ng asawa ko. Habang nagtitirik kami ng kandila at nagdarasal, may napansin kaming malaking itim na aso na nakaupo sa tabi ng katabing puntod. Tahimik lang siya, pero 'yung mga mata niya, parang nakatitig sa amin. Sobrang itim ng balahibo niya, at parang malungkot 'yung itsura.\n\nWalang may-ari na kasama 'yung aso. Akala namin, ligaw lang. Hindi naman siya gumagalaw or tumatahol. Nandoon lang siya, nagmamasid. Medyo na-uncomfortable kami, pero pinagpatuloy lang namin 'yung ginagawa namin. After mga 30 minutes, paalis na kami. Paglingon namin sa pwesto ng aso, wala na siya. Naglaho na parang bula. Walang ingay, walang bakas.\n\nKinwento namin sa caretaker. Sabi niya, 'Ah, 'yung bantay. Minsan nagpapakita 'yan, lalo na 'pag may mga bagong dating or 'pag may bisitang 'di niya gusto.' Hindi raw 'yun ordinaryong aso. Bantay daw 'yun ng mga kaluluwa doon. Nakakakilabot isipin na 'yung asong 'yun, baka hindi talaga aso.",
//         authorNickname: 'LoloKiko',
//         createdAt: '2023-06-16T16:16:16.000Z'
//     },
//     {
//         "id": "92",
//         "title": "The Rocking Chair That Moved on its Own (B&B in Sagada)",
//         "locationName": "An old guesthouse/B&B in Sagada, Mountain Province",
//         "lat": 17.0820, "lng": 120.9030,
//         "snippet": "Common room had an old rocking chair. We saw it rocking by itself when no one was near it.",
//         "fullStory": "Stayed at a very old, charming but rustic guesthouse in Sagada. The common room had a fireplace and several old wooden pieces of furniture, including a very antique-looking rocking chair. One evening, my friends and I were sitting around, talking. The rocking chair was in the corner, completely still. There was no wind, as the windows were closed because it was chilly.\n\nSuddenly, in a lull in our conversation, we all noticed it. The rocking chair started to rock. Gently at first, then a bit more pronouncedly, back and forth, back and forth. No one was anywhere near it. We all just stared, completely silent. It rocked for maybe a full minute, then gradually slowed down and stopped.\n\nOne of my friends, trying to be brave, got up and touched it, as if to check if it was loose or something. It was solid. We asked the innkeeper about it the next day. She just smiled and said, 'Lola Ayya likes to sit there in the evenings. She means no harm.' Apparently, Lola Ayya was the original owner of the house, long deceased. Well, Lola Ayya, you gave us quite the fright!",
//         authorNickname: 'Lakwatsero',
//         createdAt: '2022-12-12T19:30:00.000Z'
//     },
//     {
//         "id": "93",
//         "title": "Ang 'Batingaw' na Tumutunog Mag-isa (Simbahan sa Siquijor)",
//         "locationName": "St. Isidore Labrador Church, Lazi, Siquijor",
//         "lat": 9.1310, "lng": 123.6240,
//         "snippet": "Sikat 'yung lumang kumbento at simbahan. Sabi nila, 'yung kampana raw minsan tumutunog mag-isa, kahit walang tao sa bell tower.",
//         "fullStory": "Ang Lazi Church and Convent sa Siquijor, 'di ba, National Historical Landmark? Sobrang ganda at ang tanda na. At dahil Siquijor 'yan, 'di mawawala 'yung mga kwentong kababalaghan. Isa sa mga narinig ko from a local guide 'yung tungkol sa 'batingaw' or 'yung malaking kampana ng simbahan.\n\nSabi niya, minsan daw, lalo na 'pag gabi or 'pag madaling araw na sobrang tahimik, bigla na lang daw tutunog 'yung kampana. Isang beses lang, or minsan, dalawa o tatlo. Pero 'pag chineck daw nila 'yung bell tower, wala namang tao. Imposible rin daw na hangin lang, kasi sobrang bigat ng kampana. Para raw may 'hindi nakikitang' kamay na nagpapatunog nito.\n\nMay mga naniniwala na baka 'yun daw 'yung mga dating kampanero na 'di pa rin umaalis, or baka 'babala' raw 'yun ng mga engkanto or 'yung mga 'tagabantay' ng isla. 'Yung guide namin, sabi niya, 'pag narinig daw nila 'yun, nagdarasal na lang sila. Parang sign daw 'yun na 'nandiyan lang sila.' Nakakatindig-balahibo, lalo na 'pag na-imagine mo 'yung tunog ng kampana sa gitna ng katahimikan ng gabi.",
//         authorNickname: 'IslanderTales',
//         createdAt: '2023-07-27T00:00:00.000Z'
//     },
//     {
//         "id": "94",
//         "title": "The Child's Laughter in the Halls of Old Sto. Nino Orphanage (Cebu)",
//         "locationName": "Former site of an old orphanage near Basilica del Sto. Niño, Cebu City",
//         "lat": 10.2940, "lng": 123.9020,
//         "snippet": "Heard that the old, now repurposed, orphanage building sometimes echoes with children's laughter at night.",
//         "fullStory": "A friend of mine in Cebu once worked in an office that was located in a building that, decades ago, used to be part of an old orphanage connected to the Sto. Niño Basilica. The building was renovated, but some of the old structure remained. She often had to work late.\n\nShe told me that on several occasions, when she was alone in her section of the office, usually past 8 PM, she would hear the distinct sound of children's laughter. Not just one child, but several, as if they were playing in the hallways. It would be faint at first, then a bit clearer, then it would fade away. She'd check the hallways, but they were always empty and silent. The other offices on their floor would be closed and dark by then.\n\nShe wasn't scared, more melancholic, she said. It felt like the joyful echoes of the children who once lived there were still imprinted on the place. Other long-time employees in the building had similar stories – of hearing children's footsteps, or soft singing. It's a reminder that places hold memories, and sometimes, those memories feel very, very real.",
//         authorNickname: 'CebuanoExplorer',
//         createdAt: '2023-10-20T21:15:00.000Z'
//     },
//     {
//         "id": "95",
//         "title": "Ang mga Aninong Sumasayaw sa Loob ng Bahay Kubo (Rural Tarlac)",
//         "locationName": "A solitary bahay kubo in a field, Tarlac Province",
//         "lat": 15.4800, "lng": 120.5000,
//         "snippet": "Napadaan kami sa isang bahay kubo, walang ilaw. Pero sa bintana, may mga aninong parang nagsasayawan...",
//         "fullStory": "Kuwento 'to ng driver ng van na nasakyan namin pauwi galing Norte. Dumaan kami sa isang part ng Tarlac na puro bukid, gabi na 'yun. May nadaanan kaming isang bahay kubo, medyo malayo sa kalsada, nakatayo mag-isa sa gitna ng bukid. Walang ilaw 'yung bahay kubo, as in, madilim. Pero habang papalapit kami, may napansin kaming lahat sa bintana niya.\n\nParang may mga anino sa loob, gumagalaw, parang nagsasayawan. Maraming anino, iba't-ibang korte. Pero wala kaming marinig na tugtog or ingay. Sobrang weird, kasi 'yung anino, kitang-kita against the faint moonlight, pero 'yung bahay mismo, walang kailaw-ilaw. Para silang shadow puppets, pero walang source ng ilaw sa likod nila.\n\nNagkatinginan kami sa loob ng van. 'Yung driver, binilisan 'yung takbo. Sabi niya, 'Hayaan niyo na sila, baka may 'kasiyahan' 'yung mga hindi natin nakikita.' Hindi na kami nagtanong pa. Pero 'yung imahe ng mga aninong 'yun na nagsasayaw sa dilim, sa isang abandonadong bahay kubo, 'di ko makakalimutan. Sobrang eerie.",
//         authorNickname: 'TitoDriverChronicles',
//         createdAt: '2023-08-04T00:40:00.000Z'
//     }]

// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = { dummyStories };
// }