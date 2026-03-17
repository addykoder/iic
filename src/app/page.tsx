import { Mail, MapPin, Phone } from 'lucide-react';

export default function Home() {
	const infoItems = [
    { icon: Phone, text: '01744-233208' },
    { icon: MapPin, text: 'National Institute of Technology, Kurukshetra, Haryana, India, 136119' },
    { icon: Mail, text: 'iic@nitkkr.ac.in' },
  ];
  return (
		<div id='main'>
			<div className="bg-white p-4 px-12 flex justify-between items-center text-sm flex-wrap gap-8 border-b-2 border-gray-200">
      {/* Left side: Logo */}
      <div className="flex items-center gap-8 w-auto m-auto">
        <img
          src="iic-logo.jpg"
          alt="IIC NIT Kurukshtra Logo"
          className="w-[250px] h-auto"
        />
        <div>
          <h1 className="text-xl font-bold">IIC NIT Kurukshetra</h1>
          <h2 className="text-sm">National Institute of Technology Kurukshetr</h2>
          <p className="text-xs text-gray-600">
            An Institution of National Importance | Under Ministry of Education, Govt. of India | NIRF Ranked
          </p>
        </div>
      </div>

      {/* Right side: Information */}
      <div className="flex items-center gap-8 m-auto">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <item.icon size={16} className="text-gray-600" />
            <span className="text-gray-800 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>

		</div>
  );
}
