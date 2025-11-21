import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Team Behind <span className="text-teal-600">MedKit</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={index} 
              className="group w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-teal-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center text-teal-700 text-2xl font-bold mb-6 shadow-inner">
                  {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <span className="text-teal-600 font-medium text-sm mb-4">{member.role}</span>
                
                <div className="w-full h-px bg-slate-100 my-4"></div>
                
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>

                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 text-slate-600 text-sm font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors w-full break-all"
                >
                  <Mail size={16} className="shrink-0" />
                  <span className="">{member.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;