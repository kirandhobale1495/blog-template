 import React, { useEffect, useCallback } from 'react';
import Layout from '../../../components/Layout';
import styled from 'styled-components';
import { FaCode, FaCheckCircle, FaExclamationTriangle, FaUsers, FaHistory, FaGlobe, FaGavel, FaMobile, FaRocket, FaBook, FaCog } from 'react-icons/fa';

// Skip Link Styles
const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 1000;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.2s ease;
 
  &:focus {
    top: 6px;
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
 
  &:hover {
    background: #333;
  }
`;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const FocusableSection = styled.div`
  position: relative;
  border-radius: 4px;
  transition: all 0.2s ease;
 
  &:focus {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
    background-color: rgba(0, 102, 204, 0.05);
  }
 
  &:focus-visible {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
    background-color: rgba(0, 102, 204, 0.05);
  }
 
  &:hover {
    background-color: rgba(0, 102, 204, 0.02);
  }
`;

const AccessibleButton = styled.button`
  background: #0066cc;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
 
  &:hover {
    background: #0052a3;
  }
 
  &:focus {
    outline: 2px solid #ffbf47;
    outline-offset: 2px;
  }
 
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

// Styled Components
const Section = styled.section`
  margin-bottom: 2rem;
`;

const Code = styled.code`
  background-color: black;
  color: white; /* Ensures text is visible on black background */
  padding: 15px; /* Adds space around the code */
  border-radius: 8px; /* Rounds the corners */
  overflow-x: auto; /* Adds a horizontal scrollbar if needed */
  font-family: monospace; /* Keeps the code formatting */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.9rem;
 
  &:focus {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
 
  th, td {
    padding: 12px;
    border: 1px solid #e1e1e1;
    text-align: left;
   
    &:focus {
      outline: 2px solid #0066cc;
      outline-offset: -2px;
      background-color: rgba(0, 102, 204, 0.1);
    }
  }

  th {
    background: #f5f5f5;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background: #f9f9f9;
  }
 
  tr:focus-within {
    background-color: rgba(0, 102, 204, 0.05);
  }
`;

const IconBox = styled.div``;

const IconBoxHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
 
  svg {
    margin-right: 8px;
    color: #0066cc;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
  margin: 1rem 0;
`;

const CodeBlock = styled.pre`
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  border-left: 4px solid #0066cc;
  margin: 1rem 0;
  position: relative;
 
  &:focus {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
 
  &:focus-within {
    outline: 3px solid #ffbf47;
    outline-offset: 2px;
  }
 
  code {
    background-color: black;
    color: white;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
  }
`;

const MetricsCard = styled.div`
`;

const WCAGPrinciple = styled.div`
  h3 {
    margin-top: 0;
  }
`;

const StorybookImage = styled.div`
  margin: 20px 0;
  text-align: center;
 
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 2px solid #e0e0e0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
   
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 20px rgba(0, 102, 204, 0.15);
    }
  }
 
  figcaption {
    margin-top: 10px;
    font-style: italic;
    color: #555;
    font-size: 0.9em;
  }
`;

export const meta = {
  title: "Accessibility in Web Design: A Complete Guide",
  description: "A comprehensive guide to creating inclusive web experiences",
  date: "2025-11-23",
  readTime: 18
};

// Define style constants to prevent recreation on each render
const noteStyle = {
  marginTop: '1rem',
  padding: '0.75rem',
  background: '#e8f7e8',
  borderRadius: '4px',
  border: '1px solid #28a745',
  fontSize: '0.9rem'
};

const tocListStyle = {
  lineHeight: '1.6',
  fontSize: '0.95rem'
};

const linkStyle = {
  color: '#0066cc',
  textDecoration: 'underline'
};

const navTipStyle = {
  marginTop: '1rem',
  fontSize: '0.9rem',
  fontStyle: 'italic',
  color: '#555'
};

const spacingStyle = {
  marginBottom: '1.5rem'
};

const outlineStyle = {
  outline: 'none'
};

const iconStyle = {
  marginRight: '8px',
  // color: '#0066cc'
};

const warningIconStyle = {
  marginRight: '8px',
  color: '#ff9800'
};

const successIconStyle = {
  marginRight: '8px',
  color: '#28a745'
};

const dangerIconStyle = {
  marginRight: '8px',
  color: '#dc3545'
};

const conclusionStyle = {
  marginTop: '1.5rem',
  fontStyle: 'italic',
  color: '#555'
};

const captionStyle = {
  paddingBottom: '1rem'
};

export default function AccessibilityGuide() {
  // Define reusable key handler to avoid inline functions causing hydration issues
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    // Add keyboard navigation listeners only on client side
    if (typeof window !== 'undefined') {
      const handleKeyDown = (e) => {
        // Alt + M to go to main content
        if (e.altKey && e.key === 'm') {
          e.preventDefault();
          document.getElementById('main-content')?.focus();
        }
        // Alt + N to go to navigation (skip link)
        if (e.altKey && e.key === 'n') {
          e.preventDefault();
          document.querySelector('a[href="#main-content"]')?.focus();
        }
      };
     
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const wcagPrinciples = [
    {
      title: "Perceivable",
      description: "Information and UI components must be presentable to users in ways they can perceive",
      examples: ["Text alternatives for images", "Captions for videos", "Sufficient color contrast"]
    },
    {
      title: "Operable",
      description: "UI components and navigation must be operable by all users",
      examples: ["Keyboard accessible", "No seizure-inducing content", "Enough time to read content"]
    },
    {
      title: "Understandable",
      description: "Information and UI operation must be understandable",
      examples: ["Readable text", "Predictable functionality", "Input assistance"]
    },
    {
      title: "Robust",
      description: "Content must be robust enough for interpretation by assistive technologies",
      examples: ["Valid code", "Compatible with screen readers", "Future-proof markup"]
    }
  ];

  const conformanceLevels = [
    {
      level: "A",
      description: "Minimum level (basic accessibility)",
      usage: "Essential baseline requirements"
    },
    {
      level: "AA",
      description: "Industry standard (recommended for most businesses)",
      usage: "Most common target for businesses"
    },
    {
      level: "AAA",
      description: "Highest level (for government agencies and essential services)",
      usage: "Government and critical services"
    }
  ];

  const testingTools = [
    {
      tool: "axe DevTools",
      url: "https://www.deque.com/axe/devtools/",
      features: "Browser extension, CI/CD integration, WCAG A/AA/AAA checks",
      pros: "High accuracy, actionable fixes, integrates with GitHub Actions",
      cons: "Requires technical knowledge"
    },
    {
      tool: "WAVE (WebAIM)",
      url: "https://wave.webaim.org/",
      features: "Visual overlay of issues, browser extension, API",
      pros: "Beginner-friendly, color-coded feedback",
      cons: "Struggles with dynamic content"
    },
    {
      tool: "Google Lighthouse",
      url: "https://developers.google.com/web/tools/lighthouse",
      features: "Built into Chrome DevTools, audits performance + accessibility",
      pros: "Free, easy to run",
      cons: "Limited depth for complex ARIA issues"
    },
    {
      tool: "Accessibility Insights",
      url: "https://accessibilityinsights.io/",
      features: "Automated + guided manual tests, keyboard trap detection",
      pros: "Great for learning, free",
      cons: "Manual steps can be time-consuming"
    },
    {
      tool: "Pa11y",
      url: "https://pa11y.org/",
      features: "CLI tool for automated WCAG checks",
      pros: "Ideal for CI/CD pipelines",
      cons: "Requires command-line knowledge"
    },
    {
      tool: "BrowserStack",
      url: "https://www.browserstack.com/accessibility-testing",
      features: "Real device testing, screen reader simulation",
      pros: "Comprehensive, integrates with agile workflows",
      cons: "Paid tool"
    }
  ];

  const screenReaders = [
    {
      reader: "JAWS",
      url: "https://www.freedomscientific.com/products/software/jaws/",
      platform: "Windows",
      strengths: "Industry standard, robust for enterprise testing"
    },
    {
      reader: "NVDA",
      url: "https://www.nvaccess.org/",
      platform: "Windows",
      strengths: "Free, widely used, great for developers"
    },
    {
      reader: "VoiceOver",
      url: "https://www.apple.com/accessibility/vision/",
      platform: "macOS/iOS",
      strengths: "Native on Apple devices, good for mobile testing"
    },
    {
      reader: "TalkBack",
      url: "https://support.google.com/accessibility/android/answer/6283677",
      platform: "Android",
      strengths: "Native on Android, essential for mobile apps"
    }
  ];

  return (
    <Layout pageTitle={meta.title} description={meta.description}>
      <style jsx global>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .article-meta {
          margin-bottom: 1rem;
          color: #666;
          font-size: 0.9rem;
        }
        html {
          scroll-behavior: smooth;
        }
        .back-to-top {
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          background: #0066cc;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          margin-top: 2rem;
          transition: all 0.2s ease;
          border: 2px solid #0066cc;
        }
        .back-to-top:hover {
          background: #0052a3;
          border-color: #0052a3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
        }
        .back-to-top:focus {
          outline: 3px solid #ffbf47;
          outline-offset: 2px;
          background: #0052a3;
        }
        .back-to-top svg {
          margin-right: 8px;
        }
      `}</style>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#table-of-contents" style={{left: '160px'}}>Skip to table of contents</SkipLink>
      <SkipLink href="#testing-tools" style={{left: '340px'}}>Skip to testing tools</SkipLink>
      <div id="live-region" aria-live="polite" aria-atomic="true" className="sr-only"></div>
      <div className="sr-only">
        <p>Note: This blog post has been designed with full accessibility features including keyboard navigation, screen reader support, and WCAG compliance. Please explore and test the accessibility features discussed throughout this guide.</p>
        <p>Navigation tip: Use heading navigation (H key in screen readers) to quickly jump between sections. All interactive elements are keyboard accessible using Tab and Enter keys.</p>
      </div>
      <div className="sr-only">
        <p>Accessibility Guide - Complete resource covering WCAG guidelines, testing tools, and implementation strategies for inclusive web design</p>
      </div>
      <main id="main-content" aria-labelledby="page-title" tabIndex="-1">
        <Section>
          <header>
            <h1 id="page-title" tabIndex="-1">Accessibility in Web Design: A Complete Guide</h1>
            <div className="article-meta" aria-label="Article metadata and reading information">
              <p>
                <time dateTime="2025-11-23" aria-label="Publication date: November 23, 2025">
                  <strong>Published:</strong> November 23, 2025
                </time>
                {' • '}
                <span aria-label="Estimated reading time: 18 minutes">
                  <strong>Read time:</strong> 18 minutes
                </span>
              </p>
            </div>
          </header>
       
        <MetricsCard>
          <h2>🌐 What is Accessibility?</h2>
          <p>
            Accessibility ensures that websites and applications are usable by everyone, including people
            with disabilities. It's about creating an inclusive digital experience where no one is left behind.
          </p>
          <p style={noteStyle}>
            <strong>📋 Note:</strong> This website has been designed with full accessibility compliance in mind.
            Feel free to test the accessibility features discussed in this guide using screen readers, keyboard navigation,
            or accessibility testing tools to experience firsthand how these principles work in practice.
          </p>
        </MetricsCard>
      </Section>

      <Section>
        <h2 id="table-of-contents" tabIndex="-1">📋 Table of Contents</h2>
        <WCAGPrinciple>
          <div>
            <p className="sr-only">This table of contents contains 16 sections. Use Tab to navigate through the links, or press Enter to jump to a section.</p>
            <nav role="navigation" aria-labelledby="table-of-contents" aria-describedby="toc-instructions">
              <p id="toc-instructions" className="sr-only">Navigate this guide using the following 16 sections. Each link will take you directly to that topic.</p>
              <ol style={tocListStyle} role="list">
                <li><a href="#why-accessibility-matters" style={linkStyle}>Why Does Accessibility Matter?</a></li>
                <li><a href="#understanding-disabilities" style={linkStyle}>Understanding Types of Disabilities</a></li>
                <li><a href="#wcag-section" style={linkStyle}>Web Content Accessibility Guidelines (WCAG)</a></li>
                <li><a href="#conformance-levels" style={linkStyle}>Levels of Conformance</a></li>
                <li><a href="#semantic-html" style={linkStyle}>Semantic HTML Tags & Examples</a></li>
                <li><a href="#color-contrast" style={linkStyle}>Color Contrast: Good vs Bad Examples</a></li>
                <li><a href="#aria-overview" style={linkStyle}>ARIA Tags Overview</a></li>
                <li><a href="#forms-accessibility" style={linkStyle}>Forms Accessibility</a></li>
                <li><a href="#links-buttons" style={linkStyle}>Links and Buttons Accessibility</a></li>
                <li><a href="#audio-video" style={linkStyle}>Audio & Video Accessibility</a></li>
                <li><a href="#history" style={linkStyle}>A Brief History of Accessibility in Technology</a></li>
                <li><a href="#compliance-framework" style={linkStyle}>WCAG/VPAT ADA Software Compliance Framework</a></li>
                <li><a href="#testing-tools" style={linkStyle}>Accessibility Testing Tools Comparison</a></li>
                <li><a href="#storybook-plugin" style={linkStyle}>Storybook Accessibility Plugin</a></li>
                <li><a href="#screen-readers" style={linkStyle}>Screen Readers for Accessibility Testing</a></li>
                <li><a href="#conclusion-heading" style={linkStyle}>Conclusion</a></li>
                <li><a href="#references-heading" style={linkStyle}>References & Resources</a></li>
              </ol>
            </nav>
          </div>
        </WCAGPrinciple>
      </Section>

      <Section>
        <h2 id="why-accessibility-matters">Why Does Accessibility Matter?</h2>
        <GridContainer aria-label="Benefits of web accessibility">
           <ul>
              <li><strong>Legal Compliance:</strong> Many countries have laws requiring accessible websites</li>
              <li><strong>Better UX :</strong> Accessibility improves usability for all users</li>
              <li><strong>SEO Benefits:</strong> Accessible sites often rank better in search engines</li>
              <li><strong>Social Responsibility:</strong> It's the right thing to do</li>
            </ul>
        </GridContainer>
      </Section>

      <Section>
        <h2 id="understanding-disabilities">Understanding Types of Disabilities</h2>
        <p>To create truly accessible experiences, it's essential to understand the diverse range of disabilities that affect how people interact with digital content. Each type presents unique challenges and requires specific design considerations.</p>
       
        <WCAGPrinciple>
          <div>
            <h3><FaUsers style={iconStyle} />Hearing Disabilities</h3>
            <p>Hearing disabilities exist on a spectrum and affect how users consume audio content:</p>
            <ul>
              <li><strong>Complete hearing loss:</strong> Users who are deaf and rely entirely on visual information</li>
              <li><strong>Partial hearing loss:</strong> Users with limited hearing who may benefit from amplified audio</li>
              <li><strong>Tinnitus:</strong> Users experiencing ringing or buzzing sounds that can interfere with audio perception</li>
            </ul>
            <p><strong>Design Impact:</strong> Audio and video content must include captions, transcripts, and sign language interpretation when appropriate.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCode style={iconStyle} />Motor Disabilities</h3>
            <p>Motor disabilities affect physical interaction with devices and interfaces:</p>
            <ul>
              <li><strong>Limited dexterity:</strong> Difficulty controlling a mouse or making precise movements</li>
              <li><strong>Limb differences:</strong> Users with one hand, no hands, or limited arm mobility</li>
              <li><strong>Alternative input methods:</strong> Voice control, eye-tracking, or specialized accessibility devices</li>
              <li><strong>Keyboard-only navigation:</strong> Users who rely entirely on keyboard input</li>
            </ul>
            <p><strong>Design Impact:</strong> All functionality must be keyboard accessible, with large touch targets and clear focus indicators. Consider voice control compatibility.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={iconStyle} />Visual Disabilities</h3>
            <p>Visual disabilities represent a wide spectrum affecting approximately 3% of the population. In the UK alone, RNIB suggests two million people live with sight loss significant enough to impact daily life:</p>
           
            <h4>Complete Blindness</h4>
            <ul>
              <li><strong>Screen reader dependency:</strong> Users rely on desktop tools like JAWS and NVDA, or mobile tools like TalkBack and VoiceOver</li>
              <li><strong>Non-visual navigation:</strong> Navigate by headings, landmarks, and semantic structure</li>
            </ul>
           
            <h4>Partial Vision</h4>
            <ul>
              <li><strong>Screen magnification:</strong> Built-in zoom tools, third-party software, or browser zoom</li>
              <li><strong>Screen readers:</strong> May also use screen readers in combination with magnification</li>
              <li><strong>Visual challenges:</strong> Blurry vision, blind spots, or tunnel vision</li>
            </ul>
           
            <h4>Color Vision Deficiency</h4>
            <ul>
              <li><strong>Prevalence:</strong> Affects around 1 in 20 people (5% of population)</li>
              <li><strong>Common types:</strong> Red-green color blindness is most frequent</li>
              <li><strong>Varying severity:</strong> From slight difficulty to complete inability to distinguish certain colors</li>
            </ul>
           
            <p><strong>Design Impact:</strong> Require high contrast ratios, alternative text for images, color-independent indicators, and scalable interfaces that work with magnification.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={iconStyle} />Cognitive Disabilities</h3>
            <p>Cognitive disabilities are not always visible but significantly impact how users process information:</p>
           
            <h4>Types of Cognitive Disabilities</h4>
            <ul>
              <li><strong>Learning differences:</strong> Dyslexia, dyscalculia, and other learning disabilities</li>
              <li><strong>Neurodiversity:</strong> Autism spectrum disorders, ADHD, and attention difficulties</li>
              <li><strong>Memory impairments:</strong> Short-term or working memory challenges</li>
              <li><strong>Intellectual disabilities:</strong> Varying levels of cognitive processing differences</li>
            </ul>
           
            <h4>Design Strategies</h4>
            <ul>
              <li><strong>Simple language:</strong> Use clear, concise wording and avoid jargon</li>
              <li><strong>Readable typography:</strong> Proper line spacing, font size, and contrast</li>
              <li><strong>Information chunking:</strong> Break content into digestible sections</li>
              <li><strong>Clear navigation:</strong> Consistent layout and obvious calls-to-action</li>
              <li><strong>Reduced cognitive load:</strong> Minimize distractions and unnecessary complexity</li>
            </ul>
           
            <p><strong>Universal Benefit:</strong> Designing for cognitive accessibility improves website quality and usability for all users, creating clearer, more intuitive experiences.</p>
          </div>
        </WCAGPrinciple>

        <p style={{marginTop: '1.5rem', fontStyle: 'italic', color: '#444'}}>
          <strong>Key Insight:</strong> These disability categories often overlap, and many users experience multiple types of challenges.
          Inclusive design that addresses all these areas creates the most accessible and usable experiences for everyone.
        </p>
      </Section>

      <Section>
        <h2 id="wcag-section" tabIndex="-1" style={outlineStyle}>Web Content Accessibility Guidelines (WCAG)</h2>
        <p>
          Published by W3C, WCAG provides a technical checklist for accessibility.
          It is based on four fundamental principles:
        </p>
        <div role="region" aria-labelledby="wcag-section" aria-describedby="wcag-description">
          <VisuallyHidden id="wcag-description">
            Interactive list of four WCAG principles with descriptions and examples. Use Tab to navigate between principles, Enter to expand details, and arrow keys for quick navigation.
          </VisuallyHidden>
          <div role="list" aria-label="WCAG 2.1 Four Principles">
            {wcagPrinciples.map((principle, index) => (
              <WCAGPrinciple
                key={index}
                role="listitem"
                tabIndex="0"
                aria-labelledby={`principle-${index}-title`}
                aria-describedby={`principle-${index}-desc principle-${index}-examples`}
                aria-posinset={index + 1}
                aria-setsize={wcagPrinciples.length}
                onKeyDown={handleKeyPress}
              >
                <h3 id={`principle-${index}-title`}>{principle.title}</h3>
                <p id={`principle-${index}-desc`}>{principle.description}</p>
                <p id={`principle-${index}-examples`}><strong>Examples:</strong> {principle.examples.join(', ')}</p>
              </WCAGPrinciple>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <h2 id="conformance-levels">Levels of Conformance</h2>
        <div style={spacingStyle}></div>
        <Table
          role="table"
          tabIndex="0"
          aria-labelledby="conformance-levels"
          aria-describedby="conformance-summary"
          onKeyDown={handleKeyPress}
        >
          <caption id="conformance-summary" style={captionStyle}>WCAG conformance levels with their descriptions and typical usage scenarios</caption>
          <thead>
            <tr>
              <th scope="col" id="level-col">Level</th>
              <th scope="col" id="description-col">Description</th>
              <th scope="col" id="usage-col">Usage</th>
            </tr>
          </thead>
          <tbody>
            {conformanceLevels.map((level, index) => (
              <tr key={index}>
                <td headers="level-col">
                  <strong
                    style={{color: level.color}}
                    aria-label={`WCAG Level ${level.level}`}
                  >
                    {level.level}
                  </strong>
                </td>
                <td headers="description-col">{level.description}</td>
                <td headers="usage-col">{level.usage}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <header>
          <h2 id="semantic-html" tabIndex="-1">Semantic HTML Tags & Examples</h2>
          <p>Semantic HTML elements provide meaning and structure that assistive technologies can understand and navigate. Here are the key semantic tags with practical examples:</p>
          <div className="sr-only">
            <p>This section contains 3 categories of HTML elements: Primary Structure Elements, Content Elements, and Key Benefits. Each category includes links to MDN documentation for detailed implementation guidance.</p>
          </div>
        </header>
       
        <WCAGPrinciple>
   
          <div>
            <h3><FaCode style={iconStyle} />Primary Structure Elements</h3>
            <ul>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;header&gt;</a></strong> - Page or section header with branding, navigation, or introductory content</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;nav&gt;</a></strong> - Navigation links or menus</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;main&gt;</a></strong> - Primary content area (only one per page)</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;section&gt;</a></strong> - Thematic grouping of content with a heading</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;article&gt;</a></strong> - Self-contained, reusable content (blog post, news article)</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;aside&gt;</a></strong> - Complementary content (sidebar, related links)</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;footer&gt;</a></strong> - Footer information for page or section</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={iconStyle} />Content Elements</h3>
            <ul>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;h1&gt; - &lt;h6&gt;</a></strong> - Hierarchical headings (only one &lt;h1&gt; per page)</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;p&gt;</a></strong> - Paragraphs of text content</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;figure&gt;</a> & <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;figcaption&gt;</a></strong> - Images, diagrams with captions</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;blockquote&gt;</a></strong> - Extended quotations</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;cite&gt;</a></strong> - Citations and references</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;time&gt;</a></strong> - Dates and times with machine-readable format</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;address&gt;</a></strong> - Contact information</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={warningIconStyle} />Key Benefits of Semantic HTML</h3>
            <ul>
              <li><strong>Screen Reader Navigation:</strong> Users can jump between landmarks (&lt;nav&gt;, &lt;main&gt;, &lt;aside&gt;)</li>
              <li><strong>SEO Improvement:</strong> Search engines better understand content structure and hierarchy</li>
              <li><strong>Keyboard Navigation:</strong> Built-in skip links and logical tab order</li>
              <li><strong>Maintainability:</strong> Code is more readable and easier to style with CSS</li>
              <li><strong>Future-Proof:</strong> Works across all devices and assistive technologies</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <p><strong>💡 Pro Tip:</strong> Always validate your HTML structure using the <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>W3C Markup Validator</a> to ensure semantic correctness and accessibility compliance.</p>
      </Section>

      <Section>
        <header>
          <h2 id="color-contrast" tabIndex="-1">Color Contrast: Good vs Bad Examples</h2>
          <p>Color contrast is crucial for readability and WCAG compliance. Here are visual examples showing the difference:</p>
          <div className="sr-only">
            <p>This section demonstrates color contrast with live examples, WCAG requirements table, and testing tools. Visual examples show compliant and non-compliant color combinations.</p>
          </div>
        </header>
       
        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={successIconStyle} />Good Contrast Examples (WCAG AA Compliant)</h3>
            <div style={{ margin: '15px 0' }}>
              <div style={{
                background: '#ffffff',
                color: '#000000',
                padding: '15px',
                border: '1px solid #ddd',
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <strong>Black text on white background</strong> - Contrast ratio: 21:1 (Perfect for all users)
              </div>
            </div>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={dangerIconStyle} />Poor Contrast Examples (WCAG Violations)</h3>
            <div style={{ margin: '15px 0' }}>
              <div style={{
                background: '#ffffff',
                color: '#cccccc',
                padding: '15px',
                border: '1px solid #ddd',
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <strong>Light gray text on white background</strong> - Contrast ratio: 1.6:1 ❌ (Fails WCAG AA)
              </div>
            </div>
          </div>
        </WCAGPrinciple>

        <h3>WCAG Contrast Requirements</h3>
        <Table
          role="table"
          tabIndex="0"
          aria-labelledby="contrast-requirements-heading"
          aria-describedby="contrast-requirements-summary"
        >
          <caption id="contrast-requirements-summary" style={{paddingBottom: '1rem'}}>WCAG color contrast ratio requirements for different text sizes and compliance levels</caption>
          <thead>
            <tr>
              <th scope="col">Text Size</th>
              <th scope="col">WCAG AA</th>
              <th scope="col">WCAG AAA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Normal text</strong> (under 18pt)</td>
              <td>4.5:1 minimum</td>
              <td>7:1 minimum</td>
            </tr>
            <tr>
              <td><strong>Large text</strong> (18pt+ or 14pt+ bold)</td>
              <td>3:1 minimum</td>
              <td>4.5:1 minimum</td>
            </tr>
            <tr>
              <td><strong>Non-text elements</strong> (icons, graphics)</td>
              <td>3:1 minimum</td>
              <td>Not specified</td>
            </tr>
          </tbody>
        </Table>

        <WCAGPrinciple>
          <div>
            <h3><FaCode style={iconStyle} />Testing Tools for Color Contrast</h3>
            <ul>
              <li><strong><a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" style={linkStyle}>WebAIM Contrast Checker</a>:</strong> Online tool for checking color combinations</li>
              <li><strong><a href="https://developer.chrome.com/docs/devtools/accessibility/contrast/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Chrome DevTools</a>:</strong> Built-in contrast ratio checker in Elements panel</li>
              <li><strong><a href="https://www.tpgi.com/color-contrast-checker/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Colour Contrast Analyser</a>:</strong> Desktop app for comprehensive testing</li>
              <li><strong><a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener noreferrer" style={linkStyle}>axe DevTools</a>:</strong> Browser extension with automated contrast checking</li>
              <li><strong><a href="https://www.getstark.co/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Stark (Figma/Sketch)</a>:</strong> Design tool plugins for real-time contrast validation</li>
            </ul>
          </div>
        </WCAGPrinciple>
      </Section>

      <Section>
        <header>
          <h2 id="aria-overview" tabIndex="-1">ARIA Tags Overview</h2>
          <p>ARIA (Accessible Rich Internet Applications) enhances accessibility for dynamic content by providing semantic information to assistive technologies:</p>
          <div className="sr-only">
            <p>This section covers Essential ARIA Tags and Common Use Cases. All ARIA attribute links connect to MDN documentation for implementation details.</p>
          </div>
        </header>
       
        <WCAGPrinciple>
          <div>
            <h3><FaCode style={iconStyle} />Essential ARIA Tags</h3>
            <ul>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-label</a>:</strong> Provides accessible name when visible text isn't sufficient</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-labelledby</a>:</strong> References one or more element IDs to create an accessible name by combining their text content. Particularly useful when multiple headings or labels together provide complete context for an element.</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-describedby</a>:</strong> References elements that provide additional description</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-hidden</a>:</strong> Hides decorative elements from screen readers</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-expanded</a>:</strong> Indicates if a collapsible element is open or closed</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-disabled</a>:</strong> Indicates that an element is disabled but focusable</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-live</a>:</strong> Announces dynamic content changes to screen readers (polite, assertive, off)</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles" target="_blank" rel="noopener noreferrer" style={linkStyle}>role</a>:</strong> Defines the purpose or function of an element</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={successIconStyle} />Common Use Cases</h3>
            <ul>
              <li><strong>Form Controls:</strong> Use aria-label for buttons with only icons</li>
              <li><strong>Dynamic Content:</strong> Use aria-live regions for status updates and notifications</li>
              <li><strong>Complex Widgets:</strong> Use role attributes for custom components</li>
              <li><strong>Navigation:</strong> Use aria-expanded for dropdown menus and collapsible content</li>
              <li><strong>Modal Dialogs:</strong> Use aria-modal and proper focus management</li>
              <li><strong>Form Validation:</strong> Use aria-describedby to link error messages to form fields</li>
            </ul>
          </div>
        </WCAGPrinciple>

      </Section>



      <Section>
        <header>
          <h2 id="forms-accessibility" tabIndex="-1">Forms Accessibility</h2>
          <p>Forms are critical for user interaction and often serve as gateways to essential services. Accessible forms ensure that users with disabilities can input data effectively and complete important tasks independently.</p>
          <div className="sr-only">
            <p>This section covers 4 key areas: Essential Form Tags, Form Validation, Common Pitfalls, and Best Practices for Form Groups. Each subsection includes practical examples and implementation guidance.</p>
          </div>
        </header>

        <WCAGPrinciple>
          <div>
            <h3><FaCode style={{ marginRight: '8px', color: '#0066cc' }} />Essential Form Tags & Attributes</h3>
            <ul>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;label&gt;</a>:</strong> Provides accessible names for form controls. Use the "for" attribute to associate with input IDs</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;fieldset&gt;</a> & <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend" target="_blank" rel="noopener noreferrer" style={linkStyle}>&lt;legend&gt;</a>:</strong> Groups related form controls and provides a group title, essential for radio buttons and checkboxes</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id" target="_blank" rel="noopener noreferrer" style={linkStyle}>id attribute</a>:</strong> Creates unique identifiers that link labels to inputs and enable ARIA relationships</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name" target="_blank" rel="noopener noreferrer" style={linkStyle}>name attribute</a>:</strong> Identifies form data when submitted and groups related inputs like radio buttons</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type" target="_blank" rel="noopener noreferrer" style={linkStyle}>type attribute</a>:</strong> Specifies input types (text, email, password, date) which provide appropriate virtual keyboards and validation</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required" target="_blank" rel="noopener noreferrer" style={linkStyle}>required attribute</a>:</strong> Indicates mandatory fields and triggers browser validation messages</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-describedby</a>:</strong> References additional descriptive text like help instructions or error messages</li>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby" target="_blank" rel="noopener noreferrer" style={linkStyle}>aria-labelledby</a>:</strong> References multiple elements that together provide the accessible name</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={{ marginRight: '8px', color: '#28a745' }} />Form Validation & Error Handling</h3>
            <ul>
              <li><strong>Error Identification:</strong> Clearly identify fields with validation errors using both text and visual indicators</li>
              <li><strong>Error Description:</strong> Provide specific, actionable error messages that explain how to fix the problem</li>
              <li><strong>Error Location:</strong> Position error messages near the relevant form field for easy association</li>
              <li><strong>Live Regions:</strong> Use aria-live regions to announce validation errors to screen reader users</li>
              <li><strong>Success Feedback:</strong> Provide confirmation when forms are successfully submitted</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={{ marginRight: '8px', color: '#ff9800' }} />Common Form Accessibility Pitfalls</h3>
            <ul>
              <li><strong>Placeholder-Only Labels:</strong> Placeholders disappear when typing and aren't always announced by screen readers</li>
              <li><strong>Missing Label Associations:</strong> Labels not properly linked to inputs via "for" and "id" attributes</li>
              <li><strong>Disabled Form Controls:</strong> Disabling submit buttons without clear feedback confuses users about form state</li>
              <li><strong>Color-Only Indicators:</strong> Using only color to indicate required fields or errors excludes colorblind users</li>
              <li><strong>Complex Instructions:</strong> Placing important instructions far from relevant form fields</li>
              <li><strong>Time Limits:</strong> Imposing strict time limits without warning or extension options</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaUsers style={{ marginRight: '8px', color: '#0066cc' }} />Best Practices for Form Groups</h3>
            <ul>
              <li><strong>Radio Button Groups:</strong> Always wrap in fieldset with descriptive legend, ensure only one is selectable</li>
              <li><strong>Checkbox Groups:</strong> Use fieldset/legend for related checkboxes, allow multiple selections</li>
              <li><strong>Date Inputs:</strong> Provide clear format instructions and consider using native date inputs for better mobile experience</li>
              <li><strong>Password Fields:</strong> Include password requirements upfront, consider show/hide toggle for usability</li>
              <li><strong>Required Field Indicators:</strong> Use both visual (asterisk) and text ("required") indicators, explain the convention</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <p><strong>💡 Key Principle:</strong> Every form control must have an accessible name, clear purpose, and be operable via keyboard. When in doubt, test your forms with a screen reader and keyboard-only navigation.</p>
      </Section>

      <Section>
        <h2 id="links-buttons">Links and Buttons Accessibility</h2>
        <p>Interactive elements like links and buttons are fundamental to web navigation and user actions. Making them accessible ensures that all users can effectively interact with your website regardless of their abilities or the assistive technologies they use.</p>

        <WCAGPrinciple>
          <div>
            <h3><FaCode style={{ marginRight: '8px', color: '#0066cc' }} />Semantic Element Usage</h3>
            <ul>
              <li><strong>Links (&lt;a&gt; elements):</strong> Use for navigation between pages or sections. Links should take users to different locations or resources</li>
              <li><strong>Buttons (&lt;button&gt; elements):</strong> Use for actions like form submission, opening modals, or triggering JavaScript functions</li>
              <li><strong>Avoid div/span buttons:</strong> Never use generic elements with click handlers as they lack semantic meaning and keyboard accessibility</li>
              <li><strong>Input buttons:</strong> Use &lt;input type="button"&gt; or &lt;input type="submit"&gt; for form-related actions when appropriate</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={{ marginRight: '8px', color: '#28a745' }} />Descriptive Text Requirements</h3>
            <ul>
              <li><strong>Clear Purpose:</strong> Link and button text should clearly describe what will happen when activated</li>
              <li><strong>Avoid Generic Text:</strong> Never use vague phrases like "Click here," "Read more," or "Learn more" without additional context</li>
              <li><strong>Self-Contained Labels:</strong> Each link or button should make sense when read in isolation by screen readers</li>
              <li><strong>Action-Oriented Language:</strong> Use verbs that describe the specific action (e.g., "Download PDF," "Submit Application," "View Product Details")</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={{ marginRight: '8px', color: '#ff9800' }} />Visual Design Guidelines</h3>
            <ul>
              <li><strong>Link Identification:</strong> Underline links in body text and provide distinct visited/unvisited states</li>
              <li><strong>Focus Indicators:</strong> Ensure clear visual focus indicators for keyboard navigation users</li>
              <li><strong>Color Independence:</strong> Never rely solely on color to indicate interactive elements - use underlines, borders, or other visual cues</li>
              <li><strong>Touch Targets:</strong> Maintain minimum 44px touch target sizes for mobile accessibility</li>
              <li><strong>Consistent Styling:</strong> Use consistent visual patterns for similar types of interactive elements throughout your site</li>
            </ul>
          </div>
        </WCAGPrinciple>
      </Section>

      <Section>
        <h2 id="audio-video">Audio & Video Accessibility</h2>
        <p>Multimedia content presents unique accessibility challenges and opportunities. Making audio and video accessible ensures that users with hearing impairments, visual impairments, cognitive disabilities, and those in different contexts can fully engage with your content.</p>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={{ marginRight: '8px', color: '#0066cc' }} />Video Accessibility Requirements</h3>
            <ul>
              <li><strong>Captions:</strong> Synchronized text that displays all spoken dialogue, sound effects, and music. Essential for deaf and hard-of-hearing users</li>
              <li><strong>Audio Descriptions:</strong> Narrated descriptions of visual content for blind and visually impaired users during natural pauses in dialogue</li>
              <li><strong>Transcripts:</strong> Complete text versions of all audio content, including speaker identification and non-speech sounds</li>
              <li><strong>Sign Language Interpretation:</strong> For critical content, provide sign language interpretation in a visible corner of the video</li>
              <li><strong>Keyboard Controls:</strong> Ensure all video player controls (play, pause, volume, fullscreen) are keyboard accessible</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={{ marginRight: '8px', color: '#ff9800' }} />Audio Content Best Practices</h3>
            <ul>
              <li><strong>No Autoplay:</strong> Auto-playing audio can disorient screen reader users and interfere with assistive technology</li>
              <li><strong>Clear Audio Quality:</strong> High-quality recordings reduce cognitive load for all users, especially those with hearing difficulties</li>
              <li><strong>Speaker Identification:</strong> Clearly identify who is speaking in multi-person audio content</li>
              <li><strong>Background Music Control:</strong> If background music is present, ensure it doesn't overpower speech (at least 20dB difference)</li>
              <li><strong>Pause and Replay:</strong> Provide easy controls to pause, rewind, and replay content</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCode style={{ marginRight: '8px', color: '#0066cc' }} />Technical Implementation Guidelines</h3>
            <ul>
              <li><strong>Caption Formats:</strong> Use WebVTT (.vtt) files for web captions, which support styling and positioning</li>
              <li><strong>Multiple Language Support:</strong> Provide captions and audio descriptions in multiple languages when appropriate</li>
              <li><strong>Responsive Design:</strong> Ensure video players work well on mobile devices and different screen sizes</li>
              <li><strong>Focus Management:</strong> Proper focus indicators and keyboard navigation throughout the media player interface</li>
              <li><strong>Alternative Formats:</strong> Consider providing content in multiple formats (video, audio-only, text) to accommodate different preferences and abilities</li>
            </ul>
          </div>
        </WCAGPrinciple>
      </Section>

      <Section>
        <h2 id="history">A Brief History of Accessibility in Technology</h2>
        <p>Understanding the evolution of accessibility helps us appreciate how far we've come and where we're heading:</p>
       
        <WCAGPrinciple>
          <div>
            <h3><FaHistory style={{ marginRight: '8px', color: '#0066cc' }} />1970s-1980s: Early Foundations</h3>
            <p>The first screen readers and assistive technologies emerged, primarily for desktop computers. The Section 508 rehabilitation act (1973) established the foundation for accessibility requirements in federal agencies.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaGlobe style={{ marginRight: '8px', color: '#0066cc' }} />1990s: Web Accessibility Movement</h3>
            <p>Tim Berners-Lee emphasized accessibility from the web's inception. The World Wide Web Consortium (W3C) was founded in 1994, and the Web Accessibility Initiative (WAI) launched in 1997 to develop guidelines and standards.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCode style={{ marginRight: '8px', color: '#0066cc' }} />1999: WCAG 1.0 Released</h3>
            <p>The first Web Content Accessibility Guidelines provided 14 guidelines with checkpoints for Priority 1, 2, and 3 compliance levels. This established the foundation for modern web accessibility standards.</p>
            <p><strong>Key Features of WCAG 1.0:</strong></p>
            <ul>
              <li><strong>14 Core Guidelines:</strong> Covered essential areas like providing text alternatives, ensuring keyboard accessibility, and using markup properly</li>
              <li><strong>Priority System:</strong> Priority 1 (must satisfy), Priority 2 (should satisfy), Priority 3 (may satisfy) - creating a clear hierarchy of importance</li>
              <li><strong>Checkpoint-Based Approach:</strong> Each guideline contained specific, testable checkpoints that developers could verify</li>
              <li><strong>Technology-Agnostic Principles:</strong> Focused on underlying accessibility concepts rather than specific technologies</li>
              <li><strong>International Adoption:</strong> Became the global standard, influencing national accessibility laws worldwide</li>
            </ul>
            <p><strong>WCAG 1.0 Priority Levels Explained:</strong></p>
            <ul>
              <li><strong>Priority 1 (Critical):</strong> Checkpoints that a web content developer <em>must</em> satisfy. Failure to meet these makes it impossible for one or more groups of users with disabilities to access information. Examples: providing alt text for images, ensuring keyboard accessibility.</li>
              <li><strong>Priority 2 (Important):</strong> Checkpoints that a web content developer <em>should</em> satisfy. Failure to meet these makes it difficult for users with disabilities to access information. Examples: avoiding deprecated HTML elements, providing skip navigation links.</li>
              <li><strong>Priority 3 (Beneficial):</strong> Checkpoints that a web content developer <em>may</em> address. Meeting these improves accessibility but is not essential for basic access. Examples: providing summaries for complex tables, using clear and simple language.</li>
            </ul>
            <p><strong>Conformance Levels:</strong></p>
            <ul>
              <li><strong>Level A:</strong> All Priority 1 checkpoints satisfied</li>
              <li><strong>Level AA (Double-A):</strong> All Priority 1 and Priority 2 checkpoints satisfied</li>
              <li><strong>Level AAA (Triple-A):</strong> All Priority 1, 2, and 3 checkpoints satisfied</li>
            </ul>
            <p><strong>Impact:</strong> WCAG 1.0 transformed web accessibility from ad-hoc practices to systematic, measurable standards. It provided the first comprehensive framework for creating accessible web content and influenced legislation in multiple countries, including Section 508 in the United States.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaGavel style={{ marginRight: '8px', color: '#0066cc' }} />2000s: Legal Framework Expansion</h3>
            <p>The Americans with Disabilities Act (ADA) began being applied to websites. Major lawsuits against Target (2006) and other companies established legal precedent for web accessibility requirements.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={{ marginRight: '8px', color: '#0066cc' }} />2008: WCAG 2.0 - Modern Standards</h3>
            <p>WCAG 2.0 introduced the POUR principles (Perceivable, Operable, Understandable, Robust) and the A, AA, AAA conformance levels still used today. This became the international standard (ISO/IEC 40500).</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaMobile style={{ marginRight: '8px', color: '#0066cc' }} />2010s: Mobile & Modern Web</h3>
            <p>Accessibility guidelines expanded to cover mobile apps, touch interfaces, and dynamic web applications. ARIA (Accessible Rich Internet Applications) specifications matured to support complex web widgets.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaRocket style={{ marginRight: '8px', color: '#0066cc' }} />2018-Present: WCAG 2.1 & Beyond</h3>
            <p>WCAG 2.1 added mobile-specific criteria and cognitive accessibility improvements. The European Accessibility Act (2025) and growing litigation continue to drive adoption. WCAG 3.0 is in development with new testing methods.</p>
          </div>
        </WCAGPrinciple>
      </Section>

      <Section>
        <h2 id="compliance-framework">WCAG/VPAT ADA Software Compliance Framework</h2>
        <p>Understanding the relationship between WCAG guidelines, VPAT documentation, and ADA compliance is crucial for organizations implementing accessibility standards:</p>
       
        <WCAGPrinciple>
          <div>
            <h3><FaGavel style={{ marginRight: '8px', color: '#0066cc' }} />Americans with Disabilities Act (ADA)</h3>
            <p><strong>What is the ADA?</strong> The ADA is a law from 1990 that says people with disabilities cannot be discriminated against. Even though it was written before websites existed, judges now say websites must follow ADA rules too.</p>
           
            <p><strong>Who must follow ADA rules:</strong></p>
            <ul>
              <li><strong>Government websites:</strong> All city, state, and local government sites must be accessible to everyone</li>
              <li><strong>Public businesses:</strong> Hotels, restaurants, stores, banks, and other businesses open to the public</li>
              <li><strong>What courts expect:</strong> Most judges use WCAG 2.1 Level AA as the standard to decide if a website is accessible enough</li>
            </ul>
           
            <p><strong>Why this matters:</strong> If your website isn't accessible, people with disabilities can sue you. Many businesses have been sued and had to pay thousands of dollars in legal fees and settlements.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={{ marginRight: '8px', color: '#ff9800' }} />VPAT (Voluntary Product Accessibility Template)</h3>
            <p><strong>What is a VPAT?</strong> A VPAT is like a report card that shows how accessible your website or software is. It's a form that lists all the accessibility rules and tells you which ones your product follows and which ones it doesn't.</p>
           
            <p><strong>Why do you need a VPAT:</strong></p>
            <ul>
              <li><strong>Government sales:</strong> If you want to sell to the government, they require a VPAT before they'll buy from you</li>
              <li><strong>Big company sales:</strong> Many large companies also ask for VPATs before purchasing software</li>
              <li><strong>Legal protection:</strong> Having a VPAT shows you're taking accessibility seriously</li>
              <li><strong>Planning tool:</strong> It helps you see what accessibility problems you need to fix</li>
            </ul>
           
            <p><strong>How it works:</strong> The VPAT goes through each WCAG rule and you mark whether your product "Supports," "Partially Supports," "Does Not Support," or if the rule "Not Applicable" to your product. Be honest - lying on a VPAT can get you in legal trouble.</p>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaRocket style={{ marginRight: '8px', color: '#dc3545' }} />Business Impact & Risk Management</h3>
            <ul>
              <li><strong>Legal Risk:</strong> ADA lawsuits increased 320% from 2013-2018, with settlements ranging from $10K-$100K+</li>
              <li><strong>Market Access:</strong> 61 million U.S. adults have a disability, representing $13.4 trillion in annual disposable income globally</li>
              <li><strong>Procurement Requirements:</strong> Federal agencies and many corporations require VPAT documentation for software purchases</li>
              <li><strong>SEO Benefits:</strong> Accessible websites typically have better search engine rankings and performance metrics</li>
              <li><strong>Brand Reputation:</strong> Accessibility demonstrates corporate social responsibility and inclusive values</li>
            </ul>
          </div>
        </WCAGPrinciple>











        <p>
          💡 <strong>Key Takeaway:</strong> WCAG provides the technical how-to, ADA provides the legal why, and VPAT provides the documentation framework. Together, they create a comprehensive approach to digital accessibility compliance that protects organizations legally while expanding market reach and demonstrating inclusive values.
        </p>

        <p>
          🎯 <strong>Success Metrics:</strong> Track accessibility progress through automated testing scores, user feedback, reduced customer service accessibility requests, and improved task completion rates across all user groups. Effective accessibility programs show measurable improvements in both compliance metrics and user experience indicators.
        </p>
      </Section>

      <Section>
        <h2 id="testing-tools">Accessibility Testing Tools Comparison</h2>
        <p>Testing tools help ensure compliance with WCAG standards and improve overall accessibility:</p>
       
        <Table
          role="table"
          tabIndex="0"
          aria-labelledby="testing-tools-heading"
          aria-describedby="testing-tools-summary"
        >
          <caption id="testing-tools-summary" style={{paddingBottom: '1rem'}}>Comparison of accessibility testing tools with their features, advantages, and limitations</caption>
          <thead>
            <tr>
              <th scope="col" id="tool-col">Tool</th>
              <th scope="col" id="features-col">Key Features</th>
              <th scope="col" id="pros-col">Pros</th>
              <th scope="col" id="cons-col">Cons</th>
            </tr>
          </thead>
          <tbody>
            {testingTools.map((tool, index) => (
              <tr key={index}>
                <td headers="tool-col">
                  <strong>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{color: '#0066cc', textDecoration: 'none'}}>
                      {tool.tool}
                    </a>
                  </strong>
                </td>
                <td headers="features-col">{tool.features}</td>
                <td headers="pros-col">{tool.pros}</td>
                <td headers="cons-col">{tool.cons}</td>
              </tr>
            ))})
          </tbody>
        </Table>
      </Section>

      <Section>
        <h2 id="storybook-plugin"><FaBook style={{ marginRight: '8px', color: '#0066cc' }} />Storybook Accessibility Plugin</h2>
        <p>The Storybook a11y addon is a powerful tool for testing component accessibility during development, providing real-time feedback and visual indicators:</p>
       
        <WCAGPrinciple>
          <div>
            <h3><FaCog style={{ marginRight: '8px', color: '#0066cc' }} />Installation & Setup</h3>
            <p>Install the addon and configure it in your Storybook project to get instant accessibility feedback on your components.</p>
          </div>
        </WCAGPrinciple>

        <CodeBlock>
          <code>{`# Install the addon
npm install --save-dev @storybook/addon-a11y

# Add to .storybook/main.js
module.exports = {
  addons: ['@storybook/addon-a11y']
};

# Configure in .storybook/preview.js
export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true
  }
};`}</code>
        </CodeBlock>

        <WCAGPrinciple>
          <div>
            <h3><FaCheckCircle style={{ marginRight: '8px', color: '#0066cc' }} />Key Features</h3>
            <ul>
              <li><strong>Real-time Testing:</strong> Automatic accessibility checks as you develop components</li>
              <li><strong>Visual Indicators:</strong> Highlights accessibility violations directly in the UI</li>
              <li><strong>Detailed Reports:</strong> Comprehensive breakdown of WCAG compliance issues</li>
              <li><strong>Interactive Fixes:</strong> Suggests specific remediation steps for each violation</li>
              <li><strong>Color Contrast Analysis:</strong> Built-in contrast ratio checking and reporting</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={{ marginRight: '8px', color: '#ff9800' }} />Visual Accessibility Panel</h3>
            <p>The addon provides a dedicated panel in Storybook that shows:</p>
            <ul>
              <li>🔴 <strong>Violations:</strong> Critical accessibility issues that must be fixed</li>
              <li>🟡 <strong>Incomplete:</strong> Elements that need manual review or additional context</li>
              <li>🟢 <strong>Passes:</strong> Successfully validated accessibility rules</li>
            </ul>
            <p><em>💡 Pro Tip: Use the "Highlight results" feature to visually identify problematic elements in your component.</em></p>
          </div>
        </WCAGPrinciple>

        <CodeBlock>
          <code>{`// Example Story with a11y configuration
export default {
  title: 'Button',
  component: Button,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true
          }
        ]
      }
    }
  }
};

// Story that will be tested for accessibility
export const AccessibleButton = () => (
  <Button
    aria-label="Submit form"
    role="button"
    tabIndex={0}
  >
    Submit
  </Button>
);`}</code>
        </CodeBlock>

        <p><strong>Integration Benefits:</strong> By integrating accessibility testing directly into your component development workflow, you catch and fix issues early, ensuring your design system components are accessible by default.</p>
       
        <p>
          📚 <strong>Learn More:</strong> Check out the official{' '}
          <a
            href="https://storybook.js.org/docs/writing-tests/accessibility-testing#accessibility-checks-with-a11y-addon"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Storybook Accessibility Testing Documentation
          </a>{' '}
          for comprehensive setup guides and advanced configuration options.
        </p>
      </Section>

      <Section>
        <h2 id="screen-readers">Screen Readers for Accessibility Testing</h2>
        <p>Testing with screen readers is essential for ensuring your site works with assistive technology:</p>
       
        <Table
          role="table"
          tabIndex="0"
          aria-labelledby="screen-readers-heading"
          aria-describedby="screen-readers-summary"
        >
          <caption id="screen-readers-summary" style={{paddingBottom: '1rem'}}>Screen reader software by platform with their key strengths for accessibility testing</caption>
          <thead>
            <tr>
              <th scope="col" id="reader-col">Screen Reader</th>
              <th scope="col" id="platform-col">Platform</th>
              <th scope="col" id="strengths-col">Strengths</th>
            </tr>
          </thead>
          <tbody>
            {screenReaders.map((reader, index) => (
              <tr key={index}>
                <td headers="reader-col">
                  <strong>
                    <a href={reader.url} target="_blank" rel="noopener noreferrer" style={{color: '#0066cc', textDecoration: 'none'}}>
                      {reader.reader}
                    </a>
                  </strong>
                </td>
                <td headers="platform-col">{reader.platform}</td>
                <td headers="strengths-col">{reader.strengths}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <h2 id="conclusion-heading">Conclusion</h2>
        <p>
          Accessibility is not optional—it's essential. By following WCAG guidelines, using semantic HTML,
          and testing thoroughly with both automated tools and screen readers, you create a web experience that works for everyone.
        </p>
        <p>
          Remember that accessibility is an ongoing process, not a one-time checklist.
          Regular testing and staying updated with evolving standards will help you maintain an inclusive digital experience.
        </p>
      </Section>

      <Section>
        <h2 id="references-heading">References & Resources</h2>
        <p>Comprehensive documentation and guidelines to support your accessibility journey:</p>
       
        <WCAGPrinciple>
          <div>
            <h3><FaCode style={{ marginRight: '8px', color: '#0066cc' }} />WCAG Official Documentation</h3>
            <ul>
              <li><strong><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" style={linkStyle}>WCAG 2.1 Quick Reference</a>:</strong> Interactive checklist with techniques and examples</li>
              <li><strong><a href="https://www.w3.org/WAI/WCAG22/Understanding/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Understanding WCAG 2.2</a>:</strong> Detailed explanations of each success criterion</li>
              <li><strong><a href="https://www.w3.org/WAI/WCAG22/Techniques/" target="_blank" rel="noopener noreferrer" style={linkStyle}>WCAG 2.2 Techniques</a>:</strong> Technical implementation methods and code examples</li>
              <li><strong><a href="https://www.w3.org/WAI/test-evaluate/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Testing & Evaluation Resources</a>:</strong> W3C testing methodologies and tools</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaGavel style={{ marginRight: '8px', color: '#0066cc' }} />Legal & ADA Resources</h3>
            <ul>
              <li><strong><a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" style={linkStyle}>ADA.gov Official Site</a>:</strong> U.S. Department of Justice ADA information and guidance</li>
              <li><strong><a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Section 508 Compliance</a>:</strong> Federal accessibility requirements and resources</li>
              <li><strong><a href="https://www.dol.gov/agencies/ofccp/about/compliance-assistance/disability" target="_blank" rel="noopener noreferrer" style={linkStyle}>DOL Disability Resources</a>:</strong> Department of Labor compliance assistance</li>
              <li><strong><a href="https://usabilitygeek.com/ada-website-compliance-guide/" target="_blank" rel="noopener noreferrer" style={linkStyle}>ADA Website Compliance Guide</a>:</strong> Comprehensive legal compliance overview</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaExclamationTriangle style={{ marginRight: '8px', color: '#ff9800' }} />VPAT Templates & Guidance</h3>
            <ul>
              <li><strong><a href="https://www.itic.org/policy/accessibility/vpat" target="_blank" rel="noopener noreferrer" style={linkStyle}>Official VPAT Templates</a>:</strong> ITI consortium's standardized VPAT formats</li>
              <li><strong><a href="https://www.section508.gov/sell/vpat/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Section 508 VPAT Guidance</a>:</strong> Government guidance on completing VPATs</li>
              <li><strong><a href="https://www.levelaccess.com/blog/vpat-guide/" target="_blank" rel="noopener noreferrer" style={linkStyle}>VPAT Completion Guide</a>:</strong> Step-by-step instructions for creating accurate VPATs</li>
              <li><strong><a href="https://www.tpgi.com/vpat-and-act-reporting/" target="_blank" rel="noopener noreferrer" style={linkStyle}>VPAT Best Practices</a>:</strong> Professional guidance for VPAT accuracy and compliance</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaBook style={{ marginRight: '8px', color: '#0066cc' }} />Developer Resources & Guides</h3>
            <ul>
              <li><strong><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" target="_blank" rel="noopener noreferrer" style={linkStyle}>MDN Web Accessibility Guide</a>:</strong> Comprehensive developer documentation on web accessibility implementation</li>
              <li><strong><a href="https://medium.com/offmessageorg/why-githubs-war-on-toasts-is-bad-news-for-accessibility-a88ddbad43b7" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub's War on Toasts and Accessibility</a>:</strong> Critical analysis of UI patterns and their accessibility implications</li>
              <li><strong><a href="https://storybook.js.org/docs/writing-tests/accessibility-testing#accessibility-checks-with-a11y-addon" target="_blank" rel="noopener noreferrer" style={linkStyle}>Storybook Accessibility Testing Documentation</a>:</strong> Component-level accessibility testing integration</li>
              <li><strong><a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>W3C Markup Validator</a>:</strong> HTML validation for semantic correctness</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <WCAGPrinciple>
          <div>
            <h3><FaCog style={{ marginRight: '8px', color: '#0066cc' }} />Testing Tools & Resources</h3>
            <ul>
              <li><strong><a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer" style={linkStyle}>WebAIM Contrast Checker</a>:</strong> Online tool for color contrast validation</li>
              <li><strong><a href="https://developer.chrome.com/docs/devtools/accessibility/contrast/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Chrome DevTools Accessibility</a>:</strong> Built-in browser accessibility testing features</li>
              <li><strong><a href="https://www.deque.com/axe/devtools/" target="_blank" rel="noopener noreferrer" style={linkStyle}>axe DevTools</a>:</strong> Browser extension for comprehensive accessibility auditing</li>
              <li><strong><a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer" style={linkStyle}>WAVE Web Accessibility Evaluation Tool</a>:</strong> Visual accessibility testing with overlay feedback</li>
            </ul>
          </div>
        </WCAGPrinciple>

        <p style={{marginTop: '1.5rem', fontStyle: 'italic', color: '#444'}}>
          <strong>Note:</strong> Accessibility standards and best practices continue to evolve.
          Regularly check these resources for the latest updates and guidelines to ensure your implementations remain current and compliant.
        </p>
       
        <div style={{textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e1e1e1'}}>
          <a
            href="#page-title"
            className="back-to-top"
            aria-label="Go back to the top of the page"
          >
            <FaRocket aria-hidden="true" />
            Go to Top
          </a>
        </div>
      </Section>
      </main>
    </Layout>
  );
}