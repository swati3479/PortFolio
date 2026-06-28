import sys
import difflib
import re
import random

def get_response(user_input):
    original_input = user_input.lower().strip()
    clean_input = re.sub(r'[^\w\s]', '', original_input)
    
    intents = [
        {
            "name": "greeting",
            "phrases": ["hi", "hello", "hey", "good morning", "good evening", "howdy", "whats up"],
            "keywords": ["hi", "hello", "hey", "greetings", "sup"],
            "responses": [
                "Hello there! I'm Swati's AI assistant. How can I help you explore her portfolio today?",
                "Hi! I'm here to answer any questions about Swati's experience, projects, or skills."
            ]
        },
        {
            "name": "bio",
            "phrases": ["about yourself", "about swati", "who are you", "tell me about yourself", "who is swati", "your background", "tell me about your background"],
            "keywords": ["swati", "background", "bio", "profile", "journey", "intro"],
            "responses": [
                "Swati is a passionate Computer Science student at IGDTUW specializing in Artificial Intelligence. She has a strong foundation in Web Development, Machine Learning, and Computer Vision.",
                "Swati is an AI enthusiast and software developer currently pursuing her B.Tech at IGDTUW. She loves building intelligent systems and web applications."
            ]
        },
        {
            "name": "projects_general",
            "phrases": ["your projects", "what have you built", "show me your work", "portfolio", "projects you made", "tell me about your projects", "what are your projects"],
            "keywords": ["projects", "portfolio", "work", "built", "made", "developed", "applications", "software", "repo"],
            "responses": [
                "Swati has built several impressive projects including a Movie Recommender System using Python and Streamlit, a Face Recognition Attendance System with OpenCV, an All-in-One Calculator in React, and a Typing Speed Test application.",
                "Some of Swati's notable work includes a Machine Learning Movie Recommender, an automated Face Recognition Attendance tracker, and interactive web apps like a Typing Speed tester. Check out the Projects section!"
            ]
        },
        {
            "name": "project_movie",
            "phrases": ["movie recommender", "recommendation system", "how does the movie", "movie app", "how does the movie recommender work"],
            "keywords": ["movie", "recommender", "recommendation", "movies", "recommend"],
            "responses": [
                "Swati's Movie Recommender System is built with Python, Pandas, and Scikit-learn. It uses content-based filtering (like Cosine Similarity) to suggest movies and provides an interactive UI using Streamlit."
            ]
        },
        {
            "name": "project_face",
            "phrases": ["face recognition", "attendance system", "opencv project", "how does the face", "how does the face recognition system work"],
            "keywords": ["face", "recognition", "attendance", "opencv", "camera", "detect", "vision"],
            "responses": [
                "The Face Recognition Attendance System uses Python and OpenCV. It detects faces in real-time using Haar Cascades, recognizes registered users with LBPH, and logs their attendance automatically into a CSV file. It's a great showcase of her computer vision skills!"
            ]
        },
        {
            "name": "skills_general",
            "phrases": ["your skills", "what can you do", "tech stack", "programming languages", "what is your tech stack"],
            "keywords": ["skills", "tech", "stack", "languages", "frameworks", "react", "python", "c++", "tools"],
            "responses": [
                "Swati's technical toolkit includes Python, C/C++, HTML, CSS, JavaScript, and React. For AI/ML, she uses Pandas, Scikit-learn, and OpenCV. She also deploys apps using Streamlit."
            ]
        },
        {
            "name": "advanced_ml",
            "phrases": ["machine learning", "what algorithms", "ml model", "artificial intelligence", "ai stack", "what ml algorithms do you use"],
            "keywords": ["machine", "learning", "ml", "ai", "algorithm", "model", "scikit", "pandas", "data", "training"],
            "responses": [
                "For her ML projects, Swati primarily uses Pandas for data manipulation and Scikit-learn for building models. Her recommendation engine relies on Cosine Similarity and TF-IDF, while her vision projects use OpenCV's Haar Cascades and LBPH face recognizers."
            ]
        },
        {
            "name": "frontend_web",
            "phrases": ["frontend skills", "web development", "react projects", "what react projects have you built", "what frontend skills do you have"],
            "keywords": ["frontend", "web", "react", "html", "css", "javascript", "ui"],
            "responses": [
                "On the frontend, Swati is proficient in building responsive and interactive user interfaces using React, JavaScript, HTML, and CSS. She has built an All-in-One Calculator and a Typing Speed Test app using these technologies."
            ]
        },
        {
            "name": "education",
            "phrases": ["your education", "where do you study", "which college", "university", "your degree", "what is your degree"],
            "keywords": ["education", "college", "university", "degree", "study", "igdtuw", "school", "btech"],
            "responses": [
                "Swati is currently pursuing her B.Tech in Computer Science and Engineering (Artificial Intelligence) at Indira Gandhi Delhi Technical University for Women (IGDTUW). She is expected to graduate in 2027."
            ]
        },
        {
            "name": "hiring_internship",
            "phrases": ["hire you", "looking for internship", "open to work", "job opportunities", "internship", "are you looking for internships"],
            "keywords": ["hire", "internship", "intern", "job", "opportunity", "recruit", "freelance", "role", "internships"],
            "responses": [
                "Swati is actively seeking internship opportunities in Software Engineering, AI, and Machine Learning! Please reach out to her via email (swati010btcseai24@igdtuw.ac.in) or LinkedIn to discuss potential roles."
            ]
        },
        {
            "name": "contact",
            "phrases": ["contact you", "get in touch", "your email", "linkedin profile", "github link", "reach you", "how can i contact you", "can you share your linkedin profile", "what is your github link"],
            "keywords": ["contact", "email", "linkedin", "message", "reach", "connect", "github"],
            "responses": [
                "You can contact Swati via email at swati010btcseai24@igdtuw.ac.in. She is also active on LinkedIn—check the Contact section for direct links to her profiles!"
            ]
        },
        {
            "name": "future_goals",
            "phrases": ["future goals", "what is next", "career aspirations", "what are your future career goals"],
            "keywords": ["future", "goals", "career", "vision", "aspirations", "dream"],
            "responses": [
                "Swati aspires to become a leading AI Engineer and Software Developer, building intelligent systems that solve real-world problems. She is particularly interested in Deep Learning, Computer Vision, and scalable web architectures."
            ]
        },
        {
            "name": "help_questions",
            "phrases": ["help", "what questions", "what can i ask", "question list", "what can you handle", "what do you know"],
            "keywords": ["help", "questions", "ask", "list", "handle", "options"],
            "responses": [
                "You can ask me things like:\n- Tell me about yourself\n- What projects have you built?\n- How does the Movie Recommender work?\n- What ML algorithms do you use?\n- Are you looking for internships?\n- What is your tech stack?\n- Where do you study?\n- How can I contact you?"
            ]
        }
    ]
    
    # 1. Try exact phrase matching first (highest precision)
    for intent in intents:
        for phrase in intent["phrases"]:
            if re.search(r'\b' + re.escape(phrase) + r'\b', clean_input):
                return random.choice(intent["responses"])
                
    # 2. Fallback to keyword scoring with stop-word filtering
    # Stop words filter out common conversational filler so the core topic shines through
    stop_words = {"tell", "me", "about", "your", "the", "a", "an", "is", "are", "do", "you", "have", "can", "what", "how", "who", "why", "did", "does", "in", "on", "at", "to", "for", "with", "please", "know", "of", "and", "im", "i", "am"}
    user_words = [w for w in clean_input.split() if w not in stop_words]
    
    # If filtering removed everything, revert to original words
    if not user_words:
        user_words = clean_input.split()
        
    best_score = 0
    best_responses = []
    
    for intent in intents:
        score = 0
        for word in user_words:
            if word in intent["keywords"]:
                score += 2
            else:
                matches = difflib.get_close_matches(word, intent["keywords"], n=1, cutoff=0.8)
                if matches:
                    score += 1
        if score > best_score:
            best_score = score
            best_responses = intent["responses"]
            
    if best_score > 0:
        return random.choice(best_responses)
        
    # 3. Default fallback if no match found
    return random.choice([
        "I'm not exactly sure how to answer that. Could you ask about Swati's projects, skills, education, or ML experience?",
        "I don't have information on that specific topic. Try asking me about the tech stack Swati uses, her college, or if she's looking for internships!",
        "Hmm, I didn't quite get that. You can ask me things like 'What are your projects?' or 'What ML algorithms do you use?'"
    ])

if __name__ == "__main__":
    if len(sys.argv) > 1:
        user_msg = " ".join(sys.argv[1:])
        print(get_response(user_msg))
    else:
        print("Hello! How can I help you today?")
