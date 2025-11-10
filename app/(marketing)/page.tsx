"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageSquare, Zap, Brain, Users, Lock, Globe, Layers, GitBranch, Workflow, Bot } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            {/* Floating Gradient Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-yellow-400/30 to-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/20 to-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Header */}
            <header className="relative z-50 container mx-auto px-4 py-6 animate-slideDown">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-x-3 group cursor-pointer">
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#050038] to-[#4B0082] rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FAC70D] via-[#DA0063] to-[#652CB3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative text-white text-2xl font-black z-10">N</span>
                        </div>
                        <span className="font-black text-2xl text-gray-900">
                            Nexus Board
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            className="hidden md:inline-flex hover:bg-gray-100"
                        >
                            Product
                        </Button>
                        <Button
                            variant="ghost"
                            className="hidden md:inline-flex hover:bg-gray-100"
                        >
                            Solutions
                        </Button>
                        <SignInButton mode="modal">
                            <Button
                                size="lg"
                                className="bg-[#4B0082] hover:bg-[#3A0066] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </SignInButton>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative container mx-auto px-4 py-20 md:py-32">
                <div className="text-center max-w-6xl mx-auto">
                    {/* AI Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-blue-100 backdrop-blur-sm rounded-full border border-purple-200 mb-8 shadow-lg animate-slideDown">
                        <div className="relative">
                            <Sparkles className="h-5 w-5 text-purple-600 animate-spin-slow" />
                            <div className="absolute inset-0 bg-purple-600 blur-lg opacity-50 animate-pulse"></div>
                        </div>
                        <span className="text-sm font-bold text-purple-900">Powered by Advanced AI</span>
                        <span className="px-2 py-0.5 bg-purple-600 text-white text-xs font-bold rounded-full">NEW</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] animate-slideUp">
                        <span className="block text-gray-900">
                            Flow from{" "}
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B0082] to-[#DA0063]">
                                    idea
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 to-pink-400 -skew-y-1 -z-10"></div>
                            </span>
                        </span>
                        <span className="block text-gray-900">
                            to outcome in{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D9BF0] to-[#8FD14F]">
                                seconds
                            </span>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '300ms' }}>
                        The AI-powered innovation workspace. Collaborate in real-time with intelligent chat,
                        infinite canvas, and smart tools that understand your workflow.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp" style={{ animationDelay: '500ms' }}>
                        <SignInButton mode="modal">
                            <Button
                                size="lg"
                                className="text-lg px-10 py-7 bg-gradient-to-r from-[#4B0082] via-[#DA0063] to-[#FAC70D] hover:shadow-2xl text-white shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto group relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center">
                                    Start Creating with AI
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FAC70D] via-[#DA0063] to-[#4B0082] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                        </SignInButton>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-10 py-7 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats - UPDATED FOR NEW PROJECT */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fadeIn" style={{ animationDelay: '700ms' }}>
                        <StatCard number="∞" label="Unlimited canvas" />
                        <StatCard number="Real-time" label="Live collaboration" />
                        <StatCard number="AI" label="Smart features" />
                        <StatCard number="Free" label="Start today" />
                    </div>
                </div>
            </section>

            {/* AI Features Highlight */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate-fadeIn">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-purple-200 mb-6 shadow-sm">
                            <Brain className="h-5 w-5 text-purple-600" />
                            <span className="text-sm font-bold text-purple-900">AI-Powered Innovation</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                            Experience the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                AI Workspace
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built-in intelligence that accelerates your team&apos;s creativity and productivity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        <AIFeatureCard
                            icon={<MessageSquare className="h-10 w-10" />}
                            title="Smart Chat System"
                            description="Real-time collaboration with AI-powered chat. Get instant suggestions, brainstorm ideas, and communicate seamlessly with your team."
                            gradient="from-blue-600 to-cyan-600"
                            delay="0ms"
                        />
                        <AIFeatureCard
                            icon={<Brain className="h-10 w-10" />}
                            title="AI Assistant"
                            description="Your intelligent copilot that helps organize ideas, generate content, and automate repetitive tasks instantly."
                            gradient="from-purple-600 to-pink-600"
                            delay="100ms"
                        />
                        <AIFeatureCard
                            icon={<Sparkles className="h-10 w-10" />}
                            title="Smart Suggestions"
                            description="AI analyzes your work and provides contextual recommendations to improve layouts, connections, and workflows."
                            gradient="from-yellow-500 to-orange-600"
                            delay="200ms"
                        />
                        <AIFeatureCard
                            icon={<Zap className="h-10 w-10" />}
                            title="Instant Automation"
                            description="Automate repetitive processes with AI. Create templates, duplicate workflows, and save hours of manual work."
                            gradient="from-green-600 to-teal-600"
                            delay="0ms"
                        />
                        <AIFeatureCard
                            icon={<Workflow className="h-10 w-10" />}
                            title="Smart Workflows"
                            description="AI-powered blueprints that ensure your processes are scalable, repeatable, and efficient across teams."
                            gradient="from-indigo-600 to-blue-600"
                            delay="100ms"
                        />
                        <AIFeatureCard
                            icon={<Bot className="h-10 w-10" />}
                            title="AI Collaborators"
                            description="Virtual team members that can generate insights, create documentation, and assist with project planning."
                            gradient="from-red-600 to-rose-600"
                            delay="200ms"
                        />
                    </div>
                </div>
            </section>

            {/* Chat System Showcase */}
            <section className="relative py-20 md:py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div className="animate-slideRight">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                                <MessageSquare className="h-5 w-5 text-blue-600" />
                                <span className="text-sm font-bold text-blue-900">Real-Time Collaboration</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                                Communicate faster with{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                    integrated chat
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Stay in flow with contextual conversations right on your canvas. No more switching between tools—discuss, decide, and create all in one place.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <FeatureListItem text="Thread-based conversations on any object" />
                                <FeatureListItem text="AI-powered message summaries and insights" />
                                <FeatureListItem text="Real-time presence and typing indicators" />
                                <FeatureListItem text="Rich media sharing and reactions" />
                            </ul>
                            <SignInButton mode="modal">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Try Chat System
                                    <MessageSquare className="ml-2 h-5 w-5" />
                                </Button>
                            </SignInButton>
                        </div>
                        <div className="relative animate-slideLeft">
                            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl border border-blue-200">
                                <div className="bg-white rounded-2xl p-6 space-y-4">
                                    <ChatBubble
                                        avatar="👤"
                                        name="Sarah"
                                        message="Can we add a diagram here?"
                                        time="Just now"
                                        side="left"
                                    />
                                    <ChatBubble
                                        avatar="🤖"
                                        name="AI Assistant"
                                        message="I&apos;ve generated 3 diagram options for you. Would you like to see them?"
                                        time="Just now"
                                        side="left"
                                        isAI
                                    />
                                    <ChatBubble
                                        avatar="👨"
                                        name="You"
                                        message="Yes, show me option 2!"
                                        time="Just now"
                                        side="right"
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traditional Features */}
            <section className="relative py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                            Everything you need to succeed
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Powerful features designed for modern teams
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        <FeatureCard
                            icon={<Users className="h-8 w-8" />}
                            title="Real-Time Sync"
                            description="See changes instantly as they happen with multiplayer collaboration"
                            delay="0ms"
                        />
                        <FeatureCard
                            icon={<Layers className="h-8 w-8" />}
                            title="Infinite Canvas"
                            description="Unlimited space to create, organize, and connect your ideas"
                            delay="100ms"
                        />
                        <FeatureCard
                            icon={<Lock className="h-8 w-8" />}
                            title="Enterprise Security"
                            description="Bank-level encryption and compliance for your sensitive data"
                            delay="200ms"
                        />
                        <FeatureCard
                            icon={<GitBranch className="h-8 w-8" />}
                            title="250+ Integrations"
                            description="Connect with tools your team already uses every day"
                            delay="300ms"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section - UPDATED */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#050038] via-[#4B0082] to-[#8B008B] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoLTZWMTBoNnYyMHptMCAwdjIwaC02VjMwaDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-slideDown">
                            <Sparkles className="h-5 w-5 text-yellow-300" />
                            <span className="text-sm font-bold text-white">Join Our Growing Community</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                            Ready to start collaborating?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-white/90">
                            Be among the first to experience the next generation of visual collaboration
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <SignInButton mode="modal">
                                <Button
                                    size="lg"
                                    className="text-lg px-12 py-7 bg-white text-purple-900 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-bold"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </SignInButton>
                            <div className="text-white/80 text-sm">
                                <p>✓ No credit card required</p>
                                <p>✓ Free to use</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </section>

            {/* Footer */}
            <footer className="relative bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-x-3 group cursor-pointer">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FAC70D] via-[#DA0063] to-[#652CB3] rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <span className="text-white text-2xl font-black">N</span>
                            </div>
                            <div>
                                <span className="font-black text-xl block">Nexus Board</span>
                                <span className="text-sm text-gray-400">AI Innovation Workspace</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Product</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Solutions</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Resources</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Company</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                        <p>© 2025 Nexus Board. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Global Styles */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideRight {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideLeft {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -30px) rotate(5deg); }
                    66% { transform: translate(-20px, 20px) rotate(-5deg); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
                .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
                .animate-slideDown { animation: slideDown 0.6s ease-out forwards; }
                .animate-slideRight { animation: slideRight 0.8s ease-out forwards; }
                .animate-slideLeft { animation: slideLeft 0.8s ease-out forwards; }
                .animate-float { animation: float 8s ease-in-out infinite; }
                .animate-spin-slow { animation: spin-slow 3s linear infinite; }
            `}</style>
        </div>
    );
}

// Stats Card Component - UPDATED
function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-center group cursor-default">
            <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 group-hover:scale-110 transition-transform">
                {number}
            </div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    );
}

// AI Feature Card Component
function AIFeatureCard({
    icon,
    title,
    description,
    gradient,
    delay,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    delay: string;
}) {
    return (
        <div
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fadeIn border border-gray-100 overflow-hidden"
            style={{ animationDelay: delay }}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {icon}
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

// Regular Feature Card
function FeatureCard({
    icon,
    title,
    description,
    delay,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: string;
}) {
    return (
        <div
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeIn"
            style={{ animationDelay: delay }}
        >
            <div className="inline-flex p-3 rounded-xl bg-gray-100 text-gray-900 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

// Feature List Item
function FeatureListItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span className="text-gray-700">{text}</span>
        </li>
    );
}

// Chat Bubble Component
function ChatBubble({
    avatar,
    name,
    message,
    time,
    side,
    isAI = false
}: {
    avatar: string;
    name: string;
    message: string;
    time: string;
    side: 'left' | 'right';
    isAI?: boolean;
}) {
    return (
        <div className={`flex gap-3 ${side === 'right' ? 'flex-row-reverse' : ''}`}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xl shadow-md">
                {avatar}
            </div>
            <div className={`flex-1 ${side === 'right' ? 'items-end' : 'items-start'} flex flex-col`}>
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-gray-900">{name}</span>
                    {isAI && (
                        <span className="px-2 py-0.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full">
                            AI
                        </span>
                    )}
                    <span className="text-xs text-gray-500">{time}</span>
                </div>
                <div className={`px-4 py-3 rounded-2xl max-w-sm ${side === 'right'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : isAI
                        ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-900 border-2 border-purple-200'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>
    );
}

