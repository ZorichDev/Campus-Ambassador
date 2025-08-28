import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, MessageSquare, Bell, Home, User, BarChart3, Settings, Plus, Eye, CheckCircle, Clock, AlertCircle, Download, Share2, Phone, Mail, MapPin, Building, CreditCard } from 'lucide-react';

const CampusAmbassadorPlatform = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [users, setUsers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Welcome to Campus Ambassador Program", content: "Complete your profile to start earning commissions!", date: "2024-08-25", priority: "high" },
    { id: 2, title: "Monthly Training Session", content: "Join us this Friday for sales training at 3 PM", date: "2024-08-24", priority: "medium" }
  ]);

  // Sample data initialization
  useEffect(() => {
    const sampleUsers = [
      {
        id: 1,
        email: 'admin@company.com',
        password: 'admin123',
        role: 'Management',
        name: 'Admin User',
        campus: 'HQ',
        phone: '+234-800-000-0000',
        department: 'Management',
        status: 'active',
        earnings: 0,
        referralCode: 'ADM001'
      },
      {
        id: 2,
        email: 'ambassador@uni.edu',
        password: 'amb123',
        role: 'Ambassador',
        name: 'John Doe',
        campus: 'University of Lagos',
        phone: '+234-801-234-5678',
        department: 'Computer Science',
        status: 'active',
        earnings: 25000,
        referralCode: 'AMB001'
      }
    ];
    
    const sampleLeads = [
      {
        id: 1,
        ambassadorId: 2,
        ambassadorName: 'John Doe',
        customerName: 'Jane Smith',
        contact: '+234-802-345-6789',
        service: 'Web Development Course',
        value: 50000,
        amountPaid: 30000,
        balance: 20000,
        status: 'Converted',
        commission: 2500,
        dateAdded: '2024-08-20'
      }
    ];
    
    setUsers(sampleUsers);
    setLeads(sampleLeads);
  }, []);

  const handleLogin = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      setCurrentView('dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = (userData) => {
    const newUser = {
      ...userData,
      id: users.length + 1,
      status: 'pending',
      earnings: 0,
      referralCode: `AMB${String(users.length + 1).padStart(3, '0')}`
    };
    setUsers([...users, newUser]);
    alert('Registration successful! Awaiting approval.');
    setCurrentView('login');
  };

  const addLead = (leadData) => {
    const commission = calculateCommission(leadData.amountPaid);
    const newLead = {
      ...leadData,
      id: leads.length + 1,
      ambassadorId: currentUser.id,
      ambassadorName: currentUser.name,
      commission,
      dateAdded: new Date().toISOString().split('T')[0],
      status: 'New Lead'
    };
    setLeads([...leads, newLead]);
    
    // Update user earnings
    const updatedUsers = users.map(user => 
      user.id === currentUser.id 
        ? { ...user, earnings: user.earnings + commission }
        : user
    );
    setUsers(updatedUsers);
    setCurrentUser({ ...currentUser, earnings: currentUser.earnings + commission });
  };

  const calculateCommission = (amountPaid) => {
    return Math.floor(amountPaid * 0.05); // 5% commission
  };

  const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Campus Ambassador</h1>
            <p className="text-gray-600">Login to your account</p>
          </div>
          
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleLogin(email, password)}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </div>
          
          <div className="text-center mt-4">
            <button
              onClick={() => setCurrentView('register')}
              className="text-blue-600 hover:underline"
            >
              Don't have an account? Register as Ambassador
            </button>
          </div>
          
          <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
            <p className="font-medium">Demo Accounts:</p>
            <p>Admin: admin@company.com / admin123</p>
            <p>Ambassador: ambassador@uni.edu / amb123</p>
          </div>
        </div>
      </div>
    );
  };

  const RegisterScreen = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      campus: '',
      phone: '',
      department: '',
      homeAddress: '',
      schoolAddress: '',
      bankName: '',
      accountNumber: '',
      accountName: '',
      role: 'Ambassador'
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      handleRegister(formData);
    };

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Register as Ambassador</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Campus/University"
              value={formData.campus}
              onChange={(e) => setFormData({...formData, campus: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              placeholder="Department/Faculty"
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full p-3 border rounded-lg"
              required
            />
            <textarea
              placeholder="Home Address"
              value={formData.homeAddress}
              onChange={(e) => setFormData({...formData, homeAddress: e.target.value})}
              className="w-full p-3 border rounded-lg"
              rows="2"
            />
            <textarea
              placeholder="School Address"
              value={formData.schoolAddress}
              onChange={(e) => setFormData({...formData, schoolAddress: e.target.value})}
              className="w-full p-3 border rounded-lg"
              rows="2"
            />
            <input
              type="text"
              placeholder="Bank Name"
              value={formData.bankName}
              onChange={(e) => setFormData({...formData, bankName: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Account Name"
              value={formData.accountName}
              onChange={(e) => setFormData({...formData, accountName: e.target.value})}
              className="w-full p-3 border rounded-lg"
            />
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          
          <button
            onClick={() => setCurrentView('login')}
            className="w-full mt-4 text-blue-600 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  };

  const Dashboard = () => {
    const userLeads = leads.filter(lead => lead.ambassadorId === currentUser.id);
    const totalCommission = userLeads.reduce((sum, lead) => sum + (lead.commission || 0), 0);
    const convertedLeads = userLeads.filter(lead => lead.status === 'Converted').length;

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <div className="text-sm text-gray-600">
            Code: {currentUser.referralCode}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
            <div className="flex items-center">
              <Users className="w-8 h-8 mr-2" />
              <div>
                <p className="text-sm opacity-80">Total Leads</p>
                <p className="text-2xl font-bold">{userLeads.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 mr-2" />
              <div>
                <p className="text-sm opacity-80">Converted</p>
                <p className="text-2xl font-bold">{convertedLeads}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg col-span-2">
            <div className="flex items-center">
              <DollarSign className="w-8 h-8 mr-2" />
              <div>
                <p className="text-sm opacity-80">Total Earnings</p>
                <p className="text-2xl font-bold">₦{totalCommission.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setCurrentView('addLead')}
            className="bg-blue-600 text-white p-4 rounded-lg flex items-center justify-center hover:bg-blue-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Lead
          </button>
          <button
            onClick={() => setCurrentView('referral')}
            className="bg-green-600 text-white p-4 rounded-lg flex items-center justify-center hover:bg-green-700"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share Link
          </button>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold mb-4">Recent Leads</h3>
          {userLeads.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No leads yet. Add your first lead to start earning!</p>
          ) : (
            <div className="space-y-3">
              {userLeads.slice(0, 3).map(lead => (
                <div key={lead.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{lead.customerName}</p>
                    <p className="text-sm text-gray-600">{lead.service}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₦{lead.commission?.toLocaleString()}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      lead.status === 'Converted' ? 'bg-green-100 text-green-800' :
                      lead.status === 'Consultation' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-blue-600" />
            Announcements
          </h3>
          <div className="space-y-3">
            {announcements.map(announcement => (
              <div key={announcement.id} className="p-3 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="font-medium">{announcement.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const AddLeadForm = () => {
    const [leadData, setLeadData] = useState({
      customerName: '',
      contact: '',
      service: '',
      value: '',
      amountPaid: '',
      balance: '',
      supportAmbassador: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      const processedData = {
        ...leadData,
        value: parseInt(leadData.value),
        amountPaid: parseInt(leadData.amountPaid),
        balance: parseInt(leadData.balance)
      };
      addLead(processedData);
      alert('Lead added successfully!');
      setCurrentView('leads');
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="mr-4 text-blue-600"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold">Add New Lead</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
          <input
            type="text"
            placeholder="Customer Name"
            value={leadData.customerName}
            onChange={(e) => setLeadData({...leadData, customerName: e.target.value})}
            className="w-full p-3 border rounded-lg"
            required
          />
          
          <input
            type="tel"
            placeholder="Customer Contact"
            value={leadData.contact}
            onChange={(e) => setLeadData({...leadData, contact: e.target.value})}
            className="w-full p-3 border rounded-lg"
            required
          />
          
          <select
            value={leadData.service}
            onChange={(e) => setLeadData({...leadData, service: e.target.value})}
            className="w-full p-3 border rounded-lg"
            required
          >
            <option value="">Select Service</option>
            <option value="Web Development Course">Web Development Course</option>
            <option value="Mobile App Course">Mobile App Course</option>
            <option value="Digital Marketing Course">Digital Marketing Course</option>
            <option value="Data Science Course">Data Science Course</option>
            <option value="UI/UX Design Course">UI/UX Design Course</option>
          </select>
          
          <input
            type="number"
            placeholder="Service Value (₦)"
            value={leadData.value}
            onChange={(e) => setLeadData({...leadData, value: e.target.value})}
            className="w-full p-3 border rounded-lg"
            required
          />
          
          <input
            type="number"
            placeholder="Amount Paid (₦)"
            value={leadData.amountPaid}
            onChange={(e) => {
              const paid = parseInt(e.target.value) || 0;
              const total = parseInt(leadData.value) || 0;
              setLeadData({
                ...leadData, 
                amountPaid: e.target.value,
                balance: (total - paid).toString()
              });
            }}
            className="w-full p-3 border rounded-lg"
            required
          />
          
          <input
            type="number"
            placeholder="Balance (₦)"
            value={leadData.balance}
            onChange={(e) => setLeadData({...leadData, balance: e.target.value})}
            className="w-full p-3 border rounded-lg bg-gray-100"
            readOnly
          />
          
          <input
            type="text"
            placeholder="Support Ambassador (Optional)"
            value={leadData.supportAmbassador}
            onChange={(e) => setLeadData({...leadData, supportAmbassador: e.target.value})}
            className="w-full p-3 border rounded-lg"
          />
          
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Estimated Commission:</strong> ₦{(parseInt(leadData.amountPaid) * 0.05 || 0).toLocaleString()}
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Add Lead
          </button>
        </form>
      </div>
    );
  };

  const LeadsView = () => {
    const userLeads = leads.filter(lead => 
      currentUser.role === 'Management' || lead.ambassadorId === currentUser.id
    );

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">My Leads</h2>
          <button
            onClick={() => setCurrentView('addLead')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </button>
        </div>

        <div className="space-y-4">
          {userLeads.map(lead => (
            <div key={lead.id} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg">{lead.customerName}</h3>
                  <p className="text-gray-600">{lead.service}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  lead.status === 'Converted' ? 'bg-green-100 text-green-800' :
                  lead.status === 'Consultation' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {lead.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  {lead.contact}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                  ₦{lead.value?.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Paid: ₦{lead.amountPaid?.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-orange-500" />
                  Balance: ₦{lead.balance?.toLocaleString()}
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t flex justify-between items-center">
                <span className="text-sm text-gray-600">Added: {lead.dateAdded}</span>
                <span className="font-bold text-green-600">Commission: ₦{lead.commission?.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ReferralView = () => {
    const referralLink = `https://company.com/register?ref=${currentUser.referralCode}`;
    
    const copyToClipboard = () => {
      navigator.clipboard.writeText(referralLink);
      alert('Referral link copied to clipboard!');
    };

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Referral Program</h2>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Your Referral Code</h3>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold text-blue-600 mb-2">{currentUser.referralCode}</p>
            <p className="text-sm text-gray-600">Share this code to earn commissions</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Your Referral Link</h3>
          <div className="flex">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 p-3 border rounded-l-lg bg-gray-50"
            />
            <button
              onClick={copyToClipboard}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">How It Works</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5">1</div>
              <p>Share your referral link with potential customers</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5">2</div>
              <p>When they make a purchase, add them as a lead in the system</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5">3</div>
              <p>Earn 5% commission on successful conversions</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProfileView = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({...currentUser});

    const handleSave = () => {
      const updatedUsers = users.map(user => 
        user.id === currentUser.id ? profileData : user
      );
      setUsers(updatedUsers);
      setCurrentUser(profileData);
      setIsEditing(false);
      alert('Profile updated successfully!');
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Profile</h2>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="text-center pb-4 border-b">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <User className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl">{currentUser.name}</h3>
            <p className="text-gray-600">{currentUser.role}</p>
            <span className={`inline-block px-3 py-1 rounded-full text-sm mt-2 ${
              currentUser.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {currentUser.status === 'active' ? 'Active' : 'Pending Approval'}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={profileData.name || ''}
                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                disabled={!isEditing}
                className="w-full p-3 border rounded-lg bg-gray-50 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={profileData.email || ''}
                onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                disabled={!isEditing}
                className="w-full p-3 border rounded-lg bg-gray-50 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Campus/University</label>
              <input
                type="text"
                value={profileData.campus || ''}
                onChange={(e) => setProfileData({...profileData, campus: e.target.value})}
                disabled={!isEditing}
                className="w-full p-3 border rounded-lg bg-gray-50 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={profileData.phone || ''}
                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                disabled={!isEditing}
                className="w-full p-3 border rounded-lg bg-gray-50 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <input
                type="text"
                value={profileData.department || ''}
                onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                disabled={!isEditing}
                className="w-full p-3 border rounded-lg bg-gray-50 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Referral Code</label>
              <div className="flex">
                <input
                  type="text"
                  value={profileData.referralCode || ''}
                  readOnly
                  className="flex-1 p-3 border rounded-l-lg bg-gray-100"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(profileData.referralCode);
                    alert('Referral code copied!');
                  }}
                  className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Performance Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{leads.filter(l => l.ambassadorId === currentUser.id).length}</p>
              <p className="text-sm text-gray-600">Total Leads</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">₦{currentUser.earnings?.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Total Earnings</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ManagementDashboard = () => {
    const totalLeads = leads.length;
    const convertedLeads = leads.filter(lead => lead.status === 'Converted').length;
    const totalRevenue = leads.reduce((sum, lead) => sum + (lead.amountPaid || 0), 0);
    const totalCommissions = leads.reduce((sum, lead) => sum + (lead.commission || 0), 0);
    const pendingUsers = users.filter(user => user.status === 'pending').length;

    const approveUser = (userId) => {
      const updatedUsers = users.map(user => 
        user.id === userId ? { ...user, status: 'active' } : user
      );
      setUsers(updatedUsers);
      alert('User approved successfully!');
    };

    const exportReport = () => {
      const report = {
        summary: {
          totalLeads,
          convertedLeads,
          totalRevenue,
          totalCommissions,
          conversionRate: totalLeads > 0 ? (convertedLeads / totalLeads * 100).toFixed(2) : 0
        },
        leads: leads,
        users: users.filter(user => user.role !== 'Management')
      };
      
      const dataStr = JSON.stringify(report, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      const exportFileDefaultName = `ambassador_report_${new Date().toISOString().split('T')[0]}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    };

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Management Dashboard</h2>
          <button
            onClick={exportReport}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>

        {/* Management Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
            <div className="flex items-center">
              <Users className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Total Ambassadors</p>
                <p className="text-2xl font-bold">{users.filter(u => u.role === 'Ambassador').length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Conversion Rate</p>
                <p className="text-2xl font-bold">{totalLeads > 0 ? (convertedLeads / totalLeads * 100).toFixed(1) : 0}%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
            <div className="flex items-center">
              <DollarSign className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Total Revenue</p>
                <p className="text-2xl font-bold">₦{totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 mr-3" />
              <div>
                <p className="text-sm opacity-80">Pending Approvals</p>
                <p className="text-2xl font-bold">{pendingUsers}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Approvals */}
        {pendingUsers > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
              Pending Approvals ({pendingUsers})
            </h3>
            <div className="space-y-3">
              {users.filter(user => user.status === 'pending').map(user => (
                <div key={user.id} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.campus} - {user.department}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={() => approveUser(user.id)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Approve
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Top Performers</h3>
          <div className="space-y-3">
            {users
              .filter(user => user.role === 'Ambassador' && user.earnings > 0)
              .sort((a, b) => b.earnings - a.earnings)
              .slice(0, 5)
              .map((user, index) => (
                <div key={user.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{user.name}</h4>
                      <p className="text-sm text-gray-600">{user.campus}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">₦{user.earnings.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">
                      {leads.filter(l => l.ambassadorId === user.id).length} leads
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Recent Leads</h3>
          <div className="space-y-3">
            {leads.slice(-5).reverse().map(lead => (
              <div key={lead.id} className="flex justify-between items-center p-3 border-l-4 border-blue-500 bg-blue-50">
                <div>
                  <h4 className="font-medium">{lead.customerName}</h4>
                  <p className="text-sm text-gray-600">by {lead.ambassadorName} - {lead.service}</p>
                  <p className="text-xs text-gray-500">{lead.dateAdded}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">₦{lead.amountPaid?.toLocaleString()}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    lead.status === 'Converted' ? 'bg-green-100 text-green-800' :
                    lead.status === 'Consultation' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ReportsView = () => {
    const userLeads = currentUser.role === 'Management' 
      ? leads 
      : leads.filter(lead => lead.ambassadorId === currentUser.id);
    
    const monthlyData = userLeads.reduce((acc, lead) => {
      const month = new Date(lead.dateAdded).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      if (!acc[month]) {
        acc[month] = { leads: 0, revenue: 0, commission: 0 };
      }
      acc[month].leads += 1;
      acc[month].revenue += lead.amountPaid || 0;
      acc[month].commission += lead.commission || 0;
      return acc;
    }, {});

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <button
            onClick={() => {
              const report = {
                period: new Date().toISOString().split('T')[0],
                user: currentUser.name,
                leads: userLeads,
                summary: {
                  totalLeads: userLeads.length,
                  convertedLeads: userLeads.filter(l => l.status === 'Converted').length,
                  totalCommission: userLeads.reduce((sum, lead) => sum + (lead.commission || 0), 0)
                }
              };
              const dataStr = JSON.stringify(report, null, 2);
              const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
              const linkElement = document.createElement('a');
              linkElement.setAttribute('href', dataUri);
              linkElement.setAttribute('download', `report_${new Date().toISOString().split('T')[0]}.json`);
              linkElement.click();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-bold text-blue-600">{userLeads.length}</h3>
            <p className="text-sm text-gray-600">Total Leads</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-bold text-green-600">
              {userLeads.filter(l => l.status === 'Converted').length}
            </h3>
            <p className="text-sm text-gray-600">Converted</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <h3 className="text-lg font-bold text-purple-600">
              ₦{userLeads.reduce((sum, lead) => sum + (lead.commission || 0), 0).toLocaleString()}
            </h3>
            <p className="text-sm text-gray-600">Total Commission</p>
          </div>
        </div>

        {/* Monthly Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Monthly Performance</h3>
          <div className="space-y-4">
            {Object.entries(monthlyData).map(([month, data]) => (
              <div key={month} className="p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{month}</h4>
                  <span className="text-sm text-gray-600">{data.leads} leads</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Revenue: </span>
                    <span className="font-medium">₦{data.revenue.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Commission: </span>
                    <span className="font-medium text-green-600">₦{data.commission.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Status Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-bold mb-4">Lead Status Distribution</h3>
          <div className="space-y-3">
            {['New Lead', 'Consultation', 'Converted'].map(status => {
              const count = userLeads.filter(l => l.status === status).length;
              const percentage = userLeads.length > 0 ? (count / userLeads.length * 100).toFixed(1) : 0;
              return (
                <div key={status} className="flex items-center justify-between">
                  <span className="text-sm">{status}</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                      <div 
                        className={`h-2 rounded-full ${
                          status === 'Converted' ? 'bg-green-500' :
                          status === 'Consultation' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{count} ({percentage}%)</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const BottomNavigation = () => {
    const navItems = [
      { id: 'dashboard', icon: Home, label: 'Home' },
      { id: 'leads', icon: Users, label: 'Leads' },
      { id: 'reports', icon: BarChart3, label: 'Reports' },
      { id: 'referral', icon: Share2, label: 'Referral' },
      { id: 'profile', icon: User, label: 'Profile' }
    ];

    if (currentUser?.role === 'Management') {
      navItems[0] = { id: 'management', icon: Settings, label: 'Manage' };
    }

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id || 
              (item.id === 'management' && currentView === 'dashboard' && currentUser?.role === 'Management');
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id === 'management' ? 'dashboard' : item.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'login':
        return <LoginScreen />;
      case 'register':
        return <RegisterScreen />;
      case 'dashboard':
        return currentUser?.role === 'Management' ? <ManagementDashboard /> : <Dashboard />;
      case 'addLead':
        return <AddLeadForm />;
      case 'leads':
        return <LeadsView />;
      case 'referral':
        return <ReferralView />;
      case 'profile':
        return <ProfileView />;
      case 'reports':
        return <ReportsView />;
      default:
        return <Dashboard />;
    }
  };

  if (!currentUser) {
    return renderCurrentView();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-3 flex justify-between items-center sticky top-0 z-10">
        <div>
          <h1 className="text-lg font-bold text-gray-800">Campus Ambassador</h1>
          <p className="text-sm text-gray-600">Welcome, {currentUser.name}</p>
        </div>
        <button
          onClick={() => {
            setCurrentUser(null);
            setCurrentView('login');
          }}
          className="text-gray-600 hover:text-gray-800"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4">
        {renderCurrentView()}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default CampusAmbassadorPlatform;