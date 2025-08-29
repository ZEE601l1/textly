// src/components/FloatingElements/FloatingElements.js
import React from 'react';
import FloatingElement from './FloatingElement';
import { Type, Keyboard, MousePointer, Sparkles, Globe, MessageCircle, Code, Zap, Clock, Mail, MessageSquare, Hash, Bell, BookOpen, Camera, Cloud, Database, Cpu, CreditCard } from 'lucide-react';
import './FloatingElements.css';

const FloatingElements = () => {
  return (
    <div className="floating-elements">
      <FloatingElement className="top-20 left-10" delay={0}>
        <Type size={36} className="text-blue-400" />
      </FloatingElement>
      <FloatingElement className="top-40 right-20" delay={1}>
        <Keyboard size={44} className="text-purple-400" />
      </FloatingElement>
      <FloatingElement className="top-60 left-1/4" delay={2}>
        <MousePointer size={28} className="text-indigo-400" />
      </FloatingElement>
      <FloatingElement className="bottom-40 right-10" delay={0.5}>
        <Sparkles size={32} className="text-pink-400" />
      </FloatingElement>
      <FloatingElement className="bottom-60 left-16" delay={1.5}>
        <Globe size={40} className="text-cyan-400" />
      </FloatingElement>
      <FloatingElement className="top-1/4 right-1/3" delay={1.2}>
        <MessageCircle size={32} className="text-green-400" />
      </FloatingElement>
      <FloatingElement className="bottom-1/3 left-1/3" delay={0.8}>
        <Code size={36} className="text-orange-400" />
      </FloatingElement>
      <FloatingElement className="top-1/3 left-2/3" delay={1.8}>
        <Zap size={32} className="text-yellow-500" />
      </FloatingElement>
      <FloatingElement className="bottom-20 right-1/4" delay={2.2}>
        <Clock size={36} className="text-red-400" />
      </FloatingElement>
      <FloatingElement className="top-1/5 right-1/5" delay={0.3}>
        <Mail size={30} className="text-blue-300" />
      </FloatingElement>
      <FloatingElement className="bottom-1/4 right-2/3" delay={1.7}>
        <MessageSquare size={34} className="text-purple-300" />
      </FloatingElement>
      <FloatingElement className="top-2/3 left-1/5" delay={2.5}>
        <Hash size={28} className="text-indigo-300" />
      </FloatingElement>
      <FloatingElement className="bottom-1/2 right-1/2" delay={0.9}>
        <Bell size={32} className="text-pink-300" />
      </FloatingElement>
      <FloatingElement className="top-1/2 left-3/4" delay={1.4}>
        <BookOpen size={36} className="text-cyan-300" />
      </FloatingElement>
      <FloatingElement className="bottom-1/3 right-3/4" delay={2.8}>
        <Camera size={30} className="text-green-300" />
      </FloatingElement>
      <FloatingElement className="top-3/4 right-1/6" delay={0.6}>
        <Cloud size={34} className="text-orange-300" />
      </FloatingElement>
      <FloatingElement className="bottom-2/5 left-2/5" delay={2.1}>
        <Database size={32} className="text-yellow-400" />
      </FloatingElement>
      <FloatingElement className="top-2/5 right-2/5" delay={1.1}>
        <Cpu size={36} className="text-red-300" />
      </FloatingElement>
      <FloatingElement className="bottom-3/4 left-1/6" delay={2.7}>
        <CreditCard size={30} className="text-blue-300" />
      </FloatingElement>
    </div>
  );
};

export default FloatingElements;