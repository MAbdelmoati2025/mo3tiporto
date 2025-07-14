import { useState, useEffect } from "react";
import { Send, Mail, User, MessageCircle, ExternalLink } from "lucide-react";

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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-mono">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-700">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">contgact.ts</h1>
          <button 
            onClick={() => setPage("home")}
            className="flex items-center space-x-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Go to Page</span>
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {/* Form Header */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-700">
            <h2 className="text-lg font-semibold text-cyan-400">Contact Form</h2>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-4">
            {/* Name */}
            <div className="flex items-center space-x-4">
              <User className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="flex-1 bg-slate-700 border border-slate-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="flex-1 bg-slate-700 border border-slate-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Subject */}
            <div className="flex items-center space-x-4">
              <MessageCircle className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="flex-1 bg-slate-700 border border-slate-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Message */}
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-5 h-5 text-slate-400 mt-2" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
                className="flex-1 bg-slate-700 border border-slate-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 px-6 py-2 rounded transition-colors"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;