"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function DevOpsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    scheduleMeeting: false,
    meetingDate: '',
    meetingTime: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rientage.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://rientage.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "DevOps",
          "item": "https://rientage.com/services/devops"
        }
      ]
    });
    document.head.appendChild(script);

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Enterprise DevOps Services",
      "description": "Professional DevOps consulting and implementation including CI/CD pipelines, Kubernetes, cloud deployment, and infrastructure automation",
      "provider": {
        "@type": "Organization",
        "name": "Rientage",
        "url": "https://rientage.com"
      },
      "hasOfferingDetails": [
        {
          "@type": "ServiceReference",
          "name": "CI/CD Pipeline Development",
          "description": "Automated testing, building, and deployment pipelines"
        },
        {
          "@type": "ServiceReference",
          "name": "Container Orchestration",
          "description": "Kubernetes and Docker container management"
        },
        {
          "@type": "ServiceReference",
          "name": "Cloud Infrastructure",
          "description": "AWS, Azure, GCP deployment and management"
        },
        {
          "@type": "ServiceReference",
          "name": "Infrastructure Automation",
          "description": "Terraform and IaC best practices"
        }
      ]
    });
    document.head.appendChild(serviceScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(serviceScript);
    };
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', scheduleMeeting: false, meetingDate: '', meetingTime: '' });
          setSubmitted(false);
        }, 4000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(234,88,12,0.22),transparent_40%),radial-gradient(circle_at_82%_14%,rgba(251,146,60,0.16),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(217,70,239,0.14),transparent_42%)]"></div>
      <div className="pointer-events-none absolute -top-28 -left-24 z-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-float-slow"></div>
      <div className="pointer-events-none absolute top-28 -right-24 z-0 h-[28rem] w-[28rem] rounded-full bg-red-400/18 blur-3xl animate-float-slower"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 z-0 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl animate-float-slow"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden py-24" aria-label="DevOps services hero section">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Enterprise DevOps Solutions</h1>
              <p className="text-2xl text-purple-100 max-w-3xl mx-auto">Automate, scale, and secure your infrastructure with modern DevOps practices. CI/CD pipelines, Kubernetes, and cloud-native solutions.</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="w-full px-8 py-24 bg-slate-950">
          <div className="mx-auto w-full max-w-[1200px] rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-12">
            {/* Overview */}
            <section className="mb-16" aria-label="DevOps services overview">
              <h2 className="text-4xl font-bold mb-6 text-white">Overview</h2>
              <div className="space-y-4">
                <p className="text-lg text-purple-100 leading-relaxed">
                  We deliver <strong>enterprise-grade DevOps solutions</strong> that accelerate your software delivery while maintaining reliability and security. Our expertise spans CI/CD automation, containerization, cloud infrastructure, and observability.
                </p>
                <p className="text-lg text-purple-100 leading-relaxed">
                  From startups scaling rapidly to enterprises optimizing complex systems, we design and implement DevOps strategies that reduce deployment time, improve system stability, and enable your teams to ship features with confidence.
                </p>
              </div>
            </section>

            {/* Services Include */}
            <section className="mb-16" aria-label="DevOps services offered">
              <h2 className="text-4xl font-bold mb-6 text-white">DevOps Services We Offer</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none"
                   role="list"
                   aria-label="Complete list of DevOps services">
                {[
                  "CI/CD Pipeline Design & Implementation",
                  "Container Orchestration (Docker, Kubernetes)",
                  "Infrastructure as Code (Terraform, CloudFormation, Ansible)",
                  "Multi-Cloud Deployment (AWS, Azure, GCP)",
                  "Monitoring, Logging & Observability (Prometheus, ELK, Datadog)",
                  "Security & Compliance Automation (IAM, Secret Management)",
                  "Auto-Scaling & Load Balancing Configuration",
                  "Database Administration & Optimization",
                  "Disaster Recovery & Business Continuity Planning",
                  "Performance Optimization & Cost Analysis",
                  "Incident Management & Alerting Systems",
                  "GitOps Workflows & Deployment Automation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start p-4 bg-purple-950/50 rounded-lg border border-purple-800">
                    <span className="text-purple-500 font-bold mr-3 text-xl flex-shrink-0" aria-hidden="true">✓</span>
                    <span className="text-purple-100 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12" aria-label="Why choose our DevOps team">
              <h2 className="text-4xl font-bold mb-3 text-white">Why Choose Our DevOps Team</h2>
              <p className="text-lg text-purple-200 mb-8">We reduce deployment friction, improve system reliability, and enable <strong>continuous delivery at scale</strong> across all cloud platforms and on-premise environments.</p>
              <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  role="list"
                  aria-label="Benefits of our DevOps services">
                <div className="p-5 rounded-xl border border-purple-800 bg-purple-950/60">
                  <dt className="text-lg font-bold text-purple-300 mb-2">🚀 Speed & Efficiency</dt>
                  <dd className="text-sm text-purple-100">Automated testing, building, and deployment reduce release cycles from weeks to minutes, enabling rapid iteration and faster time-to-market.</dd>
                </div>
                <div className="p-5 rounded-xl border border-purple-800 bg-purple-950/60">
                  <dt className="text-lg font-bold text-purple-300 mb-2">🔒 Security First</dt>
                  <dd className="text-sm text-purple-100">Security policies automated throughout the pipeline, compliance auditing, secret management, and vulnerability scanning in every stage.</dd>
                </div>
                <div className="p-5 rounded-xl border border-purple-800 bg-purple-950/60">
                  <dt className="text-lg font-bold text-purple-300 mb-2">📊 Observability</dt>
                  <dd className="text-sm text-purple-100">Comprehensive monitoring, logging, and tracing provide deep insights into application performance and system health in real-time.</dd>
                </div>
                <div className="p-5 rounded-xl border border-purple-800 bg-purple-950/60">
                  <dt className="text-lg font-bold text-purple-300 mb-2">💰 Cost Optimization</dt>
                  <dd className="text-sm text-purple-100">Right-sizing resources, auto-scaling policies, and cloud cost analysis reduce infrastructure spending by 30-50%.</dd>
                </div>
                <div className="p-5 rounded-xl border border-purple-800 bg-purple-950/60">
                  <dt className="text-lg font-bold text-purple-300 mb-2">🛡️ Reliability & Resilience</dt>
                  <dd className="text-sm text-purple-100">Disaster recovery planning, multi-region deployment, and automated failover ensure high availability and business continuity.</dd>
                </div>
                <div className="p-5 rounded-xl border border-purple-800 bg-purple-950/60">
                  <dt className="text-lg font-bold text-purple-300 mb-2">🤝 Team Enablement</dt>
                  <dd className="text-sm text-purple-100">Tools and processes that reduce toil, improve collaboration between dev and ops, and accelerate knowledge transfer across teams.</dd>
                </div>
              </dl>
            </section>
            {/* CI/CD & Automation - Collapsible */}
            <details className="mb-8 group border border-purple-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="cicd-content">
                <h2 className="text-2xl font-bold text-white">CI/CD & Automation Tools</h2>
                <span className="text-2xl text-purple-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-purple-700" id="cicd-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="CI/CD and automation technologies">
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">GitHub Actions & GitLab CI</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Native integration with version control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Automated testing and deployment workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Secrets management and environment variables</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">Jenkins & GitOps</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Enterprise-grade automation and orchestration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>ArgoCD for declarative deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Comprehensive pipeline as code (Jenkinsfile)</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Container & Orchestration - Collapsible */}
            <details className="mb-8 group border border-purple-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="container-content">
                <h2 className="text-2xl font-bold text-white">Container & Orchestration Stack</h2>
                <span className="text-2xl text-purple-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-purple-700" id="container-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Container and orchestration technologies">
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">Docker</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Container image buildingand optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Multi-stage builds for smaller images</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Container registry management (ECR, GCR, Hub)</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">Kubernetes (K8s)</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Cluster setup and lifecycle management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Helm charts for application deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Auto-scaling, rolling updates, and health checks</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Cloud Platforms - Collapsible */}
            <details className="mb-8 group border border-purple-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="cloud-content">
                <h2 className="text-2xl font-bold text-white">Cloud Platform Expertise</h2>
                <span className="text-2xl text-purple-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-purple-700" id="cloud-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Cloud platform technologies">
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">Amazon Web Services (AWS)</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>EC2, ECS, EKS, Lambda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>RDS, DynamoDB, S3 management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>VPC, networking, and security</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">Microsoft Azure</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Azure Virtual Machines & App Services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>AKS (Kubernetes Service)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Azure DevOps pipelines</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">Google Cloud Platform</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>GKE (Kubernetes Engine)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Cloud Run, Compute Engine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Cloud SQL and data analytics</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Monitoring & Observability - Collapsible */}
            <details className="mb-8 group border border-purple-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="monitoring-content">
                <h2 className="text-2xl font-bold text-white">Monitoring & Observability Solutions</h2>
                <span className="text-2xl text-purple-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-purple-700" id="monitoring-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Monitoring and observability technologies">
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">Prometheus & Grafana</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Time-series metrics collection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Custom dashboards and alerting rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Multi-tenant monitoring setup</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-purple-950/80 rounded-lg border border-purple-800" role="listitem">
                    <h3 className="font-bold text-purple-300 mb-3">ELK Stack & Logging</h3>
                    <ul className="space-y-2 text-purple-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Elasticsearch, Logstash, Kibana setup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Centralized log aggregation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Log parsing and analysis</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Professional CTA Section */}
            <section className="bg-gradient-to-br from-purple-900 to-purple-800 p-16 rounded-2xl shadow-xl border border-purple-700 mt-12" aria-label="Get started with DevOps services">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-black mb-3 text-white">Optimize Your Infrastructure</h2>
                <p className="text-xl text-purple-200 mb-12">Schedule a consultation with our DevOps experts to discuss your infrastructure challenges and solutions.</p>
                
                {submitted ? (
                  <article className="relative" role="region" aria-label="Form submission success">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-25"></div>
                    <div className="relative bg-slate-900 p-12 rounded-2xl border-2 border-green-500 text-center shadow-lg">
                      <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-full">
                          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">Request Received!</h3>
                      <p className="text-lg text-purple-200 mb-6">We've received your information and will contact you shortly.</p>
                      <div className="bg-purple-950/60 p-4 rounded-lg mb-6 border border-purple-700">
                        <p className="text-sm text-purple-100">Confirmation sent to:</p>
                        <p className="font-semibold text-white">{formData.email}</p>
                      </div>
                      {formData.scheduleMeeting && (
                        <div className="bg-purple-950/60 p-4 rounded-lg border border-purple-700">
                          <p className="text-sm text-purple-100 mb-2">📅 Meeting Scheduled</p>
                          <p className="font-semibold text-white">
                            {new Date(formData.meetingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {formData.meetingTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </article>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="DevOps consultation request form">
                    {/* Basic Info Section */}
                    <fieldset className="bg-slate-900/80 p-8 rounded-xl border-2 border-purple-800 space-y-6">
                      <legend className="text-lg font-bold text-white mb-4">Your Contact Information</legend>
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-purple-300 mb-2">
                          Full Name <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="name-hint"
                          className="w-full px-4 py-3 border-2 border-purple-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400/50 transition-all"
                        />
                        <p id="name-hint" className="text-xs text-purple-300 mt-1">Please provide your full name</p>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-purple-300 mb-2">
                          Email Address <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="email-hint"
                          className="w-full px-4 py-3 border-2 border-purple-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400/50 transition-all"
                        />
                        <p id="email-hint" className="text-xs text-purple-300 mt-1">We'll use this to contact you about your infrastructure needs</p>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-purple-300 mb-2">
                          Phone Number <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="phone-hint"
                          className="w-full px-4 py-3 border-2 border-purple-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-400/50 transition-all"
                        />
                        <p id="phone-hint" className="text-xs text-purple-300 mt-1">Best number to reach you during business hours</p>
                      </div>
                    </fieldset>

                    {/* Meeting Scheduler */}
                    <fieldset className="bg-slate-900/80 p-8 rounded-xl border-2 border-purple-800">
                      <legend className="text-lg font-bold text-white mb-4">Consultation Preferences</legend>
                      <div className="flex items-center space-x-3 p-4 rounded-lg">
                        <input
                          type="checkbox"
                          id="scheduleMeeting"
                          name="scheduleMeeting"
                          checked={formData.scheduleMeeting}
                          onChange={handleChange}
                          className="w-5 h-5 cursor-pointer accent-purple-500"
                          aria-describedby="meeting-hint"
                        />
                        <label htmlFor="scheduleMeeting" className="text-sm font-bold text-purple-300 cursor-pointer">
                          Schedule a DevOps consultation meeting
                        </label>
                      </div>
                      <p id="meeting-hint" className="text-xs text-purple-300 mt-2 ml-8">Optional: Book a time to discuss your infrastructure challenges</p>
                      
                      {formData.scheduleMeeting && (
                        <div className="mt-6 pt-6 border-t border-purple-700" role="region" aria-label="Meeting scheduling options">
                          <SchedulingCalendar
                            selectedDate={formData.meetingDate}
                            selectedTime={formData.meetingTime}
                            onDateChange={(date) => setFormData(prev => ({ ...prev, meetingDate: date }))}
                            onTimeChange={(time) => setFormData(prev => ({ ...prev, meetingTime: time }))}
                          />
                        </div>
                      )}
                    </fieldset>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
                      aria-label="Submit DevOps consultation request"
                      aria-disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center space-x-2" aria-live="polite">
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </span>
                      ) : (
                        'Schedule Consultation'
                      )}
                    </button>

                    <p className="text-center text-xs text-purple-300 leading-relaxed">
                      By submitting this form, you agree to our <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">privacy policy</Link> and <Link href="/terms" className="text-purple-400 hover:text-purple-300 underline">terms of service</Link>. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </section>

            {/* Back Link */}
            <nav className="mt-12" aria-label="Page navigation">
              <Link href="/services" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center gap-2">
                <span aria-hidden="true">←</span>
                Back to Services
              </Link>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
