// Market insights data
const insights = {
    "Etsy+Digital Products": {
        marketSize: "$13.3B creative market",
        avgRevenue: "$2,400/month for top sellers",
        successRate: "73% of sellers make first sale within 30 days",
        keyMetric: "Average 4.2x ROI on Etsy ads"
    },
    "Etsy+Printables": {
        marketSize: "$44.85B print-on-demand market",
        avgRevenue: "$1,800/month for established shops",
        successRate: "89% of printable sellers are profitable",
        keyMetric: "Top shops earn $10K+/month"
    },
    "Etsy+Courses": {
        marketSize: "$350B online learning market",
        avgRevenue: "$3,200/month for course creators",
        successRate: "67% reach profitability in 60 days",
        keyMetric: "Courses have 85% profit margins"
    },
    "Etsy+Books": {
        marketSize: "$26B self-publishing market",
        avgRevenue: "$1,500/month for active authors",
        successRate: "52% of authors earn $1K+ monthly",
        keyMetric: "Ebook sales growing 12% annually"
    },
    "Amazon KDP+Books": {
        marketSize: "$1.7B KDP marketplace",
        avgRevenue: "$2,100/month top 10% authors",
        successRate: "34% reach $500/month within 6 months",
        keyMetric: "Amazon captures 67% of ebook sales"
    },
    "Gumroad+Digital Products": {
        marketSize: "$57B creator economy",
        avgRevenue: "$3,100/month for top creators",
        successRate: "81% make first $100 in 14 days",
        keyMetric: "95% profit margins typical"
    },
    "Shopify+Digital Products": {
        marketSize: "$24B ecommerce tools market",
        avgRevenue: "$5,100/month for digital stores",
        successRate: "68% reach $1K/month in 60 days",
        keyMetric: "Own your customer data 100%"
    }
};

// Action plans data (simplified for demo)
const plans = {
    "Etsy+Digital Products": [
        {
            phase: "Market Research & Niche Selection",
            tasks: [
                "Use eRank or Marmalead to analyze 50+ top-selling digital products in your potential niches",
                "Identify 3 profitable sub-niches with low competition (under 10K results) but high demand (1K+ favorites)",
                "Study competitor pricing: document 20 successful shops, their price points ($5-$50 range), and what makes them stand out",
                "Create buyer personas: survey potential customers in Facebook groups, Reddit, or Discord communities"
            ],
            timeEstimate: "6-8 hours",
            proTip: "💡 Pro shops focus on micro-niches with passionate audiences willing to pay premium prices",
            expectedOutcome: "Clear profitable niche with validated demand and competitive pricing strategy"
        },
        {
            phase: "Product Creation & Brand Development", 
            tasks: [
                "Design 5 high-value digital products using Canva Pro, Adobe Creative Suite, or Figma",
                "Create cohesive brand identity: logo, color palette, fonts, and style guide using brand kit tools",
                "Develop product mockups and lifestyle images showing your digital products in use",
                "Write compelling product descriptions using AIDA framework and incorporate emotional triggers"
            ],
            timeEstimate: "10-12 hours",
            proTip: "💡 Bundle complementary products together to increase average order value by 40%",
            expectedOutcome: "Professional product line with consistent branding that builds trust and commands higher prices"
        },
        {
            phase: "Etsy Shop Setup & Optimization",
            tasks: [
                "Set up complete Etsy shop: compelling banner, detailed about section with your story, shop policies",
                "Optimize all 13 tags per listing using long-tail keywords from your research",
                "Upload products with 10 high-quality images each, including size guides and usage examples",
                "Configure shop settings: processing times, shipping profiles, return policies, and payment methods"
            ],
            timeEstimate: "8-10 hours",
            proTip: "💡 Shops with complete profiles get 3x more traffic than incomplete ones",
            expectedOutcome: "Professional shop that converts browsers into buyers with optimized SEO"
        },
        {
            phase: "Launch Strategy & Initial Promotion",
            tasks: [
                "Launch with Etsy Ads: start with $5/day budget targeting your researched keywords",
                "Create Pinterest business account and design 20 eye-catching pins linking to your products",
                "Share in 10 relevant Facebook groups, subreddits, and Discord servers (follow community rules)",
                "Reach out to 5 micro-influencers in your niche for potential collaborations or features"
            ],
            timeEstimate: "6-8 hours",
            proTip: "💡 First 48 hours are crucial - Etsy's algorithm favors new listings with early engagement",
            expectedOutcome: "Strong launch momentum with multiple traffic sources driving initial sales"
        },
        {
            phase: "Performance Analysis & Scaling Preparation",
            tasks: [
                "Install Google Analytics and Facebook Pixel to track customer behavior and conversions",
                "Analyze Etsy Stats: identify top-performing products, traffic sources, and customer demographics",
                "Collect and respond to all customer feedback, implement suggested improvements",
                "Plan next product releases based on customer requests and market gaps you've identified"
            ],
            timeEstimate: "4-6 hours",
            proTip: "💡 Successful sellers release new products every 2-3 weeks to maintain momentum",
            expectedOutcome: "Data-driven insights for scaling and clear roadmap for continued growth"
        }
    ],
    "Etsy+Printables": [
        {
            phase: "Printables Market Research & Trend Analysis",
            tasks: [
                "Analyze 100+ top-selling printables using eRank: identify seasonal trends, popular formats, and pricing sweet spots",
                "Research Pinterest trends using Pinterest Trends tool and Tailwind to find viral printable ideas",
                "Study successful printable shops: document their product mix, pricing ($3-$25), and customer reviews",
                "Join printable seller Facebook groups and Discord servers to understand current market demands"
            ],
            timeEstimate: "8-10 hours",
            proTip: "💡 Planners and organizational printables consistently outperform decorative ones by 300%",
            expectedOutcome: "Validated printable niches with proven demand and optimal pricing strategy"
        },
        {
            phase: "High-Converting Printable Design",
            tasks: [
                "Create 15 printables using Canva Pro or Creative Fabrica: focus on planners, worksheets, and organizational tools",
                "Design in multiple formats: US Letter, A4, and mobile-friendly sizes for maximum market reach",
                "Develop matching sets and bundles: create cohesive collections that encourage multiple purchases",
                "Test print quality on different paper types and printers to ensure customer satisfaction"
            ],
            timeEstimate: "12-15 hours",
            proTip: "💡 Customers pay 60% more for printables that come in multiple formats and color variations",
            expectedOutcome: "Professional printable collection ready for immediate sale with proven print quality"
        },
        {
            phase: "Etsy Listing Optimization & SEO",
            tasks: [
                "Write SEO-optimized titles using keyword research: include primary keyword + modifiers + benefits",
                "Create 10 high-quality mockup images per listing showing printables in realistic settings",
                "Utilize all 13 tags with long-tail keywords, seasonal terms, and buyer intent phrases",
                "Write detailed descriptions explaining exactly what customers get, how to use it, and print instructions"
            ],
            timeEstimate: "6-8 hours",
            proTip: "💡 Listings with lifestyle mockups convert 4x better than plain product shots",
            expectedOutcome: "Highly optimized listings that rank well in Etsy search and convert visitors to sales"
        },
        {
            phase: "Pinterest Marketing & Traffic Generation",
            tasks: [
                "Set up Pinterest Business account with keyword-optimized profile and rich pins enabled",
                "Create 50 Pinterest-optimized pins using vertical format (2:3 ratio) with text overlays",
                "Schedule pins using Tailwind: post 15-20 pins daily to relevant group boards and your own boards",
                "Engage with Pinterest community: follow, like, and comment on pins in your niche daily"
            ],
            timeEstimate: "10-12 hours",
            proTip: "💡 Pinterest drives 85% of traffic for successful printable shops - it's your secret weapon",
            expectedOutcome: "Automated Pinterest marketing system driving consistent free traffic to your Etsy shop"
        },
        {
            phase: "Customer Satisfaction & Business Scaling",
            tasks: [
                "Set up customer support system: create FAQ document, response templates, and clear communication process",
                "Implement customer feedback loop: survey buyers for product requests and improvement suggestions",
                "Track key metrics: conversion rates, traffic sources, bestselling products, and seasonal patterns",
                "Plan product expansion: develop 10 new printable ideas based on customer requests and market trends"
            ],
            timeEstimate: "6-8 hours",
            proTip: "💡 Happy customers leave reviews and come back - focus on over-delivering value",
            expectedOutcome: "Sustainable business system with loyal customers and clear growth roadmap"
        }
    ]
};

// Default plan for combinations not in the detailed plans
const defaultPlan = [
    {
        phase: "Market Research & Setup",
        tasks: [
            "This combination requires the Pro Checklist for detailed action steps",
            "Get access to 21 days of specific, proven strategies",
            "Includes market research templates, competitor analysis tools, and launch checklists"
        ],
        timeEstimate: "Varies by strategy",
        proTip: "💡 Detailed strategies available in Pro Checklist",
        expectedOutcome: "Complete business launch system"
    }
];

// Generate checklist based on inputs
function generateChecklist(goal, category, platform, days) {
    if (!goal || !category || !platform || !days) return null;

    const key = `${platform}+${category}`;
    const selectedPlan = plans[key] || defaultPlan;
    const selectedInsights = insights[key] || {
        marketSize: "Multi-billion dollar opportunity",
        avgRevenue: "$2,000-$5,000/month potential",
        successRate: "65-80% achieve profitability",
        keyMetric: "High-margin digital business"
    };

    const freeDays = Math.min(parseInt(days), 5);
    return {
        insights: selectedInsights,
        plan: selectedPlan.slice(0, freeDays)
    };
}

// Generate PDF function
function generatePDF(goal, category, platform, checklist, insights) {
    if (!checklist) return;

    // Create downloadable text file (PDF library alternative)
    const content = `
WORK FLOW LAUNCH PAD - FREE 5-DAY ACTION PLAN
===============================================

Target: ${goal}/month with ${category} on ${platform}

MARKET INSIGHTS:
• Market Size: ${insights.marketSize}
• Average Revenue: ${insights.avgRevenue}
• Success Rate: ${insights.successRate}
• Key Metric: ${insights.keyMetric}

YOUR 5-DAY ACTION PLAN:
${checklist.plan.map((day, idx) => `
DAY ${idx + 1}: ${day.phase}
Time Needed: ${day.timeEstimate}
${day.proTip}

Tasks:
${day.tasks.map(task => `• ${task}`).join('\n')}

Expected Outcome: ${day.expectedOutcome}
`).join('\n')}

Ready for the complete 21-day system?
Get the Pro Checklist at: https://payhip.com/easyworkflows
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `WorkFlow-LaunchPad-${category}-${platform}-Plan.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Display insights in the UI
function displayInsights(insights) {
    const insightsGrid = document.getElementById('insights-grid');
    insightsGrid.innerHTML = `
        <div class="insight-item">
            <div class="insight-number" style="color: #2563eb">${insights.marketSize}</div>
            <div class="insight-label">Total Market Size</div>
        </div>
        <div class="insight-item">
            <div class="insight-number" style="color: #059669">${insights.avgRevenue}</div>
            <div class="insight-label">Top Performer Revenue</div>
        </div>
        <div class="insight-item">
            <div class="insight-number" style="color: #7c3aed">${insights.successRate}</div>
            <div class="insight-label">Success Rate</div>
        </div>
        <div class="insight-item">
            <div class="insight-number" style="color: #ea580c">${insights.keyMetric}</div>
            <div class="insight-label">Key Success Metric</div>
        </div>
    `;
}

// Display action plan in the UI
function displayPlan(plan) {
    const planContent = document.getElementById('plan-content');
    planContent.innerHTML = plan.map((day, idx) => `
        <div class="day-card">
            <div class="day-header">
                <h3 class="day-title">Day ${idx + 1}: ${day.phase}</h3>
                <div class="day-meta">
                    <span>⏱️ ${day.timeEstimate}</span>
                    <span class="pro-tip">${day.proTip}</span>
                </div>
            </div>
            
            <div class="task-list">
                <h4>Action Items:</h4>
                <ul>
                    ${day.tasks.map(task => `
                        <li class="task-item">
                            <span class="checkmark">✓</span>
                            <span>${task}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="expected-outcome">
                <span class="label">Expected Outcome: </span>
                <span class="text">${day.expectedOutcome}</span>
            </div>
        </div>
    `).join('');
}

// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    let currentChecklist = null;

    // Generate button click handler
    document.getElementById('generateBtn').addEventListener('click', function() {
        const goal = document.getElementById('goal').value;
        const category = document.getElementById('category').value;
        const platform = document.getElementById('platform').value;
        const days = document.getElementById('days').value;

        currentChecklist = generateChecklist(goal, category, platform, days);

        if (currentChecklist) {
            // Hide default message and show results
            document.getElementById('defaultMessage').style.display = 'none';
            document.getElementById('results').style.display = 'block';

            // Display the results
            displayInsights(currentChecklist.insights);
            displayPlan(currentChecklist.plan);

            // Scroll to results
            document.getElementById('results').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Download PDF button handler
    document.getElementById('downloadBtn').addEventListener('click', function() {
        if (currentChecklist) {
            const goal = document.getElementById('goal').value;
            const category = document.getElementById('category').value;
            const platform = document.getElementById('platform').value;
            
            generatePDF(goal, category, platform, currentChecklist, currentChecklist.insights);
        }
    });

    // Email signup handler
    document.getElementById('emailBtn').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        if (email && email.includes('@')) {
            // Simple mailto for MVP - replace with proper email service later
            window.open(`mailto:hello@workflowlaunchpad.com?subject=Newsletter Signup&body=Please add ${email} to the newsletter list.`);
            alert('Thanks! We\'ll add you to our list soon.');
            document.getElementById('email').value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Limit days input to maximum 5
    document.getElementById('days').addEventListener('input', function() {
        if (this.value > 5) {
            this.value = 5;
        }
        if (this.value < 1) {
            this.value = 1;
        }
    });
});