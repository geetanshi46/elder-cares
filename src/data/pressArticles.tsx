import clippingDeccanHerald2018 from "@/assets/new&events/deccan-herald-600x856.jpg.jpeg";
import clippingHinduHomeless from "@/assets/new&events/25000-homeless.jpg.jpeg";
import clippingTimesOfIndia2025 from "@/assets/new&events/IMG-20250801-WA0012.jpg.jpeg";
import clippingDeccanHerald2024 from "@/assets/new&events/IMG-20250829-WA0005.jpg.jpeg";
import clippingHinduJobs60 from "@/assets/new&events/all-work-no-rest-800x1058.jpg.jpeg";
import clippingEconomicTimesCSR from "@/assets/new&events/how-to-make-sure-city-is-elder-friendly.jpg.jpeg";
import clippingTimesOfIndia247 from "@/assets/new&events/preview-67.1-330x1170-330x1170.png";
import clippingIndianExpressWEAAD from "@/assets/new&events/weaad-2022-the-new-indian-express-1264x1752.jpg.jpeg";

export interface PressArticle {
  slug: string;
  title: string;
  publication: string;
  byline?: string;
  date: string;
  summary: string;
  content: string;
  image?: string;
  category?: string;
}

export interface PressClipping {
  id: string;
  image: string;
  title: string;
  publication: string;
  date: string;
  category: "Helplines & Abuse" | "Dementia Care" | "Senior Livelihood" | "Destitute Care" | "Advocacy & CSR";
  summary: string;
  relatedSlug?: string;
}

export const pressArticles: PressArticle[] = [
  {
    slug: "bengaluru-more-aware-of-elders-helpline",
    title: "Bengaluru more aware of elders’ helpline",
    publication: "Deccan Herald",
    byline: "DHNS",
    date: "15 June 2018",
    image: clippingDeccanHerald2018,
    category: "Helplines & Abuse",
    summary:
      "Senior citizens and members of the Nightingales Medical Trust took part in a roadshow at Shivajinagar bus stand to mark World Elder Abuse Awareness Day.",
    content: `
Bengaluru more aware of elders’ helpline

Senior citizens and members of the Nightingales Medical Trust break out into a dance during a roadshow at the Shivajinagar bus stand to mark World Elder Abuse Awareness Day on Friday.

Since its inception in 2002 till May 2018, the elders' helpline 1090 has received 1,80,415 calls, as Bengaluru is found to be the city with greater awareness about the helpline.

S Premkumar Raja, co-founder, Nightingales Medical Trust (NMT), said the helpline received at least 60 calls a day and received 9,202 complaints. While 2,075 cases were closed, solutions have been provided to 4,817 cases.

He said there were also 312 cases of missing elders and 12 complaints against the elderly care organisations.

NMT had joined hands with the Bengaluru traffic police to organise a road show on World Elder Abuse Awareness Day on Friday.

Speaking on the occasion, retired high court judge and chairperson of the Karnataka State Human Rights Commission Justice D H Waghela said it is the responsibility of the entire society to take care of senior citizens.

Extending his support to the cause, Justice Waghela said more efforts should be made to spread awareness to stop elders' abuse in all districts.

Besides families, complaints of elderly persons being cheated by private agencies and individuals also reach the helpline, Premkumar said.

Releasing its 2018 report on the abuse of the elderly, Helpage India said Mangaluru has emerged as the city with the most number of abuse cases in the country.

In most such cases, it was the sons who abused the elderly parents. The survey of 5,015 elders, conducted in 23 cities, puts Mangaluru on top, with 47% abuse cases.
`,
  },

  {
    slug: "dementia-patients-will-get-free-drugs-diagnostic-facilities",
    title: "Dementia patients will get free drugs, diagnostic facilities: Nadda",
    publication: "The New Indian Express",
    byline: "Express News Service",
    date: "15 September 2018",
    summary:
      "Union Health Minister Jagat Prakash Nadda announced plans for free drugs and diagnostic facilities for dementia patients.",
    content: `
Dementia patients will get free drugs, diagnostic facilities: Jagat Prakash Nadda

BENGALURU: Union Health Minister Jagat Prakash Nadda said that free drugs and diagnostic facilities will be provided for dementia patients under a free drugs programme of the Centre.

He was speaking at the International Symposium on Dementia in Bengaluru on Friday.

There were over 44 lakh people with dementia in 2015 and the number is expected to double by 2030. Only 10 per cent of the cases are diagnosed according to the Alzheimer’s and Related Disorders Society of India (ARDSI).

He said 1.5 lakh sub centres in India that will be converted into health and wellness centres, as announced in the budget, will soon provide geriatric care that till now provided only mother and child care.

“By 2022, all health and wellness centres will provide universal screening for individuals under 30 years of age for hypertension, tuberculosis, diabetes, cervical cancer, breast cancer, leprosy, and this will also include geriatric care and thereby dementia,” said Nadda.

In March, the cabinet approved an allocation for the National Health Mission and said that it would have a special focus with intensification of initiatives such as National Health Mission Free Drugs and Diagnostic Services Initiatives.

ARDSI submitted a Dementia India Strategy Report to Nadda.

The National Dementia Strategy plan is an initial step to bring transformation in ensuring comprehensive dementia services. This outlines the government’s plan to commit resources that are necessary to address the problems of dementia.

There are seven core areas to set out as national priorities in the national strategy:

1. Make dementia a national health and social care priority.
2. Dementia awareness and dementia-friendly communities.
3. Risk reduction and dementia prevention.
4. Improve access to best medical care and strengthen standard treatment protocols.
5. Social support services.
6. Research and development.
7. Strengthen dementia disease surveillance system.

“I assure on behalf of the Ministry of Health and Family Welfare will very soon come out with an Action Plan for Dementia based on the country’s strategy developed by ARDSI and NIMHANS, and also assimilate the same in our ministry’s policies and programmes,” Nadda said.
`,
  },

  {
    slug: "prakash-raj-and-his-mothers-memory-loss",
    title: "Prakash Raj and his mother’s memory loss",
    publication: "The New Indian Express",
    byline: "ENS @Bengaluru",
    date: "17 September 2018",
    summary:
      "Actor Prakash Raj participated in a public forum to remove the stigma associated with dementia and promote dementia-friendly behaviour.",
    content: `
Prakash Raj and his mother’s memory loss

Actor Prakash Raj participated in a public forum here on Sunday in an initiative to remove the stigma associated with dementia and promote dementia-friendly behaviour.

Speaking at an International Symposium on Dementia, he promised his support to the cause through his roles in cinema and other forms of media.

He also motivated the 500-odd delegates through his experience in enacting a role of a patient living with dementia.

Nightingales Medical Trust, the organisers of the symposium, is a not-for-profit organisation working for the wellbeing of the elderly.

“I was supposed to do a role of an Alzheimer’s patient in a film a few months back, so I visited Nightingales for a few hours... Something close that happened to me was what happened to my mother. She was not an Alzheimer’s patient but she had a cyst in her brain. Three days after the surgery, she forgot her sister and her son. I shuddered at the thought of my mother forgetting everything. I would get her old school friends to talk to her,” Raj reminisced.

“In trying to reach out to elders, I realised how all of us have some form of dementia because we don’t recognise our parents’ contributions. In this whole process of doing the role I have unlearned what I think I know. This condition should make us more aware of human values and relationships and be thankful of not forgetting things... We should spread more awareness,” he said.

GURU K BALACHANDER

“My guru K Balachander was known for his great films and had a dignified life. He had gone to a function related to a movie in which I had not acted. But instead of talking about the actor, he spoke at length about me and praised me, and people had called him crazy.

When I asked him about this, he said he didn’t know anything about it and that he forgot things,” Raj said.

“He confided in me that he was scared to go to public functions and speak there. I realised how society laughs at them and forgets what they were.

Later, he would call me and write his speech down because he had things to say but was afraid he’d forget them. There were people waiting for him to make mistakes,” he added.

Raj later distributed prizes to winning participants of various contests highlighting innovations in dementia research.
`,
  },

  {
    slug: "city-helpline-for-elders-gets-150-calls-a-day",
    title: "City helpline for elders gets 150 calls a day",
    publication: "Deccan Herald",
    byline: "Nina C George",
    date: "30 October 2018",
    summary:
      "The 1090 helpline receives around 150 calls a day, with harassment, property disputes and financial cheating among the major complaints.",
    content: `
City helpline for elders gets 150 calls a day

Complaints are on the rise; many callers are financially cheated or abused by family.

The helpline for elders (1090) receives about 150 calls a day. The callers are mostly above 55, and seek help for a variety of problems.

The maximum number of complaints, in the last three years, have been about harassment and abuse within the family.

From 188 in 2015-16, complaints have gone up to 233 in 2017-18.

Rakshitha, senior counsellor with the helpline, says, “We get some calls from elders seeking details about various government schemes. But most calls are about harassment by family members, property disputes, and financial cheating.”

Many who call in are in fear and depression. “They need at least three or four counselling sessions to return to a calm state of mind,” she says.

Old age homes are also registering a steady rise in the number of inmates.

Keshav Kumar, the supervisor at Sri Chaithanya Old Age Home in JP Nagar, 5th Phase, says the elderly are often helpless.

“Some aren’t married and so have no family; others are dropped off by children who can’t take care of them,” he told Metrolife.

In many cases, the children are working and have no time, or feel the parents have become difficult to handle.

“We had one case where this man was constantly hungry and had to be fed every five minutes. His family found this a problem and dropped him here with us,” says Keshav.

Many need treatment for depression. “We keep them engaged simultaneously in three or four activities, like dance and yoga and light exercises. We have noticed that their health improves and they become more confident when they become active,” he says.

Where cops step in

Police mostly deal with two complaints: seniors being cheated of their money, and seniors complaining of neglect.

“The cheating cases are be dealt with like any other,” a senior policeman says.

Elders are neglected, or abandoned after they write away their property. Booking criminal cases against sons and daughters-in-law for neglecting aged parents worsens the matter, he says, because then they completely give up on their responsibilities.

“This is where counselling plays a part,” he says.

Rs 25 lakh gone

Vikram, 75, booked a flat after paying Rs 25 lakh in two instalments. After a two-year wait, he discovered he had been cheated and there was no apartment in the first place. He was on the brink of suicide when he was rescued.

Abandoned

Savitri, 75, was abandoned by her younger son after she handed over all her money and jewellery to him. She was found begging. She was later taken home by her elder son.

Bad tenants

Simon, a retired doctor, had rented out a portion of his house. The tenant slowly stopped paying rent and refused to vacate.

He would harass the owner and use abusive language against him almost every day. He contacted the helpline and they came to his rescue.
`,
  },

  {
    slug: "making-our-elderly-smartphone-friendly",
    title: "Making our elderly smartphone-friendly",
    publication: "Deccan Herald (Opinion)",
    byline: "Dr Vijaykumar Harbishettar",
    date: "17 January 2019",
    summary:
      "An opinion piece examining why older adults struggle with smartphones and the importance of simpler, senior-friendly digital experiences.",
    content: `
Making our elderly smartphone-friendly

[ARTICLE CONTENT]

`,
  },

  {
    slug: "destitute-home-for-elderly-women-opened",
    title: "Destitute home for elderly women opened",
    publication: "The New Indian Express",
    byline: "Express News Service",
    date: "21 November 2018",
    image: clippingHinduHomeless,
    category: "Destitute Care",
    summary:
      "Nightingales Medical Trust joined a project to establish Sandhya Suraksha, a destitute home for elderly women.",
    content: `
Destitute home for elderly women opened

More than 200 people gathered at Anepalya on Tuesday for the inauguration of a destitute home dedicated to elderly women, Sandhya Suraksha.

The home is a joint project of the BRC, Methodist Church of India and Nightingales Medical Trust.

Among those in attendance was Justice Santhosh Hegde, Former Solicitor General and Lokayukta.

Sandhya Suraksha, equipped with 70 beds will comprise three sections - elderly women who are in a healthy state, those who need immediate medical attention, and lastly those with cognitive impairment.
`,
  },

  {
    slug: "abuse-of-elders-on-the-rise",
    title: "Abuse of elders on the rise",
    publication: "Deccan Herald",
    byline: "Nina C. George",
    date: "15 March 2020",
    image: clippingTimesOfIndia2025,
    category: "Helplines & Abuse",
    summary:
      "Cases of senior citizens being abused by their children and relatives have increased, with property-related disputes among the major concerns.",
    content: `
Abuse of elders on the rise

They are physically and emotionally harassed by children eyeing their property. Some are taking help from the police and initiating legal action.

Cases of senior citizens being abused by their children and relatives have spiked by about 25 per cent since last year, according to the police.

The abuse could be physical or emotional in nature, says S Premkumar Raja, co-founder, Nightingales Medical Trust, which has launched the Elders’ Helpline (1090) in collaboration with the Bengaluru police.

“Property-related abuses top the list. The rise in numbers could be because real estate prices are high, and children want their parents to make a gift deed of their property to them. They promise to take care of their parents. But once the formalities are completed, they start ill-treating their parents,” Premkumar says.
`,
  },

  {
    slug: "needed-in-karnataka-an-action-plan-to-tackle-dementia",
    title: "Needed in Karnataka: An action plan to tackle dementia",
    publication: "Deccan Herald",
    byline: "Udbhavi Balakrishna",
    date: "22 September 2024",
    image: clippingDeccanHerald2024,
    category: "Dementia Care",
    summary:
      "Task force formed to look into draft action plan for dementia care, risk reduction, and caregiver support across Karnataka.",
    content: `
Needed in Karnataka: An action plan to tackle dementia

Task force formed to look into draft action plan

The number of people with dementia, a neurological condition that affects thinking and remembering, is projected to double in Karnataka by 2036, but the lack of a dedicated state action plan could complicate efforts to tackle it.

According to large-scale estimates of dementia in India published last year, the population in India living with dementia is expected to double to 1.69 crore. In Karnataka, the figure is estimated to rise to 9.41 lakh by 2036 from over 5 lakh people in 2016.

Last September, Health Minister Dinesh Gundu Rao announced the formation of a state action plan to tackle dementia prevalence in Karnataka. A month later, Bengaluru's NIMHANS and Dementia India Alliance (DIA), in collaboration with the state health department, submitted a draft action plan to the government.

The draft focused on how to increase state-wide awareness, screen at-risk populations to prevent or delay onset of dementia, and create dementia-friendly environments.
`,
  },

  {
    slug: "it-is-all-work-and-no-rest-for-these-senior-citizens",
    title: "It's all work and no rest for these senior citizens",
    publication: "The Hindu",
    byline: "Tanu Kulkarni",
    date: "03 January 2019",
    image: clippingHinduJobs60,
    category: "Senior Livelihood",
    summary:
      "A majority of senior citizens seek jobs as administrators and supervisors through Nightingales Jobs 60+, which placed over 2,620 elders.",
    content: `
It's all work and no rest for these senior citizens

A majority of them are seeking jobs as administrators and supervisors

Life after 60 years may be about retirement for some, but not for all. The number of senior citizens seeking jobs to ensure that they are financially independent is on the rise.

Out of 2,622 senior citizens who were placed between 2011 and September 2018 by the Nightingales Medical Trust, a majority were employed in admin departments and as supervisors. Other job roles popular among senior citizens include cashiers and accountants.

The trust, since 2011, runs a programme called the Nightingales Job 60 plus which aims to provide employment to senior citizens so that they have job security.
`,
  },

  {
    slug: "how-to-make-sure-city-is-elder-friendly",
    title: "How to Make Sure City is Elder-friendly: 'Have CSR Initiatives for Elderly'",
    publication: "The Economic Times",
    date: "05 December 2017",
    image: clippingEconomicTimesCSR,
    category: "Advocacy & CSR",
    summary:
      "NMT co-founder S Premkumar Raja discusses key steps to make urban environments inclusive, accessible, and supportive for elderly citizens.",
    content: `
How to Make Sure City is Elder-friendly: 'Have CSR Initiatives for Elderly'

S Premkumar Raja, co-founder, Nightingales Medical Trust, whose trust runs the Elders Helpline along with city police, says: "CSR initiatives for the elderly can play a major role in empowering the elderly to keep pace with the changing environment."

STEPS:
1. Awareness about elder abuse is essential. People should contact the Elders Helpline (toll-free 1090) to report any case of abuse, abandonment, distress or harassment.
2. Publicise Maintenance and Welfare of Parents and Senior Citizens Act, 2007.
3. Help desks for the elderly, specially trained staff, wheelchair accessibility and well-ventilated rooms can make hospitals and public spaces senior-friendly.
`,
  },

  {
    slug: "now-elders-helpline-to-run-24-7",
    title: "Now, Elders' Helpline to run 24/7",
    publication: "The Times of India",
    date: "27 April 2017",
    image: clippingTimesOfIndia247,
    category: "Helplines & Abuse",
    summary:
      "Bengaluru City Police and Nightingales Medical Trust expand the city's 1090 Elders Helpline to operate round the clock.",
    content: `
Now, Elders' Helpline to run 24/7

Bengaluru: Beginning Wednesday, the city's Elders' Helpline (1090) will be operational round the clock.

The decision was prompted by the increasing number of calls and requests from senior citizens to keep the helpline operational 24/7. Sixty-two percent of complaints registered on the helpline between April 2016 and March 2017 were related to family members abusing or cheating the victims.

The helpline, which is into its 15th year of operation, is a joint project of city police and Nightingales Medical Trust. Functional since 2002, it would till now operate between 8am and 8pm.
`,
  },

  {
    slug: "elders-helpline-80-percent-of-calls-are-of-abuse",
    title: "Elders' Helpline: 80% of calls are of abuse",
    publication: "The New Indian Express",
    byline: "Express News Service",
    date: "16 June 2022",
    image: clippingIndianExpressWEAAD,
    category: "Helplines & Abuse",
    summary:
      "Statistics released by NMT and Bengaluru City Police on World Elder Abuse Awareness Day reveal stark numbers on elderly neglect and abuse.",
    content: `
Elders' Helpline: 80% of calls are of abuse

Statistics released by Nightingales Medical Trust, an NGO working for the well-being of the elderly, and Bengaluru City Police show one in five elders has been through some type of abuse.

The Covid-19 lockdowns drastically increased abuse against elders. Releasing statistics for World Elders' Abuse Awareness Day, Dr Radha S Murthy, co-founder and managing trustee of Nightingales Medical Trust, said: "Eighty per cent of the complaints received from senior citizens on the Elders' Helpline are related to abuse."

The day also marked 20 years of Elders' Helpline (1090), set up for elders in distress as a joint project of NMT and Bengaluru City Police. In 20 years, they received over 2,35,541 calls in Bengaluru.
`,
  },
];

export const pressClippings: PressClipping[] = [
  {
    id: "dh-helpline-2018",
    image: clippingDeccanHerald2018,
    title: "City more aware of elders’ helpline",
    publication: "Deccan Herald",
    date: "16 June 2018",
    category: "Helplines & Abuse",
    summary:
      "Senior citizens and NMT volunteers break out into dance during a roadshow at Shivajinagar bus stand to mark World Elder Abuse Awareness Day.",
    relatedSlug: "bengaluru-more-aware-of-elders-helpline",
  },
  {
    id: "hindu-homeless-women-2019",
    image: clippingHinduHomeless,
    title: "Of the 25,000 homeless people in city, around 7,500 are elderly women",
    publication: "The Hindu",
    date: "22 July 2019",
    category: "Destitute Care",
    summary:
      "HelpAge India report highlights destitute elderly; spotlights Sandhya Suraksha, NMT's shelter providing care for homeless older women.",
    relatedSlug: "destitute-home-for-elderly-women-opened",
  },
  {
    id: "toi-abuse-helpline-2025",
    image: clippingTimesOfIndia2025,
    title: "Neglect & abuse: In 3 years, elders' helpline gets 41k calls",
    publication: "The Times of India",
    date: "22 June 2025",
    category: "Helplines & Abuse",
    summary:
      "Helpline 1090 receives over 41,000 distress calls. Includes NMT's essential guidance on how families should treat elderly parents at home.",
    relatedSlug: "abuse-of-elders-on-the-rise",
  },
  {
    id: "dh-dementia-action-plan-2024",
    image: clippingDeccanHerald2024,
    title: "Needed in Karnataka: An action plan to tackle dementia",
    publication: "Deccan Herald",
    date: "22 September 2024",
    category: "Dementia Care",
    summary:
      "State task force formed to formulate Karnataka's draft action plan to tackle dementia, promote risk reduction and community awareness.",
    relatedSlug: "needed-in-karnataka-an-action-plan-to-tackle-dementia",
  },
  {
    id: "hindu-jobs-60-plus-2019",
    image: clippingHinduJobs60,
    title: "It's all work and no rest for these senior citizens",
    publication: "The Hindu",
    date: "03 January 2019",
    category: "Senior Livelihood",
    summary:
      "Special feature on Nightingales Jobs 60+, which placed over 2,620 senior citizens in dignified administrative and supervisory jobs.",
    relatedSlug: "it-is-all-work-and-no-rest-for-these-senior-citizens",
  },
  {
    id: "et-city-elder-friendly-2017",
    image: clippingEconomicTimesCSR,
    title: "How to Make Sure City is Elder-friendly: 'Have CSR Initiatives for Elderly'",
    publication: "The Economic Times",
    date: "05 December 2017",
    category: "Advocacy & CSR",
    summary:
      "NMT co-founder S Premkumar Raja speaks on the critical need for corporate CSR focus on ageing and accessible urban infrastructure for senior citizens.",
    relatedSlug: "how-to-make-sure-city-is-elder-friendly",
  },
  {
    id: "toi-helpline-24-7-2017",
    image: clippingTimesOfIndia247,
    title: "Now, Elders' Helpline to run 24/7",
    publication: "The Times of India",
    date: "27 April 2017",
    category: "Helplines & Abuse",
    summary:
      "Joint initiative of Bengaluru City Police and Nightingales Medical Trust expands the 1090 Elders Helpline to operational round-the-clock service.",
    relatedSlug: "now-elders-helpline-to-run-24-7",
  },
  {
    id: "nie-weaad-abuse-calls-2022",
    image: clippingIndianExpressWEAAD,
    title: "Elders' Helpline: 80% of calls are of abuse",
    publication: "The New Indian Express",
    date: "16 June 2022",
    category: "Helplines & Abuse",
    summary:
      "Commemorating 20 years of Elders Helpline 1090, Dr Radha S Murthy and Bengaluru police officials release post-pandemic elder abuse statistics.",
    relatedSlug: "elders-helpline-80-percent-of-calls-are-of-abuse",
  },
];