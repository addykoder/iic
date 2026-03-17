import { Mail, MapPin, Phone, Lightbulb, ArrowRight, Star, ChevronDown, BookOpenText } from 'lucide-react';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

export default function Home() {
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
