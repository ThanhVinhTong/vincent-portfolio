import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Code, Palette, Database, Cloud, Users, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [".Net", "C#", "Python", "Golang", "Gin"]
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes"]
  }
];

// Update certifications (formerly soft skills, now Certifications)
const certifications = [
  {
    title: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    date: "Feb 2026",
    credentialId: "https://www.credly.com/badges/dcf40059-b515-4312-aab4-f47cc08f48b4/public_url"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "Mar 2024",
    credentialId: "https://www.coursera.org/account/accomplishments/specialization/5ZF39MDLLA26"
  }
];

// Update awards array
const awards = [
  {
    title: "Out of The Box Award",
    issuer: "VIETNAMESE AUSSIES IN IT",
    date: "2025",
    credentialId: "https://github.com/ThanhVinhTong/Certificates/blob/main/VAIT%20Hackathon%20Award/thanhvinhtong_vait_hackathon_2025_out_of_the_box.pdf"
  },
  {
    title: "Best Trainee in Samsung Display Vietnam’s internship",
    issuer: "SAMSUNG DISPLAY VIETNAM",
    date: "2023",
    credentialId: "https://github.com/ThanhVinhTong/Certificates/blob/main/SDV's%20Internship%20Award/TongThanhVinh_Award_SamsungDisplayVietnam.pdf"
  }
];

export function SkillsQualifications() {
  return (
    <section className="mb-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Technical Skills */}
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {category.title === "Other Skills" && (
                  <div className="mt-4">
                    <a 
                      href="https://leetcode.com/u/vinhtongthanh57/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      LeetCode Profile
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-6">
          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{cert.title}</h4>
                    {cert.credentialId && (
                      <a href={cert.credentialId} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline border border-primary px-2 py-1 rounded">
                        View
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Awards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Awards
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{award.title}</h4>
                    {award.credentialId && (
                      <a href={award.credentialId} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline border border-primary px-2 py-1 rounded">
                        View
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{award.issuer}</p>
                  <p className="text-sm text-muted-foreground">{award.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span>English</span>
                <Badge variant="default">Professional Working Proficiency</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Vietnamese</span>
                <Badge variant="default">Native</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}