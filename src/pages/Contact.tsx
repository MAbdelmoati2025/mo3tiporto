import { useState, useEffect } from "react";
import { Send, Mail, User, MessageCircle, AlertCircle, CheckCircle } from "lucide-react";

const Contact = ({ setPage }) => {
  useEffect(() => {
    setPage("contact.ts");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [messageLines, setMessageLines] = useState(1);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email format" : "";
      case "subject":
        return value.trim() === "" ? "Subject is required" : "";
      case "message":
        return value.trim() === "" ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Update message lines count
    if (name === "message") {
      const lines = value.split('\n').length;
      setMessageLines(lines);
    }
    
    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    const newTouched = {};
    
    Object.keys(formData).forEach(key => {
      newTouched[key] = true;
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setTouched(newTouched);
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) return;
    
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setMessageLines(1);
      setTouched({});
      setErrors({});
      
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalLines = 13 + messageLines;
  const lineNumbers = Array.from({ length: totalLines }, (_, i) => i + 1);

  const getLineContent = (lineNum) => {
    const lineMap = {
      1: "import { ContactForm } from './components';",
      2: "",
      3: "const ContactPage = () => {",
      4: "  const [formData, setFormData] = useState({",
      5: "    // Form configuration",
      6: "  });",
      7: "",
      8: "  const handleSubmit = async (data) => {",
      9: "    try {",
      10: `      name: "${formData.name}",`,
      11: `      email: "${formData.email}",`,
      12: `      subject: "${formData.subject}",`,
      13: `      message: "${formData.message}",`,
    };
    
    if (lineNum > 13) {
      const messageLineIndex = lineNum - 13;
      const messageContent = formData.message.split('\n')[messageLineIndex - 1];
      return messageContent ? `      // ${messageContent.slice(0, 30)}${messageContent.length > 30 ? '...' : ''}` : '';
    }
    
    return lineMap[lineNum] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-slate-300 text-lg">Let's create something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Code Editor Visualization */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-400 text-sm font-mono">contact.ts</span>
            </div>
            
            <div className="p-4 font-mono text-sm overflow-hidden">
              <div className="flex">
                {/* Line Numbers */}
                <div className="select-none mr-4 text-slate-500">
                  {lineNumbers.map(num => (
                    <div 
                      key={num}
                      className={`text-right pr-2 ${errors.name && touched.name && num === 10 ? 'text-red-400' : 
                        errors.email && touched.email && num === 11 ? 'text-red-400' :
                        errors.subject && touched.subject && num === 12 ? 'text-red-400' :
                        errors.message && touched.message && num === 13 ? 'text-red-400' : ''}`}
                    >
                      {num}
                    </div>
                  ))}
                </div>
                
                {/* Code Content */}
                <div className="flex-1 text-slate-300">
                  {lineNumbers.map(num => (
                    <div key={num} className="whitespace-pre-wrap">
                      {getLineContent(num)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label className="block text-slate-300 mb-2 font-medium">
                  <User className="inline w-4 h-4 mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-slate-700/50 border ${
                    errors.name && touched.name ? 'border-red-500' : 'border-slate-600'
                  } rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200`}
                  placeholder="Your name"
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-slate-300 mb-2 font-medium">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-slate-700/50 border ${
                    errors.email && touched.email ? 'border-red-500' : 'border-slate-600'
                  } rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200`}
                  placeholder="your@email.com"
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="group">
                <label className="block text-slate-300 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-slate-700/50 border ${
                    errors.subject && touched.subject ? 'border-red-500' : 'border-slate-600'
                  } rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200`}
                  placeholder="What's this about?"
                />
                {errors.subject && touched.subject && (
                  <p className="mt-1 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-slate-300 mb-2 font-medium">
                  <MessageCircle className="inline w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`w-full px-4 py-3 bg-slate-700/50 border ${
                    errors.message && touched.message ? 'border-red-500' : 'border-slate-600'
                  } rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && touched.message && (
                  <p className="mt-1 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md mx-4 transform animate-pulse">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;