const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend connections
app.use(cors()); 
app.use(express.json()); // Middleware for parsing JSON requests

// Corrected CORS Headers Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins, change * to specific domain if needed
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE"); // Allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Allowed headers
  next();
});

// Define the Question type
const questions = [
  {
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses the correct example of code-switching?",
    "options": [
  "I went to the store, and then I saw my friend.",
  "I went to the store, y luego vi a mi amigo.",
  "I went to the store and I saw a friend.",
  "I went to the store, and then I came back."
],
    "correctAnswer": "I went to the store, y luego vi a mi amigo.",
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates a dialect variation?",
    "options": [
  "She is gonna be there in an hour.",
  "She will be there in an hour.",
  "She is going to be there in an hour.",
  "She'll be there in an hour."
],
    "correctAnswer": "She is gonna be there in an hour.",
    "explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses a non-standard English form?",
    "options": [
  "She ain't going nowhere.",
  "She isn't going anywhere.",
  "She isn’t going nowhere.",
  "She is not going anywhere."
],
    "correctAnswer": "She ain't going nowhere."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses gender-neutral language?",
    "options": [
  "Everyone should bring their own lunch.",
  "Everyone should bring his or her own lunch.",
  "Everyone should bring his lunch.",
  "Everyone should bring her lunch."
],
    "correctAnswer": "Everyone should bring their own lunch."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses professional jargon?",
    "options": [
  "We need to synchronize the data across platforms.",
  "We should make sure the data matches.",
  "Let’s ensure the data is correct.",
  "We should update the system."
],
    "correctAnswer": "We need to synchronize the data across platforms."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To be followed",
    "question": "Which sentence uses an example of code-mixing?",
    "options": [
  "I was walking and luego I found a shop.",
  "I walked and then I found a shop.",
  "I was walking and I found a shop.",
  "I found a shop while walking."
],
    "correctAnswer": "I was walking and luego I found a shop."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates an informal tone?",
    "options": [
  "I’ll give you a call later, if that’s okay.",
  "I would be honored to call you later, if that’s fine.",
  "I’ll call you later.",
  "I will give you a call later if you wish."
],
    "correctAnswer": "I’ll give you a call later, if that’s okay."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses slang?",
    "options": [
  "That party was totally lit!",
  "The party was amazing.",
  "The party was great.",
  "That party was enjoyable."
],
    "correctAnswer": "That party was totally lit!"
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses a formal register?",
    "options": [
  "I would be happy to assist you with that.",
  "Let me help you with that.",
  "I’ll take care of that for you.",
  "I can help with that."
],
    "correctAnswer": "I would be happy to assist you with that."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence is an example of linguistic accommodation?",
    "options": [
  "I can adjust my pace to match yours.",
  "I will speak more slowly.",
  "I cannot change how I speak.",
  "I will keep speaking fast."
],
    "correctAnswer": "I can adjust my pace to match yours."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses a regional accent?",
    "options": [
  "I'm gonna grab some coffee.",
  "I am going to grab some coffee.",
  "I am getting some coffee.",
  "I will grab some coffee."
],
    "correctAnswer": "I'm gonna grab some coffee."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates language shift?",
    "options": [
  "I speak both English and Spanish fluently.",
  "I speak mostly English now.",
  "I speak only Spanish at home.",
  "I speak both languages but prefer English."
],
    "correctAnswer": "I speak mostly English now."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates an example of language prestige?",
    "options": [
  "He speaks in a formal tone to convey authority.",
  "He talks in a casual manner to sound friendly.",
  "He uses slang with his friends.",
  "He uses formal language at work."
],
    "correctAnswer": "He speaks in a formal tone to convey authority."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates language from a specific social class?",
    "options": [
  "I am going to take the bus to the city.",
  "I am taking a taxi to the city.",
  "I will take a taxi to the city.",
  "I will go by bus to the city."
],
    "correctAnswer": "I am taking a taxi to the city."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses an example of diglossia?",
    "options": [
  "He speaks formal Arabic with his elders and informal Arabic with his friends.",
  "He speaks formal Arabic only.",
  "He speaks informal Arabic only.",
  "He speaks one language at home and another at school."
],
    "correctAnswer": "He speaks formal Arabic with his elders and informal Arabic with his friends."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence reflects speech style differences?",
    "options": [
  "She spoke differently to the judge than she did to her friends.",
  "She spoke politely to everyone.",
  "She used the same tone to everyone.",
  "She talked casually to everyone."
],
    "correctAnswer": "She spoke differently to the judge than she did to her friends."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses standard language?",
    "options": [
  "I am going to the store tomorrow.",
  "I’m gonna go to the store tomorrow.",
  "I am going store tomorrow.",
  "I go to the store tomorrow."
],
    "correctAnswer": "I am going to the store tomorrow."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence is an example of linguistic relativity?",
    "options": [
  "The language you speak influences how you perceive the world.",
  "Language is just a tool for communication.",
  "The way we think does not influence how we speak.",
  "Language has no influence on perception."
],
    "correctAnswer": "The language you speak influences how you perceive the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses an example of linguistic prestige?",
    "options": [
  "He prefers to use a dialect that is considered prestigious in his community.",
  "He prefers to use a local dialect.",
  "He speaks with a foreign accent.",
  "He speaks casually at home."
],
    "correctAnswer": "He prefers to use a dialect that is considered prestigious in his community."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates the use of a pidgin language?",
    "options": [
  "We no like work, we want holiday.",
  "We don’t like working, we want a holiday.",
  "We don’t like work, we want a holiday.",
  "I do not like to work, I need a break."
],
    "correctAnswer": "We no like work, we want holiday."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence demonstrates an example of language ideology?",
    "options": [
  "People believe that English is the language of success.",
  "Everyone speaks the same language in the office.",
  "People speak many languages in the city.",
  "Everyone speaks English and Spanish."
],
    "correctAnswer": "People believe that English is the language of success."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence reflects an example of taboo language?",
    "options": [
  "He used profanity in his speech.",
  "He used polite words in his speech.",
  "He avoided swearing in his speech.",
  "He spoke formally in his speech."
],
    "correctAnswer": "He used profanity in his speech."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence reflects the use of politeness strategies?",
    "options": [
  "Could you possibly help me with this task?",
  "I need help with this task.",
  "Help me with this task.",
  "I need assistance."
],
    "correctAnswer": "Could you possibly help me with this task?"
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which sentence uses an example of sociolinguistic variation?",
    "options": [
  "I’ll take the bus to work today.",
  "I’m taking the bus to work today.",
  "I will take the bus to work today.",
  "I’m going to work today."
],
    "correctAnswer": "I’m taking the bus to work today."
,
"explanation":"To follow: wait for new app release/updates"
},
  
  {
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'linguistic anthropology' concerned with?",
    "options": ["The relationship between language and culture in human societies.", "The formal rules and grammar of languages.", "The development of new languages in isolated communities.", "The study of how accents influence communication."],
    "correctAnswer": "The relationship between language and culture in human societies."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'ethnography of communication'?",
    "options": ["A method for studying language use in social and cultural contexts.", "The study of the formal rules of grammar in different languages.", "The analysis of language change over time.", "A way to teach language through cultural immersion."],
    "correctAnswer": "A method for studying language use in social and cultural contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'linguistic profiling' involve?",
    "options": ["Judging a person's social background or identity based on their speech.", "Creating a profile of a language's historical evolution.", "A technique for teaching pronunciation in non-native speakers.", "The process of identifying a regional accent in a foreign language."],
    "correctAnswer": "Judging a person's social background or identity based on their speech."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'lexical variation'?",
    "options": ["Differences in vocabulary usage depending on social class, region, or group.", "The way language structure changes in different regions.", "The introduction of new words through technological advancements.", "The simplification of language to ensure clarity."],
    "correctAnswer": "Differences in vocabulary usage depending on social class, region, or group."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the term 'social network theory' refer to in sociolinguistics?",
    "options": ["The idea that individuals within strong social networks tend to use language more similarly.", "The study of how social media platforms influence language change.", "The formal structure of social hierarchies in language communities.", "The study of how language adapts to social and technological changes."],
    "correctAnswer": "The idea that individuals within strong social networks tend to use language more similarly."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What is 'register' in sociolinguistics?",
    "options": ["A variety of language used for a particular purpose or in a specific social setting.", "A regional variation of language that changes over time.", "The use of formal language in informal settings.", "A way to identify the social class of a speaker."],
    "correctAnswer": "A variety of language used for a particular purpose or in a specific social setting."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'speech community' mean?",
    "options": ["A group of people who share a common language or dialect and use it in similar ways.", "A community that exclusively uses formal language.", "A group of people who do not share any common linguistic features.", "A virtual community where language is used primarily for writing."],
    "correctAnswer": "A group of people who share a common language or dialect and use it in similar ways."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following sentences demonstrates code-switching?",
    "options": ["I can't go to the party, it’s too far away.", "I was talking to my mom in English, then switched to Spanish to speak to my cousin.", "My friend is very good at soccer.", "I studied for the test and aced it."],
    "correctAnswer": "I was talking to my mom in English, then switched to Spanish to speak to my cousin."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can the concept of 'language shift' be identified in a community?",
    "options": ["When people in the community begin to adopt the local dialect more frequently.", "When a community gradually adopts a new language and abandons its native language.", "When a community creates a new dialect.", "When people learn and use a language exclusively for work."],
    "correctAnswer": "When a community gradually adopts a new language and abandons its native language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the term 'linguistic relativity' suggest about the relationship between language and thought?",
    "options": ["Language has no impact on the way we think.", "Different languages reflect different ways of understanding the world.", "Language dictates the thoughts we have about the world.", "Thought is independent of language."],
    "correctAnswer": "Different languages reflect different ways of understanding the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can a community's use of a 'prestige dialect' affect social interactions?",
    "options": ["It may elevate the social status of individuals who use it.", "It creates a barrier for people outside the community.", "It promotes language diversity.", "It is unrelated to social status."],
    "correctAnswer": "It may elevate the social status of individuals who use it."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best illustrates the concept of 'diglossia'?",
    "options": ["A person uses formal language in business meetings and informal language with family.", "A bilingual community speaks both a formal and a colloquial variety of the same language.", "An individual speaks only one language for all occasions.", "A person switches between two languages based on context."],
    "correctAnswer": "A bilingual community speaks both a formal and a colloquial variety of the same language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can linguistic profiling be identified in real-world scenarios?",
    "options": ["An individual is judged based on their accent or dialect, leading to assumptions about their social background.", "People are treated equally, regardless of their speech patterns.", "Everyone is expected to speak in a standardized accent.", "A person is required to speak only in formal language."],
    "correctAnswer": "An individual is judged based on their accent or dialect, leading to assumptions about their social background."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following is an example of a 'creole' language?",
    "options": ["A fully developed language that combines elements from several languages and becomes native to a community.", "A regional variation of a language.", "A language learned by immigrants for communication.", "A dialect with unique vocabulary and grammar."],
    "correctAnswer": "A fully developed language that combines elements from several languages and becomes native to a community."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How does the concept of 'language ideology' influence societal views on language?",
    "options": ["It refers to the belief that some languages or dialects are superior to others.", "It means that everyone must speak in the same dialect.", "It promotes linguistic diversity in all settings.", "It encourages people to adopt a single global language."],
    "correctAnswer": "It refers to the belief that some languages or dialects are superior to others."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following best explains the concept of 'linguistic determinism'?",
    "options": ["The idea that language limits the way people can perceive and think about the world.", "The belief that everyone should speak the same language.", "The development of language based on technological advancements.", "The freedom of individuals to speak any language they choose."],
    "correctAnswer": "The idea that language limits the way people can perceive and think about the world."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best illustrates 'code-mixing'?",
    "options": ["Switching between two different languages within the same conversation or sentence.", "Changing the tone of speech based on social context.", "Switching from formal language to informal language in professional settings.", "Using regional slang in academic writing."],
    "correctAnswer": "Switching between two different languages within the same conversation or sentence."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "In what way does the phenomenon of 'language death' affect a community?",
    "options": ["It results in the complete disappearance of a language from daily use and social functions.", "It leads to the expansion of a community's linguistic repertoire.", "It causes people to adopt formal language practices in informal settings.", "It creates a movement to revive endangered languages."],
    "correctAnswer": "It results in the complete disappearance of a language from daily use and social functions."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can 'ethnography of communication' be applied to sociolinguistics?",
    "options": ["It is a method for studying how people use language in various social contexts and cultural settings.", "It focuses on the grammatical rules of a language.", "It studies the physical sounds and pronunciations in a language.", "It focuses on how language changes over time."],
    "correctAnswer": "It is a method for studying how people use language in various social contexts and cultural settings."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which scenario best demonstrates 'linguistic anthropology' in practice?",
    "options": ["A researcher studying the role of language in shaping cultural identity.", "A linguist analyzing the phonetic structure of a language.", "A sociologist examining language use in formal education.", "A historian documenting the evolution of a dialect."],
    "correctAnswer": "A researcher studying the role of language in shaping cultural identity."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'register' refer to in sociolinguistics?",
    "options": ["A variation of language used for specific purposes or in particular social contexts.", "A type of dialect that is only used in formal settings.", "A method of simplifying language for broader communication.", "A unique accent that people adopt in social interactions."],
    "correctAnswer": "A variation of language used for specific purposes or in particular social contexts."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can the social concept of 'speech community' be identified?",
    "options": ["It refers to a group of people who share a common language and social practices related to language.", "It is a community that speaks multiple languages without a specific linguistic connection.", "It refers to a group of people who speak only formal language.", "It describes a community where dialects are prohibited."],
    "correctAnswer": "It refers to a group of people who share a common language and social practices related to language."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does the study of 'sociolect' focus on?",
    "options": ["The variation in language based on social class, education, or other social factors.", "The way language changes over time in historical contexts.", "The study of language evolution from a regional perspective.", "The use of language in formal settings."],
    "correctAnswer": "The variation in language based on social class, education, or other social factors."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "What does 'linguistic profiling' aim to identify?",
    "options": ["It involves making assumptions about someone’s background based on their accent or speech patterns.", "It refers to how individuals profile their own dialects.", "It is used to track how languages spread across regions.", "It refers to the creation of a universal language to be used in all situations."],
    "correctAnswer": "It involves making assumptions about someone’s background based on their accent or speech patterns."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "Which of the following illustrates the concept of 'lexical variation'?",
    "options": ["The use of different words in different regions to express the same concept.", "The consistent use of formal language in academic writing.", "The standardization of grammar rules across dialects.", "The creation of new words for technological advancements."],
    "correctAnswer": "The use of different words in different regions to express the same concept."
,
"explanation":"To follow: wait for new app release/updates"
},
{
    "major": "English",
    "subject": "sociolinguistics",
    "difficulty": "",
    "bloomstaxonomy": "",
    "ytlink": "To follow",
   "qid": "",
    "question": "How can the 'social network theory' be applied to sociolinguistics?",
    "options": ["It suggests that individuals within a close-knit social network tend to use language similarly.", "It predicts that people will always use standardized language.", "It claims that language change happens randomly within a community.", "It emphasizes that everyone should speak the same dialect."],
    "correctAnswer": "It suggests that individuals within a close-knit social network tend to use language similarly."
,
"explanation":"To follow: wait for new app release/updates"
}

  ];

// Route to fetch questions
app.get("/api/questions", (req, res) => {
  res.json(questions); // Send the list of questions as the response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
