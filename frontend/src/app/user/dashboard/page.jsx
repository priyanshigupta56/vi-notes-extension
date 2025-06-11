  "use client";
  import React, { useState } from "react";
import { Bookmark, User, Settings, BookmarkPlus, Clock, Folder, Tag, Search, Home, PlusCircle } from "lucide-react";



// Simple custom components to match the UI without TypeScript
const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const CardTitle = ({ children }) => (
  <h3 className="text-lg font-medium">{children}</h3>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Input = ({ className, ...props }) => (
  <input 
    className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${className}`} 
    {...props} 
  />
);

const Button = ({ children, className, ...props }) => (
  <button 
    className={`px-4 py-2 rounded-md ${className}`} 
    {...props}
  >
    {children}
  </button>
);

const Avatar = ({ src, alt, fallback }) => (
  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200">
    {src ? (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-red-100 text-red-600 font-medium">
        {fallback}
      </div>
    )}
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("recent");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Mock data for recently saved videos
  const recentVideos = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      platform: "YouTube",
      thumbnail: "https://placehold.co/320x180/e2e8f0/475569?text=React+Hooks",
      savedAt: "2 hours ago",
      duration: "5:32",
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      platform: "Vimeo",
      thumbnail: "https://placehold.co/320x180/e2e8f0/475569?text=CSS+Techniques",
      savedAt: "Yesterday",
      duration: "8:15",
    },
    {
      id: 3,
      title: "JavaScript Promises Explained",
      platform: "YouTube",
      thumbnail: "https://placehold.co/320x180/e2e8f0/475569?text=JS+Promises",
      savedAt: "3 days ago",
      duration: "4:20",
    },
    {
      id: 4,
      title: "Tailwind CSS Crash Course",
      platform: "YouTube",
      thumbnail: "https://placehold.co/320x180/e2e8f0/475569?text=Tailwind+CSS",
      savedAt: "5 days ago",
      duration: "10:42",
    }
  ];
  
  // Mock data for collections
  const collections = [
    { id: 1, name: "Web Development", count: 15 },
    { id: 2, name: "JavaScript", count: 8 },
    { id: 3, name: "Design Inspiration", count: 12 },
    { id: 4, name: "CSS Tricks", count: 6 }
  ];
  
  // Mock data for stats
  const stats = [
    { label: "Saved Clips", value: "43", icon: <Bookmark className="text-red-500" /> },
    { label: "Collections", value: "8", icon: <Folder className="text-blue-500" /> },
    { label: "Tags", value: "24", icon: <Tag className="text-green-500" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container mx-auto px-0 py-10">
        <div className="flex min-h-[calc(100vh-200px)]">
          {/* Sidebar */}
          <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-md transition-all duration-300 flex flex-col h-auto`}>
            {/* Header with profile */}
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3 mb-6">
                <Avatar 
                  src="https://placehold.co/100x100/e2e8f0/475569?text=AJ" 
                  alt="User" 
                  fallback="AJ" 
                />
                {sidebarOpen && (
                  <div>
                    <h3 className="font-medium">Alex Johnson</h3>
                    <p className="text-sm text-gray-500">Free Plan</p>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-full flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-600"
              >
                {sidebarOpen ? (
                  <span className="flex items-center"><Folder size={16} className="mr-2" /> Collapse</span>
                ) : (
                  <Folder size={18} />
                )}
              </button>
            </div>
            
            {/* Navigation */}
            <div className="flex-1 overflow-auto p-4">
              <div className="mb-6">
                <p className={`text-xs font-medium text-gray-500 mb-2 ${!sidebarOpen && 'sr-only'}`}>
                  Navigation
                </p>
                <ul className="space-y-1">
                  <li>
                    <button 
                      onClick={() => setActiveTab("recent")}
                      className={`w-full flex items-center p-2 rounded-md ${activeTab === "recent" ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100'}`}
                    >
                      <Clock size={18} />
                      {sidebarOpen && <span className="ml-2">Recent Clips</span>}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab("collections")}
                      className={`w-full flex items-center p-2 rounded-md ${activeTab === "collections" ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100'}`}
                    >
                      <Folder size={18} />
                      {sidebarOpen && <span className="ml-2">Collections</span>}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab("favorites")}
                      className={`w-full flex items-center p-2 rounded-md ${activeTab === "favorites" ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100'}`}
                    >
                      <Bookmark size={18} />
                      {sidebarOpen && <span className="ml-2">Favorites</span>}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setActiveTab("settings")}
                      className={`w-full flex items-center p-2 rounded-md ${activeTab === "settings" ? 'bg-red-50 text-red-600' : 'hover:bg-gray-100'}`}
                    >
                      <Settings size={18} />
                      {sidebarOpen && <span className="ml-2">Settings</span>}
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Collections */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className={`text-xs font-medium text-gray-500 ${!sidebarOpen && 'sr-only'}`}>
                    Collections
                  </p>
                  {sidebarOpen && (
                    <button className="h-5 w-5 text-gray-500 hover:text-red-600">
                      <PlusCircle size={14} />
                    </button>
                  )}
                </div>
                <ul className="space-y-1">
                  {collections.map(collection => (
                    <li key={collection.id}>
                      <button className="w-full flex items-center p-2 rounded-md hover:bg-gray-100">
                        <Folder size={18} className="text-red-500" />
                        {sidebarOpen && (
                          <span className="ml-2 truncate">{collection.name}</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center">
                <BookmarkPlus size={16} className={sidebarOpen ? "mr-2" : ""} />
                {sidebarOpen && <span>New Collection</span>}
              </Button>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow p-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative mb-8">
              <Input
                type="text"
                placeholder="Search your clips..."
                className="py-6 pl-12 pr-4 bg-white rounded-lg shadow"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Tab Content */}
            {activeTab === "recent" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recently Saved</h2>
                  <Button variant="ghost" className="text-red-600 bg-transparent hover:bg-red-50">
                    View All
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recentVideos.map(video => (
                    <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          {video.platform}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium line-clamp-2 mb-1">{video.title}</h3>
                        <p className="text-sm text-gray-500">Saved {video.savedAt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Collections View */}
            {activeTab === "collections" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Your Collections</h2>
                  <Button className="text-red-600 border border-red-600 bg-white hover:bg-red-50 flex items-center">
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    New Collection
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {collections.map(collection => (
                    <Card key={collection.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader>
                        <CardTitle>{collection.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{collection.count} clips</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Favorites View */}
            {activeTab === "favorites" && (
              <div className="text-center py-20">
                <Bookmark className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
                <p className="text-gray-500 mb-6">Bookmark your favorite clips to access them quickly</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Browse Recent Clips
                </Button>
              </div>
            )}
            
            {/* Settings View */}
            {activeTab === "settings" && (
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Profile Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input defaultValue="Alex Johnson" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input defaultValue="alex@example.com" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-medium mb-4">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Email Notifications</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Auto-play Clips</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" checked={true} readOnly className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t flex justify-end">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;