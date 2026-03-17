import { Mail, MapPin, Phone, Lightbulb, ArrowRight, Star, ChevronDown, BookOpenText,Landmark, Network, Linkedin, Twitter, Github, ExternalLink, Instagram } from 'lucide-react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export default function Home() {

	const currentYear = new Date().getFullYear();

	const infoItems = [
		{ icon: Phone, text: '01744-233208' },
		{ icon: MapPin, text: 'National Institute of Technology, Kurukshetra, Haryana, India, 136119' },
		{ icon: Mail, text: 'iic@nitkkr.ac.in' },
	];

	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'About IIC',
			href: '/iic/about',
			description: "Discover the vision, mission, and the preamble of the Institute's Innovation Council at NIT Kurukshetra.",
		},
		{
			title: 'Council Members',
			href: '/iic/members',
			description: 'Meet the dedicated faculty and student coordinators leading innovation, startups, IPR, and internships.',
		},
		{
			title: 'Activities & Events',
			href: '/iic/activities',
			description: 'Explore upcoming and past workshops, hackathons, MoE-driven initiatives, and self-driven innovation events.',
		},
		{
			title: 'Startup & Incubation',
			href: '/iic/incubation',
			description: 'Resources and mentoring mechanisms to support student entrepreneurs from ideation to pre-incubation.',
		},
		{
			title: 'Innovation Pipeline',
			href: '/iic/projects',
			description: 'A repository showcasing the innovative projects, prototypes, and patents developed by NIT KKR students and faculty.',
		},
		{
			title: 'Reports & Rankings',
			href: '/iic/reports',
			description: 'Access our annual IIC performance reports, star ratings, and details regarding ARIIA and NIRF coordination.',
		},
	];

	const innovationEcosystem: { title: string; href: string; description: string }[] = [
  {
    title: 'Technology Business Incubator (TBI)',
    href: '/ecosystem/tbi',
    description: 'NIT Kurukshetra’s official incubation center providing workspace, seed funding, and mentoring for early-stage startups.',
  },
  {
    title: 'National Innovation & Startup Policy (NISP)',
    href: '/ecosystem/nisp',
    description: 'Framework and guidelines adopted by the institute to actively promote student and faculty entrepreneurship.',
  },
  {
    title: 'YUKTI Innovation Repository',
    href: '/ecosystem/yukti',
    description: 'The official portal for students to submit their ideas, prototypes, and business models to the MoE’s central database.',
  },
  {
    title: 'IPR Cell',
    href: '/ecosystem/ipr',
    description: 'Assistance and guidelines for patent filing, copyright registration, and safeguarding student and faculty innovations.',
  },
  {
    title: 'Entrepreneurship Cell (E-Cell)',
    href: '/ecosystem/ecell',
    description: 'The student-run organization hosting E-Summits, B-Plan competitions, and fostering the campus startup culture.',
  },
  {
    title: 'Siemens Centre of Excellence',
    href: '/ecosystem/coe',
    description: 'Access state-of-the-art labs for rapid prototyping, IoT, and advanced manufacturing available to innovators.',
  },
	];
	
	const programsAndEvents: { title: string; href: string; description: string }[] = [
  {
    title: 'MIC Driven Activities',
    href: '/programs/mic-driven',
    description: 'Mandatory webinars, leadership talks, and initiatives prescribed directly by the MoE’s Innovation Cell.',
  },
  {
    title: 'IIC Calendar Activities',
    href: '/programs/calendar',
    description: 'Quarter-wise workshops, seminars, and field trips planned and executed by the NIT KKR IIC council.',
  },
  {
    title: 'Self-Driven Activities',
    href: '/programs/self-driven',
    description: 'Institute-specific innovation events, including internal hackathons and Techspardha innovation tracks.',
  },
  {
    title: 'Celebration Activities',
    href: '/programs/celebrations',
    description: 'Special events organized on key dates like National Science Day, World Entrepreneurs Day, and Innovation Day.',
  },
  {
    title: 'Hackathons & Ideathons',
    href: '/programs/hackathons',
    description: 'Information and registration links for upcoming campus-wide problem-solving and coding competitions.',
  },
  {
    title: 'My Story Sessions',
    href: '/programs/my-story',
    description: 'Interactive and motivational sessions featuring successful NIT Kurukshetra alumni founders and industry leaders.',
  },
	];
	
	const resourcesAndSupport: { title: string; href: string; description: string }[] = [
  {
    title: 'Mentor Directory',
    href: '/resources/mentors',
    description: 'Connect with our network of alumni, faculty, and industry experts for specialized guidance on your startup journey.',
  },
  {
    title: 'Funding & Grants',
    href: '/resources/funding',
    description: 'Information on MSME schemes, seed money, angel investor networks, and how to apply for campus-level grants.',
  },
  {
    title: 'Startup Policy Document',
    href: '/resources/policy-doc',
    description: 'Download the official, comprehensive NIT Kurukshetra startup and innovation policy for students and faculty.',
  },
  {
    title: 'Prototyping Facilities',
    href: '/resources/facilities',
    description: 'A directory of available hardware labs, 3D printers, and testing equipment across different academic departments.',
  },
  {
    title: 'Innovation Guidelines',
    href: '/resources/guidelines',
    description: 'Step-by-step documentation on how to take your idea from a dorm-room concept to a legally registered company.',
  },
  {
    title: 'IIC Admin Portal',
    href: '/resources/admin-login',
    description: 'Direct secure access for council members to update event reports, upload photos, and manage star rating criteria.',
  },
	];
	
	const events = [
    {
      id: 1,
      title: 'Internal Hackathon for Smart India Hackathon (SIH) 2026',
      date: 'March 25-26, 2026',
      status: 'UPCOMING',
      statusColor: 'bg-orange-600',
      category: 'MIC Driven Activity',
      description: 'Institute-level hackathon to shortlist the top teams for the national-level SIH 2026. Teams must present software or hardware solutions for problem statements provided by various ministries.',
      image: '/sih-poster.jpg' // Replace with your actual image path in public folder
    },
    {
      id: 2,
      title: 'Expert Talk on "Process of Innovation Development"',
      date: 'Feb 14&15, 2026',
      status: 'COMPLETED',
      statusColor: 'bg-slate-700',
      category: 'IIC Calendar Activity',
      description: 'A formal session by industry experts focusing on Technology Readiness Levels (TRL) and commercialization of lab prototypes into market-ready products.',
      image: 'talk.png'
    },
    {
      id: 3,
      title: 'Sonipat Startup Summit 4.0 Visit at AIC - IIIT Delhi',
      date: 'February 12, 2026',
      status: 'COMPLETED',
      statusColor: 'bg-slate-700',
      category: 'Celebration Activity',
      description: 'Exhibition of working models and prototypes developed by B.Tech and M.Tech students. Evaluated by the Director and senior faculty members of NIT Kurukshetra.',
      image: '/summit.jpg'
    }
  ];

	return (
		<div id='main'>
			<div className='bg-white p-4 px-12 flex justify-between items-center text-sm flex-wrap gap-8 border-b-0 border-gray-200'>
				{/* Left side: Logo */}
				<div className='flex items-center gap-8 w-auto m-auto'>
					<img src='iic-logo.jpg' alt='IIC NIT Kurukshtra Logo' className='w-[250px] h-auto' />
					<div>
						<h1 className='text-xl font-bold'>IIC NIT Kurukshetra</h1>
						<h2 className='text-sm'>National Institute of Technology Kurukshetr</h2>
						<p className='text-xs text-gray-600'>An Institution of National Importance | Under Ministry of Education, Govt. of India | NIRF Ranked</p>
					</div>
				</div>

				{/* Right side: Information */}
				<div className='flex items-center gap-8 m-auto'>
					{infoItems.map((item, index) => (
						<div key={index} className='flex items-center gap-2'>
							<item.icon size={16} className='text-gray-600' />
							<span className='text-gray-800 font-medium'>{item.text}</span>
						</div>
					))}
				</div>
			</div>
			
			<div id="nav" className='border-b-2 border-t-2 border-gray-200 '>
			<NavigationMenu >
				<NavigationMenuList className='px-12 py-2 flex gap-8'>

					<NavigationMenuItem className='hidden md:flex'>
						<NavigationMenuTrigger>About IIC</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] gap-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								{components.map(component => (
									<ListItem key={component.title} title={component.title} href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					
					<NavigationMenuItem className='hidden md:flex'>
						<NavigationMenuTrigger>Innovation Ecosystem</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] gap-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								{innovationEcosystem.map(component => (
									<ListItem key={component.title} title={component.title} href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>


					<NavigationMenuItem className='hidden md:flex'>
						<NavigationMenuTrigger>Programs and Events</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] gap-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								{programsAndEvents.map(component => (
									<ListItem key={component.title} title={component.title} href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
						</NavigationMenuItem>
						
						<NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/members">Memebers</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

					<NavigationMenuItem className='hidden md:flex'>
						<NavigationMenuTrigger>Resources and Support</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] gap-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								{resourcesAndSupport.map(component => (
									<ListItem key={component.title} title={component.title} href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
						</NavigationMenuItem>
						
						<NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Documentation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


				</NavigationMenuList>
				</NavigationMenu></div>
			
<section className="relative w-full h-[50vh] md:h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* The Panoramic Image 
        Replace '/panoramic-hall.jpg' with your actual image path in the public folder 
      */}
      <img 
        src="/senate.jpg" 
        alt="IIC NIT Kurukshetra Lecture Hall" 
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        style={{ animationDuration: '20s' }} // Optional: subtle slow zoom effect
      />
      
      {/* The Dark Overlay 
        Using a gradient makes it look premium. Darker at the edges, slightly transparent in the center.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Text Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12">
        
        {/* Formal Overline */}
        <span className="text-blue-400 font-bold tracking-[0.25em] uppercase text-xs md:text-sm mb-5 block drop-shadow-md">
          Ministry of Education Initiative
        </span>
        
        {/* Main Title with Formal Typography */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
          Institution&apos;s Innovation Council 
        </h1>
        
        {/* Subtitle / Institute Name */}
        <p className="text-lg md:text-2xl text-slate-200 font-medium max-w-3xl drop-shadow-lg tracking-wide">
          National Institute of Technology Kurukshetra
        </p>

      </div>
    </section>

			
		<section className="w-full bg-white py-16 px-6 md:px-12 border-b-2 border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Formal Section Header */}
        <div className="mb-12 border-b-2 border-slate-200 pb-6">
          <span className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 block">
            The National Mandate
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">
            Institution&apos;s Innovation Council (IIC)
          </h2>
          {/* Flat, solid accent line */}
          <div className="w-32 h-1.5 bg-blue-900 mt-6"></div>
        </div>

        {/* Two-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: The MoE & MIC Context */}
          <div className="space-y-10">
            
            {/* Bureaucratic Block Quote Style (Left Border) */}
            <div className="pl-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">
                MoE&apos;s Innovation Cell (MIC)
              </h3>
              <p className="text-slate-800 leading-relaxed text-justify">
                The Ministry of Education (MoE), Govt. of India, has established the &apos;MoE&apos;s Innovation Cell (MIC)&apos;. The primary mandate of MIC is to encourage, inspire, and nurture young students by supporting them to work with new ideas and transform those ideas into viable prototypes during their formative years.
              </p>
            </div>

            <div className="pl-6 border-l-4 border-blue-900">
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">
                The National Network
              </h3>
              <p className="text-slate-800 leading-relaxed text-justify">
                MIC systematically fosters the culture of innovation across Higher Education Institutions (HEIs) by establishing individual Institution&apos;s Innovation Councils. This vast network is designed to promote innovation through multitudinous modes, leading to a robust, nationwide entrepreneurial promotion ecosystem.
              </p>
            </div>
          </div>

          {/* Right Column: The NIT KKR Specifics */}
          <div className="bg-slate-100 border-2 border-slate-300 p-0">
            {/* Official Notice Header Style */}
            <div className="bg-blue-900 text-white px-6 py-4 border-b-2 border-slate-300">
              <h3 className="text-xl font-bold uppercase tracking-wide">
                IIC at NIT Kurukshetra
              </h3>
            </div>
            
            <div className="p-8">
              <p className="text-slate-800 leading-relaxed text-justify mb-6">
                National Institute of Technology Kurukshetra is a proud institutional member of the MoE&apos;s Innovation Cell. The <strong>IIC NIT KKR</strong> acts as the central hub for streamlining and strengthening the startup ecosystem on our campus.
              </p>
              
              <p className="text-slate-800 leading-relaxed text-justify">
                We bridge the gap between academic research and commercialization. By fostering critical thinking, design-oriented problem solving, and an entrepreneurial mindset, we equip NIT Kurukshetra&apos;s brilliant engineering minds with the skill sets required to build the deep-tech startups of tomorrow.
              </p>
            </div>
          </div>

        </div>
      </div>
			</section>	
			
			<section className="w-full bg-slate-50 py-16 px-6 md:px-12 border-b-2 border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Formal Section Header */}
        <div className="mb-10 border-b-4 border-blue-900 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-2 block">
              Official Record
            </span>
            <h2 className="text-3xl font-bold text-slate-900 uppercase">
              Events & Activities
            </h2>
          </div>
          <a 
            href="#" 
            className="text-sm font-bold text-blue-900 uppercase tracking-widest hover:underline underline-offset-4"
          >
            View Event Archives →
          </a>
        </div>

        {/* Structured Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white border-2 border-slate-300 flex flex-col"
            >
              {/* Event Poster/Image Container */}
              <div className="relative h-56 bg-slate-200 border-b-2 border-slate-300 p-2">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover border border-slate-300"
                />
                {/* Strict Rectangular Status Badge */}
                <div className={`absolute top-0 right-0 ${event.statusColor} text-white px-3 py-1 text-xs font-bold uppercase tracking-widest border-b-2 border-l-2 border-slate-900`}>
                  {event.status}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col gap-1 mb-4 border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    {event.category}
                  </span>
                  <span className="text-sm font-bold text-slate-600">
                    Date: {event.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3">
                  {event.title}
                </h3>
                
                <p className="text-sm text-slate-700 leading-relaxed text-justify mb-6 flex-grow">
                  {event.description}
                </p>
                
                {/* Bureaucratic Flat Button */}
                <button className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs py-3 border-2 border-slate-900 hover:bg-white hover:text-slate-900 transition-colors">
                  Read Circular & Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

				<footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                {/* Replace with actual logo */}
                <img src="/iiclogo.png" alt="NIT KKR" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">IIC NIT KKR</h3>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Institution&apos;s Innovation Council, National Institute of Technology Kurukshetra. Fostering a culture of innovation, product development, and entrepreneurship across the campus.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">About The Council</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">Innovation Ecosystem</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">Startup Policy (NISP)</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">Events & Hackathons</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">Student Projects</a></li>
            </ul>
          </div>

          {/* Column 3: MoE Initiatives (The "Recruiter Flex") */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">MoE Initiatives</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="https://mic.gov.in/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  MoE&apos;s Innovation Cell <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://yukti.mic.gov.in/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  YUKTI Portal <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://www.ariia.gov.in/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  ARIIA Rankings <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="https://sih.gov.in/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Smart India Hackathon <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase text-sm mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Institution&apos;s Innovation Council,<br />
                  National Institute of Technology,<br />
                  Kurukshetra, Haryana - 136119
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <a href="mailto:iic@nitkkr.ac.in" className="hover:text-white transition-colors">iic@nitkkr.ac.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>+91 1744 233212</span>
              </li>
            </ul>
          </div>

					</div>
					
					

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} IIC NIT Kurukshetra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Admin Login</a>
          </div>
        </div>
      </div>
    </footer>
			
		</div>
	);
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className='flex flex-col gap-1 text-sm'>
						<div className='leading-none font-medium'>{title}</div>
						<div className='line-clamp-2 text-muted-foreground'>{children}</div>
					</div>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
