import Image from 'next/image'
import Link from 'next/link'

// Define types for the component
interface FeatureProps {
    icon: React.ReactNode
    title: string
    description: string
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
)

const HomeAbout: React.FC = () => {
    return (
        <section className="bg-black py-24">
            <div className="container">
                {/* About Header */}
                <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-semibold mb-4">
                        ABOUT OUR COMPANY
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Innovative Solutions for<br />Complex Projects
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200">
                            <Image
                                src="/construction-video-thumbnail.jpg" // Replace with your actual image path
                                alt="Construction site video thumbnail"
                                fill
                                className="object-cover"
                            />
                            <button className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                    <span className="sr-only">Play video</span>
                                    {/* Play icon */}
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            <Feature
                                icon={
                                    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                                        {/* Add your modern technology icon SVG path here */}
                                    </svg>
                                }
                                title="Modern Technology"
                                description="Cutting-edge tools and software streamline processes, enabling teams to deliver"
                            />
                            <Feature
                                icon={
                                    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                                        {/* Add your experience engineers icon SVG path here */}
                                    </svg>
                                }
                                title="Experience Engineers"
                                description="Knowledge and practical skills enable them to tackle challenges from start to finish"
                            />
                        </div>

                        {/* CTA Button */}
                        <Link
                            href="/about"
                            className="inline-flex items-center px-6 py-3 bg-yellow-400 rounded-full font-medium hover:bg-yellow-500 transition-colors"
                        >
                            DISCOVER MORE
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                            src="/engineers-working.jpg" // Replace with your actual image path
                            alt="Engineers working on construction site"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout
