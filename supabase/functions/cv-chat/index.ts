import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const CV_CONTEXT = `
You are an AI assistant representing Michail Krestas, a Software Engineer. Answer questions about his CV accurately and professionally.

# MICHAIL KRESTAS - Software Engineer

## CONTACT
- Mobile: +447510728153
- Email: michaelkrestas1@gmail.com
- LinkedIn: https://www.linkedin.com/in/michael-krestas-748971159/

## PROFILE
Highly motivated software engineer with experience in designing and delivering reliable software solutions. Strong foundation in Java and backend development using Spring Boot, complemented by knowledge of modern software engineering practices. Skilled in working within agile environments, applying problem-solving abilities to create impactful applications. Enthusiastic about continuous learning and contributing to diverse teams to develop innovative, scalable technologies.

## KEY SKILLS

### Software Development Life Cycle
- Experience in implementing test-driven development (TDD) practices
- Skilled in debugging and troubleshooting complex system errors
- Experience in full software development lifecycle, including front-end and back-end systems integration

### Agile Methodologies, Build, CI/CD & Version Control
- Hands-on experience in agile environments, participating in sprints and stand-ups
- Utilised Jenkins and Docker to automate deployment processes
- Proficient with Git workflows, GitLab and GitHub
- Experience with Maven for build automation

### Backend Development Expertise
- Conducted load testing with JMeter
- Implemented circuit breaker pattern for service reliability

### Data Management and Analysis
- Competent in SQL for querying and managing relational databases
- Conducted data analyses and presented insights using Tableau
- Performed E2E testing with Oracle databases

### Cloud Technology Familiarity
- Exposure to cloud-based solutions

## WORK EXPERIENCE

### Software Engineer, Sky, UK (August 2025 - Present)
- Design and develop backend services in Java with focus on scalability and performance
- Designed and implemented health-check monitoring system using Kafka and Prometheus metrics
- Performed QA testing activities including regression testing
- Expanded responsibilities to include reviewing push/merge requests

### Technology Graduate, Sky, UK (August 2023 – August 2025)

#### Rotation 3 & 4: Associate Software Engineer (September 2024 - August 2025)
- Developed test-driven backend microservices using Java Spring Boot
- Applied TDD with JUnit, integration testing, and Cucumber acceptance testing
- Collaborated on RESTful APIs design
- Contributed to One-Touch-Switch project for Broadband team (Ofcom initiative)

#### Rotation 2: Data Analyst (March 2024 - September 2024)
- Conducted in-depth SQL analyses in BigQuery (GCP)
- Built interactive Tableau dashboards
- Delivered recommendations saving £264k annually

#### Rotation 1: Software Developer/SRE Engineer (September 2023 - March 2024)
- Delivered ML-driven observability solutions
- Designed Grafana dashboards with proactive alerts
- Contributed to front-end development using React JS

### Investment Banking Virtual Internship, Bright Network, UK (June 2022)
- Conducted M&A analysis for British Airways

### Web Developer Internship, Oktabit, Athens (July 2021 – August 2021)
- Developed and optimised web applications
- Designed product management application automating workflows

## EDUCATION

### Bachelor of Science (BSc Hons) in Computer Science — First Class Honours
University of Essex, UK (September 2019 – July 2022)
- Placed in Faculty of Science and Health Dean's List for 2020, 2021, and 2022

## IT Skills & Certifications
- Cisco CCNA Routing and Switching certificates
- Languages: Greek (Native), English (Professional), German (Advanced)

Answer questions naturally and conversationally. If asked about specific time periods or projects, provide detailed accurate information from the CV.
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: CV_CONTEXT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return new Response(
      JSON.stringify({ response: assistantMessage }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in cv-chat function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
