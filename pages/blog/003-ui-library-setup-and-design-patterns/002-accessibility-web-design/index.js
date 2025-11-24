import Layout from '../../../../components/Layout';
import styled from 'styled-components';
import { FaUniversalAccess, FaEye, FaEar, FaKeyboard, FaCode, FaCheckCircle, FaExclamationTriangle, FaUsers } from 'react-icons/fa';
import { DiHtml5, DiCss3 } from 'react-icons/di';
import { SiW3C } from 'react-icons/si';

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
 
  th, td {
    padding: 12px;
    border: 1px solid #e1e1e1;
    text-align: left;
  }

  th {
    background: #f5f5f5;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background: #f9f9f9;
  }
`;

const IconBox = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  padding: 15px;
  margin: 5px 0;
  background: #f8f9fa;
`;

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
 
  code {
    background-color: black
    color: white;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
  }
`;

const MetricsCard = styled.div`
  background: #f0f8ff;
  // border: 1px solid #0066cc;
  padding: 1.25rem;
  border-radius: 6px;
  margin: 1.5rem 0;
`;

const WCAGPrinciple = styled.div`
  background: #f0f8ff;
  border: 1px solid #0066cc;
  border-radius: 6px;
  padding: 15px;
  margin: 10px 0;
 
  h3 {
    color: #0066cc;
    margin-top: 0;
  }
`;

// Export metadata for the blog post
export const meta = {
  title: "Accessibility in Web Design: A Complete Guide",
  description: "A comprehensive guide to creating inclusive web experiences through accessibility best practices, WCAG guidelines, and practical implementation",
  date: "2025-11-23",
  readTime: 18
};

const AccessibilityGuide = () => {

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
      usage: "Essential baseline requirements",
      color: "#28a745"
    },
    {
      level: "AA",
      description: "Industry standard (recommended for most businesses)",
      usage: "Most common target for businesses",
      color: "#ffc107"
    },
    {
      level: "AAA",
      description: "Highest level (for government agencies and essential services)",
      usage: "Government and critical services",
      color: "#dc3545"
    }
  ];

  const testingTools = [
    {
      tool: "axe DevTools",
      features: "Browser extension, CI/CD integration, WCAG A/AA/AAA checks",
      pros: "High accuracy, actionable fixes, integrates with GitHub Actions",
      cons: "Requires technical knowledge"
    },
    {
      tool: "WAVE (WebAIM)",
      features: "Visual overlay of issues, browser extension, API",
      pros: "Beginner-friendly, color-coded feedback",
      cons: "Struggles with dynamic content"
    },
    {
      tool: "Google Lighthouse",
      features: "Built into Chrome DevTools, audits performance + accessibility",
      pros: "Free, easy to run",
      cons: "Limited depth for complex ARIA issues"
    },
    {
      tool: "Accessibility Insights",
      features: "Automated + guided manual tests, keyboard trap detection",
      pros: "Great for learning, free",
      cons: "Manual steps can be time-consuming"
    },
    {
      tool: "Pa11y",
      features: "CLI tool for automated WCAG checks",
      pros: "Ideal for CI/CD pipelines",
      cons: "Requires command-line knowledge"
    },
    {
      tool: "BrowserStack",
      features: "Real device testing, screen reader simulation",
      pros: "Comprehensive, integrates with agile workflows",
      cons: "Paid tool"
    }
  ];

  const screenReaders = [
    {
      reader: "JAWS",
      platform: "Windows",
      strengths: "Industry standard, robust for enterprise testing"
    },
    {
      reader: "NVDA",
      platform: "Windows",
      strengths: "Free, widely used, great for developers"
    },
    {
      reader: "VoiceOver",
      platform: "macOS/iOS",
      strengths: "Native on Apple devices, good for mobile testing"
    },
    {
      reader: "TalkBack",
      platform: "Android",
      strengths: "Native on Android, essential for mobile apps"
    }
  ];

  return (
    <Layout>
      <Section>
        <h1>Accessibility in Web Design: A Complete Guide</h1>
        <p>
          <strong>Published:</strong> November 23, 2025 • <strong>Read time:</strong> 18 minutes
        </p>
       
        <MetricsCard>
          <h2>🌐 What is Accessibility?</h2>
          <p>
            Accessibility ensures that websites and applications are usable by everyone, including people
            with disabilities. It's about creating an inclusive digital experience where no one is left behind.
          </p>
        </MetricsCard>
      </Section>

      <Section>
        <h2>Why Does Accessibility Matter?</h2>
        <GridContainer>
          <IconBox>
            <IconBoxHeader>
              
              <h3><FaCheckCircle size={20} /> Legal Compliance</h3>
            </IconBoxHeader>
            <p>Many countries have laws requiring accessible websites</p>
          </IconBox>
          <IconBox>
            <IconBoxHeader>
              
              <h3><FaUsers size={20} /> Better UX</h3>
            </IconBoxHeader>
            <p>Accessibility improves usability for all users</p>
          </IconBox>
          <IconBox>
            <IconBoxHeader>
              
              <h3><FaCode size={20} /> SEO Benefits</h3>
            </IconBoxHeader>
            <p>Accessible sites often rank better in search engines</p>
          </IconBox>
          <IconBox>
            <IconBoxHeader>
              
              <h3><FaUniversalAccess size={20} /> Social Responsibility</h3>
            </IconBoxHeader>
            <p>It's the right thing to do</p>
          </IconBox>
        </GridContainer>
      </Section>

      <Section>
        <h2>Web Content Accessibility Guidelines (WCAG)</h2>
        <p>
          Published by W3C, WCAG provides a technical checklist for accessibility.
          It is based on four fundamental principles:
        </p>
       
        {wcagPrinciples.map((principle, index) => (
          <WCAGPrinciple key={index}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
            <p><strong>Examples:</strong> {principle.examples.join(', ')}</p>
          </WCAGPrinciple>
        ))}
      </Section>

      <Section>
        <h2>Levels of Conformance</h2>
        <Table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Description</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            {conformanceLevels.map((level, index) => (
              <tr key={index}>
                <td><strong style={{color: level.color}}>{level.level}</strong></td>
                <td>{level.description}</td>
                <td>{level.usage}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <h2>Semantic HTML Example</h2>
         <p>Use proper HTML elements for their intended purpose and provide meaning to content</p>
        <p>HTML5 introduced meaningful tags that improve accessibility:</p>
       
        <CodeBlock>
          <code>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Accessible Page</title>
  </head>
  <body>
    <header>
      <h1>Website Title</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
    <main>
      <article>
        <h2>Article Heading</h2>
        <p>Content goes here...</p>
      </article>
      <aside>
        <p>Sidebar info...</p>
      </aside>
    </main>
    <footer>
      <p>&copy; 2025 Accessibility Blog</p>
    </footer>
  </body>
</html>`}</code>
        </CodeBlock>
      </Section>

      <Section>
        <h2>Color Contrast CSS Example</h2>
        <p>Proper color contrast is essential for WCAG compliance:</p>
       
        <CodeBlock>
          <code>{`/* WCAG AA Contrast Example */
          body {
            color: #000;
            background-color: #fff; // white background
          }

          .button {
            background-color: #0055aa; // dark blue
            color: #fff;
            padding: 10px;
          }

/* Ensure sufficient contrast ratio:
 * Normal text: 4.5:1 (AA), 7:1 (AAA)
 * Large text: 3:1 (AA), 4.5:1 (AAA)
 */`}</code>
        </CodeBlock>
      </Section>

      <Section>
        <h2>ARIA Example</h2>
        <p>ARIA (Accessible Rich Internet Applications) enhances accessibility for dynamic content:</p>
       
        <CodeBlock>
          <code>{`<!-- Accessible button using ARIA -->
<button aria-disabled="true">Submit</button>

<!-- Live region for alerts -->
<div aria-live="polite">Form submitted successfully!</div>

<!-- ARIA roles -->
<nav role="navigation">Main Navigation</nav>

<!-- ARIA labels for better context -->
<button aria-label="Close dialog" onclick="closeModal()">×</button>`}</code>
        </CodeBlock>
      </Section>

      <Section>
        <h2>Forms Accessibility</h2>
        <p>Forms are critical for user interaction. Accessible forms ensure that users with disabilities can input data effectively:</p>
       
        <ul>
          <li>Always pair inputs with <code>&lt;label&gt;</code> tags</li>
          <li>Placeholders are hints, not replacements for labels</li>
          <li>Avoid disabling buttons; provide feedback instead</li>
          <li>Use <code>aria-describedby</code> and <code>aria-labelledby</code> for additional context</li>
        </ul>

        <CodeBlock>
          <code>{`<form>
  <label for="dob">Date of Birth</label>
  <input
    id="dob"
    name="dob"
    type="text"
    placeholder="DD/MM/YYYY"
    aria-describedby="dobHelp"
    required
  />
  <small id="dobHelp">Enter date in DD/MM/YYYY format</small>
 
  <fieldset>
    <legend>Preferred Contact Method</legend>
    <input type="radio" id="email" name="contact" value="email">
    <label for="email">Email</label>
    <input type="radio" id="phone" name="contact" value="phone">
    <label for="phone">Phone</label>
  </fieldset>
</form>`}</code>
        </CodeBlock>
      </Section>

      <Section>
        <h2>Links and Buttons</h2>
        <p>Links and buttons must be distinguishable and descriptive:</p>
       
        <ul>
          <li>Use <code>&lt;a&gt;</code> for navigation and <code>&lt;button&gt;</code> for actions</li>
          <li>Avoid vague text like 'Click here'; use descriptive labels</li>
          <li>Underline links and provide visited states</li>
          <li>Never rely on color alone to indicate clickable elements</li>
        </ul>

        <CodeBlock>
          <code>{`<!-- Good examples -->
<a href="/about">Learn more about accessibility</a>
<button type="submit">Submit Form</button>

<!-- Bad examples -->
<a href="/about">Click here</a>
<div onclick="submit()">Submit</div>`}</code>
        </CodeBlock>
      </Section>

      <Section>
        <h2>Audio & Video Accessibility</h2>
        <p>Audio and video content must be accessible to users with hearing or vision impairments:</p>
       
        <ul>
          <li>Provide captions for all videos</li>
          <li>Offer transcripts for audio content</li>
          <li>Avoid autoplay; allow user control</li>
          <li>Ensure video players have accessible controls</li>
        </ul>

        <CodeBlock>
          <code>{`<video controls>
  <source src="example.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="example.mp3" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>

<!-- Always provide a transcript link -->
<p><a href="transcript.html">Full transcript available</a></p>`}</code>
        </CodeBlock>
      </Section>

      <Section>
        <h2>Accessibility Testing Tools Comparison</h2>
        <p>Testing tools help ensure compliance with WCAG standards and improve overall accessibility:</p>
       
        <Table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Key Features</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            {testingTools.map((tool, index) => (
              <tr key={index}>
                <td><strong>{tool.tool}</strong></td>
                <td>{tool.features}</td>
                <td>{tool.pros}</td>
                <td>{tool.cons}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Section>
        <h2>Screen Readers for Accessibility Testing</h2>
        <p>Testing with screen readers is essential for ensuring your site works with assistive technology:</p>
       
        <Table>
          <thead>
            <tr>
              <th>Screen Reader</th>
              <th>Platform</th>
              <th>Strengths</th>
            </tr>
          </thead>
          <tbody>
            {screenReaders.map((reader, index) => (
              <tr key={index}>
                <td><strong>{reader.reader}</strong></td>
                <td>{reader.platform}</td>
                <td>{reader.strengths}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      {/* <Section>
        <h2>Best Practices Summary</h2>
        <GridContainer>
          <IconBox>
            <IconBoxHeader>
              <DiHtml5 size={20} />
              <h3>Semantic HTML</h3>
            </IconBoxHeader>
            <p>Use proper HTML elements for their intended purpose and provide meaning to content</p>
          </IconBox>
          <IconBox></IconBox>
          </GridContainer>
          </Section> */}
          </Layout>
  );
}

export default AccessibilityGuide;