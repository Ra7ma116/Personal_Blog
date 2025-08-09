// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import BlogPostsGrid from './components/BlogPostsGrid';
import FilterControls from './components/FilterControls';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const allBlogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Explore the emerging trends in web development including AI integration, WebAssembly, and the evolution of JavaScript frameworks. Learn how these technologies will shape the future of digital experiences.",
    date: "May 15, 2024",
    category: "Technology",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Sustainable Travel: How to Reduce Your Carbon Footprint",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Practical tips for eco-conscious travelers looking to explore the world while minimizing environmental impact. From packing light to choosing green accommodations.",
    date: "May 12, 2024",
    category: "Travel",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "The Art of Sourdough: A Beginner's Guide to Baking",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Master the fundamentals of sourdough bread making with this comprehensive guide. Learn about starter maintenance, fermentation, and achieving the perfect crust.",
    date: "May 10, 2024",
    category: "Food",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Cybersecurity Essentials for Small Businesses",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Protect your business from digital threats with these essential cybersecurity practices. Learn about password management, employee training, and secure backups.",
    date: "May 8, 2024",
    category: "Technology",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Hidden Gems of Portugal: Beyond Lisbon and Porto",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Discover Portugal's lesser-known destinations that offer authentic experiences away from the tourist crowds. From medieval villages to pristine beaches.",
    date: "May 5, 2024",
    category: "Travel",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Plant-Based Protein: Delicious Meat Alternatives",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Explore nutritious and flavorful plant-based protein sources that can easily replace meat in your diet. Recipes and nutritional information included.",
    date: "May 3, 2024",
    category: "Food",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "The Rise of AI in Creative Industries",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "How artificial intelligence is transforming creative fields like design, music, and writing. Ethical considerations and future possibilities.",
    date: "April 30, 2024",
    category: "Technology",
    readTime: "8 min read"
  },
  {
    id: 8,
    title: "Weekend Getaways: 48 Hours in Barcelona",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Maximize a short trip to Barcelona with this carefully curated itinerary covering architecture, food, and local experiences.",
    date: "April 28, 2024",
    category: "Travel",
    readTime: "6 min read"
  },
  {
    id: 9,
    title: "Fermentation 101: Making Your Own Kombucha",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Step-by-step guide to brewing your own kombucha at home. Learn about SCOBY care, flavoring, and troubleshooting common issues.",
    date: "April 25, 2024",
    category: "Food",
    readTime: "12 min read"
  },
  {
    id: 10,
    title: "Remote Work Tools for Distributed Teams",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Essential digital tools that help remote teams collaborate effectively across time zones. Comparison of project management and communication platforms.",
    date: "April 22, 2024",
    category: "Technology",
    readTime: "7 min read"
  },
  {
    id: 11,
    title: "Hiking the Dolomites: A Complete Guide",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Everything you need to know to plan your hiking adventure in Italy's stunning Dolomites mountains. Best trails, seasons, and gear recommendations.",
    date: "April 20, 2024",
    category: "Travel",
    readTime: "10 min read"
  },
  {
    id: 12,
    title: "The Science of Perfect Coffee Brewing",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    description: "Understand the chemistry behind coffee extraction and learn techniques to brew the perfect cup every time. From grind size to water temperature.",
    date: "April 18, 2024",
    category: "Food",
    readTime: "9 min read"
  }
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const postsSectionRef = useRef(null);

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    handlePageChange(1);
  }, [selectedCategory, searchTerm]);

  const categories = ['All', 'Technology', 'Travel', 'Food'];

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <FilterControls
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <BlogPostsGrid
          posts={currentPosts}
          postsSectionRef={postsSectionRef}
        />
        {filteredPosts.length > postsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;