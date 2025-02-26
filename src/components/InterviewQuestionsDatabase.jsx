  import React, { useState } from 'react';
  import { FaSearch, FaTimes, FaFilter, FaChevronDown, FaChevronUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEye, FaEyeSlash, FaHome, FaDatabase, FaQuestionCircle, FaBook, FaUserGraduate, FaAd } from 'react-icons/fa';
  import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
  import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
  import { dummyQuestionsReactJs } from '../Questions/ReactJs';
  import { dummyQuestionsJavaScript } from '../Questions/JavaScript';
import { dummyQuestionsRedux } from '../Questions/ReduxQuestions';
import { dummyQuestionsManagement } from '../Questions/Management';
import { dummyQuestionsGit } from '../Questions/Git';
import { dummyQuestionsHtml } from '../Questions/Html';

  const InterviewQuestionsDatabase = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTechnology, setSelectedTechnology] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [showExample, setShowExample] = useState(false);
    const [activeSection, setActiveSection] = useState('questions');
  
   
  const dummyQuestions = [...dummyQuestionsReactJs,...dummyQuestionsJavaScript,...dummyQuestionsRedux,...dummyQuestionsManagement,...dummyQuestionsGit,...dummyQuestionsHtml];
  
    const filteredQuestions = dummyQuestions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedTechnology === '' || q.technology === selectedTechnology) &&
      (selectedDifficulty === '' || q.difficulty === selectedDifficulty)
    );
  
    const handleQuestionClick = (question) => {
      setSelectedQuestion(question);
      setShowExample(false);
    };
  
    const toggleFilters = () => {
      setIsFiltersVisible(!isFiltersVisible);
    };
  
    const toggleExample = () => {
      setShowExample(!showExample);
    };
  
    const renderContent = () => {
      switch(activeSection) {
        case 'home':
          return (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-indigo-800">Welcome to Resume Guru</h2>
              <p className="text-lg mb-4">Prepare for your tech interviews with our comprehensive database of questions and answers.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Features</h3>
                  <ul className="list-disc list-inside">
                    <li>Extensive question database</li>
                    <li>Filter by technology and difficulty</li>
                    <li>View detailed answers and examples</li>
                    <li>Regular updates with new content</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                  <ol className="list-decimal list-inside">
                    <li>Browse questions by category</li>
                    <li>Use filters to narrow down results</li>
                    <li>Click on a question to view details</li>
                    <li>Study the answer and example code</li>
                  </ol>
                </div>
              </div>
              {/* New Ad Section */}
              <div className="mt-8 bg-yellow-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <FaAd className="mr-2 text-yellow-600" />
                  Upcoming Plans for your better experinace. 
                </h3>
                <p className="text-lg mb-4">In future you can update to our Premium Plan and get access to exclusive content!</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Advanced interview strategies</li>
                  <li>1-on-1 mock interviews with experts</li>
                  <li>Personalized study plans</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>
          );
        case 'questions':
          return (
            <>
              {/* Search and Filter Section */}
              <div className="bg-white p-6 rounded-xl shadow-lg mb-8 transition-all duration-300 ease-in-out transform hover:shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="relative w-full sm:w-2/3">
                    <input
                      type="text"
                      placeholder="Search questions..."
                      className="w-full p-3 pl-10 pr-4 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" />
                  </div>
                  <button 
                    className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    onClick={toggleFilters}
                  >
                    <FaFilter />
                    <span>Filters</span>
                    {isFiltersVisible ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                {isFiltersVisible && (
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 transition-all duration-300 ease-in-out">
                    <select
                      className="p-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 w-full sm:w-1/2"
                      value={selectedTechnology}
                      onChange={(e) => setSelectedTechnology(e.target.value)}
                    >
                      <option value="">All Technologies</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="React.js">React.js</option>
                      <option value="Redux">Redux</option>
                      <option value="HTML">HTML</option>
                      <option value="Git">Git</option>
                      
                      <option value="Management">Management</option>
                    </select>
                    <select
                      className="p-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 w-full sm:w-1/2"
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                      <option value="">All Difficulties</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                )}
              </div>
  
              {/* Questions List */}
              {filteredQuestions.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredQuestions.map((question) => (
                    <div
                      key={question.id}
                      className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => handleQuestionClick(question)}
                    >
                      <h2 className="text-xl font-semibold mb-3 text-indigo-800">{question.question}</h2>
                      <div className="flex flex-wrap justify-between items-center">
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full mb-2 sm:mb-0">{question.technology}</span>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>{question.difficulty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full text-center py-12 bg-white rounded-xl shadow-md">
                  <p className="text-xl text-gray-600">No questions found. Try adjusting your search or filters.</p>
                </div>
              )}
            </>
          );
        default:
          return null;
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8 flex">
        {/* Left Aside */}
        <aside className="hidden lg:block w-64 bg-white rounded-xl shadow-lg mr-8 p-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <button
                  className={`w-full text-left py-2 px-4 rounded-lg flex items-center space-x-2 ${activeSection === 'home' ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveSection('home')}
                >
                  <FaHome />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left py-2 px-4 rounded-lg flex items-center space-x-2 ${activeSection === 'questions' ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveSection('questions')}
                >
                  <FaDatabase />
                  <span>Questions</span>
                </button>
              </li>
              {/* <li>
                <button className="w-full text-left py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-100">
                  <FaQuestionCircle />
                  <span>FAQ</span>
                </button>
              </li>
              <li>
                <button className="w-full text-left py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-100">
                  <FaBook />
                  <span>Resources</span>
                </button>
              </li>
              <li>
                <button className="w-full text-left py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-100">
                  <FaUserGraduate />
                  <span>My Progress</span>
                </button>
              </li> */}
            </ul>
          </nav>
        </aside>
  
        {/* Main Content */}
        <div className="flex-grow">
          <div className="max-w-6xl mx-auto w-full flex-grow">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-indigo-800 tracking-tight">Interview Questions Database</h1>
            
            {renderContent()}
  
            {/* Question Details Modal */}
            {selectedQuestion && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                  <h2 className="text-2xl font-bold mb-4 text-indigo-800">{selectedQuestion.question}</h2>
                  <p className="mb-6 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedQuestion.answer }} />
                  {selectedQuestion.example && (
                    <div className="mb-6">
                      <button
                        className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                        onClick={toggleExample}
                      >
                        {showExample ? <FaEyeSlash /> : <FaEye />}
                        <span>{showExample ? 'Hide Example' : 'View Example'}</span>
                      </button>
                      {showExample && (
                        <div className="mt-4">
                          <SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers>
                            {selectedQuestion.codeSnippet}
                          </SyntaxHighlighter>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-6">
                    <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">{selectedQuestion.technology}</span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      selectedQuestion.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      selectedQuestion.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>{selectedQuestion.difficulty}</span>
                  </div>
                  <button
                    className="fixed top-4 right-4 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300 focus:outline-none transition-colors duration-300"
                    onClick={() => {
                      setSelectedQuestion(null);
                      setSearchQuery('');
                    }}>
                    <FaTimes />
                  </button>

                  <button
                    className="absolute top-4 right-4 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300 focus:outline-none transition-colors duration-300"
                    onClick={() => {
                      setSelectedQuestion(null);
                    }}>
                    <FaTimes />
                  </button>
                </div>
              </div>
            )}
          </div>
  
          {/* Footer */}
          <footer className="bg-indigo-800 text-white mt-12 py-8 rounded-t-xl shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold">Resume Guru
                  </h2>
                  <p className="mt-2 text-indigo-200">Your resource for tech interview preparation</p>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    <a href="mailto:resumeguru.online@gmail.com" className="hover:text-indigo-200 transition-colors duration-300">resumeguru.online@gmail.com</a>
                  </div>
                  {/* <div className="flex items-center">
                    <FaPhone className="mr-2" />
                    <a href="tel:+1234567890" className="hover:text-indigo-200 transition-colors duration-300">+1 (234) 567-890</a>
                  </div> */}
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Noida,India</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-indigo-700 text-center">
                <p>&copy; 2024 Resume Guru. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  };
  
  export default InterviewQuestionsDatabase;
  
